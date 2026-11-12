// Production entry point for Hostinger Node.js Application Manager & Standalone Deployment
// This file allows Hostinger hPanel to use "server.js" as the Application Startup File.
const fs = require('fs');
const path = require('path');

const standaloneServer = path.join(__dirname, '.next', 'standalone', 'server.js');

if (fs.existsSync(standaloneServer)) {
  require(standaloneServer);
} else {
  console.error('[ZOFTCORP] Error: Standalone server not found at .next/standalone/server.js');
  console.error('[ZOFTCORP] Please ensure "npm run build" has completed successfully before starting the server.');
  process.exit(1);
}
