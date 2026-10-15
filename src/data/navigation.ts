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
    id: 'consulting',
    label: 'Consulting',
    href: '/consulting',
    type: 'dropdown',
    categories: [
      {
        categoryTitle: 'Consulting Capabilities',
        items: [
          {
            title: 'AI-Ready Architectures',
            href: '/consulting/ai-ready-architectures',
            description: 'Design technology foundations for modern AI workloads and evolving enterprise demands.',
          },
          {
            title: 'Cloud & Database Strategy',
            href: '/consulting/cloud-database-strategy',
            description: 'Align cloud infrastructure and database architecture with long-term technology goals.',
          },
          {
            title: 'Cloud FinOPs',
            href: '/consulting/cloud-finops',
            description: 'Greater visibility and discipline for cloud and database spending.',
          },
          {
            title: 'Compliance & Governance',
            href: '/consulting/compliance-governance',
            description: 'Practical governance frameworks for secure, reliable, and accountable environments.',
          },
          {
            title: 'Performance Audits',
            href: '/consulting/performance-audits',
            description: 'Identify database and architecture bottlenecks affecting operational efficiency.',
          },
          {
            title: 'Fractional Architect',
            href: '/consulting/fractional-architect',
            description: 'Extend your technical leadership with experienced architecture guidance.',
          },
        ],
      },
    ],
  },
  {
    id: 'offerings',
    label: 'Our Offerings',
    href: '/offerings',
    type: 'mega-menu',
    categories: [
      {
        categoryTitle: 'Core Offerings',
        items: [
          {
            title: 'Vector DB Integration',
            href: '/offerings/vector-db-integration',
            description: 'Semantic indexing and vector database integration for enterprise platforms.',
          },
          {
            title: 'Database Migrations and Transformations',
            href: '/offerings/database-migrations-and-transformations',
            description: 'Modernize and refactor database environments with structured cutover protocols.',
          },
          {
            title: 'Performance Tuning Delivery',
            href: '/offerings/performance-tuning-delivery',
            description: 'Deep-seated query tuning, buffer optimization, and contention elimination.',
          },
          {
            title: 'Managed DBA Services',
            href: '/offerings/managed-dba-services',
            description: '24/7 proactive monitoring, backup validation, and operational administration.',
          },
          {
            title: 'Data Engineering and Analytics',
            href: '/offerings/data-engineering-and-analytics',
            description: 'Scalable data pipelines, analytical warehouses, and data lakehouse architecture.',
            children: [
              {
                title: 'Industries',
                href: '/offerings/data-engineering-and-analytics/industries',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'zoftstudio',
    label: 'ZoftStudio',
    href: '/zoftstudio',
    type: 'link',
  },
  {
    id: 'insights',
    label: 'Insights',
    href: '/insights',
    type: 'dropdown',
    categories: [
      {
        categoryTitle: 'Insights & Resources',
        items: [
          {
            title: 'Blogs',
            href: '/insights/blogs',
            description: 'Technical insights on database performance, cloud architecture, and operations.',
          },
          {
            title: 'Case Studies',
            href: '/insights/case-studies',
            description: 'Engineering deep dives into complex database and cloud engagements.',
          },
          {
            title: 'Webinar',
            href: '/insights/webinar',
            description: 'Technical webinars and architecture discussions.',
          },
          {
            title: 'Meet ups',
            href: '/insights/meet-ups',
            description: 'Community engineering events and technical meetups.',
          },
        ],
      },
    ],
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about-us',
    type: 'dropdown',
    categories: [
      {
        categoryTitle: 'Company',
        items: [
          {
            title: 'Company Story',
            href: '/about-us/company-story',
            description: 'Our background in enterprise cloud and database advisory.',
          },
          {
            title: 'Why Zoftcorp?',
            href: '/about-us/why-zoftcorp',
            description: 'Boutique agility backed by deep engineering depth.',
          },
          {
            title: 'Partnerships',
            href: '/about-us/partnerships',
            description: 'Enterprise cloud ecosystems across AWS, Azure, GCP, and Oracle.',
            children: [
              {
                title: 'AWS',
                href: '/about-us/partnerships/aws',
              },
              {
                title: 'Azure',
                href: '/about-us/partnerships/azure',
              },
              {
                title: 'GCP',
                href: '/about-us/partnerships/gcp',
              },
              {
                title: 'Oracle',
                href: '/about-us/partnerships/oracle',
              },
            ],
          },
          {
            title: 'Career',
            href: '/about-us/career',
            description: 'Join our team of database and cloud systems engineers.',
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
