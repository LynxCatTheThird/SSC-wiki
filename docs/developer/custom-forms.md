---
title: 自定义形态
sidebar_position: 1
---

# 自定义形态

SSC 支持用 Data Pack 和 Resource Pack 创建动态形态。推荐先运行官方仓库中的 `custom_form_pack_example`，再逐项替换 ID、模型、纹理和能力。

## 基本组成

- Data Pack：形态 ID、形态组、阶段和能力数据；
- Resource Pack：模型、纹理、动画、颜色遮罩和语言文本；
- 独立命名空间：避免覆盖 `shape_shifter_curse` 和其他模组的 ID；
- 可验证的版本标记：记录目标 SSC 版本和测试结果。

## 开发顺序

1. 复制最小示例包并修改 `pack.mcmeta`。
2. 先注册一个只有模型和名称的形态。
3. 验证 JSON 能被加载并在游戏内出现。
4. 再添加能力、条件、缩放和动画。
5. 使用资源包补齐模型、纹理、语言和颜色遮罩。
6. 每次重载后检查日志，确认旧动态形态没有残留。

## 注意事项

动态形态的 JSON schema 和可用能力会随 SSC 版本变化。不要直接把 Java 类名、旧 Wiki 字段或其他版本示例当作有效字段；应以目标版本源码、示例包和资源加载日志核验。

状态：`partial`。后续将加入完整 JSON schema、可下载最小示例和字段参考。
