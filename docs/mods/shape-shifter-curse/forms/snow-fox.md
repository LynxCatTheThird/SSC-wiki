---
title: 雪狐
---

# 雪狐

雪狐线强调多段跳、空中移动、落地攻击、雪球强化和寒冷环境适应。其明显代价是炎热环境、火焰和熔岩附近的惩罚。[^source]

## 阶段总览

| 阶段         | 主要能力                             | 主要限制                          |
| ------------ | ------------------------------------ | --------------------------------- |
| `snow_fox_0` | 三段跳、疾跑加速                     | 沙漠生命惩罚、水中减速            |
| `snow_fox_1` | 强化三段跳、暴击、雪球增益、狐狸友好 | 炎热环境和熔岩附近不利            |
| `snow_fox_2` | 减摔、粉雪行走、落地攻击、雪球转化   | 腿甲 / 鞋受限，沙漠和火焰惩罚增强 |
| `snow_fox_3` | 弹跳、空中速度、落地冲击、强化雪球   | 炎热区域、火焰和熔岩成为核心弱点  |

## 行为

### 盔甲槽

### 生命值

### 挖掘

### 近战攻击

### 饥饿

### 移动

#### 步行与疾跑

#### 多段跳与落地

### 温度与环境

代码包含 Tough As Nails 相关的温度重映射 / 抗性能力。未安装对应模组时，这些兼容能力不等于原版环境温度系统。

## 能力

### 已确认数值

| 阶段或条件            |                     数值 | 玩家感受                 |
| --------------------- | -----------------------: | ------------------------ |
| `snow_fox_1` 暴击     | 暴击伤害倍率 $\times1.3$ | 暴击收益提高 30%         |
| `snow_fox_2` 雪球     |         投射物伤害增加 5 | 雪球拥有稳定的额外伤害   |
| `snow_fox_3` 雪球     |       投射物伤害增加 7.5 | 取代二阶段的加成         |
| `snow_fox_3` 火焰伤害 |       伤害倍率 $\times2$ | 火焰和熔岩是最危险的环境 |

### 瓶装降雪

二、三阶段可以使用瓶装降雪。合成台从上到下放置玻璃瓶、细雪桶，最底行放置铁锭、月尘水晶碎片、铁锭。右键会发射一颗无散射雪球，消耗 2 点饥饿值与 1 点工具耐久，冷却 8 tick，也就是 0.4 秒；饥饿值为 0 或冷却未结束时无法发射。

## 数据值

### ID

| 名称             | 命名空间 ID | 本地化键名                       |
| ---------------- | ----------- | -------------------------------- |
| 雪狐形态初始阶段 | `snow_fox_0` | `shape-shifter-curse.snow_fox_0` |
| 雪狐形态第一阶段 | `snow_fox_1` | `shape-shifter-curse.snow_fox_1` |
| 雪狐形态第二阶段 | `snow_fox_2` | `shape-shifter-curse.snow_fox_2` |
| 雪狐形态永久阶段 | `snow_fox_3` | `shape-shifter-curse.snow_fox_3` |

## 历史

## 画廊

<!-- prettier-ignore-start -->
<FormModelViewer
  stages={{
    snow_fox_0: {
      label: '初始阶段',
      title: '雪狐初始阶段 · snow_fox_0.gltf',
      model: '/models/forms/shape-shifter-curse/snow_fox/snow_fox_0.gltf',
    },
    snow_fox_1: {
      label: '第一阶段',
      title: '雪狐第一阶段 · snow_fox_1.gltf',
      model: '/models/forms/shape-shifter-curse/snow_fox/snow_fox_1.gltf',
    },
    snow_fox_2: {
      label: '第二阶段',
      title: '雪狐第二阶段 · snow_fox_2.gltf',
      model: '/models/forms/shape-shifter-curse/snow_fox/snow_fox_2.gltf',
    },
    snow_fox_3: {
      label: '永久阶段',
      title: '雪狐永久阶段 · snow_fox_3.gltf',
      model: '/models/forms/shape-shifter-curse/snow_fox/snow_fox_3.gltf',
    },
  }}
  animations={{
    'ocelot_2_sneak_idle_1.0': '潜行待机',
    'snow_fox_2_riding_1.0': '骑乘',
    'snow_fox_3_riding_1.0': '骑乘',
    'form_snow_fox_3_fall_1.0': '下落',
    'form_feral_common_attack_1.0': '攻击',
    'form_feral_common_climb_1.0': '攀爬',
    'form_feral_common_climb_idle_1.0': '攀爬待机',
    'form_feral_common_dig_1.0': '挖掘',
    'form_feral_common_elytra_fly_1.0': '鞘翅飞行',
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

## 附录

[^source]: 源码核对：幻形者诅咒 `origins/form_snow_fox_*.json` 与相关能力文件；未确认的交互不会写作确定结论。
