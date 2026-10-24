import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Returns a server-only Supabase client initialized with the private service-role key.
 *
 * CRITICAL SECURITY CONSTRAINTS:
 * 1. This function and client must ONLY be executed on the server (Route Handlers, Server Actions).
 * 2. Never prefix SUPABASE_SERVICE_ROLE_KEY with NEXT_PUBLIC_.
 * 3. Never expose this client or its credentials to browser-accessible code.
 * 4. This client is used solely for secure backend operations that cannot be performed by anonymous users.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  const supabaseUrl = (
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    ''
  ).trim();

  const serviceRoleKey = (
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    ''
  ).trim();

  // Validate that credentials exist and are not unpopulated placeholders
  if (
    !supabaseUrl ||
    !serviceRoleKey ||
    supabaseUrl.includes('placeholder') ||
    serviceRoleKey.includes('placeholder')
  ) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
