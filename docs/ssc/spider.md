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

蜘蛛形态线包含 `spider_0` 至 `spider_3` 四个阶段。源码将第一阶段标记为 Starter Form，中后期阶段包含抗性、Instinct 锁定、最终形态和诅咒之月相关标记。

## 玩法方向

近期 SSC 代码和 Modrinth 更新说明显示，蜘蛛线围绕丝和蛛网展开：

- 发射蛛丝投射物；
- 建造可攀爬的蛛网结构；
- 限制敌人移动；
- 在后期获得更强的机动能力；
- 使用蜘蛛专属工具或饰品扩展玩法。

:::warning 数值待验证
技能消耗、冷却、伤害、射程和具体按键会随版本变化。本页当前只收录机制方向，不把 Modrinth 更新说明中的宣传文字当作完整数值表。
:::

## 相关内容

- [形态与阶段](../gameplay/forms-and-stages)；
- [服主命令](../server/commands)；
- [自定义形态](../developer/custom-forms)。

来源：SSC `RegPlayerForms.java`、蜘蛛能力类、资源文件和 Modrinth 1.9.0–1.9.1 更新说明。状态：`partial`。
