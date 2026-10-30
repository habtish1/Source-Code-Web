export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "lead"; text: string }
  | { type: "ul"; items: { title?: string; text: string }[] }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  author: { name: string; role: string };
  cover: string; // path under /public
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "how-mobile-apps-fuel-small-business-growth",
    title: "How Mobile Apps Can Fuel Your Small Business Growth",
    excerpt:
      "Consumers live on their phones. A well-designed mobile app gives a small business a direct, personal channel to customers and the data to serve them better.",
    category: "Mobile",
    date: "2024-05-14",
    readingTime: "4 min read",
    author: { name: "Source Code Team", role: "Engineering" },
    cover: "/images/blogImage/keyboardTyping.jpg",
    body: [
      {
        type: "lead",
        text: "In today's mobile-first world, consumers are glued to their smartphones. This presents a massive opportunity for small businesses to connect with their audience in a convenient, personalised way. A well-designed mobile app can boost brand awareness, customer engagement and, ultimately, sales.",
      },
      { type: "h2", text: "Why mobile apps matter for small businesses" },
      {
        type: "ul",
        items: [
          {
            title: "Enhanced customer experience.",
            text: "Apps provide a seamless platform for interaction. Loyalty programs, mobile ordering or appointment booking streamline processes and improve satisfaction.",
          },
          {
            title: "Improved brand loyalty.",
            text: "Push notifications keep your business top of mind, while features like mobile wallets incentivise repeat purchases.",
          },
          {
            title: "Data-driven decisions.",
            text: "App analytics reveal how customers behave and what they prefer. Use that data to personalise campaigns and sharpen your offering.",
          },
          {
            title: "Increased visibility.",
            text: "A polished app with clear calls to action raises awareness and attracts new customers through the stores.",
          },
        ],
      },
      { type: "h2", text: "Before you build: plan" },
      {
        type: "ul",
        items: [
          { title: "Identify your needs.", text: "What problem does the app solve? Who exactly is it for?" },
          {
            title: "Prioritise features.",
            text: "Start with a minimum viable product that nails the core flow. Add features once real users ask for them.",
          },
          { title: "Design for usability.", text: "If a first-time user cannot complete the main task in a minute, redesign it." },
          {
            title: "Choose a development path.",
            text: "A dedicated team, a low-code builder or an outsourced partner each trade speed, cost and control differently.",
          },
        ],
      },
      { type: "h2", text: "Trends worth watching" },
      {
        type: "ul",
        items: [
          { title: "AI assistants.", text: "Chatbots inside the app handle support around the clock and recommend the next purchase." },
          { title: "Super-app channels.", text: "Telegram Mini Apps and WhatsApp flows reach customers without a separate install." },
          { title: "Embedded payments.", text: "telebirr, CBE Birr and wallet integrations turn an app into a point of sale." },
        ],
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "By leveraging mobile technology, small businesses gain a competitive edge and unlock real growth. A successful app solves genuine customer problems and is pleasant to use. Start small, measure, and iterate.",
      },
    ],
  },
  {
    slug: "software-development-igniting-ethiopian-entrepreneurship",
    title: "How Software Development Is Igniting Ethiopian Entrepreneurship",
    excerpt:
      "Low barriers to entry, global reach and deep local knowledge make software one of the most powerful tools Ethiopian founders have today.",
    category: "Industry",
    date: "2024-03-02",
    readingTime: "5 min read",
    author: { name: "Source Code Team", role: "Engineering" },
    cover: "/images/blogImage/binaryTech.jpg",
    body: [
      {
        type: "lead",
        text: "Ethiopian developers have a unique understanding of the local context. They can create software that addresses the specific challenges faced by Ethiopian businesses and individuals, and increasingly they compete on a global stage.",
      },
      { type: "h2", text: "Why software is a game-changer for Ethiopian founders" },
      {
        type: "ul",
        items: [
          {
            title: "Low barrier to entry.",
            text: "Compared to traditional businesses, software needs little upfront capital. A laptop, a connection and the right skills turn ideas into products.",
          },
          {
            title: "Scalability.",
            text: "Software reaches a wider audience without proportional cost, letting Ethiopian startups compete regionally and globally.",
          },
          {
            title: "Solving local problems.",
            text: "From ride-hailing in Addis Ababa to parcel delivery between regions, local founders see problems outsiders miss.",
          },
          {
            title: "A global marketplace.",
            text: "The world is hungry for tech talent. Ethiopian engineers sell their skills internationally and bring that experience home.",
          },
        ],
      },
      { type: "h2", text: "Where it is already working" },
      {
        type: "ul",
        items: [
          { title: "Fintech.", text: "Mobile money and digital lending are transforming financial inclusion for millions." },
          { title: "Logistics and mobility.", text: "Dispatch platforms and freight marketplaces are modernising how goods and people move." },
          { title: "Education and agriculture.", text: "Locally built apps are widening access to learning and connecting farmers to markets." },
        ],
      },
      { type: "h2", text: "The future is bright" },
      {
        type: "p",
        text: "With continued investment in education, infrastructure and support networks, Ethiopia has the potential to become a major technology hub in Africa. The creativity and technical depth are already here.",
      },
      { type: "h2", text: "Getting started" },
      {
        type: "ul",
        items: [
          { title: "Join an incubator or co-working space.", text: "Mentorship, networks and shared resources shorten the path." },
          { title: "Learn to build.", text: "Bootcamps and online courses make engineering skills more accessible than ever." },
          { title: "Pick a real problem.", text: "Look at frictions Ethiopians face every day and prototype a solution." },
        ],
      },
      {
        type: "quote",
        text: "With hard work, dedication and the power of software, Ethiopian entrepreneurs can build successful businesses and contribute to the nation's economic transformation.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
