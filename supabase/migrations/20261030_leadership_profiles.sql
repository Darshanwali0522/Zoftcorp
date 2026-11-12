-- =========================================================================
-- ZOFTCORP CMS: DYNAMIC LEADERSHIP PROFILES SCHEMA MIGRATION
-- Safe, repeatable, production-grade migration for Dynamic Leadership Management.
-- Strictly integrates with existing public.admin_users and public.is_admin()
-- Includes Row Level Security (RLS) and storage bucket for leader photos.
-- =========================================================================

-- 1. BASE HELPER FUNCTION: is_admin()
-- Checks if the authenticated user has verified administrator privileges in public.admin_users
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

-- 2. LEADERSHIP PROFILES TABLE
-- Uncapped executive profile management with deterministic ordering
create table if not exists public.leadership_profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  designation text not null,
  photo_url text,
  bio text not null default '',
  professional_description text,
  linkedin_url text,
  display_order integer not null default 0,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Performance & Deterministic Ordering Indexes
create index if not exists idx_leadership_profiles_status on public.leadership_profiles(status);
create index if not exists idx_leadership_profiles_order on public.leadership_profiles(display_order asc, created_at asc);
create index if not exists idx_leadership_profiles_updated_at on public.leadership_profiles(updated_at desc);

-- 3. UPDATED_AT TRIGGER
create or replace function public.set_leadership_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trigger_leadership_profiles_updated_at on public.leadership_profiles;
create trigger trigger_leadership_profiles_updated_at
  before update on public.leadership_profiles
  for each row
  execute function public.set_leadership_updated_at();

-- 4. ROW LEVEL SECURITY (RLS) POLICIES
alter table public.leadership_profiles enable row level security;

-- Public can view published profiles only
drop policy if exists "Public can view published leadership profiles" on public.leadership_profiles;
create policy "Public can view published leadership profiles"
  on public.leadership_profiles for select
  using (status = 'published');

-- Authorized administrators can view all leadership profiles (published + drafts)
drop policy if exists "Admins can view all leadership profiles" on public.leadership_profiles;
create policy "Admins can view all leadership profiles"
  on public.leadership_profiles for select
  using (public.is_admin());

-- Only verified administrators in admin_users can insert new profiles
drop policy if exists "Admins can create leadership profiles" on public.leadership_profiles;
create policy "Admins can create leadership profiles"
  on public.leadership_profiles for insert
  with check (public.is_admin());

-- Only verified administrators in admin_users can update profiles
drop policy if exists "Admins can update leadership profiles" on public.leadership_profiles;
create policy "Admins can update leadership profiles"
  on public.leadership_profiles for update
  using (public.is_admin())
  with check (public.is_admin());

-- Only verified administrators in admin_users can delete profiles
drop policy if exists "Admins can delete leadership profiles" on public.leadership_profiles;
create policy "Admins can delete leadership profiles"
  on public.leadership_profiles for delete
  using (public.is_admin());

-- 5. STORAGE BUCKET FOR LEADERSHIP PHOTOS
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'leadership-photos',
  'leadership-photos',
  true,
  5242880, -- 5 MB limit
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

-- Storage RLS: Public can view uploaded photos
drop policy if exists "Public can view leadership photos" on storage.objects;
create policy "Public can view leadership photos"
  on storage.objects for select
  using (bucket_id = 'leadership-photos');

-- Storage RLS: Only verified admins can upload leadership photos
drop policy if exists "Admins can upload leadership photos" on storage.objects;
create policy "Admins can upload leadership photos"
  on storage.objects for insert
  with check (bucket_id = 'leadership-photos' and public.is_admin());

-- Storage RLS: Only verified admins can update leadership photos
drop policy if exists "Admins can update leadership photos" on storage.objects;
create policy "Admins can update leadership photos"
  on storage.objects for update
  using (bucket_id = 'leadership-photos' and public.is_admin());

-- Storage RLS: Only verified admins can delete leadership photos
drop policy if exists "Admins can delete leadership photos" on storage.objects;
create policy "Admins can delete leadership photos"
  on storage.objects for delete
  using (bucket_id = 'leadership-photos' and public.is_admin());

-- 6. INITIAL SEED DATA (Client approved 5 leadership profiles)
insert into public.leadership_profiles (name, designation, bio, professional_description, display_order, status)
values
  (
    'Shruthi',
    'COO',
    'Executive leadership overseeing global enterprise operations, engineering delivery frameworks, and multi-cloud database advisory engagements.',
    'Over a decade of executive delivery experience leading cross-functional teams in complex hybrid-cloud transformations, service-level compliance, and enterprise database modernization.',
    1,
    'published'
  ),
  (
    'Praveen Kumar',
    'Database FinOps',
    'Cloud and database FinOps architect specializing in database licensing optimization, cloud infrastructure cost modeling, and performance tuning.',
    'Deep architectural expertise in multi-cloud cost governance, telemetry-driven database workload sizing, and performance engineering across AWS, Azure, and Google Cloud estates.',
    2,
    'published'
  ),
  (
    'Gopika',
    'Business Development - Partner Sales',
    'Leading commercial alliances and ecosystem partnerships across AWS, Microsoft Azure, Google Cloud Platform, and Oracle.',
    'Specialist in enterprise cloud partner programs, co-sell initiatives, and multi-cloud database solutions consulting for Fortune 500 enterprises and hyper-growth scale-ups.',
    3,
    'published'
  ),
  (
    'Prabhu Vijayakumar',
    'Legal Consultant - DPDP Compliance',
    'Specialized data protection and statutory governance consultant focusing on India DPDP Act compliance, data flow audits, and regulatory readiness.',
    'Advising enterprise leadership on statutory data governance, privacy impact assessments, cross-border data transfer regulations, and digital personal data protection frameworks.',
    4,
    'published'
  ),
  (
    'Aravind',
    'Legal Consultant - DPDP Compliance',
    'Advisory consultant supporting corporate governance, enterprise statutory adherence, and data principal compliance architectures.',
    'Guiding organizational implementation of statutory DPDP mandates, consent architecture verification, and enterprise data risk mitigation strategies.',
    5,
    'published'
  )
on conflict do nothing;
