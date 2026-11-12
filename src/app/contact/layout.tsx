import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact | Zoftcorp',
  description:
    'Start a conversation with Zoftcorp about cloud, databases, data, performance, architecture, engineering, and modern technology.',
  alternates: {
    canonical: 'https://zoftcorp.com/contact',
  },
  openGraph: {
    title: 'Contact | Zoftcorp',
    description:
      'Start a conversation with Zoftcorp about cloud, databases, data, performance, architecture, engineering, and modern technology.',
    url: 'https://zoftcorp.com/contact',
    siteName: 'Zoftcorp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Zoftcorp',
    description:
      'Start a conversation with Zoftcorp about cloud, databases, data, performance, architecture, engineering, and modern technology.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
