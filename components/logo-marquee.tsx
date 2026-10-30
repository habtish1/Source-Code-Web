import Image from "next/image";
import { clientLogos } from "@/components/data/work";

export default function LogoMarquee() {
  const items = [...clientLogos, ...clientLogos];
  return (
    <section className="border-y border-gray-200/70 bg-white py-10">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500" data-aos="fade-up">
          Products and partners we have built for
        </p>
        <div className="pause-on-hover mask-fade-x mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {items.map((l, i) => (
              <div
                key={`${l.name}-${i}`}
                className="flex h-12 items-center gap-2 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={l.src}
                  alt={l.name}
                  width={l.w}
                  height={48}
                  className="h-auto max-h-11 w-auto object-contain"
                  style={{ maxWidth: l.w }}
                />
                {l.label && (
                  <span className="text-sm font-bold uppercase tracking-widest text-ink-900">{l.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
