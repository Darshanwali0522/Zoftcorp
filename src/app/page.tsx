import React from "react";
import { Metadata } from "next";
import { HomeHero } from "@/components/sections/hero/home-hero";
import { DatabaseTechnologySection } from "@/components/sections/database-technology/database-technology-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { PlatformsSection } from "@/components/sections/platforms/platforms-section";
import { ExpertiseSection } from "@/components/sections/expertise/expertise-section";
import { IndustriesSection } from "@/components/sections/industries/industries-section";
import { GrowBusinessSection } from "@/components/sections/grow-business/grow-business-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export const metadata: Metadata = {
  title: "ZOFT Corp | Enterprise Technology & Database Advisory",
  description:
    "ZOFT Corp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
  alternates: {
    canonical: "https://zoftcorp.com/",
  },
  openGraph: {
    title: "ZOFT Corp | Enterprise Technology & Database Advisory",
    description:
      "ZOFT Corp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
    url: "https://zoftcorp.com/",
    siteName: "ZOFT Corp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZOFT Corp | Enterprise Technology & Database Advisory",
    description:
      "ZOFT Corp delivers enterprise-grade cloud architecture, high-availability database performance tuning, and technical advisory.",
  },
};

export default function HomePage() {
  return (
    <div className="w-full">
      <HomeHero />
      <DatabaseTechnologySection />
      <ServicesSection />
      <PlatformsSection />
      <ExpertiseSection />
      <IndustriesSection />
      <GrowBusinessSection />
      <ContactSection />
    </div>
  );
}

