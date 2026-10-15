export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  details: string[];
  image: string;
  alt: string;
}

export const VERIFIED_SERVICES: ServiceOffering[] = [
  {
    id: 'db-finops',
    number: '01',
    title: 'DB FinOps',
    category: 'Cloud Cost Optimization',
    tagline: 'Ongoing cost optimization for cloud databases.',
    description:
      'Continuous cloud database spend analysis, right-sizing instance provisions, eliminating idle overhead, and optimizing storage licensing spend.',
    details: [
      'Instance right-sizing & auto-scaling alignment',
      'License compliance and cost reduction strategy',
      'Storage tiering and I/O efficiency auditing',
    ],
    image: '/images/services/db-finops.jpg',
    alt: 'Enterprise cloud infrastructure cost analytics and resource allocation monitoring',
  },
  {
    id: 'performance-tuning',
    number: '02',
    title: 'Performance Tuning',
    category: 'Query & Engine Optimization',
    tagline: 'Faster queries, lower costs.',
    description:
      'Diagnose bottleneck queries, optimize execution plans, tune memory parameters, and eliminate resource locks to maximize database throughput.',
    details: [
      'Query execution plan analysis & index tuning',
      'Engine buffer pool & parameter optimization',
      'Lock contention elimination under peak concurrency',
    ],
    image: '/images/services/performance-tuning.jpg',
    alt: 'High-performance database engineering environment monitoring query execution metrics',
  },
  {
    id: 'managed-services',
    number: '03',
    title: 'Managed Services',
    category: '24/7 Operations & Administration',
    tagline: '24/7 monitoring, backups, compliance.',
    description:
      'Proactive 24/7 telemetry monitoring, automated backup and recovery validation, security patching, and SLA-backed database operations.',
    details: [
      'Proactive 24/7 monitoring & incident escalation',
      'Disaster recovery planning & backup verification',
      'Security auditing, patching, and compliance management',
    ],
    image: '/images/services/managed-services.jpg',
    alt: 'Enterprise operations control center with engineers maintaining 24/7 database uptime',
  },
  {
    id: 'migration-transformation',
    number: '04',
    title: 'Migration & Transformation',
    category: 'Cloud & Engine Modernization',
    tagline: 'Smooth transition to cloud or open source.',
    description:
      'Modernize legacy database engines, refactor schemas, and transition workloads to open-source or enterprise cloud platforms with structured verification.',
    details: [
      'Minimal-downtime migration strategy & execution',
      'Schema translation & automated data validation',
      'Post-migration performance baseline tuning',
    ],
    image: '/images/services/migration-transformation.jpg',
    alt: 'Modern cloud infrastructure visualizing structured database migration paths',
  },
];

