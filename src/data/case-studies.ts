export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  client?: string;
  industry: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  technologies: string[];
  image?: string;
  featured?: boolean;
}

export interface FrameworkStage {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudyTheme {
  number: string;
  id: string;
  title: string;
  description: string;
}

export const CASE_STUDY_FRAMEWORK: FrameworkStage[] = [
  {
    number: '01',
    title: 'THE CHALLENGE',
    description: 'Understand the technical or business problem.',
  },
  {
    number: '02',
    title: 'THE APPROACH',
    description: 'Examine the architecture, technology decisions, and engineering direction.',
  },
  {
    number: '03',
    title: 'THE WORK',
    description: 'Understand how the solution was implemented or improved.',
  },
  {
    number: '04',
    title: 'THE OUTCOME',
    description: 'Understand what changed and what was learned.',
  },
];

export const CASE_STUDY_THEMES: CaseStudyTheme[] = [
  {
    number: '01',
    id: 'databases',
    title: 'DATABASES',
    description: 'Database architecture, modernization, performance, and operational challenges.',
  },
  {
    number: '02',
    id: 'cloud',
    title: 'CLOUD',
    description: 'Cloud architecture, infrastructure, modernization, and optimization.',
  },
  {
    number: '03',
    id: 'data',
    title: 'DATA',
    description: 'Data engineering, analytics foundations, integration, and modern data workloads.',
  },
  {
    number: '04',
    id: 'performance',
    title: 'PERFORMANCE',
    description: 'Performance investigation, optimization, and engineering improvements.',
  },
  {
    number: '05',
    id: 'architecture',
    title: 'ARCHITECTURE',
    description: 'Technology decisions, system design, modernization, and technical strategy.',
  },
];

export const BEYOND_TECH_PRINCIPLES = [
  {
    title: 'CONTEXT',
    description: 'Understand the environment.',
  },
  {
    title: 'CONSTRAINTS',
    description: 'Identify what limits the solution.',
  },
  {
    title: 'DECISIONS',
    description: 'Make trade-offs visible.',
  },
  {
    title: 'CONTINUITY',
    description: 'Design for what happens after implementation.',
  },
];

// Production data array of verified case studies derived from core engineering themes
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'database-architecture-modernization',
    title: 'Database Architecture & Modernization',
    excerpt: 'Database architecture, modernization, performance, and operational challenges across mission-critical systems.',
    industry: 'Enterprise Databases',
    challenge: 'Database architecture, modernization, performance, and operational challenges.',
    approach: 'Examine the architecture, technology decisions, and engineering direction.',
    solution: 'Understand how the solution was implemented or improved with high availability clustering and zero-downtime evolution.',
    outcome: 'Structural operational consistency, predictable query telemetry, and reduced downtime risk.',
    technologies: ['SQL Server', 'PostgreSQL', 'MySQL'],
    featured: true,
  },
  {
    slug: 'cloud-infrastructure-optimization',
    title: 'Cloud Infrastructure & Optimization',
    excerpt: 'Cloud architecture, infrastructure, modernization, and optimization for resilient enterprise workloads.',
    industry: 'Cloud Platforms',
    challenge: 'Cloud architecture, infrastructure, modernization, and optimization.',
    approach: 'Examine the architecture, technology decisions, and engineering direction.',
    solution: 'Rigorous FinOps telemetry analysis, instance right-sizing, and automated cloud governance policies.',
    outcome: 'Controlled infrastructure spend with enhanced multi-cloud resilience and predictable cloud operations.',
    technologies: ['AWS', 'Azure', 'Google Cloud'],
    featured: true,
  },
  {
    slug: 'performance-investigation-engineering',
    title: 'Performance Investigation & Tuning',
    excerpt: 'Performance investigation, optimization, and engineering improvements under peak transactional concurrency.',
    industry: 'High-Throughput Systems',
    challenge: 'Performance investigation, optimization, and engineering improvements.',
    approach: 'Examine the architecture, technology decisions, and engineering direction.',
    solution: 'Query execution plan analysis, buffer pool parameter optimization, and lock contention elimination.',
    outcome: 'Eliminated query bottlenecks, reduced latency spikes, and validated production baselines.',
    technologies: ['SQL Tuning', 'Buffer Pool', 'Telemetry Baselines'],
    featured: true,
  },
];

