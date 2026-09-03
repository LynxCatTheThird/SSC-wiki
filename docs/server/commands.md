---
title: 命令参考
sidebar_position: 1
---

# 命令参考

命令会随版本变化。本页首发只记录源码中已确认的入口，完整参数表将从命令树继续生成。

## SSC

根命令：`/shape_shifter_curse`

当前源码确认的管理入口包括：

| 子命令 | 权限 | 用途 |
| --- | ---: | --- |
| `set_form` | 2 | 设置玩家形态 |
| `transform_to_form` | 2 | 让玩家变身为指定形态 |
| `set_dynamic_form` | 2 | 设置动态形态 |
| `transform_to_dynamic_form` | 2 | 变身为动态形态 |
| `set_sub_form` | 2 | 设置子形态 |
| `transform_to_sub_form` | 2 | 变身为子形态 |
| `jump_to_next_cursed_moon` | 2 | 跳到下一次诅咒之月 |
| `world_time set/add` | 2 | 设置或增加世界时间 |
| `keep_original_skin` | 0 | 设置是否保留原皮肤 |
| `form_color menu/save` | 0 | 打开或保存形态颜色设置 |

`debug` 下还有清理玩家形态、皮肤、使魔和 Mana 数据等开发/排障入口，不建议普通玩家使用。

## SSCA

根命令：`/ssc_addon`

源码确认包含 Mana、故事书、配置重载、白名单、技能调用/屏蔽、抗性、Mancianima 袭击和进化管理入口。完整参数和权限页面应以 SSCA 当前 `SscAddonCommands.java` 自动生成结果为准。

来源：SSC `ShapeShifterCurseCommand.java`、SSCA `SscAddonCommands.java`。状态：`partial`。
