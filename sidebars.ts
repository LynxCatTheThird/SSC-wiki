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
      'ssc/special-forms',
    ]},
    {type: 'category', label: 'SSCA 扩展', items: [
      'ssca/overview',
      'ssca/forms-catalog',
      'ssca/story',
      {type: 'category', label: '进化路线', items: [
        {type: 'category', label: '使魔狐', items: [
          'ssca/forms/routes/familiar-fox/upgrade',
          'ssca/forms/routes/familiar-fox/sp',
          'ssca/forms/routes/familiar-fox/mancianima',
          'ssca/forms/routes/familiar-fox/red',
        ]},
        {type: 'category', label: '美西螈', items: [
          'ssca/forms/routes/axolotl/upgrade',
          'ssca/forms/routes/axolotl/sp',
          'ssca/forms/routes/axolotl/fluorescent',
          'ssca/forms/routes/axolotl/aling',
        ]},
      ]},
      {type: 'category', label: 'SSC 终局分支', items: [
        {type: 'category', label: '雪狐', items: [
          'ssca/forms/ssc/snow-fox/ice-spine',
          'ssca/forms/ssc/snow-fox/sp',
        ]},
        {type: 'category', label: '阿努比斯之狼', items: [
          'ssca/forms/ssc/anubis-wolf/golden-sandstorm',
          'ssca/forms/ssc/anubis-wolf/anubis-wolf-sp',
        ]},
        {type: 'category', label: '蝙蝠', items: [
          'ssca/forms/ssc/bat/desmodus',
          'ssca/forms/ssc/bat/parasitic-fruit',
        ]},
        {type: 'category', label: '豹猫', items: [
          'ssca/forms/ssc/ocelot/wind-spirit',
          'ssca/forms/ssc/ocelot/nova',
        ]},
        {type: 'category', label: '蜘蛛', items: [
          'ssca/forms/ssc/spider/moon-weaver',
          'ssca/forms/ssc/spider/salticidae',
        ]},
      ]},
      {type: 'category', label: '特殊形态分支', items: [
        {type: 'category', label: '悦灵', items: [
          'ssca/forms/special/allay/allay-sp',
          'ssca/forms/special/allay/fallen',
        ]},
        {type: 'category', label: '野猫', items: [
          'ssca/forms/special/wild-cat/nightmare',
          'ssca/forms/special/wild-cat/sp',
        ]},
      ]},
      {type: 'category', label: '系统与操作', items: [
        'ssca/numeric-systems',
        'ssca/evolution',
        'ssca/controls-and-safety',
      ]},
    ]},
    {type: 'category', label: '服主手册', items: ['server/commands', 'server/configuration']},
    {type: 'category', label: '开发者', items: ['developer/custom-forms']},
    {type: 'category', label: '参考', items: ['reference/versions', 'reference/sources']},
  ],
};

export default sidebars;
