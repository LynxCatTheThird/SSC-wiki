# 贡献指南

感谢您帮助维护 SSC Wiki。

## 准备环境

建议使用 Node.js 22 和项目指定的 pnpm 版本：

```bash
corepack enable
corepack install
pnpm install --frozen-lockfile
pnpm start
```

`pnpm start` 会启动本地预览，浏览器打开终端显示的地址即可查看页面。

## 修改文档

- 中文正文在 `docs/`，英文翻译在 `i18n/en/docusaurus-plugin-content-docs/current/`。
- 修改标题、路径或事实时，请检查对应的英文页面和站内链接。
- front matter、代码块、行内代码、链接目标和 `:::` 容器请保留其语法边界。
- 技能数值、命令、配置和兼容性结论应尽量附源码、资源、README 或游戏测试依据；不确定的内容请标明待验证。
- 中文与英文、数字或代码标识符之间的空格可使用 `pnpm lint-md:fix` 自动整理；运行后请检查 diff。

## 提交前检查

```bash
pnpm lint-md
pnpm build
```

`pnpm build` 会检查 Markdown/MDX、导航、翻译路径和站内链接。不要提交 `node_modules/`、`build/` 或 `.docusaurus/`。

## Pull Request

请简要说明改了什么、依据哪个版本或来源，以及是否同步英文页面。页面或样式有明显变化时，可以附截图。

Issue 中如果能提供页面链接、Minecraft/Loader/模组版本、预期行为、实际行为和必要的日志或截图，维护者会更容易复现和修正问题。
