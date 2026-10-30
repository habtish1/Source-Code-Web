import Link from "next/link";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import type { Project } from "@/components/data/work";

const statusTone: Record<Project["status"], string> = {
  Live: "bg-emerald-500/15 text-emerald-700 ring-emerald-500/30",
  Delivered: "bg-brand-500/10 text-brand-700 ring-brand-500/30",
  "In development": "bg-accent-500/15 text-accent-600 ring-accent-500/30",
};

const dims = {
  sm: "h-10 w-10 text-sm",
  md: "h-14 w-14 text-lg",
  lg: "h-20 w-20 text-2xl",
} as const;

/**
 * Product mark. Square app icons fill the tile ("cover"); wordmarks and
 * transparent logos sit on a white tile with padding ("contain").
 */
export function ProjectMark({ p, size = "md" }: { p: Project; size?: keyof typeof dims }) {
  if (p.logo) {
    const cover = p.logoFit === "cover";
    return (
      <span
        className={`flex ${dims[size]} shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-gray-200 ${
          cover ? "" : "p-2"
        }`}
      >
        <Image
          src={p.logo}
          alt={`${p.name} logo`}
          width={160}
          height={160}
          className={`h-full w-full ${cover ? "object-cover" : "object-contain"}`}
        />
      </span>
    );
  }
  return (
    <span
      className={`flex ${dims[size]} shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} font-bold text-white shadow-md`}
    >
      {p.monogram}
    </span>
  );
}

export default function ProjectCard({ p, index = 0 }: { p: Project; index?: number }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="card card-hover gradient-border group relative flex h-full flex-col p-6"
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 60, 300)}
    >
      <div className="flex items-start justify-between gap-4">
        <ProjectMark p={p} />
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${statusTone[p.status]}`}
        >
          {p.status}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{p.sector}</p>
        <h3 className="mt-1 text-xl font-bold text-ink-900">{p.name}</h3>
        {p.client && <p className="text-xs text-gray-500">for {p.client}</p>}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600">{p.summary}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {p.stack.slice(0, 4).map((s) => (
          <span key={s} className="rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600">
            {s}
          </span>
        ))}
      </div>
      <span className="absolute right-5 top-5 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-brand-600 text-white opacity-0 transition-all duration-300 group-hover:translate-y-10 group-hover:opacity-100">
        <HiArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
