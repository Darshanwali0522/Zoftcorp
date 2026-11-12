import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failedTests++;
  }
}

console.log('--- ZOFTCORP MOBILE NAVIGATION & AUDIT VALIDATION TESTS ---');

// 1. Inspect navbar.tsx
const navbarPath = path.join(projectRoot, 'src', 'components', 'navigation', 'navbar.tsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf8');

assert(
  navbarContent.includes('setIsMobileMenuOpen((prev) => !prev)'),
  'Navbar hamburger button toggles state between open and closed'
);

assert(
  navbarContent.includes('aria-controls="mobile-navigation-drawer"'),
  'Navbar hamburger button has aria-controls="mobile-navigation-drawer"'
);

assert(
  navbarContent.includes('aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}'),
  'Navbar hamburger button has dynamic, accessible aria-label'
);

assert(
  navbarContent.includes('aria-expanded={isMobileMenuOpen}'),
  'Navbar hamburger button has dynamic aria-expanded attribute'
);

assert(
  navbarContent.includes('min-w-[44px] min-h-[44px]'),
  'Navbar hamburger button satisfies WCAG 44x44px mobile tap target'
);

assert(
  navbarContent.includes('handleCloseMobileMenu = useCallback'),
  'Navbar provides memoized stable onClose callback'
);

// 2. Inspect mobile-menu.tsx
const mobileMenuPath = path.join(projectRoot, 'src', 'components', 'navigation', 'mobile-menu.tsx');
const mobileMenuContent = fs.readFileSync(mobileMenuPath, 'utf8');

assert(
  mobileMenuContent.includes('createPortal(drawerContent, document.body)'),
  'Mobile menu renders via React Portal to document.body outside backdrop-blur containing block'
);

assert(
  mobileMenuContent.includes('prevPathname.current !== pathname'),
  'Mobile menu checks pathname difference before auto-closing (fixes instant auto-close bug)'
);

assert(
  mobileMenuContent.includes('id="mobile-navigation-drawer"'),
  'Mobile drawer has id="mobile-navigation-drawer" matching aria-controls'
);

assert(
  mobileMenuContent.includes('role="dialog"'),
  'Mobile menu container has role="dialog"'
);

assert(
  mobileMenuContent.includes('aria-modal="true"'),
  'Mobile menu container has aria-modal="true"'
);

assert(
  mobileMenuContent.includes('event.key === "Escape"'),
  'Mobile menu listens for Escape key to close navigation'
);

assert(
  mobileMenuContent.includes('triggerRef?.current?.focus()'),
  'Mobile menu restores keyboard focus to trigger button upon close'
);

assert(
  mobileMenuContent.includes('document.body.style.overflow = "hidden"'),
  'Mobile menu prevents background body scroll while active'
);

// 3. Inspect public/llms.txt (Agentic Browsing)
const llmsTxtPath = path.join(projectRoot, 'public', 'llms.txt');
assert(fs.existsSync(llmsTxtPath), 'public/llms.txt exists for AI Agentic Browsing discoverability');

if (fs.existsSync(llmsTxtPath)) {
  const llmsContent = fs.readFileSync(llmsTxtPath, 'utf8');
  assert(llmsContent.includes('# ZOFT Corp'), 'llms.txt has ZOFT Corp primary heading');
  assert(llmsContent.includes('Cloud & Data FinOps'), 'llms.txt indexes FinOps capabilities');
  assert(llmsContent.includes('Performance Tuning Delivery'), 'llms.txt indexes Performance Tuning');
  assert(llmsContent.includes('AWS Technology Ecosystem'), 'llms.txt indexes partner ecosystems');
}

// 4. Form inputs have text-base for mobile auto-zoom prevention
const contactFormPath = path.join(projectRoot, 'src', 'components', 'contact', 'contact-form.tsx');
const contactFormContent = fs.readFileSync(contactFormPath, 'utf8');
assert(
  contactFormContent.includes('text-base sm:text-sm'),
  'Contact form inputs use text-base on mobile to eliminate iOS Safari viewport zoom'
);

const partnerFormPath = path.join(projectRoot, 'src', 'components', 'forms', 'partnership-form.tsx');
const partnerFormContent = fs.readFileSync(partnerFormPath, 'utf8');
assert(
  partnerFormContent.includes('text-base sm:text-sm'),
  'Partnership form inputs use text-base on mobile to eliminate iOS Safari viewport zoom'
);

// 5. Footer social buttons have min 40px tap targets
const footerPath = path.join(projectRoot, 'src', 'components', 'layout', 'footer.tsx');
const footerContent = fs.readFileSync(footerPath, 'utf8');
assert(
  footerContent.includes('w-10 h-10 rounded-lg'),
  'Footer social media icons upgraded to 40x40px for accessible touch targets'
);

console.log(`\nTests completed: ${passedTests} passed, ${failedTests} failed.`);

if (failedTests > 0) {
  process.exit(1);
}
