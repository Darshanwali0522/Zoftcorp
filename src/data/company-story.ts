export interface CompanyValue {
  name: string;
  tagline: string;
  description: string;
}

export interface CorePanel {
  id: string;
  number: string;
  title: string;
  content: string;
}

export const HERO_CONTENT = {
  eyebrow: 'ABOUT US',
  heading: 'About Us',
  quote:
    'Simplicity becomes the ultimate sophistication when ideas are expressed in their purest, most refined form.',
  image: '/images/about/zoftcorp-about-1.png',
};

export const COMPANY_INTRODUCTION = {
  eyebrow: 'OUR IDENTITY',
  heading: 'Data, AI, and Design – delivered with honesty, hard work, and trust.',
  image: '/images/about/zoftcorp-why.png',
  paragraphs: [
    'Zoftcorp Innovations is a boutique consulting firm founded by industry veterans with 20+ years of expertise. Guided by our values of honesty, hard work, and trust, we deliver enterprise-grade consulting across Data, AI, and Cloud.',
    'Our Data & AI Services help organizations unlock value through strategy, engineering, modernization, and analytics, powered by our proprietary Datacops platform for resilience and precision.',
    'Through ZoftStudio, we craft bold, consistent digital experiences that blend creativity with enterprise-grade design discipline — building trusted partnerships that last.',
  ],
};

export const COMPANY_VALUES: CompanyValue[] = [
  {
    name: 'Honesty',
    tagline: 'Transparent Communication',
    description:
      'Clear, objective guidance on technology trade-offs, architecture decisions, and realistic outcomes.',
  },
  {
    name: 'Hard Work',
    tagline: 'Dedicated Engineering',
    description:
      'Rigorous technical execution and practical effort focused on real operational environments.',
  },
  {
    name: 'Trust',
    tagline: 'Long-Term Relationships',
    description:
      'Building lasting partnerships by consistently delivering reliable, accountable technical work.',
  },
];

export const CORE_PANELS: CorePanel[] = [
  {
    id: 'our-mission',
    number: '01',
    title: 'Our Mission',
    content:
      'Our mission is to empower businesses with tailored solutions that drive growth, optimize performance, and unlock new opportunities. We believe in a client-centric approach, where understanding your unique needs and challenges is the foundation of everything we do.',
  },
  {
    id: 'what-we-do',
    number: '02',
    title: 'What We Do',
    content:
      'At Zoftcorp, we provide end-to-end digital solutions designed to help businesses grow, innovate, and operate more efficiently. Our services range from custom software development, web and mobile app design, cloud integration, and digital marketing to IT consulting and automation.',
  },
  {
    id: 'why-choose-us',
    number: '03',
    title: 'Why Choose Us?',
    content:
      'Our mission is to empower businesses with tailored solutions that drive growth, optimize performance, and unlock new opportunities. We believe in a client-centric approach, where understanding your unique needs and challenges is the foundation of everything we do.',
  },
];
