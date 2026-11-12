export interface CoreValue {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

export const CAREER_HERO = {
  eyebrow: 'CAREER',
  h1: 'Build Your Future With Us.',
  lead: "Embark on your professional journey at Zoftcorp today, and let's unlock your complete potential.",
  quote: {
    text: "You don't build a business, you build people, then people build the business.",
    author: 'Zig Ziglar',
  },
  mission: 'Zoftcorp is grounded in its values and driven by a mission to cultivate responsible individuals.',
};

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'integrity',
    number: '01',
    title: 'INTEGRITY',
    description:
      'Zoftcorp strongly believes in integrity in every business transaction. Therefore, our guiding principle is to say "No" more often than "Yes," emphasizing a commitment to ethical and principled decision-making.',
  },
  {
    id: 'innovation',
    number: '02',
    title: 'INNOVATION',
    description:
      'We believe that innovation is the key to success, both for ourselves and our valued customers. We are steadfastly committed to a culture of constant innovation.',
  },
  {
    id: 'take-ownership',
    number: '03',
    title: 'TAKE OWNERSHIP',
    description:
      'We adhere to the principle of taking ownership and being accountable for the commitments we make.',
  },
  {
    id: 'respectful',
    number: '04',
    title: 'RESPECTFUL',
    description:
      'We hold equal respect for all our employees, partners, and clients. We believe that fostering a respectful environment is crucial for the successful collaboration of individuals.',
  },
  {
    id: 'customer-centric',
    number: '05',
    title: 'CUSTOMER CENTRIC',
    description:
      'Our approach is rooted in a "help first" attitude, with a primary focus on comprehending and resolving customer problems. We bring to the table strong attributes of listening, learning, and leading.',
  },
  {
    id: 'team-work',
    number: '06',
    title: 'TEAM WORK',
    description:
      'Accomplishing remarkable feats is never the sole effort of individuals; it is the outcome of effective teamwork. Zoftcorp highly values and appreciates the spirit of collaboration!',
  },
  {
    id: 'empathetic',
    number: '07',
    title: 'EMPATHETIC',
    description:
      'Zoftcorp consistently endeavors to comprehend and empathize with the sentiments of our customers, partners, and employees.',
  },
  {
    id: 'empower',
    number: '08',
    title: 'EMPOWER',
    description:
      'Empowering people to perform to their fullest potential is the most challenging task. People are not merely resources; they are valuable human beings. We believe that fostering a culture of constant empowerment is integral to Zoftcorp.',
  },
];

export interface EmployeeBenefit {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

export const EMPLOYEE_BENEFITS_SECTION = {
  heading: 'Perks and Benefits',
  subheading: 'Grow Your Skills. Make an Impact.',
  introduction:
    'At Zoftcorp, work is driven by outcomes, continuous learning, and shared success. We provide comprehensive benefits and flexibility designed to empower exceptional talent.',
  benefits: [
    {
      id: 'work-from-home',
      emoji: '🏡',
      title: 'Work from Home',
      description:
        "Enjoy the flexibility to work from wherever you're most productive. We believe great work is driven by outcomes, not location, enabling you to maintain a healthy work-life balance.",
    },
    {
      id: 'special-day-off',
      emoji: '🎉',
      title: 'Special Day Off',
      description:
        "Celebrate life's special moments with paid leave on your Birthday, Marriage Anniversary, or other significant occasions. Because milestones deserve to be enjoyed, not missed.",
    },
    {
      id: 'competitive-salary',
      emoji: '💰',
      title: 'Competitive Salary',
      description:
        'We recognize and reward talent with market-aligned compensation designed to attract, retain, and motivate exceptional professionals.',
    },
    {
      id: 'learning-leave',
      emoji: '📚',
      title: 'Learning Leave',
      description:
        'Continuous learning is part of our culture. Employees receive dedicated paid learning leave to pursue certifications, training programs, workshops, and skill development initiatives.',
    },
    {
      id: 'cultural-heritage-leave',
      emoji: '🌏',
      title: 'Cultural Heritage Leave',
      description:
        'We celebrate diversity and respect individual traditions. Employees can avail Cultural Heritage Leave to observe important festivals and cultural events connected to their place of birth, community, or heritage.',
    },
    {
      id: 'insurance-coverage',
      emoji: '🛡️',
      title: 'Insurance Coverage',
      description:
        "Your well-being matters. We provide comprehensive health insurance coverage to support you and your family's medical needs and offer peace of mind.",
    },
    {
      id: 'employee-ownership-rsus',
      emoji: '🚀',
      title: 'Employee Ownership (RSUs)',
      description:
        'We believe in shared success. Eligible employees may receive Restricted Stock Units (RSUs), allowing them to participate in the company\'s long-term growth and value creation.',
    },
  ] as EmployeeBenefit[],
};

export const CAREER_OPENINGS_STATE = {
  title: 'Current Openings',
  subtitle: 'Explore Opportunities at Zoftcorp',
  copy: 'We are always interested in connecting with talented professionals who share our values and commitment to engineering excellence.',
  emptyNotice: 'Career opportunities will appear here when available.',
  jobs: [] as JobOpening[], // Structured empty array to ensure 0 fabricated job vacancies
};

export const CAREER_ROLES_OPTIONS = [
  'Senior Database Administrator (SQL Server / PostgreSQL / MySQL)',
  'Cloud Data Architect (AWS / Azure / GCP)',
  'Performance Tuning & Database Optimization Engineer',
  'Cloud & FinOps Infrastructure Specialist',
  'Data Engineering & Platform Specialist',
  'Resilience, Disaster Recovery & High-Availability Engineer',
  'Other / Open Technical Role',
] as const;
