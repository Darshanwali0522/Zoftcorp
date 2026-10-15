import { Metadata } from 'next';
import AwsPartnershipPage from '@/app/about-us/partnerships/aws/page';

export const metadata: Metadata = {
  title: 'AWS Cloud Consulting Services | ZOFT Corp',
  description:
    'Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS. From strategy to deployment and optimization, we help you unlock the full potential of the AWS cloud.',
  alternates: {
    canonical: 'https://zoftcorp.com/aws-2/',
  },
  openGraph: {
    title: 'AWS Cloud Consulting Services | ZOFT Corp',
    description:
      'Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS. From strategy to deployment and optimization, we help you unlock the full potential of the AWS cloud.',
    url: 'https://zoftcorp.com/aws-2/',
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

export default function Aws2Page() {
  return <AwsPartnershipPage />;
}
