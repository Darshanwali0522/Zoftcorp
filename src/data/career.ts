export interface CareerTechDomain {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string;
}

export interface ContributionTheme {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

export const CAREER_HERO = {
  eyebrow: 'CAREER',
  h1: 'Build Technology That Matters.',
  copy: 'Work alongside experienced technologists solving real problems across data, AI, cloud, databases, architecture, and digital engineering.',
};

export const CAREER_TECHNOLOGIES: CareerTechDomain[] = [
  {
    id: 'data',
    number: '01',
    title: 'DATA',
    tagline: 'STRATEGY & ENGINEERING',
    description: 'Data platform strategy, pipeline engineering, modernization, and analytics.',
    details:
      'Designing and building scalable analytical pipelines, lakehouse architectures, and real-time processing systems that turn data into operational assets.',
  },
  {
    id: 'ai',
    number: '02',
    title: 'AI',
    tagline: 'INTELLIGENT WORKLOADS',
    description: 'Modern AI-oriented architecture and data integration capabilities.',
    details:
      'Integrating vector databases, semantic indexing, and retrieval architectures into enterprise platforms for production AI workloads.',
  },
  {
    id: 'cloud',
    number: '03',
    title: 'CLOUD',
    tagline: 'INFRASTRUCTURE & FINOPS',
    description: 'Cloud strategy, migration, FinOps governance, and infrastructure considerations.',
    details:
      'Evaluating cloud platforms, optimizing workload performance, and building resilient infrastructure across multi-cloud environments.',
  },
  {
    id: 'databases',
    number: '04',
    title: 'DATABASES',
    tagline: 'MULTI-ENGINE DEPTH',
    description: 'SQL Server, PostgreSQL, MySQL, database architecture, performance, and operations.',
    details:
      'Deep query optimization, buffer tuning, high-availability architecture, schema transformations, and managed DBA operations.',
  },
  {
    id: 'architecture',
    number: '05',
    title: 'ARCHITECTURE',
    tagline: 'STRATEGIC DECISION-MAKING',
    description: 'Technology decision-making, architectural strategy, and technical roadmapping.',
    details:
      'Aligning application requirements, security posture, and data structures with long-term enterprise technology goals.',
  },
  {
    id: 'engineering',
    number: '06',
    title: 'ENGINEERING',
    tagline: 'PRACTICAL TECHNICAL DELIVERY',
    description: 'Digital engineering, implementation, and structured technical delivery.',
    details:
      'Turning architectural blueprints and data models into reliable software, automated pipelines, and operational systems.',
  },
];

export const CAREER_CONTRIBUTION_THEMES: ContributionTheme[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    tagline: 'PROBLEM FIRST',
    description: 'Explore the problem, requirements, and constraints before jumping to solutions.',
  },
  {
    number: '02',
    title: 'ARCHITECT',
    tagline: 'LONG-TERM VISION',
    description: 'Think about systems, trade-offs, governance, and long-term technical direction.',
  },
  {
    number: '03',
    title: 'ENGINEER',
    tagline: 'PRACTICAL DELIVERY',
    description: 'Turn ideas into practical, reliable, and enterprise-grade technology.',
  },
  {
    number: '04',
    title: 'IMPROVE',
    tagline: 'CONTINUOUS EVOLUTION',
    description: 'Keep learning, measuring performance, and refining what has been built over time.',
  },
];

export const CAREER_VALUES = [
  {
    name: 'HONESTY',
    description: 'Transparent and straightforward technical relationships.',
  },
  {
    name: 'HARD WORK',
    description: 'Commitment to doing the technical work properly and thoroughly.',
  },
  {
    name: 'TRUST',
    description: 'Long-term relationships built through reliability and integrity.',
  },
];

export const TECHNICAL_DEPTH_STACK = [
  'BUSINESS NEEDS',
  'APPLICATIONS',
  'DATA',
  'DATABASES',
  'CLOUD',
  'INFRASTRUCTURE',
  'ARCHITECTURE',
];

export const CAREER_OPENINGS_STATE = {
  title: 'Explore Opportunities at ZOFT',
  copy: 'We’re always interested in connecting with people who enjoy solving complex technology problems and building practical solutions.',
  emptyNotice: 'Career opportunities will appear here when available.',
  jobs: [] as JobOpening[], // Structured empty array to ensure 0 fabricated job vacancies
};
