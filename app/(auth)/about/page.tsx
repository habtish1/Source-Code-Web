import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiOutlineHeart, HiOutlineEye, HiOutlineScale, HiOutlineRocketLaunch } from "react-icons/hi2";

import PageHero from "@/components/ui/page-hero";
import SectionHeading from "@/components/ui/section-heading";
import Impact from "@/components/impact";
import LogoMarquee from "@/components/logo-marquee";
import CTA from "@/components/cta";
import { site } from "@/components/data/site";
import team2 from "@/public/images/team-2.png";
import team3 from "@/public/images/team-3.png";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Source Code IT Solutions PLC is an Addis Ababa engineering company. We build and operate the software behind ride-hailing, fintech, logistics and gaming platforms in Ethiopia.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    Icon: HiOutlineScale,
    title: "Correct before clever",
    text: "Money, trips and parcels must balance. We favour boring, verifiable designs over fashionable ones.",
  },
  {
    Icon: HiOutlineEye,
    title: "Nothing hidden",
    text: "Clients see the backlog, the demos and the invoices. Bad news travels first, with a plan attached.",
  },
  {
    Icon: HiOutlineRocketLaunch,
    title: "Ship, then improve",
    text: "A working release in users' hands beats a perfect plan. We launch early and iterate on evidence.",
  },
  {
    Icon: HiOutlineHeart,
    title: "Built for here",
    text: "We build for Ethiopian users, networks, payments and regulations because we live with them too.",
  },
];

const timeline = [
  {
    phase: "Foundations",
    title: "Web, bots and bookkeeping",
    text: "We started with websites, Telegram bots and Melabooks, a mobile bookkeeping app for small businesses, learning what it takes to keep consumer software alive.",
  },
  {
    phase: "Fintech",
    title: "Money in motion",
    text: "Remittance for Kacha and Duruj, then a full digital lending and payments stack for a microfinance institution. Ledgers, USSD, telebirr and switch integrations became core skills.",
  },
  {
    phase: "Platforms",
    title: "Mobility and logistics at scale",
    text: "Emun Transport grew into a full ride-hailing platform with dispatch, wallets and carpooling. CHENET brought freight fleets and GPS tracking. Emun Express added intercity parcels.",
  },
  {
    phase: "Today",
    title: "Operating, not just building",
    text: "We run production systems around the clock, design architectures for gaming and escrow platforms, and advise companies on where technology budgets should go.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        crumbs={[{ href: "/about", label: "About" }]}
        title={
          <>
            An engineering company that <span className="text-gradient">runs what it builds</span>
          </>
        }
        text={`${site.name} designs, builds and operates software for businesses in Ethiopia and the diaspora. We are engineers first: our own platforms carry real passengers, parcels and payments every day, and that discipline shapes every client project.`}
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/work" className="btn btn-primary">
            See what we have built <HiArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Work with us
          </Link>
        </div>
      </PageHero>

      <LogoMarquee />

      {/* Story */}
      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div data-aos="fade-right">
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="From a small web shop to platform engineering"
              text="We began building websites and Telegram bots for local businesses. Each project taught us something about Ethiopian users, and we kept the ones that mattered."
            />
            <p className="mt-6 text-gray-600">
              Today the same team ships ride-hailing apps, freight systems, lending platforms and gaming
              backends, and still answers the phone when something breaks at two in the morning. We stay
              small on purpose: senior engineers, direct access, no account-manager layer.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-xs uppercase tracking-widest text-gray-500">Based in</p>
                <p className="mt-1 font-semibold text-ink-900">{site.address.city}, {site.address.country}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-xs uppercase tracking-widest text-gray-500">We work with</p>
                <p className="mt-1 font-semibold text-ink-900">Startups, MFIs, banks, operators</p>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl shadow-lift">
                <Image src={team2} alt="Engineers collaborating" className="h-full w-full object-cover" placeholder="blur" />
              </div>
              <div className="mt-10 overflow-hidden rounded-3xl shadow-lift">
                <Image src={team3} alt="Team reviewing a design" className="h-full w-full object-cover" placeholder="blur" />
              </div>
            </div>
            <div className="glass absolute -bottom-6 left-6 rounded-2xl px-5 py-4 animate-float">
              <p className="text-xs uppercase tracking-widest text-brand-600">Promise</p>
              <p className="mt-1 text-sm font-semibold text-ink-900">We reply within one business day.</p>
            </div>
          </div>
        </div>
      </section>

      <Impact />

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-x">
          <SectionHeading eyebrow="Values" title="What we optimise for" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, text }, i) => (
              <div key={title} className="card card-hover gradient-border p-6" data-aos="fade-up" data-aos-delay={i * 70}>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-bold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Journey" title="How the practice grew" />
          <ol className="relative mx-auto mt-14 max-w-3xl border-l border-gray-200 pl-8">
            {timeline.map((t, i) => (
              <li key={t.phase} className="relative pb-12 last:pb-0" data-aos="fade-up" data-aos-delay={i * 80}>
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-brand-600 shadow-glow">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{t.phase}</p>
                <h3 className="mt-1 text-xl font-bold text-ink-900">{t.title}</h3>
                <p className="mt-2 text-gray-600">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Careers */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="grid items-center gap-8 rounded-3xl border border-gray-200 bg-gradient-to-br from-brand-50 to-white p-8 md:grid-cols-3 md:p-12" data-aos="zoom-y-out">
            <div className="md:col-span-2">
              <p className="eyebrow">Careers</p>
              <h2 className="h3 mt-3 text-ink-900">Engineers who like hard, real problems</h2>
              <p className="mt-3 text-gray-600">
                We hire backend, mobile and full-stack engineers who want to own systems in production.
                Send a short note and links to what you have built.
              </p>
            </div>
            <div className="md:text-right">
              <a href={`mailto:${site.email}?subject=Engineering%20role%20at%20Source%20Code`} className="btn btn-dark">
                Introduce yourself <HiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
