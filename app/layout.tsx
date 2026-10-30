import "./css/style.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { apmle } from "@/app/fontLoader";
import { site } from "@/components/data/site";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import AOSInit from "@/components/providers/aos-init";
import TawkChat from "@/components/providers/tawk";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Development in Ethiopia`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    "software development Ethiopia",
    "Addis Ababa software company",
    "mobile app development Ethiopia",
    "Telegram bot development",
    "WhatsApp bot",
    "fintech development",
    "ERP Ethiopia",
    "ride-hailing platform",
    "system architecture",
    "database administration",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Software Development in Ethiopia`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1554d1",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/image.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressCountry: "ET",
  },
  sameAs: [site.social.linkedin, site.social.telegram, site.social.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${apmle.variable}`}>
      <body className={`${apmle.className} min-h-screen flex flex-col bg-white text-gray-800`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ScrollProgress />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <BackToTop />
        <AOSInit />
        <TawkChat />
      </body>
    </html>
  );
}
