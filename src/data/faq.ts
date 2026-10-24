export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  number: string;
  title: string;
  tag: string;
  questions: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: "dpdp-audit-compliance",
    number: "01",
    title: "DPDP Audit & Compliance",
    tag: "REGULATORY COMPLIANCE",
    questions: [
      {
        id: "q1",
        question: "What is a DPDP Audit and why do I need it?",
        answer:
          "A DPDP (Digital Personal Data Protection) Audit ensures your organization complies with India’s data protection law. It validates how personal data is collected, stored, processed, and secured — reducing regulatory risk and building customer trust.",
      },
      {
        id: "q2",
        question: "How does Zoftcorp help with DPDP compliance?",
        answer:
          "We provide a structured audit framework, gap analysis, and remediation roadmap. Our services make you audit-ready and ensure compliance is embedded into your systems, not treated as a checkbox.",
      },
    ],
  },
  {
    id: "cloud-database-finops",
    number: "02",
    title: "Cloud & Database FinOps",
    tag: "FINANCIAL GOVERNANCE",
    questions: [
      {
        id: "q3",
        question: "What is Database FinOps?",
        answer:
          "Database FinOps blends financial discipline with database engineering. It helps organizations optimize cloud/database costs while maintaining performance and reliability.",
      },
      {
        id: "q4",
        question: "How much can I save with FinOps?",
        answer:
          "Typical savings range from 20–30% in the first quarter, depending on workload inefficiencies, idle resources, and licensing models.",
      },
    ],
  },
  {
    id: "performance-tuning",
    number: "03",
    title: "Performance Tuning",
    tag: "ENGINEERING BASES",
    questions: [
      {
        id: "q5",
        question: "Why is performance tuning critical?",
        answer:
          "Slow queries, degraded execution paths, and technical debt directly impact user experience, inflate Total Cost of Ownership, and strain engineering bandwidth. Performance tuning ensures your databases run faster, more reliably, and at lower cost.",
      },
      {
        id: "q6",
        question: "What does Zoftcorp’s performance tuning cover?",
        answer:
          "We analyze queries, indexes, execution plans, and resource utilization. Our interventions are production-validated, enterprise-ready, and optimized for measurable business outcomes.",
      },
    ],
  },
  {
    id: "migrations-transformations",
    number: "04",
    title: "Migrations & Transformations",
    tag: "PLATFORM ARCHITECTURE",
    questions: [
      {
        id: "q7",
        question: "What types of migrations do you handle?",
        answer:
          "We manage cloud migrations, database upgrades, and platform transformations (SQL Server, Oracle, PostgreSQL, MongoDB, etc.).",
      },
      {
        id: "q8",
        question: "How do you ensure zero disruption during migration?",
        answer:
          "We use phased execution, rollback strategies, and resilience planning. Every migration is architected to minimize downtime and maintain compliance throughout the process.",
      },
    ],
  },
  {
    id: "managed-services",
    number: "05",
    title: "Managed Services",
    tag: "24X7 TELEMETRY & RELIABILITY",
    questions: [
      {
        id: "q9",
        question: "What’s included in your Managed Services?",
        answer:
          "24x7 monitoring, proactive anomaly detection, compliance reporting, performance optimization, and SLA-backed reliability.",
      },
      {
        id: "q10",
        question: "Why choose Zoftcorp for Managed Services?",
        answer:
          "Because we’re not just DBAs — we’re architects. Our managed services combine deep technical expertise with financial governance and compliance assurance.",
      },
    ],
  },
];
