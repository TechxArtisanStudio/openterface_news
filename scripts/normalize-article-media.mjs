/**
 * Normalize legacy MkDocs markdown media syntax in article bodies.
 * Run: node scripts/normalize-article-media.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NEWS_DIR = path.resolve(__dirname, '../src/content/news');

export function normalizeMarkdownMedia(body) {
  let output = body;

  // ![alt](url){:style="..."}  (straight or curly quotes)
  output = output.replace(
    /!\[([^\]]*)\]\(([^)]+)\)\{:style=["“]([^"”]+)["”]\}/g,
    (_, alt, url, style) =>
      `<img src="${url.trim()}" alt="${alt.replace(/"/g, '&quot;')}" style="${style}" loading="lazy">`,
  );

  // Strip inline max-height on slideshow images; slideshow CSS handles sizing.
  output = output.replace(
    /(<div class="slide[^"]*">\s*)<img([^>]*?)style="max-height:\s*\d+px;?"([^>]*?)>/g,
    '$1<img$2$3>',
  );

  return output;
}

function main() {
  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith('.md'));
  let updated = 0;

  for (const file of files) {
    const filePath = path.join(NEWS_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const match = raw.match(/^---\s*\n[\s\S]*?\n---\s*\n([\s\S]*)$/);
    if (!match) continue;

    const frontmatter = raw.slice(0, raw.length - match[1].length);
    const body = match[1];
    const normalized = normalizeMarkdownMedia(body);

    if (normalized !== body) {
      fs.writeFileSync(filePath, `${frontmatter}${normalized}`, 'utf8');
      updated++;
    }
  }

  console.log(`Normalized media in ${updated} article files`);
}

if (fileURLToPath(import.meta.url) === path.resolve(process.argv[1] ?? '')) {
  main();
}
