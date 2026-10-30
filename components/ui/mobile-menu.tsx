"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { HiChevronDown, HiPhone } from "react-icons/hi2";
import { FaTelegram, FaWhatsapp } from "react-icons/fa6";

import Logo from "./logo";
import ServiceIcon from "@/components/ui/service-icon";
import { nav, site } from "@/components/data/site";
import { services } from "@/components/data/services";

export default function MobileMenu({ dark = false }: { dark?: boolean }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  // Drawer remembers the path it was opened on; navigating closes it without an effect.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (v: boolean) => setOpenedOn(v ? pathname : null);

  return (
    <div className="flex lg:hidden">
      <button
        className={`hamburger ${open ? "active" : ""} -mr-2 rounded-lg p-2 ${dark ? "text-white" : "text-ink-900"}`}
        aria-controls="mobile-nav"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span className="sr-only">Open menu</span>
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        transition
        className="relative z-[70] lg:hidden"
        id="mobile-nav"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 ease-out data-[closed]:opacity-0"
        />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-spring data-[closed]:translate-x-full"
        >
              <div className="flex h-20 items-center justify-between border-b border-gray-200 px-5">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
                <ul className="space-y-1">
                  {nav.map((item, i) =>
                    "hasMenu" in item && item.hasMenu ? (
                      <li key={item.href} className="animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                        <button
                          onClick={() => setServicesOpen((v) => !v)}
                          aria-expanded={servicesOpen}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink-900 hover:bg-gray-100"
                        >
                          {item.label}
                          <HiChevronDown
                            className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-300 ${
                            servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <ul className="overflow-hidden pl-2">
                            <li>
                              <Link
                                href="/services"
                                className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-700"
                              >
                                All services
                              </Link>
                            </li>
                            {services.map((s) => (
                              <li key={s.id}>
                                <Link
                                  href={`/services/${s.id}`}
                                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  <span
                                    className={`flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br ${s.accent} text-white`}
                                  >
                                    <ServiceIcon name={s.icon} className="h-3.5 w-3.5" />
                                  </span>
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ) : (
                      <li key={item.href} className="animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                        <Link
                          href={item.href}
                          className={`block rounded-xl px-3 py-3 text-base font-medium hover:bg-gray-100 ${
                            pathname === item.href ? "bg-brand-50 text-brand-700" : "text-ink-900"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              <div className="space-y-3 border-t border-gray-200 p-5">
                <Link href="/contact" className="btn btn-primary w-full">
                  Start a project
                </Link>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <a href={`tel:${site.phone}`} className="btn-sm btn-ghost">
                    <HiPhone className="h-4 w-4" /> Call
                  </a>
                  <a href={site.social.telegram} target="_blank" rel="noreferrer" className="btn-sm btn-ghost">
                    <FaTelegram className="h-4 w-4" /> Telegram
                  </a>
                  <a href={site.social.whatsapp} target="_blank" rel="noreferrer" className="btn-sm btn-ghost">
                    <FaWhatsapp className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
