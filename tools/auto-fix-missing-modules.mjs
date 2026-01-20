#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(new URL('.', import.meta.url).pathname, '..');
const FUNCTIONS_DIR = path.join(ROOT, 'functions');
const ROOT_PKG = path.join(ROOT, 'package.json');
const FUNC_PKG = path.join(FUNCTIONS_DIR, 'package.json');

function run(cmd, opts = {}) {
  try {
    return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts });
  } catch (e) {
    return e.stdout || e.message || '';
  }
}

function parseMissingPackages(logText) {
  const regex = /Cannot find package '([^']+)'/g;
  const pkgs = new Set();
  let m;
  while ((m = regex.exec(logText)) !== null) {
    pkgs.add(m[1]);
  }
  return Array.from(pkgs);
}

function readJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

async function main() {
  const maxIterations = parseInt(process.env.MAX_ITERS || '10', 10);
  const sleepMs = parseInt(process.env.SLEEP_MS || '3000', 10);

  console.log('Auto-fix missing modules: starting (max', maxIterations, 'iterations)');

  for (let iter = 1; maxIterations === 0 || iter <= maxIterations; iter++) {
    if (maxIterations === 0 && iter === 1) console.log('Running in continuous polling mode (MAX_ITERS=0)');
    if (maxIterations > 0) console.log(`\nIteration ${iter}: fetching recent function logs...`);
    if (maxIterations === 0) console.log(`\nPolling iteration ${iter}: fetching recent function logs...`);

    // Try to fetch logs via firebase CLI by default
    const logCmd = process.env.LOG_CMD || 'firebase functions:log --only ssrServer --limit 200';
    const logs = run(logCmd, { cwd: ROOT });

    const missing = parseMissingPackages(logs);
    if (missing.length === 0) {
      console.log('No missing packages detected. Exiting.');
      return;
    }

    console.log('Missing packages found:', missing.join(', '));

    const rootPkg = readJSON(ROOT_PKG);
    const funcPkg = readJSON(FUNC_PKG);

    for (const pkg of missing) {
      if ((funcPkg.dependencies && funcPkg.dependencies[pkg]) || (funcPkg.devDependencies && funcPkg.devDependencies[pkg])) {
        console.log(`Package ${pkg} already declared in functions/package.json — skipping install.`);
        continue;
      }

      // Try to reuse version from root package.json
      const version = (rootPkg.dependencies && rootPkg.dependencies[pkg]) || (rootPkg.devDependencies && rootPkg.devDependencies[pkg]);
      if (version) {
        console.log(`Adding ${pkg}@${version} to functions/package.json`);
        funcPkg.dependencies = funcPkg.dependencies || {};
        funcPkg.dependencies[pkg] = version;
        fs.writeFileSync(FUNC_PKG, JSON.stringify(funcPkg, null, 2) + '\n');
        // install
        console.log(`Running npm install for ${pkg}...`);
        run(`npm install --prefix ${FUNCTIONS_DIR}`, { cwd: ROOT });
      } else {
        // Install latest via npm which will update functions/package.json
        console.log(`Installing latest ${pkg} in functions (npm will update package.json)...`);
        run(`npm install --prefix ${FUNCTIONS_DIR} ${pkg}`, { cwd: ROOT });
      }
    }

    console.log('Dependencies installed — redeploying functions...');
    const deployOut = run('firebase deploy --only functions', { cwd: ROOT });
    console.log(deployOut);

    console.log(`Sleeping ${sleepMs}ms before next iteration...`);
    await new Promise((res) => setTimeout(res, sleepMs));
  }

  console.log('Reached max iterations — stopping.');
}

main().catch((err) => {
  console.error('Error in auto-fix script:', err);
  process.exit(1);
});
