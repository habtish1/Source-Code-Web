export type ServiceIcon =
  | "globe"
  | "telegram"
  | "mobile"
  | "fintech"
  | "erp"
  | "consult"
  | "architecture"
  | "whatsapp"
  | "database";

export interface Service {
  /** URL segment. Kept stable so existing links keep working. */
  id: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  icon: ServiceIcon;
  accent: string; // tailwind gradient classes
  outcomes: string[];
  deliverables: { title: string; text: string }[];
  stack: string[];
  faq: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    id: "web-developments",
    title: "Web Development",
    short: "Fast, secure web apps and sites",
    tagline: "Websites and web platforms that load fast, rank well and scale.",
    description:
      "From marketing sites to full back-office portals, we design and build web products on modern frameworks. Every build ships with responsive layouts, accessibility basics, SEO structure, analytics and a deployment pipeline, so the site keeps working long after launch.",
    icon: "globe",
    accent: "from-blue-500 to-cyan-400",
    outcomes: [
      "Responsive, mobile-first layouts tested on real devices",
      "Core Web Vitals in the green: fast first paint and stable layout",
      "SEO-ready structure: metadata, sitemaps, structured data",
      "Admin dashboards and back offices with role-based access",
    ],
    deliverables: [
      {
        title: "Marketing & corporate sites",
        text: "Content-driven sites with a CMS or markdown workflow, multilingual support and lead forms wired to your inbox or CRM.",
      },
      {
        title: "Web applications & portals",
        text: "Customer portals, operations dashboards and back offices built on Next.js or React with typed APIs behind them.",
      },
      {
        title: "E-commerce & marketplaces",
        text: "Catalogues, carts, checkout with Ethiopian payment rails (telebirr, CBE Birr, bank virtual accounts) and order management.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Go", "PostgreSQL", "Vercel"],
    faq: [
      {
        q: "How long does a website take?",
        a: "A marketing site typically ships in 3 to 5 weeks. Web applications are scoped in sprints; most first releases land within 8 to 12 weeks.",
      },
      {
        q: "Can you work with our existing design?",
        a: "Yes. We build from Figma files or brand guidelines you already have, or design from scratch with you.",
      },
    ],
    related: ["app-developments", "system-architecture-and-design", "erp"],
  },
  {
    id: "telegram-bots",
    title: "Telegram Bots",
    short: "Automated service on Telegram",
    tagline: "Put your service where your customers already are.",
    description:
      "Telegram is the default messenger for millions of Ethiopians. We build bots and Telegram Mini Apps that handle orders, payments, support tickets, wallet balances and notifications around the clock, integrated with your existing systems.",
    icon: "telegram",
    accent: "from-sky-500 to-blue-600",
    outcomes: [
      "24/7 self-service for orders, bookings and support",
      "Wallet and payment flows with OTP and transaction history",
      "Broadcasts and segmented notifications to your audience",
      "Admin console to monitor conversations and metrics",
    ],
    deliverables: [
      {
        title: "Service & support bots",
        text: "Menu-driven or conversational bots that answer FAQs, open tickets and hand over to a human agent when needed.",
      },
      {
        title: "Wallet & payment bots",
        text: "Secure wallet extensions: check balances, top up, transfer and pay, with full audit trails and fraud limits.",
      },
      {
        title: "Telegram Mini Apps",
        text: "Rich web experiences inside Telegram for catalogues, games, loyalty programs and dashboards.",
      },
    ],
    stack: ["Node.js", "Go", "Python", "grammY / Telegraf", "Redis", "PostgreSQL", "Webhooks"],
    faq: [
      {
        q: "Can the bot connect to our database or ERP?",
        a: "Yes. Bots are thin interfaces over an API we build or you already have. We integrate with REST, SOAP and database-level sources.",
      },
      {
        q: "Do you handle payments inside the bot?",
        a: "We integrate telebirr, CBE Birr, Chapa and bank APIs, with reconciliation and settlement reports for your finance team.",
      },
    ],
    related: ["Whatsapp-bot", "fintechs", "web-developments"],
  },
  {
    id: "app-developments",
    title: "Mobile App Development",
    short: "iOS & Android apps that ship",
    tagline: "Native-quality apps for Android and iOS, built once, maintained well.",
    description:
      "We have shipped ride-hailing, delivery, bookkeeping, charging-station and remittance apps to the Play Store and App Store. We know what breaks in the field: flaky networks, background location, low-end devices and OTP delivery. Our apps are built to survive it.",
    icon: "mobile",
    accent: "from-violet-500 to-fuchsia-500",
    outcomes: [
      "Flutter or native Kotlin / Swift depending on the product",
      "Offline-first flows and background services that keep running",
      "Store listing, release management and crash monitoring",
      "Push notifications, deep links and in-app payments",
    ],
    deliverables: [
      {
        title: "Consumer apps",
        text: "Passenger, customer and shopper apps with maps, real-time tracking, wallets, ratings and referrals.",
      },
      {
        title: "Field & operations apps",
        text: "Driver, courier, agent and inspector apps with GPS capture, photo evidence, offline queues and sync.",
      },
      {
        title: "App modernisation",
        text: "Stabilising existing apps: crash-rate reduction, performance work, SDK upgrades and store compliance.",
      },
    ],
    stack: ["Flutter", "Kotlin", "Jetpack Compose", "Swift", "Firebase", "Google Maps", "WebSockets"],
    faq: [
      {
        q: "Flutter or native?",
        a: "Flutter when one team should ship both platforms quickly. Native Kotlin when the app depends heavily on background services, hardware or platform UI.",
      },
      {
        q: "Do you publish to the stores for us?",
        a: "Yes. We prepare listings, screenshots, privacy declarations and handle review feedback until the app is live.",
      },
    ],
    related: ["web-developments", "fintechs", "system-architecture-and-design"],
  },
  {
    id: "fintechs",
    title: "Fintech Solutions",
    short: "Wallets, lending & payments",
    tagline: "Money movement you can audit, reconcile and trust.",
    description:
      "We build the systems behind digital wallets, micro-lending, remittance and agent networks: ledgers that balance, payment integrations that retry safely, and admin tools that let finance teams see every birr. Our fintech work powers microfinance institutions and payment companies in Ethiopia.",
    icon: "fintech",
    accent: "from-emerald-500 to-teal-400",
    outcomes: [
      "Double-entry ledgers with exactly-once settlement",
      "Integrations: telebirr, CBE Birr, M-Pesa, EthSwitch, bank cores",
      "USSD, WhatsApp and Telegram channels for customers",
      "KYC, limits, fraud rules and regulator-ready reporting",
    ],
    deliverables: [
      {
        title: "Wallets & agent networks",
        text: "Customer and agent wallets with float management, cash-in / cash-out, commissions and end-of-day settlement.",
      },
      {
        title: "Lending platforms",
        text: "Loan origination, scoring hooks, disbursement, repayment schedules and collections for MFIs and lenders.",
      },
      {
        title: "Remittance & payments",
        text: "Cross-border and domestic remittance flows, payout rails and reconciliation against partner statements.",
      },
    ],
    stack: ["Go", "Kotlin / Spring Boot", "Python", "PostgreSQL", "Redis", "Kafka / NATS", "Docker"],
    faq: [
      {
        q: "How do you keep balances correct?",
        a: "Every movement is a journal entry in a double-entry ledger, written in a single transaction with idempotency keys. Nothing is updated in place.",
      },
      {
        q: "Have you integrated with Ethiopian switches and banks?",
        a: "Yes: telebirr, CBE Birr, M-Pesa, EthSwitch and several core banking systems, plus Chapa for card and wallet checkout.",
      },
    ],
    related: ["telegram-bots", "Whatsapp-bot", "database-adminstration"],
  },
  {
    id: "erp",
    title: "ERP System Development",
    short: "Operations, finance & inventory in one system",
    tagline: "One system for the whole business, shaped to how you actually work.",
    description:
      "Enterprise resource planning software ties finance, inventory, sales, HR and operations into a single source of truth. We build modular ERPs for fleets, manufacturers and trading companies, with an accounting core first and departmental modules added as you grow.",
    icon: "erp",
    accent: "from-amber-500 to-orange-500",
    outcomes: [
      "Chart of accounts, journals and financial statements",
      "Inventory, procurement and multi-warehouse stock",
      "Role-based approvals and audit trails on every change",
      "Dashboards and exports your auditors will accept",
    ],
    deliverables: [
      {
        title: "Accounting core",
        text: "General ledger, receivables, payables, bank reconciliation and VAT-ready reporting for Ethiopian compliance.",
      },
      {
        title: "Operations modules",
        text: "Fleet, manufacturing, inventory, sales and HR modules that post straight into the ledger.",
      },
      {
        title: "Integrations & migration",
        text: "Importing legacy data, connecting payroll, banks and e-commerce, and training your team to run it.",
      },
    ],
    stack: ["Kotlin / Spring Boot", "PostgreSQL", "React", "Redis", "Docker", "Keycloak / RBAC"],
    faq: [
      {
        q: "Should we buy an off-the-shelf ERP instead?",
        a: "Sometimes, yes. We will tell you when a packaged product fits. Custom ERP wins when your workflows, approvals and local compliance do not match the templates.",
      },
    ],
    related: ["system-architecture-and-design", "database-adminstration", "web-developments"],
  },
  {
    id: "it-consultation",
    title: "IT Consultation",
    short: "Strategy, audits & roadmaps",
    tagline: "Independent technical advice before you commit budget.",
    description:
      "Choosing the wrong stack, vendor or architecture is expensive. We review what you have, define what you need and produce a roadmap with costs, risks and sequencing. We also act as a fractional CTO for companies that need senior engineering judgement without a full-time hire.",
    icon: "consult",
    accent: "from-slate-600 to-slate-800",
    outcomes: [
      "Technical due diligence and code audits",
      "Vendor and platform selection with clear trade-offs",
      "Security and performance reviews with fixes prioritised",
      "Fractional CTO and engineering management",
    ],
    deliverables: [
      {
        title: "Discovery & roadmap",
        text: "Two to four weeks of workshops and analysis ending in a costed, phased plan your board can approve.",
      },
      {
        title: "Audits",
        text: "Architecture, code, infrastructure and security audits with a ranked list of findings and remediation.",
      },
      {
        title: "Fractional CTO",
        text: "Ongoing technical leadership: hiring, vendor management, architecture decisions and delivery oversight.",
      },
    ],
    stack: ["Architecture reviews", "Threat modelling", "Cost modelling", "Delivery planning"],
    faq: [
      {
        q: "Do we have to build with you afterwards?",
        a: "No. The roadmap is yours. Many clients use it to run a tender; some ask us to deliver it.",
      },
    ],
    related: ["system-architecture-and-design", "erp", "database-adminstration"],
  },
  {
    id: "system-architecture-and-design",
    title: "System Architecture & Design",
    short: "Scalable, reliable backends",
    tagline: "Foundations that hold when traffic, teams and features grow.",
    description:
      "We design the backends behind high-traffic consumer platforms: real-time dispatch engines, betting and settlement services, payment microservices and GPS tracking pipelines. The result is a system with clear boundaries, observability and a deployment story your team can operate.",
    icon: "architecture",
    accent: "from-indigo-500 to-blue-700",
    outcomes: [
      "Modular monoliths or microservices, chosen deliberately",
      "Real-time: WebSockets, queues, event-driven workflows",
      "Infrastructure as code, CI/CD, monitoring and alerting",
      "Capacity planning and load testing before launch",
    ],
    deliverables: [
      {
        title: "Architecture design",
        text: "Domain modelling, service boundaries, data flows and decision records that outlive the first team.",
      },
      {
        title: "Platform engineering",
        text: "Docker, reverse proxies, TLS, backups, log aggregation and dashboards on GCP, AWS or your own servers.",
      },
      {
        title: "Reliability work",
        text: "Race-condition fixes, idempotency, retries, circuit breakers and incident runbooks for systems already in production.",
      },
    ],
    stack: ["Go", "Kotlin", "Python", "PostgreSQL / PostGIS", "MongoDB", "Redis", "Docker", "GCP"],
    faq: [
      {
        q: "Microservices or monolith?",
        a: "We default to a well-modularised monolith and split services only when a boundary has proven itself. It keeps operations simple for small teams.",
      },
    ],
    related: ["database-adminstration", "it-consultation", "fintechs"],
  },
  {
    id: "Whatsapp-bot",
    title: "WhatsApp Bots",
    short: "Business messaging on WhatsApp",
    tagline: "Verified WhatsApp Business automation for sales and support.",
    description:
      "Using the WhatsApp Business Platform, we build bots that qualify leads, take orders, send remittance confirmations and answer support questions, with seamless handover to human agents. We have run remittance and customer-service flows on WhatsApp for financial institutions.",
    icon: "whatsapp",
    accent: "from-green-500 to-emerald-600",
    outcomes: [
      "WhatsApp Business API onboarding and template approval",
      "Interactive buttons, lists and rich media flows",
      "Agent inbox with assignment, tags and SLAs",
      "Transactional alerts: OTPs, receipts, status updates",
    ],
    deliverables: [
      {
        title: "Sales & lead bots",
        text: "Catalogue browsing, quotes and order capture, pushed into your CRM or ERP.",
      },
      {
        title: "Support automation",
        text: "FAQ deflection, ticket creation and smart routing to the right team with full conversation history.",
      },
      {
        title: "Financial flows",
        text: "Remittance initiation, balance checks and statement delivery with strong authentication.",
      },
    ],
    stack: ["WhatsApp Business API", "Node.js", "Go", "Redis", "PostgreSQL", "Webhooks"],
    faq: [
      {
        q: "Do we need a verified business account?",
        a: "Yes, for production. We guide you through Meta Business verification and message-template approval.",
      },
    ],
    related: ["telegram-bots", "fintechs", "web-developments"],
  },
  {
    id: "database-adminstration",
    title: "Database Administration",
    short: "Secure, fast, backed-up data",
    tagline: "Your data, always available, always recoverable.",
    description:
      "Databases fail quietly: missing indexes, unmonitored disks, backups nobody has restored. Our DBAs run PostgreSQL, MongoDB, MySQL and Redis in production: tuning, migrations, replication, backup drills and security hardening, with monitoring that pages before customers notice.",
    icon: "database",
    accent: "from-rose-500 to-pink-600",
    outcomes: [
      "Performance tuning and query optimisation",
      "Automated, tested backups with point-in-time recovery",
      "Replication, failover and zero-downtime migrations",
      "Access control, encryption and audit logging",
    ],
    deliverables: [
      {
        title: "Health check",
        text: "A full review of schema, indexes, slow queries, backups and security with a prioritised action plan.",
      },
      {
        title: "Managed operations",
        text: "Monthly retainer covering monitoring, patching, capacity planning and on-call response.",
      },
      {
        title: "Migrations",
        text: "Moving between engines, versions or clouds with rehearsed cut-overs and rollback plans.",
      },
    ],
    stack: ["PostgreSQL", "PostGIS", "MongoDB", "MySQL", "Redis", "pgBackRest", "Prometheus / Grafana"],
    faq: [
      {
        q: "Can you manage databases hosted on our own servers?",
        a: "Yes. We work on-premise, on GCP / AWS, or hybrid, over VPN or bastion access that you control.",
      },
    ],
    related: ["system-architecture-and-design", "erp", "it-consultation"],
  },
];

export const getService = (id: string) => services.find((s) => s.id === id);
