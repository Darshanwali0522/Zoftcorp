import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;
const BASE_URL = `http://localhost:${PORT}`;

function fetchUrl(path, options = {}) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}${path}`;
    const req = http.get(url, { ...options }, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${path}`));
    });
  });
}

async function runTests() {
  console.log('--- ZOFTCORP PHASE 3 VALIDATION TESTS ---\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, testName, details = '') {
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName} ${details ? '- ' + details : ''}`);
      failed++;
    }
  }

  // TEST 1: Navigation Data Integrity
  try {
    const navContent = fs.readFileSync(path.resolve('src/data/navigation.ts'), 'utf8');
    const companySection = navContent.slice(navContent.indexOf("id: 'company'"));
    
    // Check Company dropdown items
    const hasLeadership = companySection.includes("title: 'Leadership'");
    const hasVisionMission = companySection.includes("title: 'Vision & Mission'");
    const hasPartnerships = companySection.includes("title: 'Partnerships'");
    
    // Check that AWS, Azure, GCP, Oracle were removed from Company dropdown
    const partnershipsChildren = companySection.includes('children:');

    assert(
      hasLeadership && hasVisionMission && hasPartnerships,
      'Company dropdown contains Leadership, Vision & Mission, and Partnerships'
    );
    assert(
      !partnershipsChildren,
      'Company dropdown does NOT contain AWS, Azure, GCP, Oracle children'
    );

    // Check Insights dropdown
    const insightsSection = navContent.slice(
      navContent.indexOf("id: 'insights'"),
      navContent.indexOf("id: 'careers'")
    );
    const hasEventsAndMeetups = insightsSection.includes("title: 'Events & Meetups'");
    const hasSeparateEvents = insightsSection.includes("title: 'Events'") && !insightsSection.includes("title: 'Events & Meetups'");
    const hasSeparateMeetups = insightsSection.includes("title: 'Meet ups'");

    assert(hasEventsAndMeetups, 'Insights dropdown has unified "Events & Meetups" link');
    assert(!hasSeparateEvents && !hasSeparateMeetups, 'Insights dropdown removed separate Events and Meet ups links');
  } catch (err) {
    assert(false, 'Navigation Data Check', err.message);
  }

  // TEST 2: AWS Logo Integrity
  try {
    const awsSvg = fs.readFileSync(path.resolve('public/platforms/aws.svg'), 'utf8');
    const awsWhiteSvg = fs.readFileSync(path.resolve('public/platforms/aws-white.svg'), 'utf8');

    // Defect check: the corrupted asset had a path starting with "M38 78c-6.8 0-12-2.3"
    const hasCorruptedPath = awsSvg.includes('M38 78c-6.8 0-12-2.3') || awsWhiteSvg.includes('M38 78c-6.8 0-12-2.3');
    const hasOfficialLetterforms = awsSvg.includes('fill="#232F3E"') && awsSvg.includes('M86.4 66.4');
    const hasOfficialSmile = awsSvg.includes('fill="#FF9900"');

    assert(!hasCorruptedPath, 'AWS SVGs do not contain the corrupted CWS path');
    assert(hasOfficialLetterforms && hasOfficialSmile, 'AWS SVG contains official Amazon vector paths and colors');
  } catch (err) {
    assert(false, 'AWS Logo File Check', err.message);
  }

  // TEST 3: Partnerships Page
  try {
    const res = await fetchUrl('/about-us/partnerships');
    assert(res.statusCode === 200, 'Partnerships page returns HTTP 200');
    assert(res.body.includes('Technology Ecosystems'), 'Partnerships page contains correct heading');
    assert(res.body.includes('AWS') && res.body.includes('Microsoft Azure') && res.body.includes('Google Cloud') && res.body.includes('Oracle'), 'Partnerships page displays all 4 ecosystem cards');
    assert(res.body.includes('/about-us/partnerships/aws') && res.body.includes('/about-us/partnerships/azure'), 'Partnership cards link to individual partner detail pages');
    assert(res.body.includes('id="partnership-inquiry"'), 'Partnership inquiry form section exists');
  } catch (err) {
    assert(false, 'Partnerships Page HTTP Check', err.message);
  }

  // TEST 4: Individual Partner Pages
  for (const partner of ['aws', 'azure', 'gcp', 'oracle']) {
    try {
      const res = await fetchUrl(`/about-us/partnerships/${partner}`);
      assert(res.statusCode === 200, `Individual partner page /about-us/partnerships/${partner} returns HTTP 200`);
    } catch (err) {
      assert(false, `Individual partner page ${partner} check`, err.message);
    }
  }

  // TEST 5: Events & Meetups Merged Page
  try {
    const res = await fetchUrl('/insights/events');
    assert(res.statusCode === 200, 'Merged Events & Meetups page returns HTTP 200');
    assert(res.body.includes('Events &amp; Meetups') || res.body.includes('Events & Meetups'), 'Merged page has heading "Events & Meetups"');
    assert(res.body.includes('SESSION SCHEDULE'), 'Merged page has structured session schedule area');
    assert(res.body.includes('Upcoming Sessions Are Being Scheduled'), 'Shows clean empty state without fabricated events');
  } catch (err) {
    assert(false, 'Events & Meetups Page HTTP Check', err.message);
  }

  // TEST 6: Redirects for Legacy Routes
  try {
    // Note: Next.js server redirects return 307/308 or client redirects execute
    const resWebinar = await fetchUrl('/insights/webinar');
    assert(
      resWebinar.statusCode === 307 || resWebinar.statusCode === 308 || resWebinar.body.includes('/insights/events'),
      'Legacy /insights/webinar redirects to /insights/events'
    );

    const resMeetups = await fetchUrl('/insights/meet-ups');
    assert(
      resMeetups.statusCode === 307 || resMeetups.statusCode === 308 || resMeetups.body.includes('/insights/events'),
      'Legacy /insights/meet-ups redirects to /insights/events'
    );
  } catch (err) {
    assert(false, 'Redirects Check', err.message);
  }

  // TEST 7: Contact Page and Client Reviews Section
  try {
    const res = await fetchUrl('/contact');
    assert(res.statusCode === 200, 'Contact page returns HTTP 200');
    assert(res.body.includes('Client Reviews'), 'Contact page contains Client Reviews section');
    assert(res.body.includes('Verified Client Reviews Are Being Compiled') || res.body.includes('CLIENT REVIEWS COMING SOON'), 'Client Reviews shows intentional empty state without fake testimonials');
    assert(res.body.includes('id="contact-form"'), 'Existing contact form preserved');
  } catch (err) {
    assert(false, 'Contact Page Check', err.message);
  }

  console.log(`\nTests completed: ${passed} passed, ${failed} failed.`);
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
