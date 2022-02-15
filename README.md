# Pumpkin Doc

所有文档在`docs`目录中，使用Markdown格式撰写。侧边栏文档目录请在`sidebars.js`中进行配置。

`master`分支更新将自动触发构建并部署。

文档编辑格式和高级用法请参考[Docusaurus文档](https://v2.docusaurus.io/docs/docs-introduction)。

# 运行在本地服务器

## 环境

- Node.js 版本 >= 12.13.0（您可使用 node -v 查看版本）。 您可以使用 nvm 来管理主机上的多个 Node 版本

- 使用npm淘宝镜像

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

- 安装依赖
进入项目目录

```shell
cnpm install
```

- 运行

```shell
cnpm start -- --locale zh
npm run start
```

# 部署

构建静态文件到`build`目录下

```shell
cnpm run build
npm run build
```
# 多版本

- 创建版本

```shell
cnpm run docusaurus docs:version 版本号
```

# Markdown用法

参考 `https://www.docusaurus.cn/docs/markdown-features`