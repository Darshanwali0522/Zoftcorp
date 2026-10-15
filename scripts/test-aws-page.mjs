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
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
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
  console.log('--- Starting AWS Partnership Page Verification Suite ---\n');

  console.log('1. Testing route HTTP 200 responses...');
  const resAws = await fetchPage('/about-us/partnerships/aws');
  assert(resAws.status === 200, '/about-us/partnerships/aws responds with HTTP 200');

  const resAws2 = await fetchPage('/aws-2');
  assert(resAws2.status === 200, '/aws-2 responds with HTTP 200');

  const bodyClean = cleanText(resAws.body);

  console.log('\n2. Testing Section 2: Hero Section Identity & Content...');
  assert(bodyClean.includes('AWS Cloud Consulting Services'), 'Main heading "AWS Cloud Consulting Services" present');
  assert(
    bodyClean.includes('Accelerate your business with secure, scalable, and cost-efficient cloud solutions on AWS'),
    'Supporting description present'
  );
  assert(bodyClean.includes('Talk to Our AWS Experts'), 'CTA button "Talk to Our AWS Experts" present');
  assert(bodyClean.includes('Home') && bodyClean.includes('AWS'), 'Breadcrumb "Home / AWS" present');
  assert(bodyClean.includes('Scalable Infrastructure'), 'Floating node: Scalable Infrastructure present');
  assert(bodyClean.includes('Security & Compliance'), 'Floating node: Security & Compliance present');
  assert(bodyClean.includes('Cost Optimization'), 'Floating node: Cost Optimization present');
  assert(bodyClean.includes('Operational Excellence'), 'Floating node: Operational Excellence present');
  assert(resAws.body.includes('/platforms/aws-white.svg') || resAws.body.includes('/platforms/aws.svg'), 'AWS logo present in hero');

  console.log('\n3. Testing Section 3: "Why AWS Cloud Consulting Matters?" & Credibility Proof Points...');
  assert(bodyClean.includes('Why AWS Cloud Consulting Matters?'), 'Heading "Why AWS Cloud Consulting Matters?" present');
  assert(
    bodyClean.includes("Amazon Web Services (AWS) is the world's leading cloud platform, offering unmatched scalability, flexibility, and innovation"),
    'Original Why Matters body text present'
  );
  assert(
    bodyClean.includes("Our AWS Cloud Consulting Services help businesses design, migrate, and optimize their cloud environments"),
    'Why Matters consulting value proposition present'
  );
  assert(bodyClean.includes('15+') && bodyClean.includes('Certified AWS Cloud Architects'), 'Credibility metric "15+ Certified AWS Cloud Architects" present');
  assert(
    bodyClean.includes('100+') &&
    (bodyClean.includes('successful cloud consulting and migration projects') ||
      bodyClean.includes('Successful cloud consulting and migration projects')),
    'Credibility metric "100+ projects" present'
  );
  assert(bodyClean.includes('Transparent SOWs, pricing sheets, and governance models for client trust'), 'Credibility claim "Transparent SOWs..." present');
  assert(bodyClean.includes('Tailored solutions') && bodyClean.includes('enterprises'), 'Credibility claim "Tailored solutions for SMEs and enterprises" present');

  console.log('\n4. Testing Section 4: Key Benefits (Six Original Benefits)...');
  assert(bodyClean.includes('Key Benefits of Our AWS Consulting Services'), 'Heading "Key Benefits of Our AWS Consulting Services" present');
  // Benefit 01
  assert(bodyClean.includes('01') && bodyClean.includes('Cloud Strategy & Roadmap'), 'Benefit 01: Cloud Strategy & Roadmap present');
  assert(bodyClean.includes('Tailored AWS adoption plans aligned with business goals'), 'Benefit 01 description present');
  // Benefit 02
  assert(bodyClean.includes('02') && bodyClean.includes('Seamless Migration'), 'Benefit 02: Seamless Migration present');
  assert(bodyClean.includes('Move workloads from on-premises or other clouds to AWS with minimal downtime'), 'Benefit 02 description present');
  // Benefit 03
  assert(bodyClean.includes('03') && bodyClean.includes('Performance Optimization'), 'Benefit 03: Performance Optimization present');
  assert(bodyClean.includes('Fine-tune compute, storage, and networking for maximum efficiency'), 'Benefit 03 description present');
  // Benefit 04
  assert(bodyClean.includes('04') && bodyClean.includes('Cost Management (FinOps)'), 'Benefit 04: Cost Management (FinOps) present');
  assert(bodyClean.includes('Reduce AWS expenses with rightsizing, reserved instances, and governance frameworks'), 'Benefit 04 description present');
  // Benefit 05
  assert(bodyClean.includes('05') && bodyClean.includes('Security & Compliance'), 'Benefit 05: Security & Compliance present');
  assert(bodyClean.includes('Implement AWS-native security controls to meet GDPR, HIPAA, and PCI-DSS standards'), 'Benefit 05 description present');
  // Benefit 06
  assert(bodyClean.includes('06') && bodyClean.includes('Innovation Enablement'), 'Benefit 06: Innovation Enablement present');
  assert(bodyClean.includes('Leverage AI, analytics, and serverless computing with AWS-native services'), 'Benefit 06 description present');

  console.log('\n5. Testing Section 5: Our AWS Consulting Process (Five Stages)...');
  assert(bodyClean.includes('Our AWS Consulting Process'), 'Heading "Our AWS Consulting Process" present');
  assert(bodyClean.includes('A structured approach to deliver secure, scalable, and future-ready cloud solutions on AWS'), 'Process supporting text present');
  // Stage 01
  assert(bodyClean.includes('Assessment & Planning'), 'Stage 01: Assessment & Planning present');
  assert(bodyClean.includes('Evaluate current environment, business goals, and cloud readiness'), 'Stage 01 description present');
  // Stage 02
  assert(bodyClean.includes('Architecture Design'), 'Stage 02: Architecture Design present');
  assert(bodyClean.includes('Build secure, scalable and cost-optimized AWS architectures'), 'Stage 02 description present');
  // Stage 03
  assert(bodyClean.includes('Migration & Deployment'), 'Stage 03: Migration & Deployment present');
  assert(bodyClean.includes('Migrate workloads with minimal downtime and operational disruption'), 'Stage 03 description present');
  // Stage 04
  assert(bodyClean.includes('Optimization & Governance'), 'Stage 04: Optimization & Governance present');
  assert(bodyClean.includes('Implement FinOps, monitoring, and compliance frameworks for long-term efficiency'), 'Stage 04 description present');
  // Stage 05
  assert(bodyClean.includes('Continuous Advisory'), 'Stage 05: Continuous Advisory present');
  assert(bodyClean.includes('Provide ongoing support, innovation guidance, and performance tuning'), 'Stage 05 description present');

  console.log('\n6. Testing Section 6: AWS Services We Specialize In...');
  assert(bodyClean.includes('AWS Services We Specialize In'), 'Heading "AWS Services We Specialize In" present');
  assert(bodyClean.includes('Amazon EC2 & Networking'), 'Service 1: Amazon EC2 & Networking present');
  assert(bodyClean.includes('Amazon RDS, Aurora & DynamoDB'), 'Service 2: Amazon RDS, Aurora & DynamoDB present');
  assert(bodyClean.includes('Amazon S3 & Storage Optimization'), 'Service 3: Amazon S3 & Storage Optimization present');
  assert(bodyClean.includes('AWS Lambda & Serverless Architectures'), 'Service 4: AWS Lambda & Serverless Architectures present');
  assert(bodyClean.includes('Amazon Redshift & Data Analytics'), 'Service 5: Amazon Redshift & Data Analytics present');
  assert(bodyClean.includes('AWS Security Hub & Identity Management'), 'Service 6: AWS Security Hub & Identity Management present');

  console.log('\n7. Testing Section 7: Closing Call-to-Action...');
  assert(bodyClean.includes('Ready to Accelerate Your AWS Cloud Journey?'), 'Closing CTA heading present');
  assert(bodyClean.includes('/contact?service=aws-consulting'), 'Hero and CTA link to contact flow');

  console.log('\n8. Non-regression check on sibling partnership and core routes...');
  const routesToTest = [
    '/about-us/partnerships',
    '/about-us/partnerships/azure',
    '/about-us/partnerships/gcp',
    '/about-us/partnerships/oracle',
    '/about-us/company-story',
    '/consulting',
    '/offerings',
    '/insights/blogs',
  ];
  for (const route of routesToTest) {
    const r = await fetchPage(route);
    assert(r.status === 200, `${route} responds with HTTP 200`);
  }

  console.log('\n🎉 ALL TESTS PASSED! AWS Partnership Page Implementation 100% SUCCESSFUL.\n');
}

runTests().catch(err => {
  console.error('Fatal error running tests:', err);
  process.exit(1);
});
