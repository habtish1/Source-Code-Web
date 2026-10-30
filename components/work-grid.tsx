"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ui/project-card";
import { projects, sectors, type Sector } from "@/components/data/work";

export default function WorkGrid() {
  const [active, setActive] = useState<Sector | "All">("All");
  const list = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.sector === active)),
    [active]
  );

  return (
    <div>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filter by industry">
        {(["All", ...sectors] as const).map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={active === s}
            onClick={() => setActive(s)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active === s
                ? "bg-ink-900 text-white shadow-lift"
                : "border border-gray-200 bg-white text-gray-700 hover:border-brand-300 hover:text-brand-700"
            }`}
          >
            {s}
            <span className={`ml-1.5 text-xs ${active === s ? "text-white/60" : "text-gray-400"}`}>
              {s === "All" ? projects.length : projects.filter((p) => p.sector === s).length}
            </span>
          </button>
        ))}
      </div>

      <div key={active} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <div key={p.slug} className="animate-fade-up" style={{ animationDelay: `${Math.min(i * 50, 300)}ms` }}>
            <ProjectCard p={p} index={0} />
          </div>
        ))}
      </div>
    </div>
  );
}
