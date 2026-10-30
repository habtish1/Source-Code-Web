import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import WorkGrid from "@/components/work-grid";
import CTA from "@/components/cta";
import { projects } from "@/components/data/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Production platforms built by Source Code: Emun Transport ride-hailing, CHENET freight, Adopay lending, Kacha remittance, AddisMark gaming, Emun Express parcels and more.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Our work"
        crumbs={[{ href: "/work", label: "Our Work" }]}
        title={
          <>
            {projects.length} products. <span className="text-gradient-warm">Real users, real money.</span>
          </>
        }
        text="A selection of platforms we have designed, built and operated across mobility, fintech, logistics, gaming, commerce and energy."
      />
      <section className="section">
        <div className="container-x">
          <WorkGrid />
        </div>
      </section>
      <CTA title="Want yours on this page next year?" />
    </>
  );
}
