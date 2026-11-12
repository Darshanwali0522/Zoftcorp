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
    id: 'case-studies-blogs',
    title: 'CASE STUDIES, WHITE PAPERS & BLOGS',
    href: '/insights/blogs',
    shortLabel: 'Case Studies, White Papers & Blogs',
    description:
      'Verified engineering case studies, white papers, and technical articles across cloud architecture, databases, data, and performance optimization.',
  },
  {
    number: '02',
    id: 'events',
    title: 'EVENTS & MEETUPS',
    href: '/insights/events',
    shortLabel: 'Events & Meetups',
    description:
      'Explore technical webinars, architectural roundtables, community meetups, and engineering sessions.',
  },
];
