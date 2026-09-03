import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'index',
    {type: 'category', label: '入门', items: ['getting-started/installation', 'getting-started/first-transformation']},
    {type: 'category', label: '核心玩法', items: [
      'gameplay/transformative-effect',
      'gameplay/cursed-moon',
      'gameplay/forms-and-stages',
      'gameplay/instinct',
      'gameplay/key-items',
    ]},
    {type: 'category', label: 'SSC 形态', items: [
      'ssc/forms-overview',
      'ssc/bat',
      'ssc/axolotl',
      'ssc/ocelot',
      'ssc/familiar-fox',
      'ssc/snow-fox',
      'ssc/anubis-wolf',
      'ssc/spider',
    ]},
    {type: 'category', label: 'SSCA 扩展', items: ['ssca/overview', 'ssca/evolution']},
    {type: 'category', label: '服主手册', items: ['server/commands', 'server/configuration']},
    {type: 'category', label: '开发者', items: ['developer/custom-forms']},
    {type: 'category', label: '参考', items: ['reference/versions', 'reference/sources']},
  ],
};

export default sidebars;
