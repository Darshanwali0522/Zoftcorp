export interface PartnerEcosystem {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  details: string;
  logoPath?: string;
  detailRoute: string;
  connectedAreas: string[];
}

export interface VerifiedTechEngine {
  name: string;
  category: 'database-engine' | 'cloud-platform';
  logoPath?: string;
}

export const PARTNERSHIPS_HERO = {
  eyebrow: 'PARTNERSHIPS',
  h1: 'Technology Ecosystems. Connected by Expertise.',
  copy: 'ZOFT works across leading cloud and technology ecosystems, helping organizations navigate architecture, data, databases, engineering, and cloud environments with practical technical expertise.',
};

export const PARTNERS: PartnerEcosystem[] = [
  {
    id: 'aws',
    number: '01',
    name: 'AWS',
    shortName: 'AWS',
    description: "ZOFT's work across AWS environments.",
    details:
      'Designing, modernizing, and optimizing AWS cloud architecture, database workloads, data engineering pipelines, and operational resilience.',
    logoPath: '/platforms/aws.svg',
    detailRoute: '/about-us/partnerships/aws',
    connectedAreas: ['Cloud Architecture', 'Database Migration', 'Data Engineering', 'Performance Audits', 'FinOps Governance'],
  },
  {
    id: 'azure',
    number: '02',
    name: 'Microsoft Azure',
    shortName: 'Azure',
    description: "ZOFT's work across Microsoft Azure environments.",
    details:
      'Architecting and managing enterprise Microsoft Azure environments, SQL Server workloads, data platforms, and cloud infrastructure optimization.',
    logoPath: '/platforms/azure.svg',
    detailRoute: '/about-us/partnerships/azure',
    connectedAreas: ['Azure Infrastructure', 'SQL Server Optimization', 'Data Lakehouse', 'Security Governance', 'Workload Scaling'],
  },
  {
    id: 'gcp',
    number: '03',
    name: 'Google Cloud',
    shortName: 'Google Cloud',
    description: "ZOFT's work across Google Cloud environments.",
    details:
      'Leveraging Google Cloud infrastructure for analytical workloads, vector database integration, modern data pipelines, and scalable cloud services.',
    logoPath: '/platforms/gcp.svg',
    detailRoute: '/about-us/partnerships/gcp',
    connectedAreas: ['Analytics Platforms', 'Vector DB Integration', 'Cloud Migration', 'Performance Tuning', 'AI Readiness'],
  },
  {
    id: 'oracle',
    number: '04',
    name: 'Oracle',
    shortName: 'Oracle',
    description: "ZOFT's work across Oracle environments.",
    details:
      'Deep technical advisory, database administration, high-availability architecture, and performance tuning across enterprise Oracle environments.',
    logoPath: '/platforms/oracle.svg',
    detailRoute: '/about-us/partnerships/oracle',
    connectedAreas: ['Oracle DB Advisory', 'High Availability', 'Performance Tuning', 'Managed DBA Services', 'Schema Transformation'],
  },
];

export const VERIFIED_TECH_ENGINES: VerifiedTechEngine[] = [
  { name: 'SQL Server', category: 'database-engine' },
  { name: 'PostgreSQL', category: 'database-engine' },
  { name: 'MySQL', category: 'database-engine' },
  { name: 'AWS', category: 'cloud-platform', logoPath: '/platforms/aws.svg' },
  { name: 'Microsoft Azure', category: 'cloud-platform', logoPath: '/platforms/azure.svg' },
  { name: 'Google Cloud', category: 'cloud-platform', logoPath: '/platforms/gcp.svg' },
  { name: 'Oracle', category: 'cloud-platform', logoPath: '/platforms/oracle.svg' },
];

export const PARTNERSHIP_ECOSYSTEM_AREAS = [
  'CLOUD',
  'DATABASES',
  'DATA',
  'ARCHITECTURE',
  'ENGINEERING',
];
