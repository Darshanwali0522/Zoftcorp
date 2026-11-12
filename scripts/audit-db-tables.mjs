// @ts-check
import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';

// Load .env.local manually to ensure exact environment
const envFile = fs.readFileSync('.env.local', 'utf-8');
const env = {};
for (const line of envFile.split('\n')) {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = (match[2] || '').trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    env[match[1]] = value;
  }
}

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

console.log('--- SUPABASE CONFIGURATION AUDIT ---');
console.log('Supabase URL present:', Boolean(supabaseUrl));
console.log('Service Role Key present:', Boolean(serviceRoleKey));

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function audit() {
  // 1. Check contact_submissions
  console.log('\n--- 1. TABLE: public.contact_submissions ---');
  const { data: contacts, error: contactErr, count: contactCount } = await supabase
    .from('contact_submissions')
    .select('id, created_at, first_name, last_name, work_email, topic, form_source, metadata', { count: 'exact' })
    .order('created_at', { ascending: false })
    .limit(10);

  if (contactErr) {
    console.log('Exists: NO or inaccessible');
    console.log('Error:', contactErr.message);
  } else {
    console.log('Exists: YES');
    console.log('Total record count in table:', contactCount);
    console.log('Recent 10 records:');
    contacts?.forEach((c, idx) => {
      const type = c.metadata?.type || c.metadata?.inquiry_type || 'standard_contact';
      console.log(`  [${idx + 1}] ID: ${c.id} | Date: ${c.created_at} | Name: ${c.first_name} ${c.last_name} | Email: ${c.work_email} | Topic: ${c.topic} | Type: ${type}`);
    });
  }

  // 2. Check career_applications
  console.log('\n--- 2. TABLE: public.career_applications ---');
  const { data: careers, error: careerErr, count: careerCount } = await supabase
    .from('career_applications')
    .select('id, created_at, full_name, email, role', { count: 'exact' })
    .order('created_at', { ascending: false })
    .limit(5);

  if (careerErr) {
    console.log('Exists: NO (or Error:', careerErr.message, ')');
  } else {
    console.log('Exists: YES');
    console.log('Total record count:', careerCount);
    careers?.forEach((c, idx) => {
      console.log(`  [${idx + 1}] ID: ${c.id} | Date: ${c.created_at} | Candidate: ${c.full_name} | Role: ${c.role}`);
    });
  }

  // 3. Check partnership_inquiries
  console.log('\n--- 3. TABLE: public.partnership_inquiries ---');
  const { data: partners, error: partnerErr, count: partnerCount } = await supabase
    .from('partnership_inquiries')
    .select('id, created_at, company_name, contact_name, business_email, partnership_type', { count: 'exact' })
    .order('created_at', { ascending: false })
    .limit(5);

  if (partnerErr) {
    console.log('Exists: NO (or Error:', partnerErr.message, ')');
  } else {
    console.log('Exists: YES');
    console.log('Total record count:', partnerCount);
    partners?.forEach((p, idx) => {
      console.log(`  [${idx + 1}] ID: ${p.id} | Date: ${p.created_at} | Company: ${p.company_name} | Contact: ${p.contact_name} | Type: ${p.partnership_type}`);
    });
  }

  // 4. Fallback submissions check in contact_submissions
  console.log('\n--- 4. FALLBACK SUBMISSIONS CHECK IN contact_submissions ---');
  const { data: fallbackCareers } = await supabase
    .from('contact_submissions')
    .select('id, created_at, first_name, last_name, work_email, metadata')
    .filter('metadata->>type', 'eq', 'career_application')
    .limit(5);

  console.log('Career submissions saved via fallback in contact_submissions:', fallbackCareers?.length || 0);

  const { data: fallbackPartners } = await supabase
    .from('contact_submissions')
    .select('id, created_at, first_name, last_name, work_email, metadata')
    .filter('metadata->>inquiry_type', 'eq', 'partnership_inquiry')
    .limit(5);

  console.log('Partnership submissions saved via fallback in contact_submissions:', fallbackPartners?.length || 0);
}

audit();
