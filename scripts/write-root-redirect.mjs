import { access, writeFile } from 'node:fs/promises';

await Promise.all([access('build/zh-CN/index.html'), access('build/en/index.html')]);

const redirectPage = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=/zh-CN/">
    <title>幻形者诅咒 Wiki</title>
    <script>
      const target = new URL('/zh-CN/', window.location.origin);
      target.search = window.location.search;
      target.hash = window.location.hash;
      window.location.replace(target);
    </script>
  </head>
  <body>
    <p><a href="/zh-CN/">进入中文站点</a> · <a href="/en/">Open the English site</a></p>
  </body>
</html>
`;

await writeFile('build/index.html', redirectPage);
