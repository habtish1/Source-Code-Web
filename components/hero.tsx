import Link from "next/link";
import { HiArrowRight, HiCheckBadge, HiMapPin, HiBolt, HiShieldCheck } from "react-icons/hi2";
import { FaTelegram } from "react-icons/fa6";
import VideoModal from "@/components/video-modal";
import { site } from "@/components/data/site";

const words = ["Software", "that", "runs", "real", "businesses."];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-32 left-1/4 h-[32rem] w-[32rem] animate-aurora rounded-full bg-brand-400/30 blur-3xl" />
        <div className="absolute -top-10 right-0 h-[28rem] w-[28rem] animate-aurora rounded-full bg-cyan-300/30 blur-3xl [animation-delay:-7s]" />
        <div className="absolute top-72 left-1/2 h-[22rem] w-[22rem] animate-aurora rounded-full bg-accent-400/20 blur-3xl [animation-delay:-12s]" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur animate-fade-up"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-dot rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Addis Ababa · Taking new projects
            </div>

            <h1 className="h1 word-reveal mt-6 text-ink-900">
              {words.map((w, i) => (
                <span key={w} style={{ animationDelay: `${120 + i * 90}ms` }} className="mr-[0.25em]">
                  {w === "real" ? <span className="text-gradient">{w}</span> : w}
                </span>
              ))}
            </h1>

            <p className="lead mt-6 max-w-xl animate-fade-up [animation-delay:600ms]">
              We are the engineering team behind ride-hailing, fintech, logistics and gaming platforms
              used every day across Ethiopia. Web, mobile, bots, ERP and the backends that hold it all
              together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row animate-fade-up [animation-delay:720ms]">
              <Link href="/contact" className="btn btn-primary">
                Get a free consultation <HiArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/work" className="btn btn-ghost">
                See our work
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 animate-fade-up [animation-delay:840ms]">
              {[
                "Fixed-scope or dedicated team",
                "Ethiopian payment rails built in",
                "We operate what we ship",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <HiCheckBadge className="h-4 w-4 text-brand-600" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual composition */}
          <div className="relative lg:col-span-6" aria-hidden="true">
            {/* Phones: a tidy 2-up grid instead of the layered composition */}
            <div className="grid grid-cols-2 gap-3 sm:hidden animate-fade-up [animation-delay:500ms]">
              <div className="glass rounded-2xl p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <HiMapPin className="h-5 w-5" />
                </span>
                <p className="mt-3 text-xs text-gray-500">Dispatch engine</p>
                <p className="text-sm font-semibold text-ink-900">Driver matched · 42s</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <HiShieldCheck className="h-5 w-5" />
                </span>
                <p className="mt-3 text-xs text-gray-500">Wallet settlement</p>
                <p className="text-sm font-semibold text-ink-900">ETB 1,240.00 · exactly-once</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white">
                  <FaTelegram className="h-5 w-5" />
                </span>
                <p className="mt-3 text-xs text-gray-500">Telegram bot</p>
                <p className="text-sm font-semibold text-ink-900">Parcel left Mekelle 06:40</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500 text-white">
                  <HiBolt className="h-5 w-5" />
                </span>
                <p className="mt-3 text-xs text-gray-500">API p95 · Uptime</p>
                <p className="text-sm font-semibold text-ink-900">118 ms · 99.9%</p>
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-[5/4] w-full max-w-xl sm:block">
              {/* Glow ring */}
              <div className="absolute inset-[12%] animate-spin-slow rounded-full border border-dashed border-brand-300/60" />
              <div className="absolute inset-[26%] rounded-full bg-gradient-to-br from-brand-600 to-cyan-500 opacity-90 shadow-glow" />
              <div className="absolute inset-[26%] rounded-full bg-gradient-to-br from-brand-600 to-cyan-500 animate-pulse-ring" />
              <div className="absolute inset-[26%] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-14 w-14 text-white" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
                </svg>
              </div>

              {/* Floating cards */}
              <div className="glass absolute left-0 top-[8%] w-56 rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <HiMapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">Dispatch engine</p>
                    <p className="text-sm font-semibold text-ink-900">Driver matched · 42s</p>
                  </div>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400" />
                </div>
              </div>

              <div className="glass absolute right-0 top-[22%] w-52 rounded-2xl p-4 animate-float-slow [animation-delay:-2s]">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">Wallet settlement</p>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    Exactly-once
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold tracking-tight text-ink-900">ETB 1,240.00</p>
                <p className="text-[11px] text-gray-500">telebirr · reconciled</p>
              </div>

              <div className="glass absolute bottom-[14%] left-[4%] w-60 rounded-2xl p-4 animate-float [animation-delay:-3.5s]">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-white">
                    <FaTelegram className="h-5 w-5" />
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-ink-900">Telegram bot</p>
                    <p className="text-xs leading-snug text-gray-500">
                      “Your parcel left Mekelle at 06:40. ETA Addis 17:10.”
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass absolute bottom-[4%] right-[6%] flex items-center gap-3 rounded-2xl p-3.5 animate-float-slow [animation-delay:-5s]">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500 text-white">
                  <HiBolt className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">API p95</p>
                  <p className="text-sm font-semibold text-ink-900">118 ms</p>
                </div>
                <span className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
                  <HiShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Uptime</p>
                  <p className="text-sm font-semibold text-ink-900">99.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video strip */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/60 p-4 backdrop-blur md:flex-row md:px-6" data-aos="fade-up">
          <p className="text-sm text-gray-600">
            Prefer to watch? A two-minute look at how we work with clients.
          </p>
          <VideoModal video="/videos/video.mp4" label="Watch the video (2 min)" />
        </div>
      </div>
      <span className="sr-only">{site.name}</span>
    </section>
  );
}
