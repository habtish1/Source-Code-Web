import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

import CTA from "@/components/cta";
import ShareButtons from "@/components/share-buttons";
import { posts, getPost, sortedPosts, type Block } from "@/components/data/posts";
import { site } from "@/components/data/site";
import { formatDate } from "@/components/utils/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: "Article not found" };
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blogs/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.excerpt,
      publishedTime: p.date,
      images: [{ url: p.cover }],
    },
  };
}

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "lead":
      return (
        <p key={i} className="text-xl leading-relaxed text-gray-700 md:text-2xl">
          {b.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="mt-12 text-2xl font-bold tracking-tight text-ink-900 md:text-3xl">
          {b.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-5 text-lg leading-relaxed text-gray-700">
          {b.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-6 space-y-4">
          {b.items.map((it, j) => (
            <li key={j} className="flex gap-3 text-lg leading-relaxed text-gray-700">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>
                {it.title && <strong className="text-ink-900">{it.title} </strong>}
                {it.text}
              </span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className="mt-10 rounded-2xl border-l-4 border-brand-600 bg-brand-50 px-6 py-5 text-xl font-medium italic text-ink-900">
          {b.text}
        </blockquote>
      );
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${site.url}/blogs/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}${post.cover}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/images/image.png` } },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="relative overflow-hidden pt-32 md:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 to-white" />
          <div className="container-x max-w-4xl">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-700 animate-fade-up">
              <HiArrowLeft className="h-4 w-4" /> All insights
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-600 animate-fade-up [animation-delay:60ms]">{post.category}</p>
            <h1 className="h1 mt-3 text-ink-900 animate-fade-up [animation-delay:120ms]">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 animate-fade-up [animation-delay:180ms]">
              <span className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">SC</span>
                <span className="font-medium text-ink-900">{post.author.name}</span>
              </span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
          <div className="container-x mt-10 max-w-5xl" data-aos="zoom-y-out">
            <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-lift">
              <Image src={post.cover} alt="" fill priority sizes="(min-width:1024px) 1024px, 100vw" className="object-cover" />
            </div>
          </div>
        </header>

        <div className="container-x grid gap-12 py-14 lg:grid-cols-12 md:py-20">
          <div className="lg:col-span-8 lg:col-start-3">
            {post.body.map(renderBlock)}

            <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">Found this useful? Share it.</p>
              <ShareButtons url={url} title={post.title} />
            </div>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container-x">
            <p className="eyebrow">Keep reading</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((p, i) => (
                <Link key={p.slug} href={`/blogs/${p.slug}`} className="card card-hover group overflow-hidden" data-aos="fade-up" data-aos-delay={i * 70}>
                  <div className="relative aspect-[16/9]">
                    <Image src={p.cover} alt="" fill sizes="33vw" className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{p.category}</p>
                    <h3 className="mt-2 font-bold text-ink-900 group-hover:text-brand-700">{p.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                      Read <HiArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
