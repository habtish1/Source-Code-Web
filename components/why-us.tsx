import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiOutlineCpuChip, HiOutlineBanknotes, HiOutlineMapPin, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import SectionHeading from "@/components/ui/section-heading";
import team from "@/public/images/team-1.png";

const points = [
  {
    Icon: HiOutlineMapPin,
    title: "Built for Ethiopian reality",
    text: "Flaky networks, OTP delays, cash-heavy users, telebirr and CBE Birr, Amharic UI. We design for it from day one instead of patching it in later.",
  },
  {
    Icon: HiOutlineBanknotes,
    title: "Money-grade engineering",
    text: "Our fintech and gaming systems move real money. Double-entry ledgers, idempotent payments and audit trails are the default on every project.",
  },
  {
    Icon: HiOutlineCpuChip,
    title: "Product owners, not order takers",
    text: "We run our own consumer platforms, so we understand retention, fraud, support load and unit economics, and we bring that to your product.",
  },
  {
    Icon: HiOutlineWrenchScrewdriver,
    title: "We operate what we ship",
    text: "Monitoring, on-call, upgrades and incident response are part of the engagement. You are never left holding code nobody maintains.",
  },
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative" data-aos="fade-right">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-accent-400/20" />
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <Image
                src={team}
                alt="Source Code engineers planning a sprint at a whiteboard"
                className="h-full w-full object-cover transition-transform duration-700 ease-spring hover:scale-105"
                placeholder="blur"
              />
            </div>
            <div className="glass absolute -bottom-6 -right-4 max-w-[240px] rounded-2xl p-4 md:-right-8 animate-float">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">Engagement models</p>
              <p className="mt-1 text-sm text-gray-700">
                Fixed-scope delivery, dedicated squad, or fractional CTO. Pick what fits the stage you are at.
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Source Code"
              title="Senior engineers who have already solved your problem once"
              text="Most agencies learn on your budget. We bring patterns proven on live platforms with real users and real money."
            />
            <ul className="mt-10 space-y-6">
              {points.map(({ Icon, title, text }, i) => (
                <li key={title} className="flex gap-4" data-aos="fade-up" data-aos-delay={i * 70}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/choose" className="mt-10 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800" data-aos="fade-up">
              More on how we work <HiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
