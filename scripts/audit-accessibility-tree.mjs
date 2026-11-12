import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const serverAppDir = path.join(projectRoot, '.next', 'server', 'app');

if (!fs.existsSync(serverAppDir)) {
  console.error('Error: .next/server/app directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

function findHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = findHtmlFiles(serverAppDir);
console.log(`Found ${htmlFiles.length} prerendered HTML pages to audit for Accessibility Tree well-formedness.\n`);

let totalErrors = 0;

for (const filePath of htmlFiles) {
  const relPath = path.relative(projectRoot, filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // Collect all DOM IDs
  const idMatches = [...content.matchAll(/id="([^"]+)"/g)];
  const existingIds = new Set(idMatches.map((m) => m[1]));

  const fileErrors = [];

  // Check 1: aria-controls references
  const ariaControlsMatches = [...content.matchAll(/<([a-zA-Z0-9\-]+)[^>]*\saria-controls="([^"]+)"[^>]*>/g)];
  for (const match of ariaControlsMatches) {
    const [fullTag, tagName, controlsIds] = match;
    const ids = controlsIds.split(/\s+/).filter(Boolean);
    for (const targetId of ids) {
      if (!existingIds.has(targetId)) {
        fileErrors.push({
          type: 'BROKEN_ARIA_CONTROLS',
          message: `<${tagName}> references aria-controls="${targetId}", but no element with id="${targetId}" exists in the DOM.`,
          snippet: fullTag.length > 120 ? fullTag.slice(0, 120) + '...' : fullTag,
        });
      }
    }
  }

  // Check 2: aria-labelledby references
  const ariaLabelledbyMatches = [...content.matchAll(/<([a-zA-Z0-9\-]+)[^>]*\saria-labelledby="([^"]+)"[^>]*>/g)];
  for (const match of ariaLabelledbyMatches) {
    const [fullTag, tagName, labelledbyIds] = match;
    const ids = labelledbyIds.split(/\s+/).filter(Boolean);
    for (const targetId of ids) {
      if (!existingIds.has(targetId)) {
        fileErrors.push({
          type: 'BROKEN_ARIA_LABELLEDBY',
          message: `<${tagName}> references aria-labelledby="${targetId}", but no element with id="${targetId}" exists in the DOM.`,
          snippet: fullTag.length > 120 ? fullTag.slice(0, 120) + '...' : fullTag,
        });
      }
    }
  }

  // Check 3: role="list" children
  // Look for role="list" containers that directly contain non-listitem elements (e.g. <a> without role="listitem")
  const roleListMatches = [...content.matchAll(/<([a-zA-Z0-9\-]+)[^>]*\srole="list"[^>]*>([\s\S]*?)<\/\1>/g)];
  for (const match of roleListMatches) {
    const [fullBlock, tagName, innerContent] = match;
    // Check if inner content contains <a> or <div> without role="listitem"
    const directChildren = [...innerContent.matchAll(/<([a-zA-Z0-9\-]+)([^>]*)>/g)];
    for (const child of directChildren) {
      const [childTag, childName, childAttrs] = child;
      if (childName === 'svg' || childName === 'path') continue;
      if (childName !== 'li' && !childAttrs.includes('role="listitem"')) {
        fileErrors.push({
          type: 'INVALID_ROLE_LIST_CHILD',
          message: `<${tagName} role="list"> contains child <${childName}> which lacks role="listitem" or <li> semantics.`,
          snippet: childTag,
        });
        break; // Report once per container
      }
    }
  }

  if (fileErrors.length > 0) {
    console.log(`❌ ${relPath}: ${fileErrors.length} issue(s) found:`);
    for (const err of fileErrors) {
      console.log(`   - [${err.type}] ${err.message}`);
      console.log(`     Snippet: ${err.snippet}`);
    }
    totalErrors += fileErrors.length;
  }
}

console.log(`\n========================================`);
if (totalErrors === 0) {
  console.log(`✅ ALL ${htmlFiles.length} PAGES PASSED! Accessibility Tree relationships and roles are well-formed.`);
} else {
  console.log(`❌ AUDIT FAILED with ${totalErrors} accessibility-tree issue(s) across prerendered pages.`);
}
console.log(`========================================`);
