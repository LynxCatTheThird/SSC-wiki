import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "index",
    {
      type: "category",
      label: "入门",
      items: [
        "getting-started/installation",
        "getting-started/first-transformation",
      ],
    },
    {
      type: "category",
      label: "核心玩法",
      items: [
        "gameplay/transformative-effect",
        "gameplay/cursed-moon",
        "gameplay/forms-and-stages",
        "gameplay/instinct",
        "gameplay/key-items",
      ],
    },
    {
      type: "category",
      label: "幻形者诅咒（SSC）形态",
      items: [
        "ssc/forms-overview",
        "ssc/bat",
        "ssc/axolotl",
        "ssc/ocelot",
        "ssc/familiar-fox",
        "ssc/snow-fox",
        "ssc/anubis-wolf",
        "ssc/spider",
        "ssc/special-forms",
      ],
    },
    {
      type: "category",
      label: "附属模组",
      items: [
        {
          type: "category",
          label: "幻形者诅咒扩展包（SSCA）",
          items: [
        "addons/ssca/overview",
        "addons/ssca/forms-catalog",
        "addons/ssca/forms-complete",
        "addons/ssca/story",
        {
          type: "category",
          label: "进化路线",
          items: [
            {
              type: "category",
              label: "使魔红狐",
              items: [
                "addons/ssca/forms/routes/familiar-fox/upgrade",
                "addons/ssca/forms/routes/familiar-fox/sp",
                "addons/ssca/forms/routes/familiar-fox/mancianima",
                "addons/ssca/forms/routes/familiar-fox/red",
              ],
            },
            {
              type: "category",
              label: "美西螈",
              items: [
                "addons/ssca/forms/routes/axolotl/upgrade",
                "addons/ssca/forms/routes/axolotl/sp",
                "addons/ssca/forms/routes/axolotl/fluorescent",
                "addons/ssca/forms/routes/axolotl/aling",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "幻形者诅咒（SSC）终局分支",
          items: [
            {
              type: "category",
              label: "雪狐",
              items: [
                "addons/ssca/forms/ssc/snow-fox/ice-spine",
                "addons/ssca/forms/ssc/snow-fox/sp",
              ],
            },
            {
              type: "category",
              label: "胡狼",
              items: [
                "addons/ssca/forms/ssc/anubis-wolf/golden-sandstorm",
                "addons/ssca/forms/ssc/anubis-wolf/anubis-wolf-sp",
              ],
            },
            {
              type: "category",
              label: "蝙蝠",
              items: [
                "addons/ssca/forms/ssc/bat/desmodus",
                "addons/ssca/forms/ssc/bat/parasitic-fruit",
              ],
            },
            {
              type: "category",
              label: "豹猫",
              items: [
                "addons/ssca/forms/ssc/ocelot/wind-spirit",
                "addons/ssca/forms/ssc/ocelot/nova",
              ],
            },
            {
              type: "category",
              label: "蜘蛛",
              items: [
                "addons/ssca/forms/ssc/spider/moon-weaver",
                "addons/ssca/forms/ssc/spider/salticidae",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "特殊形态分支",
          items: [
            {
              type: "category",
              label: "悦灵",
              items: [
                "addons/ssca/forms/special/allay/allay-sp",
                "addons/ssca/forms/special/allay/fallen",
              ],
            },
            {
              type: "category",
              label: "野猫",
              items: [
                "addons/ssca/forms/special/wild-cat/nightmare",
                "addons/ssca/forms/special/wild-cat/sp",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "系统与操作",
          items: [
            "addons/ssca/numeric-systems",
            "addons/ssca/evolution",
            "addons/ssca/controls-and-safety",
          ],
        },
        {
          type: "category",
          label: "物品与装备",
          items: [
            "addons/ssca/items/evolution-items",
            "addons/ssca/items/materials",
            "addons/ssca/items/tools",
            "addons/ssca/items/trinkets",
          ],
        },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "服主手册",
      items: ["server/commands", "server/configuration"],
    },
    { type: "category", label: "开发者", items: ["developer/custom-forms"] },
    {
      type: "category",
      label: "参考",
      items: ["reference/versions", "reference/sources"],
    },
  ],
};

export default sidebars;
