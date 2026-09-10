import { siteConfig } from './portfolioData';

const baseKeywords = [
  'Shanjid Ahmed',
  'Shanjid Ahmed Rafi',
  'Full Stack Developer Bangladesh',
  'MERN Stack Developer',
  'Backend Developer Dhaka',
  'Microservices Engineer',
  'NestJS Developer',
  'Express.js',
  'Redis',
  'RabbitMQ',
  'PostgreSQL',
  'Prisma ORM',
  'MERN Stack',
  'Full Stack Developer',
];

export const defaultSEO = {
  title: `${siteConfig.shortName} Rafi — ${siteConfig.title} · MERN · PERN Stack`,
  description:
    'Shanjid Ahmed Rafi is a Full Stack Developer from Dhaka, Bangladesh specializing in MERN stack, PERN stack, React, and Node.js, and scalable full-stack systems. View projects, experience, and contact.',
  keywords: baseKeywords.join(', '),
  ogType: 'website',
  ogImage: `${siteConfig.siteUrl}/og-image.png`,
  twitterCard: 'summary_large_image',
  canonical: `${siteConfig.siteUrl}/`,
};

export const sectionSEO = {
  hero: {
    title: `${siteConfig.shortName} Rafi — Full Stack Developer · Full Stack Developer`,
    description:
      'Full Stack Developer piloting MERN and PERN stack applications through production orbit. MongoDB, PostgreSQL, React, Node.js — scalable, efficient, reliable full-stack systems from Dhaka, Bangladesh.',
    keywords: [...baseKeywords, 'portfolio', 'hire software engineer', 'hire backend developer'].join(', '),
  },
  about: {
    title: `About ${siteConfig.shortName} — Full Stack Developer & Full Stack`,
    description:
      'Software engineer focused on efficient, scalable applications. Experience in teaching, problem solving, requirements analysis, and full-stack development — Node.js, microservices, and team collaboration.',
    keywords: [...baseKeywords, 'team leadership', 'system design', 'API optimization'].join(', '),
  },
  experience: {
    title: `Experience — ${siteConfig.shortName} at MAK Tech`,
    description:
      'Full Stack Developer at MAK Tech (maktechgroup). Node.js backend development with Express, NestJS, Prisma, Redis, RabbitMQ. International client collaboration and team coordination.',
    keywords: [...baseKeywords, 'MAK Tech', 'maktechgroup', 'work experience'].join(', '),
  },
  skills: {
    title: `Skills — ${siteConfig.shortName} Tech Stack`,
    description:
      'Node.js, NestJS, Express, PostgreSQL, MongoDB, Redis, RabbitMQ, Prisma, Next.js, React, AWS EC2, OAuth 2.0, Socket.io, microservices architecture.',
    keywords: [...baseKeywords, 'tech stack', 'skills', 'technologies'].join(', '),
  },
  launchpad: {
    title: `Projects — ${siteConfig.shortName} Production Launches`,
    description:
      'Production projects: Deal Hunter AI, RainbitX crypto exchange, Tarantella delivery, Fishing Tripper, TitleMigo, Huurscanner, Scan Me Maybe, BeatZingeez, Trubbi, and more.',
    keywords: [
      ...baseKeywords,
      'Deal Hunter AI',
      'RainbitX',
      'Stripe integration',
      'fintech',
      'SaaS projects',
      'portfolio projects',
    ].join(', '),
  },
  education: {
    title: `Education — ${siteConfig.shortName}`,
    description:
      'B.Sc. Computer Science & Engineering from AIUB (GPA 3.85/4.00). Higher Secondary from Adamjee Cantonment College, Dhaka.',
    keywords: [...baseKeywords, 'AIUB', 'Computer Science', 'education'].join(', '),
  },
  contact: {
    title: `Contact ${siteConfig.shortName} — Hire Backend Developer`,
    description:
      `Contact Shanjid Ahmed for microservices, payment pipelines, or realtime systems. Email: ${siteConfig.email} · Phone: ${siteConfig.phoneDisplay} · GitHub: Shariarhosain`,
    keywords: [...baseKeywords, 'contact', 'hire', 'freelance', 'email'].join(', '),
  },
};

export function getJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.siteUrl}/#person`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        jobTitle: siteConfig.title,
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        url: `${siteConfig.siteUrl}/`,
        image: defaultSEO.ogImage,
        sameAs: [siteConfig.github, siteConfig.linkedin],
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address,
          addressLocality: 'Dhaka',
          addressCountry: 'BD',
        },
        knowsAbout: [
          'Node.js',
          'Microservices',
          'NestJS',
          'Express.js',
          'Redis',
          'RabbitMQ',
          'PostgreSQL',
          'Prisma',
          'Full Stack Development',
          'System Design',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: `${siteConfig.siteUrl}/`,
        name: `${siteConfig.shortName} Portfolio`,
        description: defaultSEO.description,
        publisher: { '@id': `${siteConfig.siteUrl}/#person` },
        inLanguage: 'en',
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.siteUrl}/#profilepage`,
        url: `${siteConfig.siteUrl}/`,
        name: defaultSEO.title,
        isPartOf: { '@id': `${siteConfig.siteUrl}/#website` },
        about: { '@id': `${siteConfig.siteUrl}/#person` },
        mainEntity: { '@id': `${siteConfig.siteUrl}/#person` },
        description: defaultSEO.description,
      },
    ],
  };
}
