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
          items: [
            "mods/shape-shifter-curse/forms/overview",
            "mods/shape-shifter-curse/forms/bat",
            "mods/shape-shifter-curse/forms/axolotl",
            "mods/shape-shifter-curse/forms/ocelot",
            "mods/shape-shifter-curse/forms/familiar-fox",
            "mods/shape-shifter-curse/forms/snow-fox",
            "mods/shape-shifter-curse/forms/anubis-wolf",
            "mods/shape-shifter-curse/forms/spider",
            "mods/shape-shifter-curse/forms/special-forms",
          ],
        },
        {
          type: "category",
          label: "物品",
          items: ["mods/shape-shifter-curse/items/key-items"],
        },
        {
          type: "category",
          label: "系统",
          items: [
            "mods/shape-shifter-curse/systems/transformative-effect",
            "mods/shape-shifter-curse/systems/cursed-moon",
            "mods/shape-shifter-curse/systems/forms-and-stages",
            "mods/shape-shifter-curse/systems/instinct",
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
            "addons/shape-shifter-curse-addon/overview",
            {
              type: "category",
              label: "形态",
              items: [
                "addons/shape-shifter-curse-addon/forms/overview",
                "addons/shape-shifter-curse-addon/forms/reference",
                {
                  type: "category",
                  label: "进化路线",
                  items: [
                    {
                      type: "category",
                      label: "使魔红狐",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/routes/familiar-fox/upgrade",
                        "addons/shape-shifter-curse-addon/forms/routes/familiar-fox/sp",
                        "addons/shape-shifter-curse-addon/forms/routes/familiar-fox/mancianima",
                        "addons/shape-shifter-curse-addon/forms/routes/familiar-fox/red",
                      ],
                    },
                    {
                      type: "category",
                      label: "美西螈",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/routes/axolotl/upgrade",
                        "addons/shape-shifter-curse-addon/forms/routes/axolotl/sp",
                        "addons/shape-shifter-curse-addon/forms/routes/axolotl/fluorescent",
                        "addons/shape-shifter-curse-addon/forms/routes/axolotl/aling",
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
                      label: "雪狐",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/base-forms/snow-fox/ice-spine",
                        "addons/shape-shifter-curse-addon/forms/base-forms/snow-fox/sp",
                      ],
                    },
                    {
                      type: "category",
                      label: "胡狼",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/base-forms/anubis-wolf/golden-sandstorm",
                        "addons/shape-shifter-curse-addon/forms/base-forms/anubis-wolf/anubis-wolf-sp",
                      ],
                    },
                    {
                      type: "category",
                      label: "蝙蝠",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/base-forms/bat/desmodus",
                        "addons/shape-shifter-curse-addon/forms/base-forms/bat/parasitic-fruit",
                      ],
                    },
                    {
                      type: "category",
                      label: "豹猫",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/base-forms/ocelot/wind-spirit",
                        "addons/shape-shifter-curse-addon/forms/base-forms/ocelot/nova",
                      ],
                    },
                    {
                      type: "category",
                      label: "蜘蛛",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/base-forms/spider/moon-weaver",
                        "addons/shape-shifter-curse-addon/forms/base-forms/spider/salticidae",
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
                        "addons/shape-shifter-curse-addon/forms/special/allay/allay-sp",
                        "addons/shape-shifter-curse-addon/forms/special/allay/fallen",
                      ],
                    },
                    {
                      type: "category",
                      label: "野猫",
                      items: [
                        "addons/shape-shifter-curse-addon/forms/special/wild-cat/nightmare",
                        "addons/shape-shifter-curse-addon/forms/special/wild-cat/sp",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "物品",
              items: [
                "addons/shape-shifter-curse-addon/items/evolution-items",
                "addons/shape-shifter-curse-addon/items/materials",
                "addons/shape-shifter-curse-addon/items/tools",
                "addons/shape-shifter-curse-addon/items/trinkets",
              ],
            },
            {
              type: "category",
              label: "系统",
              items: [
                "addons/shape-shifter-curse-addon/systems/numeric-systems",
                "addons/shape-shifter-curse-addon/systems/evolution",
                "addons/shape-shifter-curse-addon/systems/controls-and-safety",
              ],
            },
            {
              type: "category",
              label: "剧情",
              items: ["addons/shape-shifter-curse-addon/lore/story"],
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
