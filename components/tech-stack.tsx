import {
  SiGo,
  SiKotlin,
  SiSpringboot,
  SiPython,
  SiNodedotjs,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiSwift,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGooglecloud,
  SiFirebase,
  SiTelegram,
  SiWhatsapp,
  SiVercel,
  SiTailwindcss,
  SiAndroid,
  SiApple,
} from "react-icons/si";
import SectionHeading from "@/components/ui/section-heading";

const rows = [
  [
    { Icon: SiGo, name: "Go" },
    { Icon: SiKotlin, name: "Kotlin" },
    { Icon: SiSpringboot, name: "Spring Boot" },
    { Icon: SiPython, name: "Python" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiPostgresql, name: "PostgreSQL" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiRedis, name: "Redis" },
    { Icon: SiDocker, name: "Docker" },
    { Icon: SiGooglecloud, name: "Google Cloud" },
  ],
  [
    { Icon: SiReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: SiFlutter, name: "Flutter" },
    { Icon: SiAndroid, name: "Android" },
    { Icon: SiApple, name: "iOS" },
    { Icon: SiSwift, name: "Swift" },
    { Icon: SiFirebase, name: "Firebase" },
    { Icon: SiTelegram, name: "Telegram API" },
    { Icon: SiWhatsapp, name: "WhatsApp API" },
    { Icon: SiVercel, name: "Vercel" },
  ],
];

export default function TechStack() {
  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tooling"
          title="A deliberately boring, battle-tested stack"
          text="We pick technologies our clients' teams can hire for and operate, and we go deep on each one."
        />
      </div>
      <div className="mask-fade-x mt-12 space-y-4">
        {rows.map((row, r) => {
          const items = [...row, ...row];
          return (
            <div key={r} className="pause-on-hover overflow-hidden">
              <div
                className={`flex w-max gap-3 ${r % 2 ? "animate-marquee-fast [animation-direction:reverse]" : "animate-marquee"}`}
              >
                {items.map(({ Icon, name }, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-soft transition hover:border-brand-300 hover:text-brand-700"
                  >
                    <Icon className="h-4.5 w-4.5" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
