import DOMPurify from 'isomorphic-dompurify';

/**
 * Strict HTML Sanitization Configuration for Zoftcorp Main Website & CMS
 * Replicates the admin portal allowlist and URL restrictions.
 * Strips all scripts, event handlers, javascript: URIs, data: URIs, iframes, embedded objects,
 * raw SVG/MathML, and other dangerous execution vectors.
 */

// Explicit Allowlist of safe formatting elements required by rich-text publications & blogs
export const SANITIZER_ALLOWED_TAGS = [
  // Headings
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  // Text blocks and inline formatting
  'p',
  'span',
  'div',
  'strong',
  'b',
  'em',
  'i',
  'u',
  's',
  'strike',
  'small',
  'sub',
  'sup',
  'hr',
  'br',
  // Blockquotes and code
  'blockquote',
  'pre',
  'code',
  // Lists
  'ul',
  'ol',
  'li',
  // Hyperlinks
  'a',
  // Media figures
  'img',
  'figure',
  'figcaption',
  // Tables
  'table',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'th',
  'td',
];

// Explicit Allowlist of safe attributes
export const SANITIZER_ALLOWED_ATTR = [
  'href',
  'src',
  'alt',
  'title',
  'class',
  'id',
  'width',
  'height',
  'target',
  'rel',
  'loading',
  'colspan',
  'rowspan',
  'scope',
  'align',
  'aria-label',
  'aria-hidden',
];

// Explicitly forbidden tags (defense-in-depth)
export const SANITIZER_FORBID_TAGS = [
  'script',
  'style',
  'iframe',
  'object',
  'embed',
  'applet',
  'meta',
  'link',
  'base',
  'form',
  'input',
  'button',
  'textarea',
  'select',
  'option',
  'optgroup',
  'template',
  'portal',
  'frame',
  'frameset',
  'noframes',
  'noscript',
  'marquee',
  'dialog',
  'svg',
  'math',
  'foreignobject',
  'animate',
  'animatetransform',
  'set',
  'use',
];

// Enforce rel="noopener noreferrer" on all links with target="_blank" to prevent reverse tabnabbing
DOMPurify.removeHook('afterSanitizeAttributes');
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if (node.tagName && node.tagName.toUpperCase() === 'A') {
    const target = node.getAttribute('target');
    if (target && target.trim().toLowerCase() === '_blank') {
      const existingRel = node.getAttribute('rel') || '';
      const relTokens = new Set(existingRel.split(/\s+/).filter(Boolean));
      relTokens.add('noopener');
      relTokens.add('noreferrer');
      node.setAttribute('rel', Array.from(relTokens).join(' '));
    }
  }
});

// DOMPurify Sanitization Options
const DOMPURIFY_CONFIG = {
  ALLOWED_TAGS: SANITIZER_ALLOWED_TAGS,
  ALLOWED_ATTR: SANITIZER_ALLOWED_ATTR,
  FORBID_TAGS: SANITIZER_FORBID_TAGS,
  FORBID_ATTR: [
    'onerror',
    'onload',
    'onclick',
    'onmouseover',
    'onfocus',
    'onblur',
    'onbegin',
    'onend',
    'onanimationstart',
    'onanimationend',
  ],
  ALLOW_DATA_ATTR: false,
  ALLOW_UNKNOWN_PROTOCOLS: false,
  ADD_ATTR: ['target'],
  USE_PROFILES: { html: true, svg: false, mathMl: false }, // Completely disable SVG & MathML
  // Only allow http, https, mailto, tel, or relative URLs
  ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
};

// Retrieve pure native Date constructor in Node.js environments to prevent JSDOM DocumentImpl
// internal `new Date()` calls from tripping Next.js 16 static prerender tracking.
let nativeNodeDate: typeof Date | null = null;
if (typeof window === 'undefined') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const vm = require('node:vm');
    nativeNodeDate = vm.runInNewContext('Date');
  } catch {
    nativeNodeDate = null;
  }
}

/**
 * Sanitize publication or blog HTML content using DOMPurify.
 * Ensures the output is clean of any executable scripts, javascript: URLs, or injection vectors.
 * Enforces rel="noopener noreferrer" on target="_blank" links.
 * Works deterministically in both server-side static prerendering and browser environments.
 */
export function sanitizeHtml(dirtyHtml: string): string {
  if (!dirtyHtml || typeof dirtyHtml !== 'string') return '';

  if (typeof window === 'undefined' && nativeNodeDate) {
    const savedDate = globalThis.Date;
    try {
      globalThis.Date = nativeNodeDate;
      return DOMPurify.sanitize(dirtyHtml, DOMPURIFY_CONFIG) as string;
    } finally {
      globalThis.Date = savedDate;
    }
  }

  return DOMPurify.sanitize(dirtyHtml, DOMPURIFY_CONFIG) as string;
}
