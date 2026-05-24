#!/usr/bin/env node
/**
 * Migrate legacy Openterface update markdown into src/content/news/
 * Run: node scripts/migrate-news-from-legacy.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeMarkdownMedia } from './normalize-article-media.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEGACY_DOCS = path.resolve(__dirname, '../../../Openterface/docs');
const OUT_DIR = path.resolve(__dirname, '../src/content/news');

const LANG_SUFFIXES = ['zh', 'ja', 'ko', 'fr', 'de', 'it', 'es', 'pt', 'ro'];

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw.trim() };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.+)$/);
    if (m) {
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (val === 'true') meta[m[1]] = true;
      else if (val === 'false') meta[m[1]] = false;
      else meta[m[1]] = val;
    }
  }
  return { meta, body: match[2].trim() };
}

function inferChannel(relativePath, meta) {
  if (relativePath.startsWith('app/updates/')) return { channel: 'software', product: null, eventType: null };
  if (relativePath.includes('event/exhibition/')) return { channel: 'events', product: null, eventType: 'exhibition' };
  if (relativePath.includes('event/usb-kvm-diy-contest')) return { channel: 'events', product: null, eventType: 'contest' };
  const productMatch = relativePath.match(/product\/([^/]+)\/updates\//);
  if (productMatch) {
    const product = productMatch[1];
    if (relativePath.includes('keycmd') || meta.title?.includes('KeyCmd')) {
      return { channel: 'software', product: 'keymod', eventType: null };
    }
    return { channel: 'product', product, eventType: null };
  }
  return { channel: 'product', product: 'minikvm', eventType: null };
}

function inferTopics(tags, title, body) {
  const topics = new Set();
  const text = `${title} ${body} ${(tags || []).join(' ')}`.toLowerCase();
  if (/ship|deliver|fulfil|carton|us shipment/.test(text)) topics.add('shipping');
  if (/production|manufactur|progress|ce\/rohs/.test(text)) topics.add('production');
  if (/beta|pre-launch|pre-order|test kit/.test(text)) topics.add('beta');
  if (/keycmd|app|software|macos|ubuntu|ipad/.test(text)) topics.add('software');
  if (/black friday|crowd|back|launch|campaign|christmas/.test(text)) topics.add('campaign');
  if (/teardown|open sauce|exhibition|contest|diy/.test(text)) topics.add('event');
  if (/review|community|project/.test(text)) topics.add('community');
  if (/root cause|analysis|issue|troubleshoot/.test(text)) topics.add('analysis');
  if (topics.size === 0) topics.add('production');
  return [...topics];
}

function slugFromFilename(filename) {
  return filename.replace(/\.md$/, '');
}

function translationKeyFromSlug(slug) {
  return slug.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}

function yamlEscape(str) {
  if (!str) return '""';
  if (str.includes('"') || str.includes('\n') || str.includes(':')) {
    return `"${str.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return `"${str}"`;
}

function buildYaml(data) {
  const lines = [
    `locale: ${data.locale}`,
    `translationKey: ${yamlEscape(data.translationKey)}`,
    `slug: ${yamlEscape(data.slug)}`,
    `title: ${yamlEscape(data.title)}`,
    `description: ${yamlEscape(data.description)}`,
    `date: ${data.date}`,
    `channel: ${data.channel}`,
  ];
  if (data.product) lines.push(`product: ${data.product}`);
  if (data.eventType) lines.push(`eventType: ${data.eventType}`);
  lines.push(`topic: [${data.topic.map((t) => `"${t}"`).join(', ')}]`);
  if (data.category) lines.push(`category: ${yamlEscape(data.category)}`);
  if (data.tags?.length) lines.push(`tags: [${data.tags.map((t) => `"${t.replace(/"/g, '\\"')}"`).join(', ')}]`);
  lines.push(`featured: ${data.featured}`);
  lines.push(`draft: ${data.draft}`);
  if (data.author) lines.push(`author: ${yamlEscape(data.author)}`);
  if (data.social?.image) {
    lines.push('social:');
    lines.push(`  image: ${yamlEscape(data.social.image)}`);
    if (data.social.title) lines.push(`  title: ${yamlEscape(data.social.title)}`);
    if (data.social.description) lines.push(`  description: ${yamlEscape(data.social.description)}`);
  }
  return lines.join('\n');
}

function extractDescription(meta, body) {
  if (meta.description) return meta.description;
  const para = body.split('\n\n').find((p) => p.trim() && !p.startsWith('#') && !p.startsWith('!['));
  return para?.replace(/[#*_\[\]()]/g, '').trim().slice(0, 200) || meta.title || 'Openterface update';
}

function extractTitle(meta, body) {
  if (meta.title) return meta.title;
  const h1 = body.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : 'Openterface update';
}

function processFile(absPath, locale) {
  const raw = fs.readFileSync(absPath, 'utf8');
  const { meta, body } = parseFrontmatter(raw);
  const rel = path.relative(LEGACY_DOCS, absPath).replace(/\\/g, '/');
  const filename = path.basename(absPath);
  const slug = slugFromFilename(filename);

  if (meta.draft === true || meta.draft === 'true') return null;

  const { channel, product, eventType } = inferChannel(rel, meta);
  const title = extractTitle(meta, body);
  const description = extractDescription(meta, body);
  let tags = [];
  if (typeof meta.tags === 'string') {
    try {
      tags = JSON.parse(meta.tags.replace(/'/g, '"'));
    } catch {
      tags = [];
    }
  }

  const dateStr = meta.date ? String(meta.date).slice(0, 10) : '2024-01-01';

  return {
    locale,
    translationKey: translationKeyFromSlug(slug),
    slug,
    title,
    description,
    date: dateStr,
    channel,
    product,
    eventType,
    topic: inferTopics(tags, title, body),
    category: meta.category || 'Product Updates',
    tags,
    featured: meta.featured === true || meta.featured === 'true',
    draft: false,
    author: meta.author || 'Openterface Team',
    social: meta.social || undefined,
    body: normalizeMarkdownMedia(body.replace(/^#\s+.+\n+/, '')),
  };
}

function findEnglishUpdateFiles() {
  const files = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.md') && !entry.name.startsWith('index')) {
        const isTranslation = LANG_SUFFIXES.some((l) => entry.name.endsWith(`.${l}.md`));
        if (!isTranslation && full.includes('/updates/')) files.push(full);
      }
    }
  }
  walk(LEGACY_DOCS);
  return files;
}

function main() {
  if (!fs.existsSync(LEGACY_DOCS)) {
    console.warn('Legacy docs not found at', LEGACY_DOCS, '— skipping migration.');
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const enFiles = findEnglishUpdateFiles();
  let written = 0;

  for (const enFile of enFiles) {
    const enData = processFile(enFile, 'en');
    if (!enData) continue;

    const basePath = enFile.replace(/\.md$/, '');
    const locales = [{ locale: 'en', file: enFile }];

    for (const lang of LANG_SUFFIXES) {
      const transFile = `${basePath}.${lang}.md`;
      if (fs.existsSync(transFile)) locales.push({ locale: lang, file: transFile });
    }

    for (const { locale, file } of locales) {
      const data = locale === 'en' ? enData : processFile(file, locale);
      if (!data) continue;
      data.translationKey = enData.translationKey;
      data.slug = enData.slug;

      const outName = `${enData.translationKey}--${locale}.md`;
      const outPath = path.join(OUT_DIR, outName);
      const yaml = buildYaml(data);
      fs.writeFileSync(outPath, `---\n${yaml}\n---\n\n${data.body}\n`, 'utf8');
      written++;
    }
  }

  console.log(`Migrated ${written} news articles to ${OUT_DIR}`);
}

main();
