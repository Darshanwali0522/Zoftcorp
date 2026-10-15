export interface WhyZoftReason {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string;
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  tagline: string;
  description: string;
}

export const WHY_ZOFT_HERO = {
  eyebrow: 'WHY ZOFTCORP?',
  h1: 'Why Not?',
  subheadline: 'Welcome to a World of Endless Possibilities.',
  copy: 'Choosing Zoftcorp means partnering with a team dedicated to your success.',
};

export const WHY_ZOFT_REASONS: WhyZoftReason[] = [
  {
    id: 'tailored-solutions',
    number: '01',
    title: 'Tailored Solutions',
    tagline: 'PERSONALIZED STRATEGY',
    description: 'Personalized strategies aligned with business objectives.',
    details:
      'Every technology environment has unique constraints, goals, and operational demands. Rather than applying off-the-shelf templates, ZOFT designs strategies around your specific technical and business realities.',
  },
  {
    id: 'expertise-across-domains',
    number: '02',
    title: 'Expertise Across Domains',
    tagline: 'CROSS-DOMAIN BREADTH',
    description:
      'Expertise spanning digital marketing, data analytics, cloud infrastructure, and digital engineering.',
    details:
      'Modern systems require connected thinking. ZOFT brings deep capability across data, cloud platforms, digital engineering, and growth channels to deliver cohesive technical directions.',
  },
  {
    id: 'client-centric-approach',
    number: '03',
    title: 'Client-Centric Approach',
    tagline: 'LISTENING FIRST',
    description: 'ZOFT listens first to understand client challenges and goals.',
    details:
      'Technical decisions must be grounded in an understanding of your organization. We begin every engagement by listening to your team, analyzing your requirements, and understanding your constraints.',
  },
  {
    id: 'outcome-driven-focus',
    number: '04',
    title: 'Outcome-Driven Focus',
    tagline: 'TANGIBLE RESULTS',
    description: 'Focus on measurable outcomes and tangible results.',
    details:
      'Technology exists to serve practical objectives. Our focus is on delivering work that directly improves operational performance, reliability, and business outcomes.',
  },
  {
    id: 'seamless-support',
    number: '05',
    title: 'Seamless Support',
    tagline: 'OPERATIONAL SMOOTHNESS',
    description:
      'Data platform management and cloud services designed to help systems operate smoothly and securely.',
    details:
      'Ongoing operations require consistency and discipline. We provide data platform and cloud environment management that maintains system health, availability, and security.',
  },
  {
    id: 'commitment-to-excellence',
    number: '06',
    title: 'Commitment to Excellence',
    tagline: 'HIGH STANDARDS',
    description: 'High standards of quality and professionalism.',
    details:
      'From architectural design to technical execution, ZOFT maintains high standards of technical rigor, clarity, and professional accountability.',
  },
  {
    id: 'agility-and-flexibility',
    number: '07',
    title: 'Agility and Flexibility',
    tagline: 'ADAPTABLE SCALING',
    description: 'Solutions that can scale and adapt as business needs evolve.',
    details:
      'Business priorities and technology stacks change over time. Our architectures and advisory models are built to adapt flexibly alongside your evolving needs.',
  },
];

export const WHY_ZOFT_EXPERTISE: ExpertiseDomain[] = [
  {
    id: 'data-analytics',
    title: 'DATA ANALYTICS',
    tagline: 'Insights & Pipelines',
    description:
      'Data platform management, analytics engineering, and pipeline architectures that turn data into actionable intelligence.',
  },
  {
    id: 'cloud-infrastructure',
    title: 'CLOUD INFRASTRUCTURE',
    tagline: 'Resilient Platforms',
    description:
      'Cloud architecture, multi-cloud management, infrastructure optimization, and operational stability.',
  },
  {
    id: 'digital-engineering',
    title: 'DIGITAL ENGINEERING',
    tagline: 'Practical Systems',
    description:
      'Turning architectural models and technology requirements into reliable, enterprise-grade digital software systems.',
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    tagline: 'Growth Channels',
    description:
      'Connecting technology platforms with modern digital engagement strategies to reach and serve target markets.',
  },
];

export const WHY_ZOFT_CONTINUITY = [
  { title: 'LISTEN', description: 'Start with understanding requirements and context.' },
  { title: 'UNDERSTAND', description: 'Deconstruct challenges and analyze constraints.' },
  { title: 'DELIVER', description: 'Execute practical, high-quality technical solutions.' },
  { title: 'SUPPORT', description: 'Provide ongoing stability, agility, and evolution.' },
];
