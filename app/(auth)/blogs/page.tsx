import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

import PageHero from "@/components/ui/page-hero";
import CTA from "@/components/cta";
import { sortedPosts } from "@/components/data/posts";
import { formatDate } from "@/components/utils/format";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles from the Source Code team on building software, mobile products and fintech in Ethiopia.",
  alternates: { canonical: "/blogs" },
};

export default function Blogs() {
  const [first, ...rest] = sortedPosts;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        crumbs={[{ href: "/blogs", label: "Insights" }]}
        title="Notes from building software in Ethiopia"
        text="Practical writing on mobile products, payments, bots and running systems in production."
      />

      <section className="section pt-0">
        <div className="container-x">
          {/* Featured */}
          <Link href={`/blogs/${first.slug}`} className="card card-hover group grid overflow-hidden lg:grid-cols-2" data-aos="fade-up">
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image src={first.cover} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" priority className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{first.category} · Featured</p>
              <h2 className="h3 mt-3 text-ink-900 group-hover:text-brand-700">{first.title}</h2>
              <p className="mt-4 text-gray-600">{first.excerpt}</p>
              <p className="mt-6 text-sm text-gray-500">
                {first.author.name} · {formatDate(first.date)} · {first.readingTime}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700">
                Read article <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {rest.length > 0 && (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Link key={p.slug} href={`/blogs/${p.slug}`} className="card card-hover group overflow-hidden" data-aos="fade-up" data-aos-delay={i * 70}>
                  <div className="relative aspect-[16/9]">
                    <Image src={p.cover} alt="" fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{p.category}</p>
                    <h3 className="mt-2 text-lg font-bold text-ink-900 group-hover:text-brand-700">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">{p.excerpt}</p>
                    <p className="mt-4 text-xs text-gray-500">
                      {formatDate(p.date)} · {p.readingTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA title="Want us to write about your problem?" text="Ask a question about mobile, payments or architecture and we may turn it into the next article." />
    </>
  );
}
