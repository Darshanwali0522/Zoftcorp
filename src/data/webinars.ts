export interface WebinarSpeaker {
  name: string;
  role: string;
  avatar?: string;
}

export interface Webinar {
  slug: string;
  title: string;
  excerpt: string;
  speaker: string;
  speakerRole: string;
  date: string;
  duration: string;
  topic: string;
  registrationUrl?: string;
  recordingUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface SessionStage {
  number: string;
  title: string;
  description: string;
}

export interface WebinarTopic {
  number: string;
  id: string;
  title: string;
  description: string;
}

export const SESSION_STAGES: SessionStage[] = [
  {
    number: '01',
    title: 'FRAME',
    description: 'Define the technology problem or topic.',
  },
  {
    number: '02',
    title: 'EXPLORE',
    description: 'Examine different approaches and perspectives.',
  },
  {
    number: '03',
    title: 'QUESTION',
    description: 'Challenge assumptions and explore trade-offs.',
  },
  {
    number: '04',
    title: 'TAKE AWAY',
    description: 'Leave with clearer technical understanding.',
  },
];

export const WEBINAR_TOPICS: WebinarTopic[] = [
  {
    number: '01',
    id: 'cloud',
    title: 'CLOUD',
    description: 'Cloud infrastructure decisions, multi-cloud strategy, resilience, and FinOps.',
  },
  {
    number: '02',
    id: 'databases',
    title: 'DATABASES',
    description: 'Database engine selection, scalability, performance tuning, and migrations.',
  },
  {
    number: '03',
    id: 'data',
    title: 'DATA',
    description: 'Data platform architecture, transformation pipelines, and lakehouse patterns.',
  },
  {
    number: '04',
    id: 'performance',
    title: 'PERFORMANCE',
    description: 'Identifying bottlenecks, observability practices, and resource efficiency.',
  },
  {
    number: '05',
    id: 'architecture',
    title: 'ARCHITECTURE',
    description: 'Decoupled systems, event-driven patterns, and technical governance.',
  },
  {
    number: '06',
    id: 'modern-technology',
    title: 'MODERN TECHNOLOGY',
    description: 'Vector databases, retrieval architectures, and AI workload integration.',
  },
];

// Production data array ready for future verified webinars
export const WEBINARS: Webinar[] = [];
