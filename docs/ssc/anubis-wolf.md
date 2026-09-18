---
title: 阿努比斯之狼
---

# 阿努比斯之狼

阿努比斯之狼线围绕凋零、亡灵、腐肉和狼群展开。阶段越高，玩家越接近亡灵属性，并获得召唤、灵魂沙移动和不死相关能力。[^source]

| 阶段 | 主要能力 | 主要限制 |
| --- | --- | --- |
| `anubis_wolf_0` | 凋零攻击、可食骨头、腐肉增益、狼友好 | 受到亡灵相关伤害修正 |
| `anubis_wolf_1` | 受击召狼、毒素免疫、灵魂疾行、凋零治疗 | 普通食物治疗下降，作物 / 肉类可能被转化 |
| `anubis_wolf_2` | 更强召狼、亡灵攻防修正、瞬间伤害反转 | 腿甲 / 鞋受限，素食收益降低 |
| `anubis_wolf_3` | 不死、主动 / 被动召狼、凋零斩杀、治疗效果反转 | 再生和瞬间治疗受限，普通食物治疗更弱 |

## 已确认数值

| 阶段或条件 | 数值 | 玩家感受 |
| --- | --: | --- |
| `anubis_wolf_0` 凋零攻击 | 凋零 II，持续 40 tick（2 秒） | 命中后短暂施加凋零 |
| `anubis_wolf_1` 受击召狼 | 召唤 1 只，冷却 600 tick（30 秒） | 受到攻击后有机会获得援军 |
| `anubis_wolf_2` 受击召狼 | 召唤 2 只，冷却 600 tick（30 秒） | 中期开始形成狼群 |
| `anubis_wolf_3` 命中或受击召狼 | 每次 2 只，冷却 600 tick（30 秒） | 最终阶段可从攻防两侧召狼 |
| `anubis_wolf_3` 凋零斩杀 | 目标生命低于 10 点且处于凋零时追加 10 点伤害 | 垂死目标会被快速收割 |

## 治疗规则

最终阶段同时注册了瞬间伤害反转、瞬间治疗免疫、再生免疫和食物治疗削弱。治疗策略必须按亡灵形态重新配置；不要默认普通恢复药水仍然有效。

## 食物与方块转化

中后期存在将肉转为腐肉、将作物转为沙的能力。具体触发方式应查对应物品交互页面，避免在珍贵物品上直接试验。

## 画廊

<FormModelViewer stages={{
  anubis_wolf_0: { label: '第一阶段', title: '阿努比斯之狼第一阶段 · anubis_wolf_0.gltf', model: '/models/forms/ssc/anubis_wolf/anubis_wolf_0.gltf' },
  anubis_wolf_1: { label: '第二阶段', title: '阿努比斯之狼第二阶段 · anubis_wolf_1.gltf', model: '/models/forms/ssc/anubis_wolf/anubis_wolf_1.gltf' },
  anubis_wolf_2: { label: '第三阶段', title: '阿努比斯之狼第三阶段 · anubis_wolf_2.gltf', model: '/models/forms/ssc/anubis_wolf/anubis_wolf_2.gltf' },
  anubis_wolf_3: { label: '永久阶段', title: '阿努比斯之狼永久阶段 · anubis_wolf_3.gltf', model: '/models/forms/ssc/anubis_wolf/anubis_wolf_3.gltf' },
}}
  animations={{
    form_feral_common_attack: '攻击', form_feral_common_climb: '攀爬', form_feral_common_climb_idle: '攀爬待机', form_feral_common_dig: '挖掘',
    form_feral_common_elytra_fly: '鞘翅飞行', form_feral_common_fall: '下落', form_feral_common_float: '漂浮', form_feral_common_idle: '待机',
    form_feral_common_jump: '跳跃', form_feral_common_run: '奔跑', form_feral_common_sleep: '睡眠', form_feral_common_sneak_idle: '潜行待机',
    form_feral_common_sneak_walk: '潜行移动', form_feral_common_swim: '游泳', form_feral_common_walk: '走动',
  }}
/>

[^source]: 源码核对：SSC `origins/form_anubis_wolf_*.json`、召唤和伤害能力；未确认的交互不会写作确定结论。

<!--
XuHaoNan:
从Power里提取的 如果没生效属于Bug
anubis_wolf_0: 
  凋零攻击是当玩家自身有凋零debuff时才会给被攻击目标赋予凋零 40tick的凋零2
  受到有源伤害(能找得到攻击者)时 赋予自身50tick的凋零1
  当攻击亡灵生物组的生物时 伤害>=2时就会-1伤害
  狼灵友好
  可以食用骨头 - 仅原版骨头 食用后回复5点饥饿值 饱和度系数0.4
  免疫饥饿Debuff
  腐肉回复加强 - 饥饿值提升4点(最终8点) 饱和度系数提升0.6(最终0.7)
anubis_wolf_1:
  狼灵友好
  受到有源伤害时 召唤1只等级1的召唤狼灵(和野生的狼灵不同) 冷却600tick 召唤时上限=1(召唤仅在召唤时进行上限检查 比如一个上限1和一个上限2的召唤能力 如果已经有1只了 那么上限1的能力就不会召唤了 但上限2还可以额外召唤1只)
  原版饱食度回复系统速度降低为原先的83% (那套系统有个计时器 Power让那个计时器每6tick减少1tick 算一下就是83%的速度)
  生物战利品中的用有"shape-shifter-curse:raw_meat"的tag的食物 10%转换为腐肉
  破坏tag为"minecraft:crops"方块时 10%将掉落物全部转换为1个沙子(假设原始掉落100个A 100B也只能转成1个沙子)
  当玩家自身有凋零debuff时给被攻击目标赋予凋零 20tick的凋零3
  攻击有凋零debuff的实体时 当造成伤害>1点时 回复1点血量
  受到有源伤害(能找得到攻击者)时 赋予自身90tick的凋零1
  可以食用骨头 - 仅原版骨头 食用后回复5点饥饿值 饱和度系数0.4
  免疫饥饿和中毒Debuff
  腐肉回复加强 - 饥饿值提升4点(最终8点) 饱和度系数提升0.6(最终0.7)
  当攻击亡灵生物组的生物时 伤害>=2时就会-1伤害
  提供额外1级灵魂疾行 上限3级(如果穿了灵魂疾行3的靴子这个Power就不生效了)
  素食回复减少 - 饱和度系数减少20%(不是-0.2 是直接减少20%)
  拥有凋零debuff时 自身生命上限提升2点
  攻击无法对自身宠物造成伤害(其实就是不会对召唤物造成伤害 召唤物走的就是宠物逻辑)
-->