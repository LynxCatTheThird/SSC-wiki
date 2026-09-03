---
title: 配置与兼容性
sidebar_position: 2
description: SSC 与 SSCA 当前配置文件、默认值和服务端生效范围
---

# 配置与兼容性

本页对应 SSC commit `c0f0bbb9` 和 SSCA commit `d84a18ca`。多人环境中，服务端权威配置以服务器文件为准；客户端改动不能覆盖服务器规则。

## 配置入口

安装 Mod Menu 后，可以从模组列表进入 Cloth Config 界面。直接编辑文件时应先关闭游戏或服务器，修改前备份配置。

| 模组 | 配置名 | 作用域 |
| --- | --- | --- |
| SSC | `shape-shifter-curse-common` | 双端/服务器规则 |
| SSC | `shape-shifter-curse-client` | 本地显示和工具 |
| SSCA | `ssc_addon_server` | 服务端权威规则 |
| SSCA | `ssc_addon_client` | 本地 HUD、按键和颜色编辑器 |

## SSC 公共配置

### 变异生物生成

这些值是 `0.0` 到 `1.0` 的生成概率；设为 `0` 可关闭对应生成。

| 字段 | 默认值 | 说明 |
| --- | ---: | --- |
| `transformativeBatSpawnChance` | `0.5` | 变异蝙蝠 |
| `transformativeAxolotlSpawnChance` | `0.5` | 变异美西螈 |
| `transformativeOcelotSpawnChance` | `0.5` | 变异豹猫 |
| `transformativeWolfSpawnChance` | `0.5` | 变异狼 |
| `transformativeSpiderSpawnChance` | `0.5` | 变异蜘蛛 |

### 世界与变身

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `curseMoonPhase` | `[1, 5]` | 触发诅咒之月的月相编号 |
| `allowSleepInCursedMoon` | `false` | 是否允许诅咒之月期间睡觉 |
| `enableCursedMoonTransform` | `true` | 是否启用月夜变身 |
| `enableDebugCommand` | `false` | 是否允许普通权限使用 debug 命令 |
| `enableFullStackUpgrade` | `true` | 升级配方能否处理整组物品 |
| `enableFoodHabitSystem` | `true` | 是否启用食物习惯系统 |
| `immediatelyTransform` | `false` | 是否立即完成变身 |
| `enableInitialForm` | `false` | 是否启用初始形态随机选择 |
| `initialFormIds` | `["shape-shifter-curse:original_before_enable:1"]` | 初始形态候选 ID，支持数据包形态 |
| `statusPotionWithCurse` | `false` | 变身药水能否影响尚未获得书的玩家 |
| `witchPotionForPreBook` | `false` | 女巫能否向尚未获得书的玩家投掷相关药水 |

:::warning `enableInitialForm` 默认值
源码注释写着 `Default: true`，但字段实际初始化为 `false`。本站以运行代码的字段值为准；这是旧文档或配置界面最容易写错的地方之一。
:::

### 已废弃 Patron 配置

`enablePatronFormSystem`、各类 Data/Resource Pack URL、Patron Data URL 和检查间隔仍留在配置类中，但源码已标为 `[Obsolete]`。新服务器不应围绕这些字段建立部署方案。

## SSC 客户端配置

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `enableFormModelOnVanillaFirstPersonRender` | `true` | 原版第一人称中渲染形态模型 |
| `ignoreNoRenderArmPower` | `false` | 忽略隐藏手臂能力 |
| `minBlinkIntervalTick` | `60` | 最短眨眼间隔 |
| `maxBlinkIntervalTick` | `140` | 最长眨眼间隔 |
| `blinkTick` | `4` | 眨眼持续时间 |
| `newStartBookForBiggerScreen` | `false` | 使用 2 倍大的起始书界面 |
| `enableChangeFPMConfig` | `true` | 自动调整 First-person Model 配置 |
| `disableUnlockCheckInFormColorSelectMenu` | `false` | 关闭颜色菜单的解锁检查 |
| `fcs_use_v1_menu` | `false` | 使用专业版颜色菜单 |
| `unlockAllFormInFormColorSelectMenu` | `false` | 工具：解锁颜色菜单所有形态 |
| `clearFormUnlockRecordInFormColorSelectMenu` | `false` | 工具：清除颜色解锁记录 |
| `enableBetterCombatFix` | `true` | 启用 Better Combat 修复 |

### HUD 位置

Instinct、Mana 和物品存储条使用 1–9 九宫格锚点加 X/Y 偏移。默认锚点均为 `8`：

| HUD | X | Y |
| --- | ---: | ---: |
| Instinct | `100` | `-9` |
| Mana | `100` | `-17` |
| 物品存储 | `-120` | `1` |

客户端配置还保留 Patron 授权文件 URL 和自定义 UUID 字段。它们不应被理解为服务器权限配置。

## SSCA 服务端配置

当前真正的服务端配置只有三类：

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `whitelistEnabled` | `true` | 启用技能白名单总开关 |
| `bookLanguage` | `CHINESE` | 服务器战利品箱生成的故事书语言 |
| `disabledSkills` | `[]` | 全局禁用技能 ID 列表 |

:::danger 不要使用旧的平衡参数表
SSCA 服务端配置类明确说明：雪狐、悦灵、阿努比斯狼和物品的旧平衡参数从未被代码读取，现已移除。源码中仅有私有旧结构作为说明，实际数值仍在能力 JSON 或 Java 类中。旧 Wiki 若声称可以通过这些配置改变伤害、范围或冷却，应视为过时。
:::

## SSCA 客户端配置

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `showCdBar` | `true` | 显示技能冷却条 |
| `showCdSeconds` | `true` | 显示冷却秒数 |
| `mancianimaTeleportMode` | `RAYCAST` | 契灵瞬移模式；也可选 `PLATFORM` |
| `enableColorEditor` | `false` | 使用 SSCA 颜色编辑器和 20 槽预设 |

冷却条默认以锚点 `8`、主条偏移 `(-98, -21)`、副条偏移 `(98, -21)` 左右对称显示。位置由可视化编辑界面维护，不直接暴露在普通 AutoConfig 页面。

SSCA 还按形态保存特殊键位配置。启用后，该形态的主/副技能不再同步 SSC 的通用技能键，而使用玩家指定按键。

## 排障顺序

1. 确认 Minecraft、Fabric Loader、SSC、SSCA 和 GeckoLib 版本。
2. 确认修改的是正确作用域的配置文件。
3. 暂时恢复默认配置，排除旧字段残留。
4. 检查完整启动日志，不要只截取最后一行异常。
5. 若问题涉及技能表现，确认粒子未被关闭。
6. 若问题涉及第一人称渲染，检查 First-person Model 和 Better Combat 兼容选项。

来源：SSC `CommonConfig.java`、`ClientConfig.java`；SSCA `SSCAddonServerConfig.java`、`SSCAddonClientConfig.java`。状态：`verified`。
