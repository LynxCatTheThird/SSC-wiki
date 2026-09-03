---
title: SSC 形态总览
sidebar_position: 1
---

# SSC 形态总览

SSC 的内置形态分为常规阶段形态、特殊形态和子形态。下面的目录覆盖当前源码注册的七条常规路线和两个特殊形态。[^source]

| 形态线                             |                              阶段 | 当前状态                                               |
| ---------------------------------- | --------------------------------: | ------------------------------------------------------ |
| [蝙蝠](bat)                        |                   `bat_0`–`bat_3` | 夜行、跳跃、滑翔/附着                                  |
| [美西螈](axolotl)                  |           `axolotl_0`–`axolotl_3` | 水生、氧气、再生和水流冲刺                             |
| [豹猫](ocelot)                     |             `ocelot_0`–`ocelot_3` | 潜行、攀爬、扑击和裸爪战斗                             |
| [使魔狐](familiar-fox)             | `familiar_fox_0`–`familiar_fox_3` | 女巫关系、魔力、药水和火焰魔法                         |
| [雪狐](snow-fox)                   |         `snow_fox_0`–`snow_fox_3` | 多段跳、落地攻击、雪球和温度环境                       |
| [阿努比斯之狼](anubis-wolf)        |   `anubis_wolf_0`–`anubis_wolf_3` | 凋零、亡灵、召唤狼和不死能力                           |
| [蜘蛛](spider)                     |             `spider_0`–`spider_3` | 蛛丝、茧、攀爬和蛛网桥                                 |
| [悦灵特殊形态](special-forms#悦灵) |                        `allay_sp` | 飞行、远程支援与音乐互动；可用普通抑制剂回到原始变形者 |
| [野猫特殊形态](special-forms#野猫) |                    `feral_cat_sp` | 四足潜行猎手；可用普通抑制剂回到原始变形者             |

各行链接进入完整形态页。阶段变化和最终形态的通用规则集中在[形态与阶段](../gameplay/forms-and-stages)，催化剂与抑制剂的效果集中在[关键物品](../gameplay/key-items)。

[^source]: 形态数量、阶段 ID 和能力方向经 SSC `RegPlayerForms.java` 与各形态 Origin JSON 核对，commit `c0f0bbb9`。
