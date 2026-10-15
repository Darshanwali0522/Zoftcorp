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
    id: 'webinar',
    title: 'WEBINAR',
    href: '/insights/webinar',
    shortLabel: 'Webinar',
    description:
      'Explore technical conversations, discussions, and sessions around relevant technology topics.',
  },
  {
    number: '04',
    id: 'meet-ups',
    title: 'MEET UPS',
    href: '/insights/meet-ups',
    shortLabel: 'Meet ups',
    description:
      'Discover opportunities for technology conversations, community interaction, and knowledge sharing.',
  },
];
