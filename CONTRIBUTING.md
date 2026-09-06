# 贡献指南

感谢你帮助完善 SSC Wiki。项目使用 Docusaurus、TypeScript 和 pnpm；请不要使用 npm 或 Yarn 修改依赖，以免生成相互冲突的锁文件。

## 开发环境

- 推荐 Node.js 22（与 CI 一致）
- 推荐 `package.json` 中 `packageManager` 指定的 pnpm 版本
- 推荐使用 VS Code，并安装工作区推荐的 Prettier 与 ESLint 扩展

首次设置：

```bash
corepack enable
corepack install
pnpm install --frozen-lockfile
pnpm start
```

`corepack install` 会读取 `package.json` 的 `packageManager` 字段并准备正确版本，无需全局安装 pnpm。如果系统没有 Corepack，可按照 pnpm 官方说明安装 Corepack 后再执行以上命令。

常用命令：

```bash
pnpm start          # 启动本地开发服务器
pnpm format         # 用 Prettier 修复格式
pnpm format:check   # 只检查格式
pnpm lint           # 自动修复 ESLint 可修复的问题
pnpm lint:check     # 只检查 ESLint 规则，不修改文件
pnpm pangu          # 自动补齐 CJK 与 Latin/数字之间的空格
pnpm pangu:check    # 只检查 CJK 与 Latin/数字空格
pnpm check          # 依次检查格式和 lint
pnpm build          # 执行完整生产构建
```

提交前至少运行 `pnpm check && pnpm build`。CI 会使用冻结的 `pnpm-lock.yaml` 重复执行这些检查。

## VS Code、pnpm 与格式化冲突

仓库已提交 `.vscode/settings.json`，将 Prettier 设为默认格式化器、启用保存时格式化，并让 VS Code 使用仓库内的 TypeScript。接受推荐扩展后通常不需要额外设置。

如果保存后代码反复变化或出现“多个格式化器”提示：

1. 对当前工作区选择 **Format Document With… → Configure Default Formatter → Prettier**。
2. 禁用会同时格式化同一文件的扩展（例如 Biome、其他 Prettier 分支或内置 TypeScript 格式化器）；ESLint 负责代码质量，不负责与 Prettier 重复排版。
3. 检查用户级 `editor.defaultFormatter`、`editor.codeActionsOnSave` 和语言专属设置，工作区配置应拥有最终优先级。
4. 不要把 pnpm 配置成 npm：运行脚本用 `pnpm <script>`，添加依赖用 `pnpm add`，只提交 `pnpm-lock.yaml`。
5. 如果 VS Code 找不到依赖，先在仓库根目录运行 `corepack install && pnpm install`，再执行 **Developer: Reload Window**。

命令行的 `pnpm format` 是最终格式基准；编辑器结果与其不一致时，以命令行结果为准。

## 格式要求速查

- 缩进 2 个空格，使用 LF 换行，文件末尾保留换行。
- JavaScript、TypeScript、JSX/TSX、JSON、YAML 和 Markdown 使用 Prettier；`pnpm format:check` 会检查配置文件与英文 i18n 文档。
- 中文与英文、数字或代码标识符相邻时保留一个空格，例如“使用 React 组件”“需要 2 个参数”。行内代码、链接 URL 和 frontmatter 键值按语法书写，不为追求留白破坏语法。
- `pnpm pangu` 使用 pangu.js 处理 Markdown，并跳过围栏代码块；Docusaurus `:::` 容器仍保持原有结构。自动处理后请人工检查命令、URL、frontmatter 和表格。
- Prettier 的 `proseWrap: never` 不会为了列宽强制拆分 Markdown 段落；手动换行应只用于列表、表格或确有语义的分段。
- `pnpm lint` 会自动修复 ESLint 可修复的问题；需要只读检查时运行 `pnpm lint:check`。提交前运行 `pnpm check`。

当前 TypeScript 为 7.0，typescript-eslint 尚未支持该版本，因此 ESLint 暂不解析 TS/TSX；这些文件仍由 Prettier 格式化。待 typescript-eslint 支持 TS 7 或项目升级到受支持的 TypeScript 版本后，再将 TS/TSX 纳入 ESLint。

## 文档要求

1. 确认页面适用的 Minecraft 版本、Loader 类型与版本、SSC/SSCA 版本，并在 frontmatter 中填写验证日期、来源 commit 和状态。
2. 涉及技能数值、命令、配置、配方、依赖或兼容性时，优先引用目标版本源码、资源或游戏测试结果。旧版 Wiki、介绍或玩家经验不能单独作为最新行为的依据。
3. 中文正文放在 `docs/`；对应英文翻译放在 `i18n/en/docusaurus-plugin-content-docs/current/`。修改两种语言共有的事实时，请检查是否需要同步更新翻译。
4. 保持站内链接、标题层级和 frontmatter 有效。生产构建会把损坏的链接视为错误。

## 提交与 Pull Request

- 每个提交聚焦一个主题，避免混入无关改动。
- PR 描述应说明变更内容、验证过的版本以及资料来源；视觉改动请附截图。
- 依赖变更必须同时提交 `package.json` 和 `pnpm-lock.yaml`。
- 不要提交 `node_modules/`、`build/`、`.docusaurus/` 或个人编辑器设置。

发现错误时，请在 Issue 中提供页面链接、版本组合、预期行为、实际行为，以及必要的日志或截图。
