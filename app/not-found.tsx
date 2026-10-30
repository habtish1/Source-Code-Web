import Link from "next/link";
import { HiArrowRight, HiHome } from "react-icons/hi2";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute left-1/3 top-10 h-80 w-80 animate-aurora rounded-full bg-brand-400/30 blur-3xl" />
        <div className="absolute right-1/4 top-40 h-72 w-72 animate-aurora rounded-full bg-accent-400/25 blur-3xl [animation-delay:-8s]" />
      </div>
      <div className="container-x text-center">
        <p className="text-gradient text-8xl font-bold tracking-tighter animate-fade-up md:text-9xl">404</p>
        <h1 className="h2 mt-4 text-ink-900 animate-fade-up [animation-delay:80ms]">That page does not exist</h1>
        <p className="lead mx-auto mt-4 max-w-xl animate-fade-up [animation-delay:160ms]">
          The link may be old or mistyped. Here are a few places to go instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-up [animation-delay:240ms]">
          <Link href="/" className="btn btn-primary">
            <HiHome className="h-4 w-4" /> Home
          </Link>
          <Link href="/services" className="btn btn-ghost">
            Services
          </Link>
          <Link href="/work" className="btn btn-ghost">
            Our work
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
