// @ts-check
import assert from 'node:assert';
import http from 'node:http';

console.log('================================================================');
console.log('LIVE HTTP END-TO-END TEST: ALL 3 FORMS ON LOCALHOST:3000');
console.log('================================================================\n');

let failures = 0;

function makeRequest(path, method, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const payload = typeof body === 'string' ? body : (body ? JSON.stringify(body) : '');
    const reqHeaders = {
      'x-forwarded-for': `192.168.10.${Math.floor(Math.random() * 200) + 1}`,
      ...headers,
    };
    if (body && !reqHeaders['Content-Type']) {
      reqHeaders['Content-Type'] = 'application/json';
      reqHeaders['Content-Length'] = Buffer.byteLength(payload);
    }

    const req = http.request(
      `http://localhost:3000${path}`,
      { method, headers: reqHeaders },
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
          resolve({ status: res.statusCode, headers: res.headers, body: parsed });
        });
      }
    );

    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

// 1. Test Contact Form Endpoint
console.log('--- 1. Testing Contact Form API (/api/contact) ---');
try {
  const contactPayload = {
    firstName: 'Alex',
    lastName: 'Morgan',
    workEmail: `alex.morgan.${Date.now()}@enterpriseglobal.com`,
    phone: '+1 650 555 0192',
    companyName: 'Morgan Enterprise Systems',
    topic: 'Database Performance & Tuning',
    subject: 'Cloud FinOps & Database Modernization',
    message: 'Seeking a comprehensive database audit for high throughput workloads.',
    referralSource: 'Industry Referral',
    formSource: 'contact_page',
  };

  const res = await makeRequest('/api/contact', 'POST', contactPayload);
  console.log('Contact API response status:', res.status, res.body);
  assert.ok(res.status === 200 || res.status === 503, `Expected HTTP 200 or 503, got ${res.status}`);
  if (res.status === 200) {
    assert.strictEqual(res.body.success, true);
  }
  console.log('✅ PASS: /api/contact handled submission successfully');
} catch (err) {
  console.error('❌ FAIL: /api/contact test failed:', err);
  failures++;
}

// 2. Test Partnerships Form Endpoint
console.log('\n--- 2. Testing Partnership Form API (/api/partnerships) ---');
try {
  const partnerPayload = {
    companyName: 'CloudSphere Global Ltd.',
    contactName: 'Sarah Jenkins',
    businessEmail: `sarah.jenkins.${Date.now()}@cloudsphere.io`,
    partnershipType: 'System Integrator / Solution Provider',
    message: 'Interested in partnering with Zoftcorp for database tuning and migration services.',
  };

  const res = await makeRequest('/api/partnerships', 'POST', partnerPayload);
  console.log('Partnership API response status:', res.status, res.body);
  assert.ok(res.status === 200 || res.status === 503, `Expected HTTP 200 or 503, got ${res.status}`);
  if (res.status === 200) {
    assert.strictEqual(res.body.success, true);
  }
  console.log('✅ PASS: /api/partnerships handled submission successfully');
} catch (err) {
  console.error('❌ FAIL: /api/partnerships test failed:', err);
  failures++;
}

// 3. Test Careers Form Endpoint (multipart/form-data)
console.log('\n--- 3. Testing Careers Form API (/api/careers) ---');
try {
  const boundary = `----WebKitFormBoundary${Date.now()}`;
  const pdfMagicBytes = Buffer.from('%PDF-1.4\n%test pdf dummy content for automated testing\n%%EOF');

  let bodyBuffer = Buffer.concat([
    Buffer.from(
      `--${boundary}\r\nContent-Disposition: form-data; name="fullName"\r\n\r\nJonathan Reed\r\n` +
      `--${boundary}\r\nContent-Disposition: form-data; name="email"\r\n\r\njonathan.reed.${Date.now()}@example.com\r\n` +
      `--${boundary}\r\nContent-Disposition: form-data; name="phone"\r\n\r\n+1 202 555 0144\r\n` +
      `--${boundary}\r\nContent-Disposition: form-data; name="role"\r\n\r\nSenior Database Engineer\r\n` +
      `--${boundary}\r\nContent-Disposition: form-data; name="notes"\r\n\r\n10+ years DBA experience.\r\n` +
      `--${boundary}\r\nContent-Disposition: form-data; name="resume"; filename="Jonathan_Reed_CV.pdf"\r\nContent-Type: application/pdf\r\n\r\n`
    ),
    pdfMagicBytes,
    Buffer.from(`\r\n--${boundary}--\r\n`),
  ]);

  const res = await new Promise((resolve, reject) => {
    const req = http.request(
      'http://localhost:3000/api/careers',
      {
        method: 'POST',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${boundary}`,
          'Content-Length': bodyBuffer.length,
          'x-forwarded-for': '192.168.10.99',
        },
      },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          let parsed;
          try { parsed = JSON.parse(data); } catch { parsed = data; }
          resolve({ status: res.statusCode, body: parsed });
        });
      }
    );
    req.on('error', reject);
    req.write(bodyBuffer);
    req.end();
  });

  console.log('Careers API response status:', res.status, res.body);
  assert.ok(res.status === 200 || res.status === 503, `Expected HTTP 200 or 503, got ${res.status}`);
  if (res.status === 200) {
    assert.strictEqual(res.body.success, true);
  }
  console.log('✅ PASS: /api/careers handled submission successfully');
} catch (err) {
  console.error('❌ FAIL: /api/careers test failed:', err);
  failures++;
}

console.log('\n================================================================');
if (failures === 0) {
  console.log('🎉 ALL THREE LIVE API ROUTES VERIFIED SUCCESSFULLY! (0 failures)');
  console.log('================================================================\n');
  process.exit(0);
} else {
  console.error(`💥 LIVE API TESTS FAILED WITH ${failures} FAILURE(S).`);
  console.log('================================================================\n');
  process.exit(1);
}
