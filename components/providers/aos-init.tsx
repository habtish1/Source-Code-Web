"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

/** Initialises scroll animations once and refreshes them on route change. */
export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 750,
      easing: "ease-out-cubic",
      offset: 48,
      delay: 0,
    });
  }, []);

  useEffect(() => {
    // New page content: give the DOM a tick, then recalc positions.
    const t = setTimeout(() => AOS.refreshHard(), 60);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
