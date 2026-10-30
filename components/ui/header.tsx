"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiChevronDown, HiArrowRight, HiPhone } from "react-icons/hi2";

import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import ServiceIcon from "@/components/ui/service-icon";
import { nav, site } from "@/components/data/site";
import { services } from "@/components/data/services";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The menu remembers which path it was opened on, so a navigation closes it without an effect.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const menuOpen = openedOn === pathname;
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenedOn(pathname);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenedOn(null), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Pages whose hero is dark need light header text until the glass bar appears.
  const onDark = !scrolled && !menuOpen && pathname.startsWith("/work");
  const linkBase = onDark ? "text-white/80 hover:text-white" : "text-gray-700 hover:text-brand-700";
  const linkActive = onDark ? "text-white" : "text-brand-700";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-spring ${
        scrolled
          ? "border-b border-gray-200/70 bg-white/80 shadow-soft backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Logo dark={onDark} />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              "hasMenu" in item && item.hasMenu ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={open}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                    onFocus={open}
                    className={`group inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href) || menuOpen ? linkActive : linkBase
                    }`}
                  >
                    {item.label}
                    <HiChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                    <div
                      className={`absolute left-1/2 top-full z-50 mt-3 w-[760px] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200/80 bg-white/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-200 ease-out ${
                        menuOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                      onMouseEnter={open}
                      onMouseLeave={scheduleClose}
                      role="menu"
                      aria-hidden={!menuOpen}
                    >
                      <div className="grid grid-cols-3 gap-1">
                        {services.map((s, i) => (
                          <Link
                            key={s.id}
                            href={`/services/${s.id}`}
                            role="menuitem"
                            className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
                            style={{ animationDelay: `${i * 30}ms` }}
                          >
                            <span
                              className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${s.accent} text-white shadow-sm transition-transform duration-300 group-hover/item:scale-110`}
                            >
                              <ServiceIcon name={s.icon} className="h-4.5 w-4.5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-ink-900">
                                {s.title}
                              </span>
                              <span className="block text-xs leading-snug text-gray-500">
                                {s.short}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 flex items-center justify-between rounded-xl bg-ink-900 px-4 py-3 text-white">
                        <p className="text-sm">
                          Not sure where to start?{" "}
                          <span className="text-white/70">Tell us about the problem.</span>
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent-400 hover:text-accent-500"
                        >
                          Book a free consultation <HiArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? linkActive : linkBase
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full ${onDark ? "bg-accent-400" : "bg-brand-600"}`} />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${site.phone}`}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition ${linkBase}`}
            >
              <HiPhone className={`h-4 w-4 ${onDark ? "text-accent-400" : "text-brand-600"}`} />
              {site.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-sm btn-primary">
              Start a project
            </Link>
          </div>

          <MobileMenu dark={onDark} />
        </div>
      </div>
    </header>
  );
}
