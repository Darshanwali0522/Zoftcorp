export interface BusinessGrowthPoint {
  title: string;
  description: string;
}

export interface GrowBusinessData {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  points: BusinessGrowthPoint[];
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export const GROW_BUSINESS_DATA: GrowBusinessData = {
  eyebrow: 'GROW YOUR BUSINESS WITH US',
  headlineLine1: 'Your Business Runs on Data.',
  headlineLine2: 'Make Sure It Runs Smoothly.',
  supportingCopy:
    'Technology decisions become transformational when your databases are tuned for performance, your cloud costs are controlled, and your data platforms operate without interruption.',
  points: [
    {
      title: 'Accelerate Database Performance',
      description: 'Eliminate latency spikes, optimize queries, and maintain high throughput during peak demand.',
    },
    {
      title: 'Optimize Cloud Spending',
      description: 'Reduce unnecessary database licensing and infrastructure overhead without compromising reliability.',
    },
    {
      title: 'Prevent Operational Disruption',
      description: 'Ensure continuous availability with proactive 24/7 monitoring, failover validation, and expert support.',
    },
    {
      title: 'Modernize & Scale Confidently',
      description: 'Refactor legacy databases and engineer scalable data pipelines built for enterprise growth.',
    },
  ],
  ctaPrimary: {
    label: 'Talk to an Expert',
    href: '#contact',
  },
  ctaSecondary: {
    label: 'Explore Our Capabilities',
    href: '#services',
  },
  image: {
    src: '/images/grow-business/hero.jpg',
    alt: 'Enterprise technology center with engineers monitoring cloud database operations',
  },
};
