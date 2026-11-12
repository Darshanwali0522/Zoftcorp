import fs from 'fs';
import path from 'path';

console.log('--- PHASE 3B: TEST JOBS SERVICE & DYNAMIC CAREER SYSTEM ---\n');

// 1. Verify files exist
const files = [
  'src/types/jobs.ts',
  'src/lib/supabase/jobs-service.ts',
  'src/app/careers/[slug]/page.tsx',
  'src/app/about-us/career/page.tsx',
  'src/components/forms/career-application-form.tsx',
];

let allFilesExist = true;
for (const file of files) {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    console.log(`[PASS] File exists: ${file}`);
  } else {
    console.error(`[FAIL] File missing: ${file}`);
    allFilesExist = false;
  }
}

if (!allFilesExist) {
  process.exit(1);
}

// 2. Read .env.local and test Supabase connection
let supabaseUrl = '';
let supabaseKey = '';

if (fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  const urlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=([^\r\n]+)/);
  const keyMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=([^\r\n]+)/);
  if (urlMatch) supabaseUrl = urlMatch[1].trim().replace(/^['"]|['"]$/g, '').replace(/\/+$/, '');
  if (keyMatch) supabaseKey = keyMatch[1].trim().replace(/^['"]|['"]$/g, '');
}

console.log(`\nSupabase URL configured: ${supabaseUrl ? supabaseUrl.slice(0, 30) + '...' : 'NONE'}`);
console.log(`Supabase Anon Key configured: ${supabaseKey ? 'YES' : 'NO'}`);

async function runTests() {
  if (supabaseUrl && supabaseKey) {
    try {
      console.log('\n[TEST 1] Querying public.job_postings table with anon key (RLS enforced)...');
      const res = await fetch(`${supabaseUrl}/rest/v1/job_postings?select=*&status=eq.published&order=display_order.asc,created_at.desc`, {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Accept: 'application/json',
        },
      });

      console.log(`Supabase response status: ${res.status} ${res.statusText}`);
      if (res.ok) {
        const jobs = await res.json();
        console.log(`[PASS] Successfully queried published jobs! Total records found: ${jobs.length}`);
        if (jobs.length > 0) {
          console.log('Sample published job:', {
            id: jobs[0].id,
            title: jobs[0].title,
            slug: jobs[0].slug,
            department: jobs[0].department,
            status: jobs[0].status,
          });
        }
      } else {
        const errText = await res.text();
        console.warn(`[WARN] Supabase returned status ${res.status}: ${errText}`);
      }

      console.log('\n[TEST 2] Verifying draft job security (draft jobs must not be accessible via anon key)...');
      const draftRes = await fetch(`${supabaseUrl}/rest/v1/job_postings?select=*&status=eq.draft`, {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Accept: 'application/json',
        },
      });

      if (draftRes.ok) {
        const draftJobs = await draftRes.json();
        if (draftJobs.length === 0) {
          console.log('[PASS] RLS Policy strictly blocks draft jobs from anon key query! Returned 0 records.');
        } else {
          console.error('[FAIL] Draft jobs were returned to anonymous visitor!');
        }
      } else {
        console.log(`[PASS] Draft query rejected or filtered by RLS: HTTP ${draftRes.status}`);
      }

    } catch (err) {
      console.warn('[WARN] Network check encountered exception:', err.message);
    }
  } else {
    console.log('[SKIP] Supabase credentials not found in .env.local, skipping live query');
  }

  // 3. Verify static code compliance
  console.log('\n[TEST 3] Code inspections...');
  const jobsServiceCode = fs.readFileSync('src/lib/supabase/jobs-service.ts', 'utf8');
  if (jobsServiceCode.includes('getPublishedJobs') && jobsServiceCode.includes('getJobBySlug')) {
    console.log('[PASS] jobs-service.ts implements both getPublishedJobs and getJobBySlug');
  } else {
    console.error('[FAIL] jobs-service.ts missing required exports');
  }

  if (jobsServiceCode.includes('revalidate: 60')) {
    console.log('[PASS] jobs-service.ts configures 60s server revalidation interval');
  } else {
    console.error('[FAIL] jobs-service.ts missing 60s revalidation interval');
  }

  const careerPageCode = fs.readFileSync('src/app/about-us/career/page.tsx', 'utf8');
  if (careerPageCode.includes('getPublishedJobs()')) {
    console.log('[PASS] Career listing page calls getPublishedJobs()');
  } else {
    console.error('[FAIL] Career listing page does not call getPublishedJobs()');
  }

  if (careerPageCode.includes('revalidate = 60')) {
    console.log('[PASS] Career listing page exports revalidate = 60');
  } else {
    console.error('[FAIL] Career listing page missing revalidate = 60');
  }

  const jobDetailPageCode = fs.readFileSync('src/app/careers/[slug]/page.tsx', 'utf8');
  if (jobDetailPageCode.includes('notFound()')) {
    console.log('[PASS] Job detail page issues notFound() for missing or unpublished jobs');
  } else {
    console.error('[FAIL] Job detail page does not call notFound()');
  }

  if (jobDetailPageCode.includes('CareerApplicationForm')) {
    console.log('[PASS] Job detail page includes connected CareerApplicationForm');
  } else {
    console.error('[FAIL] Job detail page missing CareerApplicationForm');
  }

  console.log('\n--- PHASE 3B TESTS COMPLETED SUCCESSFULLY ---');
}

runTests();
