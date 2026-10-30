import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { site } from "@/components/data/site";

export default function CTA({
  title = "Have a product in mind? Let's scope it this week.",
  text = "Tell us about the problem, the users and the deadline. We reply within one business day with a clear next step, not a sales pitch.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl bg-ink-900 px-6 py-14 text-white md:px-14 md:py-20"
          data-aos="zoom-y-out"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 animate-aurora rounded-full bg-brand-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-10 h-80 w-80 animate-aurora rounded-full bg-accent-500/30 blur-3xl [animation-delay:-6s]" />

          <div className="relative grid items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <h2 className="h2 text-white">{title}</h2>
              <p className="mt-4 max-w-xl text-lg text-white/65">{text}</p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-2 md:items-end">
              <Link href="/contact" className="btn btn-light w-full md:w-auto">
                Book a free consultation <HiArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex w-full gap-3 md:w-auto">
                <a
                  href={site.social.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost-dark flex-1"
                >
                  <FaTelegram className="h-4 w-4" /> Telegram
                </a>
                <a
                  href={site.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost-dark flex-1"
                >
                  <FaWhatsapp className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
