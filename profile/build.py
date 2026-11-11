#!/usr/bin/env python3
"""Build the Source Code company profile PDF.

  python3 profile/build.py

Reads the site's own content (services, portfolio, contact details) from the
TypeScript data files, injects brand icons from react-icons, writes
profile/company-profile.html and renders it with headless Chrome to
public/downloads/Source-Code-IT-Solutions-Company-Profile.pdf
"""
import json, re, subprocess, sys, pathlib, datetime

ROOT = pathlib.Path(__file__).resolve().parent.parent
PROFILE = ROOT / "profile"
OUT_PDF = ROOT / "public" / "downloads" / "Source-Code-IT-Solutions-Company-Profile.pdf"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# ---------- icons from react-icons (same set the website uses) ----------
def icon_paths(pkg: str, names: list[str]) -> dict[str, str]:
    src = (ROOT / "node_modules" / "react-icons" / pkg / "index.js").read_text()
    out = {}
    for n in names:
        m = re.search(r"module\.exports\.%s = function.*?GenIcon\((\{.*?\})\)\(props\)" % n, src, re.S)
        if not m:
            raise SystemExit(f"icon {n} not found in react-icons/{pkg}")
        tree = json.loads(m.group(1))
        attr = tree.get("attr", {})
        inner = ""
        for ch in tree.get("child", []):
            a = " ".join(f'{k}="{v}"' for k, v in ch.get("attr", {}).items())
            inner += f"<{ch['tag']} {a}/>"
        vb = attr.get("viewBox", "0 0 24 24")
        fill = "currentColor" if pkg == "fa6" else attr.get("fill", "none")
        stroke = 'stroke="currentColor" stroke-width="1.6"' if fill == "none" else ""
        out[n] = f'<svg viewBox="{vb}" fill="{"currentColor" if fill != "none" else "none"}" {stroke}>{inner}</svg>'
    return out

HI = icon_paths("hi2", [
    "HiOutlineGlobeAlt", "HiOutlineDevicePhoneMobile", "HiOutlineBanknotes", "HiOutlineSquares2X2",
    "HiOutlineLightBulb", "HiOutlineCpuChip", "HiOutlineCircleStack", "HiOutlineMapPin",
    "HiOutlinePhone", "HiOutlineEnvelope", "HiOutlineClock", "HiOutlineScale", "HiOutlineEye",
    "HiOutlineRocketLaunch", "HiOutlineHeart", "HiOutlineWrenchScrewdriver", "HiOutlineShieldCheck",
    "HiOutlineUserGroup", "HiOutlineCheckBadge",
])
FA = icon_paths("fa6", ["FaTelegram", "FaWhatsapp", "FaLinkedinIn", "FaGithub"])

SERVICE_ICON = {
    "globe": HI["HiOutlineGlobeAlt"], "telegram": FA["FaTelegram"], "mobile": HI["HiOutlineDevicePhoneMobile"],
    "fintech": HI["HiOutlineBanknotes"], "erp": HI["HiOutlineSquares2X2"], "consult": HI["HiOutlineLightBulb"],
    "architecture": HI["HiOutlineCpuChip"], "whatsapp": FA["FaWhatsapp"], "database": HI["HiOutlineCircleStack"],
}

# ---------- content from the site's data files ----------
def ts_objects(path: pathlib.Path, start_marker: str):
    """Very small extractor: pulls string/array fields out of the TS object literals."""
    src = path.read_text()
    src = src[src.index(start_marker):]
    blocks = re.findall(r"\{\n    (?:id|slug): \"[^\"]+\".*?\n  \},", src, re.S)
    items = []
    for b in blocks:
        d = {}
        for k, v in re.findall(r'\n    (\w+):\s*"((?:[^"\\]|\\.)*)"', b):
            d[k] = v.replace('\\"', '"')
        for k, v in re.findall(r"\n    (\w+): \[((?:[^\]]|\n)*?)\],", b):
            d[k] = re.findall(r'"((?:[^"\\]|\\.)*)"', v)
        for k, v in re.findall(r"\n    (\w+): \[\n((?:      \{.*?\},\n)+)    \],", b, re.S):
            d[k] = [dict(re.findall(r'(\w+): "((?:[^"\\]|\\.)*)"', o)) for o in re.findall(r"\{.*?\}", v, re.S)]
        items.append(d)
    return items

services = ts_objects(ROOT / "components/data/services.ts", "export const services")
projects = ts_objects(ROOT / "components/data/work.ts", "export const projects")
site_src = (ROOT / "components/data/site.ts").read_text()
def site(key):
    return re.search(r'%s: "([^"]+)"' % key, site_src).group(1)

featured_slugs = ["emun-transport", "chenet", "adopay", "kacha", "addismark", "emun-express"]
featured = [p for s in featured_slugs for p in projects if p["slug"] == s]
sectors = []
for p in projects:
    if p["sector"] not in sectors:
        sectors.append(p["sector"])

WIDE = {"esete-coffee", "wegagen-market-hub", "chenet", "adopay", "duruj", "capstone"}
def logo_img(p, cls=""):
    if p.get("logo"):
        fit = "cover" if p.get("logoFit") == "cover" else "contain"
        if p["slug"] in WIDE:
            fit += " wide"
        return f'<span class="mark {fit} {cls}"><img src="../public{p["logo"]}" alt=""></span>'
    return f'<span class="mark mono {cls}" style="background:{accent_css(p.get("accent",""))}">{p.get("monogram","")}</span>'

TW = {"blue-600":"#2563eb","cyan-500":"#06b6d4","amber-500":"#f59e0b","orange-600":"#ea580c","emerald-500":"#10b981",
      "green-600":"#16a34a","yellow-400":"#facc15","orange-500":"#f97316","rose-500":"#f43f5e","red-600":"#dc2626",
      "sky-500":"#0ea5e9","indigo-600":"#4f46e5","blue-700":"#1d4ed8","teal-500":"#14b8a6","fuchsia-500":"#d946ef",
      "purple-600":"#9333ea","amber-600":"#d97706","pink-500":"#ec4899","rose-600":"#e11d48","lime-500":"#84cc16",
      "amber-700":"#b45309","yellow-600":"#ca8a04","cyan-500b":"#06b6d4","yellow-500":"#eab308","stone-600":"#57534e",
      "red-900":"#7f1d1d","stone-700":"#44403c","violet-500":"#8b5cf6","slate-600":"#475569","slate-800":"#1e293b",
      "indigo-500":"#6366f1","emerald-600":"#059669","cyan-400":"#22d3ee","teal-400":"#2dd4bf"}
def accent_css(tw: str) -> str:
    m = re.findall(r"(?:from|to)-([a-z]+-\d+)", tw)
    c = [TW.get(x, "#1554d1") for x in m] or ["#1554d1", "#06b6d4"]
    return f"linear-gradient(135deg,{c[0]},{c[-1]})"

year = datetime.date.today().year
phone = site("phoneDisplay"); email = site("email"); support = site("supportEmail")
addr1 = site("line1"); addr2 = site("line2"); city = site("city"); country = site("country")
url = site("url").replace("https://", "")
tg = site("telegram"); wa = site("whatsapp"); li = site("linkedin")

# ---------- HTML ----------
def esc(s): return s.replace("&", "&amp;").replace("<", "&lt;")

service_cards = "".join(f'''
<div class="svc">
  <div class="svc-ic" style="background:{accent_css(s['accent'])}">{SERVICE_ICON[s['icon']]}</div>
  <h4>{esc(s['title'])}</h4>
  <p>{esc(s['tagline'])}</p>
  <ul>{"".join(f"<li>{esc(o)}</li>" for o in s['outcomes'][:3])}</ul>
</div>''' for s in services)

feat_cards = "".join(f'''
<div class="feat">
  <div class="feat-head">{logo_img(p,"lg")}<div><span class="kicker">{esc(p['sector'])}{(' · for ' + esc(p['client'])) if p.get('client') else ''}</span><h4>{esc(p['name'])}</h4></div><span class="status s-{p['status'].split()[0].lower()}">{esc(p['status'])}</span></div>
  <p>{esc(p['summary'])}</p>
  <ul>{"".join(f"<li>{esc(h)}</li>" for h in p['highlights'][:3])}</ul>
  <div class="chips">{"".join(f"<span>{esc(t)}</span>" for t in p['stack'][:5])}</div>
</div>''' for p in featured)

grid_cards = "".join(f'''
<div class="pf">{logo_img(p)}<div><b>{esc(p['name'])}{(" <i>for " + esc(p['client']) + "</i>") if p.get('client') else ""}</b><span>{esc(p['sector'])} · {esc(p['status'])}</span><em>{esc(p['summary'])}</em></div></div>''' for p in projects)

process = [
  ("01","Discover","Users, workflows, constraints and what success looks like. You get a scoped plan with cost and timeline."),
  ("02","Design","Flows and screens first, then the system design: data model, integrations, infrastructure."),
  ("03","Build in sprints","Two-week sprints with a demo at the end of each. Working software early; priorities steered by evidence."),
  ("04","Harden & launch","Load tests, security review, store submissions, monitoring and runbooks before launch day."),
  ("05","Operate & grow","We keep running what we built: on-call, upgrades, new features and the data to decide what comes next."),
]
process_html = "".join(f'<div class="step"><span class="n">{n}</span><h4>{t}</h4><p>{d}</p></div>' for n,t,d in process)

values = [
  (HI["HiOutlineScale"],"Correct before clever","Money, trips and parcels must balance. We favour boring, verifiable designs over fashionable ones."),
  (HI["HiOutlineEye"],"Nothing hidden","Clients see the backlog, the demos and the invoices. Bad news travels first, with a plan attached."),
  (HI["HiOutlineRocketLaunch"],"Ship, then improve","A working release in users' hands beats a perfect plan. We launch early and iterate on evidence."),
  (HI["HiOutlineHeart"],"Built for here","We build for Ethiopian users, networks, payments and regulations because we live with them too."),
]
values_html = "".join(f'<div class="val"><span class="vi">{i}</span><div><h4>{t}</h4><p>{d}</p></div></div>' for i,t,d in values)

pillars = [
  (HI["HiOutlineMapPin"],"Built for Ethiopian reality","Flaky networks, OTP delays, cash-heavy users, telebirr and CBE Birr, Amharic UI. Designed in from day one."),
  (HI["HiOutlineBanknotes"],"Money-grade engineering","Our fintech and gaming systems move real money. Double-entry ledgers, idempotent payments and audit trails are the default."),
  (HI["HiOutlineCpuChip"],"Product owners, not order takers","We run our own consumer platforms, so we understand retention, fraud, support load and unit economics."),
  (HI["HiOutlineWrenchScrewdriver"],"We operate what we ship","Monitoring, on-call, upgrades and incident response are part of every engagement."),
]
pillars_html = "".join(f'<div class="pil"><span class="vi">{i}</span><h4>{t}</h4><p>{d}</p></div>' for i,t,d in pillars)

models = [
  ("Fixed-scope delivery","A defined product, a written scope, a fixed price and date. Best for well-understood builds such as websites, bots and MVPs."),
  ("Dedicated squad","Two to six engineers plus a lead, embedded with your team on a monthly retainer. Best for platforms that keep evolving."),
  ("Fractional CTO & consulting","Senior technical leadership, audits and roadmaps without a full-time hire. Best before a large budget is committed."),
]
models_html = "".join(f'<div class="model"><h4>{t}</h4><p>{d}</p></div>' for t,d in models)


month_html = "".join(f'<div class="wk"><span class="n">{n}</span><div><h4>{t}</h4><p>{d}</p></div></div>' for n,t,d in [
  ("Week 1","Kick-off & discovery","Stakeholder workshops, access to existing systems, user and data review. Output: scope, risks, milestone plan."),
  ("Week 2","Design & architecture","Flows, screens and the system design signed off. Repositories, environments and CI/CD stood up."),
  ("Week 3–4","First working increment","The core flow demoed end to end on a staging environment, with your team using it and feedback shaping sprint two."),
  ("Ongoing","Sprint rhythm","Two-week sprints, a demo and a written status every sprint, invoices against delivered milestones."),
])
stack = [
  ("Backend","Go · Kotlin / Spring Boot · Python · Node.js · TypeScript"),
  ("Mobile","Flutter · Kotlin / Jetpack Compose · Swift · Firebase"),
  ("Web","React · Next.js · Tailwind CSS · Vercel"),
  ("Data","PostgreSQL / PostGIS · MongoDB · Redis · Kafka / NATS"),
  ("Infrastructure","Docker · Google Cloud · AWS · Caddy / nginx · CI/CD · Prometheus / Grafana"),
  ("Channels & payments","Telegram Bot API · WhatsApp Business API · USSD · telebirr · CBE Birr · M-Pesa · EthSwitch · Chapa"),
]
stack_html = "".join(f'<div class="stk"><b>{k}</b><span>{v}</span></div>' for k,v in stack)

industry_html = "".join(f'<span class="ind">{esc(s)}</span>' for s in sectors)

html = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>Source Code IT Solutions PLC — Company Profile {year}</title>
<style>
@font-face{{font-family:Ample;src:url(../public/fonts/AmpleSoftPro-Regular.ttf);font-weight:400}}
@font-face{{font-family:Ample;src:url(../public/fonts/AmpleSoftPro-Light.ttf);font-weight:300}}
@font-face{{font-family:Ample;src:url(../public/fonts/AmpleSoftPro-Medium.ttf);font-weight:500}}
@font-face{{font-family:Ample;src:url(../public/fonts/AmpleSoftPro-Bold.ttf);font-weight:700}}
:root{{--brand:#1554d1;--brand2:#3366ff;--cyan:#22d3ee;--accent:#f7931e;--navy:#0b1f45;--ink:#0b1120;--ink2:#1c2740;--mute:#5b6475;--line:#e3e7ee;--soft:#f3f6fb}}
*{{box-sizing:border-box;margin:0;padding:0}}
@page{{size:A4;margin:0}}
html,body{{background:#fff;font-family:Ample,Inter,system-ui,sans-serif;color:var(--ink);-webkit-print-color-adjust:exact;print-color-adjust:exact}}
.page{{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;padding:16mm 16mm 18mm;display:flex;flex-direction:column}}
.page:last-child{{page-break-after:auto}}
svg{{width:100%;height:100%}}
h1,h2,h3,h4{{letter-spacing:-.02em;line-height:1.1}}
h2{{font-size:26pt;font-weight:700;color:var(--ink)}}
h3{{font-size:13pt;font-weight:700}}
p{{line-height:1.5}}
.eyebrow{{display:inline-flex;align-items:center;gap:8px;font-size:8pt;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--brand)}}
.eyebrow:before{{content:"";width:22px;height:1.5px;background:var(--brand)}}
.lead{{font-size:11pt;color:var(--mute);line-height:1.55}}
.grad{{background:linear-gradient(90deg,var(--brand),var(--brand2) 50%,var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent}}
.foot{{position:absolute;left:16mm;right:16mm;bottom:9mm;display:flex;justify-content:space-between;align-items:center;font-size:7.5pt;color:var(--mute);letter-spacing:.06em;text-transform:uppercase}}
.foot b{{color:var(--ink)}}
.foot .pg{{width:22px;height:22px;border-radius:50%;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-size:7.5pt;letter-spacing:0}}
.grid-bg{{position:absolute;inset:0;background-image:linear-gradient(to right,rgba(15,23,42,.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(15,23,42,.05) 1px,transparent 1px);background-size:11mm 11mm;-webkit-mask-image:radial-gradient(ellipse at top,#000 20%,transparent 70%);mask-image:radial-gradient(ellipse at top,#000 20%,transparent 70%);pointer-events:none}}
.blob{{position:absolute;border-radius:50%;filter:blur(60px);opacity:.55;pointer-events:none}}
.logo{{display:flex;align-items:center;gap:10px}}
.logo img{{width:44px;height:44px}}
.logo .t{{display:flex;flex-direction:column;line-height:1}}
.logo .t b{{font-size:13pt;letter-spacing:-.02em}}
.logo .t span{{font-size:6.5pt;letter-spacing:.24em;text-transform:uppercase;opacity:.65;margin-top:3px}}
/* cover */
.cover{{background:radial-gradient(1200px 700px at 80% -10%,#15336f 0%,var(--ink) 55%);color:#fff;padding:0}}
.cover .grid-bg{{background-image:linear-gradient(to right,rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.07) 1px,transparent 1px);-webkit-mask-image:radial-gradient(ellipse at 70% 30%,#000 10%,transparent 70%);mask-image:radial-gradient(ellipse at 70% 30%,#000 10%,transparent 70%)}}
.cover .in{{position:relative;height:100%;padding:18mm 18mm 16mm;display:flex;flex-direction:column}}
.cover .logo .t b,.cover .logo .t span{{color:#fff}}
.cover h1{{font-size:42pt;font-weight:700;margin-top:auto;max-width:150mm}}
.cover .glance{{display:flex;gap:6mm;margin-top:10mm}}
.cover .glance div{{border-left:2px solid var(--cyan);padding-left:10px}}
.cover .glance b{{display:block;font-size:17pt;letter-spacing:-.02em}}
.cover .glance span{{font-size:7.5pt;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.6)}}
.cover h1 .grad{{background:linear-gradient(90deg,#8eb6ff,var(--cyan));-webkit-background-clip:text;background-clip:text}}
.cover .sub{{font-size:12.5pt;color:rgba(255,255,255,.72);max-width:140mm;margin-top:8mm;line-height:1.5}}
.cover .tag{{display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,.2);border-radius:999px;padding:6px 14px;font-size:8pt;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.85);width:max-content;background:rgba(255,255,255,.06)}}
.cover h1{{margin-top:6mm}}
.cover .tag i{{width:7px;height:7px;border-radius:50%;background:#34d399;display:inline-block}}
.cover .meta{{margin-top:auto;display:flex;justify-content:space-between;align-items:flex-end;color:rgba(255,255,255,.6);font-size:8pt;letter-spacing:.14em;text-transform:uppercase}}
.cover .meta b{{display:block;color:#fff;font-size:22pt;letter-spacing:-.02em;text-transform:none;margin-bottom:4px}}
.cover .bar{{position:absolute;left:0;right:0;bottom:0;height:6px;background:linear-gradient(90deg,var(--brand),var(--cyan) 50%,var(--accent))}}
.cards-float{{position:absolute;right:16mm;top:34mm;width:80mm;height:84mm}}
.fc{{position:absolute;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:12px;padding:10px 12px;color:#fff;font-size:8.5pt}}
.fc small{{display:block;font-size:7pt;color:rgba(255,255,255,.6);margin-bottom:3px}}
.fc b{{font-size:11pt}}
.ring{{position:absolute;left:50%;top:50%;width:54mm;height:54mm;transform:translate(-50%,-50%);border-radius:50%;background:linear-gradient(135deg,var(--brand2),var(--cyan));box-shadow:0 0 0 14px rgba(51,102,255,.12),0 0 0 30px rgba(51,102,255,.06);display:flex;align-items:center;justify-content:center}}
.ring svg{{width:30mm;height:30mm;color:#fff}}
/* layout helpers */
.head{{display:flex;justify-content:space-between;align-items:flex-end;gap:10mm;margin-bottom:8mm}}
.head h2{{margin-top:3mm}}
.head .lead{{max-width:120mm;margin-top:3mm}}
.two{{display:grid;grid-template-columns:1fr 1fr;gap:8mm}}
.three{{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm}}
.card{{border:1px solid var(--line);border-radius:12px;padding:14px 16px;background:#fff}}
.card.dark{{background:var(--navy);color:#fff;border-color:transparent}}
/* stats */
.stats{{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);border-radius:14px;overflow:hidden;margin-top:7mm}}
.stat{{padding:14px 12px;text-align:center;border-left:1px solid var(--line)}}
.stat:first-child{{border-left:0}}
.stat b{{display:block;font-size:24pt;letter-spacing:-.03em;color:var(--ink)}}
.stat span{{display:block;font-size:8.5pt;font-weight:700;margin-top:2px}}
.stat small{{display:block;font-size:7.5pt;color:var(--mute);margin-top:2px}}
.vi{{width:34px;height:34px;border-radius:10px;background:#eef4ff;color:var(--brand);display:flex;align-items:center;justify-content:center;flex:none;padding:7px}}
.pil{{border:1px solid var(--line);border-radius:12px;padding:12px 14px}}
.pil h4{{font-size:10.5pt;margin:8px 0 4px}}
.pil p,.val p,.step p,.model p{{font-size:8.5pt;color:var(--mute)}}
.industries{{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}}
.ind{{border:1px solid var(--line);border-radius:999px;padding:4px 10px;font-size:8pt;font-weight:500;background:var(--soft)}}
/* services */
.svcs{{display:grid;grid-template-columns:repeat(3,1fr);gap:4.5mm}}
.svc{{border:1px solid var(--line);border-radius:12px;padding:12px 13px;display:flex;flex-direction:column;min-height:0}}
.svc-ic{{width:34px;height:34px;border-radius:9px;color:#fff;padding:7px;margin-bottom:9px}}
.svc h4{{font-size:10.5pt;margin-bottom:4px}}
.svc p{{font-size:8pt;color:var(--mute);margin-bottom:7px}}
.svc ul{{list-style:none;font-size:7.6pt;color:var(--ink2)}}
.svc li{{padding-left:10px;position:relative;margin-top:3px;line-height:1.35}}
.svc li:before{{content:"";position:absolute;left:0;top:6px;width:4px;height:4px;border-radius:50%;background:var(--brand)}}
/* featured work */
.feats{{display:grid;grid-template-columns:1fr 1fr;gap:5mm}}
.feat{{border:1px solid var(--line);border-radius:12px;padding:12px 14px}}
.feat-head{{display:flex;align-items:center;gap:10px;margin-bottom:8px}}
.feat-head h4{{font-size:12pt}}
.kicker{{font-size:7pt;letter-spacing:.14em;text-transform:uppercase;color:var(--brand);font-weight:700;display:block;margin-bottom:2px}}
.status{{margin-left:auto;font-size:6.8pt;font-weight:700;border-radius:999px;padding:3px 8px;white-space:nowrap}}
.s-live{{background:#d1fae5;color:#047857}} .s-delivered{{background:#e0e9ff;color:#1d4ed8}} .s-in{{background:#ffedd5;color:#c2410c}}
.feat p{{font-size:8.3pt;color:var(--mute);margin-bottom:7px}}
.feat ul{{list-style:none;font-size:7.8pt;color:var(--ink2);margin-bottom:8px}}
.feat li{{padding-left:12px;position:relative;margin-top:3px}}
.feat li:before{{content:"";position:absolute;left:0;top:5px;width:6px;height:6px;border-radius:50%;background:var(--accent)}}
.chips{{display:flex;flex-wrap:wrap;gap:4px}}
.chips span{{background:var(--soft);border-radius:5px;padding:2px 7px;font-size:7pt;font-weight:500;color:var(--ink2)}}
.mark{{width:40px;height:40px;border-radius:11px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none}}
.mark.lg{{width:50px;height:50px;border-radius:13px}}
.mark img{{width:100%;height:100%;object-fit:contain;padding:5px}}
.mark.cover img{{object-fit:cover;padding:0}}
.mark.wide{{width:78px;border-radius:9px}}
.mark.wide.lg{{width:96px;height:50px}}
.mark.wide img{{padding:4px 6px}}
.mark.mono{{color:#fff;font-weight:700;font-size:11pt;border:0}}
/* portfolio grid */
.pfs{{display:grid;grid-template-columns:1fr 1fr;gap:2.4mm}}
.pf{{display:flex;align-items:flex-start;gap:9px;border:1px solid var(--line);border-radius:10px;padding:7px 10px}}
.pf .mark{{width:36px;height:36px;border-radius:9px}} .pf .mark.wide{{width:70px}}
.pf b{{display:block;font-size:9pt}}
.pf b i{{font-style:normal;font-weight:400;color:var(--mute);font-size:7.5pt}}
.pf span{{display:block;font-size:7pt;color:var(--brand);font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-top:1px}}
.pf em{{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-style:normal;font-size:7.2pt;color:var(--mute);line-height:1.35;margin-top:2px}}
/* process */
.steps{{display:grid;grid-template-columns:repeat(5,1fr);gap:4mm;margin-top:6mm}}
.step .n{{display:inline-flex;width:34px;height:34px;border-radius:10px;border:1px solid #bcd3ff;background:#fff;color:var(--brand);font-weight:700;font-size:10pt;align-items:center;justify-content:center;box-shadow:0 6px 16px -10px rgba(21,84,209,.5)}}
.step h4{{font-size:9.5pt;margin:7px 0 4px}}
.models{{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm}}
.model{{background:var(--navy);color:#fff;border-radius:12px;padding:13px 14px}}
.model h4{{font-size:10.5pt;margin-bottom:5px;color:#fff}}
.model p{{color:rgba(255,255,255,.72)}}
.vals{{display:grid;grid-template-columns:1fr 1fr;gap:4mm}}
.weeks{{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin-top:3mm}}
.wk{{display:flex;gap:10px;border:1px solid var(--line);border-radius:12px;padding:11px 13px;background:var(--soft)}}
.wk .n{{flex:none;font-size:7pt;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--brand);background:#fff;border:1px solid #bcd3ff;border-radius:999px;padding:4px 8px;height:max-content;white-space:nowrap}}
.wk h4{{font-size:9.5pt;margin-bottom:3px}}
.wk p{{font-size:8.3pt;color:var(--mute)}}
.val{{display:flex;gap:10px;border:1px solid var(--line);border-radius:12px;padding:11px 13px}}
.val h4{{font-size:10pt;margin-bottom:3px}}
.stacks{{display:grid;grid-template-columns:1fr 1fr;gap:4mm}}
.stk{{border:1px solid var(--line);border-radius:12px;padding:11px 13px}}
.stk b{{display:block;font-size:8pt;letter-spacing:.14em;text-transform:uppercase;color:var(--brand);margin-bottom:4px}}
.stk span{{font-size:9pt;line-height:1.5;color:var(--ink2)}}
.sec{{margin-top:8mm}}
.sec .eyebrow{{margin-bottom:3mm}}
.band{{background:var(--navy);color:#fff;border-radius:14px;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;gap:10mm;margin-top:auto}}
.band h3{{font-size:13pt;color:#fff}}
.band p{{font-size:8.5pt;color:rgba(255,255,255,.7);margin-top:3px}}
.band .btn{{background:#fff;color:var(--ink);border-radius:999px;padding:8px 16px;font-size:8.5pt;font-weight:700;white-space:nowrap}}
/* contact */
.contact{{background:radial-gradient(900px 500px at 20% 0%,#15336f 0%,var(--ink) 60%);color:#fff}}
.contact .grid-bg{{background-image:linear-gradient(to right,rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.06) 1px,transparent 1px);-webkit-mask-image:radial-gradient(ellipse at 50% 40%,#000 10%,transparent 70%);mask-image:radial-gradient(ellipse at 50% 40%,#000 10%,transparent 70%)}}
.contact h2{{color:#fff;font-size:30pt;max-width:140mm}}
.contact .lead{{color:rgba(255,255,255,.7)}}
.chan{{display:grid;grid-template-columns:1fr 1fr;gap:4mm;margin-top:8mm}}
.ch{{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);border-radius:12px;padding:12px 14px;display:flex;gap:10px;align-items:flex-start}}
.ch .vi{{background:rgba(255,255,255,.1);color:var(--cyan)}}
.ch small{{display:block;font-size:7pt;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:3px}}
.ch b{{font-size:10pt;display:block}}
.ch span{{font-size:8.5pt;color:rgba(255,255,255,.75)}}
.contact .logo{{margin-top:auto}}
.contact .logo .t b,.contact .logo .t span{{color:#fff}}
.contact .bar{{position:absolute;left:0;right:0;bottom:0;height:6px;background:linear-gradient(90deg,var(--brand),var(--cyan) 50%,var(--accent))}}
.contact .copy{{position:absolute;right:16mm;bottom:12mm;font-size:7.5pt;color:rgba(255,255,255,.5);letter-spacing:.06em;text-transform:uppercase}}
</style></head><body>

<!-- 1 · Cover -->
<section class="page cover">
  <div class="grid-bg"></div>
  <div class="blob" style="width:90mm;height:90mm;left:-25mm;top:120mm;background:#3366ff"></div>
  <div class="blob" style="width:70mm;height:70mm;right:-10mm;top:20mm;background:#06b6d4;opacity:.35"></div>
  <div class="blob" style="width:60mm;height:60mm;right:30mm;bottom:40mm;background:#f7931e;opacity:.25"></div>
  <div class="in">
    <div class="logo"><img src="../public/images/image.png" alt=""><div class="t"><b>Source Code</b><span>IT Solutions PLC</span></div></div>
    <div class="cards-float" style="top:30mm">
      <div class="ring"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg></div>
      <div class="fc" style="left:0;top:0"><small>Dispatch engine</small><b>Driver matched · 42s</b></div>
      <div class="fc" style="right:0;top:22mm"><small>Wallet settlement</small><b>ETB 1,240.00</b></div>
      <div class="fc" style="left:4mm;bottom:12mm"><small>Telegram bot</small><b>Parcel left Mekelle 06:40</b></div>
      <div class="fc" style="right:4mm;bottom:0"><small>API p95 · Uptime</small><b>118 ms · 99.9%</b></div>
    </div>
    <div class="tag" style="margin-top:118mm">
      <i></i>Company profile · {year}</div>
    <h1>Software that runs <span class="grad">real businesses</span> in Ethiopia.</h1>
    <p class="sub">We are the engineering team behind ride-hailing, fintech, logistics and gaming platforms used every day across Ethiopia. Web, mobile, bots, ERP and the backends that hold it all together.</p>
    <div class="glance"><div><b>{len(projects)}+</b><span>Products shipped</span></div><div><b>{len(sectors)}</b><span>Industries</span></div><div><b>{len(services)}</b><span>Service lines</span></div><div><b>24/7</b><span>Operations</span></div></div>
    <div class="meta"><div><b>{url}</b>{addr1} · {city}, {country}</div><div style="text-align:right"><b>{phone}</b>{email}</div></div>
  </div>
  <div class="bar"></div>
</section>

<!-- 2 · Who we are -->
<section class="page">
  <div class="grid-bg"></div>
  <div class="head"><div><span class="eyebrow">Who we are</span><h2>An engineering company that <span class="grad">runs what it builds</span></h2>
  <p class="lead">Source Code IT Solutions PLC designs, builds and operates software for businesses in Ethiopia and the diaspora. We are engineers first: our own platforms carry real passengers, parcels and payments every day, and that discipline shapes every client project.</p></div></div>
  <div class="two">
    <div class="card"><span class="eyebrow">Mission</span><p style="font-size:9.5pt;margin-top:6px;line-height:1.55">To give Ethiopian businesses software that is correct, resilient and genuinely theirs: built for local networks, payments and users, and kept running long after launch.</p></div>
    <div class="card"><span class="eyebrow">Vision</span><p style="font-size:9.5pt;margin-top:6px;line-height:1.55">A country where every serious business, from a coffee exporter to a microfinance institution, runs on software engineered to the same standard as the best in the world.</p></div>
  </div>
  <div class="stats">
    <div class="stat"><b>{len(projects)}+</b><span>Products shipped</span><small>apps, platforms and bots in the field</small></div>
    <div class="stat"><b>{len(sectors)}</b><span>Industries served</span><small>mobility, fintech, logistics, gaming and more</small></div>
    <div class="stat"><b>{len(services)}</b><span>Service lines</span><small>from strategy to database operations</small></div>
    <div class="stat"><b>24/7</b><span>Operations</span><small>we monitor and support what we build</small></div>
  </div>
  <div class="sec"><span class="eyebrow">What sets us apart</span>
    <div class="three" style="grid-template-columns:1fr 1fr;margin-top:3mm">{pillars_html}</div></div>
  <div class="sec"><span class="eyebrow">Industries</span><div class="industries">{industry_html}</div></div>
  <div class="foot"><span><b>Source Code</b> · Company profile {year}</span><span class="pg">2</span></div>
</section>

<!-- 3 · Services -->
<section class="page">
  <div class="grid-bg"></div>
  <div class="head"><div><span class="eyebrow">What we do</span><h2>Nine disciplines. <span class="grad">One accountable team.</span></h2>
  <p class="lead">From a landing page to a national payments platform, every engagement is staffed by engineers who have shipped it before.</p></div></div>
  <div class="svcs">{service_cards}</div>
  <div class="foot"><span><b>Source Code</b> · Services</span><span class="pg">3</span></div>
</section>

<!-- 4 · Flagship work -->
<section class="page">
  <div class="grid-bg"></div>
  <div class="head"><div><span class="eyebrow">Selected work</span><h2>Platforms people in Ethiopia <span class="grad">use every day</span></h2>
  <p class="lead">Ride-hailing, freight, lending, remittance and gaming: production systems we designed, built and still operate.</p></div></div>
  <div class="feats">{feat_cards}</div>
  <div class="foot"><span><b>Source Code</b> · Selected work</span><span class="pg">4</span></div>
</section>

<!-- 5 · Portfolio -->
<section class="page">
  <div class="grid-bg"></div>
  <div class="head"><div><span class="eyebrow">Portfolio</span><h2>{len(projects)} products across {len(sectors)} industries</h2>
  <p class="lead">Every product below was designed, built or operated by Source Code. Full case studies are available at {url}/work.</p></div></div>
  <div class="pfs">{grid_cards}</div>
  <div class="band" style="margin-top:5mm;padding:11px 16px"><div><h3>Building something similar?</h3><p>We reuse proven architecture and integrations from these platforms to shorten your timeline and de-risk launch.</p></div><span class="btn">{url}/contact</span></div>
  <div class="foot"><span><b>Source Code</b> · Portfolio</span><span class="pg">5</span></div>
</section>

<!-- 6 · How we work -->
<section class="page">
  <div class="grid-bg"></div>
  <div class="head"><div><span class="eyebrow">How we work</span><h2>A delivery process that <span class="grad">removes surprises</span></h2>
  <p class="lead">The same five steps on every project, whether it is a two-week bot or a two-year platform.</p></div></div>
  <div class="steps">{process_html}</div>
  <div class="sec"><span class="eyebrow">Engagement models</span><div class="models" style="margin-top:3mm">{models_html}</div></div>
  <div class="sec"><span class="eyebrow">Your first month with us</span><div class="weeks">{month_html}</div></div>
  <div class="band"><div><h3>No surprises, by design</h3><p>You always know what was built, what it cost and what comes next. If something slips, you hear it from us first, with a plan.</p></div><span class="btn">Weekly demos · Written status</span></div>
  <div class="foot"><span><b>Source Code</b> · How we work</span><span class="pg">6</span></div>
</section>

<!-- 7 · Technology -->
<section class="page">
  <div class="grid-bg"></div>
  <div class="head"><div><span class="eyebrow">Technology</span><h2>A deliberately boring, <span class="grad">battle-tested stack</span></h2>
  <p class="lead">We pick technologies our clients' teams can hire for and operate, and we go deep on each one.</p></div></div>
  <div class="stacks">{stack_html}</div>
  <div class="sec"><span class="eyebrow">Engineering standards</span>
    <div class="vals" style="margin-top:3mm">
      <div class="val"><span class="vi">{HI["HiOutlineShieldCheck"]}</span><div><h4>Security &amp; IP</h4><p>Your code lives in your repositories. Secrets, access and data handling follow least-privilege by default; audits on request.</p></div></div>
      <div class="val"><span class="vi">{HI["HiOutlineCheckBadge"]}</span><div><h4>Quality gates</h4><p>Code review on every change, automated end-to-end suites, load tests and release checklists before anything reaches production.</p></div></div>
      <div class="val"><span class="vi">{HI["HiOutlineScale"]}</span><div><h4>Money-grade data</h4><p>Double-entry ledgers, idempotency keys, exactly-once settlement and full audit trails wherever value moves.</p></div></div>
      <div class="val"><span class="vi">{HI["HiOutlineUserGroup"]}</span><div><h4>Documentation &amp; handover</h4><p>Architecture decision records, runbooks and living docs, so your team can take over at any point.</p></div></div>
    </div></div>
  <div class="sec"><span class="eyebrow">Values</span><div class="vals" style="margin-top:3mm">{values_html}</div></div>
  <div class="band"><div><h3>Operations included</h3><p>Monitoring, on-call, upgrades and incident response are part of the engagement. You are never left holding code nobody maintains.</p></div><span class="btn">We operate what we ship</span></div>
  <div class="foot"><span><b>Source Code</b> · Technology</span><span class="pg">7</span></div>
</section>

<!-- 8 · Contact -->
<section class="page contact">
  <div class="grid-bg"></div>
  <div class="blob" style="width:80mm;height:80mm;right:-20mm;top:30mm;background:#3366ff;opacity:.45"></div>
  <div class="blob" style="width:60mm;height:60mm;left:-10mm;bottom:50mm;background:#f7931e;opacity:.25"></div>
  <span class="eyebrow" style="color:#fbb040">Let's talk</span>
  <h2 style="margin-top:4mm">Tell us what you are trying to build.</h2>
  <p class="lead" style="margin-top:5mm;max-width:140mm">Share the problem, the users and the deadline. An engineer, not a salesperson, replies within one business day with a clear next step.</p>
  <div class="chan">
    <div class="ch"><span class="vi">{HI["HiOutlinePhone"]}</span><div><small>Call</small><b>{phone}</b><span>Mon – Sat, 8:30 – 18:00 EAT</span></div></div>
    <div class="ch"><span class="vi">{HI["HiOutlineEnvelope"]}</span><div><small>Email</small><b>{email}</b><span>{support}</span></div></div>
    <div class="ch"><span class="vi">{FA["FaTelegram"]}</span><div><small>Telegram</small><b>@sourcecodeet</b><span>{tg.replace("https://","")}</span></div></div>
    <div class="ch"><span class="vi">{FA["FaWhatsapp"]}</span><div><small>WhatsApp</small><b>{phone}</b><span>{wa.replace("https://","")}</span></div></div>
    <div class="ch"><span class="vi">{HI["HiOutlineMapPin"]}</span><div><small>Office</small><b>{addr1}</b><span>{addr2}, {city}, {country}</span></div></div>
    <div class="ch"><span class="vi">{FA["FaLinkedinIn"]}</span><div><small>Online</small><b>{url}</b><span>{li.replace("https://","")}</span></div></div>
  </div>
  <div class="sec"><span class="eyebrow" style="color:#fbb040">Next steps</span>
    <div class="three" style="margin-top:3mm">
      <div class="ch" style="flex-direction:column;gap:6px"><b style="font-size:16pt;color:var(--cyan)">01</b><b>Send a short brief</b><span>Who it is for, what it should do, and when you need it. A paragraph is enough.</span></div>
      <div class="ch" style="flex-direction:column;gap:6px"><b style="font-size:16pt;color:var(--cyan)">02</b><b>30-minute call</b><span>An engineer asks about users, volumes, integrations and constraints.</span></div>
      <div class="ch" style="flex-direction:column;gap:6px"><b style="font-size:16pt;color:var(--cyan)">03</b><b>Written scope in 2 days</b><span>Phases, team, timeline and cost, ready for your board or procurement.</span></div>
    </div></div>
  <div class="logo"><img src="../public/images/image.png" alt=""><div class="t"><b>Source Code</b><span>IT Solutions PLC</span></div></div>
  <div class="copy">© {year} Source Code IT Solutions PLC · Addis Ababa</div>
  <div class="bar"></div>
</section>
</body></html>'''

out_html = PROFILE / "company-profile.html"
out_html.write_text(html)
OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer", "--run-all-compositor-stages-before-draw",
       "--virtual-time-budget=4000", f"--print-to-pdf={OUT_PDF}", out_html.as_uri()]
r = subprocess.run(cmd, capture_output=True, text=True)
if not OUT_PDF.exists():
    print(r.stdout, r.stderr); sys.exit("PDF not produced")
print("wrote", out_html.relative_to(ROOT))
print("wrote", OUT_PDF.relative_to(ROOT), f"{OUT_PDF.stat().st_size/1024:.0f} KB")
