---
title: 安装与依赖
sidebar_position: 1
---

# 安装与依赖

本页针对 Minecraft 1.20.1 Fabric 的 SSC 主线和 SSCA 社区附属模组。

## 推荐组合

| 项目 | 首发基线 |
| --- | --- |
| Minecraft | 1.20.1 |
| Loader | Fabric Loader |
| SSC | 1.10.0 |
| SSCA | 8.0.0-beta.2 |
| Java | 按 Fabric/Minecraft 启动器要求配置 |

SSCA 依赖 SSC。两个模组的版本必须匹配；SSCA README 明确提醒 beta 构建可能基于 SSC 测试版开发，下载前应核对对应版本。

## 安装步骤

1. 安装 Minecraft 1.20.1 的 Fabric 实例。
2. 安装 SSC 所需的 Fabric API、Origins/Apoli、Trinkets、Cloth Config、Mod Menu 等依赖。以发布页的依赖列表为准。
3. 将 SSC 的 `.jar` 文件放入实例的 `mods` 文件夹。
4. 将匹配版本的 SSCA `.jar` 文件放入同一文件夹。
5. 启动游戏，确认没有依赖缺失或版本冲突。
6. 进入世界后打开 SSC 的书籍或按照游戏内提示继续。

:::tip 下载文件
下载发行版 `.jar`，不要把 GitHub 源代码压缩包放进 `mods` 文件夹。SSC 和 SSCA 都是免费项目，谨防要求付费下载的第三方渠道。
:::

## 粒子显示

SSCA README 提醒：请在游戏设置中启用粒子显示，否则部分技能的视觉表现会缺失。

## 关于 1.21.1

存在非官方的 1.21.1 社区移植，但成熟度和兼容性不能与本页的 1.20.1 基线等同。本站只在[版本与兼容性](../reference/versions)中简要记录，不为其建立完整玩法文档。

## 来源与状态

本页根据 SSC/SSCA README、`gradle.properties` 和 Modrinth 项目资料整理；具体依赖版本应以你下载的发行版为准。状态：`partial`。
