import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zoftcorp.com';

  const routes = [
    '',
    '/consulting',
    '/consulting/ai-ready-architectures',
    '/consulting/cloud-database-strategy',
    '/consulting/cloud-finops',
    '/consulting/compliance-governance',
    '/consulting/performance-audits',
    '/consulting/fractional-architect',
    '/offerings',
    '/optimizing-cloud-expenses',
    '/performance-tuning-services',
    '/database-support-services',
    '/data-engineering',
    '/offerings/vector-db-integration',
    '/offerings/database-migrations-and-transformations',
    '/offerings/performance-tuning-delivery',
    '/offerings/managed-dba-services',
    '/offerings/data-engineering-and-analytics',
    '/offerings/data-engineering-and-analytics/industries',
    '/zoftstudio',
    '/insights',
    '/insights/blogs',
    '/insights/blogs/how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream',
    '/insights/blogs/sql-server-list-all-the-database-file-sizes-and-its-free-spaces-in-an-instance-t-sql-query-from-zoftcorp',
    '/insights/blogs/azure-sql-managed-instance-pool',
    '/blog-2',
    '/insights/case-studies',
    '/insights/webinar',
    '/insights/meet-ups',
    '/about-us',
    '/about-us/company-story',
    '/about-us/why-zoftcorp',
    '/about-us/partnerships',
    '/about-us/partnerships/aws',
    '/aws-2',
    '/about-us/partnerships/azure',
    '/about-us/partnerships/gcp',
    '/about-us/partnerships/oracle',
    '/about-us/career',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.split('/').length === 2 ? 0.8 : 0.6,
  }));
}
