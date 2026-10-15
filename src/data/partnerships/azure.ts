export interface AzureArchitectureArea {
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

export const AZURE_PARTNERSHIP_HERO = {
  eyebrow: 'MICROSOFT AZURE',
  h1: 'Cloud Architecture With Azure. Guided by Technical Expertise.',
  copy: 'ZOFT\'s work across Microsoft Azure environments brings together cloud architecture, databases, data, performance, and engineering considerations to help organizations make practical technology decisions.',
  logoPath: '/platforms/azure.svg',
};

export const AZURE_ARCHITECTURE_AREAS: AzureArchitectureArea[] = [
  {
    id: 'cloud-architecture',
    number: '01',
    title: 'Cloud Architecture',
    tagline: 'SCALABILITY & RESILIENCE',
    description:
      'Understand how infrastructure decisions support workload requirements, scalability, reliability, and long-term technology direction.',
    details:
      'Designing robust infrastructure layouts across Azure environments ensures operational consistency, high availability, and workload alignment.',
  },
  {
    id: 'database-strategy',
    number: '02',
    title: 'Database Strategy',
    tagline: 'DATA ENGINE ALIGNMENT',
    description:
      'Consider database architecture, workload characteristics, performance, operational requirements, and modernization decisions within the broader cloud environment.',
    details:
      'Aligning relational database workloads (SQL Server, PostgreSQL, MySQL) with Azure platform capabilities maximizes throughput and system stability.',
  },
  {
    id: 'data-engineering',
    number: '03',
    title: 'Data Engineering',
    tagline: 'ANALYTICS & PIPELINES',
    description:
      'Build data foundations that support integration, transformation, analytics, and evolving data requirements.',
    details:
      'Structuring reliable data pipelines and lakehouse models across cloud services enables seamless enterprise analytics and data integration.',
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performance',
    tagline: 'WORKLOAD EFFICIENCY',
    description:
      'Understand how database, workload, and infrastructure factors influence performance and operational efficiency.',
    details:
      'Identifying bottlenecks across memory allocation, query paths, and network topology ensures optimal resource utilization.',
  },
  {
    id: 'technical-architecture',
    number: '05',
    title: 'Technical Architecture',
    tagline: 'INTEGRATED GOVERNANCE',
    description:
      'Connect technology decisions to application, data, infrastructure, and business requirements.',
    details:
      'Establishing enterprise architecture guidelines and governance frameworks maintains software quality as cloud workloads expand.',
  },
];

export const AZURE_DATABASE_DEPTH = [
  { name: 'SQL Server', category: 'Database Engine' },
  { name: 'PostgreSQL', category: 'Database Engine' },
  { name: 'MySQL', category: 'Database Engine' },
];

export const AZURE_RELATED_CONSULTING: RelatedLinkItem[] = [
  {
    title: 'Cloud & Database Strategy',
    description: 'Align cloud infrastructure and database architecture with long-term technology goals.',
    href: '/consulting/cloud-database-strategy',
  },
  {
    title: 'Cloud FinOPs',
    description: 'Greater visibility and discipline for cloud and database spending.',
    href: '/consulting/cloud-finops',
  },
  {
    title: 'AI-Ready Architectures',
    description: 'Design technology foundations for modern AI workloads and evolving demands.',
    href: '/consulting/ai-ready-architectures',
  },
  {
    title: 'Performance Audits',
    description: 'Identify database and architecture bottlenecks affecting operational efficiency.',
    href: '/consulting/performance-audits',
  },
];

export const AZURE_RELATED_OFFERINGS: RelatedLinkItem[] = [
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
