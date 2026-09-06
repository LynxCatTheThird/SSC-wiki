---
title: 进化用品
sidebar_position: 1
description: SSCA 的月髓十字环、进化石与灵能宝珠
---

# 进化用品

三种进化用品承担不同工作：月髓十字环负责诅咒之月分支，进化石负责普通终局分支，灵能宝珠负责在 SSCA 独立进化路线之间转职。[^source]

## 月髓十字环

物品 ID：`ssc_addon:sp_upgrade_thing`。不可堆叠。工作台配方固定四角放金锭，中心放塑形核心，其余位置放绿宝石、红石粉、月尘纯晶和下界合金锭；上游还提供允许无序摆放部分材料的兼容配方。

使用时必须处于诅咒之月夜晚，并且当前形态存在月髓环目标。成功会消耗物品并开始变身；条件不足也会消耗物品。已经是目标 SP 形态时再次使用会触发破坏性爆炸，非和平难度会造成致命伤害。完整映射见[形态目录](../forms-catalog)。

## 进化石

物品 ID：`ssc_addon:evolution_stone`。不可堆叠。无序配方需要 2 个紫水晶碎片、2 个回响碎片、2 个钻石、1 个塑形核心、1 个月尘纯晶和 1 个下界合金锭。

长按右键约 1.6 秒。它不检查诅咒之月，只检查当前形态是否有进化石目标；没有目标或独立进化路线未完成时不会消耗。上游 Wiki 记录其会出现在沉船、远古城市、堡垒遗迹和末地城相关宝箱中，实际概率以发行包战利品表为准。

## 灵能宝珠

物品 ID：`ssc_addon:psionic_orb`。只对进化使魔、进化美西螈等独立路线起点生效。长按右键打开转职界面，至少需要 3 个已获得的加点点数；确认后消耗宝珠，等级倒退 3 个里程碑档，并按新路线重新计算点数。它不会把普通终局形态变成另一条路线。

:::warning 版本提示
官方 Wiki 的旧页面仍保留部分故事化描述和旧概率。本文只采用当前资源文件、Java 实现与上游 README 能相互印证的规则。
:::

[^source]: [SSCA 官方进化用品页面](https://shape-shifter-curse-addon.readthedocs.io/zh-cn/latest/items/evolution_items/)、上游 `EvolutionStoneItem.java`、`SpUpgradeItem.java`、`PsionicOrbItem.java`、配方与战利品表，commit `e42a62aa`。
