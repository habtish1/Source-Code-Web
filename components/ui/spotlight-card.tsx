"use client";

import { useRef } from "react";

/**
 * Card that follows the pointer with a soft radial highlight.
 * Pure CSS variables; no re-render on mouse move.
 */
export default function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  as?: any;
} & Record<string, any>) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Tag ref={ref} onMouseMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
