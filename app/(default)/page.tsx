import type { Metadata } from "next";
import Hero from "@/components/hero";
import LogoMarquee from "@/components/logo-marquee";
import ServicesGrid from "@/components/services-grid";
import WhyUs from "@/components/why-us";
import WorkShowcase from "@/components/work-showcase";
import Impact from "@/components/impact";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import InsightsPreview from "@/components/insights-preview";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: { absolute: "Source Code IT Solutions PLC | Software Development in Ethiopia" },
  description:
    "Addis Ababa software company building ride-hailing, fintech, logistics, gaming and enterprise platforms: web, mobile, Telegram and WhatsApp bots, ERP, architecture and DBA services.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <ServicesGrid />
      <WhyUs />
      <WorkShowcase />
      <Impact />
      <Process />
      <TechStack />
      <InsightsPreview />
      <CTA />
    </>
  );
}
