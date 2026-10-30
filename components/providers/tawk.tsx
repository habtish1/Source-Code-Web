"use client";

import Script from "next/script";

const TAWK_SRC = "https://embed.tawk.to/6655e43f9a809f19fb363050/1huvo76hg";

/** Tawk.to live chat, loaded after the page is interactive so it never blocks rendering. */
export default function TawkChat() {
  return (
    <Script
      id="tawk-to"
      src={TAWK_SRC}
      strategy="lazyOnload"
      crossOrigin="anonymous"
    />
  );
}
