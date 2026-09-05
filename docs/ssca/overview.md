---
title: SSCA 扩展总览
sidebar_position: 1
description: SSCA 的定位、内容边界和进入方式
---

# SSCA 扩展总览

Shape Shifter Curse Addon（SSCA）是独立社区项目，不是 SSC 官方组件。它建立在 SSC 的形态、动画和资源系统之上，增加终局形态、进化路线、战斗技能、专属资源、装备、故事和实用界面。[^source]

## 从哪里开始

想查看最终可以变成什么，阅读[形态目录](forms-catalog)。目录集中展示完整分支、内部 ID、进入条件和每种形态的主要能力。

已经进入进化使魔或进化美西螈路线，准备积累经验、点亮节点或使用进化道具时，阅读[进化系统](evolution)。技能按键和界面见[操作、HUD 与白名单](controls-and-safety)，诅咒值、抗性和形态资源条的计算见[数值系统](numeric-systems)。

## 与 SSC 的边界

| 范围                               | 主要负责方              |
| ---------------------------------- | ----------------------- |
| 基础形态、阶段、本能、诅咒之月     | SSC                     |
| `my_addon:*` 形态及多数主动技能    | SSCA                    |
| 形态渲染、变身流程、通用 Mana 接口 | SSC 提供框架，SSCA 扩展 |
| 进化树、月髓环、进化石、灵能宝珠   | SSCA                    |
| SSCA 故事和世界观扩写              | SSCA 社区内容           |

SSCA 的历史命名空间仍是 `my_addon`，模组 ID 则是 `ssc_addon`。命令、形态和物品的命名空间可能不同，不要看到 `my_addon:*` 就误判为另一个模组。

## 如何进入内容

新玩家翻开 SSC 的起始手册时，可以进入“SSCA 进化路线”选择界面。基线版本提供进化使魔和进化美西螈。

已经沿 SSC 常规路线进入最终形态的玩家，则主要通过月髓十字环或进化石进入 SSCA 终局形态。两件物品的目标不同，使用条件和失败后果也不同，不能互换。

:::warning Beta 基线
本站首发基线是 Minecraft 1.20.1、SSC 1.10.0、SSCA 8.0.0-beta.3。SSCA 本身较成熟，但这个构建仍以 beta 发布；整合包服主应锁定确切文件，不要只写“最新版”。
:::

[^source]: 源码核对：SSCA `fabric.mod.json`、`SscAddon.java`、`EvolutionRegistry.java` 与资源注册，当前 commit `e42a62aa`；模组元信息另与 [MC 百科条目](https://www.mcmod.cn/class/24327.html) 和官方 Wiki 交叉核对。注册与系统边界已核对；具体技能数值以形态页为准。
