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
      label: "幻形者诅咒",
      items: [
        {
          type: "category",
          label: "形态",
          key: "shape-shifter-curse-forms",
          items: [
            "ssc/forms/overview",
            "ssc/forms/bat",
            "ssc/forms/axolotl",
            "ssc/forms/ocelot",
            "ssc/forms/familiar-fox",
            "ssc/forms/snow-fox",
            "ssc/forms/anubis-wolf",
            "ssc/forms/spider",
            "ssc/forms/special-forms",
          ],
        },
        {
          type: "category",
          label: "物品",
          key: "shape-shifter-curse-items",
          items: ["ssc/items/key-items"],
        },
        {
          type: "category",
          label: "系统",
          key: "shape-shifter-curse-systems",
          items: [
            "ssc/systems/transformative-effect",
            "ssc/systems/cursed-moon",
            "ssc/systems/forms-and-stages",
            "ssc/systems/instinct",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "附属模组",
      items: [
        {
          type: "category",
          label: "幻形者诅咒扩展包",
          items: [
            "addons/ssca/overview",
            {
              type: "category",
              label: "形态",
              key: "shape-shifter-curse-addon-forms",
              items: [
                "addons/ssca/forms/overview",
                "addons/ssca/forms/reference",
                {
                  type: "category",
                  label: "进化路线",
                  items: [
                    {
                      type: "category",
                      label: "使魔红狐形态",
                      items: [
                        "addons/ssca/forms/routes/familiar-fox/upgrade",
                        "addons/ssca/forms/routes/familiar-fox/sp",
                        "addons/ssca/forms/routes/familiar-fox/mancianima",
                        "addons/ssca/forms/routes/familiar-fox/red",
                      ],
                    },
                    {
                      type: "category",
                      label: "美西螈形态",
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
                  label: "本体形态终局分支",
                  items: [
                    {
                      type: "category",
                      label: "雪狐形态",
                      items: [
                        "addons/ssca/forms/base-forms/snow-fox/ice-spine",
                        "addons/ssca/forms/base-forms/snow-fox/sp",
                      ],
                    },
                    {
                      type: "category",
                      label: "胡狼形态",
                      items: [
                        "addons/ssca/forms/base-forms/anubis-wolf/golden-sandstorm",
                        "addons/ssca/forms/base-forms/anubis-wolf/anubis-wolf-sp",
                      ],
                    },
                    {
                      type: "category",
                      label: "蝙蝠形态",
                      items: [
                        "addons/ssca/forms/base-forms/bat/desmodus",
                        "addons/ssca/forms/base-forms/bat/parasitic-fruit",
                      ],
                    },
                    {
                      type: "category",
                      label: "豹猫形态",
                      items: [
                        "addons/ssca/forms/base-forms/ocelot/wind-spirit",
                        "addons/ssca/forms/base-forms/ocelot/nova",
                      ],
                    },
                    {
                      type: "category",
                      label: "蜘蛛形态",
                      items: [
                        "addons/ssca/forms/base-forms/spider/moon-weaver",
                        "addons/ssca/forms/base-forms/spider/salticidae",
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
                      label: "悦灵形态",
                      items: [
                        "addons/ssca/forms/special/allay/allay-sp",
                        "addons/ssca/forms/special/allay/fallen",
                      ],
                    },
                    {
                      type: "category",
                      label: "野猫形态",
                      items: [
                        "addons/ssca/forms/special/wild-cat/nightmare",
                        "addons/ssca/forms/special/wild-cat/sp",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "物品",
              key: "shape-shifter-curse-addon-items",
              items: [
                "addons/ssca/items/evolution-items",
                "addons/ssca/items/materials",
                "addons/ssca/items/tools",
                "addons/ssca/items/trinkets",
              ],
            },
            {
              type: "category",
              label: "系统",
              key: "shape-shifter-curse-addon-systems",
              items: [
                "addons/ssca/systems/numeric-systems",
                "addons/ssca/systems/evolution",
                "addons/ssca/systems/controls-and-safety",
              ],
            },
            {
              type: "category",
              label: "剧情",
              items: ["addons/ssca/lore/story"],
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
