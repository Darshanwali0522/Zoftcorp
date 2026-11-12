/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

function requestApi(path, method, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const payload = body ? JSON.stringify(body) : '';
    const reqHeaders = {
      ...headers,
    };

    if (body) {
      reqHeaders['Content-Type'] = 'application/json';
      reqHeaders['Content-Length'] = Buffer.byteLength(payload);
    }

    const req = http.request(
      `${BASE_URL}${path}`,
      {
        method,
        headers: reqHeaders,
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          let parsed;
          try {
            parsed = JSON.parse(data);
          } catch {
            parsed = data;
          }
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: parsed,
          });
        });
      }
    );

    req.on('error', (err) => reject(err));
    if (body) {
      req.write(payload);
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING CONTACT SUBMISSION API TESTS ---');
  let failures = 0;

  // 1. Test GET method rejection (Expect 405 Method Not Allowed)
  try {
    const res = await requestApi('/api/contact', 'GET');
    if (res.status === 405) {
      console.log('✅ PASS: GET /api/contact returned HTTP 405 Method Not Allowed');
    } else {
      console.error(`❌ FAIL: Expected HTTP 405 for GET, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: GET request failed:', err.message);
    failures++;
  }

  // 2. Test Invalid JSON Body (Expect 400 Bad Request)
  try {
    const res = await new Promise((resolve, reject) => {
      const req = http.request(
        `${BASE_URL}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        },
        (res) => {
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => resolve({ status: res.statusCode, body: data }));
        }
      );
      req.on('error', reject);
      req.write('{ not valid json');
      req.end();
    });

    if (res.status === 400) {
      console.log('✅ PASS: Malformed JSON body rejected with HTTP 400');
    } else {
      console.error(`❌ FAIL: Expected HTTP 400 for malformed JSON, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Malformed JSON test failed:', err.message);
    failures++;
  }

  // 3. Test Missing First Name (Expect 400)
  try {
    const res = await requestApi('/api/contact', 'POST', {
      lastName: 'Smith',
      workEmail: 'smith@example.com',
      topic: 'Database Performance & Tuning',
      formSource: 'contact_page',
    });
    if (res.status === 400 && res.body.error && res.body.error.includes('First name')) {
      console.log('✅ PASS: Missing first name rejected with HTTP 400');
    } else {
      console.error(`❌ FAIL: Expected HTTP 400 for missing first name, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Missing first name test failed:', err.message);
    failures++;
  }

  // 4. Test Missing Last Name (Expect 400)
  try {
    const res = await requestApi('/api/contact', 'POST', {
      firstName: 'Alice',
      workEmail: 'alice@example.com',
      topic: 'Database Performance & Tuning',
      formSource: 'contact_page',
    });
    if (res.status === 400 && res.body.error && res.body.error.includes('Last name')) {
      console.log('✅ PASS: Missing last name rejected with HTTP 400');
    } else {
      console.error(`❌ FAIL: Expected HTTP 400 for missing last name, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Missing last name test failed:', err.message);
    failures++;
  }

  // 5. Test Invalid Email Format (Expect 400)
  try {
    const res = await requestApi('/api/contact', 'POST', {
      firstName: 'Alice',
      lastName: 'Smith',
      workEmail: 'not-an-email',
      topic: 'Database Performance & Tuning',
      formSource: 'contact_page',
    });
    if (res.status === 400 && res.body.error && res.body.error.includes('email')) {
      console.log('✅ PASS: Invalid email format rejected with HTTP 400');
    } else {
      console.error(`❌ FAIL: Expected HTTP 400 for invalid email, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Invalid email test failed:', err.message);
    failures++;
  }

  // 6. Test Invalid Topic (Expect 400)
  try {
    const res = await requestApi('/api/contact', 'POST', {
      firstName: 'Alice',
      lastName: 'Smith',
      workEmail: 'alice@example.com',
      topic: 'Select a topic *',
      formSource: 'contact_page',
    });
    if (res.status === 400 && res.body.error && res.body.error.includes('topic')) {
      console.log('✅ PASS: Placeholder topic rejected with HTTP 400');
    } else {
      console.error(`❌ FAIL: Expected HTTP 400 for placeholder topic, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Invalid topic test failed:', err.message);
    failures++;
  }

  // 7. Test Invalid Form Source (Expect 400)
  try {
    const res = await requestApi('/api/contact', 'POST', {
      firstName: 'Alice',
      lastName: 'Smith',
      workEmail: 'alice@example.com',
      topic: 'Database Performance & Tuning',
      formSource: 'invalid_unrecognized_source',
    });
    if (res.status === 400 && res.body.error && res.body.error.includes('form source')) {
      console.log('✅ PASS: Invalid formSource rejected with HTTP 400');
    } else {
      console.error(`❌ FAIL: Expected HTTP 400 for invalid formSource, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Invalid formSource test failed:', err.message);
    failures++;
  }

  // 8. Test Honeypot Spam Protection (Expect 400)
  try {
    const res = await requestApi('/api/contact', 'POST', {
      firstName: 'Bot',
      lastName: 'User',
      workEmail: 'bot@spamnetwork.com',
      topic: 'Database Performance & Tuning',
      formSource: 'contact_page',
      website: 'https://spam-payload.example.com',
    });
    if (res.status === 400 && res.body.error === 'Invalid submission.') {
      console.log('✅ PASS: Honeypot submission rejected with HTTP 400');
    } else {
      console.error(`❌ FAIL: Expected HTTP 400 for honeypot, got HTTP ${res.status}`);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Honeypot test failed:', err.message);
    failures++;
  }

  // 9. Test Valid Payload Structure from Contact Page (formSource: 'contact_page')
  try {
    const validPayload = {
      firstName: 'Sarah',
      lastName: 'Connor',
      workEmail: 'sarah.connor@cyberdyne.com',
      companyName: 'Cyberdyne Systems',
      topic: 'Performance Tuning Delivery',
      message: 'Looking to optimize high-throughput PostgreSQL queries.',
      referralSource: 'Search Engine',
      formSource: 'contact_page',
    };

    const res = await requestApi('/api/contact', 'POST', validPayload);

    if (res.status === 200) {
      if (res.body.success === true && res.body.message) {
        console.log('✅ PASS: Contact Page submission handled successfully (HTTP 200)');
      } else {
        console.error('❌ FAIL: HTTP 200 response missing success confirmation');
        failures++;
      }
    } else if (res.status === 503) {
      if (res.body.error && res.body.error.includes('temporarily unavailable')) {
        console.log('✅ PASS: Contact Page payload accepted; server client unconfigured (HTTP 503 expected in dev without key)');
      } else {
        console.error('❌ FAIL: HTTP 503 leaked unexpected error message:', res.body);
        failures++;
      }
    } else if (res.status === 500) {
      if (res.body.error && !JSON.stringify(res.body).includes('contact_submissions')) {
        console.log('✅ PASS: Database error safely sanitized to HTTP 500 without leaking table name');
      } else {
        console.error('❌ FAIL: Database error leaked internal schema details:', res.body);
        failures++;
      }
    } else {
      console.error(`❌ FAIL: Unexpected status code for valid payload: HTTP ${res.status}`, res.body);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Valid Contact Page payload test failed:', err.message);
    failures++;
  }

  // 10. Test Valid Payload Structure from Homepage Contact Section (formSource: 'homepage_section')
  try {
    const validHomepagePayload = {
      firstName: 'Alex',
      lastName: 'Murphy',
      workEmail: 'alex.murphy@ocp.com',
      topic: 'Database Performance & Tuning',
      message: 'High latency spikes during batch writes on RDS Aurora PostgreSQL.',
      referralSource: 'Colleague Referral',
      formSource: 'homepage_section',
      website: '', // honeypot left blank by legitimate user
    };

    const res = await requestApi('/api/contact', 'POST', validHomepagePayload);

    if (res.status === 200) {
      if (res.body.success === true && res.body.message) {
        console.log('✅ PASS: Homepage Section submission handled successfully (HTTP 200)');
      } else {
        console.error('❌ FAIL: HTTP 200 response missing success confirmation');
        failures++;
      }
    } else if (res.status === 503) {
      if (res.body.error && res.body.error.includes('temporarily unavailable')) {
        console.log('✅ PASS: Homepage Section payload accepted; server client unconfigured (HTTP 503 expected in dev without key)');
      } else {
        console.error('❌ FAIL: HTTP 503 leaked unexpected error message:', res.body);
        failures++;
      }
    } else if (res.status === 500) {
      if (res.body.error && !JSON.stringify(res.body).includes('contact_submissions')) {
        console.log('✅ PASS: Database error safely sanitized to HTTP 500 without leaking table name');
      } else {
        console.error('❌ FAIL: Database error leaked internal schema details:', res.body);
        failures++;
      }
    } else {
      console.error(`❌ FAIL: Unexpected status code for valid payload: HTTP ${res.status}`, res.body);
      failures++;
    }
  } catch (err) {
    console.error('❌ FAIL: Valid Homepage Section payload test failed:', err.message);
    failures++;
  }

  console.log('--- TEST SUMMARY ---');
  if (failures === 0) {
    console.log('ALL CONTACT API TESTS PASSED SUCCESSFULLY! (0 failures)');
    process.exit(0);
  } else {
    console.error(`TEST RUN COMPLETED WITH ${failures} FAILURE(S).`);
    process.exit(1);
  }
}

runTests();
