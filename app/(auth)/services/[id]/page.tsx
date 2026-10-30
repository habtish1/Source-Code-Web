import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowRight, HiCheck } from "react-icons/hi2";

import PageHero from "@/components/ui/page-hero";
import ServiceIcon from "@/components/ui/service-icon";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/ui/project-card";
import CTA from "@/components/cta";
import { services, getService } from "@/components/data/services";
import { projects } from "@/components/data/work";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getService(params.id);
  if (!s) return { title: "Service not found" };
  return {
    title: s.title,
    description: s.tagline + " " + s.description.slice(0, 120),
    alternates: { canonical: `/services/${s.id}` },
    openGraph: { title: `${s.title} | Source Code`, description: s.tagline },
  };
}

/** Rough mapping from a service to projects that demonstrate it. */
const relatedWork: Record<string, string[]> = {
  "web-developments": ["esete-coffee", "wegagen-market-hub", "z-bingo"],
  "telegram-bots": ["tindu-bot", "emun-transport", "esete-coffee"],
  "app-developments": ["emun-transport", "melabooks", "wattway"],
  fintechs: ["adopay", "kacha", "duruj"],
  erp: ["chenet", "melabooks", "adopay"],
  "it-consultation": ["meseret", "maiden", "chenet"],
  "system-architecture-and-design": ["addismark", "emun-transport", "chenet"],
  "Whatsapp-bot": ["kacha", "adopay", "tindu-bot"],
  "database-adminstration": ["adopay", "z-bingo", "emun-transport"],
};

export default function ServicePage({ params }: Props) {
  const s = getService(params.id);
  if (!s) notFound();

  const related = (s.related.map(getService).filter(Boolean) as typeof services).slice(0, 3);
  const work = (relatedWork[s.id] ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.tagline,
    provider: { "@type": "Organization", name: "Source Code IT Solutions PLC" },
    areaServed: "Ethiopia",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Service"
        crumbs={[
          { href: "/services", label: "Services" },
          { href: `/services/${s.id}`, label: s.title },
        ]}
        title={s.title}
        text={s.tagline}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Discuss this service <HiArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/work" className="btn btn-ghost">
            Related work
          </Link>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7" data-aos="fade-up">
            <div className="flex items-center gap-4">
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-md`}>
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </span>
              <h2 className="h3 text-ink-900">Overview</h2>
            </div>
            <p className="lead mt-6">{s.description}</p>

            <h3 className="mt-12 text-xl font-bold text-ink-900">What you get</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.outcomes.map((o, i) => (
                <li
                  key={o}
                  className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 shadow-soft"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <HiCheck className="h-3.5 w-3.5" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5" data-aos="fade-left">
            <div className="sticky top-28 space-y-6">
              <div className="card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Typical stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.stack.map((t) => (
                    <span key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-ink-900 p-6 text-white">
                <h3 className="text-lg font-bold">Start with a 30-minute call</h3>
                <p className="mt-2 text-sm text-white/65">
                  We will ask about users, volumes and deadlines, then send a written scope within two business days.
                </p>
                <Link href="/contact" className="btn btn-light mt-5 w-full">
                  Book the call
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section bg-gray-50">
        <div className="container-x">
          <SectionHeading eyebrow="Scope" title="How we usually package it" align="left" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {s.deliverables.map((d, i) => (
              <div key={d.title} className="card card-hover gradient-border p-6" data-aos="fade-up" data-aos-delay={i * 80}>
                <span className="text-sm font-bold text-brand-600">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related work */}
      {work.length > 0 && (
        <section className="section">
          <div className="container-x">
            <SectionHeading eyebrow="Proof" title="Where we have done this before" align="left" />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {work.map((p, i) => (
                <ProjectCard key={p.slug} p={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-gray-50">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Common questions" align="left" />
          </div>
          <div className="space-y-3 lg:col-span-8">
            {s.faq.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-soft open:border-brand-200"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Also consider" title="Services that pair well" align="left" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {related.map((r, i) => (
              <Link
                key={r.id}
                href={`/services/${r.id}`}
                className="card card-hover group flex items-center gap-4 p-5"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${r.accent} text-white`}>
                  <ServiceIcon name={r.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-semibold text-ink-900 group-hover:text-brand-700">{r.title}</span>
                  <span className="block text-xs text-gray-500">{r.short}</span>
                </span>
                <HiArrowRight className="ml-auto h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-brand-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA title={`Ready to talk about ${s.title.toLowerCase()}?`} />
    </>
  );
}
