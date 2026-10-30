import Link from "next/link";
import { FaLinkedinIn, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineClock } from "react-icons/hi2";

import Logo from "./logo";
import { site } from "@/components/data/site";
import { services } from "@/components/data/services";

const company = [
  { href: "/about", label: "About us" },
  { href: "/work", label: "Our work" },
  { href: "/choose", label: "Why choose us" },
  { href: "/blogs", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {site.tagline} We design, build and operate the platforms behind ride-hailing, fintech,
              logistics, gaming and enterprise businesses, from Addis Ababa.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { href: site.social.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
                { href: site.social.telegram, icon: FaTelegram, label: "Telegram" },
                { href: site.social.whatsapp, icon: FaWhatsapp, label: "WhatsApp" },
                { href: site.social.github, icon: FaGithub, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="text-white/75 transition hover:text-accent-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-white/75 transition hover:text-accent-400">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <a href={site.address.mapUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                  {site.address.line1}
                  <br />
                  {site.address.line2}, {site.address.city}
                </a>
              </li>
              <li className="flex gap-3">
                <HiOutlinePhone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <a href={`tel:${site.phone}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <HiOutlineEnvelope className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <HiOutlineClock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/50 md:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Built in Addis Ababa · Next.js on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
