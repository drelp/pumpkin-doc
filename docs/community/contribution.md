---
sidebar_position: 2
---

# 开源贡献指南

欢迎使用云启智城Pumpkin！本文档作为基本指南来为您指引如何向 Pumpkin进行贡献。如果您发现文档中有错误或缺失的内容，请向我们联系。

## 准备工作

### 行为准则

请保证您已经阅读过并同意遵守[行为准则](./code_of_conduct.md)。

### 搭建开发环境

您需要在系统中安装好golang，这是后端开发的主要技术栈；安装VUE开发环境，这是前端开发的主要技术栈；安装好 Kubernetes 集群，Pumpkin 使用 Kubernetes 集群来做整个平台的统一管理，是必不可少的一环。集群部署具体请参考[部署指南](../deployment/kubernetes.md)。项目架构及技术栈信息详见[架构设计](../develop/arch.md)。您可能还需要一个 IDE 来进行开发。

## 贡献

我们随时都欢迎任何贡献，无论是简单的错别字修正，BUG 修复还是增加新功能。请踊跃提出问题或发起 PR。我们同样重视文档以及与其它开源项目的整合，欢迎在这方面做出贡献。


### 从哪里入手？（补充issue列表超链接）

如果您是初次贡献，可以先从issue列表中认领一个比较小的任务来快速参与社区贡献。您可以直接在相应 issue 中回复参与意愿，然后参照下面的[云启智城工作流](#工作流)指引解决 issue, 并按照[规范](./pr-template.md)提交 PR，通过 review 后就会被 merge 到 master 分支。

### <span id="工作流">云启智城工作流</span>

我们使用 `master` 分支作为我们的开发分支，这代表它是不稳定的分支。每个版本区间（如 0.1.x）都会创建一个 release 分支（如 `release-0.1`）作为稳定的发布分支。每发布一个新版本都会将其合并到对应的 release 分支并打上对应的 tag。

下面是开源贡献者常用的工作流（workflow）：

1. 将仓库 fork 到自己**云启智城代码仓**下；
2. 将 fork 后的仓库 clone 到本地；
3. 创建新的分支，在新的分支上进行开发操作（**请确保对应的变更都有测试用例或 demo 进行验证**）；
4. 保持分支与远程 master 分支一致（通过 `fetch` 和 `rebase` 操作）；
5. 在本地提交变更（**注意提交前安装并运行golangci-lint 1.40 版本进行代码自检，注意 commit log 保持简练、规范**），**注意提交的 email 需要和 GitHub 的 email 保持一致**；
6. 将提交 push 到 fork 的仓库下；
7. 创建一个 pull request (PR)。

提交 PR 的时候请参考 [PR 模板](./pr-template.md)。在进行较大的变更的时候请确保 PR 有一个对应的 Issue。

若您是初次提交 PR，**请先签署 CLA**（PR 页面会有自动回复指引）。在提交 PR 后，系统会自动运行持续集成，请确保所有的 CI 均为 pass 状态。一切就绪后，我们会为 PR 分配一个或多个 reviewer。Reviewer 会对提交的代码进行 review。

在合并 PR 的时候，请把多余的提交记录都 squash 成一个。最终的提交信息需要保证简练、规范。

### 创建 Issue / PR 

我们使用 [Issues](https://git.yunqiic.org.cn/Yunqiic/pumpkin/issues) 以及 [Pull Requests](https://git.yunqiic.org.cn/Yunqiic/pumpkin/pulls) 来管理/追踪问题。

如果您发现了文档中有表述错误，或者代码发现了 BUG，或者希望开发新的特性，或者希望提建议，可以[创建一个 Issue](https://git.yunqiic.org.cn/Yunqiic/pumpkin/issues/new)。请参考 Issue 模板中对应的指导信息来完善 Issue 的内容，来帮助我们更好地理解您的 Issue。

如果您想要贡献代码，您可以参考上面的 [云启智城工作流](#工作流)，提交对应的 PR。若是对当前开发版本进行提交，则目标分支为 `master`。如果您的 PR 包含非常大的变更，比如模块的重构或者添加新的组件，请**务必先提出相关 issue，发起详细讨论，达成一致后再进行变更**，并为其编写详细的文档来阐述其设计、解决的问题和用途。注意一个 PR 尽量不要过于大。如果的确需要有大的变更，可以将其按功能拆分成多个单独的 PR。

issue提交及开发流程说明，请详细参考提交[issue模板](./issue-temp-and-dev-process.md)。

### 报告安全问题 （待补充官方邮箱地址）

特别地，若您发现 Pumpkin 及其生态项目中有任何的安全漏洞（或潜在的安全问题），请第一时间通过 [pumpkin@yunqiic.com](mailto:pumpkin@yunqiic.com) 邮箱私下联系我们。在对应代码修复之前，**请不要将对应安全问题对外披露，也不鼓励公开提 issue 报告安全问题**。

### Code review

所有的代码都需要经过 committer 进行 review。以下是我们推荐的一些原则：

- 可读性：代码遵循我们的开发规约，重要代码需要有详细注释和文档
- 优雅性：代码简练、复用度高，有着完善的设计
- 测试：重要的代码需要有完善的测试用例（单元测试、集成测试），对应的衡量标准是测试覆盖率

## 社区

欢迎关注云启智城。

## 联系我们

### 邮件组 （待补充官方邮箱地址）

如果您有任何问题与建议，请通过邮箱 [pumpkin@yunqiic.com](mailto:pumpkin@yunqiic.com) 联系我们。