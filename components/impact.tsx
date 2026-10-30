import Counter from "@/components/ui/counter";
import { projects, sectors } from "@/components/data/work";
import { services } from "@/components/data/services";

export default function Impact() {
  const stats = [
    { value: projects.length, suffix: "+", label: "Products shipped", sub: "apps, platforms and bots in the field" },
    { value: sectors.length, suffix: "", label: "Industries served", sub: "mobility, fintech, logistics, gaming and more" },
    { value: services.length, suffix: "", label: "Service lines", sub: "from strategy to database operations" },
    { value: 24, suffix: "/7", label: "Operations", sub: "we monitor and support what we build" },
  ];

  return (
    <section className="relative -mt-px bg-white">
      <div className="container-x">
        <dl className="grid grid-cols-2 divide-x divide-gray-200 border-y border-gray-200 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="px-4 py-10 text-center md:px-8" data-aos="fade-up" data-aos-delay={i * 60}>
              <dd className="text-4xl font-bold tracking-tight text-ink-900 md:text-5xl">
                <Counter to={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-sm font-semibold text-ink-900">{s.label}</dt>
              <p className="mt-1 text-xs text-gray-500">{s.sub}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
