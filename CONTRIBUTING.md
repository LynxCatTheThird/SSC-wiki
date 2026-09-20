# 贡献指南

感谢您帮助维护 幻形者诅咒 Wiki。

## 准备环境

请通过系统包管理器安装 Node.js 和 pnpm，然后执行：

```bash
pnpm install --frozen-lockfile
pnpm dev
```

`pnpm dev` 会启动开发服务器，浏览器打开终端显示的地址即可查看页面。

## 修改文档

- 中文正文在 `docs/`，英文翻译在 `i18n/en/docusaurus-plugin-content-docs/current/`。
- 修改标题、路径或事实时，请检查对应的英文页面和站内链接。
- front matter、代码块、行内代码、链接目标和 `:::` 容器请保留其语法边界。
- 技能数值、命令、配置和兼容性结论应尽量附源码、资源、README 或游戏测试依据；不确定的内容请标明待验证。
- 中文与英文、数字或代码标识符之间的空格可使用 `pnpm fix:docs` 自动整理；运行后请检查 diff。

## 提交前检查

```bash
pnpm verify
```

`pnpm verify` 会依次运行静态检查、测试和生产构建。不要提交 `node_modules/`、`build/` 或 `.docusaurus/`。

常用命令：

| 命令                | 用途                                  |
| ------------------- | ------------------------------------- |
| `pnpm dev`          | 启动开发服务器                        |
| `pnpm build`        | 生成中英文生产构建                    |
| `pnpm preview`      | 预览已有生产构建                      |
| `pnpm clean`        | 清理 Docusaurus 缓存和构建产物        |
| `pnpm check`        | 运行类型、代码、文档和格式静态检查    |
| `pnpm fix`          | 修复代码、文档和结构化文件的格式问题  |
| `pnpm test`         | 运行自动化测试                        |
| `pnpm verify`       | 运行提交前的全部检查、测试和生产构建  |

## Pull Request

请简要说明改了什么、依据哪个版本或来源，以及是否同步英文页面。页面或样式有明显变化时，可以附截图。

Issue 中如果能提供页面链接、Minecraft/Loader/模组版本、预期行为、实际行为和必要的日志或截图，维护者会更容易复现和修正问题。
