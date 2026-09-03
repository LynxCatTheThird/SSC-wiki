---
title: SSCA 形态目录
sidebar_position: 2
description: SSCA 8.0.0-beta.2 注册形态、内部 ID 与主要来源
---

# SSCA 形态目录

当前基线共注册 22 个附属形态。它们都带有 `NoInstinct`、`NoCursedMoonEffect`、`SpecialForm` 和 `InhibitorImmune` 标记：不会走普通本能或诅咒之月阶段推进，也不能靠普通抑制剂恢复。

## 使魔与美西螈进化路线

| 显示名 | 形态 ID | 定位或主要来源 |
| --- | --- | --- |
| 进化使魔 | `my_addon:upgrade_familiar_fox` | 开局可选的加点路线起点 |
| SP 使魔 | `my_addon:familiar_fox_sp` | 月髓环分支，也称灵界之主 |
| 契灵 | `my_addon:familiar_fox_mancianima` | 进化石分支 |
| 使魔 (Red) | `my_addon:familiar_fox_red` | 剧情/特殊变体 |
| 进化美西螈 | `my_addon:upgrade_axolotl` | 开局可选的加点路线起点 |
| SP 美西螈 | `my_addon:axolotl_sp` | 月髓环分支 |
| 荧光幼灵 | `my_addon:axolotl_fluorescent` | 进化石分支 |
| 阿澪 | `my_addon:axolotl_aling` | 荧光幼灵的剧情/特殊变体 |

## 其他终局分支

| SSC 起点 | 月髓十字环目标 | 进化石目标 |
| --- | --- | --- |
| `snow_fox_3` | 寒棘狐 `snow_fox_frostspine` | SP 雪狐 `snow_fox_sp` |
| `anubis_wolf_3` | 冥裁者 `anubis_wolf_sp` | 金沙岚 `golden_sandstorm_sp` |
| `bat_3` | 吸血蝙蝠 `bat_desmodus` | 寄生果蝠 `bat_parasitic_fruit` |
| `ocelot_3` | 风灵 `ocelot_wind_spirit` | 朔望 `ocelot_nova` |
| `spider_3` | 月织蛛 `spider_moon_weaver` | 跳蛛 `spider_salticidae` |
| `allay_sp` | SP 堕落悦灵 `fallen_allay_sp` | SP 悦灵 `allay_sp` |
| `feral_cat_sp` | 食梦魔 `wild_cat_nightmare` | 野猫 (SP) `wild_cat_sp` |

上表 SSCA 目标 ID 均使用 `my_addon:` 命名空间，表中为节省宽度省略了前缀；SSC 起点使用 `shape-shifter-curse:`。

## 能力方向

这些不是单纯的数值强化。当前资源和代码显示，各分支有独立战斗循环：

- SP 使魔、契灵围绕 Mana、灵魂火焰、标记和位移；
- SP 美西螈、荧光幼灵围绕湿润度、水矛、涡流和恢复；
- 吸血蝙蝠使用血液资源，寄生果蝠使用种子能量；
- 冥裁者使用灵魂能量和领域，金沙岚是另一条阿努比斯分支；
- 风灵偏连击和机动，朔望围绕九命；
- 月织蛛偏织网与摆荡，跳蛛偏跳跃猎杀和毒素；
- 寒棘狐、SP 雪狐使用冰雪能力；
- 食梦魔、野猫 (SP) 分别扩展梦境和潜行猎杀玩法。

:::note 文档进度
本页只保证“形态已注册、ID 与来源映射”准确。技能伤害、消耗、冷却和按键需要按每个 Java power、网络处理器与 Origin JSON 逐项复核，后续会拆为独立形态页。
:::

来源：SSCA `SscAddonForms.java`、`FormIdentifiers.java`、`EvolutionStoneItem.java`、`SpUpgradeItem.java` 与 `zh_cn.json`，commit `d84a18ca`。状态：`verified`（注册和路线映射）；能力摘要：`partial`。
