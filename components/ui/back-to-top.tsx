"use client";

import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi2";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink-900 text-white shadow-lift transition-all duration-300 ease-spring hover:-translate-y-1 hover:bg-brand-600 md:bottom-28 md:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <HiArrowUp className="h-5 w-5" />
    </button>
  );
}
