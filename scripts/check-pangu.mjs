import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pangu } from 'pangu';

const roots = ['docs', 'i18n'];
const write = process.argv.includes('--write');
const files = [];

async function walk(directory) {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.md')) files.push(file);
  }
}

function spaceMarkdown(source) {
  // Keep frontmatter, fenced code, inline code, and link destinations byte-for-byte.
  const protectedPattern = /(^---\n[\s\S]*?\n---\n|```[\s\S]*?```|`[^`\n]+`|\]\([^\n)]*\))/gm;
  return source
    .split(protectedPattern)
    .map((part, index) => (index % 2 ? part : pangu.spacingText(part)))
    .join('');
}

for (const root of roots) await walk(root);
let invalid = false;
for (const file of files) {
  const source = await fs.readFile(file, 'utf8');
  const corrected = spaceMarkdown(source);
  if (corrected !== source) {
    invalid = true;
    console.error(`CJK/Latin spacing: ${file}`);
    if (write) await fs.writeFile(file, corrected);
  }
}
if (invalid && !write) process.exitCode = 1;
