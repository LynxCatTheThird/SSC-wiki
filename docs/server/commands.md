---
title: 命令参考
sidebar_position: 1
description: SSC 与 SSCA 1.20.1 当前命令、参数和权限
---

# 命令参考

本页从当前 Brigadier 命令树整理。尖括号表示必填参数，方括号表示可选参数；实际输入时不要包含括号。

Minecraft 权限等级 `2` 通常意味着管理员/开启作弊权限。命令可用性仍受单机作弊设置、服务器权限插件和配置影响。

## SSC 形态管理

根命令为 `/shape_shifter_curse`。

| 命令 | 权限 | 说明 |
| --- | ---: | --- |
| `set_form <target> <form>` | 2 | 直接设置内置形态 |
| `transform_to_form <target> <form>` | 2 | 通过变身流程切换到内置形态 |
| `set_dynamic_form <target> <form>` | 2 | 直接设置数据包动态形态 |
| `transform_to_dynamic_form <target> <form>` | 2 | 通过变身流程切换到动态形态 |
| `set_sub_form <target> <form>` | 2 | 直接设置子形态 |
| `transform_to_sub_form <target> <form>` | 2 | 通过变身流程切换到子形态 |

`set_*` 与 `transform_to_*` 不完全等价：后者会经过变身管理器并表现出对应的转化过程。日常管理优先使用 `transform_to_*`，数据修复时才考虑直接设置。

形态参数使用 SSC 自定义参数类型并提供自动补全。内置、动态和子形态分别过滤，不要把页面显示名当作 ID。

## SSC 世界管理

| 命令 | 权限 | 说明 |
| --- | ---: | --- |
| `jump_to_next_cursed_moon` | 2 | 把主世界推进到下一个诅咒月相 |
| `world_time set <time>` | 2 | 设置世界时间 |
| `world_time add <time>` | 2 | 增加世界时间 |
| `adjust_feral_item_loc <rot_center> <pos_offset> <euler_x>` | 2 | 开发用四足形态物品位置调整 |

跳转命令总会寻找“下一次”诅咒月相；如果当前已经是目标月相，会向后跳完整的八个月相周期，而不是停在当天。

## SSC 玩家可用命令

| 命令 | 权限 | 说明 |
| --- | ---: | --- |
| `keep_original_skin <boolean>` | 0 | 是否保留原玩家皮肤（`true` 或 `false`） |
| `set_form_color` | 0 | 输出当前颜色设置 |
| `set_form_color <enable> ...` | 0 | 设置完整 RGBA 与灰度反转参数 |
| `patron_info` | 0 | 显示 Patron 信息 |
| `form_color menu` | 0 | 打开颜色菜单 |

### 颜色预设

`form_color` 还提供预设保存、加载、删除、列表、聊天分享和字符串导入：

```text
/shape_shifter_curse form_color save <form|global|form_default> <slot_name> [form]
/shape_shifter_curse form_color load <form|global|form_default> <slot_name> [form]
/shape_shifter_curse form_color delete <form|global|form_default> <slot_name> [form]
/shape_shifter_curse form_color list <form|global|form_default> [form]
```

未指定 `form` 时使用玩家当前形态。导入他人分享字符串前应确认来源和目标版本。

## SSC 调试命令

`/shape_shifter_curse debug ...` 包含：

- `clear_player_form_data <target>`；
- `clear_player_skin_data <target>`；
- `clear_player_minion_data <target>`；
- `clear_player_mana_data <target>`；
- `set_form <target> <form>`；
- `su <-1..4>`；
- `dev_command`；
- `reupload_auth_file`。

:::danger 调试命令会修改持久数据
清理命令可能不可逆地删除玩家形态、配色、使魔或 Mana 数据。执行前备份世界。虽然 `debug` 分支本身没有统一的 Brigadier 权限条件，各执行函数还会调用内部 `DebuggerUtils.canExecute`；不要据此假设所有普通玩家都能执行。
:::

## SSCA 玩家命令

根命令为 `/ssc_addon`。

| 命令 | 权限 | 说明 |
| --- | ---: | --- |
| `my_whitelist` | 普通玩家 | 打开只作用于自己的技能白名单界面 |
| `palette export` | 普通玩家 | 导出当前形态配色分享码 |
| `palette apply <code>` | 普通玩家 | 应用配色分享码并启用自定义颜色 |
| `debug form` | 未声明统一权限 | 显示当前形态调试信息 |
| `debug mana` | 未声明统一权限 | 显示 Mana 调试信息 |
| `debug anim` | 未声明统一权限 | 显示动画调试信息 |

配色命令只作用于执行者本人，没有目标玩家参数，关闭作弊时也能使用。

## SSCA 管理命令

| 命令 | 权限 | 说明 |
| --- | ---: | --- |
| `set_mana <targets> <amount>` | 2 | 设置一个或多个玩家的 Mana；最小值 0 |
| `mark_owner <targets>` | 2 | 为实体标记所有者 |
| `get_book <book_id> [language]` | 2 | 获取指定故事书；语言为 `zh_cn` 或 `en_us` |
| `list_books [language]` | 2 | 列出故事书 ID；语言为 `zh_cn` 或 `en_us` |
| `reload_books` | 2 | 重载故事书数据 |
| `reload` | 2 | 重载 SSCA 配置 |
| `skill <form> <skill> [player]` | 2 | 强制调用技能 |
| `block <player> <form> <skill>` | 2 | 屏蔽指定玩家的技能 |
| `unblock <player> <form> <skill>` | 2 | 解除技能屏蔽 |
| `list_blocks <player>` | 2 | 查看玩家被屏蔽的技能 |

`skill` 当前自动补全的形态关键词包括 `snow_fox`、`anubis_wolf`、`allay`、`axolotl`、`wild_cat`、`familiar_fox` 和 `familiar_fox_red`。这份固定列表未必覆盖所有新增 SP 形态。

### 抗性、袭击与进化

```text
/ssc_addon resistance get [player]
/ssc_addon resistance set <value> [player]
/ssc_addon resistance add <delta> [player]

/ssc_addon mancianima_assault reset|lock|status [player]

/ssc_addon evolution unlock_all [player]
/ssc_addon evolution reset [player]
```

以上命令均要求权限等级 2。未提供玩家时作用于执行命令的玩家；从控制台使用省略玩家的形式可能无法取得目标。

:::warning `evolution reset`
该命令会重置玩家的 SSCA 进化数据。不要把它当作关闭界面或重新载入配置的命令。
:::

## 命令排障

1. 先输入根命令和空格，查看服务端给出的自动补全。
2. 确认使用内部 ID，而不是中文显示名。
3. 检查权限等级和 `enableDebugCommand`。
4. SSCA 命令缺失时，先确认 SSCA 是否因 SSC 版本不匹配而加载失败。
5. 数据修复前备份世界目录。

来源：SSC `ShapeShifterCurseCommand.java`、`FormArgumentType.java`；SSCA `SscAddonCommands.java`，分别对应 commit `c0f0bbb9`、`d84a18ca`。状态：`verified`（命令树），具体游戏结果仍应按发行包复测。
