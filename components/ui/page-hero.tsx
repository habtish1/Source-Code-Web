import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";

export default function PageHero({
  eyebrow,
  title,
  text,
  crumbs = [],
  children,
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  crumbs?: { href: string; label: string }[];
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden pb-14 pt-32 md:pb-20 md:pt-40 ${
        dark ? "bg-ink-900 text-white" : "bg-gradient-to-b from-brand-50/70 via-white to-white"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className={`absolute inset-0 ${dark ? "bg-grid-dark opacity-30" : "bg-grid opacity-70"} [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]`} />
        <div className="absolute -top-32 right-1/4 h-96 w-96 animate-aurora rounded-full bg-brand-400/25 blur-3xl" />
        <div className="absolute -top-10 left-0 h-72 w-72 animate-aurora rounded-full bg-accent-400/20 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="container-x relative">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 animate-fade-up">
            <ol className={`flex flex-wrap items-center gap-1 text-xs ${dark ? "text-white/60" : "text-gray-500"}`}>
              <li>
                <Link href="/" className="hover:text-brand-600">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1">
                  <HiChevronRight className="h-3 w-3" />
                  {i === crumbs.length - 1 ? (
                    <span className={dark ? "text-white" : "text-ink-900"}>{c.label}</span>
                  ) : (
                    <Link href={c.href} className="hover:text-brand-600">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <p className={`eyebrow animate-fade-up ${dark ? "text-accent-400" : ""}`}>{eyebrow}</p>
          )}
          <h1 className={`h1 mt-4 animate-fade-up [animation-delay:80ms] ${dark ? "text-white" : "text-ink-900"}`}>
            {title}
          </h1>
          {text && (
            <p className={`lead mt-5 animate-fade-up [animation-delay:160ms] ${dark ? "text-white/65" : ""}`}>
              {text}
            </p>
          )}
          {children && <div className="mt-8 animate-fade-up [animation-delay:240ms]">{children}</div>}
        </div>
      </div>
    </section>
  );
}
