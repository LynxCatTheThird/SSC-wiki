---
title: 配置与兼容性
sidebar_position: 2
---

# 配置与兼容性

SSC 使用客户端配置、公共配置和玩家自定义配置；SSCA 另外提供客户端、公共和服务端配置。配置界面通常通过 Cloth Config 和 Mod Menu 进入。

## 配置原则

- 客户端配置只影响本地界面、渲染、颜色和 HUD；
- 公共/服务端配置影响世界规则和所有玩家；
- 修改前备份世界和配置文件；
- 多人服务器以服务端实际配置为准；
- 不要把客户端配置文件复制给服务端，反之亦然。

## 已知兼容性提示

SSC 当前代码包含与自定义食物系统和 LodeStone 的兼容性修复讨论；某些 Mixin 可能影响其他模组功能。遇到崩溃时应记录 Minecraft、Loader、SSC、SSCA、依赖版本和完整日志。

SSCA README 要求粒子显示开启，否则技能视觉效果可能异常。

状态：`partial`。具体字段和默认值将根据 `CommonConfig`、`ClientConfig`、`SSCAddonConfig` 和服务端配置类自动整理。
