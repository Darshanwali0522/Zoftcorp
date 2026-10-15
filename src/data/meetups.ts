export interface MeetupSpeaker {
  name: string;
  role: string;
  avatar?: string;
}

export interface Meetup {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  location: string;
  speaker: string;
  speakerRole: string;
  topics: string[];
  registrationUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface CommunityPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface MeetupTopic {
  number: string;
  id: string;
  title: string;
  description: string;
}

export const COMMUNITY_PRINCIPLES: CommunityPrinciple[] = [
  {
    number: '01',
    title: 'SHARE',
    description: 'Bring practical knowledge and experience into the conversation.',
  },
  {
    number: '02',
    title: 'QUESTION',
    description: 'Create room for thoughtful questions and different perspectives.',
  },
  {
    number: '03',
    title: 'CONNECT',
    description: 'Build meaningful connections around technology and shared interests.',
  },
  {
    number: '04',
    title: 'LEARN',
    description: 'Leave with ideas that can be explored beyond the conversation.',
  },
];

export const MEETUP_TOPICS: MeetupTopic[] = [
  {
    number: '01',
    id: 'cloud',
    title: 'CLOUD',
    description: 'Cloud architecture patterns, operational resilience, multi-cloud strategies, and FinOps practices.',
  },
  {
    number: '02',
    id: 'databases',
    title: 'DATABASES',
    description: 'Database design, query tuning, high availability, schema transformations, and engine selection.',
  },
  {
    number: '03',
    id: 'data',
    title: 'DATA',
    description: 'Data platform engineering, analytics pipelines, lakehouse architectures, and real-time processing.',
  },
  {
    number: '04',
    id: 'performance',
    title: 'PERFORMANCE',
    description: 'System observability, workload optimization, bottleneck detection, and benchmarking methodologies.',
  },
  {
    number: '05',
    id: 'architecture',
    title: 'ARCHITECTURE',
    description: 'System modularity, event-driven design, technical governance, and refactoring strategies.',
  },
  {
    number: '06',
    id: 'modern-technology',
    title: 'MODERN TECHNOLOGY',
    description: 'Vector databases, enterprise AI workload integration, semantic retrieval, and emerging stacks.',
  },
];

// Production data array ready for future verified meetups
export const MEETUPS: Meetup[] = [];
