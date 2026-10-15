export interface AwsArchitectureArea {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string;
}

export interface RelatedLinkItem {
  title: string;
  description: string;
  href: string;
}

export interface AwsBenefitItem {
  number: string;
  title: string;
  description: string;
  keyMetric?: string;
}

export interface AwsProcessStage {
  stage: string;
  number: string;
  title: string;
  description: string;
  color: 'blue' | 'orange' | 'cyan' | 'purple' | 'pink';
}

export interface AwsSpecializedService {
  name: string;
  category: string;
  description: string;
  tags: string[];
}

export interface AwsCredibilityItem {
  value?: string;
  label: string;
  description: string;
  iconType: 'architects' | 'projects' | 'compliance' | 'tailored';
}

export const AWS_HERO_CONTENT = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'AWS', href: '/about-us/partnerships/aws' },
  ],
  title: 'AWS Cloud Consulting Services',
  headingPrefix: 'AWS Cloud',
  headingSuffix: 'Consulting Services',
  description:
    'Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS. From strategy to deployment and optimization, we help you unlock the full potential of the AWS cloud.',
  ctaLabel: 'Talk to Our AWS Experts',
  ctaHref: '/contact?service=aws-consulting',
  logoWhitePath: '/platforms/aws-white.svg',
  logoDarkPath: '/platforms/aws.svg',
};

export const AWS_WHY_MATTERS_CONTENT = {
  headingPrefix: 'Why AWS Cloud Consulting',
  headingSuffix: 'Matters?',
  body:
    "Amazon Web Services (AWS) is the world's leading cloud platform, offering unmatched scalability, flexibility, and innovation. But without the right guidance, organizations risk overspending, misconfigurations, and security vulnerabilities. Our AWS Cloud Consulting Services help businesses design, migrate, and optimize their cloud environments — ensuring agility, cost efficiency, and long-term success.",
  architecturalVisualCaption: 'Enterprise AWS Architecture',
};

export const AWS_CREDIBILITY_ITEMS: AwsCredibilityItem[] = [
  {
    value: '15+',
    label: 'Certified AWS Cloud Architects',
    description: 'Certified AWS Cloud Architects with 15+ years of enterprise expertise.',
    iconType: 'architects',
  },
  {
    value: '100+',
    label: 'Successful Cloud Projects',
    description: '100+ successful cloud consulting and migration projects delivered.',
    iconType: 'projects',
  },
  {
    label: 'Transparent Governance & SOWs',
    description: 'Transparent SOWs, pricing sheets, and governance models for client trust.',
    iconType: 'compliance',
  },
  {
    label: 'SME & Enterprise Tailored',
    description: 'Tailored solutions designed for fast-growing SMEs and complex enterprises.',
    iconType: 'tailored',
  },
];

export const AWS_KEY_BENEFITS: AwsBenefitItem[] = [
  {
    number: '01',
    title: 'Cloud Strategy & Roadmap',
    description: 'Tailored AWS adoption plans aligned with business goals.',
  },
  {
    number: '02',
    title: 'Seamless Migration',
    description: 'Move workloads from on-premises or other clouds to AWS with minimal downtime.',
  },
  {
    number: '03',
    title: 'Performance Optimization',
    description: 'Fine-tune compute, storage, and networking for maximum efficiency.',
  },
  {
    number: '04',
    title: 'Cost Management (FinOps)',
    description: 'Reduce AWS expenses with rightsizing, reserved instances, and governance frameworks.',
  },
  {
    number: '05',
    title: 'Security & Compliance',
    description: 'Implement AWS-native security controls to meet GDPR, HIPAA, and PCI-DSS standards.',
  },
  {
    number: '06',
    title: 'Innovation Enablement',
    description: 'Leverage AI, analytics, and serverless computing with AWS-native services.',
  },
];

export const AWS_PROCESS_STAGES: AwsProcessStage[] = [
  {
    stage: 'Stage 01',
    number: '01',
    title: 'Assessment & Planning',
    description: 'Evaluate current environment, business goals, and cloud readiness.',
    color: 'blue',
  },
  {
    stage: 'Stage 02',
    number: '02',
    title: 'Architecture Design',
    description: 'Build secure, scalable and cost-optimized AWS architectures.',
    color: 'orange',
  },
  {
    stage: 'Stage 03',
    number: '03',
    title: 'Migration & Deployment',
    description: 'Migrate workloads with minimal downtime and operational disruption.',
    color: 'cyan',
  },
  {
    stage: 'Stage 04',
    number: '04',
    title: 'Optimization & Governance',
    description: 'Implement FinOps, monitoring, and compliance frameworks for long-term efficiency.',
    color: 'purple',
  },
  {
    stage: 'Stage 05',
    number: '05',
    title: 'Continuous Advisory',
    description: 'Provide ongoing support, innovation guidance, and performance tuning.',
    color: 'pink',
  },
];

export const AWS_SPECIALIZED_SERVICES: AwsSpecializedService[] = [
  {
    name: 'Amazon EC2 & Networking',
    category: 'Compute & High-Throughput Infrastructure',
    description:
      'Elastic compute instances, Virtual Private Cloud (VPC), Route 53 latency routing, and load balancing engineered for enterprise availability.',
    tags: ['Amazon EC2', 'Virtual Private Cloud (VPC)', 'Route 53', 'Elastic Load Balancing', 'Direct Connect'],
  },
  {
    name: 'Amazon RDS, Aurora & DynamoDB',
    category: 'Enterprise Relational & NoSQL Databases',
    description:
      'Engineered database resilience across Amazon Aurora (PostgreSQL/MySQL), multi-AZ Amazon RDS, and ultra-low latency DynamoDB clusters.',
    tags: ['Amazon Aurora', 'Amazon RDS', 'DynamoDB', 'Database Migration Service (DMS)', 'Read Replicas'],
  },
  {
    name: 'Amazon S3 & Storage Optimization',
    category: 'Intelligent Storage Lifecycle Management',
    description:
      'Scalable object storage architectures, S3 Intelligent-Tiering policies, Glacier vault archiving, and optimized EBS block volumes.',
    tags: ['Amazon S3', 'S3 Intelligent-Tiering', 'Glacier Deep Archive', 'EBS Provisioned IOPS', 'Lifecycle Rules'],
  },
  {
    name: 'AWS Lambda & Serverless Architectures',
    category: 'Event-Driven Computing & Microservices',
    description:
      'Modern event-driven serverless architectures using AWS Lambda, API Gateway endpoints, Step Functions workflows, and EventBridge.',
    tags: ['AWS Lambda', 'Amazon API Gateway', 'AWS Step Functions', 'EventBridge', 'Microservices'],
  },
  {
    name: 'Amazon Redshift & Data Analytics',
    category: 'Cloud Warehousing & Big Data Lakehouses',
    description:
      'Petabyte-scale analytics warehousing with Amazon Redshift Serverless, automated Glue ETL pipelines, and serverless queries with Athena.',
    tags: ['Amazon Redshift', 'AWS Glue Catalog', 'Amazon Athena', 'Amazon EMR', 'Lake Formation'],
  },
  {
    name: 'AWS Security Hub & Identity Management',
    category: 'Zero-Trust Architecture & Compliance',
    description:
      'Centralized security posture management, IAM least-privilege policies, KMS envelope encryption, and real-time GuardDuty threat detection.',
    tags: ['AWS Security Hub', 'AWS IAM', 'AWS KMS', 'Amazon GuardDuty', 'AWS WAF & Shield'],
  },
];

// Preserved compatibility exports
export const AWS_PARTNERSHIP_HERO = {
  eyebrow: 'AWS',
  h1: 'AWS Cloud Consulting Services',
  copy: AWS_HERO_CONTENT.description,
  logoPath: '/platforms/aws.svg',
};

export const AWS_ARCHITECTURE_AREAS: AwsArchitectureArea[] = [
  {
    id: 'cloud-architecture',
    number: '01',
    title: 'Cloud Architecture',
    tagline: 'SCALABILITY & RESILIENCE',
    description:
      'Understand how infrastructure decisions support workload requirements, scalability, reliability, and long-term technology direction.',
    details:
      'Infrastructure layout across AWS environments should align directly with system workloads, availability demands, security posture, and growth trajectories.',
  },
  {
    id: 'database-strategy',
    number: '02',
    title: 'Database Strategy',
    tagline: 'DATA ENGINE ALIGNMENT',
    description:
      'Consider database architecture, workload characteristics, performance, operational requirements, and modernization decisions within the broader cloud environment.',
    details:
      'Connecting database engine characteristics (SQL Server, PostgreSQL, MySQL) with cloud infrastructure ensures query throughput, data integrity, and cost efficiency.',
  },
  {
    id: 'data-engineering',
    number: '03',
    title: 'Data Engineering',
    tagline: 'ANALYTICS & PIPELINES',
    description:
      'Build data foundations that support integration, transformation, analytics, and evolving data requirements.',
    details:
      'Data architecture across cloud platforms needs structured pipeline design to move, transform, and analyze enterprise data smoothly.',
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performance',
    tagline: 'WORKLOAD EFFICIENCY',
    description:
      'Understand how database, workload, and infrastructure factors influence performance and operational efficiency.',
    details:
      'Addressing bottlenecks requires looking at query patterns, memory allocation, network latency, and compute resources holistically.',
  },
  {
    id: 'technical-architecture',
    number: '05',
    title: 'Technical Architecture',
    tagline: 'INTEGRATED GOVERNANCE',
    description:
      'Connect technology decisions to application, data, infrastructure, and business requirements.',
    details:
      'Establishing clean interfaces, architectural discipline, and governance protocols keeps multi-layered systems maintainable over time.',
  },
];

export const AWS_DATABASE_DEPTH = [
  { name: 'SQL Server', category: 'Database Engine' },
  { name: 'PostgreSQL', category: 'Database Engine' },
  { name: 'MySQL', category: 'Database Engine' },
];

export const AWS_RELATED_CONSULTING: RelatedLinkItem[] = [
  {
    title: 'Cloud & Database Strategy',
    description: 'Align cloud infrastructure and database architecture with long-term technology goals.',
    href: '/consulting/cloud-database-strategy',
  },
  {
    title: 'Cloud FinOPs',
    description: 'Greater visibility and discipline for cloud and database spending.',
    href: '/consulting/cloud-finops',
  },
  {
    title: 'AI-Ready Architectures',
    description: 'Design technology foundations for modern AI workloads and evolving demands.',
    href: '/consulting/ai-ready-architectures',
  },
  {
    title: 'Performance Audits',
    description: 'Identify database and architecture bottlenecks affecting operational efficiency.',
    href: '/consulting/performance-audits',
  },
];

export const AWS_RELATED_OFFERINGS: RelatedLinkItem[] = [
  {
    title: 'Database Migrations and Transformations',
    description: 'Modernize and refactor database environments with structured cutover protocols.',
    href: '/offerings/database-migrations-and-transformations',
  },
  {
    title: 'Performance Tuning Delivery',
    description: 'Deep-seated query tuning, buffer optimization, and contention elimination.',
    href: '/offerings/performance-tuning-delivery',
  },
  {
    title: 'Managed DBA Services',
    description: 'Proactive monitoring, backup validation, and operational administration.',
    href: '/offerings/managed-dba-services',
  },
  {
    title: 'Data Engineering and Analytics',
    description: 'Scalable data pipelines, analytical warehouses, and data lakehouse architecture.',
    href: '/offerings/data-engineering-and-analytics',
  },
];
