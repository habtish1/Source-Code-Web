import type { Metadata } from "next";
import Image from "next/image";
import { FaTelegram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlineClock, HiArrowUpRight } from "react-icons/hi2";

import PageHero from "@/components/ui/page-hero";
import ContactForm from "@/components/contact-form";
import { site } from "@/components/data/site";
import map from "@/public/images/map/googleMap.png";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Source Code IT Solutions in Addis Ababa about your software project. Phone, Telegram, WhatsApp, email or the form, we reply within one business day.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { Icon: HiOutlinePhone, label: "Call", value: site.phoneDisplay, href: `tel:${site.phone}` },
  { Icon: FaTelegram, label: "Telegram", value: "@sourcecodeet", href: site.social.telegram },
  { Icon: FaWhatsapp, label: "WhatsApp", value: site.phoneDisplay, href: site.social.whatsapp },
  { Icon: HiOutlineEnvelope, label: "Email", value: site.email, href: `mailto:${site.email}` },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ href: "/contact", label: "Contact" }]}
        title={
          <>
            Tell us what you are <span className="text-gradient">trying to build</span>
          </>
        }
        text="Share the problem, the users and the deadline. An engineer, not a salesperson, replies within one business day with a clear next step."
      />

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          {/* Form */}
          <div className="card p-6 md:p-10 lg:col-span-7" data-aos="fade-up">
            <h2 className="h3 text-ink-900">Start a conversation</h2>
            <p className="mt-2 text-sm text-gray-500">
              Fields marked * are required. We never share your details.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Channels */}
          <aside className="space-y-5 lg:col-span-5" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              {channels.map(({ Icon, label, value, href }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="card card-hover gradient-border group p-5"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gray-500">{label}</p>
                  <p className="mt-1 break-all text-sm font-semibold text-ink-900">{value}</p>
                </a>
              ))}
            </div>

            <div className="card overflow-hidden">
              <a href={site.address.mapUrl} target="_blank" rel="noreferrer" className="group relative block aspect-[16/9]">
                <Image src={map} alt="Map showing the Source Code office in Addis Ababa" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-900">
                  Open in Google Maps <HiArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <div className="space-y-3 p-6 text-sm text-gray-700">
                <p className="flex gap-3">
                  <HiOutlineMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span>
                    <span className="font-semibold text-ink-900">{site.address.line1}</span>
                    <br />
                    {site.address.line2}, {site.address.city}, {site.address.country}
                  </span>
                </p>
                <p className="flex gap-3">
                  <HiOutlineClock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {site.hours}
                </p>
                <p className="flex gap-3">
                  <FaLinkedinIn className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-700">
                    Source Code IT Solutions PLC on LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
