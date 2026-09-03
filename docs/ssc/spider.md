---
title: 蜘蛛
sidebar_position: 2
mod: SSC
minecraft: 1.20.1
loader: Fabric
ssc_version: 1.10.0
verified_at: 2026-09-03
source_commit: c0f0bbb9
status: partial
---

# 蜘蛛

蜘蛛形态线包含 `spider_0` 至 `spider_3` 四个阶段。源码将第一阶段标记为 Starter Form，中后期阶段包含抗性、Instinct 锁定、最终形态和诅咒之月相关标记。[^source]

## 阶段概览

| 阶段       | 主要能力                                     | 主要限制                                |
| ---------- | -------------------------------------------- | --------------------------------------- |
| `spider_0` | 蛛丝投射物、蛛网攀爬、不受蛛网减速、Mana     | 腿甲受限、素食收益降低                  |
| `spider_1` | 茧阶段专属 Instinct 和粒子                   | 禁止疾跑、减速、视野变暗、物品/旋转受限 |
| `spider_2` | 爬墙、夜视、专属额外槽、制作蛛网与蛛网堆肥桶 | 胸甲/腿甲受限、火焰伤害增加、食性受限   |
| `spider_3` | 蛛网桥、完整蛛丝蓄力、台阶跨越和空中跳跃     | 胸/腿/鞋受限、火焰伤害增加              |

## 蛛丝技能

主技能使用 `key.shape-shifter-curse.active_skill_1`，为持续按键的蓄力动作。最终阶段有三档有效蓄力：

| 档位 |    蓄力 |    冷却 | Mana 判定 |
| ---: | ------: | ------: | --------: |
|    1 | 20 tick | 20 tick |    至少 6 |
|    2 | 40 tick | 40 tick |    至少 6 |
|    3 | 60 tick | 60 tick |    至少 6 |

蓄力期间每 tick 消耗 `0.25` Mana，因此完整三档蓄力正好消耗 15 Mana。低阶段只开放部分档位。

## 蛛网桥

最终阶段的副技能使用 `active_skill_2`，蓄力规则与蛛丝技能相同。三档桥梁参数分别为：

| 档位 | 长度 | 半宽参数 |
| ---: | ---: | -------: |
|    1 |   10 |        0 |
|    2 |   14 |        0 |
|    3 |   22 |        1 |

## 制作与获取

第 3 阶段可以通过能力交互制作蛛网和蛛网堆肥桶：两根线合成蛛网，消耗 5 Mana；蛛网与堆肥桶交互制作蛛网堆肥桶，消耗 20 Mana。Mana 每 10 tick 恢复 0.1。

未加工月之尘用 2 个青金石和 2 个紫水晶碎片按 `LA / AL` 排列，产出 4 个；露水蛛网用蛛网、未加工月之尘和丝露无序合成，产出 1 个。蜘蛛击杀目标实体时有 50% 基础概率掉落 1 个丝露，抢夺每级额外增加 10 个百分点。[^items]

:::note 跨模组边界
上表数值由能力 JSON 直接执行。蛛丝命中还会调用 Java 侧的缠绕、方块生成与网络同步；若服务器安装了会取消投射物命中或禁止放置方块的保护模组，可能出现命中动画存在、蛛网没有生成的情况。此时管理员应检查保护模组日志和出生点保护范围。
:::

[^source]: 源码核对：SSC `RegPlayerForms.java`、`origins/form_spider_*.json`、蜘蛛能力 JSON/Java 和 Modrinth 更新说明，commit `c0f0bbb9`。数值来自数据定义；跨模组行为仍可能变化。
[^items]: 配方与掉落来自 SSC `recipes/untreated_moondust.json`、`recipes/dew_covered_cobweb.json` 与 `loot_tables/entities/t_spider.json`，commit `c0f0bbb9`。
