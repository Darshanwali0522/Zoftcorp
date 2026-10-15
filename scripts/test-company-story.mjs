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
  return html
    .replace(/&amp;/g, '&')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+([,.:;?!])/g, '$1')
    .replace(/\s+/g, ' ');
}

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`✅ PASS: ${message}`);
}

async function runTests() {
  console.log('--- Starting Company Story Refinement Verification Suite ---\n');

  console.log('1. Testing /about-us/company-story response & content...');
  const res = await fetchPage('/about-us/company-story');
  assert(res.status === 200, '/about-us/company-story responds with HTTP 200');

  const bodyClean = cleanText(res.body);

  // Section 1: Hero
  assert(bodyClean.includes('About Us'), 'Hero title "About Us" present');
  assert(
    bodyClean.includes('Simplicity becomes the ultimate sophistication when ideas are expressed in their purest, most refined form.'),
    'Original hero quote present'
  );
  assert(res.body.includes('/brand/zoft-logo.png'), 'Official Zoftcorp logo present');
  assert(res.body.includes('/images/about/zoftcorp-about-1.png'), 'Geometric team composition image present');

  // Section 2: Breadcrumb
  assert(bodyClean.includes('Home / About Us / Company Story'), 'Breadcrumb navigation present');

  // Section 3: Original Company Introduction
  assert(
    bodyClean.includes('Data, AI, and Design – delivered with honesty, hard work, and trust.') ||
    bodyClean.includes('Data, AI, and Design — delivered with honesty, hard work, and trust.'),
    'Original company introduction heading present'
  );
  assert(
    bodyClean.includes('Zoftcorp Innovations is a boutique consulting firm founded by industry veterans with 20+ years of expertise.'),
    'Introduction paragraph 1 present'
  );
  assert(
    bodyClean.includes('Guided by our values of honesty, hard work, and trust, we deliver enterprise-grade consulting across Data, AI, and Cloud.'),
    'Introduction paragraph 1 continuation present'
  );
  assert(
    bodyClean.includes('Our Data & AI Services help organizations unlock value through strategy, engineering, modernization, and analytics, powered by our proprietary Datacops platform for resilience and precision.'),
    'Introduction paragraph 2 present'
  );
  assert(
    bodyClean.includes('Through ZoftStudio, we craft bold, consistent digital experiences that blend creativity with enterprise-grade design discipline — building trusted partnerships that last.'),
    'Introduction paragraph 3 present'
  );
  assert(res.body.includes('/images/about/zoftcorp-why.png'), 'Technology sphere image present');

  // Section 4: A Company Built on Experience and Trust
  assert(bodyClean.includes('A Company Built on Experience and Trust.'), 'Experience and Trust heading present');
  assert(bodyClean.includes('Honesty'), 'Honesty value card present');
  assert(bodyClean.includes('Transparent Communication'), 'Honesty tagline present');
  assert(bodyClean.includes('Clear, objective guidance on technology trade-offs, architecture decisions, and realistic outcomes.'), 'Honesty description present');
  assert(bodyClean.includes('Hard Work'), 'Hard Work value card present');
  assert(bodyClean.includes('Dedicated Engineering'), 'Hard Work tagline present');
  assert(bodyClean.includes('Rigorous technical execution and practical effort focused on real operational environments.'), 'Hard Work description present');
  assert(bodyClean.includes('Trust'), 'Trust value card present');
  assert(bodyClean.includes('Long-Term Relationships'), 'Trust tagline present');
  assert(bodyClean.includes('Building lasting partnerships by consistently delivering reliable, accountable technical work.'), 'Trust description present');

  // Section 5: Restored Mission, What We Do, Why Choose Us
  assert(bodyClean.includes('Our Mission'), 'Our Mission title present');
  assert(
    bodyClean.includes('Our mission is to empower businesses with tailored solutions that drive growth, optimize performance, and unlock new opportunities. We believe in a client-centric approach, where understanding your unique needs and challenges is the foundation of everything we do.'),
    'Our Mission authentic text present'
  );
  assert(bodyClean.includes('What We Do'), 'What We Do title present');
  assert(
    bodyClean.includes('At Zoftcorp, we provide end-to-end digital solutions designed to help businesses grow, innovate, and operate more efficiently. Our services range from custom software development, web and mobile app design, cloud integration, and digital marketing to IT consulting and automation.'),
    'What We Do authentic text present'
  );
  assert(bodyClean.includes('Why Choose Us?'), 'Why Choose Us? title present');

  // Section 6: Verify removal of unnecessary generated sections
  console.log('\n2. Verifying removal of unneeded generated sections...');
  assert(!bodyClean.includes('From Expertise to a Broader Technology Perspective'), 'Removed "From Expertise to a Broader Technology Perspective"');
  assert(!bodyClean.includes('Where Technology Meets Opportunity'), 'Removed "Where Technology Meets Opportunity"');
  assert(!bodyClean.includes('Understanding Comes First'), 'Removed "The ZOFT Approach / Understanding Comes First"');
  assert(!bodyClean.includes('Technology Meets Digital Experience.'), 'Removed redundant ZoftStudio standalone section');
  assert(!bodyClean.includes('Story Without a Fabricated Timeline'), 'Removed "Story Without a Fabricated Timeline"');
  assert(!bodyClean.includes('What Has Remained Constant'), 'Removed "What Has Remained Constant"');
  assert(!bodyClean.includes('Where ZOFT Stands Today'), 'Removed "Where ZOFT Stands Today"');
  assert(!bodyClean.includes('Experience Shapes Perspective. Perspective Shapes Better Technology.'), 'Removed redundant closing blockquote section');

  // Section 7: Non-regression check on core routes
  console.log('\n3. Testing non-regression on key routes...');
  const routesToTest = [
    '/',
    '/about-us',
    '/about-us/why-zoftcorp',
    '/consulting',
    '/offerings',
    '/insights/blogs',
    '/blog-2',
    '/contact',
  ];
  for (const route of routesToTest) {
    const r = await fetchPage(route);
    assert(r.status === 200, `${route} responds with HTTP 200`);
  }

  console.log('\n🎉 ALL TESTS PASSED! Company Story refinement 100% SUCCESSFUL.\n');
}

runTests().catch(err => {
  console.error('Fatal error running tests:', err);
  process.exit(1);
});
