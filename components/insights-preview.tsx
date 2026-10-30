import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import SectionHeading from "@/components/ui/section-heading";
import { sortedPosts } from "@/components/data/posts";
import { formatDate } from "@/components/utils/format";

export default function InsightsPreview() {
  const posts = sortedPosts.slice(0, 2);
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Notes from building software in Ethiopia"
          />
          <Link href="/blogs" className="btn btn-ghost shrink-0" data-aos="fade-left">
            All articles <HiArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blogs/${p.slug}`}
              className="card card-hover group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={p.cover}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500">
                  {formatDate(p.date)} · {p.readingTime}
                </p>
                <h3 className="mt-2 text-xl font-bold text-ink-900 group-hover:text-brand-700">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
