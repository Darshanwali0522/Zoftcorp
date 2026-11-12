const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const standaloneDir = path.join(rootDir, '.next', 'standalone');

if (!fs.existsSync(standaloneDir)) {
  console.log('[standalone-assets] .next/standalone directory not found, skipping asset copy.');
  process.exit(0);
}

// 1. Copy public/ -> .next/standalone/public/
const srcPublic = path.join(rootDir, 'public');
const destPublic = path.join(standaloneDir, 'public');
if (fs.existsSync(srcPublic)) {
  fs.cpSync(srcPublic, destPublic, { recursive: true, force: true });
  console.log('[standalone-assets] ✓ Copied public/ -> .next/standalone/public/');
}

// 2. Copy .next/static/ -> .next/standalone/.next/static/
const srcStatic = path.join(rootDir, '.next', 'static');
const destStatic = path.join(standaloneDir, '.next', 'static');
if (fs.existsSync(srcStatic)) {
  fs.cpSync(srcStatic, destStatic, { recursive: true, force: true });
  console.log('[standalone-assets] ✓ Copied .next/static/ -> .next/standalone/.next/static/');
}

console.log('[standalone-assets] All static assets successfully prepared for standalone server.');
