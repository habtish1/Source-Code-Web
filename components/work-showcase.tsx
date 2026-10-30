import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/ui/project-card";
import { featuredProjects } from "@/components/data/work";

export default function WorkShowcase() {
  return (
    <section className="section relative overflow-hidden bg-ink-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 animate-aurora rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 animate-aurora rounded-full bg-accent-500/20 blur-3xl [animation-delay:-9s]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            dark
            eyebrow="Selected work"
            title="Platforms people in Ethiopia use every day"
            text="Ride-hailing, freight, lending, remittance and gaming: these are production systems we designed, built and still operate."
          />
          <Link href="/work" className="btn btn-ghost-dark shrink-0" data-aos="fade-left">
            All projects <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
