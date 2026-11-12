/**
 * Lightweight in-memory rate limiter and duplicate submission tracker
 * Suitable for Next.js server runtime without requiring Redis or external stores.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory store for IP rate limiting
const ipRateLimitStore = new Map<string, RateLimitEntry>();

// In-memory store for duplicate submission signatures
// Maps signature -> timestamp (ms)
const duplicateStore = new Map<string, number>();

// Clean up stale entries every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupStaleEntries(): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [ip, entry] of ipRateLimitStore.entries()) {
    if (now > entry.resetAt) {
      ipRateLimitStore.delete(ip);
    }
  }

  for (const [sig, timestamp] of duplicateStore.entries()) {
    // Keep signatures for 2 minutes max
    if (now - timestamp > 2 * 60 * 1000) {
      duplicateStore.delete(sig);
    }
  }
}

/**
 * Check if a client IP is allowed under the rate limit.
 * @param ip Client IP address
 * @param limit Max allowed requests within window (default: 5)
 * @param windowMs Time window in milliseconds (default: 10 minutes)
 * @returns { allowed: boolean, remaining: number, resetAt: number }
 */
export function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): { allowed: boolean; remaining: number; resetAt: number } {
  cleanupStaleEntries();

  const now = Date.now();
  const entry = ipRateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetAt: now + windowMs,
    };
    ipRateLimitStore.set(ip, newEntry);
    return { allowed: true, remaining: limit - 1, resetAt: newEntry.resetAt };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}

/**
 * Check if a submission is a duplicate of a recent submission within windowMs.
 * @param signature Unique string representing the submission (e.g. email:topic:hash)
 * @param windowMs Time window in milliseconds to consider as duplicate (default: 60s)
 * @returns true if duplicate, false if new
 */
export function isDuplicateSubmission(signature: string, windowMs = 60 * 1000): boolean {
  cleanupStaleEntries();

  const now = Date.now();
  const previous = duplicateStore.get(signature);

  if (previous && now - previous < windowMs) {
    return true;
  }

  duplicateStore.set(signature, now);
  return false;
}
