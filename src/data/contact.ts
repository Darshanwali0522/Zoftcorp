export interface ContactTopic {
  id: string;
  label: string;
}

export interface ContactDiscoveryOption {
  id: string;
  label: string;
}

export interface ConversationArea {
  id: string;
  code: string;
  title: string;
  description: string;
  topicTarget: string;
}

export const CONTACT_HERO = {
  eyebrow: 'CONTACT',
  h1: 'Let’s Talk About What You’re Building.',
  copy: 'Whether you’re navigating a cloud decision, database challenge, modernization initiative, data opportunity, or broader technology question, start the conversation with ZOFT.',
  flow: [
    { step: '01', title: 'QUESTION', desc: 'Framing the core technical challenge' },
    { step: '02', title: 'CONTEXT', desc: 'Understanding environment & constraints' },
    { step: '03', title: 'TECHNICAL UNDERSTANDING', desc: 'Evaluating engines & architecture' },
    { step: '04', title: 'DIRECTION', desc: 'Formulating strategic options' },
    { step: '05', title: 'ACTION', desc: 'Delivering practical results' },
  ],
};

export const CONTACT_TOPICS: ContactTopic[] = [
  { id: '', label: 'Select a topic *' },
  { id: 'cloud-db-strategy', label: 'Cloud & Database Strategy' },
  { id: 'cloud-finops', label: 'Cloud FinOPs' },
  { id: 'performance-audits', label: 'Performance Audits' },
  { id: 'ai-architectures', label: 'AI-Ready Architectures' },
  { id: 'migrations', label: 'Database Migrations and Transformations' },
  { id: 'performance-tuning', label: 'Performance Tuning Delivery' },
  { id: 'managed-dba', label: 'Managed DBA Services' },
  { id: 'data-engineering', label: 'Data Engineering and Analytics' },
  { id: 'vector-db', label: 'Vector DB Integration' },
  { id: 'general-enquiry', label: 'General Technology Enquiry' },
];

export const CONTACT_DISCOVERY_OPTIONS: ContactDiscoveryOption[] = [
  { id: '', label: 'How did you hear about us? (Optional)' },
  { id: 'search', label: 'Search Engine' },
  { id: 'referral', label: 'Industry Referral' },
  { id: 'social', label: 'Social Media' },
  { id: 'event', label: 'Event or Meetup' },
  { id: 'existing', label: 'Existing Connection' },
  { id: 'other', label: 'Other' },
];

export const CONTACT_CONVERSATION_AREAS: ConversationArea[] = [
  {
    id: 'cloud',
    code: '01',
    title: 'CLOUD',
    description: 'Cloud strategy, migration considerations, FinOps governance, and multi-cloud architecture.',
    topicTarget: 'Cloud & Database Strategy',
  },
  {
    id: 'databases',
    code: '02',
    title: 'DATABASES',
    description: 'SQL Server, PostgreSQL, MySQL, high-availability setups, and managed DBA operations.',
    topicTarget: 'Managed DBA Services',
  },
  {
    id: 'data',
    code: '03',
    title: 'DATA',
    description: 'Data platform engineering, analytics pipelines, modernization, and lakehouse patterns.',
    topicTarget: 'Data Engineering and Analytics',
  },
  {
    id: 'performance',
    code: '04',
    title: 'PERFORMANCE',
    description: 'Deep query optimization, engine tuning, bottleneck auditing, and latency reduction.',
    topicTarget: 'Performance Tuning Delivery',
  },
  {
    id: 'architecture',
    code: '05',
    title: 'ARCHITECTURE',
    description: 'System design trade-offs, vector DB integration, semantic search, and AI readiness.',
    topicTarget: 'AI-Ready Architectures',
  },
  {
    id: 'engineering',
    code: '06',
    title: 'ENGINEERING',
    description: 'Schema transformations, complex migrations, digital experience, and technical execution.',
    topicTarget: 'Database Migrations and Transformations',
  },
];

export const EXPECTATION_STEPS = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description: 'We read your context thoroughly before responding, ensuring technical alignment.',
  },
  {
    number: '02',
    title: 'DISCUSS',
    description: 'Direct advisory conversation with senior technical specialists — no sales scripts.',
  },
  {
    number: '03',
    title: 'DIRECTION',
    description: 'Clear evaluation of architectural trade-offs, scope, and technical roadmapping.',
  },
  {
    number: '04',
    title: 'ACTION',
    description: 'Practical, structured implementation aligned with enterprise standards.',
  },
];

export const CONTACT_NAVIGATION = [
  { label: 'Consulting', href: '/consulting', desc: 'Strategic technical advisory & audits' },
  { label: 'Our Offerings', href: '/offerings', desc: 'Specialized delivery & DBA services' },
  { label: 'ZoftStudio', href: '/zoftstudio', desc: 'Digital experience & enterprise design' },
  { label: 'Insights', href: '/insights', desc: 'Technical articles, case studies & meetups' },
  { label: 'About Us', href: '/about-us', desc: 'Our background, values & story' },
];
