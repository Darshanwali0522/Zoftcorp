export interface GcpArchitectureArea {
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

export const GCP_PARTNERSHIP_HERO = {
  eyebrow: 'GOOGLE CLOUD',
  h1: 'Cloud and Data Architecture With Google Cloud.',
  copy: 'ZOFT\'s work across Google Cloud environments brings together cloud architecture, databases, data, performance, and engineering considerations to help organizations make practical technology decisions.',
  logoPath: '/platforms/gcp.svg',
};

export const GCP_ARCHITECTURE_AREAS: GcpArchitectureArea[] = [
  {
    id: 'cloud-architecture',
    number: '01',
    title: 'Cloud Architecture',
    tagline: 'SCALABILITY & RESILIENCE',
    description:
      'Understand how infrastructure decisions support workload requirements, scalability, reliability, and long-term technology direction.',
    details:
      'Designing cloud infrastructure within Google Cloud environments to maintain system availability, modular scalability, and operational security.',
  },
  {
    id: 'data-engineering',
    number: '02',
    title: 'Data Engineering',
    tagline: 'ANALYTICS & PIPELINES',
    description:
      'Build data foundations that support integration, transformation, analytics, and evolving data requirements.',
    details:
      'Structuring scalable analytical pipelines, lakehouse architectures, and real-time processing to turn raw enterprise data into reliable assets.',
  },
  {
    id: 'database-strategy',
    number: '03',
    title: 'Database Strategy',
    tagline: 'DATA ENGINE ALIGNMENT',
    description:
      'Consider database architecture, workload characteristics, performance, operational requirements, and modernization decisions within the broader cloud environment.',
    details:
      'Connecting database engine capabilities (SQL Server, PostgreSQL, MySQL) with analytical data flows to maintain query speed and transactional integrity.',
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performance',
    tagline: 'WORKLOAD EFFICIENCY',
    description:
      'Understand how database, workload, and infrastructure factors influence performance and operational efficiency.',
    details:
      'Addressing bottlenecks in analytical queries, memory utilization, and resource scaling across cloud data platforms.',
  },
  {
    id: 'technical-architecture',
    number: '05',
    title: 'Technical Architecture',
    tagline: 'INTEGRATED GOVERNANCE',
    description:
      'Connect technology decisions to application, data, infrastructure, and business requirements.',
    details:
      'Ensuring architectural alignment between application systems, analytical databases, vector retrieval models, and cloud infrastructure.',
  },
];

export const GCP_DATA_FOUNDATION = [
  { title: 'DATA INGESTION', description: 'Streamlined batch and real-time data collection.' },
  { title: 'DATA TRANSFORMATION', description: 'Structured pipeline modeling and data cleaning.' },
  { title: 'DATA MODELING', description: 'Scalable schema design for enterprise analytics.' },
  { title: 'ANALYTICS FOUNDATIONS', description: 'Empowering business intelligence and discovery.' },
];

export const GCP_DATABASE_DEPTH = [
  { name: 'SQL Server', category: 'Database Engine' },
  { name: 'PostgreSQL', category: 'Database Engine' },
  { name: 'MySQL', category: 'Database Engine' },
];

export const GCP_RELATED_CONSULTING: RelatedLinkItem[] = [
  {
    title: 'Cloud & Database Strategy',
    description: 'Align cloud infrastructure and database architecture with long-term goals.',
    href: '/consulting/cloud-database-strategy',
  },
  {
    title: 'AI-Ready Architectures',
    description: 'Design technology foundations for modern AI workloads and evolving demands.',
    href: '/consulting/ai-ready-architectures',
  },
  {
    title: 'Cloud FinOPs',
    description: 'Greater visibility and discipline for cloud and database spending.',
    href: '/consulting/cloud-finops',
  },
  {
    title: 'Performance Audits',
    description: 'Identify database and architecture bottlenecks affecting operational efficiency.',
    href: '/consulting/performance-audits',
  },
];

export const GCP_RELATED_OFFERINGS: RelatedLinkItem[] = [
  {
    title: 'Data Engineering and Analytics',
    description: 'Scalable data pipelines, analytical warehouses, and data lakehouse architecture.',
    href: '/offerings/data-engineering-and-analytics',
  },
  {
    title: 'Vector DB Integration',
    description: 'Semantic indexing and vector database integration for enterprise platforms.',
    href: '/offerings/vector-db-integration',
  },
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
];
