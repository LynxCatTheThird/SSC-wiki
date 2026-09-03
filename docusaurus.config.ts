import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SSC Wiki',
  tagline: 'Shape Shifter Curse 与 SSCA 的非官方中文文档',
  favicon: 'img/favicon.svg',
  url: 'https://ssc-wiki.pages.dev',
  baseUrl: '/',
  organizationName: 'ssc-community',
  projectName: 'ssc-wiki',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
          showLastUpdateTime: true,
          editUrl: 'https://github.com/ssc-community/ssc-wiki/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/ssc-social-card.svg',
    navbar: {
      title: 'SSC Wiki',
      logo: {alt: 'SSC Wiki', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '文档'},
        {to: '/reference/versions', label: '版本与兼容性', position: 'left'},
        {href: 'https://github.com/ssc-community/ssc-wiki', label: 'GitHub', position: 'right'},
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
          {label: '提交 Issue', href: 'https://github.com/ssc-community/ssc-wiki/issues'},
        ]},
      ],
      copyright: 'SSC Wiki 是社区维护的非官方文档。',
    },
    prism: {additionalLanguages: ['java', 'json', 'bash', 'yaml']},
  } satisfies Preset.ThemeConfig,
};

export default config;
