import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: '/insights/case-studies',
        destination: '/insights/blogs#case-studies',
        permanent: false,
      },
      {
        source: '/careers',
        destination: '/about-us/career',
        permanent: true,
      },
      {
        source: '/about-us/career/:slug',
        destination: '/careers/:slug',
        permanent: false,
      },
      {
        source: '/insights/webinar',
        destination: '/insights/events',
        permanent: true,
      },
      {
        source: '/insights/meet-ups',
        destination: '/insights/events',
        permanent: true,
      },
      {
        source: '/insights/events-and-meetups',
        destination: '/insights/events',
        permanent: true,
      },
      {
        source: '/zoftstudio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/offerings/data-engineering-and-analytics/industries',
        destination: '/offerings/data-engineering-and-analytics',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/consulting/performance-audits',
          destination: '/_not-found',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qnahdmwjsgyxspvuntbh.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
