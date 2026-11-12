import React from "react";
import { Metadata } from "next";
import { HomeHero } from "@/components/sections/hero/home-hero";
import { ServicesSection } from "@/components/sections/services/services-section";
import { ZoftcorpStandardSection } from "@/components/sections/standard/zoftcorp-standard-section";
import { ProblemToDecisionSection } from "@/components/sections/decision/problem-to-decision-section";
import { DatabaseTechnologySection } from "@/components/sections/database-technology/database-technology-section";
import { CaseStudiesSection } from "@/components/sections/case-studies/case-studies-section";
import { FAQSection } from "@/components/sections/faq/faq-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { getLatestInsights } from "@/lib/insights-aggregator";

export const metadata: Metadata = {
  title: "Zoftcorp | Enterprise Technology & Database Advisory",
  description:
    "Zoftcorp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
  alternates: {
    canonical: "https://zoftcorp.com/",
  },
  openGraph: {
    title: "Zoftcorp | Enterprise Technology & Database Advisory",
    description:
      "Zoftcorp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
    url: "https://zoftcorp.com/",
    siteName: "Zoftcorp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoftcorp | Enterprise Technology & Database Advisory",
    description:
      "Zoftcorp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
  },
};

export default async function HomePage() {
  const latestInsights = await getLatestInsights(3);

  return (
    <div className="w-full">
      <HomeHero />
      <ServicesSection />
      <ZoftcorpStandardSection />
      <ProblemToDecisionSection />
      <DatabaseTechnologySection />
      <CaseStudiesSection items={latestInsights} />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

