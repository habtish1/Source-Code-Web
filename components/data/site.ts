export const site = {
  name: "Source Code IT Solutions PLC",
  shortName: "Source Code",
  tagline: "Software that runs real businesses in Ethiopia.",
  description:
    "Source Code IT Solutions PLC is an Addis Ababa software company building ride-hailing, fintech, logistics, gaming and enterprise platforms: web, mobile, Telegram and WhatsApp bots, ERP, system architecture and database administration.",
  url: "https://www.sourcecodeet.com",
  locale: "en_US",
  phone: "+251974017208",
  phoneDisplay: "+251 974 017 208",
  email: "info@sourcecodeet.com",
  supportEmail: "support@sourcecodeet.com",
  address: {
    line1: "Commet Building, Office 201",
    line2: "22, around Golagol",
    city: "Addis Ababa",
    country: "Ethiopia",
    mapUrl: "https://maps.app.goo.gl/EDy3CgevZ8qvebfu6",
  },
  hours: "Mon – Sat, 8:30 – 18:00 EAT",
  social: {
    linkedin: "https://www.linkedin.com/company/source-code-it-solutions-plc/",
    telegram: "https://t.me/sourcecodeet",
    whatsapp: "https://wa.me/251974017208",
    github: "https://github.com/Source-Code-IT-Solutions-PLC",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/work", label: "Our Work" },
  { href: "/choose", label: "Why Us" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;
