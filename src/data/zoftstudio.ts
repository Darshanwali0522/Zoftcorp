export interface StudioPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface MindsetPrinciple {
  title: string;
  tagline: string;
  detail: string;
}

export interface ExplorationArea {
  number: string;
  title: string;
  description: string;
  codeSnippet?: string;
  tags: string[];
}

export interface StageItem {
  number: string;
  title: string;
  question: string;
  description: string;
}

export const STUDIO_PRINCIPLES: StudioPrinciple[] = [
  {
    number: '01',
    title: 'Explore',
    description: 'Examine emerging technologies, patterns, and possibilities.',
  },
  {
    number: '02',
    title: 'Validate',
    description: 'Understand technical feasibility, architectural implications, and practical constraints.',
  },
  {
    number: '03',
    title: 'Shape',
    description: 'Turn useful ideas into clearer technical directions and implementation paths.',
  },
];

export const MINDSET_PRINCIPLES: MindsetPrinciple[] = [
  {
    title: 'Explore',
    tagline: 'Look beyond established approaches.',
    detail: 'Question conventional design assumptions and examine emerging architectural paradigms before making platform commitments.',
  },
  {
    title: 'Question',
    tagline: 'Challenge assumptions before committing to technology.',
    detail: 'Interrogate claims around scalability, maintenance overhead, and real-world operational complexity.',
  },
  {
    title: 'Validate',
    tagline: 'Test ideas against real technical requirements.',
    detail: 'Verify performance boundaries, data integrity requirements, and system integration patterns.',
  },
  {
    title: 'Apply',
    tagline: 'Move useful concepts toward practical implementation.',
    detail: 'Translate validated concepts into structured technical directions and execution roadmaps.',
  },
];

export const EXPLORATION_AREAS: ExplorationArea[] = [
  {
    number: '01',
    title: 'Modern Data',
    description: 'Explore modern approaches to data, retrieval, analytics, and data-driven applications.',
    tags: ['Pipelines', 'Retrieval', 'Lakehouses', 'Data Quality'],
  },
  {
    number: '02',
    title: 'Cloud & Infrastructure',
    description: 'Examine cloud architectures, infrastructure patterns, and evolving technology approaches.',
    tags: ['Multi-Cloud', 'Resilience', 'FinOps', 'Infrastructure-as-Code'],
  },
  {
    number: '03',
    title: 'AI & Intelligent Workloads',
    description: 'Explore how AI-oriented workloads can interact with existing data, applications, and infrastructure.',
    tags: ['Vector Search', 'RAG Architecture', 'Model Serving', 'Embeddings'],
  },
  {
    number: '04',
    title: 'Engineering & Architecture',
    description: 'Evaluate technical patterns, system design approaches, and architecture decisions.',
    tags: ['System Design', 'Decoupled Systems', 'Event-Driven', 'High Throughput'],
  },
];

export const PROGRESSION_STAGES: StageItem[] = [
  {
    number: '01',
    title: 'Question',
    question: 'What problem or opportunity are we examining?',
    description: 'Deconstruct the challenge and clarify the operational and architectural intent.',
  },
  {
    number: '02',
    title: 'Explore',
    question: 'What technologies, patterns, and approaches could address it?',
    description: 'Evaluate alternative options, emerging tools, and non-obvious technical paths.',
  },
  {
    number: '03',
    title: 'Validate',
    question: 'What works technically, and what constraints matter?',
    description: 'Test hypotheses against performance limits, security models, and system realities.',
  },
  {
    number: '04',
    title: 'Direction',
    question: 'What should happen next?',
    description: 'Synthesize findings into an actionable technical path forward.',
  },
];
