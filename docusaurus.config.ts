import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import LocalSearch from '@easyops-cn/docusaurus-search-local';

const config: Config = {
  title: 'SSC Wiki',
  tagline: 'Shape Shifter Curse 与 SSCA 的非官方中文文档',
  favicon: 'img/favicon.svg',
  url: 'https://ssc-wiki.pages.dev',
  baseUrl: '/',
  organizationName: 'ssc-community',
  projectName: 'ssc-wiki',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'throw'},
    mermaid: true,
    remarkRehypeOptions: {
      footnoteLabel: '资料来源',
      footnoteBackLabel: '返回正文',
      footnoteLabelProperties: {className: ['footnotes-title']},
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: process.env.NODE_ENV === 'production',
          editUrl: 'https://github.com/LynxCatTheThird/SSC-wiki/edit/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [LocalSearch, {
      indexDocs: true,
      indexBlog: false,
      docsRouteBasePath: '/',
      language: ['zh', 'en'],
      hashed: 'filename',
      highlightSearchTermsOnTargetPage: true,
      searchResultLimits: 12,
      searchResultContextMaxLength: 80,
      explicitSearchResultPath: true,
      searchBarShortcutKeymap: 'mod+k',
    }],
  ],
  themeConfig: {
    image: 'img/ssc-social-card.svg',
    colorMode: {
      // Docusaurus requires a light/dark fallback; this flag follows OS preference.
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SSC Wiki',
      logo: {alt: 'SSC Wiki', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '文档'},
        {to: '/reference/versions', label: '版本与兼容性', position: 'left'},
        {href: 'https://github.com/LynxCatTheThird/SSC-wiki', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: '项目来源', items: [
          {label: 'SSC GitHub', href: 'https://github.com/onixary/shape-shifter-curse-fabric'},
          {label: 'SSCA GitHub', href: 'https://github.com/MangZai-120/shape-shifter-curse-addon'},
        ]},
        {title: '反馈', items: [
          {label: '提交 Issue', href: 'https://github.com/LynxCatTheThird/SSC-wiki/issues'},
        ]},
      ],
      copyright: 'SSC Wiki 是社区维护的非官方文档。',
    },
    prism: {additionalLanguages: ['java', 'json', 'bash', 'yaml']},
  } satisfies Preset.ThemeConfig,
};

export default config;
