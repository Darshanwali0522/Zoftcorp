import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact | ZOFT Corp',
  description:
    'Start a conversation with ZOFT about cloud, databases, data, performance, architecture, engineering, and modern technology.',
  alternates: {
    canonical: 'https://zoftcorp.com/contact',
  },
  openGraph: {
    title: 'Contact | ZOFT Corp',
    description:
      'Start a conversation with ZOFT about cloud, databases, data, performance, architecture, engineering, and modern technology.',
    url: 'https://zoftcorp.com/contact',
    siteName: 'ZOFT Corp',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | ZOFT Corp',
    description:
      'Start a conversation with ZOFT about cloud, databases, data, performance, architecture, engineering, and modern technology.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
