---
title: 进化美西螈
---

# 进化美西螈

这是 SSCA 的美西螈成长起点，内部 ID 为 `my_addon:upgrade_axolotl`。路线 JSON 定义 6 个普通节点，里程碑为进化等级 5、10、15、20、30、40；50 级开放两个零消耗分支节点。

节点前置为：`aquatic_adapt` 与 `water_propel` 可任选先后；两者都解锁后才能点 `water_spurt`；随后 `water_spear` 与 `vortex_guide` 可任选先后；两者都解锁后才能点 `become_water`。最终分支固定为：`become_water` + 月髓十字环 → `my_addon:axolotl_sp`，`become_water` + 进化石 → `my_addon:axolotl_fluorescent`。[^source]

路线规则见 [进化系统](../../../evolution)。

[^source]: SSCA `data/my_addon/ssca_evolution/routes/axolotl.json`、`EvolutionManager.java` 与 `EvolutionComponent.java`；上游核对时间 2026-09-09。
