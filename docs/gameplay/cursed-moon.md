---
title: 诅咒之月
sidebar_position: 1
---

# 诅咒之月

诅咒之月是 SSC 变身流程的核心世界机制。源码中的 `CursedMoon` 逻辑会读取公共配置，处理月相、触发转化、结束和治愈相关事件，并根据配置决定是否允许在诅咒之月期间睡觉。

## 与玩家相关的事件

- 诅咒之月开始时，符合条件的玩家可能进入下一步转化；
- 诅咒之月结束时，可能触发恢复、治愈或进度事件；
- 最终形态和免疫标记会影响玩家是否继续受到诅咒之月处理；
- 服务器配置可以改变触发和睡眠行为。

## 管理员测试

SSC 提供 `shape_shifter_curse jump_to_next_cursed_moon` 管理命令，用于跳到下一次诅咒之月。该命令需要权限等级 2。

:::note
命令名称和权限来自当前 SSC 源码；触发后的具体结果仍取决于玩家形态、公共配置和世界状态。
:::

来源：SSC `cursed_moon/CursedMoon.java` 与 `command/ShapeShifterCurseCommand.java`，commit `c0f0bbb9`。状态：`verified`（机制入口），数值：`partial`。
