export const siteConfig = {
  name: "Shanjid Ahmed Rafi",
  shortName: "Shanjid Ahmed",
  title: "Full Stack Developer",
  tagline: "MERN Stack · PERN Stack · End-to-End Systems",
  location: "Dhaka, Bangladesh",
  address: "North Kafrul, Kachukhet, Dhaka",
  email: "shanjidahmed66@gmail.com",
  phone: "+8801757525035",
  phoneDisplay: "+880 1757-525035",
  whatsapp: "https://wa.me/8801757525035",
  github: "https://github.com/Shariarhosain",
  linkedin: "https://www.linkedin.com/in/shariar-hosain-sanny/",
  siteUrl: "https://www.sanny.pro",
  year: 2026,
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#launchpad", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const heroData = {
  eyebrow: "SYSTEMS NOMINAL — DHAKA, BD",
  titleLine1: "SHANJID",
  titleLine2: "AHMED",
  titleAccent: "RAFI",
  subtitle:
    "Full Stack Developer piloting <b>MERN and PERN stack applications</b> through production orbit — MongoDB, PostgreSQL, React, Node.js. I build end-to-end systems that stay stable under gravity: <b>scalable, efficient, reliable</b>.",
  satellites: [
    { orbit: 1, angle: 0, label: "RabbitMQ" },
    { orbit: 1, angle: 90, label: "React" },
    { orbit: 1, angle: 180, label: "PostgreSQL" },
    { orbit: 1, angle: 270, label: "Tailwind" },
    { orbit: 2, angle: 0, label: "Next.js" },
    { orbit: 2, angle: 90, label: "Redis" },
    { orbit: 2, angle: 180, label: "TypeScript" },
    { orbit: 3, angle: 45, label: "Prisma" },
    { orbit: 3, angle: 135, label: "MongoDB" },
    { orbit: 3, angle: 225, label: "Socket.io" },
    { orbit: 3, angle: 315, label: "Redux" },
  ],
  coreLabel: "NODE.JS",
};

export const marqueeItems = [
  "NODE.JS",
  "MICROSERVICES",
  "NESTJS",
  "REDIS",
  "RABBITMQ",
  "POSTGRESQL",
  "PRISMA",
  "STRIPE",
  "AWS EC2",
  "SOCKET.IO",
  "NEXT.JS",
  "OAUTH 2.0",
];

export const aboutData = {
  logNum: "LOG 01",
  tag: "About",
  title: "Full Stack Engineer.",
  // titleAccent: 'System Architect.',
  description: `I'm a passionate <b>Full Stack Web Developer</b> with <b>1 year of experience</b> in creating digital experiences that make a difference. I am currently working as an intern at MAKTECH SOLUTION, where I contribute to real-world projects and gain practical industry experience.<br /><br />My journey in web development started with a curiosity for how things work, and has evolved into a career that combines creativity, problem-solving, and continuous learning.<br /><br />When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.`,
  image: "/og-image.jpg",
};

export const experienceData = {
  logNum: "LOG 02",
  tag: "Experience",
  title: "Flight",
  titleAccent: "history",
  items: [
    {
      when: "11/2025 — Present · Dhaka, Bangladesh",
      role: "Full Stack Developer (Full-time)",
      org: "MAK Tech (maktechgroup)",
      bullets: [
        "Developed and delivered scalable full-stack applications using the MERN and PREN stacks — React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, Prisma, Redis, and RabbitMQ.",

        "Designed and implemented RESTful APIs, database architectures, authentication systems, and reusable components with a strong focus on scalability, performance, and maintainability.",

        "Implemented Redis caching and RabbitMQ-based asynchronous processing to improve application performance, reliability, and scalability.",

        "Collaborated with international clients and cross-functional teams on requirements, technical solutions, task management, and successful project delivery.",

        "Led technical problem-solving initiatives and resolved critical issues, optimizing development workflows and contributing to a 20% improvement in overall team productivity.",
      ],
    },
    {
      when: "09/2025 — 11/2025",
      role: "MERN Developer, (Internship)",
      org: "MAK Tech (maktechgroup)",
      bullets: [
        "MERN internship with hands-on experience building full-stack applications.",
      ],
    },
  ],
};

export const skillsData = {

  logNum: "LOG 03",

  tag: "Skills",

  title: "Development",

  titleAccent: "stack",

  categories: [

    {
      title: "Frontend Engineering",
      chips: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },

    {
      title: "Backend Engineering",
      chips: ["Node.js", "Express.js", "NestJS"],
    },

    {
      title: "Data & ORM",
      chips: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
    },

    {
      title: "APIs & Communication",
      chips: ["REST APIs", "RabbitMQ", "Socket.io", "WebSockets"],
    },

    {
      title: "Cloud & DevOps",
      chips: ["VPS Hosting", "Docker", "CI/CD", "GitHub"],
    },

    {
      title: "Auth & Integrations",
      chips: ["OAuth 2.0", "JWT", "Firebase", "Supabase", "Third-Party APIs"],
    },

  ],
};

export const projectsData = {
  logNum: "LOG 04",
  tag: "LAUNCHED MISSIONS",
  title: "Payloads in",
  titleAccent: "production orbit",
  projects: [
    {
      index: "01",
      title: "Deal Hunter AI",
      tag: "AI · Stripe",
      description:
        "Real estate investment analysis platform. Real-time AI chat on OpenAI GPT with token metering, history persistence and per-tier rate limiting, plus a full Stripe subscription pipeline with webhooks, plan upgrades and refunds.",
      url: "https://addvancedai.com/",
      domain: "addvancedai.com",
    },
    {
      index: "02",
      title: "RainbitX — Crypto Exchange",
      tag: "Fintech",
      description:
        "Full-stack trading platform with real-time exchange rates, live chat and secure financial APIs. Complete KYC verification, loan management, role-based access and a live-monitoring admin dashboard.",
      url: "https://rainbitx.com/",
      domain: "rainbitx.com",
    },
    {
      index: "03",
      title: "Tarantella — Restaurant Delivery",
      tag: "POS · Maps",
      description:
        "ready2order POS integration with OAuth and auto-invoicing, Google Maps delivery flow with geocoding, traffic-aware ETAs and radius validation, plus PayPal capture-before-order checkout.",
      url: "https://www.tarantella.at/",
      domain: "tarantella.at",
    },
    {
      index: "04",
      title: "Fishing Tripper",
      tag: "Marketplace",
      description:
        "Charter booking marketplace with Stripe deposits, manual capture and idempotent refund logic. Shared vs private charter availability with seat tracking, plus Redis email workers and multi-role OAuth access.",
      url: "https://www.fishingtripper.com",
      domain: "fishingtripper.com",
    },
    {
      index: "05",
      title: "TitleMigo — VIN Search",
      tag: "Stripe · PDF",
      description:
        "Credit-based payment system for VIN report packages and an automated PDF rebranding service converting VinData reports into TITLEMIGO-branded professional documents.",
      url: "https://titlemigo.com/",
      domain: "titlemigo.com",
    },
    {
      index: "06",
      title: "Huurscanner — Property Finder NL",
      tag: "Scraper · Redis",
      description:
        "Robust property scraper aggregating and deduplicating external listings across the Netherlands, with Redis caching and rate limiting for fast, reliable responses.",
      url: "https://huurscanner.nl",
      domain: "huurscanner.nl",
    },
    {
      index: "07",
      title: "Scan Me Maybe",
      tag: "QR · SaaS",
      description:
        "QR-card dating platform for in-person profile sharing. Stripe subscriptions with webhook billing, drag-and-drop email template builder, and QR scan tracking with analytics and mutual-interest approval.",
      url: "https://scanmemaybe.com",
      domain: "scanmemaybe.com",
    },
    {
      index: "08",
      title: "BeatZingeez — Music Platform",
      tag: "Media",
      description:
        "Audio metadata extraction with music-metadata and node-ffprobe, cron-based scheduled publishing and engagement-tracking analytics.",
      url: "https://beatzingeez.com/",
      domain: "beatzingeez.com",
    },
    {
      index: "09",
      title: "Trubbi — Trip Planning",
      tag: "GSAP",
      description:
        "GSAP landing page with ScrollSmoother, ScrollTrigger reveals, infinite gallery marquee and hero parallax. Waitlist signup via Express + PostgreSQL/Prisma with duplicate-email validation.",
      url: "https://www.trubbi.ai/",
      domain: "trubbi.ai",
    },
    {
      index: "10",
      title: "Listing Management App",
      tag: "Microservices",
      description:
        "Microservices for reliable transactional email delivery and scalable image upload & optimization servers, wired together with RabbitMQ.",
      url: "https://github.com/Shariarhosain/abyansf_backend",
      domain: "GitHub Repo",
    },
    {
      index: "11",
      title: "BatteryQK Mobile App",
      tag: "Redis",
      description:
        "Redis-backed translation caching to speed multilingual responses and cut API calls, with background queue processing for translations and async jobs.",
      url: "https://github.com/Shariarhosain/BatteryQK-Backend",
      domain: "GitHub Repo",
    },
  ],
};

export const educationData = {
  logNum: "LOG 05",
  tag: "Academy RECORDS",
  title: "Academy",
  titleAccent: "credentials",
  items: [
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "Tangail Polytechnic Institute (TPI)",
      meta: "2021 — 2025 · Dhaka · GPA",
      highlight: "3.81 / 4.00",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bangladesh Machine Tools Factory High School",
      meta: "2019 — 2021 · Dhaka",
    },
  ],
};

export const contactData = {
  logNum: "LOG 06",
  tag: "ESTABLISH COMMS",
  title: "Ready for the",
  titleAccent: "next mission?",
  subtitle:
    "Whether it's a microservice fleet, a payment pipeline or a realtime system — my channel is open. Transmission usually answered within one Earth day.",
};
