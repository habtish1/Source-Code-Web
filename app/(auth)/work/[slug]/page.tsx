import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowRight, HiArrowLeft, HiCheck } from "react-icons/hi2";

import PageHero from "@/components/ui/page-hero";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard, { ProjectMark } from "@/components/ui/project-card";
import CTA from "@/components/cta";
import { projects, getProject } from "@/components/data/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.name} · ${p.sector}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const more = projects.filter((x) => x.sector === p.sector && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        dark
        eyebrow={p.sector}
        crumbs={[
          { href: "/work", label: "Our Work" },
          { href: `/work/${p.slug}`, label: p.name },
        ]}
        title={p.name}
        text={p.summary}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ProjectMark p={p} size="lg" />
          <div className="flex flex-wrap gap-2">
            {p.platforms.map((pl) => (
              <span key={pl} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                {pl}
              </span>
            ))}
            <span className="rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold text-accent-400 ring-1 ring-accent-500/40">
              {p.status}
            </span>
          </div>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading align="left" eyebrow="What we built" title="Highlights" />
            <ul className="mt-8 space-y-4">
              {p.highlights.map((h, i) => (
                <li key={h} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-soft" data-aos="fade-up" data-aos-delay={i * 60}>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white`}>
                    <HiCheck className="h-5 w-5" />
                  </span>
                  <p className="text-gray-700">{h}</p>
                </li>
              ))}
            </ul>
            {p.client && (
              <p className="mt-8 text-sm text-gray-500">
                Built for <span className="font-semibold text-ink-900">{p.client}</span>.
              </p>
            )}
          </div>
          <aside className="lg:col-span-5" data-aos="fade-left">
            <div className="sticky top-28 space-y-6">
              <div className="card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-gray-500">Platforms</h3>
                <p className="mt-2 text-sm text-gray-700">{p.platforms.join(" · ")}</p>
              </div>
              <div className="rounded-2xl bg-brand-600 p-6 text-white shadow-glow">
                <h3 className="text-lg font-bold">Building something similar?</h3>
                <p className="mt-2 text-sm text-white/75">
                  We can reuse proven architecture and integrations from this project to shorten your timeline.
                </p>
                <Link href="/contact" className="btn btn-light mt-5 w-full">
                  Talk to us <HiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container-x">
            <SectionHeading align="left" eyebrow="More in this sector" title={`Other ${p.sector.toLowerCase()} work`} />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {more.map((m, i) => (
                <ProjectCard key={m.slug} p={m} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="container-x flex items-center justify-between py-10 text-sm font-semibold">
        <Link href={`/work/${prev.slug}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-700">
          <HiArrowLeft className="h-4 w-4" /> {prev.name}
        </Link>
        <Link href={`/work/${next.slug}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-700">
          {next.name} <HiArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <CTA />
    </>
  );
}
