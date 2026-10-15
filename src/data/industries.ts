export interface IndustryDomain {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

export const VERIFIED_INDUSTRIES: IndustryDomain[] = [
  {
    id: 'energy',
    number: '01',
    name: 'Energy & Utilities',
    shortName: 'Energy & Utilities',
    description:
      'Technology foundations for data-intensive and operational environments.',
    highlights: [
      'High-throughput telemetry & sensor ingestion',
      'Mission-critical operational uptime focus',
      'Time-series & spatial database architecture',
    ],
    image: '/images/industries/energy.jpg',
    alt: 'Modern power grid infrastructure and renewable energy facility demonstrating industrial scale technology',
  },
  {
    id: 'bfsi',
    number: '02',
    name: 'Banking, Financial Services & Insurance',
    shortName: 'BFSI',
    description:
      'Reliable data and infrastructure for business-critical systems.',
    highlights: [
      'Strict ACID compliance & transactional integrity',
      'Zero-downtime failover and disaster recovery',
      'High-concurrency query optimization',
    ],
    image: '/images/industries/bfsi.jpg',
    alt: 'High-security financial tower atrium and enterprise banking data infrastructure',
  },
  {
    id: 'gaming',
    number: '03',
    name: 'Gaming',
    shortName: 'Gaming',
    description:
      'Scalable technology foundations for demanding digital experiences.',
    highlights: [
      'Ultra-low latency session and state persistence',
      'Dynamic elasticity under sudden player surges',
      'Distributed cache & memory engine tuning',
    ],
    image: '/images/industries/gaming.jpg',
    alt: 'High-performance computing servers and cloud rendering clusters for digital gaming platforms',
  },
  {
    id: 'healthcare',
    number: '04',
    name: 'Healthcare',
    shortName: 'Healthcare',
    description:
      'Technology environments where data reliability and operational continuity matter.',
    highlights: [
      'Continuous availability for clinical diagnostics',
      'Secure, audit-ready data pipeline engineering',
      'High-integrity medical record storage architectures',
    ],
    image: '/images/industries/healthcare.jpg',
    alt: 'Modern clinical enterprise technology control room with medical diagnostic displays',
  },
];
