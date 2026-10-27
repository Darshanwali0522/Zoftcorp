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
  console.log('--- Testing Zoftcorp Website DBaaS Routes & Content ---');
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
  assert(home.body.includes('Managed Services'), 'Homepage Step 2 Services Managed Services card present');
  assert(home.body.includes('/offerings/managed-dba-services'), 'Homepage Step 2 Services links to /offerings/managed-dba-services');
  assert(home.body.includes('The Zoftcorp Standard'), 'Homepage Step 3 Standard present');
  assert(home.body.includes('Need Reliable Support?'), 'Homepage Step 4 Problem-to-Decision Support card present');
  assert(home.body.includes('ENGINEERED FOR YOUR STACK'), 'Homepage Step 5 DB Tech present');
  assert(home.body.includes('CASE STUDIES &amp; Whitepapers') || home.body.includes('CASE STUDIES & Whitepapers') || home.body.includes('CASE STUDIES &amp; BLOGS') || home.body.includes('CASE STUDIES & BLOGS'), 'Homepage Step 6 Case Studies present');
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

  // 6. DBaaS Alias Route
  const dbaasAlias = await fetchUrl(`http://localhost:${port}/database-support-services`);
  assert(dbaasAlias.statusCode === 200, 'DBaaS alias route (/database-support-services) returns HTTP 200');

  // 7. Client-Frozen Content Checks on DBaaS page
  const body = dbaas.body;

  // H1 & Sub-headline
  assert(body.includes('Specialized Managed Services (DBaaS)'), 'Exact H1: Specialized Managed Services (DBaaS) present');
  assert(body.includes('Zoftcorp provides next gen database-as-a- service (Dbaas) for SQL Server, MySQL, PostgresQL.') || body.includes('Zoftcorp provides next gen database-as-a-service (DBaaS) for SQL Server, MySQL, PostgreSQL.'), 'Exact Sub-headline present');

  // ZDS Model
  assert(body.includes("What is Zoftcorp&#x27;s Database as a service (ZDS) model?") || body.includes("What is Zoftcorp's Database as a service (ZDS) model?"), 'ZDS model section heading present');
  assert(body.includes('Database‑as‑a‑Service (DBaaS) platform designed to simplify how teams provision, operate, and scale databases') || body.includes('Database-as-a-Service (DBaaS) platform designed to simplify how teams provision, operate, and scale databases'), 'ZDS core platform statement present');
  assert(body.includes('SQL and NoSQL to Vector databases'), 'SQL, NoSQL, Vector databases statement present');
  assert(body.includes('Microsoft SQL Server, MySQL, PostgreSQL with pgvector'), 'PostgreSQL with pgvector statement present');
  assert(body.includes('provisioning, patching, cloning, backup &amp; recovery, high availability, and enterprise‑grade security') || body.includes('provisioning, patching, cloning, backup & recovery, high availability, and enterprise-grade security'), 'Lifecycle capabilities present');
  assert(body.includes('empowering teams to focus on innovation instead of infrastructure'), 'Focus on innovation statement present');
  assert(body.includes("We tailor our packages which will benefit start-ups, SME&#x27;s, Mid-size and enterprise clients.") || body.includes("We tailor our packages which will benefit start-ups, SME's, Mid-size and enterprise clients."), 'Tailored packages statement present');

  // Architecture Matrix (Client Table)
  assert(body.includes('REST API'), 'Interface: REST API present');
  assert(body.includes('CLI'), 'Interface: CLI present');
  assert(body.includes('GUI'), 'Interface: GUI present');
  assert(body.includes('Database Monitoring and Lifecycle Management'), 'DB Health & Lifecycle statement present');
  assert(body.includes('SQL Server'), 'Databases: SQL Server present');
  assert(body.includes('MySQL'), 'Databases: MySQL present');
  assert(body.includes('PostgreSQL'), 'Databases: PostgreSQL present');
  assert(body.includes('On-premises'), 'Platforms: On-premises present');
  assert(body.includes('AWS'), 'Platforms: AWS present');
  assert(body.includes('Azure'), 'Platforms: Azure present');
  assert(body.includes('GCP'), 'Platforms: GCP present');
  assert(body.includes('Public Cloud'), 'Platforms: Public Cloud present');

  // Customer Benefits
  assert(body.includes('Customer Benefits'), 'Section: Customer Benefits heading present');
  assert(body.includes('Unified Dashboard of your database estates in multiple platforms'), 'Benefit 1: Unified Dashboard present');
  assert(body.includes('Smarter cloning of your databases'), 'Benefit 2: Smarter cloning present');
  assert(body.includes('Reduced costs and Total cost of ownership'), 'Benefit 3: Reduced costs and Total cost of ownership present');
  assert(body.includes('Better security'), 'Benefit 4: Better security present');
  assert(body.includes('Better Life cycle Management'), 'Benefit 5: Better Life cycle Management present');

  // Connect With Us (CTA)
  assert(body.includes('Connect With Us'), 'CTA: Connect With Us heading present');
  assert(body.includes('Looking to simplify and scale your database operations?'), 'CTA: Sub-heading present');
  assert(body.includes('Partner with Zoftcorp for Specialized Managed DBaaS — delivering performance tuning, compliance‑ready management, and cost‑aware optimization across SQL, NoSQL, and vector databases.') || body.includes('Specialized Managed DBaaS'), 'CTA: Core partner statement present');
  assert(body.includes('Reach out today to transform your infrastructure into measurable business value.'), 'CTA: Callout prompt present');
  assert(body.includes('Reach Out Today'), 'Primary CTA button present');
  assert(body.includes('Talk to an Architect Today'), 'Secondary CTA button present');
  assert(body.includes('/contact#contact-form'), 'Link to /contact#contact-form present');
  assert(body.includes('/contact'), 'Link to /contact present');

  console.log(`\nTests finished with ${failures} failure(s).`);
  process.exit(failures > 0 ? 1 : 0);
}

runTests().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
