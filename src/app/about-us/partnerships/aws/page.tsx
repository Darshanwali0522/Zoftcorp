import React from 'react';
import { AwsHero } from '@/components/sections/aws/aws-hero';
import { AwsWhyMatters } from '@/components/sections/aws/aws-why-matters';
import { AwsKeyBenefits } from '@/components/sections/aws/aws-key-benefits';
import { AwsProcess } from '@/components/sections/aws/aws-process';
import { AwsSpecializedServices } from '@/components/sections/aws/aws-specialized-services';
import { AwsCta } from '@/components/sections/aws/aws-cta';

export default function AwsPartnershipPage() {
  return (
    <div className="w-full bg-white text-slate-900 selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* 1. Hero Section */}
      <AwsHero />

      {/* 2. Why AWS Cloud Consulting Matters? & Credibility Proof Points */}
      <AwsWhyMatters />

      {/* 3. Key Benefits of Our AWS Consulting Services (6 Distinct Rectangular Panels) */}
      <AwsKeyBenefits />

      {/* 4. Our AWS Consulting Process (5-Stage Deployment Pipeline) */}
      <AwsProcess />

      {/* 5. AWS Services We Specialize In (6 Infrastructure Layer Groups) */}
      <AwsSpecializedServices />

      {/* 6. Closing Call-To-Action Banner */}
      <AwsCta />
    </div>
  );
}
