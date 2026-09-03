---
title: 剧情与世界观
sidebar_position: 2
description: SSCA 官方故事内容的来源、许可和阅读索引
---

# 剧情与世界观

SSCA 的附属模组包含两组剧情书：使魔狐路线的《月痕：灵界之主》，以及荧光幼灵路线的《蔚蓝港编年史》。源码把它们作为 `story_books/books_cn.json` 与 `books_en.json` 注册，并通过成就和形态状态逐步提示玩家阅读。[^source]

## 阅读顺序

《月痕：灵界之主》围绕利亚姆在诅咒影响下成为使魔、觉醒并寻找自我的过程展开；《蔚蓝港编年史》记录荧光幼灵与阿澪从异变、被海湾接纳到守护港口的经历。两组故事都可以独立阅读，先读哪一组不会影响游戏进度。

游戏内原文请以 SSCA 发布包中的书籍为准。本站只提供剧情梗概和触发索引，不复制整章文本。

| 剧情线 | 相关形态 | 阅读入口 |
| --- | --- | --- |
| 月痕：灵界之主 | 使魔狐、灵界之主、使魔（Red） | SSCA 游戏内故事书 |
| 蔚蓝港编年史 | 荧光幼灵、阿澪 | SSCA 游戏内故事书 |
| 月光与月髓 | 多个终局分支 | 月髓十字环相关书籍与形态背景 |

## 许可

SSCA README 将 `story/`、游戏内书籍和 Codex 叙事文本标为 **CC BY-NC-ND 4.0**：可以转载，但必须保留署名，不得商业使用，也不得改写原文。字体和字号调整不改变文本内容。本站因此只做中文摘要、索引和来源链接。

[^source]: 故事书注册来自 SSCA `src/main/resources/data/ssc_addon/story_books/books_cn.json`、`books_en.json`、`story/MoonScarStoryManager.java` 与 `story/TideSpiritStoryManager.java`，commit `d84a18ca`；许可依据项目 README 的 License 章节。
