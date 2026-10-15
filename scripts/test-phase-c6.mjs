import http from 'http';

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

function cleanText(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
}

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${message}`);
}

async function runTests() {
  console.log('--- Starting Phase C6 Verification Suite ---\n');

  // Test 1: /insights/blogs listing
  console.log('Testing /insights/blogs listing...');
  const insightsListing = await fetchPage('/insights/blogs');
  const insightsBodyClean = cleanText(insightsListing.body);
  assert(insightsListing.status === 200, '/insights/blogs responds with HTTP 200');
  assert(insightsBodyClean.includes('Expert Knowledge. Real-World Solutions.'), 'Hero heading present');
  assert(insightsBodyClean.includes('How ZoftCorp Ease Your Failover Cluster Installation with Slipstream'), 'Article 1 title present');
  assert(insightsBodyClean.includes('SQL Server – List all the database File Sizes'), 'Article 2 title present');
  assert(insightsBodyClean.includes('Azure SQL Managed Instance pool'), 'Article 3 title present');
  assert(insightsListing.body.includes('Search blogs...'), 'Search input present');
  assert(insightsBodyClean.includes('View All Blogs'), 'View All Blogs control present');
  assert(insightsListing.body.includes('href="/insights/blogs/how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream"'), 'Article 1 link correct');
  assert(insightsListing.body.includes('href="/insights/blogs/sql-server-list-all-the-database-file-sizes-and-its-free-spaces-in-an-instance-t-sql-query-from-zoftcorp"'), 'Article 2 link correct');
  assert(insightsListing.body.includes('href="/insights/blogs/azure-sql-managed-instance-pool"'), 'Article 3 link correct');

  // Test 2: /blog-2 legacy listing
  console.log('\nTesting /blog-2 legacy listing...');
  const blog2Listing = await fetchPage('/blog-2');
  const blog2BodyClean = cleanText(blog2Listing.body);
  assert(blog2Listing.status === 200, '/blog-2 responds with HTTP 200');
  assert(blog2BodyClean.includes('Expert Knowledge. Real-World Solutions.'), 'Hero heading present on /blog-2');
  assert(blog2Listing.body.includes('href="/blog-2/how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream"'), 'Article 1 link correct on /blog-2');
  assert(blog2Listing.body.includes('href="/blog-2/sql-server-list-all-the-database-file-sizes-and-its-free-spaces-in-an-instance-t-sql-query-from-zoftcorp"'), 'Article 2 link correct on /blog-2');
  assert(blog2Listing.body.includes('href="/blog-2/azure-sql-managed-instance-pool"'), 'Article 3 link correct on /blog-2');

  // Test 3: Article 1 — Slipstream detail page (/insights/blogs and /blog-2)
  console.log('\nTesting Article 1 (Slipstream)...');
  for (const basePath of ['/insights/blogs', '/blog-2']) {
    const res = await fetchPage(`${basePath}/how-zoftcorp-ease-your-failover-cluster-installation-with-slipstream`);
    const bodyClean = cleanText(res.body);
    assert(res.status === 200, `${basePath}/...slipstream responds with HTTP 200`);
    assert(bodyClean.includes('How ZoftCorp Ease Your Failover Cluster Installation with Slipstream'), `H1 Title present on ${basePath}`);
    assert(bodyClean.includes('Slipstream means embedded installation of SQL server with the available service packs'), `Slipstream definition present on ${basePath}`);
    assert(bodyClean.includes('introduced in SQL Server 2008 and it saves the time of DBA'), `SQL 2008 & DBA time benefit present on ${basePath}`);
    assert(bodyClean.includes('5 Simple steps to do Failover cluster Slipstream Installation:'), `5 Simple steps header present on ${basePath}`);
    assert(bodyClean.includes('Mount the ISO image of the SQL Server Installer'), `Step 1 present on ${basePath}`);
    assert(bodyClean.includes('Copy the mounted SQL Files to any of the folder'), `Step 2 present on ${basePath}`);
    assert(bodyClean.includes('Create folder named “Updates” and copy the Service packs'), `Step 3 present on ${basePath}`);
    assert(bodyClean.includes('Use the below command to Install a Failover cluster'), `Step 4 present on ${basePath}`);
    assert(bodyClean.includes('Use the below command to add a cluster Node with Slipstream Installation'), `Step 5 present on ${basePath}`);
    assert(bodyClean.toLowerCase().includes('action=installfailovercluster'), `InstallFailoverCluster command present on ${basePath}`);
    assert(bodyClean.toLowerCase().includes('action=addnode'), `AddNode command present on ${basePath}`);
    assert(bodyClean.includes('SlipstreamFCI.png'), `SlipstreamFCI.png image present on ${basePath}`);
    assert(bodyClean.includes('SlipstreamFCI2.png'), `SlipstreamFCI2.png image present on ${basePath}`);
    assert(bodyClean.includes('contact@zoftcorp.com'), `Consultation CTA present on ${basePath}`);
    assert(bodyClean.includes('Back to All Blogs'), `Back navigation present on ${basePath}`);
  }

  // Test 4: Article 2 — SQL Server Database File Sizes
  console.log('\nTesting Article 2 (SQL Server Database File Sizes)...');
  for (const basePath of ['/insights/blogs', '/blog-2']) {
    const res = await fetchPage(`${basePath}/sql-server-list-all-the-database-file-sizes-and-its-free-spaces-in-an-instance-t-sql-query-from-zoftcorp`);
    const bodyClean = cleanText(res.body);
    assert(res.status === 200, `${basePath}/...sql-server... responds with HTTP 200`);
    assert(bodyClean.includes('#databasefilesizes'), `T-SQL temporary table present on ${basePath}`);
    assert(bodyClean.includes('cur_eachdb'), `T-SQL cursor present on ${basePath}`);
    assert(bodyClean.includes('FILEPROPERTY'), `T-SQL FILEPROPERTY calculation present on ${basePath}`);
    assert(bodyClean.includes('sp_executesql'), `T-SQL sp_executesql present on ${basePath}`);
    assert(bodyClean.toLowerCase().includes('physicalfilename'), `Output column physicalfilename explained on ${basePath}`);
    assert(bodyClean.toLowerCase().includes('freespace'), `Output column freespace explained on ${basePath}`);
    assert(bodyClean.includes('contact@zoftcorp.com'), `Consultation CTA present on ${basePath}`);
    assert(bodyClean.includes('Copy Query') || bodyClean.includes('Copy code') || bodyClean.includes('Copy'), `Copy code control present on ${basePath}`);
  }

  // Test 5: Article 3 — Azure SQL Managed Instance Pool
  console.log('\nTesting Article 3 (Azure SQL Managed Instance Pool)...');
  for (const basePath of ['/insights/blogs', '/blog-2']) {
    const res = await fetchPage(`${basePath}/azure-sql-managed-instance-pool`);
    const bodyClean = cleanText(res.body);
    assert(res.status === 200, `${basePath}/...azure-sql... responds with HTTP 200`);
    assert(bodyClean.includes('Instance pools is a new feature in Azure SQL MI provide a convenient and cost-efficient way to migrate smaller instances to cloud at scale.'), `Preview introduction present on ${basePath}`);
    assert(bodyClean.includes('Ability to host 2-vCore instances'), `Benefit 1 (2-vCore) present on ${basePath}`);
    assert(bodyClean.includes('Predictable and fast instance deployment'), `Benefit 2 (Fast deployment) present on ${basePath}`);
    assert(bodyClean.includes('Minimal IP address allocation'), `Benefit 3 (Minimal IP) present on ${basePath}`);
    assert(bodyClean.includes('License included: According to Microsoft, the price of SQL Server licenses is included'), `License included explanation present on ${basePath}`);
    assert(bodyClean.includes('Azure Hybrid Benefit: A reduced price that includes Azure Hybrid Benefit for SQL Server'), `Azure Hybrid Benefit explanation present on ${basePath}`);
    assert(bodyClean.includes('contact@zoftcorp.com'), `Consultation CTA present on ${basePath}`);
  }

  // Test 6: Non-regression check on existing pages
  console.log('\nTesting non-regression on existing core routes...');
  const coreRoutes = [
    '/',
    '/database-support-services',
    '/performance-tuning-services',
    '/data-engineering',
    '/offerings/database-migrations-and-transformations',
    '/contact',
    '/about-us',
  ];
  for (const route of coreRoutes) {
    const res = await fetchPage(route);
    assert(res.status === 200, `${route} responds with HTTP 200`);
  }

  console.log('\n🎉 ALL TESTS PASSED! Verification 100% SUCCESSFUL.\n');
}

runTests().catch(err => {
  console.error('Fatal error running tests:', err);
  process.exit(1);
});
