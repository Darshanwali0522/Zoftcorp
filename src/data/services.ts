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
    id: 'cloud-data-finops',
    number: '01',
    title: 'Cloud & Data FinOps',
    category: 'Cloud Cost Optimization',
    tagline: 'Smarter clouds, lower costs.',
    description: 'Smarter clouds, lower costs.',
    details: [
      'Instance right-sizing & auto-scaling alignment',
      'License compliance and cost reduction strategy',
      'Storage tiering and I/O efficiency auditing',
    ],
    image: '/images/services/db-finops.jpg',
    alt: 'Enterprise cloud infrastructure cost analytics and resource allocation monitoring',
  },
  {
    id: 'dpdp-compliance',
    number: '02',
    title: 'DPDP Compliance',
    category: 'Data Privacy & Governance',
    tagline: 'Architectural readiness for India’s DPDP Act.',
    description: 'Technical preparation and architectural readiness for India’s Digital Personal Data Protection Act.',
    details: [
      'Data flow mapping, classification, and data fiduciary review',
      'Consent management architecture and privacy boundary evaluation',
      'Technical safeguards, incident response readiness, and remediation roadmaps',
    ],
    image: '/images/consulting/compliance-governance.jpg',
    alt: 'Digital personal data protection and enterprise data governance auditing',
  },
  {
    id: 'resilience-compliance',
    number: '03',
    title: 'Resilience & Compliance',
    category: 'Infrastructure Security & High Availability',
    tagline: 'Mission-critical resilience and operational security.',
    description: 'High-availability database architecture, disaster recovery automation, and operational security controls.',
    details: [
      'High-availability database clusters and zero-data-loss failover architecture',
      'Disaster recovery validation, backup integrity auditing, and RPO/RTO optimization',
      'Infrastructure security hardening, access controls, and compliance benchmarking',
    ],
    image: '/images/consulting/compliance-governance.jpg',
    alt: 'Enterprise security, compliance governance, controlled infrastructure environment, and technical operations',
  },
  {
    id: 'performance-tuning',
    number: '04',
    title: 'Performance Tuning',
    category: 'Query & Engine Optimization',
    tagline: 'Faster database, better business.',
    description: 'Faster database, better business.',
    details: [
      'Query execution plan analysis & index tuning',
      'Engine buffer pool & parameter optimization',
      'Lock contention elimination under peak concurrency',
    ],
    image: '/images/services/performance-tuning.jpg',
    alt: 'High-performance database engineering environment monitoring query execution metrics',
  },
  {
    id: 'migration-transformations',
    number: '05',
    title: 'Migration & Transformations',
    category: 'Cloud & Engine Modernization',
    tagline: 'Seamless modernization without disruption.',
    description: 'Seamless modernization without disruption.',
    details: [
      'Minimal-downtime migration strategy & execution',
      'Schema translation & automated data validation',
      'Post-migration performance baseline tuning',
    ],
    image: '/images/services/migration-transformation.jpg',
    alt: 'Modern cloud infrastructure visualizing structured database migration paths',
  },
  {
    id: 'managed-services',
    number: '06',
    title: 'Managed Services',
    category: '24/7 Operations & Administration',
    tagline: 'Reliability you can trust, 24x7.',
    description: 'Reliability you can trust, 24x7.',
    details: [
      'Proactive 24/7 monitoring & incident escalation',
      'Disaster recovery planning & backup verification',
      'Security auditing, patching, and compliance management',
    ],
    image: '/images/services/managed-services.jpg',
    alt: 'Enterprise operations control center with engineers maintaining 24/7 database uptime',
  },
];

