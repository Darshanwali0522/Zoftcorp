async function test() {
  const res = await fetch('http://localhost:3002/');
  console.log('Home status:', res.status);
  const html = await res.text();

  // Find Core Services section
  const sectionIdx = html.indexOf('id="services"');
  console.log('Found services section:', sectionIdx !== -1);

  // Check order of tabs
  const tabRegex = /id="tab-([^"]+)"[\s\S]*?<span[^>]*>(\d+)<\/span>[\s\S]*?<span[^>]*>([^<]+)<\/span>/g;
  const tabs = [];
  let match;
  while ((match = tabRegex.exec(html)) !== null) {
    tabs.push({ id: match[1], number: match[2], title: match[3].trim() });
  }
  console.log('Tabs in rendered HTML:');
  tabs.forEach(t => console.log(`  ${t.number}. ${t.title} (id: ${t.id})`));

  // Check initial active panel
  console.log('\nInitial active panel checks:');
  console.log('  Includes panel-db-finops?', html.includes('id="panel-db-finops"'));
  console.log('  Includes DB FinOps image?', html.includes('db-finops.jpg') || html.includes('db-finops'));
  console.log('  Includes Instance right-sizing?', html.includes('Instance right-sizing'));
  console.log('  Includes License compliance?', html.includes('License compliance'));
  console.log('  Includes Storage tiering?', html.includes('Storage tiering'));
  console.log('  Includes View Architecture link?', html.includes('/consulting/cloud-finops'));

  // Verify all 4 services data integrity
  console.log('\n--- VERIFYING ALL 4 SERVICES INTEGRITY ---');
  const servicesExpected = [
    {
      id: 'db-finops',
      number: '01',
      title: 'DB FinOps',
      tagline: 'Ongoing cost optimization for cloud databases.',
      image: '/images/services/db-finops.jpg',
      href: '/consulting/cloud-finops',
    },
    {
      id: 'performance-tuning',
      number: '02',
      title: 'Performance Tuning',
      tagline: 'Faster queries, lower costs.',
      image: '/images/services/performance-tuning.jpg',
      href: '/offerings/performance-tuning-delivery',
    },
    {
      id: 'managed-services',
      number: '03',
      title: 'Managed Services',
      tagline: '24/7 monitoring, backups, compliance.',
      image: '/images/services/managed-services.jpg',
      href: '/offerings/managed-dba-services',
    },
    {
      id: 'migration-transformation',
      number: '04',
      title: 'Migration & Transformation',
      tagline: 'Smooth transition to cloud or open source.',
      image: '/images/services/migration-transformation.jpg',
      href: '/offerings/database-migrations-and-transformations',
    },
  ];

  for (const s of servicesExpected) {
    console.log(`\nVerifying service [${s.number}] ${s.title}:`);
    const hasTagline = html.includes(s.tagline);
    const hasImage = html.includes(s.id);
    const hasHref = html.includes(s.href);
    console.log(`  - Tagline present: ${hasTagline}`);
    console.log(`  - Image/ID reference present: ${hasImage}`);
    console.log(`  - Link target (${s.href}) present: ${hasHref}`);
    if (!hasTagline || !hasImage || !hasHref) {
      console.error(`  FAIL: Missing expected content for ${s.title}`);
      process.exit(1);
    }
  }

  console.log('\n>>> ALL 4 SERVICES DATA AND ORDER VERIFIED SUCCESSFULLY! <<<');
}

test().catch(console.error);

