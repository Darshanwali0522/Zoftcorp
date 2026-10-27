import { EVENTS_AND_MEETUPS, EventRecord } from '@/data/events-meetups';

export interface RawEventRecord {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_date: string;
  location?: string | null;
  event_type?: string | null;
  registration_url?: string | null;
  recording_url?: string | null;
  photos?: string[] | null;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
}

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

function formatEventDate(isoStr: string): { dateStr: string; timeStr: string } {
  try {
    const d = new Date(isoStr);
    return {
      dateStr: d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      timeStr: d.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
    };
  } catch {
    return { dateStr: isoStr, timeStr: '' };
  }
}

function mapRecordToEvent(record: RawEventRecord): EventRecord {
  const { dateStr, timeStr } = formatEventDate(record.event_date);
  const now = new Date();
  const eventDateObj = new Date(record.event_date);
  const computedTimingStatus: 'upcoming' | 'past' = eventDateObj >= now ? 'upcoming' : 'past';

  const photos = Array.isArray(record.photos) ? record.photos : [];
  const primaryImage = photos.length > 0 ? photos[0] : undefined;

  const validTypes = ['webinar', 'meetup', 'architecture-session', 'workshop'] as const;
  const rawType = (record.event_type || 'meetup').toLowerCase();
  const type = (validTypes.includes(rawType as (typeof validTypes)[number]) ? rawType : 'meetup') as EventRecord['type'];

  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    type,
    status: computedTimingStatus,
    date: dateStr,
    time: timeStr || undefined,
    location: record.location || 'Virtual / Online',
    excerpt: record.description.length > 180 ? `${record.description.slice(0, 180)}...` : record.description,
    description: record.description,
    topics: ['Cloud Architecture', 'Database Tuning', 'Modern Data Platforms'],
    registrationUrl: record.registration_url || undefined,
    recordingUrl: record.recording_url || undefined,
    image: primaryImage,
    photos,
  };
}

/**
 * Retrieve all published events from Supabase.
 * Enforces explicit 'published' filter so drafts are never returned to public visitors.
 * Caches with 60s revalidation.
 */
export async function getPublishedEvents(): Promise<EventRecord[]> {
  const { url, key, isConfigured } = getSupabaseEnv();

  if (isConfigured) {
    try {
      const res = await fetch(
        `${url}/rest/v1/events?select=*&status=eq.published&order=event_date.asc`,
        {
          headers: getHeaders(key),
          next: { revalidate: 60 },
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          return data.map(mapRecordToEvent);
        }
      } else {
        console.warn(`[Supabase] HTTP ${res.status} error fetching events, falling back to static schedule`);
      }
    } catch (err) {
      console.warn('[Supabase] Network exception fetching events, falling back to static schedule:', err);
    }
  }

  return EVENTS_AND_MEETUPS;
}
