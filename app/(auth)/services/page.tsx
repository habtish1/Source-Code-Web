import type { Metadata } from "next";
import PageHero from "@/components/ui/page-hero";
import ServicesGrid from "@/components/services-grid";
import Process from "@/components/process";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web and mobile development, Telegram and WhatsApp bots, fintech systems, ERP, IT consultation, system architecture and database administration from Addis Ababa.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        crumbs={[{ href: "/services", label: "Services" }]}
        title={
          <>
            Everything it takes to ship and run <span className="text-gradient">serious software</span>
          </>
        }
        text="Pick a single service or hand us the whole product. Every line below is something we run in production for our own platforms and for clients."
      />
      <div className="-mt-10">
        <ServicesGrid compact />
      </div>
      <Process />
      <CTA title="Not sure which service you need?" text="Describe the outcome you want. We will map it to the right mix of services and send you a scoped proposal." />
    </>
  );
}
