import { LEADERSHIP_TEAM } from '@/data/leadership';

export interface RawLeadershipRecord {
  id: string;
  name: string;
  designation: string;
  photo_url?: string | null;
  bio: string;
  professional_description?: string | null;
  linkedin_url?: string | null;
  display_order: number;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

export interface DynamicLeaderProfile {
  id: string;
  name: string;
  role: string;
  initials: string;
  photoUrl?: string;
  bio: string;
  professionalDescription?: string;
  linkedinUrl?: string;
  displayOrder: number;
  status: 'draft' | 'published';
}

const DEFAULT_BIOS: Record<string, { bio: string; desc: string }> = {
  Shruthi: {
    bio: 'Executive leadership overseeing global enterprise operations, engineering delivery frameworks, and multi-cloud database advisory engagements.',
    desc: 'Over a decade of executive delivery experience leading cross-functional teams in complex hybrid-cloud transformations, service-level compliance, and enterprise database modernization.',
  },
  'Praveen Kumar': {
    bio: 'Cloud and database FinOps architect specializing in database licensing optimization, cloud infrastructure cost modeling, and performance tuning.',
    desc: 'Deep architectural expertise in multi-cloud cost governance, telemetry-driven database workload sizing, and performance engineering across AWS, Azure, and Google Cloud estates.',
  },
  Gopika: {
    bio: 'Leading commercial alliances and ecosystem partnerships across AWS, Microsoft Azure, Google Cloud Platform, and Oracle.',
    desc: 'Specialist in enterprise cloud partner programs, co-sell initiatives, and multi-cloud database solutions consulting for Fortune 500 enterprises and hyper-growth scale-ups.',
  },
  'Prabhu Vijayakumar': {
    bio: 'Specialized data protection and statutory governance consultant focusing on India DPDP Act compliance, data flow audits, and regulatory readiness.',
    desc: 'Advising enterprise leadership on statutory data governance, privacy impact assessments, cross-border data transfer regulations, and digital personal data protection frameworks.',
  },
  Aravind: {
    bio: 'Advisory consultant supporting corporate governance, enterprise statutory adherence, and data principal compliance architectures.',
    desc: 'Guiding organizational implementation of statutory DPDP mandates, consent architecture verification, and enterprise data risk mitigation strategies.',
  },
};

function getSupabaseEnv() {
  let url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
  let key = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

  // Strip surrounding quotes if present
  if ((url.startsWith('"') && url.endsWith('"')) || (url.startsWith("'") && url.endsWith("'"))) {
    url = url.slice(1, -1).trim();
  }
  if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
    key = key.slice(1, -1).trim();
  }

  url = url.replace(/\/+$/, '');
  const isConfigured = Boolean(url && key && !url.includes('placeholder') && !key.includes('placeholder'));
  return { url, key, isConfigured };
}

function getHeaders(key: string) {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    Accept: 'application/json',
  };
}

function computeInitials(name: string): string {
  if (!name) return 'ZC';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function mapRecordToLeader(record: RawLeadershipRecord): DynamicLeaderProfile {
  return {
    id: record.id,
    name: record.name,
    role: record.designation,
    initials: computeInitials(record.name),
    photoUrl: record.photo_url || undefined,
    bio: record.bio || '',
    professionalDescription: record.professional_description || undefined,
    linkedinUrl: record.linkedin_url || undefined,
    displayOrder: record.display_order ?? 0,
    status: record.status,
  };
}

/**
 * Retrieve all approved and published leadership profiles from Supabase.
 * Enforces explicit 'published' filter so unapproved/draft profiles are never returned to public visitors.
 * Ordered by display_order ascending, then created_at ascending.
 * Falls back to verified client static profiles only if the table does not exist or Supabase is unreachable.
 */
export async function getPublishedLeadershipProfiles(): Promise<DynamicLeaderProfile[]> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/leadership_profiles?select=*&status=eq.published&order=display_order.asc,created_at.asc`,
        {
          headers: getHeaders(key),
          next: { revalidate: 30, tags: ['leadership-profiles'] },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          // Database table exists and returned authoritative published profiles
          return data.map(mapRecordToLeader);
        }
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching leadership profiles, falling back to static profiles`);
      }
    } catch (err) {
      console.warn('[Supabase] Exception fetching leadership profiles, falling back to static profiles:', err);
    }
  }

  // Graceful fallback to verified client static profiles
  return LEADERSHIP_TEAM.map((leader, idx) => ({
    id: `static-${idx}`,
    name: leader.name,
    role: leader.role,
    initials: leader.initials,
    photoUrl: undefined,
    bio: DEFAULT_BIOS[leader.name]?.bio || 'Executive practice leader driving enterprise cloud database engineering and advisory excellence.',
    professionalDescription: DEFAULT_BIOS[leader.name]?.desc || undefined,
    linkedinUrl: leader.linkedinUrl,
    displayOrder: idx + 1,
    status: 'published' as const,
  }));
}
