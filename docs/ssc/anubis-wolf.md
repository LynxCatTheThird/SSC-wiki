---
title: 胡狼
---

# 胡狼

胡狼线围绕凋零、亡灵、腐肉和狼群展开。阶段越高，玩家越接近亡灵属性，并获得召唤、灵魂沙移动和不死相关能力。[^source]

| 阶段            | 主要能力                                      | 主要限制                                |
| --------------- | --------------------------------------------- | --------------------------------------- |
| `anubis_wolf_0` | 凋零攻击、可食骨头、腐肉增益、狼友好          | 受到亡灵相关伤害修正                    |
| `anubis_wolf_1` | 受击召狼、毒素免疫、灵魂疾行、凋零治疗        | 普通食物治疗下降，作物 / 肉类可能被转化 |
| `anubis_wolf_2` | 更强召狼、亡灵攻防修正、瞬间伤害反转          | 腿甲 / 鞋受限，素食收益降低             |
| `anubis_wolf_3` | 不死、主动 / 被动召狼、凋零斩杀、治疗效果反转 | 再生和瞬间治疗受限，普通食物治疗更弱    |

## 已确认数值

| 阶段或条件                     |                                         数值 | 玩家感受                 |
| ------------------------------ | -------------------------------------------: | ------------------------ |
| `anubis_wolf_0` 凋零攻击       |                凋零 II，持续 40 tick（2 秒） | 命中后短暂施加凋零       |
| `anubis_wolf_1` 受击召狼       |            召唤 1 只，冷却 600 tick（30 秒） | 受到攻击后有机会获得援军 |
| `anubis_wolf_2` 受击召狼       |            召唤 2 只，冷却 600 tick（30 秒） | 中期开始形成狼群         |
| `anubis_wolf_3` 命中或受击召狼 |            每次 2 只，冷却 600 tick（30 秒） | 最终阶段可从攻防两侧召狼 |
| `anubis_wolf_3` 凋零斩杀       | 目标生命低于 10 点且处于凋零时追加 10 点伤害 | 垂死目标会被快速收割     |

## 治疗规则

最终阶段同时注册了瞬间伤害反转、瞬间治疗免疫、再生免疫和食物治疗削弱。治疗策略必须按亡灵形态重新配置；不要默认普通恢复药水仍然有效。

## 食物与方块转化

中后期存在将肉转为腐肉、将作物转为沙的能力。具体触发方式应查对应物品交互页面，避免在珍贵物品上直接试验。

## 画廊

<!-- prettier-ignore-start -->
<FormModelViewer
  stages={{
    anubis_wolf_0: {
      label: '初始阶段',
      title: '胡狼初始阶段 · anubis_wolf_0.gltf',
      model: '/models/forms/ssc/anubis_wolf/anubis_wolf_0.gltf',
    },
    anubis_wolf_1: {
      label: '第一阶段',
      title: '胡狼第一阶段 · anubis_wolf_1.gltf',
      model: '/models/forms/ssc/anubis_wolf/anubis_wolf_1.gltf',
    },
    anubis_wolf_2: {
      label: '第二阶段',
      title: '胡狼第二阶段 · anubis_wolf_2.gltf',
      model: '/models/forms/ssc/anubis_wolf/anubis_wolf_2.gltf',
    },
    anubis_wolf_3: {
      label: '永久阶段',
      title: '胡狼永久阶段 · anubis_wolf_3.gltf',
      model: '/models/forms/ssc/anubis_wolf/anubis_wolf_3.gltf',
    },
  }}
  animations={{
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
    'snow_fox_3_riding_1.0': '骑乘',
  }}
/>
<!-- prettier-ignore-end -->

[^source]: 源码核对：SSC `origins/form_anubis_wolf_*.json`、召唤和伤害能力；未确认的交互不会写作确定结论。
