/**
 * Regenerate package-lock.json the only way that is safe for Cloudflare Pages CI.
 *
 * Background: Cloudflare's build image runs `npm ci` with npm 10.9.2 on
 * linux-x64. A lockfile generated with `npm install --package-lock-only` while
 * node_modules already exists is "platform-narrow": it records only the current
 * OS's optional binaries (sharp, satteri, emnapi…), and `npm ci` on a different
 * OS then dies with "Missing: … from lock file". A clean full install records
 * every platform's optional deps, which is what we need.
 *
 * Usage: run `npm run relock` after any dependency change, then commit
 * package-lock.json. node_modules is left freshly installed for local dev.
 */
import { rmSync } from 'node:fs';
import { execSync } from 'node:child_process';

const NPM = 'npm@10.9.2'; // matches the Cloudflare Pages build image

const sh = (cmd) => execSync(cmd, { stdio: 'inherit', shell: true });

console.log('> removing node_modules + package-lock.json');
rmSync('node_modules', { recursive: true, force: true });
rmSync('package-lock.json', { force: true });

console.log(`> full install with ${NPM} (records all platforms' optional deps)`);
sh(`npx --yes ${NPM} install --progress=false`);

for (const platform of ['--os=win32 --cpu=x64', '--os=linux --cpu=x64']) {
  console.log(`> verifying: npm ci --dry-run ${platform}`);
  sh(`npx --yes ${NPM} ci --dry-run --progress=false ${platform}`);
}

console.log('\nOK - lockfile verified for Windows + Linux. Commit package-lock.json.');
