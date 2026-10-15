import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Optimizing Cloud Expenses – FinOps Services | ZOFT Corp',
  description:
    'Cloud adoption brings scalability and agility, but without proper governance, costs can spiral out of control. Our FinOps (Cloud Financial Operations) Services help organizations gain visibility, accountability, and efficiency in cloud spending.',
  alternates: {
    canonical: 'https://zoftcorp.com/optimizing-cloud-expenses/',
  },
  openGraph: {
    title: 'Optimizing Cloud Expenses – FinOps Services | ZOFT Corp',
    description:
      'Gain clear visibility, budget control, and resource efficiency with ZOFT Corp certified FinOps services.',
    url: 'https://zoftcorp.com/optimizing-cloud-expenses/',
    siteName: 'ZOFT Corp',
    type: 'website',
    images: [
      {
        url: '/images/finops/zoftcorp-finOps-services-scaled.png',
        width: 1200,
        height: 630,
        alt: 'Optimizing Cloud Expenses - FinOps Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optimizing Cloud Expenses – FinOps Services | ZOFT Corp',
    description:
      'Gain clear visibility, budget control, and resource efficiency with ZOFT Corp certified FinOps services.',
    images: ['/images/finops/zoftcorp-finOps-services-scaled.png'],
  },
};

const BENEFITS = [
  {
    number: '01',
    title: 'Cost Transparency',
    description: 'Gain clear visibility into cloud usage and expenses across teams.',
  },
  {
    number: '02',
    title: 'Budget Control',
    description: 'Align cloud spending with business goals and prevent overruns.',
  },
  {
    number: '03',
    title: 'Resource Optimization',
    description: 'Identify underutilized resources and eliminate waste.',
  },
  {
    number: '04',
    title: 'Scalability with Efficiency',
    description: 'Scale workloads without unnecessary cost increases.',
  },
  {
    number: '05',
    title: 'Cross-Team Collaboration',
    description: 'Bridge finance, engineering, and operations for unified decision-making.',
  },
  {
    number: '06',
    title: 'Compliance & Governance',
    description: 'Ensure adherence to organizational policies and industry standards.',
  },
];

const MIGRATION_STAGES = [
  {
    stage: '1',
    title: 'Assessment & Benchmarking',
    description: 'Review current cloud usage, billing, and cost drivers.',
    position: 'top',
  },
  {
    stage: '2',
    title: 'Visibility & Reporting',
    description: 'Implement dashboards for real-time expense tracking.',
    position: 'bottom',
  },
  {
    stage: '3',
    title: 'Optimization Strategies',
    description: 'Rightsizing, reserved instances, cost allocation, and workload scheduling.',
    position: 'top',
  },
  {
    stage: '4',
    title: 'Governance Framework',
    description: 'Define policies for cost accountability across teams.',
    position: 'bottom',
  },
  {
    stage: '5',
    title: 'Continuous Improvement',
    description: 'Ongoing monitoring and iterative adaptation to evolving workloads.',
    position: 'top',
  },
];

export default function OptimizingCloudExpensesPage() {
  const pageUrl = 'https://zoftcorp.com/optimizing-cloud-expenses/';
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'Optimizing Cloud Expenses', url: pageUrl },
  ];

  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      <ServiceJsonLd
        name="Optimizing Cloud Expenses – FinOps Services"
        description="Our FinOps Services help organizations gain visibility, accountability, and efficiency in cloud spending."
        url={pageUrl}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* SECTION A — HERO */}
      <section
        className="relative min-h-[420px] md:min-h-[480px] flex items-end bg-[#01102E] text-white overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/finops/zoftcorp-finOps-services-scaled.png')",
        }}
        aria-label="Hero Section"
      >
        {/* Subtle dark gradient overlay to ensure perfect contrast with text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01102E]/90 via-[#01102E]/60 to-transparent pointer-events-none" />

        <Container className="relative z-10 w-full pb-16 md:pb-20 pt-36">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Optimizing Cloud Expenses – <br />
              <span className="font-semibold text-white">FinOps Services</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* BREADCRUMB BAR */}
      <div className="bg-[#FAFAFA] border-b border-slate-200/80 py-3 text-xs text-slate-600 font-sans">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 list-none p-0 m-0">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 hover:text-[#00B3FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#00B3FF] rounded px-1"
                >
                  Home
                </Link>
              </li>
              <li className="text-slate-400" aria-hidden="true">
                /
              </li>
              <li className="text-slate-800 font-medium" aria-current="page">
                Optimizing Cloud Expenses
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* SECTION B — WHY CLOUD COST OPTIMIZATION MATTERS? & KEY BENEFITS */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="why-cloud-cost-heading">
        <Container>
          <div className="max-w-5xl space-y-8">
            <div className="space-y-4">
              <h2
                id="why-cloud-cost-heading"
                className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight"
              >
                Why Cloud Cost Optimization Matters?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-4xl font-normal">
                Cloud adoption brings scalability and agility, but without proper governance, costs
                can spiral out of control. Our FinOps (Cloud Financial Operations) Services help
                organizations gain visibility, accountability, and efficiency in cloud spending. By
                combining financial discipline with engineering best practices, we ensure your cloud
                investments deliver maximum business value.
              </p>
            </div>

            <div className="pt-6">
              <h2
                id="key-benefits-heading"
                className="text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mb-8"
              >
                Key Benefits of FinOps Services
              </h2>

              {/* 6 Benefits Grid matching reference screenshot 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-200/90 rounded-none bg-white">
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={benefit.number}
                    className={`p-8 border-b md:border-b-0 border-slate-200/90 ${
                      (index + 1) % 3 !== 0 ? 'lg:border-r border-slate-200/90' : ''
                    } ${
                      index % 2 === 0 ? 'md:border-r lg:border-r-0' : ''
                    } ${
                      (index + 1) % 3 !== 0 && index % 2 !== 0 ? 'lg:border-r' : ''
                    } ${
                      index < 3 ? 'lg:border-b border-slate-200/90' : ''
                    } ${
                      index < 4 ? 'md:border-b border-slate-200/90' : ''
                    } hover:bg-slate-50/50 transition-colors duration-150`}
                  >
                    <span className="block text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 font-mono">
                      {benefit.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION C — OUR MIGRATION PROCESS */}
      <section
        className="py-20 md:py-28 bg-[#01153B] text-white overflow-hidden"
        aria-labelledby="migration-process-heading"
      >
        <Container>
          <div className="text-center space-y-4 mb-12">
            <h2
              id="migration-process-heading"
              className="text-3xl sm:text-4xl font-normal text-white tracking-tight"
            >
              Our Migration Process
            </h2>
          </div>

          {/* Connected Curved Five-Stage Process Visual (Matching Reference Screenshot 2) */}
          <div className="w-full flex justify-center py-4">
            <div className="w-full max-w-5xl rounded-xl overflow-hidden bg-transparent">
              <Image
                src="/images/finops/finops-migration-process.png"
                alt="Our Migration Process: 1. Assessment & Benchmarking, 2. Visibility & Reporting, 3. Optimization Strategies, 4. Governance Framework, 5. Continuous Improvement"
                width={2560}
                height={1048}
                className="w-full h-auto object-contain mx-auto select-none"
                priority
              />
            </div>
          </div>

          {/* Accessible responsive text breakdown for screen readers & mobile viewports */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {MIGRATION_STAGES.map((stage) => (
              <div
                key={stage.stage}
                className="bg-[#031E4D]/80 border border-slate-700/60 rounded-xl p-5 space-y-2 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#00B3FF] text-[#01153B] font-bold text-sm flex items-center justify-center font-mono">
                  {stage.stage}
                </div>
                <h3 className="text-sm font-semibold text-white pt-1">{stage.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION D — WHY CHOOSE US? */}
      <section className="py-20 md:py-24 bg-white text-slate-900" aria-labelledby="why-choose-us-heading">
        <Container>
          <div className="text-center space-y-3 mb-12">
            <h2
              id="why-choose-us-heading"
              className="text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight"
            >
              Why Choose Us?
            </h2>
          </div>

          {/* Statements from Reference Screenshot 3 */}
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 flex flex-col justify-start">
                <p className="text-base font-bold text-slate-900 leading-snug">
                  Certified Cloud Architects with deep expertise in FinOps practices.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 flex flex-col justify-start text-center">
                <p className="text-base font-bold text-slate-900 leading-snug">
                  100+ successful cloud cost optimization projects delivered.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 flex flex-col justify-start text-center md:text-right">
                <p className="text-base font-bold text-slate-900 leading-snug">
                  Tailored solutions for SMEs and enterprises.
                </p>
              </div>
            </div>

            {/* Fourth statement centered */}
            <div className="max-w-2xl mx-auto text-center p-6 rounded-xl bg-slate-50/80 border border-slate-200/60">
              <p className="text-base font-bold text-slate-900 leading-snug">
                Transparent pricing sheets, SOWs, and governance models for client trust.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION E — SUPPORTED PLATFORMS */}
      <section
        className="relative py-20 md:py-28 bg-[#01102E] text-white overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/finops/zoftcorp-db-bg-2-scaled.png')",
        }}
        aria-labelledby="supported-platforms-heading"
      >
        <div className="absolute inset-0 bg-[#01102E]/70 pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center space-y-3 mb-12">
            <h2
              id="supported-platforms-heading"
              className="text-3xl sm:text-4xl font-normal text-white tracking-tight"
            >
              Supported Platforms
            </h2>
          </div>

          {/* Central Database and 4 Cloud Platforms Badge Diagram (Screenshot 3) */}
          <div className="w-full flex justify-center py-6">
            <div className="w-full max-w-4xl flex items-center justify-center">
              <Image
                src="/images/finops/supported-platforms.png"
                alt="Supported Cloud Platforms: Microsoft Azure, AWS, Google Cloud, and Cloud Databases"
                width={1970}
                height={556}
                className="w-full max-w-3xl h-auto object-contain select-none"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* BOTTOM CALL TO ACTION (MATCHING ORIGINAL DESIGN) */}
      <section className="py-16 md:py-20 bg-black text-white text-center" aria-label="Assistance CTA">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl font-normal text-white">Stop overspending on the cloud.</p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Contact us today for{' '}
              <strong className="text-[#00B3FF] font-semibold">expert FinOps services</strong> and start
              optimizing your cloud expenses with confidence.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-base text-[#00B3FF] border border-[#00B3FF] hover:bg-[#00B3FF] hover:text-[#01153B] rounded transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#00B3FF]"
              >
                <span>Need Assistance?</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
