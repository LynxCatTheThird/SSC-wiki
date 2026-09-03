---
title: 形态与阶段
sidebar_position: 2
---

# 形态与阶段

SSC 将玩家形态注册为形态（Form）和形态组（Form Group）。主线形态通常以阶段推进，特殊形态和子形态则可能独立注册。

## 当前主线形态组

源码注册的主线形态组包括：

- 蝙蝠（Bat）；
- 美西螈（Axolotl）；
- 豹猫（Ocelot）；
- 使魔狐（Familiar Fox）；
- 雪狐（Snow Fox）；
- 阿努比斯之狼（Anubis Wolf）；
- 蜘蛛（Spider）；
- 悦灵和野猫等特殊形态。

大多数常规形态组由 0 到 3 阶段组成，并在高阶段设置最终形态、诅咒之月免疫或 Instinct 相关标记。具体能力请进入对应形态页面。

## 动态形态

SSC 支持通过 JSON/Data Pack 加载动态形态。动态形态与内置 Java 形态分开管理，重载时会清理和重新应用动态注册内容。自定义内容作者应使用独立命名空间，避免与内置 ID 冲突。

来源：SSC `player_form/RegPlayerForms.java`，commit `c0f0bbb9`。状态：`verified`（注册结构），能力表：`partial`。
