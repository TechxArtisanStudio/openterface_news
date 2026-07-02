#!/usr/bin/env node
/**
 * Post-build: /en/* → unprefixed EN redirect stubs with location.replace fallback.
 * Cloudflare bulk rules emit HTTP 301; this covers origin-only requests.
 */
import { existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://news.openterface.com';

const LOCALE_DIRS = new Set([
  'en',
  'zh',
  'ja',
  'ko',
  'de',
  'fr',
  'es',
  'it',
  'pt',
  'ro',
  'hk',
  'tw',
  'ru',
  'ar',
  'tr',
  'pl',
  'nl',
]);

const SKIP_ROOT = new Set([
  ...LOCALE_DIRS,
  'images',
  'sitemap-index.xml',
  'sitemap-0.xml',
  'robots.txt',
  '404.html',
  'CNAME',
  '.nojekyll',
  'feed.xml',
]);

function redirectHtml(target, { external = false } = {}) {
  const canonical = external ? target : `${SITE}${target === '/' ? '/' : target}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${target}">
  <link rel="canonical" href="${canonical}">
  <title>Redirecting…</title>
  <script>location.replace('${target}');</script>
</head>
<body><p><a href="${target}">Openterface News</a></p></body>
</html>
`;
}

const SHORTCUT_REDIRECTS = [
  ['/discord/', 'https://discord.gg/sFTJD6a3R8', true],
  ['/reddit/', 'https://www.reddit.com/r/Openterface_miniKVM/', true],
  ['/community/', 'https://openterface.com/community/', true],
  ['/faq/', 'https://docs.openterface.com/faq/kvm-over-usb/', true],
  ['/faq/kvm-over-usb/', 'https://docs.openterface.com/faq/kvm-over-usb/', true],
  ['/basic-testing/', 'https://docs.openterface.com/products/minikvm/support/diagnostic-self-check/', true],
];

function writeShortcutStub(fromPath, toPath, external = false) {
  const file = join(DIST, fromPath.replace(/^\//, ''), 'index.html');
  if (existsSync(file)) return false;
  mkdirSync(dirname(file), { recursive: true });
  const target = external ? toPath : toPath.endsWith('/') ? toPath : `${toPath}/`;
  writeFileSync(file, redirectHtml(target, { external }));
  return true;
}

function writeShortcutRedirects() {
  let count = 0;
  for (const [from, to, external] of SHORTCUT_REDIRECTS) {
    if (writeShortcutStub(from, to, external)) count++;
  }
  return count;
}

function collectEnPaths(dir, base = DIST, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collectEnPaths(p, base, acc);
    else if (name === 'index.html') acc.push('/' + relative(base, dirname(p)).replace(/\\/g, '/'));
  }
  return acc;
}

if (!existsSync(DIST)) {
  console.error('post-build-en-redirects: dist/ missing — run npm run build first');
  process.exit(1);
}

writeFileSync(join(DIST, '.nojekyll'), '');

let redirectCount = 0;
for (const name of readdirSync(DIST)) {
  if (SKIP_ROOT.has(name) || name.startsWith('.')) continue;
  const src = join(DIST, name);
  if (!statSync(src).isDirectory()) continue;

  for (const enPath of collectEnPaths(src, DIST)) {
    const target = enPath === '/' ? '/' : `${enPath}/`;
    const legacyPath =
      target === '/'
        ? join(DIST, 'en', 'index.html')
        : join(DIST, 'en', enPath.slice(1), 'index.html');
    mkdirSync(dirname(legacyPath), { recursive: true });
    writeFileSync(legacyPath, redirectHtml(target));
    redirectCount++;
  }
}

mkdirSync(join(DIST, 'en'), { recursive: true });
writeFileSync(join(DIST, 'en', 'index.html'), redirectHtml('/'));
redirectCount++;

console.log(`post-build-en-redirects: ${redirectCount} /en/* stubs with location.replace fallback`);

const shortcutCount = writeShortcutRedirects();
console.log(`post-build-en-redirects: ${shortcutCount} legacy shortcut redirect stubs`);
