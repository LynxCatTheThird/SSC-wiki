---
title: 使魔红狐
---

# 使魔红狐

使魔红狐线围绕女巫、掠夺、药水和火焰魔法展开。后期引入 Mana，并能针对不同生物使用能力或瓶装交互。[^source]

| 阶段             | 主要能力                                        | 主要限制                             |
| ---------------- | ----------------------------------------------- | ------------------------------------ |
| `familiar_fox_0` | 疾跑加速、掠夺、女巫友好                        | 水中减速，攻击女巫会眩晕             |
| `familiar_fox_1` | 更强掠夺、对普通生物的特殊交互、掠夺者友好      | 所有食物收益下降，攻击灾厄生物会眩晕 |
| `familiar_fox_2` | 生物侦测、药水制作、火球、Mana                  | 腿甲 / 鞋受限，低 Mana 产生负面效果  |
| `familiar_fox_3` | 更多生物交互、火 / 熔岩免疫、火环、强化魔力体系 | 挖掘和食物收益显著下降，仍有装备限制 |

## 已确认数值

| 阶段或条件                                   |                                                          数值 | 玩家感受                |
| -------------------------------------------- | ------------------------------------------------------------: | ----------------------- |
| `familiar_fox_1`                             |                                              最大生命值减少 2 | 20 点基础生命降为 18 点 |
| `familiar_fox_2`                             |                                              最大生命值减少 4 | 20 点基础生命降为 16 点 |
| `familiar_fox_3`                             |                                              最大生命值减少 6 | 20 点基础生命降为 14 点 |
| `familiar_fox_2`、`familiar_fox_3` Mana 过低 |                                      每 3 秒受到 1 点饥饿伤害 | 施法前要留出恢复余量    |
| `familiar_fox_3` 火环                        | 消耗 11 Mana；半径约 4 格；8 点伤害；点燃 10 秒；冷却 40 tick | 约 2 秒后可再次使用     |

## Mana 与火球

二、三阶段注册了火球类型资源、法力容量、低法力惩罚和不同施法材料。玩家需要同时管理 Mana 和技能冷却，不能把所有交互理解为无限使用。

## 阵营关系

女巫和掠夺者友好、村民恐惧、禁止攻击女巫等规则分布在多个能力中。主动攻击仍可能触发额外惩罚。

## 画廊

<!-- prettier-ignore-start -->
<FormModelViewer
  stages={{
    familiar_fox_0: {
      label: '初始阶段',
      title: '使魔红狐初始阶段 · familiar_fox_0.gltf',
      model: '/models/forms/ssc/familiar_fox/familiar_fox_0.gltf',
    },
    familiar_fox_1: {
      label: '第一阶段',
      title: '使魔红狐第一阶段 · familiar_fox_1.gltf',
      model: '/models/forms/ssc/familiar_fox/familiar_fox_1.gltf',
    },
    familiar_fox_2: {
      label: '第二阶段',
      title: '使魔红狐第二阶段 · familiar_fox_2.gltf',
      model: '/models/forms/ssc/familiar_fox/familiar_fox_2.gltf',
    },
    familiar_fox_3: {
      label: '永久阶段',
      title: '使魔红狐永久阶段 · familiar_fox_3.gltf',
      model: '/models/forms/ssc/familiar_fox/familiar_fox_3.gltf',
    },
  }}
  animations={{
    'ocelot_2_sneak_idle_1.0': '潜行待机',
    'familiar_fox_2_riding_1.0': '骑乘',
    'familiar_fox_3_riding_1.0': '骑乘',
    'form_feral_common_attack_1.0': '攻击',
    'form_feral_common_climb_1.0': '攀爬',
    'form_feral_common_climb_idle_1.0': '攀爬待机',
    'form_feral_common_dig_1.0': '挖掘',
    'form_feral_common_elytra_fly_1.0': '鞘翅飞行',
    'form_feral_common_fall_1.0': '下落',
    'form_feral_common_float_1.0': '漂浮',
    'form_feral_common_idle_1.0': '待机',
    'form_feral_common_jump_1.0': '跳跃',
    'form_feral_common_run_2.3': '奔跑',
    'form_feral_common_sleep_1.0': '睡眠',
    'form_feral_common_sneak_idle_1.0': '潜行待机',
    'form_feral_common_sneak_walk_1.0': '潜行移动',
    'form_feral_common_swim_1.0': '游泳',
    'form_feral_common_walk_1.2': '走动',
  }}
/>
<!-- prettier-ignore-end -->

[^source]: 源码核对：SSC `origins/form_familiar_fox_*.json`、Mana 和生物交互能力；未确认的交互不会写作确定结论。
