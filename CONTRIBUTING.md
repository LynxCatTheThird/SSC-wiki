# 贡献指南

感谢您帮助维护 SSC Wiki。只修改文档内容时，不需要先学习 Docusaurus 或 pnpm 的内部实现；按下面的流程即可完成一次修改。

## 1. 准备环境

建议使用 Node.js 22，并使用项目指定的 pnpm 版本。首次设置：

```bash
corepack enable
corepack install
pnpm install --frozen-lockfile
pnpm start
```

`pnpm start` 会启动本地预览。浏览器打开终端显示的地址即可查看页面，通常是 `http://localhost:3000`。

仓库提供了 VS Code 工作区设置和扩展推荐。若保存时格式反复变化，请在 **Format Document With…** 中选择 Prettier，并停用其他会同时格式化的扩展。VS Code 找不到依赖时，可以在仓库根目录运行 `corepack install && pnpm install`，然后执行 **Developer: Reload Window**。

## 2. 修改文档

### 找到正确文件

- 中文正文在 `docs/`。
- 英文翻译在 `i18n/en/docusaurus-plugin-content-docs/current/`。
- 修改页面标题、路径或事实时，请顺手检查对应的英文页面和站内链接。

### 保持统一格式

- front matter 使用成对的 `---`，通常只保留 `title`、`sidebar_position` 和 `description`。
- Minecraft、Loader、SSC/SSCA 版本与来源写在正文或参考链接中，不要堆在 front matter 顶部。
- 中文与英文、数字或代码标识符相邻时，通常保留一个空格，例如“使用 React 组件”“需要 2 个参数”。
- 不必为了列宽手动拆分 Markdown 段落。
- `:::` 容器、代码块、行内代码、front matter 和链接目标都有特殊语法，修改后请保留其边界。
- 事实、数值和兼容性结论应尽量附源码、资源、README 或游戏测试依据；不确定的内容请标明待验证。

### 一次修改的建议步骤

1. 从当前 `main` 创建分支，例如 `docs/update-spider`。
2. 修改对应的 Markdown、翻译或配置文件。
3. 用 `git diff` 检查是否混入了无关格式变化、构建产物或错误链接。
4. 需要时运行 `pnpm format`、`pnpm lint` 和 `pnpm pangu` 自动整理；这些命令会修改文件，运行后请再次查看 diff。
5. 运行只读检查，确认结果稳定：

   ```bash
   pnpm check
   pnpm build
   ```

6. `pnpm build` 成功后，可以运行 `pnpm serve` 查看生产构建；不要在没有重新 build 时把旧的 `build/` 当成最新结果。

## 3. 常用命令

```bash
pnpm start          # 启动开发预览
pnpm format         # 自动格式化
pnpm format:check   # 只检查 Prettier 格式
pnpm lint           # 自动修复 ESLint 可修复的问题
pnpm lint:check     # 只检查 ESLint
pnpm pangu          # 自动补齐 CJK 与 Latin/数字之间的空格
pnpm pangu:check    # 只检查 CJK/Latin 空格
pnpm check          # 运行格式、lint 和 pangu 检查
pnpm build          # 生产构建并压缩产物
pnpm serve          # 预览最近一次生产构建
```

## 4. 容易遇到的问题

- **只改了中文页面。** 如果英文翻译暂时没有同步，请在 Pull Request 中说明；不要悄悄留下相反或过期的英文描述。
- **格式化器改坏 `:::` 容器。** 参考已有页面，在容器前后保留成对的 `prettier-ignore-start/end` 标记。注意标记的范围，不要太大或太小。
- **pangu 改坏键名、命令或链接。** 工具会保护代码、front matter 和链接目标，但运行后仍请检查中文标题锚点、URL、表格和命令，以确保万无一失。
- **标题改了，旧链接失效。** 修改中文标题后搜索旧的 `#锚点` 引用，生产构建发现坏链接时会失败。请注意不要遗漏 `#`。
- **只运行了开发服务器。** `pnpm start` 能显示页面，但导航、翻译路径和 broken link 仍可能要到 `pnpm build` 才会暴露。也就是说，即使 `pnpm start` 正常，实际部署仍有可能出问题。
- **提交了生成文件。** `node_modules/`、`build/` 和 `.docusaurus/` 不需要提交。
- **混用包管理器。** 依赖变更建议使用 `pnpm add`，并同时提交 `package.json` 与 `pnpm-lock.yaml`；不要额外生成 npm 或 Yarn 锁文件。

## 5. 提交与 Pull Request

建议提交前运行：

```bash
pnpm check && pnpm build
```

1. Pull Request 描述可以简要写明：改了什么、依据哪个版本或来源、是否同步了英文页面。页面或样式有明显变化时，可以附截图。
2. 文档修改确实可能包含很多文件，也可能需要多次往返核对。建议按**逻辑主题**拆分提交，例如“更新事实内容”“同步英文翻译”“修复格式化问题”“更新工具配置”，而不是按每次保存或每个文件拆分。这样既方便审阅，也方便日后回退。
3. 同一个 Pull Request 可以包含多个相关提交，不必为了“一个 Pull Request 只能一个 commit”而强行合并。无关的临时调试、批量格式化和内容修改最好分开。
4. 依赖变更请同时提交 `package.json` 和 `pnpm-lock.yaml`。不需要提交 `node_modules/`、`build/`、`.docusaurus/` 或个人的编辑器设置。

核心维护者们请注意不要对贡献者过度要求 Pull Request 的格式，贡献者也不必过度紧张。但是，请贡献者务必勾选 `Allow edits and access to secrets by maintainers`。

### 建议的 Git 协作方式

为了让项目历史容易阅读和回退，`main` 分支原则上保持线性：

- `main` 是保护分支，日常修改通过 Pull Request 合并。
- 由于文档项目的特性，大多数都维护者对计算机欠熟悉，merge 会导致合并 Pull Request 时产生分支，造成不良的 graph 结构。所以，核心维护者们在合并 Pull Request 时，建议优先使用 **Squash and merge**，避免 merge 产生额外的分叉节点。
- 贡献者可以在自己的分支保留多个逻辑清晰的 commit，合并到 `main` 时再由维护者 squash 成一个主题明确的提交。所以，对 Git 操作欠熟悉的贡献者也不必紧张。
- 核心维护者也建议通过 Pull Request，尤其是文档事实、导航、依赖、格式化工具和 CI 的改动，尤其是大面积格式化、文档结构重组织等产生巨量 commit 和 diff 的任务。这样可以保留 CI 结果、审阅记录和 bot 提示。
- 线上构建故障等紧急情况可以直接修复，但最好在后续 Issue 或 Pull Request 中补充原因和检查结果。

这里的重点是让 `main` 易于理解，便于新贡献者的加入。一个文档任务包含多个逻辑 commit 是正常的；不建议按每次保存或每个文件拆分，也不必为了追求单一 commit 而丢失有用的修改过程。

## 6. 报告问题

Issue 中如果能提供页面链接、Minecraft/Loader/模组版本、预期行为、实际行为，以及必要的日志或截图，维护者会更容易复现和修正问题。
