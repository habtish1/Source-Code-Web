import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import PageHero from "@/components/ui/page-hero";
import SectionHeading from "@/components/ui/section-heading";
import SpotlightCard from "@/components/ui/spotlight-card";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import CTA from "@/components/cta";
import team1 from "@/public/images/team-1.png";
import team2 from "@/public/images/team-2.png";
import team3 from "@/public/images/team-3.png";
import icon1 from "@/public/icons/Rocket_perspective_matte.png";
import icon2 from "@/public/icons/Code_perspective_matte-1.png";
import icon3 from "@/public/icons/Heart_rate_perspective_matte.png";
import icon4 from "@/public/icons/Shield_perspective_matte.png";
import icon5 from "@/public/icons/Success_perspective_matte.png";
import icon6 from "@/public/icons/Padlock_perspective_matte.png";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Why companies in Ethiopia choose Source Code: production experience with money and mobility platforms, transparent sprints, security-first engineering and long-term operations.",
  alternates: { canonical: "/choose" },
};

const pillars = [
  {
    image: team1,
    title: "A team that scales with you",
    text: "Start with two engineers and a lead, grow to a full squad when traction demands it. Same people, same context, no hand-offs to strangers.",
    points: ["Dedicated squad or fixed-scope delivery", "Weekly demos, written decisions", "Direct Telegram line to the engineers"],
  },
  {
    image: team2,
    title: "Money-grade reliability",
    text: "Our systems settle wallets, disburse loans and pay out winnings. We bring the same discipline, ledgers, idempotency and audit logs, to every product.",
    points: ["Double-entry ledgers and reconciliation", "Race-condition and fraud testing", "Monitoring and on-call from day one"],
  },
  {
    image: team3,
    title: "Local integrations, already done",
    text: "telebirr, CBE Birr, M-Pesa, EthSwitch, Chapa, Fayda ID, SMS gateways and bank cores. We have shipped them before, so you do not pay to rediscover them.",
    points: ["Payment and KYC integrations in weeks, not months", "USSD, Telegram and WhatsApp channels", "Amharic-ready interfaces"],
  },
];

const approach = [
  { image: icon1, bg: "bg-ink-800", title: "UX-driven engineering", text: "Flows and screens are designed before code is written, then tested with real users of the target segment." },
  { image: icon2, bg: "bg-cyan-500", title: "Shared understanding", text: "Architecture decision records and living documentation mean your team can take over at any point." },
  { image: icon3, bg: "bg-pink-500", title: "Proven experience", text: "Patterns from live ride-hailing, lending and gaming platforms, not from tutorials." },
  { image: icon4, bg: "bg-sky-500", title: "Security and IP", text: "Your code lives in your repositories. Secrets, access and data handling follow least-privilege by default." },
  { image: icon5, bg: "bg-orange-400", title: "Code reviews", text: "Every change is reviewed for correctness, performance and security before it reaches production." },
  { image: icon6, bg: "bg-rose-500", title: "QA and testing", text: "Automated end-to-end suites, load tests and release checklists gate every deployment." },
];

export default function Choose() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        crumbs={[{ href: "/choose", label: "Why Us" }]}
        title={
          <>
            The way we build <span className="text-gradient">great software</span>
          </>
        }
        text="Most of our clients came to us after a previous vendor left them with code nobody could run. Here is what we do differently."
      >
        <Link href="/contact" className="btn btn-primary">
          Talk to an engineer <HiArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Pillars */}
      <section className="section pt-0">
        <div className="container-x space-y-24">
          {pillars.map((p, i) => (
            <div key={p.title} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div data-aos={i % 2 ? "fade-left" : "fade-right"}>
                <div className="relative">
                  <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 to-accent-400/20" />
                  <Image src={p.image} alt="" className="w-full rounded-3xl object-cover shadow-lift" placeholder="blur" />
                </div>
              </div>
              <div data-aos={i % 2 ? "fade-right" : "fade-left"}>
                <span className="text-sm font-bold text-brand-600">0{i + 1}</span>
                <h2 className="h3 mt-2 text-ink-900">{p.title}</h2>
                <p className="mt-4 text-gray-600">{p.text}</p>
                <ul className="mt-6 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-gray-50">
        <div className="container-x">
          <SectionHeading eyebrow="Approach" title="Our design and development approach" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((a, i) => (
              <SpotlightCard key={a.title} className="card card-hover gradient-border flex gap-5 p-6" data-aos="fade-up" data-aos-delay={i * 60}>
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${a.bg} shadow-md`}>
                  <Image src={a.image} alt="" className="h-8 w-8 object-contain" />
                </span>
                <div>
                  <h3 className="font-bold text-ink-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{a.text}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <TechStack />
      <Process />
      <CTA />
    </>
  );
}
