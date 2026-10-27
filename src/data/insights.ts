export interface InsightCategory {
  number: string;
  id: string;
  title: string;
  href: string;
  shortLabel: string;
  description: string;
}

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  {
    number: '01',
    id: 'blogs',
    title: 'BLOGS',
    href: '/insights/blogs',
    shortLabel: 'Blogs',
    description:
      'Technical perspectives, ideas, and practical thinking across cloud, databases, data, performance, and modern technology.',
  },
  {
    number: '02',
    id: 'case-studies',
    title: 'CASE STUDIES',
    href: '/insights/case-studies',
    shortLabel: 'Case Studies',
    description:
      'Explore technology challenges, approaches, and outcomes through real-world work where verified examples are available.',
  },
  {
    number: '03',
    id: 'events',
    title: 'EVENTS & MEETUPS',
    href: '/insights/events',
    shortLabel: 'Events & Meetups',
    description:
      'Explore technical webinars, architectural roundtables, community meetups, and engineering sessions.',
  },
];
