export interface OracleArchitectureArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string;
}

export interface RelatedLinkItem {
  title: string;
  description: string;
  href: string;
}

export const ORACLE_PARTNERSHIP_HERO = {
  eyebrow: 'ORACLE',
  h1: 'Database Architecture With Oracle. Guided by Technical Expertise.',
  copy: 'ZOFT\'s work across Oracle environments brings together database architecture, cloud, data, performance, and engineering considerations to help organizations make practical technology decisions.',
  logoPath: '/platforms/oracle.svg',
};

export const ORACLE_ARCHITECTURE_AREAS: OracleArchitectureArea[] = [
  {
    id: 'database-architecture',
    number: '01',
    title: 'Database Architecture',
    tagline: 'HIGH AVAILABILITY & RESILIENCE',
    description:
      'Understand database architecture in relation to workloads, applications, data requirements, performance, operations, and long-term technology direction.',
    details:
      'Designing database structures across enterprise environments to maintain transactional integrity, buffer allocation efficiency, and operational resilience.',
  },
  {
    id: 'data-engineering',
    number: '02',
    title: 'Data Engineering',
    tagline: 'ANALYTICS & PIPELINES',
    description:
      'Build data foundations that support integration, transformation, analytics, and evolving data requirements.',
    details:
      'Connecting core database systems to modern analytical pipelines and data lakehouse models for reliable data flow.',
  },
  {
    id: 'cloud-architecture',
    number: '03',
    title: 'Cloud Architecture',
    tagline: 'HYBRID & CLOUD INTEGRATION',
    description:
      'Consider how infrastructure and platform decisions support workload requirements, scalability, reliability, and operational needs.',
    details:
      'Evaluating cloud infrastructure layouts, hybrid deployments, and workload scaling requirements for enterprise database operations.',
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performance',
    tagline: 'QUERY & BUFFER EFFICIENCY',
    description:
      'Understand how database, workload, application, and infrastructure factors influence performance and operational efficiency.',
    details:
      'Addressing query contention, index fragmentation, memory tuning, and execution plan bottlenecks to ensure high throughput.',
  },
  {
    id: 'technical-architecture',
    number: '05',
    title: 'Technical Architecture',
    tagline: 'INTEGRATED GOVERNANCE',
    description:
      'Connect database, data, application, infrastructure, and business requirements into a coherent technical direction.',
    details:
      'Establishing clean software boundaries, backup validation protocols, and technical governance across modern database environments.',
  },
];

export const ORACLE_DATABASE_DEPTH = [
  { name: 'SQL Server', category: 'Database Engine' },
  { name: 'PostgreSQL', category: 'Database Engine' },
  { name: 'MySQL', category: 'Database Engine' },
];

export const ORACLE_MODERNIZATION_ASPECTS = [
  { title: 'ARCHITECTURE', description: 'Aligning engine choice with workload characteristics.' },
  { title: 'DATA TRANSFORMATION', description: 'Refactoring schemas and data structures cleanly.' },
  { title: 'APPLICATION READINESS', description: 'Ensuring application query compatibility.' },
  { title: 'WORKLOAD CUTOVER', description: 'Structured cutover and rollback validation.' },
];

export const ORACLE_RELATED_CONSULTING: RelatedLinkItem[] = [
  {
    title: 'Cloud & Database Strategy',
    description: 'Align cloud infrastructure and database architecture with long-term goals.',
    href: '/consulting/cloud-database-strategy',
  },
  {
    title: 'Performance Audits',
    description: 'Identify database and architecture bottlenecks affecting operational efficiency.',
    href: '/consulting/performance-audits',
  },
  {
    title: 'AI-Ready Architectures',
    description: 'Design technology foundations for modern AI workloads and evolving demands.',
    href: '/consulting/ai-ready-architectures',
  },
  {
    title: 'Fractional Architect',
    description: 'Extend your technical leadership with experienced architecture guidance.',
    href: '/consulting/fractional-architect',
  },
];

export const ORACLE_RELATED_OFFERINGS: RelatedLinkItem[] = [
  {
    title: 'Database Migrations and Transformations',
    description: 'Modernize and refactor database environments with structured cutover protocols.',
    href: '/offerings/database-migrations-and-transformations',
  },
  {
    title: 'Performance Tuning Delivery',
    description: 'Deep-seated query tuning, buffer optimization, and contention elimination.',
    href: '/offerings/performance-tuning-delivery',
  },
  {
    title: 'Managed DBA Services',
    description: 'Proactive monitoring, backup validation, and operational administration.',
    href: '/offerings/managed-dba-services',
  },
  {
    title: 'Data Engineering and Analytics',
    description: 'Scalable data pipelines, analytical warehouses, and data lakehouse architecture.',
    href: '/offerings/data-engineering-and-analytics',
  },
];
