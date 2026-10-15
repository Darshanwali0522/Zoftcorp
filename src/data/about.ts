export interface AboutPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface TechnologyDepthArea {
  number: string;
  id: string;
  title: string;
  description: string;
}

export interface ZoftDifferentiator {
  title: string;
  tagline: string;
  description: string;
}

export interface EcosystemTechnology {
  name: string;
  category: 'cloud-platform' | 'database-engine';
  logoPath?: string;
}

export interface AboutDestination {
  title: string;
  description: string;
  href: string;
}

export const ABOUT_PRINCIPLES: AboutPrinciple[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description: 'Start with the workload, requirements, constraints, and business context.',
  },
  {
    number: '02',
    title: 'ARCHITECT',
    description: 'Design technology around the problem rather than forcing the problem into a technology.',
  },
  {
    number: '03',
    title: 'ENGINEER',
    description: 'Turn architecture into practical technical implementation.',
  },
  {
    number: '04',
    title: 'IMPROVE',
    description: 'Measure, learn, optimize, and evolve the environment over time.',
  },
];

export const TECHNOLOGY_DEPTH_AREAS: TechnologyDepthArea[] = [
  {
    number: '01',
    id: 'databases',
    title: 'DATABASES',
    description: 'Cloud and enterprise database environments.',
  },
  {
    number: '02',
    id: 'cloud',
    title: 'CLOUD',
    description: 'Cloud architecture, migration, optimization, and operations.',
  },
  {
    number: '03',
    id: 'data',
    title: 'DATA',
    description: 'Data engineering, analytics, and modern data workloads.',
  },
  {
    number: '04',
    id: 'performance',
    title: 'PERFORMANCE',
    description: 'Performance investigation and optimization.',
  },
  {
    number: '05',
    id: 'architecture',
    title: 'ARCHITECTURE',
    description: 'Technology strategy and technical decision-making.',
  },
];

export const ZOFT_DIFFERENTIATORS: ZoftDifferentiator[] = [
  {
    title: 'EXPERTISE',
    tagline: 'Technical Depth',
    description:
      'Deep technical understanding across databases, cloud, data, performance, and architecture.',
  },
  {
    title: 'PRACTICALITY',
    tagline: 'Operational Realities',
    description:
      'Technology decisions grounded in real workloads and operational realities.',
  },
  {
    title: 'PARTNERSHIP',
    tagline: 'Collaborative Guidance',
    description:
      'Working alongside organizations to understand challenges and guide technical decisions.',
  },
];

export const ECOSYSTEM_TECHNOLOGIES: EcosystemTechnology[] = [
  { name: 'AWS', category: 'cloud-platform', logoPath: '/platforms/aws.svg' },
  { name: 'Microsoft Azure', category: 'cloud-platform', logoPath: '/platforms/azure.svg' },
  { name: 'Google Cloud', category: 'cloud-platform', logoPath: '/platforms/gcp.svg' },
  { name: 'Oracle', category: 'cloud-platform', logoPath: '/platforms/oracle.svg' },
  { name: 'SQL Server', category: 'database-engine' },
  { name: 'PostgreSQL', category: 'database-engine' },
  { name: 'MySQL', category: 'database-engine' },
];

export const ABOUT_DESTINATIONS: AboutDestination[] = [
  {
    title: 'COMPANY STORY',
    description: 'Understand the story and evolution behind ZOFT.',
    href: '/about-us/company-story',
  },
  {
    title: 'WHY ZOFTCORP?',
    description:
      'Understand the thinking, approach, and reasons organizations may choose to work with ZOFT.',
    href: '/about-us/why-zoftcorp',
  },
  {
    title: 'PARTNERSHIPS',
    description: "Explore ZOFT's technology ecosystem and partner relationships.",
    href: '/about-us/partnerships',
  },
  {
    title: 'CAREER',
    description: 'Explore opportunities to build and grow with ZOFT.',
    href: '/about-us/career',
  },
];
