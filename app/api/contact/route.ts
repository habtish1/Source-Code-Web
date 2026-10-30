import { NextResponse } from "next/server";
import { site } from "@/components/data/site";

export const runtime = "nodejs";

/**
 * Contact form delivery.
 *
 * Configure ONE or both of these in Vercel → Project → Environment Variables:
 *   TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID   → message lands in a Telegram chat/group
 *   RESEND_API_KEY (+ optional CONTACT_TO, CONTACT_FROM) → email via Resend
 *
 * With nothing configured the route answers 501 and the client falls back to a
 * pre-filled mailto: link, so the form is never a dead end.
 */

const MAX = { name: 120, email: 200, phone: 60, company: 160, message: 4000 };
const rate = new Map<string, { n: number; t: number }>();

function tooMany(ip: string) {
  const now = Date.now();
  const rec = rate.get(ip);
  if (!rec || now - rec.t > 10 * 60_000) {
    rate.set(ip, { n: 1, t: now });
    return false;
  }
  rec.n += 1;
  return rec.n > 8;
}

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field.
  if (clean(body.website, 50)) return NextResponse.json({ ok: true });

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const phone = clean(body.phone, MAX.phone);
  const company = clean(body.company, MAX.company);
  const budget = clean(body.budget, 60);
  const message = clean(body.message, MAX.message);
  const servicesPicked = Array.isArray(body.services)
    ? (body.services as unknown[]).map((s) => clean(s, 60)).filter(Boolean).slice(0, 10)
    : [];

  if (!name || !email || message.length < 20) {
    return NextResponse.json({ ok: false, error: "Please fill in your name, email and a short message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "That email address does not look right." }, { status: 400 });
  }

  const lines = [
    `New enquiry via ${site.url}`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    servicesPicked.length ? `Services: ${servicesPicked.join(", ")}` : null,
    budget ? `Budget: ${budget}` : null,
    ``,
    message,
  ].filter((l): l is string => l !== null);
  const text = lines.join("\n");

  const results: boolean[] = [];

  // Telegram
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChat = process.env.TELEGRAM_CHAT_ID;
  if (tgToken && tgChat) {
    try {
      const r = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: tgChat, text, disable_web_page_preview: true }),
      });
      results.push(r.ok);
    } catch {
      results.push(false);
    }
  }

  // Email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM || "Source Code Website <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO || site.email],
          reply_to: email,
          subject: `Project enquiry from ${name}${company ? ` (${company})` : ""}`,
          text,
        }),
      });
      results.push(r.ok);
    } catch {
      results.push(false);
    }
  }

  if (results.length === 0) {
    return NextResponse.json({ ok: false, error: "No delivery channel configured." }, { status: 501 });
  }
  if (results.some(Boolean)) return NextResponse.json({ ok: true });

  return NextResponse.json(
    { ok: false, error: "We could not deliver your message right now. Please reach us on Telegram or email." },
    { status: 502 }
  );
}
