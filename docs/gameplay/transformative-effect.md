---
title: 转化效果
sidebar_position: 1
description: 转化效果的获得、持续、覆盖、激活和清除规则
---

# 转化效果

转化效果是“感染目标形态”与“真正开始变身”之间的临时状态。它与已经取得的玩家形态不同，也不是诅咒之月本身。

## 生命周期

```text
异常生物命中 / 药水或扩展内容
              ↓
       获得一个转化效果
       默认持续 400 秒
        ↙             ↘
结束睡眠 / 催化剂      到期 / 抑制剂
       ↓                  ↓
激活目标形态并清除效果    只清除效果，不变身
```

SSC 同一时间只按一个转化效果处理。施加新效果前会清理已有转化效果，因此它不是可以叠加的普通增益列表。

## 内置效果 ID

当前注册的目标包括七条常规形态线、两个特殊形态和一个自定义形态入口：

| 效果 ID | 目标形态 |
| --- | --- |
| `to_bat_0_effect` | `bat_0` |
| `to_axolotl_0_effect` | `axolotl_0` |
| `to_ocelot_0_effect` | `ocelot_0` |
| `to_familiar_fox_0_effect` | `familiar_fox_0` |
| `to_snow_fox_0_effect` | `snow_fox_0` |
| `to_anubis_wolf_0_effect` | `anubis_wolf_0` |
| `to_spider_0_effect` | `spider_0` |
| `to_allay_sp_effect` | `allay_sp` |
| `to_feral_cat_sp_effect` | `feral_cat_sp` |
| `to_custom_statue_effect` | 由自定义数据决定 |

完整资源 ID 还应加上命名空间 `shape-shifter-curse:`。注册有效果不代表原版生存流程一定提供对应的自然感染来源。

## 谁能获得效果

自然生成的转化生物只会给“原始变形者”附加效果。效果管理器还会检查当前形态是否带有允许转化效果的标记。默认 `statusPotionWithCurse=false`，尚未打开手册、还处于模组启用前状态的玩家不能靠转化药水提前开始流程。

服主启用 `statusPotionWithCurse` 后，这个前置限制会放宽；它不会自动让普通生物具有感染能力。

## 激活和清除

- **结束睡眠**：激活当前效果，启动目标形态的变身，然后清除效果；
- **普通催化剂**：有效果时执行同样的激活，并触发催化剂进度；
- **普通抑制剂**：有效果时仅清除效果；
- **自然到期**：效果在 400 秒结束时消失，并触发对应进度；
- **取得不兼容形态**：形态变化后若不再允许持有效果，管理器会清除它。

:::warning 不要把图标当作唯一判断依据
服务端使用自定义 `TransformativeStatusInstance` 保存目标信息，客户端看到的是状态效果表现。跨模组修改状态效果、死亡继承或睡眠事件时，应以服务端实际形态结果为准。
:::

来源：SSC `RegTStatusEffect.java`、`EffectManager.java`、`TransformativeStatusInstance.java`、`TransformRelatedItems.java` 与 `CommonConfig.java`，commit `c0f0bbb9`。状态：`verified`。
