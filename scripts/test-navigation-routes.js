/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

const PORT = 3002;
const BASE_URL = `http://localhost:${PORT}`;

function fetchRaw(urlPath) {
  return new Promise((resolve, reject) => {
    http
      .get(`${BASE_URL}${urlPath}`, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () =>
          resolve({
            status: res.statusCode,
            location: res.headers.location,
            data,
          })
        );
      })
      .on('error', (err) => reject(err));
  });
}

function fetchFollow(urlPath, maxRedirects = 3) {
  return new Promise((resolve, reject) => {
    let currentPath = urlPath;
    let redirectsCount = 0;

    function step(target) {
      http
        .get(`${BASE_URL}${target}`, (res) => {
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => {
            if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location) {
              if (redirectsCount >= maxRedirects) {
                return reject(new Error('Too many redirects'));
              }
              redirectsCount++;
              let nextLoc = res.headers.location;
              if (nextLoc.startsWith(BASE_URL)) {
                nextLoc = nextLoc.substring(BASE_URL.length);
              }
              return step(nextLoc);
            }
            resolve({
              status: res.statusCode,
              finalPath: target,
              redirectsCount,
              data,
            });
          });
        })
        .on('error', reject);
    }

    step(currentPath);
  });
}

async function runTests() {
  console.log('--- STARTING MODULE 7 NAVIGATION & ROUTE HARMONIZATION TESTS ---');
  let failures = 0;

  // 1. Verify Expected Redirect or 200 on /careers and /insights/events
  const redirectEndpoints = [
    {
      source: '/careers',
      target: '/about-us/career',
      desc: 'Top-level Careers redirect',
    },
    {
      source: '/insights/events',
      target: '/insights/webinar',
      desc: 'Events alias redirect',
    },
  ];

  for (const endpoint of redirectEndpoints) {
    try {
      const raw = await fetchRaw(endpoint.source);
      if ([307, 308, 301, 302].includes(raw.status)) {
        console.log(
          `[PASS] ${endpoint.source} returned HTTP ${raw.status} -> Location: ${raw.location}`
        );
        if (raw.location && raw.location.includes(endpoint.target)) {
          console.log(`[PASS] Redirect target correctly points to ${endpoint.target}`);
        } else {
          console.error(`[FAIL] Redirect target mismatch: expected ${endpoint.target}, got ${raw.location}`);
          failures++;
        }
      } else if (raw.status === 200) {
        console.log(`[PASS] ${endpoint.source} returned direct HTTP 200 (route alias)`);
      } else {
        console.error(`[FAIL] ${endpoint.source} returned unexpected status HTTP ${raw.status}`);
        failures++;
      }

      // Verify followed redirect resolves to 200 OK
      const followed = await fetchFollow(endpoint.source);
      if (followed.status === 200) {
        console.log(
          `[PASS] Following ${endpoint.source} resolved to ${followed.finalPath} with HTTP 200 OK`
        );
      } else {
        console.error(
          `[FAIL] Following ${endpoint.source} failed with HTTP ${followed.status}`
        );
        failures++;
      }
    } catch (err) {
      console.error(`[ERROR] Failed testing ${endpoint.source}:`, err.message);
      failures++;
    }
  }

  // 2. Verify Canonical & Target Routes return HTTP 200
  const canonicalRoutes = [
    '/about-us/career',
    '/insights/webinar',
    '/consulting/cloud-finops',
    '/consulting/compliance-governance',
    '/offerings/performance-tuning-delivery',
    '/offerings/managed-dba-services',
    '/offerings/database-migrations-and-transformations',
    '/about-us/leadership',
    '/about-us/vision-mission',
  ];

  for (const route of canonicalRoutes) {
    try {
      const res = await fetchRaw(route);
      if (res.status === 200) {
        console.log(`[PASS] Canonical route ${route} returned HTTP 200 OK`);
      } else {
        console.error(`[FAIL] Canonical route ${route} returned HTTP ${res.status}`);
        failures++;
      }
    } catch (err) {
      console.error(`[ERROR] Failed to fetch ${route}:`, err.message);
      failures++;
    }
  }

  // 3. Verify HTML contents of Homepage layout for updated visible navigation labels
  try {
    const { data: homeHtml } = await fetchRaw('/');
    const requiredLabels = [
      'Cloud &amp; Data FinOps',
      'Performance Tuning',
      'Resilience and Compliance',
      'DPDP Assessment',
      'Specialized Managed Services',
      'Database Migrations and Transformations',
      'Vector DB Integration',
      'Data Engineering and Analytics',
      'Events',
      'Careers',
    ];

    for (const label of requiredLabels) {
      const unescaped = label.replace(/&amp;/g, '&');
      if (homeHtml.includes(label) || homeHtml.includes(unescaped)) {
        console.log(`[PASS] Navigation contains visible label: "${unescaped}"`);
      } else {
        console.error(`[FAIL] Navigation MISSING visible label: "${unescaped}"`);
        failures++;
      }
    }
  } catch (err) {
    console.error('[ERROR] Failed testing homepage navigation labels:', err.message);
    failures++;
  }

  console.log('--- TEST SUMMARY ---');
  if (failures === 0) {
    console.log('ALL MODULE 7 TESTS PASSED SUCCESSFULLY! (0 failures)');
    process.exit(0);
  } else {
    console.error(`TEST RUN COMPLETED WITH ${failures} FAILURE(S).`);
    process.exit(1);
  }
}

runTests();
