import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/section-heading";
import SpotlightCard from "@/components/ui/spotlight-card";
import ServiceIcon from "@/components/ui/service-icon";
import { services } from "@/components/data/services";

export default function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section relative" id="services">
      <div className="container-x">
        {!compact && (
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Nine disciplines. <span className="text-gradient">One accountable team.</span>
              </>
            }
            text="From a landing page to a national payments platform, every engagement is staffed by engineers who have shipped it before."
          />
        )}

        <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${compact ? "" : "mt-14"}`}>
          {services.map((s, i) => (
            <SpotlightCard
              key={s.id}
              as={Link}
              href={`/services/${s.id}`}
              className="card card-hover gradient-border group flex flex-col p-6"
              data-aos="fade-up"
              data-aos-delay={Math.min(i * 50, 250)}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-md transition-transform duration-500 ease-spring group-hover:-rotate-6 group-hover:scale-110`}
              >
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.tagline}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
                {s.outcomes.slice(0, 2).map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {o}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-700">
                Explore
                <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
