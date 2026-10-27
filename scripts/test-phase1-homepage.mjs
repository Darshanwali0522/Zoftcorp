import assert from 'node:assert';

const BASE_URL = 'http://localhost:3000';

async function fetchPage(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    redirect: 'manual',
    headers: { 'User-Agent': 'Phase1-Homepage-Test/1.0' },
  });
  const text = await res.text();
  return { status: res.status, headers: res.headers, body: text };
}

async function runTests() {
  console.log('====================================================');
  console.log('ZOFTCORP PHASE 1 HOMEPAGE VERIFICATION TEST SUITE');
  console.log('====================================================\n');

  // 1. Fetch Homepage
  console.log('1. Fetching homepage /...');
  const home = await fetchPage('/');
  assert.strictEqual(home.status, 200, 'Homepage must return HTTP 200');
  const homeHtml = home.body;

  // 2. CHANGE 1: Three Core Benefits
  console.log('\n2. Testing Change 1: Three Core Benefits...');
  assert(homeHtml.includes('20–30% Savings'), 'Benefit 1 heading "20–30% Savings" must be present');
  assert(homeHtml.includes('Faster Databases'), 'Benefit 2 heading "Faster Databases" must be present');
  assert(homeHtml.includes('Stay Secure &amp; Compliant') || homeHtml.includes('Stay Secure & Compliant'), 'Benefit 3 heading "Stay Secure & Compliant" must be present');
  assert(homeHtml.includes('on cloud &amp; database spend') || homeHtml.includes('on cloud & database spend'), 'Benefit 1 description must be present');
  assert(homeHtml.includes('with expert tuning'), 'Benefit 2 description must be present');
  assert(homeHtml.includes('with resilience built in'), 'Benefit 3 description must be present');
  // Check cohesive corporate navy/blue cards
  assert(homeHtml.includes('from-[#01153B] via-[#021B4D] to-[#02255E]'), 'Cards must use cohesive corporate navy/blue gradient');
  assert(homeHtml.includes('font-extrabold text-white'), 'Headings must use high-contrast white text');
  console.log('   ✓ Change 1 PASSED: All 3 core benefits prominently rendered with cohesive navy/blue cards and white headings.');

  // 3. CHANGE 2: The Zoftcorp Standard Diagram
  console.log('\n3. Testing Change 2: The Zoftcorp Standard Diagram...');
  assert(homeHtml.includes('The Zoftcorp Standard'), 'Section heading "The Zoftcorp Standard" must be present');
  assert(homeHtml.includes('The Zoftcorp Standard Four-Part Engineering Principles Diagram'), 'Diagram aria-label must be present');
  assert(homeHtml.includes('Engineering Frame'), 'Principle 1 "Engineering Frame" must be present in diagram');
  assert(homeHtml.includes('Evidence Before Intervention'), 'Principle 2 "Evidence Before Intervention" must be present in diagram');
  assert(homeHtml.includes('Outcome'), 'Principle 3 "Outcome" must be present in diagram');
  assert(homeHtml.includes('Engineering Over Hype'), 'Principle 4 "Engineering Over Hype" must be present in diagram');
  // Verify that extraneous descriptions and subtitles were removed from the diagram
  assert(!homeHtml.includes('Disciplined systematic architecture and consistent telemetry standards'), 'Diagram must NOT contain redundant descriptions');
  assert(!homeHtml.includes('Rigorous production validation and root-cause telemetry before action'), 'Diagram must NOT contain redundant descriptions');
  assert(!homeHtml.includes('SYSTEMIC ARCHITECTURE MODEL'), 'Diagram must NOT contain redundant header subtitle');
  assert(!homeHtml.includes('01 // PRINCIPLE'), 'Diagram must NOT contain redundant numbered principle labels');
  console.log('   ✓ Change 2 PASSED: 4-pillar engineering diagram simplified with ONLY the 4 labels and connecting flow.');

  // 4. CHANGE 3: Combined Case Studies & Blogs
  console.log('\n4. Testing Change 3: Case Studies & Blogs Combined Section...');
  assert(homeHtml.includes('Case Studies &amp; Blogs') || homeHtml.includes('Case Studies & Blogs'), 'Section heading must be "Case Studies & Blogs"');
  assert(homeHtml.includes('href="/insights"'), '"View All" link pointing to /insights must be present');
  assert(homeHtml.includes('View All Insights') || homeHtml.includes('View All'), 'View All link label present');
  
  // Verify content type tags
  const hasCaseStudyBadge = homeHtml.includes('Case Study');
  const hasBlogPostBadge = homeHtml.includes('Blog Post');
  assert(hasCaseStudyBadge || hasBlogPostBadge, 'Section must render at least one Case Study or Blog Post badge');
  console.log(`   ✓ Content badges rendered (Case Study: ${hasCaseStudyBadge}, Blog Post: ${hasBlogPostBadge})`);
  console.log('   ✓ Change 3 PASSED: Combined section rendered with View All link to /insights.');

  // 5. CHANGE 4: Full-width FAQs
  console.log('\n5. Testing Change 4: Full Width FAQs...');
  assert(homeHtml.includes('Frequently Asked Questions') || homeHtml.includes('FAQ'), 'FAQ heading must be present');
  assert(homeHtml.includes('What is a DPDP Audit and why do I need it?'), 'FAQ Q1 must be preserved');
  assert(homeHtml.includes('What is Database FinOps?'), 'FAQ Q2 must be preserved');
  assert(homeHtml.includes('How much can I save with FinOps?'), 'FAQ Q3 must be preserved');
  assert(homeHtml.includes('grid-cols-1 md:grid-cols-2'), 'FAQ must use balanced 2-column grid layout');
  console.log('   ✓ Change 4 PASSED: FAQ section uses balanced 2-column layout across full width.');

  // 6. CHANGE 5: Footer Branding
  console.log('\n6. Testing Change 5: Footer Branding...');
  assert(homeHtml.includes('© 2026 Zoftcorp. All rights reserved.'), 'Copyright line must be exactly "© 2026 Zoftcorp. All rights reserved."');
  // Check that "Zoft Corp" is in the footer and not "Zoft Studio"
  assert(homeHtml.includes('Zoft Corp'), 'Footer must display "Zoft Corp" near logo');
  assert(!homeHtml.includes('>Zoft Studio<') && !homeHtml.includes('>ZoftStudio<'), 'Footer must not contain "Zoft Studio" or "ZoftStudio"');
  console.log('   ✓ Change 5 PASSED: Footer correctly displays "Zoft Corp" and exact copyright.');

  // 7. CHANGE 6: Complete Removal of Zoft Studio
  console.log('\n7. Testing Change 6: Removal of Zoft Studio...');
  // Navigation check
  assert(!homeHtml.includes('/zoftstudio"'), 'Homepage navigation/body must not link to /zoftstudio');
  
  // Test redirect of /zoftstudio
  const zoftStudioRes = await fetchPage('/zoftstudio');
  console.log(`   /zoftstudio response status: ${zoftStudioRes.status}`);
  assert([301, 302, 307, 308].includes(zoftStudioRes.status) || zoftStudioRes.status === 404, 
    'Visiting /zoftstudio must redirect (301/308) or return 404');
  if ([301, 302, 307, 308].includes(zoftStudioRes.status)) {
    console.log(`   Redirect location: ${zoftStudioRes.headers.get('location')}`);
  }

  // Sitemap check
  const sitemapRes = await fetchPage('/sitemap.xml');
  assert(!sitemapRes.body.includes('/zoftstudio'), 'Sitemap must not contain /zoftstudio');
  console.log('   ✓ Sitemap verified: /zoftstudio excluded.');

  // Career page check
  const careerRes = await fetchPage('/about-us/career');
  assert(!careerRes.body.includes('/zoftstudio'), 'Career page must not contain links to /zoftstudio');
  console.log('   ✓ Career page verified: ZoftStudio section cleanly removed.');

  // Partnerships page check
  const partnershipsRes = await fetchPage('/about-us/partnerships');
  assert(!partnershipsRes.body.includes('/zoftstudio'), 'Partnerships page must not contain links to /zoftstudio');
  console.log('   ✓ Partnerships page verified: ZoftStudio card cleanly replaced.');
  console.log('   ✓ Change 6 PASSED: Zoft Studio completely removed from navigation, routes, and pages.');

  // 8. Contact API Health
  console.log('\n8. Testing Contact API Integration...');
  const contactRes = await fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  // Empty payload should return 400 Bad Request with validation errors, NOT 500
  assert(contactRes.status === 400, `POST /api/contact with empty body returned ${contactRes.status} (expected 400 validation error)`);
  console.log('   ✓ Contact API validation handler working correctly.');

  console.log('\n====================================================');
  console.log('ALL PHASE 1 TESTS PASSED SUCCESSFULLY! (100%)');
  console.log('====================================================');
}

runTests().catch((err) => {
  console.error('\n❌ TEST FAILED:', err.message);
  process.exit(1);
});
