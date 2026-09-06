---
title: 安装与依赖
sidebar_position: 1
---

# 安装与依赖

本页针对 Minecraft 1.20.1 Fabric 的 SSC 主线和 SSCA 社区附属模组。[^source]

## 推荐组合

| 项目      | 首发基线      |
| --------- | ------------- |
| Minecraft | 1.20.1        |
| Loader    | Fabric Loader |
| SSC       | 1.10.0        |
| SSCA      | 8.0.0-beta.3  |
| Java      | 17 或更高     |

SSCA 依赖 SSC。两个模组的版本必须匹配；SSCA README 明确提醒 beta 构建可能基于 SSC 测试版开发，下载前应核对对应版本。

## SSC 必需依赖

SSC 1.10.0 的 `fabric.mod.json` 声明：

| 依赖                   | 最低版本/范围         | 类型 |
| ---------------------- | --------------------- | ---- |
| Fabric Loader          | `>=0.12.3`            | 必需 |
| Fabric API             | `>=0.83.0`            | 必需 |
| Pehkui                 | `>=3.7.8`             | 必需 |
| Satin                  | `>=1.14.0`            | 必需 |
| GeckoLib               | `>=4.0.0` 且 `<5.0.0` | 必需 |
| Rich Translatable Text | `>=1.0.2`             | 推荐 |
| First-person Model     | 任意兼容版            | 推荐 |
| Trinkets               | `>=3.7.2`             | 推荐 |

:::warning Origins 冲突
SSC 当前元数据明确将独立的 Origins 模组列为冲突项。SSC 已包含或改造其所需部分，不要仅凭旧教程额外安装 Origins。`EnchantedLib >0.3.0`、OptiFabric、Identity `<1.14.2-beta` 和 GeckoLib 5 也被列入冲突范围。
:::

## SSCA 必需依赖

SSCA 8.0.0-beta.3 声明需要 Fabric Loader `>=0.14.21`、Fabric API `>=0.83.0`、SSC `>=1.10.0` 和 GeckoLib `>=4.8.4`。Trinkets、Mod Menu、LambDynamicLights 与 AsyncParticles 是建议安装项，不是硬依赖。上游 README 还特别提醒开启粒子显示，否则部分技能的视觉表现会缺失。[^source]

## 安装步骤

1. 安装 Minecraft 1.20.1 的 Fabric 实例。
2. 安装上表列出的 SSC 必需依赖；不要额外安装被声明冲突的 Origins。
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

[^source]: 版本与依赖来自 SSC、SSCA 的 README、`gradle.properties`、`fabric.mod.json` 和 Modrinth 发布页。表格对应 SSC 1.10.0 与 SSCA 8.0.0-beta.3；其他发行包组合需要分别核对依赖声明。
