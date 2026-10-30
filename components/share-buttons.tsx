"use client";

import { useState } from "react";
import { FaLinkedinIn, FaTelegram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { HiLink, HiCheck, HiShare } from "react-icons/hi2";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;

  const links = [
    { label: "LinkedIn", Icon: FaLinkedinIn, href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
    { label: "X", Icon: FaXTwitter, href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}` },
    { label: "Telegram", Icon: FaTelegram, href: `https://t.me/share/url?url=${enc(url)}&text=${enc(title)}` },
    { label: "WhatsApp", Icon: FaWhatsapp, href: `https://wa.me/?text=${enc(title + " " + url)}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  const native = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* dismissed */
      }
    } else {
      copy();
    }
  };

  const cls =
    "flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700";

  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, Icon, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Share on ${label}`} className={cls}>
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button type="button" onClick={copy} aria-label="Copy link" className={cls}>
        {copied ? <HiCheck className="h-4 w-4 text-emerald-600" /> : <HiLink className="h-4 w-4" />}
      </button>
      <button type="button" onClick={native} aria-label="Share" className={`${cls} md:hidden`}>
        <HiShare className="h-4 w-4" />
      </button>
    </div>
  );
}
