---
title: 豹猫
---

# 豹猫

豹猫线强调潜行、攀爬、跳跃和空手近战。它能惊吓苦力怕、减少或免疫摔落伤害，并逐步从轻装潜行转向四足最终形态。[^source]

| 阶段       | 主要能力                                   | 主要限制                               |
| ---------- | ------------------------------------------ | -------------------------------------- |
| `ocelot_0` | 潜行加速、惊吓苦力怕                       | 生命值降低、素食收益下降               |
| `ocelot_1` | 摔落免疫、空手伤害、木质表面攀爬、潜行远跳 | 疾跑减速、偏肉食                       |
| `ocelot_2` | 夜视、潜行高 / 远跳、箭矢闪避、裸爪横扫    | 禁盾、不能疾跑、耗饥饿更快、仅适合生肉 |
| `ocelot_3` | 全表面攀爬、扑击 / 冲撞、步高、四足移动    | 多部位护甲受限、禁盾、不能普通疾跑     |

## 已确认数值

| 阶段或条件                  |                        数值 | 玩家感受                    |
| --------------------------- | --------------------------: | --------------------------- |
| `ocelot_2`、`ocelot_3` 空手 |                攻击力增加 7 | 空手基础伤害增加 3.5 颗心   |
| `ocelot_2`                  |            最大生命值减少 6 | 基础 20 点生命降为 14 点    |
| `ocelot_2` 箭矢闪避         | 触发距离 7 格，冷却 20 tick | 站在地面时可躲开近距离箭矢  |
| `ocelot_3` 潜行跳           |            水平前冲参数 0.8 | 消耗至少 6 点饥饿后进行远跳 |
| `ocelot_3` 跳跃             |            跳跃力度提高 25% | 纵向跳跃明显更高            |

## 战斗方式

中后期的能力围绕裸爪攻击和潜行跳跃设计。持盾、穿重甲或依赖远程武器的配装会与形态限制冲突。

## 环境

中后期注册了水中减速、温度兼容和无脚步声等能力。若整合包包含环境温度模组，应额外核验实际兼容行为。

## 画廊

<FormModelViewer stages={{
  ocelot_0: { label: '第一阶段', title: '豹猫第一阶段 · ocelot_0.gltf', model: '/models/forms/ssc/ocelot/ocelot_0.gltf' },
  ocelot_1: { label: '第二阶段', title: '豹猫第二阶段 · ocelot_1.gltf', model: '/models/forms/ssc/ocelot/ocelot_1.gltf' },
  ocelot_2: { label: '第三阶段', title: '豹猫第三阶段 · ocelot_2.gltf', model: '/models/forms/ssc/ocelot/ocelot_2.gltf' },
  ocelot_3: { label: '永久阶段', title: '豹猫永久阶段 · ocelot_3.gltf', model: '/models/forms/ssc/ocelot/ocelot_3.gltf' },
}}
  animations={{
    ocelot_2_climbing: '攀爬', ocelot_2_rush_jump: '冲刺跳跃', ocelot_2_sneak_idle: '潜行待机', ocelot_2_sneak_rush_2: '潜行冲刺',
    form_feral_common_attack: '攻击', form_feral_common_climb: '攀爬', form_feral_common_climb_idle: '攀爬待机', form_feral_common_dig: '挖掘',
    form_feral_common_elytra_fly: '鞘翅飞行', form_feral_common_fall: '下落', form_feral_common_float: '漂浮',
    form_feral_common_idle: '待机', form_feral_common_jump: '跳跃', form_feral_common_run: '奔跑', form_feral_common_sleep: '睡眠',
    form_feral_common_sneak_idle: '潜行待机', form_feral_common_sneak_walk: '潜行移动', form_feral_common_swim: '游泳', form_feral_common_walk: '走动',
  }}
/>

[^source]: 源码核对：SSC `origins/form_ocelot_*.json` 与相关能力文件；未确认的交互不会写作确定结论。
