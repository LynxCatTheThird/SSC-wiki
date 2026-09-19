---
title: 蝙蝠
---

# 蝙蝠

蝙蝠线是一条夜行和空中机动路线。随着阶段提高，玩家获得夜视、高跳、缓降、墙面附着和空中移动能力，但日光、地面移动、护甲和武器使用限制也更加明显。[^source]

## 阶段总览

| 阶段    | 主要能力                               | 主要限制                                   |
| ------- | -------------------------------------- | ------------------------------------------ |
| `bat_0` | 黑暗中加速                             | 日光生命惩罚、不能穿胸甲                   |
| `bat_1` | 蝙蝠视觉、高跳、减摔、近战增强         | 日光减速/生命惩罚，禁远程武器，胸甲/鞋受限 |
| `bat_2` | 缓降、落地效果免疫、空手采掘           | 多部位护甲受限，会掉落工具 / 武器，偏素食  |
| `bat_3` | 墙面附着、空中速度、强化跳跃、夜间伤害 | 地面减速，禁远程武器，多部位护甲受限       |

## 行为

### 盔甲槽

### 生命值

### 挖掘

### 近战攻击

### 饥饿

### 移动

#### 步行与疾跑

#### 飞行与缓降

#### 潜行与附着

## 能力

### 已确认数值

| 阶段或条件            |                               数值 | 玩家感受                           |
| --------------------- | ---------------------------------: | ---------------------------------- |
| `bat_0` 暴露在阳光下  |                   最大生命值减少 4 | 20 点基础生命会降到 16 点          |
| `bat_1` 阳光下        |                        移速降低 2% | 日光中移动略慢                     |
| `bat_2`、`bat_3` 贴墙 |                       命中伤害降低 | 撞墙不再按普通坠落方式承受完整冲击 |
| `bat_3` 站在方块上    |                       移速降低 20% | 鼓励离地飞行                       |
| `bat_3` 露天无日光    | 普通攻击增加 1；空手攻击额外增加 5 | 夜间空手战斗最强                   |
| `bat_3` 疾跑飞行      |                  每 tick 前推 0.05 | 连续飞行会逐渐加速                 |

### 操作提示

最终阶段的墙面附着由独立能力和动画处理。空中强、地面弱是这条形态线的核心交换，不宜按普通玩家的战斗习惯配置装备。

## 数据值

### ID

| 名称             | 命名空间 ID | 本地化键名                  |
| ---------------- | ----------- | --------------------------- |
| 蝙蝠形态初始阶段 | `bat_0`     | `shape-shifter-curse.bat_0` |
| 蝙蝠形态第一阶段 | `bat_1`     | `shape-shifter-curse.bat_1` |
| 蝙蝠形态第二阶段 | `bat_2`     | `shape-shifter-curse.bat_2` |
| 蝙蝠形态永久阶段 | `bat_3`     | `shape-shifter-curse.bat_3` |

## 历史

## 画廊

<!-- prettier-ignore-start -->
<FormModelViewer
  stages={{
    bat_0: {
      label: '初始阶段',
      title: '蝙蝠初始阶段 · bat_0.gltf',
      model: '/models/forms/shape-shifter-curse/bat/bat_0.gltf',
    },
    bat_1: {
      label: '第一阶段',
      title: '蝙蝠第一阶段 · bat_1.gltf',
      model: '/models/forms/shape-shifter-curse/bat/bat_1.gltf',
    },
    bat_2: {
      label: '第二阶段',
      title: '蝙蝠第二阶段 · bat_2.gltf',
      model: '/models/forms/shape-shifter-curse/bat/bat_2.gltf',
    },
    bat_3: {
      label: '永久阶段',
      title: '蝙蝠永久阶段 · bat_3.gltf',
      model: '/models/forms/shape-shifter-curse/bat/bat_3.gltf',
    },
  }}
  animations={{
    'bat_1_jump_1.0': '跳跃',
    'bat_1_sneak_idle_1.0': '潜行待机',
    'bat_2_attack_1.0': '攻击',
    'bat_2_digging_1.0': '挖掘',
    'bat_2_jump_1.0': '跳跃',
    'bat_2_riding_1.0': '骑乘',
    'bat_2_slow_falling_1.0': '缓降',
    'bat_3_attach_side_1.0': '附着墙面',
    'bat_3_attack_1.5': '攻击',
    'bat_3_climb_1.25': '攀爬',
    'bat_3_digging_1.5': '挖掘',
    'bat_3_idle_1.0': '待机',
    'bat_3_jump_1.5': '跳跃',
    'bat_3_riding_1.0': '骑乘',
    'bat_3_sleep_1.0': '睡眠',
    'bat_3_sneak_walk_1.0': '潜行移动',
    'bat_3_walk_1.7': '走动（慢）',
    'bat_3_walk_2.4': '走动（快）',
  }}
/>
<!-- prettier-ignore-end -->

## 附录

[^source]: 源码核对：幻形者诅咒 `origins/form_bat_*.json` 与 `RegPlayerForms.java`。表中只概括已注册能力。
