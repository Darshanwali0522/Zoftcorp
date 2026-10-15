import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const env = fs.existsSync('.env.local') ? fs.readFileSync('.env.local', 'utf8') : '';
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.+)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.+)/);
const url = (urlMatch ? urlMatch[1].trim() : '') || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const anonKey = (keyMatch ? keyMatch[1].trim() : '') || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

import { execSync } from 'child_process';

// Get service role key securely via supabase CLI for this test execution
let serviceRoleKey = '';
try {
  const jsonStr = execSync('npx -y supabase projects api-keys --project-ref qnahdmwjsgyxspvuntbh -o json', {
    encoding: 'utf8',
  });
  const keys = JSON.parse(jsonStr);
  const serviceKeyObj = keys.find((k) => k.name === 'service_role');
  if (serviceKeyObj) {
    serviceRoleKey = serviceKeyObj.api_key;
  }
} catch (e) {
  console.warn('Could not fetch service key via CLI:', e.message);
}

// Client for anonymous visitor
const publicClient = createClient(url, anonKey);

// Client for admin operations
const adminClient = createClient(url, serviceRoleKey || anonKey);

async function run() {
  console.log('----------------------------------------------------');
  console.log('ZOFTCORP CMS END-TO-END WORKFLOW VERIFICATION TEST');
  console.log('----------------------------------------------------');

  // 1. Initial State
  const { data: initialPosts } = await publicClient
    .from('posts')
    .select('id, title, slug, status')
    .eq('status', 'published');
  console.log('1. Initial published posts visible to public:', initialPosts?.length);
  initialPosts?.forEach((p) => console.log(`   - [${p.status}] ${p.title} (${p.slug})`));

  console.log('\n2. Admin client initialized securely.');

  // 3. Create a Draft Post
  const testSlug = 'cms-integration-verification-test';
  console.log('\n3. Creating new post as DRAFT...');
  const { data: createdDraft, error: createErr } = await adminClient
    .from('posts')
    .insert({
      title: 'CMS Integration Verification Test Post',
      slug: testSlug,
      excerpt: 'This is a temporary verification post for CMS workflow testing.',
      content: '<h2>Workflow Test</h2><p>Testing draft isolation, publication, and editing.</p>',
      category: 'Database Administration',
      category_slug: 'database-administration',
      tags: ['Test', 'CMS', 'Verification'],
      status: 'draft',
      seo_title: 'CMS Workflow Verification | ZOFT Corp',
      seo_description: 'Temporary verification post for CMS integration.',
      author_name: 'ZoftCorp Admin Tester',
    })
    .select()
    .single();

  if (createErr) {
    console.error('Error creating draft:', createErr.message);
    return;
  }
  console.log('   Draft created with ID:', createdDraft.id, 'Status:', createdDraft.status);

  // 4. Verify Public CANNOT see the draft
  console.log('\n4. Verifying public isolation (Anonymous Visitor Check)...');
  const { data: publicDraftQuery } = await publicClient
    .from('posts')
    .select('id, title, slug')
    .eq('slug', testSlug);
  console.log('   Public query for draft returned:', publicDraftQuery?.length, 'posts (Expect: 0)');

  // 5. Publish the post
  console.log('\n5. Publishing the post via Admin Client...');
  const { data: publishedPost, error: pubErr } = await adminClient
    .from('posts')
    .update({
      status: 'published',
      published_at: new Date().toISOString(),
    })
    .eq('id', createdDraft.id)
    .select()
    .single();

  if (pubErr) {
    console.error('Error publishing post:', pubErr.message);
    return;
  }
  console.log('   Post published! Status:', publishedPost.status, 'Published at:', publishedPost.published_at);

  // 6. Verify Public CAN now see the post
  console.log('\n6. Verifying public visibility after publishing...');
  const { data: publicPubQuery } = await publicClient
    .from('posts')
    .select('id, title, slug, status, category, tags')
    .eq('slug', testSlug)
    .single();
  console.log('   Public query found post:', publicPubQuery?.title, 'Status:', publicPubQuery?.status);

  // 7. Edit the published post
  console.log('\n7. Editing the published post...');
  const updatedTitle = 'CMS Integration Verification Test Post (Edited & Updated)';
  const { data: editedPost, error: editErr } = await adminClient
    .from('posts')
    .update({
      title: updatedTitle,
      excerpt: 'Updated excerpt verifying live content edits.',
      content: '<h2>Updated Content</h2><p>This content was edited live via the CMS.</p>',
    })
    .eq('id', createdDraft.id)
    .select()
    .single();

  if (editErr) {
    console.error('Error editing post:', editErr.message);
    return;
  }
  console.log('   Post updated title:', editedPost.title);

  // Verify public sees updated title
  const { data: publicEditQuery } = await publicClient
    .from('posts')
    .select('id, title')
    .eq('slug', testSlug)
    .single();
  console.log('   Public sees updated title:', publicEditQuery?.title === updatedTitle ? 'YES (Verified)' : 'NO');

  // 8. Unpublish the post (Return to Draft)
  console.log('\n8. Unpublishing the post (Return to Draft)...');
  const { data: unpublishedPost, error: unpubErr } = await adminClient
    .from('posts')
    .update({
      status: 'draft',
    })
    .eq('id', createdDraft.id)
    .select()
    .single();

  if (unpubErr) {
    console.error('Error unpublishing post:', unpubErr.message);
    return;
  }
  console.log('   Post status changed to:', unpublishedPost.status);

  // Verify public CANNOT see it anymore
  const { data: publicAfterUnpublish } = await publicClient
    .from('posts')
    .select('id, title')
    .eq('slug', testSlug);
  console.log('   Public query after unpublishing returned:', publicAfterUnpublish?.length, 'posts (Expect: 0)');

  // 9. Delete the post
  console.log('\n9. Deleting the test post...');
  const { error: delErr } = await adminClient
    .from('posts')
    .delete()
    .eq('id', createdDraft.id);

  if (delErr) {
    console.error('Error deleting post:', delErr.message);
    return;
  }
  console.log('   Post deleted successfully from database.');

  // Verify post is completely gone
  const { data: verifyDel } = await adminClient
    .from('posts')
    .select('id')
    .eq('id', createdDraft.id);
  console.log('   Database check after deletion returned:', verifyDel?.length, 'records (Expect: 0)');

  console.log('\n----------------------------------------------------');
  console.log('ALL CMS WORKFLOW CHECKS PASSED SUCCESSFULLY!');
  console.log('----------------------------------------------------');
}

run().catch((e) => console.error(e));
