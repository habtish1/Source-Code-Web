export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <p
          className={`eyebrow ${centered ? "justify-center" : ""} ${dark ? "text-accent-400" : ""}`}
          data-aos="fade-up"
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`h2 mt-3 ${dark ? "text-white" : "text-ink-900"}`}
        data-aos="fade-up"
        data-aos-delay="60"
      >
        {title}
      </h2>
      {text && (
        <p
          className={`lead mt-4 ${dark ? "text-white/65" : ""}`}
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {text}
        </p>
      )}
    </div>
  );
}
