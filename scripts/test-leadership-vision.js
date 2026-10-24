/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

const PORT = 3002;
const BASE_URL = `http://localhost:${PORT}`;

function fetch(urlPath) {
  return new Promise((resolve, reject) => {
    http
      .get(`${BASE_URL}${urlPath}`, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve({ status: res.statusCode, data }));
      })
      .on('error', (err) => reject(err));
  });
}

async function runTests() {
  console.log('--- STARTING LEADERSHIP & VISION/MISSION REGRESSION TESTS ---');
  let failures = 0;

  // 1. Verify HTTP 200 on Company routes
  const routes = [
    '/about-us',
    '/about-us/leadership',
    '/about-us/vision-mission',
    '/about-us/company-story',
    '/',
    '/consulting/cloud-finops',
    '/offerings/performance-tuning-delivery',
    '/consulting/compliance-governance',
    '/offerings/managed-dba-services',
    '/offerings/database-migrations-and-transformations',
  ];

  for (const route of routes) {
    try {
      const res = await fetch(route);
      if (res.status === 200) {
        console.log(`[PASS] ${route} returned HTTP 200`);
      } else {
        console.error(`[FAIL] ${route} returned HTTP ${res.status}`);
        failures++;
      }
    } catch (err) {
      console.error(`[ERROR] Failed to fetch ${route}:`, err.message);
      failures++;
    }
  }

  // 2. Verify Leadership content on /about-us/leadership and /about-us
  const requiredLeaders = [
    { name: 'Shruthi', role: 'COO' },
    { name: 'Praveen Kumar', role: 'Database FinOps' },
    { name: 'Gopika', role: 'Business Development - Partner Sales' },
    { name: 'Prabhu Vijayakumar', role: 'Legal Consultant - DPDP Compliance' },
    { name: 'Aravind', role: 'Legal Consultant - DPDP Compliance' },
  ];

  for (const page of ['/about-us/leadership', '/about-us']) {
    try {
      const { data } = await fetch(page);
      for (const leader of requiredLeaders) {
        if (data.includes(leader.name) && data.includes(leader.role)) {
          console.log(`[PASS] ${page} contains "${leader.name} — ${leader.role}"`);
        } else {
          console.error(`[FAIL] ${page} MISSING "${leader.name} — ${leader.role}"`);
          failures++;
        }
      }
    } catch (err) {
      console.error(`[ERROR] Could not test leadership on ${page}:`, err.message);
      failures++;
    }
  }

  // 3. Verify Vision & Mission content
  for (const page of ['/about-us/vision-mission', '/about-us']) {
    try {
      const { data } = await fetch(page);
      const checks = [
        'Vision &amp; Mission',
        'Our Mission',
        'Our Vision',
        'Our mission is to empower businesses with tailored solutions',
      ];
      for (const text of checks) {
        if (data.includes(text)) {
          console.log(`[PASS] ${page} contains "${text}"`);
        } else {
          console.error(`[FAIL] ${page} MISSING "${text}"`);
          failures++;
        }
      }
    } catch (err) {
      console.error(`[ERROR] Could not test vision/mission on ${page}:`, err.message);
      failures++;
    }
  }

  // 4. Verify Navigation links exist in homepage layout
  try {
    const { data: homeData } = await fetch('/');
    if (homeData.includes('/about-us/leadership')) {
      console.log('[PASS] Header/Footer includes link to /about-us/leadership');
    } else {
      console.error('[FAIL] Header/Footer MISSING link to /about-us/leadership');
      failures++;
    }

    if (homeData.includes('/about-us/vision-mission')) {
      console.log('[PASS] Header/Footer includes link to /about-us/vision-mission');
    } else {
      console.error('[FAIL] Header/Footer MISSING link to /about-us/vision-mission');
      failures++;
    }
  } catch (err) {
    console.error('[ERROR] Could not test navigation on homepage:', err.message);
    failures++;
  }

  console.log('--- TEST SUMMARY ---');
  if (failures === 0) {
    console.log('ALL TESTS PASSED SUCCESSFULLY! (0 failures)');
    process.exit(0);
  } else {
    console.error(`TEST RUN COMPLETED WITH ${failures} FAILURE(S).`);
    process.exit(1);
  }
}

runTests();
