export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: 'database-administration' | 'sql-server' | 'cloud-migrations';
  author: BlogAuthor;
  publishedAt: string;
  formattedDate: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  metaDescription: string;
  originalUrl: string;
  tags: string[];
}

export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Posts' },
  { id: 'sql-server', label: 'SQL Server' },
  { id: 'cloud-migrations', label: 'Azure' },
  { id: 'database-administration', label: 'Database Administration' },
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream',
    title: 'How ZoftCorp Ease Your Failover Cluster Installation with Slipstream',
    excerpt:
      'Home What is Slipstream? Slipstream means embedded installation of SQL server with the available service packs, cumulative updates or Hotfixes. This technology is introduced in SQL Server 2008 and it saves the time of DBA...',
    category: 'Database Administration',
    categorySlug: 'database-administration',
    author: {
      name: 'admin',
      role: 'ZoftCorp Engineering Team',
    },
    publishedAt: '2024-02-12',
    formattedDate: 'Feb 12, 2024',
    readingTime: '3 min read',
    image: '/images/blogs/failover-cluster-slipstream.jpg',
    featured: true,
    metaDescription: 'What is Slipstream? Learn how ZoftCorp eases Failover Cluster Slipstream Installation with step-by-step commands and procedures.',
    originalUrl: 'https://zoftcorp.com/2024/02/12/how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream/',
    tags: ['Failover Cluster', 'Slipstream', 'SQL Server 2016', 'DBA', 'High Availability'],
  },
  {
    slug: 'sql-server-list-all-the-database-file-sizes-and-its-free-spaces-in-an-instance-t-sql-query-from-zoftcorp',
    title: 'SQL Server – List all the database File Sizes and its free Spaces in an Instance – T-SQL Query from Zoftcorp',
    excerpt:
      'In this comprehensive guide, we provide a T-SQL query to list all database file sizes and their free spaces in an instance across all databases...',
    category: 'SQL Server',
    categorySlug: 'sql-server',
    author: {
      name: 'admin',
      role: 'ZoftCorp Engineering Team',
    },
    publishedAt: '2024-02-12',
    formattedDate: 'Feb 12, 2024',
    readingTime: '4 min read',
    image: '/images/blogs/sql-database-file-sizes.jpg',
    featured: false,
    metaDescription: 'Find database file sizes and free space across all databases in an instance with this battle-tested T-SQL query from Zoftcorp.',
    originalUrl: 'https://zoftcorp.com/2024/02/12/sql-server-list-all-the-database-file-sizes-and-its-free-spaces-in-an-instance-t-sql-query-from-zoftcorp/',
    tags: ['T-SQL', 'File Sizes', 'Free Space', 'sys.databases', 'Performance Tuning'],
  },
  {
    slug: 'azure-sql-managed-instance-pool',
    title: 'Azure SQL Managed Instance pool',
    excerpt:
      'Instance pools is a new feature in Azure SQL MI provide a convenient and cost-efficient way to migrate smaller instances to cloud at scale...',
    category: 'Azure',
    categorySlug: 'cloud-migrations',
    author: {
      name: 'admin',
      role: 'ZoftCorp Engineering Team',
    },
    publishedAt: '2024-02-12',
    formattedDate: 'Feb 12, 2024',
    readingTime: '3 min read',
    image: '/images/blogs/azure-sql-managed-instance-pool.png',
    featured: false,
    metaDescription: 'Instance pools in Azure SQL MI provide a convenient and cost-efficient way to migrate smaller instances to cloud at scale.',
    originalUrl: 'https://zoftcorp.com/2024/02/12/azure-sql-managed-instance-pool/',
    tags: ['Azure SQL MI', 'Instance Pools', 'Cloud Migration', '2-vCore', 'Hybrid Benefit'],
  },
];
