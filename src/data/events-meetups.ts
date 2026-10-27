export interface EventSpeaker {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
}

export interface EventRecord {
  id: string;
  slug: string;
  title: string;
  type: 'webinar' | 'meetup' | 'architecture-session' | 'workshop';
  status: 'upcoming' | 'past';
  date?: string; // ISO date string e.g. '2026-11-15'
  time?: string; // e.g. '3:00 PM IST / 9:30 AM UTC'
  duration?: string; // e.g. '45 mins'
  location?: string; // e.g. 'Virtual / Online' or 'Bengaluru'
  speaker?: string;
  speakerRole?: string;
  excerpt: string;
  description?: string;
  topics: string[];
  registrationUrl?: string;
  recordingUrl?: string;
  slidesUrl?: string;
  image?: string;
  photos?: string[];
  featured?: boolean;
}

export interface EventTopic {
  number: string;
  id: string;
  title: string;
  description: string;
}

export interface EventFormat {
  id: string;
  title: string;
  badge: string;
  description: string;
  cadence: string;
}

export const EVENT_TOPICS: EventTopic[] = [
  {
    number: '01',
    id: 'cloud',
    title: 'CLOUD & FINOPS',
    description: 'Cloud infrastructure decisions, multi-cloud strategy, cost governance, and operational resilience.',
  },
  {
    number: '02',
    id: 'databases',
    title: 'DATABASES & TUNING',
    description: 'Database engine selection, query optimization, high availability, and schema migrations.',
  },
  {
    number: '03',
    id: 'data',
    title: 'DATA ENGINEERING',
    description: 'Data platform architecture, real-time pipelines, lakehouses, and analytical warehouses.',
  },
  {
    number: '04',
    id: 'performance',
    title: 'PERFORMANCE & RESILIENCE',
    description: 'Zero-data-loss failover, buffer contention elimination, and latency stabilization.',
  },
  {
    number: '05',
    id: 'architecture',
    title: 'SYSTEM ARCHITECTURE',
    description: 'Decoupled systems, event-driven designs, statutory compliance, and technical governance.',
  },
  {
    number: '06',
    id: 'modern-technology',
    title: 'MODERN TECHNOLOGY',
    description: 'Vector databases, semantic retrieval architectures, and enterprise AI workload integration.',
  },
];

export const EVENT_FORMATS: EventFormat[] = [
  {
    id: 'webinars',
    title: 'Technical Webinars',
    badge: 'ONLINE SESSIONS',
    description: 'Focused technical presentations and architectural evaluations examining complex cloud and database engineering decisions.',
    cadence: 'Periodic Live Sessions',
  },
  {
    id: 'meetups',
    title: 'Community Meetups',
    badge: 'COMMUNITY DIALOGUE',
    description: 'Collaborative roundtables and interactive discussions creating room for practical engineering questions and real-world trade-offs.',
    cadence: 'Community Gatherings',
  },
];

/**
 * Production data array ready for future admin-managed dynamic records.
 * Currently initialized to an empty array so no fake events or fabricated schedules are shown.
 */
export const EVENTS_AND_MEETUPS: EventRecord[] = [];

export function getUpcomingEvents(events: EventRecord[] = EVENTS_AND_MEETUPS): EventRecord[] {
  return events.filter((e) => e.status === 'upcoming');
}

export function getPastEvents(events: EventRecord[] = EVENTS_AND_MEETUPS): EventRecord[] {
  return events.filter((e) => e.status === 'past');
}
