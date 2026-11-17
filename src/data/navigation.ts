export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  iconName?: string;
  badge?: string;
  isExternal?: boolean;
  children?: NavSubItem[];
}

export interface NavCategory {
  categoryTitle?: string;
  items: NavSubItem[];
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  type: 'link' | 'dropdown' | 'mega-menu';
  categories?: NavCategory[];
  isFeatured?: boolean;
  featuredBanner?: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    id: 'offerings',
    label: 'Our Offerings',
    href: '#',
    type: 'mega-menu',
    categories: [
      {
        categoryTitle: 'Core Offerings',
        items: [
          {
            title: 'Cloud & Data FinOps',
            href: '/consulting/cloud-finops',
            description: 'Cloud and database spend governance, telemetry-driven right-sizing, and cost discipline.',
          },
          {
            title: 'Performance Tuning',
            href: '/offerings/performance-tuning-delivery',
            description: 'Deep query optimization, buffer contention elimination, and execution plan stabilization.',
          },
          {
            title: 'Resilience and Compliance',
            href: '/consulting/resilience-compliance',
            description: 'High availability architecture, zero-data-loss failover protocols, and operational resilience.',
          },
          {
            title: 'DPDP Assessment',
            href: '/consulting/compliance-governance',
            description: 'Statutory DPDP Act compliance audit, data flow mapping, and readiness roadmap.',
          },
          {
            title: 'Specialized Managed Services',
            href: '/offerings/managed-dba-services',
            description: 'Next-gen 24/7 proactive DBaaS, automated provisioning, patching, and high availability.',
          },
        ],
      },
      {
        categoryTitle: 'Advanced Platforms & Engineering',
        items: [
          {
            title: 'Database Migrations and Transformations',
            href: '/offerings/database-migrations-and-transformations',
            description: 'Zero-downtime homogeneous and heterogeneous enterprise database migrations.',
          },
          {
            title: 'Data Engineering and Analytics',
            href: '/offerings/data-engineering-and-analytics',
            description: 'Scalable data pipelines, analytical warehouses, and data lakehouse architecture.',
          },
        ],
      },
    ],
  },
  {
    id: 'insights',
    label: 'Insights',
    href: '#',
    type: 'dropdown',
    categories: [
      {
        categoryTitle: 'Insights & Resources',
        items: [
          {
            title: 'Case Studies, White Papers & Blogs',
            href: '/insights/blogs',
            description: 'Engineering case studies, white papers, and technical articles on database performance and cloud systems.',
          },
          {
            title: 'Events & Meetups',
            href: '/insights/events',
            description: 'Technical webinars, architecture sessions, and community meetups.',
          },
        ],
      },
    ],
  },
  {
    id: 'careers',
    label: 'Careers',
    href: '/about-us/career',
    type: 'link',
  },
  {
    id: 'company',
    label: 'Company',
    href: '#',
    type: 'dropdown',
    categories: [
      {
        categoryTitle: 'Company',
        items: [
          {
            title: 'Leadership',
            href: '/about-us/leadership',
            description: 'Executive leadership and specialized practice leaders.',
          },
          {
            title: 'Vision & Mission',
            href: '/about-us/vision-mission',
            description: 'Our foundational commitment and architectural vision.',
          },
          {
            title: 'Partnerships',
            href: '/about-us/partnerships',
            description: 'Enterprise cloud ecosystems across AWS, Azure, GCP, and Oracle.',
          },
        ],
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    type: 'link',
  },
];
