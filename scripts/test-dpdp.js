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
  console.log('--- Testing Zoftcorp Website Routes & Content ---');
  let failures = 0;

  function assert(condition, message) {
    if (!condition) {
      console.error(`❌ FAIL: ${message}`);
      failures++;
    } else {
      console.log(`✅ PASS: ${message}`);
    }
  }

  // 1. Homepage
  const home = await fetchUrl('http://localhost:3002/');
  assert(home.statusCode === 200, 'Homepage returns HTTP 200');

  // Check Homepage Steps 1-7
  assert(home.body.includes('Cloud and Database Experts'), 'Homepage Step 1 Hero present');
  assert(home.body.includes('DPDP Compliance'), 'Homepage Step 2 Services DPDP service card present');
  assert(home.body.includes('/consulting/compliance-governance'), 'Homepage Step 2 Services links to /consulting/compliance-governance');
  assert(home.body.includes('The Zoftcorp Standard'), 'Homepage Step 3 Standard present');
  assert(home.body.includes('Looking for DPDP Compliance Partner'), 'Homepage Step 4 Problem-to-Decision DPDP present');
  assert(home.body.includes('ENGINEERED FOR YOUR STACK'), 'Homepage Step 5 DB Tech present');
  assert(home.body.includes('CASE STUDIES &amp; Whitepapers') || home.body.includes('CASE STUDIES & Whitepapers'), 'Homepage Step 6 Case Studies present');
  assert(home.body.includes('FREQUENTLY ASKED QUESTIONS'), 'Homepage Step 7 FAQ present');

  // 2. Cloud & Database FinOps
  const finops = await fetchUrl('http://localhost:3002/consulting/cloud-finops');
  assert(finops.statusCode === 200, 'Cloud & Database FinOps returns HTTP 200');
  assert(finops.body.includes('Cloud &amp; Database FinOps') || finops.body.includes('Cloud & Database FinOps'), 'FinOps title present');

  // 3. Performance Tuning
  const perf = await fetchUrl('http://localhost:3002/offerings/performance-tuning-delivery');
  assert(perf.statusCode === 200, 'Performance Tuning returns HTTP 200');
  assert(perf.body.includes('Faster Queries. Lower Costs. Better Business.'), 'Performance Tuning H1 present');

  // 4. DPDP Compliance Canonical Route
  const dpdp = await fetchUrl('http://localhost:3002/consulting/compliance-governance');
  assert(dpdp.statusCode === 200, 'DPDP Compliance canonical route returns HTTP 200');

  // 5. Client-Frozen Content Checks on DPDP page
  const body = dpdp.body;

  // H1
  assert(body.includes('Compliance Built Into Every System. Audit-Ready, Always.'), 'Exact H1 present');

  // Sub-headline
  assert(
    body.includes('We help enterprises align with India’s Digital Personal Data Protection Act (DPDP)') ||
    body.includes('We help enterprises align with India&#x27;s Digital Personal Data Protection Act (DPDP)') ||
    body.includes('India’s Digital Personal Data Protection Act (DPDP)'),
    'Exact sub-headline present'
  );
  assert(
    body.includes('embedding compliance into databases, cloud platforms, and business processes so you stay secure, resilient, and penalty-proof'),
    'Sub-headline continuation present'
  );

  // Section: Why DPDP Compliance Matters
  assert(body.includes('Why DPDP Compliance Matters'), 'Section: Why DPDP Compliance Matters present');
  assert(body.includes('Maximum Penalty'), 'Point 1: Maximum Penalty title present');
  assert(body.includes('₹250 crore maximum penalty per violation under DPDP Rules, 2025.'), 'Point 1: Exact ₹250 crore statement present');
  assert(body.includes('Consent Manager Requirement'), 'Point 2: Consent Manager Requirement title present');
  assert(body.includes('Consent Manager integration mandatory from Nov 2026; full regime effective May 2027.'), 'Point 2: Exact Nov 2026 / May 2027 statement present');
  assert(body.includes('Technical Compliance'), 'Point 3: Technical Compliance title present');
  assert(body.includes('Compliance is not paperwork — it requires consent architecture, breach readiness, and technical safeguards.'), 'Point 3: Exact technical compliance statement present');

  // Section: Our Approach
  assert(body.includes('Our Approach'), 'Section: Our Approach present');
  assert(body.includes('Gap Assessment'), 'Approach 1: Gap Assessment title present');
  assert(body.includes('Map personal data flows, fiduciary obligations, and compliance gaps.'), 'Approach 1: Exact statement present');
  assert(body.includes('Consent Architecture'), 'Approach 2: Consent Architecture title present');
  assert(body.includes('Build systems that capture, store, and revoke consent seamlessly.'), 'Approach 2: Exact statement present');
  assert(body.includes('Rights Workflows'), 'Approach 3: Rights Workflows title present');
  assert(body.includes('Enable access, correction, erasure, and grievance redressal for data principals.'), 'Approach 3: Exact statement present');
  assert(body.includes('Breach Readiness'), 'Approach 4: Breach Readiness title present');
  assert(body.includes('Incident playbooks and notification processes aligned with DPDP timelines.'), 'Approach 4: Exact statement present');
  assert(body.includes('Compliance Embedded'), 'Approach 5: Compliance Embedded title present');
  assert(body.includes('Integrate ISO 27001/27701 security safeguards into database and cloud systems.'), 'Approach 5: Exact statement present');

  // Section: Business Outcomes
  assert(body.includes('Business Outcomes'), 'Section: Business Outcomes present');
  assert(body.includes('Audit-ready compliance posture validated against DPDP obligations.'), 'Outcome 1: Exact statement present');
  assert(body.includes('Reduced regulatory risk with documented evidence of safeguards.'), 'Outcome 2: Exact statement present');
  assert(body.includes('Customer trust through transparent consent and data rights workflows.'), 'Outcome 3: Exact statement present');
  assert(body.includes('Operational resilience with compliance built into performance and FinOps.'), 'Outcome 4: Exact statement present');

  // Section: Engagement Models
  assert(body.includes('Engagement Models'), 'Section: Engagement Models present');
  assert(body.includes('DPDP Audit'), 'Model 1: DPDP Audit title present');
  assert(body.includes('One-time compliance readiness assessment.'), 'Model 1: Exact statement present');
  assert(body.includes('Compliance Sprint'), 'Model 2: Compliance Sprint title present');
  assert(body.includes('6–8 week engagement to implement consent architecture and breach workflows.'), 'Model 2: Exact statement present');
  assert(body.includes('Managed Compliance'), 'Model 3: Managed Compliance title present');
  assert(body.includes('Continuous monitoring, reporting, and regulatory updates.'), 'Model 3: Exact statement present');

  // CTA Section
  assert(body.includes('Ready to make compliance your competitive advantage?'), 'CTA headline present');
  assert(body.includes('Request a DPDP Audit'), 'Primary CTA: Request a DPDP Audit present');
  assert(body.includes('Talk to an Architect Today'), 'Secondary CTA: Talk to an Architect Today present');
  assert(body.includes('/contact#contact-form'), 'Link to /contact#contact-form present');
  assert(body.includes('/contact'), 'Link to /contact present');

  console.log(`\nTests finished with ${failures} failure(s).`);
  process.exit(failures > 0 ? 1 : 0);
}

runTests().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
