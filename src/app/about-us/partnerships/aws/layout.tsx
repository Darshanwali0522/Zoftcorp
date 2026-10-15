import { Metadata } from 'next';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'AWS Cloud Consulting Services | ZOFT Corp',
  description:
    'Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS. From strategy to deployment and optimization, we help you unlock the full potential of the AWS cloud.',
  alternates: {
    canonical: 'https://zoftcorp.com/about-us/partnerships/aws',
  },
  openGraph: {
    title: 'AWS Cloud Consulting Services | ZOFT Corp',
    description:
      'Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS. From strategy to deployment and optimization, we help you unlock the full potential of the AWS cloud.',
    url: 'https://zoftcorp.com/about-us/partnerships/aws',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWS Cloud Consulting Services | ZOFT Corp',
    description:
      'Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS. From strategy to deployment and optimization, we help you unlock the full potential of the AWS cloud.',
  },
};

export default function AwsPartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://zoftcorp.com' },
    { name: 'AWS', url: 'https://zoftcorp.com/about-us/partnerships/aws' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServiceJsonLd
        name="AWS Cloud Consulting Services"
        description="Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS. Strategy, migration, FinOps, optimization, and continuous advisory."
        url="https://zoftcorp.com/about-us/partnerships/aws"
      />
      {children}
    </>
  );
}
