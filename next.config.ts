import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  cacheComponents: true,
  partialPrefetching: true,
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
        source: '/about-us/company-story',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/about-us/why-zoftcorp',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/offerings/vector-db-integration',
        destination: '/offerings',
        permanent: true,
      },
      {
        source: '/offerings/data-engineering-and-analytics/industries',
        destination: '/offerings/data-engineering-and-analytics',
        permanent: true,
      },
    ];
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
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
