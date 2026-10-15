export interface FocusArea {
  number: string;
  title: string;
  description: string;
}

export interface ApproachStage {
  number: string;
  title: string;
  description: string;
}

export interface ConsultingCapabilityDetail {
  id: string;
  number: string;
  name: string;
  description: string;
  ctaText: string;
  href: string;
  image: string;
  alt: string;
  deliverables: string[];
  overviewHeadline?: string;
  overviewCopy?: string;
  whyMatters: {
    eyebrow: string;
    headline: string;
    copy: string;
    calloutTitle?: string;
    calloutCopy?: string;
  };
  whatWeAddressHeadline?: string;
  whatWeAddress: FocusArea[];
  visualBreak?: string;
  visualBreakCopy?: string;
  approach: {
    eyebrow: string;
    headline: string;
    stages: ApproachStage[];
  };
  deliverablesHeadline?: string;
  deliverablesIntro?: string;
  cta?: {
    eyebrow?: string;
    headline?: string;
    copy?: string;
    primary?: string;
    secondary?: string;
  };
}

export const CONSULTING_CAPABILITIES_DATA: ConsultingCapabilityDetail[] = [
  {
    id: 'ai-ready-architectures',
    number: '01',
    name: 'AI-Ready Architectures',
    description:
      'Design technology foundations that can support modern AI workloads, data platforms, and evolving enterprise requirements.',
    ctaText: 'Explore AI-Ready Architectures →',
    href: '/consulting/ai-ready-architectures',
    image: '/images/consulting/ai-ready-architectures.jpg',
    alt: 'Modern high-performance AI data platform server infrastructure and GPU compute nodes',
    whyMatters: {
      eyebrow: 'WHY AI-READY ARCHITECTURE',
      headline: 'Build the Foundation Before the Workload Scales.',
      copy: 'AI initiatives depend on more than models. Data architecture, database performance, infrastructure, retrieval patterns, and operational design all influence how effectively an organization can move from experimentation to production.',
    },
    whatWeAddress: [
      {
        number: '01',
        title: 'Data & Retrieval Architecture',
        description:
          'Design data foundations that can support retrieval, indexing, and AI-oriented workloads.',
      },
      {
        number: '02',
        title: 'Infrastructure Readiness',
        description:
          'Align infrastructure with evolving compute, storage, networking, and workload requirements.',
      },
      {
        number: '03',
        title: 'Database & Vector Integration',
        description:
          'Consider how traditional database systems and vector-oriented capabilities can work together where appropriate.',
      },
      {
        number: '04',
        title: 'Scalability & Operations',
        description:
          'Design for maintainability, observability, performance, and operational growth.',
      },
    ],
    approach: {
      eyebrow: 'OUR APPROACH',
      headline: 'From Architecture Questions to Practical Technical Decisions.',
      stages: [
        {
          number: '01',
          title: 'Understand',
          description:
            'Assess existing infrastructure, data systems, workloads, and business requirements.',
        },
        {
          number: '02',
          title: 'Architect',
          description:
            'Define practical architecture options and technology boundaries.',
        },
        {
          number: '03',
          title: 'Validate',
          description:
            'Evaluate performance, integration, scalability, and operational considerations.',
        },
        {
          number: '04',
          title: 'Evolve',
          description:
            'Provide a path for implementation and future growth.',
        },
      ],
    },
    deliverables: [
      'Architecture assessment and data readiness baseline',
      'Data and retrieval architecture recommendations',
      'Infrastructure readiness and storage performance guidance',
      'Vector and relational database integration considerations',
      'Scalability, observability, and operational recommendations',
    ],
  },
  {
    id: 'cloud-database-strategy',
    number: '02',
    name: 'Cloud & Database Strategy',
    description:
      'Align cloud infrastructure and database architecture with business requirements, performance needs, cost considerations, and long-term technology goals.',
    ctaText: 'Explore Cloud & Database Strategy →',
    href: '/consulting/cloud-database-strategy',
    image: '/images/consulting/cloud-database-strategy.jpg',
    alt: 'Enterprise cloud infrastructure and database architecture planning',
    whyMatters: {
      eyebrow: 'WHY CLOUD & DATABASE STRATEGY',
      headline: 'Build Technology Around the Workload.',
      copy: 'Cloud and database decisions are closely connected. Platform choices, database architecture, workload characteristics, operational requirements, and cost considerations all influence how effectively a technology environment performs over time.',
      calloutTitle: 'Architecture Before Infrastructure',
      calloutCopy: 'Effective cloud strategy starts with understanding the workload, data requirements, operational constraints, and business priorities—not simply choosing a platform.',
    },
    whatWeAddressHeadline: 'Cloud and Database Decisions That Work Together.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Cloud Architecture',
        description: 'Evaluate infrastructure and platform choices around workload, scalability, security, and operational requirements.',
      },
      {
        number: '02',
        title: 'Database Architecture',
        description: 'Assess database technologies, deployment patterns, availability requirements, and workload characteristics.',
      },
      {
        number: '03',
        title: 'Workload & Platform Alignment',
        description: 'Align workloads with appropriate cloud and database environments based on technical and business requirements.',
      },
      {
        number: '04',
        title: 'Modernization Strategy',
        description: 'Identify practical paths for modernizing legacy infrastructure and database environments while managing technical dependencies.',
      },
    ],
    visualBreak: 'Good Architecture Starts With Understanding the System.',
    approach: {
      eyebrow: 'OUR APPROACH',
      headline: 'From Technology Landscape to Practical Strategy.',
      stages: [
        {
          number: '01',
          title: 'Understand',
          description: 'Assess current cloud environments, database systems, workloads, dependencies, and business requirements.',
        },
        {
          number: '02',
          title: 'Evaluate',
          description: 'Review architecture options, platform considerations, database technologies, performance requirements, and operational constraints.',
        },
        {
          number: '03',
          title: 'Design',
          description: 'Develop practical architecture and modernization options aligned with organizational priorities.',
        },
        {
          number: '04',
          title: 'Roadmap',
          description: 'Define a practical path for implementation, modernization, optimization, or future evolution.',
        },
      ],
    },
    deliverablesHeadline: 'Actionable Strategy for the Technology Environment.',
    deliverablesIntro: 'Potential technical deliverables can be tailored to the organization\'s current architecture, workload requirements, and strategic priorities:',
    deliverables: [
      'Cloud and database architecture assessment',
      'Workload and platform alignment recommendations',
      'Database technology and deployment evaluation',
      'Modernization and migration strategy guidance',
      'Practical architecture roadmap and technical recommendations',
    ],
    cta: {
      eyebrow: 'TALK TO AN EXPERT',
      headline: 'Ready to Rethink Your Cloud and Database Strategy?',
      copy: 'Bring us your current architecture, modernization plans, database challenges, or cloud decisions. We’ll help you evaluate the options and identify a practical path forward.',
    },
  },
  {
    id: 'cloud-finops',
    number: '03',
    name: 'Cloud FinOPs',
    description:
      'Bring greater visibility and discipline to cloud and database spending while maintaining the performance, reliability, and infrastructure capabilities your organization depends on.',
    ctaText: 'Explore Cloud FinOPs →',
    href: '/consulting/cloud-finops',
    image: '/images/consulting/cloud-finops.jpg',
    alt: 'Enterprise cloud infrastructure photography demonstrating visibility, scale, efficiency, and infrastructure control',
    overviewHeadline: 'Overview & Deliverables',
    overviewCopy:
      'ZOFT helps organizations understand and optimize cloud and database costs by connecting infrastructure usage, workload requirements, database environments, and operational decisions.',
    whyMatters: {
      eyebrow: 'WHY CLOUD FINOPs',
      headline: 'Make Cloud Spending More Visible, Predictable, and Actionable.',
      copy: 'Cloud environments can evolve quickly as workloads grow, infrastructure changes, and teams adopt new services. Effective FinOPs brings greater visibility to where resources are being consumed and how technology decisions affect ongoing costs.',
      calloutTitle: 'Cost Is a Technology Decision',
      calloutCopy:
        'Cloud spending is closely connected to architecture, workload behavior, database configuration, resource allocation, and operational practices.',
    },
    whatWeAddressHeadline: 'Understand the Technology Behind the Spend.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Cost Visibility',
        description:
          'Improve understanding of cloud and database resource consumption across environments and workloads.',
      },
      {
        number: '02',
        title: 'Resource Optimization',
        description:
          'Identify underutilized, oversized, or inefficiently allocated infrastructure and database resources.',
      },
      {
        number: '03',
        title: 'Database Cost Management',
        description:
          'Evaluate database-related infrastructure, licensing, deployment, storage, and workload considerations that influence cost.',
      },
      {
        number: '04',
        title: 'Governance & Optimization',
        description:
          'Establish practical cost-management practices that help teams make more informed infrastructure decisions over time.',
      },
    ],
    visualBreak: 'Optimize the Architecture, Not Just the Invoice.',
    visualBreakCopy:
      'Meaningful cost optimization starts with understanding why resources are being consumed. Architecture, workload patterns, database configuration, storage, compute, and operational practices all contribute to cloud spend.',
    approach: {
      eyebrow: 'OUR APPROACH',
      headline: 'From Cloud Spend to Practical Engineering Decisions.',
      stages: [
        {
          number: '01',
          title: 'Discover',
          description:
            'Review cloud environments, database workloads, resource usage, and major cost drivers.',
        },
        {
          number: '02',
          title: 'Analyze',
          description:
            'Identify utilization patterns, allocation issues, architecture considerations, and optimization opportunities.',
        },
        {
          number: '03',
          title: 'Prioritize',
          description:
            'Separate quick optimization opportunities from deeper architectural or operational changes.',
        },
        {
          number: '04',
          title: 'Govern',
          description:
            'Establish practical practices for ongoing visibility, accountability, and optimization.',
        },
      ],
    },
    deliverablesHeadline: 'Actionable Cost Optimization Guidance',
    deliverablesIntro:
      "Potential deliverables can be tailored to the organization's cloud environment, database architecture, workload characteristics, and cost-management priorities.",
    deliverables: [
      'Cloud and database cost assessment',
      'Resource utilization and allocation analysis',
      'Database infrastructure and deployment cost review',
      'Prioritized optimization opportunities',
      'Ongoing cost visibility and governance recommendations',
    ],
    cta: {
      eyebrow: 'TALK TO AN EXPERT',
      headline: 'Ready to Understand Where Your Cloud Spend Goes?',
      copy: 'Bring us your cloud environment, database workloads, or cost-management challenge. We’ll help you identify the technical factors driving spend and explore practical optimization paths.',
    },
  },
  {
    id: 'compliance-governance',
    number: '04',
    name: 'Compliance & Governance',
    description:
      'Build practical governance and control foundations that help technology environments remain secure, accountable, and aligned with organizational requirements.',
    ctaText: 'Explore Compliance & Governance →',
    href: '/consulting/compliance-governance',
    image: '/images/consulting/compliance-governance.jpg',
    alt: 'Enterprise security, compliance governance, controlled infrastructure environment, and technical operations',
    overviewHeadline: 'Overview & Deliverables',
    overviewCopy:
      'ZOFT helps organizations bring greater structure to technology governance by aligning security, data, infrastructure, operational controls, and organizational requirements.',
    whyMatters: {
      eyebrow: 'WHY COMPLIANCE & GOVERNANCE',
      headline: 'Turn Technology Controls Into Practical Governance.',
      copy: 'Technology environments become harder to manage as systems, data sources, cloud platforms, and teams grow. Clear governance helps organizations establish accountability around how technology is designed, accessed, operated, monitored, and changed.',
      calloutTitle: 'Governance Should Enable Better Decisions',
      calloutCopy:
        'Effective governance is not simply about adding controls. It is about creating practical structures that help teams make consistent, informed, and accountable technology decisions.',
    },
    whatWeAddressHeadline: 'Governance Across the Technology Environment.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Security & Access Controls',
        description:
          'Review practical approaches to access, permissions, privileged operations, and separation of responsibilities.',
      },
      {
        number: '02',
        title: 'Data Governance',
        description:
          'Establish clearer ownership, classification, access expectations, data handling practices, and accountability.',
      },
      {
        number: '03',
        title: 'Infrastructure Governance',
        description:
          'Bring greater structure to cloud, database, infrastructure, configuration, and operational changes.',
      },
      {
        number: '04',
        title: 'Compliance Readiness',
        description:
          'Help organizations identify technology and process considerations relevant to their applicable regulatory or internal requirements.',
      },
    ],
    visualBreak: 'Good Governance Makes Technology Easier to Trust.',
    visualBreakCopy:
      'Clear ownership, consistent controls, and practical operational discipline create a stronger foundation for technology teams and the systems they manage.',
    approach: {
      eyebrow: 'OUR APPROACH',
      headline: 'From Technology Controls to Practical Governance.',
      stages: [
        {
          number: '01',
          title: 'Assess',
          description:
            'Understand existing systems, access patterns, operational processes, policies, and governance requirements.',
        },
        {
          number: '02',
          title: 'Identify',
          description:
            'Identify gaps, inconsistencies, risks, and areas where stronger controls or clearer ownership may be needed.',
        },
        {
          number: '03',
          title: 'Define',
          description:
            'Develop practical governance recommendations, control structures, and operational guidance.',
        },
        {
          number: '04',
          title: 'Operationalize',
          description:
            'Help teams incorporate governance practices into day-to-day technology decisions and operations.',
        },
      ],
    },
    deliverablesHeadline: 'Practical Governance Guidance.',
    deliverablesIntro:
      "Potential deliverables can be tailored to the organization's technology environment, governance requirements, operational model, and applicable obligations.",
    deliverables: [
      'Technology governance assessment',
      'Access and control review',
      'Data governance recommendations',
      'Infrastructure and database governance guidance',
      'Compliance-readiness and remediation recommendations',
    ],
    cta: {
      eyebrow: 'TALK TO AN EXPERT',
      headline: 'Ready to Strengthen Your Technology Governance?',
      copy: 'Bring us your governance challenges, infrastructure questions, security concerns, or compliance-readiness requirements. We’ll help you identify practical areas for improvement.',
    },
  },
  {
    id: 'performance-audits',
    number: '05',
    name: 'Performance Audits',
    description:
      'Identify the database, infrastructure, and architecture factors affecting performance, reliability, and operational efficiency.',
    ctaText: 'Explore Performance Audits →',
    href: '/consulting/performance-audits',
    image: '/images/consulting/performance-audits.jpg',
    alt: 'High-density server infrastructure and database performance diagnostic environment',
    overviewHeadline: 'Overview & Deliverables',
    overviewCopy:
      'ZOFT evaluates database, infrastructure, and workload behavior to identify performance constraints and provide practical recommendations for improving the technology environment.',
    whyMatters: {
      eyebrow: 'WHY PERFORMANCE AUDITS',
      headline: 'Find the Bottlenecks Behind the Symptoms.',
      copy: 'Performance problems are often symptoms of deeper interactions between queries, database configuration, infrastructure resources, workload behavior, and application patterns. A structured audit helps separate symptoms from underlying technical constraints.',
      calloutTitle: 'Measure Before You Optimize',
      calloutCopy:
        'Effective performance work starts with evidence. Understanding workload behavior, resource utilization, query patterns, and system constraints provides a stronger foundation for technical decisions.',
    },
    whatWeAddressHeadline: 'Performance Across the Technology Stack.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Database & Query Performance',
        description:
          'Review query behavior, execution patterns, indexing considerations, locking, waits, and database configuration.',
      },
      {
        number: '02',
        title: 'Workload Analysis',
        description:
          'Examine workload characteristics, concurrency, peak behavior, and resource consumption.',
      },
      {
        number: '03',
        title: 'Infrastructure Performance',
        description:
          'Evaluate compute, memory, storage, network, and infrastructure factors that may influence system performance.',
      },
      {
        number: '04',
        title: 'Bottleneck & Root-Cause Analysis',
        description:
          'Correlate technical signals to identify likely performance constraints and prioritize areas for investigation.',
      },
    ],
    visualBreak: 'Performance Is a System Property.',
    visualBreakCopy:
      'Database performance rarely exists in isolation. Queries, data models, infrastructure resources, application behavior, and workload patterns can all influence how a system performs under real conditions.',
    approach: {
      eyebrow: 'OUR APPROACH',
      headline: 'From Performance Symptoms to Technical Clarity.',
      stages: [
        {
          number: '01',
          title: 'Observe',
          description:
            'Review available workload data, system behavior, performance signals, and operational context.',
        },
        {
          number: '02',
          title: 'Diagnose',
          description:
            'Investigate database, infrastructure, query, and workload factors that may contribute to observed issues.',
        },
        {
          number: '03',
          title: 'Prioritize',
          description:
            'Separate high-impact findings from lower-priority observations and identify areas requiring deeper investigation.',
        },
        {
          number: '04',
          title: 'Recommend',
          description:
            'Translate findings into practical technical recommendations and potential next steps.',
        },
      ],
    },
    deliverablesHeadline: 'Evidence-Based Performance Guidance',
    deliverablesIntro:
      "Potential deliverables can be tailored to the organization's database environment, workload characteristics, infrastructure, and performance objectives.",
    deliverables: [
      'Database and workload performance assessment',
      'Query and execution-pattern analysis',
      'Infrastructure and resource utilization review',
      'Performance bottleneck and root-cause findings',
      'Prioritized technical recommendations',
    ],
    cta: {
      eyebrow: 'TALK TO AN EXPERT',
      headline: "Ready to Understand What's Holding Performance Back?",
      copy: 'Bring us your database performance concerns, workload challenges, infrastructure bottlenecks, or recurring system issues. We’ll help identify where deeper technical investigation may be useful.',
    },
  },
  {
    id: 'fractional-architect',
    number: '06',
    name: 'Fractional Architect',
    description:
      'Access experienced architecture leadership when you need senior technical guidance without adding a full-time architecture role.',
    ctaText: 'Explore Fractional Architect →',
    href: '/consulting/fractional-architect',
    image: '/images/consulting/fractional-architect.jpg',
    alt: 'Experienced enterprise technical leadership and system architecture guidance',
    overviewHeadline: 'Overview & Deliverables',
    overviewCopy:
      'ZOFT provides experienced architectural guidance to help teams evaluate options, resolve complex technical questions, and establish practical direction as technology environments evolve.',
    whyMatters: {
      eyebrow: 'WHY FRACTIONAL ARCHITECT',
      headline: 'Bring Senior Architecture Thinking to the Decisions That Matter.',
      copy: 'Organizations do not always need a full-time architecture function to make high-impact technology decisions. ZOFT provides experienced architectural guidance to help teams evaluate options, resolve complex technical questions, and establish practical direction as technology environments evolve.',
      calloutTitle: 'Architecture Leadership Without Unnecessary Complexity',
      calloutCopy:
        'Effective architecture leadership is about creating clarity around difficult technical decisions. The goal is not to add layers of process, but to help teams make informed choices that fit their workloads, constraints, and long-term direction.',
    },
    whatWeAddressHeadline: 'Architecture Guidance Where It Matters Most.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Architecture Leadership',
        description:
          'Provide senior technical perspective across architecture decisions, technology direction, and complex engineering questions.',
      },
      {
        number: '02',
        title: 'Technology Decision Support',
        description:
          'Evaluate architectural options, platforms, technologies, and trade-offs to help teams make clearer technical decisions.',
      },
      {
        number: '03',
        title: 'Technical Roadmapping',
        description:
          'Translate current technology challenges into practical architecture priorities and a structured path forward.',
      },
      {
        number: '04',
        title: 'Engineering Alignment',
        description:
          'Help engineering, infrastructure, data, and business stakeholders align around shared technical direction.',
      },
    ],
    visualBreak: 'Good Architecture Creates Technical Confidence.',
    visualBreakCopy:
      'Architecture decisions affect technology investments for years. Experienced guidance can help organizations understand trade-offs, reduce unnecessary complexity, and move forward with greater clarity.',
    approach: {
      eyebrow: 'OUR APPROACH',
      headline: 'From Complex Technology Questions to Clear Direction.',
      stages: [
        {
          number: '01',
          title: 'Assess',
          description:
            'Understand the current architecture, business context, constraints, and technical challenges.',
        },
        {
          number: '02',
          title: 'Advise',
          description:
            'Evaluate options, trade-offs, risks, and opportunities across the technology environment.',
        },
        {
          number: '03',
          title: 'Align',
          description:
            'Bring technical stakeholders together around practical architecture decisions and priorities.',
        },
        {
          number: '04',
          title: 'Guide',
          description:
            'Provide ongoing architectural guidance as priorities evolve and implementation progresses.',
        },
      ],
    },
    deliverablesHeadline: 'Practical Architecture Leadership.',
    deliverablesIntro:
      'Strong architecture is not about producing more documentation. It is about creating enough technical clarity for teams to make better decisions and execute with confidence.',
    deliverables: [
      'Architecture leadership and technical advisory',
      'Technology and platform decision guidance',
      'Architecture reviews and technical assessments',
      'Technology roadmap and modernization recommendations',
      'Ongoing architecture guidance for evolving technical environments',
    ],
    cta: {
      eyebrow: 'TALK TO AN EXPERT',
      headline: 'Need Experienced Architecture Guidance?',
      copy: 'Bring us your architecture questions, technology decisions, modernization challenges, or evolving technical requirements. We can help provide the senior perspective needed to move forward with clarity.',
    },
  },
];

// Backwards compatibility alias for overview list
export const CONSULTING_CAPABILITIES = CONSULTING_CAPABILITIES_DATA.map((c) => ({
  id: c.id,
  number: c.number,
  name: c.name,
  description: c.description,
  ctaText: c.ctaText,
  href: c.href,
  image: c.image,
  alt: c.alt,
  deliverables: c.deliverables,
}));

export interface ConsultingPrinciple {
  number: string;
  title: string;
  description: string;
}

export const CONSULTING_PRINCIPLES: ConsultingPrinciple[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Understand the existing technology environment, business requirements, and constraints.',
  },
  {
    number: '02',
    title: 'Diagnose',
    description:
      'Identify architectural, performance, cost, governance, and operational challenges.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Develop practical technical recommendations aligned with business priorities.',
  },
  {
    number: '04',
    title: 'Guide',
    description:
      'Help teams move from recommendation to implementation with experienced technical guidance.',
  },
];
