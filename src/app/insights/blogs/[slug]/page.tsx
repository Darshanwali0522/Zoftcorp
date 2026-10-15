import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { CodeBlock } from '@/components/blog/code-block';
import { getPostBySlug, getPublishedPosts } from '@/lib/supabase/blog-service';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export const instant = false;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Article Not Found | ZOFT Corp',
    };
  }

  const pageUrl = post.canonicalUrl || `https://zoftcorp.com/insights/blogs/${post.slug}`;
  const metaTitle = post.seoTitle || post.ogTitle || `${post.title} | ZOFT Corp`;
  const metaDescription = post.seoDescription || post.ogDescription || post.metaDescription;
  const imageUrl = post.ogImage || (post.image.startsWith('http') ? post.image : `https://zoftcorp.com${post.image}`);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.ogTitle || metaTitle,
      description: post.ogDescription || metaDescription,
      url: pageUrl,
      siteName: 'ZOFT Corp',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || metaTitle,
      description: post.ogDescription || metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Find previous and next articles from live published list
  const allPosts = await getPublishedPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex >= 0 && currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const pageUrl = post.canonicalUrl || `https://zoftcorp.com/insights/blogs/${post.slug}`;
  const imageUrl = post.ogImage || (post.image.startsWith('http') ? post.image : `https://zoftcorp.com${post.image}`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': post.schemaType || 'BlogPosting',
    headline: post.title,
    description: post.seoDescription || post.metaDescription,
    image: imageUrl,
    datePublished: `${post.publishedAt}T14:30:00+00:00`,
    dateModified: `${post.publishedAt}T14:30:00+00:00`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      worksFor: {
        '@type': 'Organization',
        name: 'ZOFT Corp',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZOFT Corp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zoftcorp.com/brand/zoftcorp-logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-[#00B3FF]/20 selection:text-[#01153B]">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =========================================================================
          HERO & ARTICLE HEADER
          ========================================================================= */}
      <section className="relative bg-[#01153B] text-white pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-800">
        {/* Ambient background glow */}
        <div
          className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[400px] bg-[#00B3FF]/15 blur-[140px] rounded-full"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#FF6F00]/10 blur-[120px] rounded-full"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Top Back Navigation & Category */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/insights/blogs"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#00B3FF] hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Blogs</span>
              </Link>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00B3FF]/15 text-[#00B3FF] border border-[#00B3FF]/30">
                {post.category}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              {post.title}
            </h1>

            {/* Publication Details */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-800 text-xs sm:text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#00B3FF]" />
                <span>{post.formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF6F00]" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span>By {post.author.name}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BREADCRUMB BAR */}
      <div className="bg-[#FAFAFA] border-b border-slate-200/80 py-3 text-xs text-slate-600 font-sans">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 list-none p-0 m-0">
              <li>
                <Link href="/" className="hover:text-[#00B3FF] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/insights" className="hover:text-[#00B3FF] transition-colors">
                  Insights
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/insights/blogs" className="hover:text-[#00B3FF] transition-colors">
                  Blogs
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-900 font-medium truncate max-w-[280px] sm:max-w-md" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* =========================================================================
          MAIN ARTICLE CONTENT BODY
          ========================================================================= */}
      <article className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Featured Image */}
            <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>

            {post.content ? (
              <div
                className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <>
            {/* ===================================================================
                ARTICLE 1: FAILOVER CLUSTER INSTALLATION WITH SLIPSTREAM
                =================================================================== */}
            {post.slug === 'how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream' && (
              <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
                {/* Introduction & Definition */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] tracking-tight">
                    What is Slipstream?
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Slipstream</strong> means embedded installation of SQL server with the
                    available service packs, cumulative updates or Hotfixes. This technology is
                    introduced in <strong>SQL Server 2008</strong> and it saves the time of DBA.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Traditionally, database administrators were required to first install the base
                    RTM version of SQL Server and then separately apply Cumulative Updates (CUs) or
                    Service Packs. In a Windows Server Failover Cluster (WSFC) environment, this
                    process multiplied maintenance windows and increased potential reboot cycles
                    across each cluster node. Slipstream integration simplifies this by injecting
                    the patch bits directly into the initial cluster deployment routine.
                  </p>
                </div>

                {/* 5 Simple Steps */}
                <div className="space-y-6 pt-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] tracking-tight">
                    5 Simple steps to do Failover cluster Slipstream Installation:
                  </h2>

                  <ol className="space-y-8 list-none p-0">
                    {/* Step 1 */}
                    <li className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#00B3FF] text-[#01153B] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                          1
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#01153B] m-0">
                          Mount the ISO image of the SQL Server Installer
                        </h3>
                      </div>
                      <p className="text-slate-600 m-0 pl-11 text-base">
                        Mount the SQL Server installation media (ISO image) on the primary cluster
                        node where you plan to execute the setup routines.
                      </p>
                    </li>

                    {/* Step 2 */}
                    <li className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#00B3FF] text-[#01153B] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                          2
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#01153B] m-0">
                          Copy the mounted SQL Files to any of the folder
                        </h3>
                      </div>
                      <p className="text-slate-600 m-0 pl-11 text-base">
                        In this case SQL exe files are placed in{' '}
                        <code className="bg-slate-200 text-[#01153B] px-2 py-0.5 rounded font-mono text-sm font-semibold">
                          C:\SQL\SQL2016\
                        </code>
                      </p>
                    </li>

                    {/* Step 3 */}
                    <li className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#00B3FF] text-[#01153B] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                          3
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#01153B] m-0">
                          Create folder named “Updates” and copy the Service packs
                        </h3>
                      </div>
                      <p className="text-slate-600 m-0 pl-11 text-base">
                        Create folder named “Updates” and copy the Service packs, Cumulative
                        updates or Hotfixes. For ease I created the folder under{' '}
                        <code className="bg-slate-200 text-[#01153B] px-2 py-0.5 rounded font-mono text-sm font-semibold">
                          C:\SQL\SQL2016\Updates
                        </code>
                      </p>
                    </li>

                    {/* Step 4 */}
                    <li className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#00B3FF] text-[#01153B] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                          4
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#01153B] m-0">
                          Use the below command to Install a Failover cluster
                        </h3>
                      </div>
                      <div className="pl-11">
                        <CodeBlock
                          code={`C:\\SQL\\SQL2016>setup.exe /Action=InstallFailovercluster /UpdateEnabled=True /UpdateSource="C:\\SQL\\SQL2016\\Updates"`}
                          language="cmd"
                          title="Command Prompt // Install Failover Cluster with Slipstream"
                        />
                        <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 bg-black">
                          <Image
                            src="/images/blogs/SlipstreamFCI.png"
                            alt="SlipstreamFCI command execution"
                            width={900}
                            height={90}
                            className="w-full h-auto block"
                          />
                        </div>
                      </div>
                    </li>

                    {/* Step 5 */}
                    <li className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#00B3FF] text-[#01153B] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                          5
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#01153B] m-0">
                          Use the below command to add a cluster Node with Slipstream Installation
                        </h3>
                      </div>
                      <div className="pl-11">
                        <CodeBlock
                          code={`C:\\SQL\\SQL2016>setup.exe /Action=Addnode /UpdateEnabled=True /UpdateSource="C:\\SQL\\SQL2016\\Updates"`}
                          language="cmd"
                          title="Command Prompt // Add Cluster Node with Slipstream"
                        />
                        <div className="mt-3 rounded-xl overflow-hidden border border-slate-200 bg-black">
                          <Image
                            src="/images/blogs/SlipstreamFCI2.png"
                            alt="SlipstreamFCI2 command execution"
                            width={900}
                            height={90}
                            className="w-full h-auto block"
                          />
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Post-execution guidance */}
                <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-200 text-[#01153B] space-y-2">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-[#00B3FF]" />
                    <span>GUI Installation Completion</span>
                  </div>
                  <p className="text-slate-700 m-0">
                    After executing the command, the GUI option will pop-up and can do normal FCI
                    installation.
                  </p>
                </div>
              </div>
            )}

            {/* ===================================================================
                ARTICLE 2: SQL SERVER DATABASE FILE SIZES AND FREE SPACES QUERY
                =================================================================== */}
            {post.slug ===
              'sql-server-list-all-the-database-file-sizes-and-its-free-spaces-in-an-instance-t-sql-query-from-zoftcorp' && (
              <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
                {/* Introduction */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] tracking-tight">
                    Overview: Monitoring Instance-Wide Database File Allocations
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    In this comprehensive guide, we provide a T-SQL query to list all database file
                    sizes and their free spaces in an instance across all databases.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Managing storage capacity and file growth across multiple databases on a single SQL
                    Server instance is one of the most critical operational tasks for DBAs. Running
                    out of disk space on a primary data volume (MDF/NDF) or transaction log volume (LDF)
                    can halt transaction processing and trigger database downtime. The script below
                    iterates through all databases and outputs exact allocated size and available
                    internal free space in Megabytes.
                  </p>
                </div>

                {/* Complete T-SQL Code block */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#01153B] m-0">
                      T-SQL Query: File Sizes and Free Space in an Instance
                    </h3>
                  </div>

                  <CodeBlock
                    code={`-- ============================================= 
-- Author:    Zoftcorp Consulting Services 
-- Create date: 27/10/2020 
-- Description:  To Find the database File Sizes and its Free spaces in an Instance 
-- ============================================= 
DECLARE @databases NVARCHAR(max) 
DECLARE @usedatabase NVARCHAR(max) 

CREATE TABLE #databasefilesizes 
  ( 
     [name]           NVARCHAR(max), 
     [filesize]       NUMERIC(38, 5), 
     [freespace]      NUMERIC(38, 5), 
     filetype         CHAR(10), 
     physicalfilename NVARCHAR(max) 
  ) 

DECLARE cur_eachdb CURSOR FOR 
  SELECT NAME 
  FROM   sys.databases 

OPEN cur_eachdb 

FETCH next FROM cur_eachdb INTO @databases 

WHILE @@FETCH_STATUS = 0 
  BEGIN 
      SET @usedatabase = 'USE [' + @databases 
                         + ']  insert into #DatabaseFileSizes  SELECT name, size/128.0 FileSizeInMB, size/128.0 - CAST(FILEPROPERTY(name, ''SpaceUsed'') AS int)/128.0     AS EmptySpaceInMB , type_desc,physical_name FROM sys.database_files; ' 

      PRINT @usedatabase 

      EXEC Sp_executesql 
        @usedatabase; 

      SET @usedatabase = '' 

      FETCH next FROM cur_eachdb INTO @databases 
  END 

CLOSE cur_eachdb; 

DEALLOCATE cur_eachdb; 

SELECT * 
FROM   #databasefilesizes;`}
                    language="sql"
                    title="T-SQL Script // sys.databases & sys.database_files"
                  />
                </div>

                {/* Technical Query Architecture Explanation */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01153B]">
                    How the T-SQL Script Operates:
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="font-mono text-xs font-bold text-[#00B3FF] uppercase block">
                        TEMPORARY STORAGE
                      </span>
                      <h4 className="font-bold text-[#01153B] text-base">#databasefilesizes Table</h4>
                      <p className="text-xs text-slate-600 leading-relaxed m-0">
                        Initializes a session-scoped temp table with precision columns for file size,
                        free space, file type (ROWS/LOG), and physical OS paths.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="font-mono text-xs font-bold text-[#FF6F00] uppercase block">
                        ITERATION ENGINE
                      </span>
                      <h4 className="font-bold text-[#01153B] text-base">cur_eachdb Cursor</h4>
                      <p className="text-xs text-slate-600 leading-relaxed m-0">
                        Loops through all online databases returned by <code>sys.databases</code>,
                        ensuring an instance-wide inventory without manual per-database execution.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="font-mono text-xs font-bold text-emerald-600 uppercase block">
                        DYNAMIC CONTEXT
                      </span>
                      <h4 className="font-bold text-[#01153B] text-base">sp_executesql Context Switch</h4>
                      <p className="text-xs text-slate-600 leading-relaxed m-0">
                        Dynamically issues <code>USE [dbname]</code> queries to interrogate each
                        database’s local <code>sys.database_files</code> catalog view.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <span className="font-mono text-xs font-bold text-purple-600 uppercase block">
                        CAPACITY CONVERSION
                      </span>
                      <h4 className="font-bold text-[#01153B] text-base">FILEPROPERTY SpaceUsed</h4>
                      <p className="text-xs text-slate-600 leading-relaxed m-0">
                        Converts 8-KB internal pages to Megabytes using <code>size/128.0</code> and
                        computes accurate <code>EmptySpaceInMB</code> by deducting active extents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                ARTICLE 3: AZURE SQL MANAGED INSTANCE POOL
                =================================================================== */}
            {post.slug === 'azure-sql-managed-instance-pool' && (
              <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed font-sans text-base sm:text-lg">
                {/* Introduction & Overview */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#01153B] tracking-tight">
                    Overview: Azure SQL Managed Instance Pools
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    <strong>Instance pools</strong> is a new feature in <strong>Azure SQL MI</strong> provide
                    a convenient and cost-efficient way to migrate smaller instances to cloud at scale.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    This feature is in preview. This concept is similar to have multiple SQL instances
                    in the same Virtual machine and make efficient use of the compute resources. The
                    instance deployment is very fast when compared to traditional SQL Instance deployment.
                  </p>
                </div>

                {/* The 3 Benefits */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01153B]">
                    The benefits of Instance pools are,
                  </h3>

                  <div className="space-y-3 not-prose">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#00B3FF] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-base font-bold text-[#01153B]">
                          Ability to host 2-vCore instances
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          Enables cost-efficient hosting for smaller workloads without requiring a full
                          standalone 4-vCore or 8-vCore instance baseline.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6F00] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-base font-bold text-[#01153B]">
                          Predictable and fast instance deployment
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          Pre-provisions compute cluster capacity so that deploying new instances takes
                          minutes rather than hours.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-base font-bold text-[#01153B]">
                          Minimal IP address allocation
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          Reduces the overall virtual network subnet IP address consumption by sharing
                          underlying network allocations across instances in the pool.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Licensing Models */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#01153B]">
                    Licensing Models and Cost Options
                  </h3>

                  <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="text-base font-bold text-[#01153B]">
                        License included:
                      </h4>
                      <p className="text-slate-600 m-0 text-base">
                        According to Microsoft, the price of SQL Server licenses is included for customers
                        who choose not to apply existing SQL Server licenses with Software Assurance.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="text-base font-bold text-[#01153B]">
                        Azure Hybrid Benefit:
                      </h4>
                      <p className="text-slate-600 m-0 text-base">
                        A reduced price that includes Azure Hybrid Benefit for SQL Server. Customers
                        can opt into this price by using their existing SQL Server licenses with Software Assurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
              </>
            )}

            {/* =========================================================================
                CLOSING CONSULTATION MESSAGE (COMMON TO ALL ARTICLES)
                ========================================================================= */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#01153B] text-white space-y-6 shadow-xl border border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#00B3FF]">
                  EXPERT CONSULTATION // ZOFTCORP SERVICES
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Looking for a Reliable Database Partner?
                </h3>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                If you are looking for a reliable and professional partner to help you migrate your
                database to the cloud, look no further than ZoftCorp. Contact us today to get a free
                consultation and quote for your database migration project at{' '}
                <a
                  href="mailto:contact@zoftcorp.com"
                  className="text-[#00B3FF] underline hover:text-cyan-300 transition-colors"
                >
                  contact@zoftcorp.com
                </a>
                .
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm text-white bg-[#FF6F00] hover:bg-[#E66300] font-semibold rounded-xl shadow-lg shadow-[#FF6F00]/25 transition-all duration-200"
                >
                  <span>Get a Free Consultation &amp; Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/insights/blogs"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
                >
                  <span>View More Blogs</span>
                </Link>
              </div>
            </div>

            {/* RECIPROCAL PREVIOUS / NEXT ARTICLE NAVIGATION */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/insights/blogs/${prevPost.slug}`}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00B3FF] hover:bg-white transition-all duration-200 space-y-1 text-left group"
                >
                  <span className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    Previous Article
                  </span>
                  <div className="text-sm font-bold text-[#01153B] group-hover:text-[#00B3FF] transition-colors line-clamp-2">
                    {prevPost.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  href={`/insights/blogs/${nextPost.slug}`}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00B3FF] hover:bg-white transition-all duration-200 space-y-1 text-right group"
                >
                  <span className="text-xs font-mono text-slate-400 uppercase flex items-center justify-end gap-1.5">
                    Next Article
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="text-sm font-bold text-[#01153B] group-hover:text-[#00B3FF] transition-colors line-clamp-2">
                    {nextPost.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </Container>
      </article>
    </div>
  );
}
