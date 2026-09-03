---
title: SSCA 扩展总览
sidebar_position: 1
description: SSCA 的定位、内容边界和进入方式
---

# SSCA 扩展总览

Shape Shifter Curse Addon（SSCA）是独立社区项目，不是 SSC 官方组件。它建立在 SSC 的形态、动画和资源系统之上，增加终局形态、进化路线、战斗技能、专属资源、装备、故事和实用界面。

## 当前基线包含什么

- 22 个代码注册形态，覆盖 SSC 的七条常规形态线及悦灵、野猫等特殊形态；
- 月髓十字环与进化石两套终局分支；
- 进化使魔、进化美西螈两条可加点成长路线；
- Mana、血液、灵魂能量、霜寒值、种子能量、九命等形态资源；
- 主技能、次要技能和部分形态专用操作；
- 技能白名单、冷却 HUD、资源条位置编辑和形态配色分享；
- 能量网络、容器、转换设备、专属饰品和剧情书籍。

具体形态先查[形态目录](forms-catalog)，成长与终局分支查[进化系统](evolution)。第一次使用技能前请阅读[操作、HUD 与白名单](controls-and-safety)。服务器命令和配置分别收录在[命令参考](../server/commands)与[配置参考](../server/configuration)。

## 与 SSC 的边界

| 范围 | 主要负责方 |
| --- | --- |
| 基础形态、阶段、本能、诅咒之月 | SSC |
| `my_addon:*` 形态及多数主动技能 | SSCA |
| 形态渲染、变身流程、通用 Mana 接口 | SSC 提供框架，SSCA 扩展 |
| 进化树、月髓环、进化石、灵能宝珠 | SSCA |
| SSCA 故事和世界观扩写 | SSCA 社区内容 |

SSCA 的历史命名空间仍是 `my_addon`，模组 ID 则是 `ssc_addon`。命令、形态和物品的命名空间可能不同，不要看到 `my_addon:*` 就误判为另一个未安装模组。

## 如何进入内容

新玩家翻开 SSC 的起始手册时，可以进入“SSCA 进化路线”选择界面。当前开放路线会从数据包的 route JSON 动态列出，基线版本提供进化使魔和进化美西螈。

已经沿 SSC 常规路线进入最终形态的玩家，则主要通过月髓十字环或进化石进入 SSCA 终局形态。两件物品的目标不同，使用条件和失败后果也不同，不能互换。

:::warning Beta 基线
本站首发基线是 Minecraft 1.20.1、SSC 1.10.0、SSCA 8.0.0-beta.2。SSCA 本身较成熟，但这个构建仍以 beta 发布；整合包服主应锁定确切文件，不要只写“最新版”。
:::

来源：SSCA `fabric.mod.json`、`SscAddonForms.java`、`EvolutionRegistry.java` 与资源注册，commit `d84a18ca`。状态：`verified`（注册与系统边界）；具体技能平衡：`partial`。
