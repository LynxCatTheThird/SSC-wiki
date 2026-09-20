---
title: 形态与阶段
sidebar_position: 2
---

# 形态与阶段

幻形者诅咒将玩家形态注册为形态（Form）和形态组（Form Group）。主线形态通常以阶段推进，特殊形态和子形态则可能独立注册。[^source]

## 当前主线形态组

源码注册的主线形态组包括：

- 蝙蝠（Bat）；
- 美西螈（Axolotl）；
- 豹猫（Ocelot）；
- 使魔红狐（Familiar Fox）；
- 雪狐（Snow Fox）；
- 胡狼（Anubis Wolf）；
- 蜘蛛（Spider）；
- 悦灵和野猫等特殊形态。

七条常规形态线都注册了 `*_0` 到 `*_3` 四个 ID。本站统一使用初始阶段、第一阶段、第二阶段和永久阶段，不使用容易与 ID 后缀混淆的数字编号。

| ID 后缀 | 阶段名称 | 常见定位                                |
| ------: | -------- | --------------------------------------- |
|    `_0` | 初始阶段 | Starter Form，初始感染形态              |
|    `_1` | 第一阶段 | 能力和限制进一步显现                    |
|    `_2` | 第二阶段 | 诅咒之月最终过渡形态，通常锁定 Instinct |
|    `_3` | 永久阶段 | Final Form，通常不再受普通诅咒之月推进  |

蜘蛛线存在例外：`spider_1` 具有独立的茧阶段表现，其标记和常规形态不同。任何基于阶段的规则都应读取形态注册，而不是只靠 ID 后缀猜测。

## 形态标记

当前源码使用的关键标记包括：

| 标记                                  | 含义                         |
| ------------------------------------- | ---------------------------- |
| `StarterForm`                         | 可作为初始形态               |
| `FinalForm`                           | 常规最终形态                 |
| `SpecialForm`                         | 特殊形态，不属于普通阶段流程 |
| `InhibitorResist` / `InhibitorImmune` | 对抑制手段具有抗性或免疫     |
| `LockInstinct` / `NoInstinct`         | 锁定或禁用 Instinct          |
| `CursedMoonFinalForm`                 | 参与诅咒之月高阶段的特殊处理 |
| `NoCursedMoonEffect`                  | 不受普通诅咒之月影响         |
| `CatalystResist` / `CatalystImmune`   | 对 Catalyst 具有抗性或免疫   |
| `CanTFToFinalForm`                    | 可转化到最终形态             |

## 动态形态

幻形者诅咒支持通过 JSON/Data Pack 加载动态形态。动态形态与内置 Java 形态分开管理，重载时会清理和重新应用动态注册内容。自定义内容作者应使用独立命名空间，避免与内置 ID 冲突。

[^source]: 源码核对：幻形者诅咒 `player_form/RegPlayerForms.java`，commit `c0f0bbb9`。注册结构已逐项核对；能力摘要仍以各形态页的代码核对结果为准。
