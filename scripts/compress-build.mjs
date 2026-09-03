import {promises as fs} from 'node:fs';
import path from 'node:path';
import {brotliCompress, gzip} from 'node:zlib';
import {promisify} from 'node:util';

const brotliCompressAsync = promisify(brotliCompress);
const gzipAsync = promisify(gzip);
const root = path.resolve('build');
const compressible = /\.(?:html|css|js|json|svg|xml|txt|map)$/i;

async function walk(directory) {
  const entries = await fs.readdir(directory, {withFileTypes: true});
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (compressible.test(entry.name) && !entry.name.endsWith('.br') && !entry.name.endsWith('.gz')) {
      const source = await fs.readFile(file);
      await Promise.all([
        fs.writeFile(`${file}.br`, await brotliCompressAsync(source)),
        fs.writeFile(`${file}.gz`, await gzipAsync(source, {level: 9})),
      ]);
    }
  }
}

await walk(root);
console.log('Compressed static assets in build/.');
