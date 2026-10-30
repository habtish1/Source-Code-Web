"use client";

import { useRef } from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** When set, the card renders as a Next.js link. */
  href?: string;
} & Record<string, any>;

/**
 * Card that follows the pointer with a soft radial highlight.
 * Pure CSS variables; no re-render on mouse move.
 */
export default function SpotlightCard({ children, className = "", href, ...rest }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  const cls = `spotlight ${className}`;

  if (href) {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseMove={onMove}
        className={cls}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  return (
    <div ref={ref as React.Ref<HTMLDivElement>} onMouseMove={onMove} className={cls} {...rest}>
      {children}
    </div>
  );
}
