/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data, headers: res.headers }));
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('--- Testing Zoftcorp Website Migration & Transformations Routes & Content ---');
  let failures = 0;

  function assert(condition, message) {
    if (!condition) {
      console.error(`❌ FAIL: ${message}`);
      failures++;
    } else {
      console.log(`✅ PASS: ${message}`);
    }
  }

  const port = process.env.PORT || 3002;

  // 1. Homepage
  const home = await fetchUrl(`http://localhost:${port}/`);
  assert(home.statusCode === 200, 'Homepage returns HTTP 200');

  // Check Homepage Steps 1-7
  assert(home.body.includes('Cloud and Database Experts'), 'Homepage Step 1 Hero present');
  assert(home.body.includes('Migration &amp; Transformations') || home.body.includes('Migration & Transformations'), 'Homepage Step 2 Services Migration & Transformations card present');
  assert(home.body.includes('/offerings/database-migrations-and-transformations'), 'Homepage Step 2 Services links to /offerings/database-migrations-and-transformations');
  assert(home.body.includes('The Zoftcorp Standard'), 'Homepage Step 3 Standard present');
  assert(home.body.includes('Planning a Database Migration or Transformation?'), 'Homepage Step 4 Problem-to-Decision Migration card present');
  assert(home.body.includes('ENGINEERED FOR YOUR STACK'), 'Homepage Step 5 DB Tech present');
  assert(home.body.includes('CASE STUDIES &amp; Whitepapers') || home.body.includes('CASE STUDIES & Whitepapers'), 'Homepage Step 6 Case Studies present');
  assert(home.body.includes('FREQUENTLY ASKED QUESTIONS'), 'Homepage Step 7 FAQ present');

  // 2. Cloud & Database FinOps
  const finops = await fetchUrl(`http://localhost:${port}/consulting/cloud-finops`);
  assert(finops.statusCode === 200, 'Cloud & Database FinOps returns HTTP 200');
  assert(finops.body.includes('Cloud &amp; Database FinOps') || finops.body.includes('Cloud & Database FinOps'), 'FinOps title present');

  // 3. Performance Tuning
  const perf = await fetchUrl(`http://localhost:${port}/offerings/performance-tuning-delivery`);
  assert(perf.statusCode === 200, 'Performance Tuning returns HTTP 200');
  assert(perf.body.includes('Faster Queries. Lower Costs. Better Business.'), 'Performance Tuning H1 present');

  // 4. DPDP Compliance Canonical Route
  const dpdp = await fetchUrl(`http://localhost:${port}/consulting/compliance-governance`);
  assert(dpdp.statusCode === 200, 'DPDP Compliance canonical route returns HTTP 200');
  assert(dpdp.body.includes('Compliance Built Into Every System. Audit-Ready, Always.'), 'DPDP exact H1 present');

  // 5. DBaaS Canonical Route
  const dbaas = await fetchUrl(`http://localhost:${port}/offerings/managed-dba-services`);
  assert(dbaas.statusCode === 200, 'Canonical DBaaS route (/offerings/managed-dba-services) returns HTTP 200');
  assert(dbaas.body.includes('Specialized Managed Services (DBaaS)'), 'DBaaS H1 present');

  // 6. Canonical Migration & Transformations Route
  const migrations = await fetchUrl(`http://localhost:${port}/offerings/database-migrations-and-transformations`);
  assert(migrations.statusCode === 200, 'Canonical Migration route (/offerings/database-migrations-and-transformations) returns HTTP 200');

  // 7. Client-Frozen Content Checks on Migration & Transformations page
  const body = migrations.body;

  // H1 & Sub-headline
  assert(body.includes('Migration &amp; Transformations') || body.includes('Migration & Transformations'), 'Exact H1: Migration & Transformations present');
  assert(
    body.includes('At Zoftcorp, we simplify the complexity of database migrations') &&
    body.includes('whether you’re modernizing within the same ecosystem or transforming across platforms') &&
    body.includes('Our proven methodology ensures minimal downtime, cost') &&
    body.includes('execution, and compliance') &&
    body.includes('transitions'),
    'Exact Sub-headline present'
  );

  // Homogeneous Migrations Section
  assert(body.includes('Homogeneous Migrations'), 'Section: Homogeneous Migrations heading present');
  assert(
    body.includes('Moving within the same database family (e.g., Oracle → Oracle, SQL Server → SQL Server).') ||
    body.includes('Moving within the same database family (e.g., Oracle &rarr; Oracle, SQL Server &rarr; SQL Server).'),
    'Homogeneous definition present'
  );
  assert(body.includes('VERSION UPGRADES') || body.includes('Version Upgrades'), 'Homogeneous: Version Upgrades item present');
  assert(body.includes('Seamless transition to the latest releases.'), 'Homogeneous: Seamless transition copy present');
  assert(body.includes('RE‑HOST (LIFT &amp; SHIFT)') || body.includes('RE-HOST (LIFT & SHIFT)') || body.includes('Lift &amp; Shift') || body.includes('Lift & Shift'), 'Homogeneous: Re-host (Lift & Shift) item present');
  assert(body.includes('Quick migration to cloud or hybrid environments.'), 'Homogeneous: Quick migration copy present');
  assert(body.includes('RE‑PLATFORM') || body.includes('RE-PLATFORM') || body.includes('Re-platform'), 'Homogeneous: Re-platform item present');
  assert(body.includes('Optimize workloads while staying within the same vendor ecosystem.'), 'Homogeneous: Optimize workloads copy present');
  assert(body.includes('BENEFITS'), 'Homogeneous: Benefits label present');
  assert(body.includes('Faster execution, lower risk, and immediate performance gains.'), 'Homogeneous: Benefits copy present');

  // Heterogeneous Migrations Section
  assert(body.includes('Heterogeneous Migrations'), 'Section: Heterogeneous Migrations heading present');
  assert(
    body.includes('Transforming across different database platforms (e.g., SQL Server → PostgreSQL, Oracle → MySQL).') ||
    body.includes('Transforming across different database platforms (e.g., SQL Server &rarr; PostgreSQL, Oracle &rarr; MySQL).'),
    'Heterogeneous definition present'
  );
  assert(body.includes('SCHEMA CONVERSION') || body.includes('Schema Conversion'), 'Heterogeneous: Schema Conversion item present');
  assert(body.includes('Automated tools + expert tuning for compatibility.'), 'Heterogeneous: Schema Conversion copy present');
  assert(body.includes('DATA TRANSFORMATION') || body.includes('Data Transformation'), 'Heterogeneous: Data Transformation item present');
  assert(body.includes('ETL/ELT pipelines optimized for accuracy and cost.'), 'Heterogeneous: Data Transformation copy present');
  assert(body.includes('APPLICATION REFACTORING') || body.includes('Application Refactoring'), 'Heterogeneous: Application Refactoring item present');
  assert(body.includes('Aligning queries, stored procedures, and integrations.'), 'Heterogeneous: Application Refactoring copy present');
  assert(body.includes('Reduced licensing costs, vendor independence, and future') && body.includes('architecture.'), 'Heterogeneous: Benefits copy present');

  // Why Zoftcorp? Section
  assert(body.includes('Why Zoftcorp?'), 'Section: Why Zoftcorp? heading present');
  assert(body.includes('Database‑first expertise') || body.includes('Database-first expertise'), 'Pillar 1: Database-first expertise present');
  assert(body.includes('Performance tuning embedded in every migration.'), 'Pillar 1: Performance tuning copy present');
  assert(body.includes('FinOps integration'), 'Pillar 2: FinOps integration present');
  assert(body.includes('Cost visibility and optimization during transformation.'), 'Pillar 2: Cost visibility copy present');
  assert(body.includes('Compliance assurance'), 'Pillar 3: Compliance assurance present');
  assert(body.includes('DPDP/GDPR frameworks built into migration workflows.'), 'Pillar 3: Compliance assurance copy present');
  assert(body.includes('Hybrid mastery'), 'Pillar 4: Hybrid mastery present');
  assert(body.includes('AWS, Azure, and on') && body.includes('prem ecosystems unified under one strategy.'), 'Pillar 4: Hybrid ecosystems copy present');

  // Final Call to Action Section
  assert(body.includes('Ready to Transform Your Databases?'), 'CTA: Ready to Transform Your Databases? heading present');
  assert(
    body.includes('Whether it’s a homogeneous upgrade or a heterogeneous migration, Zoftcorp ensures a seamless, cost') &&
    body.includes('aware, and compliance') &&
    body.includes('ready journey.'),
    'CTA: Supporting copy present'
  );
  assert(
    body.includes('Connect with us today to modernize your database landscape and unlock measurable business value.'),
    'CTA: Prompt callout present'
  );
  assert(body.includes('Connect With Us Today'), 'CTA: Primary button text present');
  assert(body.includes('Talk to an Architect Today'), 'CTA: Secondary button text present');
  assert(body.includes('/contact#contact-form'), 'Link to /contact#contact-form present');
  assert(body.includes('/contact'), 'Link to /contact present');

  console.log(`\nTests finished with ${failures} failure(s).`);
  process.exit(failures > 0 ? 1 : 0);
}

runTests().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
