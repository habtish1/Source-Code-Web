import SectionHeading from "@/components/ui/section-heading";

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "A short, structured discovery: users, workflows, constraints and what success looks like. You get a scoped plan with cost and timeline.",
  },
  {
    n: "02",
    title: "Design",
    text: "Flows and screens first, then the system design: data model, integrations, infrastructure. Nothing is built before it is understood.",
  },
  {
    n: "03",
    title: "Build in sprints",
    text: "Two-week sprints with a demo at the end of each. You see working software early and steer priorities as you learn.",
  },
  {
    n: "04",
    title: "Harden & launch",
    text: "Load tests, security review, store submissions, monitoring and runbooks. Launch day is boring because the work was done before it.",
  },
  {
    n: "05",
    title: "Operate & grow",
    text: "We keep running what we built: on-call, upgrades, new features and the data to decide what comes next.",
  },
];

export default function Process() {
  return (
    <section className="section relative overflow-hidden bg-gray-50">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] opacity-60" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="How we work"
          title="A delivery process that removes surprises"
          text="The same five steps on every project, whether it is a two-week bot or a two-year platform."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:block" />
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-brand-200 bg-white text-lg font-bold text-brand-700 shadow-soft md:mx-0">
                {s.n}
                <span className="absolute -inset-1 -z-10 rounded-2xl bg-brand-500/10 blur-md" />
              </div>
              <h3 className="mt-5 text-center text-lg font-bold text-ink-900 md:text-left">{s.title}</h3>
              <p className="mt-2 text-center text-sm leading-relaxed text-gray-600 md:text-left">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
