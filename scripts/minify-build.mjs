import {promises as fs} from 'node:fs';
import path from 'node:path';
import {minify as minifyHtml} from 'html-minifier-terser';
import CleanCSS from 'clean-css';
import {minify as minifyJs} from 'terser';
import {optimize as optimizeSvg} from 'svgo';

const root = path.resolve('build');
const cleanCss = new CleanCSS({level: 2});

async function walk(directory) {
  const entries = await fs.readdir(directory, {withFileTypes: true});
  for (const entry of entries) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(file);
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    const source = await fs.readFile(file, 'utf8');
    let output;
    if (extension === '.html') {
      output = await minifyHtml(source, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      });
    } else if (extension === '.css') {
      output = cleanCss.minify(source).styles;
    } else if (extension === '.js' && !entry.name.endsWith('.map')) {
      const result = await minifyJs(source, {format: {comments: false}});
      output = result.code;
    } else if (extension === '.svg') {
      output = optimizeSvg(source, { multipass: true }).data;
    } else if (extension === '.json' && !entry.name.endsWith('.map')) {
      output = JSON.stringify(JSON.parse(source));
    }

    if (output !== undefined && output !== source) {
      await fs.writeFile(file, `${output}\n`);
    }
  }
}

await walk(root);
console.log('Minified static assets in build/.');
