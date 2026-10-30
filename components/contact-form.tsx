"use client";

import { useState } from "react";
import { HiArrowRight, HiCheckCircle, HiExclamationTriangle } from "react-icons/hi2";
import { services } from "@/components/data/services";
import { site } from "@/components/data/site";

type Status = "idle" | "sending" | "sent" | "error" | "fallback";

const budgets = ["Under 100k ETB", "100k – 500k ETB", "500k – 2M ETB", "2M+ ETB", "Not sure yet"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const payload = { ...data, services: picked };

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        setPicked([]);
        return;
      }
      if (res.status === 501) {
        // No delivery channel configured on the server: hand off to the visitor's mail client.
        const subject = `Project enquiry from ${data.name}`;
        const body = [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          data.phone ? `Phone: ${data.phone}` : "",
          data.company ? `Company: ${data.company}` : "",
          picked.length ? `Services: ${picked.join(", ")}` : "",
          data.budget ? `Budget: ${data.budget}` : "",
          "",
          data.message,
        ]
          .filter(Boolean)
          .join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("fallback");
        return;
      }
      setError(json.error || "Something went wrong. Please try again or reach us on Telegram.");
      setStatus("error");
    } catch {
      setError("Network error. Please try again or reach us on Telegram.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center animate-fade-up">
        <HiCheckCircle className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-bold text-ink-900">Thanks, we have it.</h3>
        <p className="mt-2 text-gray-600">
          An engineer will reply within one business day. For anything urgent, message us on{" "}
          <a href={site.social.telegram} className="font-semibold text-brand-700" target="_blank" rel="noreferrer">
            Telegram
          </a>
          .
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-sm btn-ghost mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div>
        <p className="form-label">What do you need? <span className="text-gray-400">(pick any)</span></p>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const on = picked.includes(s.title);
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s.title)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  on
                    ? "bg-brand-600 text-white shadow-lift"
                    : "border border-gray-300 bg-white text-gray-700 hover:border-brand-400 hover:text-brand-700"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">Your name *</label>
          <input id="name" name="name" required autoComplete="name" className="form-input" placeholder="Abebe Kebede" />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" className="form-input" placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">Phone / Telegram</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="form-input" placeholder="+251 9.. or @handle" />
        </div>
        <div>
          <label htmlFor="company" className="form-label">Company</label>
          <input id="company" name="company" autoComplete="organization" className="form-input" placeholder="Company or project name" />
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="form-label">Indicative budget</label>
        <select id="budget" name="budget" className="form-select" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label">Tell us about the project *</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={5}
          className="form-textarea"
          placeholder="Who is it for, what should it do, and when do you need it?"
        />
      </div>

      {status === "error" && (
        <p className="flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          <HiExclamationTriangle className="mt-0.5 h-4 w-4 shrink-0" /> {error}
        </p>
      )}
      {status === "fallback" && (
        <p className="rounded-xl border border-brand-200 bg-brand-50 p-3 text-sm text-brand-800">
          We opened your email app with the message pre-filled. If nothing happened, email us at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">By sending you agree to be contacted about your enquiry.</p>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary">
          {status === "sending" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending…
            </>
          ) : (
            <>
              Send message <HiArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
