---
title: 版本与兼容性
sidebar_position: 1
---

# 版本与兼容性

本站的完整玩法说明以 Minecraft 1.20.1 Fabric 为基线。当前 SSCA 源码主分支的构建版本为 `8.0.0-beta.3`；发布包仍需以下载页面显示的文件名和依赖为准。[^source]

## 本站正式支持

| Minecraft | Loader | SSC    | SSCA         | 文档状态 |
| --------- | ------ | ------ | ------------ | -------- |
| 1.20.1    | Fabric | 1.10.0 | 8.0.0-beta.3 | 主线基线 |

SSCA 必须与 SSC 版本匹配。请优先使用两个项目发布页中明确对应的构建。

## 1.21.1 社区移植

MC 百科当前只列出 Fabric 1.20.1；SSCA 上游 README 另外提到社区维护的 Fabric 1.21.1 移植。它们不属于本站正式玩法支持范围，成熟度、兼容性和维护承诺均不同于 1.20.1 主线。这里只提供项目链接和风险提示，不维护独立版本文档。

[^source]: 支持范围依据 [MC 百科 SSCA 条目](https://www.mcmod.cn/class/24327.html)、SSC 与 SSCA 的 Modrinth 发布信息、SSCA 仓库 README、`gradle.properties` 和 `fabric.mod.json`；上游源码当前核对至 commit `e42a62aa`。1.21.1 项目属于社区移植，本站只记录其存在与风险。
