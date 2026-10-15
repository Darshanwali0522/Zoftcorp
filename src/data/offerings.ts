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

export interface ArchitecturalLayer {
  title: string;
  description: string;
}

export interface UseCaseCategory {
  title: string;
  description: string;
}

export interface OfferingDetailItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  image: string;
  alt: string;
  industriesHref?: string;
  overviewHeadline?: string;
  overviewCopy?: string;
  calloutTitle?: string;
  calloutCopy?: string;
  whatWeAddressHeadline?: string;
  whatWeAddress: FocusArea[];
  lifecycleHeadline?: string;
  lifecycleStages?: { number: string; title: string; description: string }[];
  techArchitectureHeadline?: string;
  techArchitectureCopy?: string;
  techArchitectureLayers?: ArchitecturalLayer[];
  visualBreak?: string;
  visualBreakCopy?: string;
  approachHeadline?: string;
  approachStages: ApproachStage[];
  deliverablesHeadline?: string;
  deliverablesIntro?: string;
  deliverables: string[];
  engineeringAreasHeadline?: string;
  engineeringAreas?: { title: string; description: string }[];
  analyticsHeadline?: string;
  analyticsCopy?: string;
  analyticsItems?: { title: string; description: string }[];
  industriesHeadline?: string;
  industriesCopy?: string;
  consultingEyebrow?: string;
  consultingHeadline?: string;
  consultingCopy?: string;
  consultingDescription?: string;
  activeOfferingDescription?: string;
  connectedCapabilitiesEyebrow?: string;
  connectedCapabilitiesHeadline?: string;
  connectedCapabilities?: { title: string; description: string; href: string }[];
  useCasesHeadline?: string;
  useCases?: UseCaseCategory[];
  validationHeadline?: string;
  validationCopy?: string;
  validationPillars?: { title: string; description: string }[];
  ctaHeadline?: string;
  ctaCopy?: string;
}

export const OFFERINGS_DATA: OfferingDetailItem[] = [
  {
    id: 'vector-db-integration',
    number: '01',
    category: 'MODERN DATA',
    title: 'Vector DB Integration',
    description:
      'Integrate vector database capabilities into existing data architectures to support modern retrieval, search, and AI-oriented workloads.',
    ctaText: 'Explore Vector DB Integration',
    href: '/offerings/vector-db-integration',
    image: '/images/offerings/vector-db-integration.jpg',
    alt: 'Modern data infrastructure, database architecture, and vector retrieval system',
    overviewHeadline:
      'Connect Modern Retrieval Capabilities to the Data Architecture You Already Have.',
    overviewCopy:
      'Vector search introduces new possibilities for working with unstructured and semantically rich data, but successful implementation depends on how those capabilities fit into the broader data architecture. ZOFT helps organizations evaluate integration patterns, data flows, storage requirements, retrieval behavior, and operational considerations.',
    calloutTitle: 'Integration Before Complexity',
    calloutCopy:
      'Adding a vector capability should solve a real architectural need. Understanding the workload, data characteristics, retrieval requirements, and operational environment helps determine where vector storage and search capabilities fit most effectively.',
    whatWeAddressHeadline: 'Build the Right Retrieval Architecture.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Vector Data Architecture',
        description:
          'Evaluate how embeddings, vector storage, metadata, and application data should fit together within the broader architecture.',
      },
      {
        number: '02',
        title: 'Retrieval & Search Patterns',
        description:
          'Design practical approaches for similarity search, semantic retrieval, filtering, and retrieval workflows based on workload requirements.',
      },
      {
        number: '03',
        title: 'Data Integration',
        description:
          'Connect vector capabilities with existing relational, document, application, and data-processing environments where appropriate.',
      },
      {
        number: '04',
        title: 'Operational Readiness',
        description:
          'Consider scalability, monitoring, data lifecycle, performance behavior, and operational requirements for production environments.',
      },
    ],
    techArchitectureHeadline: 'Vector Capabilities Should Fit the Whole Data System.',
    techArchitectureCopy:
      'Vector search is one component of a larger technical environment. Effective integration requires understanding how data is created, transformed, stored, indexed, retrieved, and consumed.',
    techArchitectureLayers: [
      {
        title: 'DATA SOURCES',
        description:
          'Application data, documents, content, events, and other information that may contribute to retrieval workflows.',
      },
      {
        title: 'EMBEDDING & TRANSFORMATION',
        description: 'Processes that prepare data for semantic representation and retrieval.',
      },
      {
        title: 'VECTOR STORAGE & RETRIEVAL',
        description:
          'Vector indexing, similarity search, metadata filtering, and retrieval mechanisms.',
      },
      {
        title: 'APPLICATION & WORKLOAD',
        description:
          'Applications and services that consume retrieved information as part of real workloads.',
      },
    ],
    visualBreak: 'Better Retrieval Starts With Better Architecture.',
    visualBreakCopy:
      'Vector search is not simply a database feature. The quality of the overall retrieval experience depends on data preparation, storage design, indexing, filtering, application behavior, and operational decisions.',
    approachHeadline: 'From Retrieval Requirements to Production-Ready Integration.',
    approachStages: [
      {
        number: '01',
        title: 'Assess',
        description:
          'Understand the data, retrieval requirements, existing architecture, and workload constraints.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'Define practical integration patterns for data preparation, vector storage, retrieval, and application workflows.',
      },
      {
        number: '03',
        title: 'Integrate',
        description:
          'Connect vector capabilities with the surrounding data and application environment.',
      },
      {
        number: '04',
        title: 'Validate',
        description:
          'Evaluate behavior, operational requirements, and architecture considerations before broader adoption.',
      },
    ],
    deliverablesHeadline: 'Practical Guidance for Vector Integration.',
    deliverablesIntro:
      "Potential technical delivery outputs tailored to your organization's specific vector integration requirements may include:",
    deliverables: [
      'Vector architecture and integration assessment',
      'Data and embedding workflow recommendations',
      'Retrieval and search architecture guidance',
      'Vector and existing database integration considerations',
      'Operational and production-readiness recommendations',
    ],
    useCasesHeadline: 'Start With the Workload, Not the Technology.',
    useCases: [
      {
        title: 'SEMANTIC SEARCH',
        description:
          'Finding information based on meaning rather than exact keyword matching.',
      },
      {
        title: 'KNOWLEDGE RETRIEVAL',
        description:
          'Supporting retrieval workflows across documents, content, and organizational knowledge.',
      },
      {
        title: 'RECOMMENDATION WORKLOADS',
        description:
          'Using similarity relationships to support relevant discovery and recommendation experiences.',
      },
      {
        title: 'AI-ASSISTED APPLICATIONS',
        description:
          'Providing retrieval capabilities that can support applications using modern AI and language-model workflows.',
      },
    ],
    ctaHeadline: 'Exploring Vector Search for Your Data Environment?',
    ctaCopy:
      'Bring us your retrieval requirements, data architecture questions, or AI-oriented workload challenges. We can help evaluate the technical path and integration considerations.',
  },
  {
    id: 'database-migrations-and-transformations',
    number: '02',
    category: 'TRANSFORMATION',
    title: 'Database Migrations and Transformations',
    description:
      'Plan and execute database migrations and transformations with attention to architecture, compatibility, performance, and operational continuity.',
    ctaText: 'Explore Database Migrations and Transformations',
    href: '/offerings/database-migrations-and-transformations',
    image: '/images/offerings/database-migrations-and-transformations.jpg',
    alt: 'Enterprise database infrastructure and data transformation architecture',
    overviewHeadline: 'Move Beyond Legacy Constraints Without Losing Sight of the Workload.',
    overviewCopy:
      'Database modernization often involves more than moving data from one platform to another. Architecture, schemas, application dependencies, performance characteristics, operational processes, and business requirements all influence how a migration should be planned and executed.',
    calloutTitle: 'Migration Is a System Change',
    calloutCopy:
      'A successful database transformation considers the environment around the database as carefully as the database itself. Understanding dependencies, compatibility, data behavior, and operational requirements helps create a more practical path to the target environment.',
    whatWeAddressHeadline: 'Plan the Migration Around the Whole Technology Environment.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Migration Assessment',
        description:
          'Understand the source environment, database dependencies, workload characteristics, compatibility considerations, and migration constraints.',
      },
      {
        number: '02',
        title: 'Schema & Data Transformation',
        description:
          'Plan schema changes, data transformations, compatibility adjustments, and other technical changes required for the target environment.',
      },
      {
        number: '03',
        title: 'Application & Workload Readiness',
        description:
          'Identify application dependencies, connectivity requirements, workload considerations, and technical changes that may affect migration.',
      },
      {
        number: '04',
        title: 'Cutover & Stabilization',
        description:
          'Prepare validation, cutover, rollback considerations, and post-migration stabilization activities for the target environment.',
      },
    ],
    techArchitectureHeadline: 'From Source Assessment to a Stable Target Environment.',
    techArchitectureCopy:
      'A structured lifecycle helps manage technical complexity, dependencies, and operational risks across the migration journey.',
    techArchitectureLayers: [
      {
        title: 'ASSESS',
        description:
          'Understand the source database, dependencies, workload behavior, and migration constraints.',
      },
      {
        title: 'PREPARE',
        description:
          'Define the target architecture, transformation requirements, validation strategy, and migration approach.',
      },
      {
        title: 'MIGRATE',
        description:
          'Execute data movement, transformation, synchronization, and cutover activities according to the agreed migration strategy.',
      },
      {
        title: 'VALIDATE',
        description:
          'Verify data integrity, application behavior, performance considerations, and operational readiness in the target environment.',
      },
    ],
    visualBreak: 'Modernization Should Reduce Complexity, Not Move It Somewhere Else.',
    visualBreakCopy:
      'A migration creates value when the target environment addresses the limitations of the source environment. Architecture, workload behavior, operational processes, and application dependencies all need to be considered as part of the transformation.',
    approachHeadline: 'From Migration Planning to Technical Transition.',
    approachStages: [
      {
        number: '01',
        title: 'Discover',
        description:
          'Understand the existing database environment, workloads, dependencies, and business requirements.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'Define the target architecture, migration strategy, transformation requirements, and validation approach.',
      },
      {
        number: '03',
        title: 'Execute',
        description:
          'Carry out migration and transformation activities while managing technical dependencies and transition requirements.',
      },
      {
        number: '04',
        title: 'Stabilize',
        description:
          'Validate the target environment and address technical issues that emerge during the transition to steady-state operations.',
      },
    ],
    deliverablesHeadline: 'Practical Migration and Transformation Guidance.',
    deliverablesIntro:
      "Potential technical deliverables tailored to your organization's specific migration and transformation requirements may include:",
    deliverables: [
      'Source database and migration assessment',
      'Target architecture and migration strategy recommendations',
      'Schema, data transformation, and compatibility guidance',
      'Migration validation and cutover planning',
      'Post-migration stabilization and technical recommendations',
    ],
    useCasesHeadline: 'Different Environments Require Different Migration Strategies.',
    useCases: [
      {
        title: 'CLOUD MODERNIZATION',
        description:
          'Move database environments toward cloud infrastructure while considering workload, architecture, operational, and performance requirements.',
      },
      {
        title: 'DATABASE PLATFORM TRANSFORMATION',
        description:
          'Transition from one database technology or deployment model to another where business and technical requirements justify the change.',
      },
      {
        title: 'LEGACY MODERNIZATION',
        description:
          'Address aging database environments, technical constraints, and operational challenges through a structured transformation approach.',
      },
      {
        title: 'OPEN SOURCE ADOPTION',
        description:
          'Evaluate and plan transitions toward open-source database technologies where compatibility, workload, skills, and operational requirements support the move.',
      },
    ],
    validationHeadline: 'A Migration Is Not Finished When the Data Arrives.',
    validationCopy:
      'Validation should consider more than whether records have moved successfully. Data integrity, application behavior, workload performance, connectivity, operational processes, and target-environment readiness all contribute to a successful transition.',
    validationPillars: [
      {
        title: 'DATA INTEGRITY',
        description: 'Confirm that migrated and transformed data behaves as expected.',
      },
      {
        title: 'APPLICATION READINESS',
        description: 'Verify application connectivity, dependencies, and expected workload behavior.',
      },
      {
        title: 'OPERATIONAL READINESS',
        description:
          'Ensure monitoring, maintenance, access, backup, and operational practices are ready for the target environment.',
      },
    ],
    ctaHeadline: 'Planning a Database Migration or Transformation?',
    ctaCopy:
      'Bring us your source environment, target architecture, migration concerns, or modernization requirements. We can help evaluate the technical path and the considerations involved in moving forward.',
  },
  {
    id: 'performance-tuning-delivery',
    number: '03',
    category: 'PERFORMANCE',
    title: 'Performance Tuning Delivery',
    description:
      'Improve database and workload performance through structured analysis, optimization, implementation, and technical delivery.',
    ctaText: 'Explore Performance Tuning Delivery',
    href: '/offerings/performance-tuning-delivery',
    image: '/images/offerings/performance-tuning-delivery.jpg',
    alt: 'High-performance enterprise infrastructure and database performance tuning environment',
    overviewHeadline: 'Turn Performance Findings Into Practical Technical Improvements.',
    overviewCopy:
      'Performance tuning is most valuable when analysis leads to action. ZOFT works across database configuration, queries, indexing, workload behavior, and infrastructure considerations to implement practical improvements and validate their effect within the technology environment.',
    calloutTitle: 'Measure, Tune, Validate',
    calloutCopy:
      'Effective performance engineering requires evidence before change and validation after it. Understanding workload behavior helps identify where technical improvements can make the greatest difference without introducing unnecessary complexity.',
    whatWeAddressHeadline: 'Optimize the Technology Behind the Workload.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Query & Execution Optimization',
        description:
          'Identify inefficient query and execution patterns and apply practical optimization techniques based on workload behavior.',
      },
      {
        number: '02',
        title: 'Database Configuration',
        description:
          'Review and tune database configuration, memory, storage, concurrency, and other relevant operational settings.',
      },
      {
        number: '03',
        title: 'Indexing & Data Access',
        description:
          'Evaluate indexing strategies and data-access patterns to improve how workloads interact with database structures.',
      },
      {
        number: '04',
        title: 'Workload & Resource Optimization',
        description:
          'Address workload behavior and infrastructure resource utilization where they contribute to performance constraints.',
      },
    ],
    techArchitectureHeadline: 'From Performance Evidence to Implemented Improvements.',
    techArchitectureCopy:
      'A systematic tuning lifecycle ensures changes are evidence-based, targeted, and validated under real operational conditions.',
    techArchitectureLayers: [
      {
        title: 'MEASURE',
        description:
          'Establish a clear understanding of workload behavior, performance characteristics, and relevant system constraints.',
      },
      {
        title: 'IDENTIFY',
        description:
          'Determine the queries, configurations, access patterns, or resource factors contributing to performance issues.',
      },
      {
        title: 'TUNE',
        description:
          'Implement targeted technical changes across queries, indexes, database configuration, workloads, or infrastructure where appropriate.',
      },
      {
        title: 'VALIDATE',
        description:
          'Compare behavior after changes and confirm that the tuning approach is aligned with the intended workload and operational requirements.',
      },
    ],
    visualBreak: 'Performance Improvements Should Be Evidence-Driven.',
    visualBreakCopy:
      'Effective tuning is not about changing everything at once. It is about understanding the workload, identifying meaningful constraints, applying targeted changes, and validating how the system behaves afterward.',
    approachHeadline: 'From Bottlenecks to Measurable Technical Change.',
    approachStages: [
      {
        number: '01',
        title: 'Observe',
        description:
          'Review workload behavior, performance evidence, database activity, and relevant infrastructure signals.',
      },
      {
        number: '02',
        title: 'Prioritize',
        description:
          'Identify the technical constraints with the greatest relevance to the workload and operational requirements.',
      },
      {
        number: '03',
        title: 'Optimize',
        description:
          'Apply targeted tuning changes across queries, indexes, configuration, data access, or resources.',
      },
      {
        number: '04',
        title: 'Validate',
        description:
          'Evaluate the environment after tuning and identify additional opportunities or operational considerations.',
      },
    ],
    deliverablesHeadline: 'Performance Improvements You Can Act On.',
    deliverablesIntro:
      "Potential technical deliverables tailored to your organization's specific performance tuning requirements may include:",
    deliverables: [
      'Database and workload tuning assessment',
      'Query and execution-pattern optimization recommendations',
      'Indexing and data-access optimization guidance',
      'Database configuration and resource tuning recommendations',
      'Implemented tuning changes and validation guidance',
    ],
    useCasesHeadline: 'Performance Exists Across Multiple Layers.',
    useCases: [
      {
        title: 'DATABASE',
        description:
          'Configuration, indexing, execution behavior, storage, memory, concurrency, and database-level considerations.',
      },
      {
        title: 'QUERIES',
        description:
          'Query structure, execution plans, inefficient access patterns, and workload-specific optimization opportunities.',
      },
      {
        title: 'WORKLOAD',
        description:
          'Concurrency, workload behavior, application interaction, and recurring performance patterns.',
      },
      {
        title: 'INFRASTRUCTURE',
        description:
          'Compute, storage, resource utilization, and infrastructure constraints that may influence database performance.',
      },
    ],
    ctaHeadline: 'Ready to Turn Performance Problems Into Technical Improvements?',
    ctaCopy:
      'Bring us your slow queries, recurring database issues, workload bottlenecks, or performance concerns. We can help identify the technical path toward practical tuning and optimization.',
  },
  {
    id: 'managed-dba-services',
    number: '04',
    category: 'OPERATIONS',
    title: 'Managed DBA Services',
    description:
      'Support database environments with ongoing administration, monitoring, maintenance, operational guidance, and reliability practices.',
    ctaText: 'Explore Managed DBA Services',
    href: '/offerings/managed-dba-services',
    image: '/images/offerings/managed-dba-services.jpg',
    alt: 'Enterprise database operations, monitoring, and operational administration environment',
    overviewHeadline: 'Keep Database Operations Reliable, Visible, and Well Managed.',
    overviewCopy:
      'Database environments require ongoing attention long after implementation. ZOFT provides managed database support focused on administration, monitoring, maintenance, operational health, and technical guidance so organizations can maintain greater visibility and discipline across their database environments.',
    calloutTitle: 'Operational Discipline Matters',
    calloutCopy:
      'Reliable database operations come from consistent monitoring, maintenance, documentation, access management, backup practices, and timely technical attention. Managed services provide an ongoing operational layer around the database environment.',
    whatWeAddressHeadline: 'Practical Database Operations for Ongoing Environments.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Database Administration',
        description:
          'Support routine database administration, configuration, maintenance, access, and operational activities across managed environments.',
      },
      {
        number: '02',
        title: 'Monitoring & Health',
        description:
          'Monitor database health, workload behavior, resource conditions, and operational signals that may require attention.',
      },
      {
        number: '03',
        title: 'Backup & Recovery Practices',
        description:
          'Support backup, recovery, retention, and operational readiness practices appropriate to the database environment.',
      },
      {
        number: '04',
        title: 'Maintenance & Reliability',
        description:
          'Maintain database environments through routine technical activities, issue investigation, operational guidance, and reliability-focused practices.',
      },
    ],
    techArchitectureHeadline: 'An Ongoing Technical Layer Around the Database.',
    techArchitectureCopy:
      'An effective operational model combines continuous visibility, proactive maintenance, responsive investigation, and ongoing technical improvement.',
    techArchitectureLayers: [
      {
        title: 'OBSERVE',
        description:
          'Maintain visibility into database health, workload behavior, resources, and operational conditions.',
      },
      {
        title: 'MAINTAIN',
        description:
          'Perform routine administration, maintenance, configuration, and operational activities.',
      },
      {
        title: 'RESPOND',
        description:
          'Investigate operational issues and provide technical guidance when database conditions require attention.',
      },
      {
        title: 'IMPROVE',
        description:
          'Identify recurring operational patterns and opportunities to strengthen reliability, performance, or maintainability.',
      },
    ],
    visualBreak: 'Reliable Databases Depend on Consistent Operations.',
    visualBreakCopy:
      'Database reliability is not created by a single configuration change. It develops through monitoring, maintenance, disciplined operational practices, timely investigation, and continuous attention to the environment.',
    approachHeadline: 'From Daily Operations to Long-Term Database Health.',
    approachStages: [
      {
        number: '01',
        title: 'Monitor',
        description:
          'Maintain visibility into database health, workload behavior, resource utilization, and operational conditions.',
      },
      {
        number: '02',
        title: 'Maintain',
        description:
          'Carry out routine administration, configuration, maintenance, and operational tasks.',
      },
      {
        number: '03',
        title: 'Investigate',
        description:
          'Analyze issues, unusual behavior, recurring conditions, and technical concerns that affect the environment.',
      },
      {
        number: '04',
        title: 'Improve',
        description:
          'Recommend and implement appropriate operational improvements as the environment and workload evolve.',
      },
    ],
    deliverablesHeadline: 'Operational Support That Keeps the Environment Moving.',
    deliverablesIntro:
      "Potential operational delivery areas tailored to your organization's database environment may include:",
    deliverables: [
      'Database administration and operational support',
      'Database health and workload monitoring',
      'Backup, recovery, and maintenance guidance',
      'Database configuration and operational management',
      'Ongoing technical recommendations and issue investigation',
    ],
    validationHeadline: 'Reliability Is Built Into the Operating Model.',
    validationCopy:
      'Continuous operational quality requires aligning visibility, structured maintenance, environment resilience, and ongoing technical direction.',
    validationPillars: [
      {
        title: 'VISIBILITY',
        description:
          'Understand what is happening across the database environment through meaningful operational signals.',
      },
      {
        title: 'MAINTENANCE',
        description:
          'Keep databases maintained through structured operational activities and configuration management.',
      },
      {
        title: 'RESILIENCE',
        description:
          'Support backup, recovery, and operational readiness practices appropriate to the environment.',
      },
      {
        title: 'CONTINUITY',
        description:
          'Maintain consistent operational attention as workloads, requirements, and technology environments evolve.',
      },
    ],
    ctaHeadline: 'Looking for Ongoing Database Expertise?',
    ctaCopy:
      'Bring us your database operations challenges, maintenance requirements, recurring issues, or need for additional DBA expertise. We can help define an operational model that fits your environment.',
  },
  {
    id: 'data-engineering-and-analytics',
    number: '05',
    category: 'DATA',
    title: 'Data Engineering and Analytics',
    description:
      'Build practical data engineering and analytics capabilities across modern data environments, pipelines, platforms, and workloads.',
    ctaText: 'Explore Data Engineering and Analytics',
    href: '/offerings/data-engineering-and-analytics',
    image: '/images/offerings/data-engineering-and-analytics.jpg',
    alt: 'Modern data infrastructure, data pipelines, analytics architecture, and enterprise data environment',
    industriesHref: '/offerings/data-engineering-and-analytics/industries',
    overviewHeadline: 'Build the Data Foundation Behind Better Decisions.',
    overviewCopy:
      'Analytics depends on the quality, structure, availability, and reliability of the data underneath it. ZOFT helps organizations design and improve data engineering capabilities that move information from source systems through reliable pipelines and into environments where it can be analyzed and used effectively.',
    calloutTitle: 'Analytics Starts With the Data Foundation',
    calloutCopy:
      'Useful analytics requires more than a reporting layer. Data needs to be collected, transformed, validated, modeled, and delivered in ways that support the workloads and decisions it is intended to serve.',
    whatWeAddressHeadline: 'Engineering the Path From Data to Insight.',
    whatWeAddress: [
      {
        number: '01',
        title: 'Data Pipelines',
        description:
          'Design and improve reliable pipelines for moving data between source systems, processing environments, storage platforms, and downstream consumers.',
      },
      {
        number: '02',
        title: 'Data Transformation',
        description:
          'Structure and transform data into usable forms while considering quality, consistency, lineage, and workload requirements.',
      },
      {
        number: '03',
        title: 'Data Platforms',
        description:
          'Evaluate and develop practical data platform architectures that support storage, processing, analytics, and evolving data workloads.',
      },
      {
        number: '04',
        title: 'Analytics Engineering',
        description:
          'Create structured data models and analytical workflows that make data easier to understand, use, and maintain.',
      },
    ],
    lifecycleHeadline: 'From Source Systems to Trusted Data.',
    lifecycleStages: [
      {
        number: '01',
        title: 'INGEST',
        description:
          'Connect relevant source systems and establish reliable paths for bringing data into the processing environment.',
      },
      {
        number: '02',
        title: 'TRANSFORM',
        description:
          'Clean, structure, enrich, and transform data according to workload and analytical requirements.',
      },
      {
        number: '03',
        title: 'MODEL',
        description:
          'Organize data into practical structures that support analytical workloads, reporting, and downstream use.',
      },
      {
        number: '04',
        title: 'SERVE',
        description:
          'Deliver usable data to the environments, applications, and analytical workflows that depend on it.',
      },
    ],
    visualBreak: 'Good Analytics Depends on Good Engineering.',
    visualBreakCopy:
      'Reports and analytical experiences are only as reliable as the data systems behind them. Strong data engineering creates the pipelines, structures, quality practices, and operational foundations that make analytics more dependable.',
    approachHeadline: 'From Data Challenges to Practical Engineering Solutions.',
    approachStages: [
      {
        number: '01',
        title: 'Understand',
        description:
          'Understand source systems, data characteristics, business requirements, analytical workloads, and existing technical constraints.',
      },
      {
        number: '02',
        title: 'Design',
        description:
          'Define practical data architectures, pipelines, transformations, models, and operational patterns.',
      },
      {
        number: '03',
        title: 'Build',
        description:
          'Implement the required engineering components and connect them to the surrounding technology environment.',
      },
      {
        number: '04',
        title: 'Improve',
        description:
          'Evaluate data quality, workload behavior, maintainability, and operational needs as the environment evolves.',
      },
    ],
    deliverablesHeadline: 'Practical Data Engineering Capabilities.',
    deliverablesIntro:
      'Potential deliverables tailored to your data environment and analytics goals include:',
    deliverables: [
      'Data architecture and engineering assessment',
      'Data pipeline and ingestion design',
      'Data transformation and modeling guidance',
      'Analytics-ready data architecture',
      'Data quality, observability, and operational recommendations',
    ],
    engineeringAreasHeadline: 'Data Systems Require More Than a Reporting Layer.',
    engineeringAreas: [
      {
        title: 'INGESTION',
        description:
          'Reliable movement of information from source systems into processing and storage environments.',
      },
      {
        title: 'TRANSFORMATION',
        description:
          'Data preparation, cleansing, enrichment, restructuring, and workload-specific transformation.',
      },
      {
        title: 'MODELING',
        description:
          'Practical data structures and models designed around analytical and downstream use cases.',
      },
      {
        title: 'OBSERVABILITY',
        description:
          'Visibility into data pipelines, quality conditions, processing behavior, and operational health.',
      },
    ],
    analyticsHeadline: 'Make Data Easier to Understand and Use.',
    analyticsCopy:
      'Analytics becomes more useful when the underlying data is structured, consistent, accessible, and aligned with the questions the organization needs to answer.',
    analyticsItems: [
      {
        title: 'REPORTING FOUNDATIONS',
        description:
          'Build structured data foundations that support reliable reporting and recurring analytical needs.',
      },
      {
        title: 'ANALYTICAL MODELS',
        description:
          'Organize data into models that make complex information easier to work with.',
      },
      {
        title: 'DATA EXPLORATION',
        description:
          'Support analytical exploration by making relevant data easier to access and understand.',
      },
      {
        title: 'DECISION SUPPORT',
        description:
          'Create technical foundations that help teams use data as part of operational and business decision-making.',
      },
    ],
    industriesHeadline: 'Data Engineering Shaped Around Industry Context.',
    industriesCopy:
      'Data environments are influenced by the workloads, regulatory considerations, operational requirements, and information patterns of each industry. Explore how data engineering and analytics capabilities can be considered within different industry contexts.',
    consultingEyebrow: 'FROM STRATEGY TO DATA ENGINEERING',
    consultingHeadline: 'Need to Define the Right Data Architecture First?',
    consultingCopy:
      'ZOFT Consulting can help evaluate architecture, technology direction, governance, and workload requirements. Data Engineering and Analytics provides the engineering capabilities needed to build practical data pipelines, platforms, and analytical foundations.',
    consultingDescription:
      'Architecture, strategy, governance, assessment, and technical direction.',
    activeOfferingDescription:
      'Data pipelines, transformation, modeling, analytics foundations, and operational data capabilities.',
    connectedCapabilitiesEyebrow: 'CONNECTED CAPABILITIES',
    connectedCapabilitiesHeadline: 'Data Engineering Works Across the Technology Environment.',
    connectedCapabilities: [
      {
        title: 'Vector DB Integration',
        description:
          'Extend data architectures toward modern retrieval and vector-oriented workloads.',
        href: '/offerings/vector-db-integration',
      },
      {
        title: 'Database Migrations and Transformations',
        description:
          'Transform and modernize the database environments that data engineering workflows depend on.',
        href: '/offerings/database-migrations-and-transformations',
      },
      {
        title: 'Managed DBA Services',
        description:
          'Support the operational database environments underlying data workloads.',
        href: '/offerings/managed-dba-services',
      },
    ],
    ctaHeadline: 'Building a More Reliable Data Foundation?',
    ctaCopy:
      'Bring us your data engineering challenges, pipeline requirements, analytics needs, or evolving data architecture questions. We can help define a practical technical path forward.',
  },
];

export interface DeliveryStage {
  number: string;
  title: string;
  description: string;
}

export interface TechnicalPillar {
  title: string;
  description: string;
}

export const HOW_WE_DELIVER_STAGES: DeliveryStage[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Understand the workload, existing environment, technical requirements, and operational context.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Translate requirements into practical architecture and implementation decisions.',
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'Apply engineering expertise to build, transform, optimize, or operate the technology environment.',
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'Improve the environment as workloads, requirements, and technology priorities change.',
  },
];

export const TECHNICAL_DEPTH_PILLARS: TechnicalPillar[] = [
  {
    title: 'DATABASES',
    description:
      'Relational databases, database architecture, migrations, performance, and operational management.',
  },
  {
    title: 'CLOUD',
    description:
      'Cloud infrastructure and database environments across modern cloud platforms.',
  },
  {
    title: 'DATA',
    description:
      'Data engineering, analytics, retrieval architectures, and modern data workloads.',
  },
  {
    title: 'RELIABILITY',
    description:
      'Performance, observability, operational practices, governance, and long-term maintainability.',
  },
];
