export type Sector =
  | "Mobility"
  | "Logistics"
  | "Fintech"
  | "Gaming"
  | "Commerce"
  | "Enterprise"
  | "Energy"
  | "Consumer";

export interface Project {
  slug: string;
  name: string;
  client?: string;
  sector: Sector;
  summary: string;
  highlights: string[];
  stack: string[];
  platforms: string[];
  status: "Live" | "In development" | "Delivered";
  featured?: boolean;
  /** Path under /public, when a logo exists. */
  logo?: string;
  /** "cover" for square app icons that fill the tile; "contain" (default) for wordmarks on white. */
  logoFit?: "contain" | "cover";
  /** Gradient used for the monogram tile when there is no logo. */
  accent: string;
  monogram: string;
}

export const projects: Project[] = [
  {
    slug: "emun-transport",
    name: "Emun Transport",
    sector: "Mobility",
    summary:
      "A full ride-hailing platform for Addis Ababa: passenger and driver apps, a real-time dispatch engine, dynamic fares, driver wallets, carpooling, equb savings circles and a complete operations back office.",
    highlights: [
      "Real-time dispatch with offer queues, penalties and loyalty tiers",
      "Fare engine with route anchoring and mock-GPS fraud detection",
      "Passenger and driver wallets, Chapa top-ups, agent POS settlement",
      "Admin panel with live map, heatmaps, RBAC and diagnostics",
    ],
    stack: ["Flutter", "Python", "MongoDB", "WebSockets", "OpenStreetMap / OSRM", "Docker", "GCP"],
    platforms: ["Android", "iOS", "Web admin"],
    status: "Live",
    featured: true,
    logo: "/images/work/emun-transport.png",
    logoFit: "contain",
    accent: "from-blue-600 to-cyan-500",
    monogram: "ET",
  },
  {
    slug: "chenet",
    name: "CHENET",
    sector: "Logistics",
    summary:
      "A freight platform for Ethiopia: a fleet back office for trucking companies with GPS tracking, trip budgets and settlements, growing into a load board that connects shippers, brokers and drivers.",
    highlights: [
      "Fleet TMS: vehicles, drivers, assignments, trip advances and settlement",
      "Live GPS tracking with PostGIS and a dedicated tracker app",
      "Kotlin / Spring Boot modular monolith with enforced module boundaries",
      "Web app, admin back office and native Android app",
    ],
    stack: ["Kotlin", "Spring Boot", "PostgreSQL + PostGIS", "Redis", "React", "Jetpack Compose", "Flutter"],
    platforms: ["Web", "Android", "Admin"],
    status: "Live",
    featured: true,
    logo: "/images/work/chenet.png",
    logoFit: "contain",
    accent: "from-amber-500 to-orange-600",
    monogram: "CH",
  },
  {
    slug: "adopay",
    name: "Adopay",
    client: "DECSI",
    sector: "Fintech",
    summary:
      "A digital lending and payments platform for a microfinance institution: loan origination and repayment, customer service, USSD, airtime and integrations with telebirr, M-Pesa and EthSwitch across a microservice architecture.",
    highlights: [
      "Loan, customer, user, transaction and configuration microservices",
      "USSD channel plus mobile app for customers",
      "Payment rails: telebirr, M-Pesa, EthSwitch, core banking write-back",
      "National ID (Fayda) verification hooks and reporting service",
    ],
    stack: ["Java / Spring Boot", "Next.js", "PostgreSQL", "Docker", "API Gateway"],
    platforms: ["Mobile", "USSD", "Web admin"],
    status: "Live",
    featured: true,
    logo: "/images/adopay.png",
    logoFit: "contain",
    accent: "from-emerald-500 to-green-600",
    monogram: "AP",
  },
  {
    slug: "kacha",
    name: "Kacha",
    client: "Kacha Digital Financial Service S.C.",
    sector: "Fintech",
    summary:
      "WhatsApp remittance bot and crowdfunding web platform for Ethiopia's first licensed digital financial service provider.",
    highlights: [
      "WhatsApp Business bot for remittance initiation and status",
      "Crowdfunding web app with campaigns and contributions",
      "Secure wallet and OTP flows",
    ],
    stack: ["Node.js", "React", "WhatsApp Business API", "PostgreSQL"],
    platforms: ["WhatsApp", "Web"],
    status: "Delivered",
    featured: true,
    logo: "/images/kacha.png",
    logoFit: "contain",
    accent: "from-yellow-400 to-orange-500",
    monogram: "K",
  },
  {
    slug: "addismark",
    name: "AddisMark",
    sector: "Gaming",
    summary:
      "A sportsbook and gaming platform: pre-match and live betting, retail cashier panel, virtual games, bingo, Ludo, jackpots, bonuses and promoter programs, backed by payment, settlement and notification services.",
    highlights: [
      "Go backend with betting, payment, settlement and user services",
      "Web, retail panel, Android and iOS apps",
      "Edge caching for odds with no-store pricing on bet detail",
      "Customer-service suite with admin panel and web app",
    ],
    stack: ["Go", "PostgreSQL", "Redis", "React", "Flutter", "Docker"],
    platforms: ["Web", "Android", "iOS", "Retail"],
    status: "In development",
    featured: true,
    logo: "/images/work/addismark.svg",
    logoFit: "cover",
    accent: "from-rose-500 to-red-600",
    monogram: "AM",
  },
  {
    slug: "emun-express",
    name: "Emun Express",
    sector: "Logistics",
    summary:
      "Intercity parcel delivery between offices: customers book and track parcels, counter staff manage the lifecycle, and both sender and receiver are notified at every step.",
    highlights: [
      "Kotlin / Spring Boot API with Flyway-managed Postgres",
      "Native Android customer app in Jetpack Compose",
      "React back office for counters and offices",
      "Public tracking website with prices and office locator",
    ],
    stack: ["Kotlin", "Spring Boot", "PostgreSQL", "Jetpack Compose", "React", "Docker + Caddy"],
    platforms: ["Android", "Web", "Back office"],
    status: "In development",
    featured: true,
    logo: "/images/work/emun-express.png",
    logoFit: "cover",
    accent: "from-sky-500 to-indigo-600",
    monogram: "EX",
  },
  {
    slug: "melabooks",
    name: "Melabooks",
    sector: "Enterprise",
    summary:
      "A mobile bookkeeping app that lets small businesses and freelancers record sales, expenses and stock, and see where their money goes, with an admin console and API behind it.",
    highlights: ["Mobile-first bookkeeping", "Admin v2 and API v2 rebuild", "Marketing website"],
    stack: ["Flutter", "Node.js", "PostgreSQL", "React"],
    platforms: ["Android", "iOS", "Web"],
    status: "Live",
    logo: "/images/work/melabooks.png",
    logoFit: "cover",
    accent: "from-blue-700 to-teal-500",
    monogram: "M",
  },
  {
    slug: "duruj",
    name: "Duruj",
    sector: "Fintech",
    summary: "A remittance platform website and customer flows for sending money home to Ethiopia.",
    highlights: ["Remittance web platform", "Partner payout integrations"],
    stack: ["React", "Node.js", "PostgreSQL"],
    platforms: ["Web"],
    status: "Delivered",
    logo: "/images/duruj.png",
    logoFit: "contain",
    accent: "from-blue-600 to-emerald-500",
    monogram: "D",
  },
  {
    slug: "z-bingo",
    name: "Z-Bingo",
    sector: "Gaming",
    summary:
      "An online bingo platform with player web app, admin console, game API and a real-time notification service, offered as a multi-tenant SaaS.",
    highlights: ["Real-time game rounds", "Admin and reporting", "Multi-tenant SaaS deployment"],
    stack: ["React", "Node.js", "PostgreSQL", "WebSockets", "Docker"],
    platforms: ["Web", "Admin"],
    status: "Live",
    logo: "/images/work/z-bingo.jpg",
    logoFit: "cover",
    accent: "from-fuchsia-500 to-purple-600",
    monogram: "ZB",
  },
  {
    slug: "wegagen-market-hub",
    name: "Wegagen Market Hub",
    client: "Wegagen Bank",
    sector: "Commerce",
    summary:
      "A bank-backed online marketplace for Ethiopian merchants and shoppers, with virtual-account payments tied to the bank's core.",
    highlights: ["Merchant catalogues and orders", "Virtual-account payment service", "Next.js storefront"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Bank virtual accounts"],
    platforms: ["Web"],
    status: "Delivered",
    logo: "/images/work/wegagen-market-hub.png",
    logoFit: "contain",
    accent: "from-orange-500 to-amber-600",
    monogram: "WM",
  },
  {
    slug: "maiden",
    name: "Maiden",
    sector: "Consumer",
    summary:
      "A trust-first service marketplace: verified providers, bookings and payments, delivered as mobile app, web, admin and API with an end-to-end test suite.",
    highlights: ["Mobile, web, admin and API", "Race-safe, audited money flows", "Play Store release"],
    stack: ["Flutter", "Node.js", "PostgreSQL", "Docker"],
    platforms: ["Android", "Web", "Admin"],
    status: "Live",
    logo: "/images/work/maiden.png",
    logoFit: "cover",
    accent: "from-pink-500 to-rose-600",
    monogram: "MD",
  },
  {
    slug: "wattway",
    name: "WattWay",
    sector: "Energy",
    summary:
      "An EV charging network platform: charging-station API, driver app to find and start a charge, station operator app and an admin console.",
    highlights: ["Station management API with Swagger docs", "Driver and operator mobile apps", "Admin dashboard"],
    stack: ["Node.js", "Flutter", "Firebase", "PostgreSQL"],
    platforms: ["Android", "iOS", "Web admin"],
    status: "Delivered",
    logo: "/images/work/wattway.jpg",
    logoFit: "cover",
    accent: "from-lime-500 to-green-600",
    monogram: "W",
  },
  {
    slug: "esete-coffee",
    name: "Esete Coffee",
    sector: "Commerce",
    summary:
      "A fast, SEO-complete website for a specialty Ethiopian coffee exporter with live owner chat, Telegram alerts and six origin pages, shipped as a single Go binary.",
    highlights: ["Single Go binary, SQLite, zero JS frameworks", "Live chat over Server-Sent Events", "Full structured data and sitemaps"],
    stack: ["Go", "SQLite", "HTML / CSS"],
    platforms: ["Web"],
    status: "Live",
    logo: "/images/work/esete-coffee.svg",
    logoFit: "contain",
    accent: "from-amber-700 to-yellow-600",
    monogram: "EC",
  },
  {
    slug: "tindu-bot",
    name: "Tindu Bot",
    sector: "Consumer",
    summary: "A Telegram and web bot platform with a broker API and admin console for managing users, flows and transactions.",
    highlights: ["Telegram bot API", "Web bot client", "Admin console"],
    stack: ["Node.js", "TypeScript", "React", "Redis"],
    platforms: ["Telegram", "Web"],
    status: "Delivered",
    logo: "/images/work/tindu-bot.jpg",
    logoFit: "cover",
    accent: "from-cyan-500 to-blue-600",
    monogram: "TB",
  },
  {
    slug: "yes-taxi",
    name: "YES Taxi",
    sector: "Mobility",
    summary: "A Flutter taxi-hailing mobile app with localisation, Firebase messaging and live trip tracking.",
    highlights: ["Flutter passenger app", "Firebase push and auth", "Multi-language"],
    stack: ["Flutter", "Firebase"],
    platforms: ["Android", "iOS"],
    status: "Delivered",
    logo: "/images/work/yes-taxi.png",
    logoFit: "cover",
    accent: "from-yellow-500 to-amber-600",
    monogram: "YT",
  },
  {
    slug: "meseret",
    name: "Meseret",
    sector: "Fintech",
    summary:
      "Escrow-backed, inspector-verified construction for the Ethiopian diaspora: owners abroad fund milestones into bank escrow, inspectors capture sealed evidence on site, and funds release only when work is verified.",
    highlights: ["Go ledger service", "NestJS core API and Next.js web", "Native Kotlin and Swift apps"],
    stack: ["Go", "NestJS", "Next.js", "Kotlin", "Swift", "PostgreSQL"],
    platforms: ["Web", "Android", "iOS"],
    status: "In development",
    logo: "/images/work/meseret.svg",
    logoFit: "cover",
    accent: "from-stone-600 to-amber-700",
    monogram: "መ",
  },
  {
    slug: "capstone",
    name: "Capstone",
    sector: "Enterprise",
    summary: "Digital platform work for Capstone, delivered as part of our enterprise web and systems practice.",
    highlights: ["Web platform", "Brand-aligned UI"],
    stack: ["React", "Node.js"],
    platforms: ["Web"],
    status: "Delivered",
    logo: "/images/capstone.png",
    logoFit: "contain",
    accent: "from-red-900 to-stone-700",
    monogram: "C",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const sectors = Array.from(new Set(projects.map((p) => p.sector)));

/** Logos shown in the trust marquee. */
export const clientLogos = [
  { name: "Emun Transport", src: "/images/work/emun-transport.png", w: 48, label: "EMUN" },
  { name: "CHENET", src: "/images/work/chenet.png", w: 120 },
  { name: "Adopay", src: "/images/adopay.png", w: 100 },
  { name: "Kacha", src: "/images/kacha.png", w: 44, label: "KACHA" },
  { name: "Wegagen Bank Market Hub", src: "/images/work/wegagen-market-hub.png", w: 150 },
  { name: "Melabooks", src: "/images/mela.png", w: 40, label: "MELABOOKS" },
  { name: "Duruj", src: "/images/duruj.png", w: 110 },
  { name: "WattWay", src: "/images/work/wattway.jpg", w: 44, label: "WATTWAY" },
  { name: "Esete Coffee", src: "/images/work/esete-coffee.svg", w: 150 },
  { name: "Capstone", src: "/images/capstone.png", w: 150 },
];
