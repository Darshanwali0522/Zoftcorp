export interface ExpertisePillar {
  id: string;
  tag: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export interface ExpertiseSectionData {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  heroImage: {
    src: string;
    alt: string;
    caption: string;
  };
  pillars: ExpertisePillar[];
}

export const EXPERTISE_DATA: ExpertiseSectionData = {
  eyebrow: 'EXPERTISE IN ACTION',
  headlineLine1: 'Deep Expertise.',
  headlineLine2: 'Built for Critical Systems.',
  supportingCopy:
    'ZOFT combines database, cloud, and data engineering expertise to help organizations build, modernize, and operate technology environments they can depend on.',
  heroImage: {
    src: '/images/expertise/hero.jpg',
    alt: 'Enterprise technology infrastructure showing high-density server environments and precision engineering',
    caption: 'Enterprise Operations & Systems Reliability',
  },
  pillars: [
    {
      id: 'database',
      tag: 'DATABASE',
      title: 'Deep Database Expertise',
      description:
        'Engine-level query tuning, transactional integrity, high availability clustering, and zero-downtime schema evolution.',
      focusAreas: ['PostgreSQL & Oracle tuning', 'Distributed consensus & replication', 'Lock contention elimination'],
    },
    {
      id: 'cloud',
      tag: 'CLOUD',
      title: 'Enterprise Cloud Environments',
      description:
        'Multi-cloud architecture alignment across AWS, Azure, GCP, and Oracle Cloud tailored to mission-critical workloads.',
      focusAreas: ['Hybrid cloud database landing zones', 'Cost & resource optimization', 'Infrastructure as Code governance'],
    },
    {
      id: 'data',
      tag: 'DATA',
      title: 'Data Engineering & Analytics',
      description:
        'Scalable streaming data pipelines, automated ETL/ELT workflows, and modern vector database integration.',
      focusAreas: ['Real-time streaming ingestion', 'Vector indexing for enterprise AI', 'Data lakehouse orchestration'],
    },
    {
      id: 'reliability',
      tag: 'RELIABILITY',
      title: 'Critical Systems & Operations',
      description:
        'Proactive database reliability engineering, telemetry, disaster recovery protocols, and 24/7 incident prevention.',
      focusAreas: ['Automated failover verification', 'Chaos engineering & stress testing', 'SLA-backed ops management'],
    },
  ],
};
