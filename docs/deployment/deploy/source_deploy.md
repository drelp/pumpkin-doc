---
sidebar_position: 2
---

# 源码部署

如果用户想从源码开始编译部署，可以参考本节内容。

:::note
请先执行本指南的前述章节操作，包括：环境依赖、部署 Kubernetes 集群、部署 Harbor 仓库、部署集群网络
:::

## 部署环境

安装如下软件环境：

- Kubernetes v1.16.3+
- Harbor v2.3.0+
- Docker v18.09.7+
- Helm v3.5.4+

Helm v3.5.4 安装可参加 Helm 官网[安装教程](https://helm.sh/docs/intro/install/)。

请注意：当前版本的南瓜系统服务只支持amd或x86架构。若集群中有其他架构（如arm架构）的节点，建议将其他架构的节点作为计算节点使用。部署时可在amd或x86节点上打上标签`pumpkin.yunqiic.pcl.cn/node=server`，以确保南瓜系统服务只在amd或x86的节点上部署运行。

## 下载南瓜系统源码

从南瓜系统项目地址下载源码包解压，如下：

```console
wget https://git.yunqiic.org.cn/Yunqiic/pumpkin/archive/release-v4.0.0.tar.gz
tar -zxvf pumpkin-release-v4.0.0.tar.gz
cd pumpkin/
```

## 编译

南瓜系统项目中已在 makefile 中定义好编译和镜像推送命令。
执行以下命令进行编译和推送镜像到本地搭建好的 harbor 仓库，注意以下命令中的参数要修改成本地对应的取值，其中 harbor 相关内容可参见前述安装 harbor 章节内容：

| Parameter           | Description                                                          |
|---------------------|----------------------------------------------------------------------|
| `DOCKER_HUB_PROJECT`      | harbor 中项目名称                   |
| `DOCKER_HUB_HOST`  | harbor 仓库地址                       |
| `DOCKER_HUB_USERNAME`      | harbor 仓库用户名                                |
| `DOCKER_HUB_PASSWD` | harbor 仓库密码                           |

```console
注意：推送镜像前需要先在 harbor 仓库创建好项目目录 pumpkin，即参数 DOCKER_HUB_PROJECT 的值。
```

```console
make images tag=v1.0.0
make images_push need_latest=FALSE tag=v1.0.0 docker_hub_project=${DOCKER_HUB_PROJECT} docker_hub_host=$DOCKER_HUB_HOST docker_hub_userame=$DOCKER_HUB_USERNAME docker_hub_passwd=$DOCKER_HUB_PASSWD
```

## 部署

### 创建Kubernetes标签

在准备启动 nginx 服务的节点上打上以下标签：

```console
kubectl label node {nodeName} nginx-ingress=yes
```

为nvida-gpu节点打上以下标签（若使用本手册的脚本部署kubernetes集群，则会自动打该标签）：
```console
kubectl label node {nodeName} hardware-type=NVIDIAGPU
```

为华为a910-device节点打上以下标签（若使用本手册的脚本部署kubernetes集群，则会自动打该标签）：
```console
kubectl label node {nodeName} a910-device-plugin=active
```

在准备启动南瓜服务的服务节点上打上以下标签(如果不想打该标签，请修改配置文件 values.yaml 中的 global.nodeSelector 属性)：
```console
kubectl label node {nodeName} pumpkin.yunqiic.pcl.cn/node=server
```

### 下载南瓜系统依赖包

```console
helm repo add bitnami https://charts.bitnami.com/bitnami
helm dependency update
```

### 配置values.yaml文件

部署南瓜 chart 包时，需要修改部署包中的一些参数，这些参数都配置在 values.yaml 文件中。南瓜 chart 包具体参数含义和默认值，可参考解压目录下deploy/charts/pumpkin/README.md文件
将下载好的源码目录/pumpkin/deploy 拷贝至部署节点上，打开/deploy/charts/values.yaml 进行以下修改。

```
注意：storageType 属性取值可参见 PersistentVolumeSource 结构体中 Spec 属性的取值。
若以本地存储，则可配置为：
storageType:
    hostPath:
        path: /test
若以 nfs 存储，则可配置为，其中 path 取值的目录需已存在:
storageType:
    nfs:
        server:  xxx.xxx.xxx.xxx
        path:  /test
```
镜像地址、harbor 项目名和服务镜像名称需要根据本地集群情况进行相应设置，如下：
```console
global:
  image:
    repository:
      address: "xxx.xxx.xxx.xxx:xxxx"
      pathname: "/yunqiicpumpkin"

baseserver:
    image:
      pullPolicy: ""
      address: ""
      pathname: ""
      name: "base-server"
```

baserserver 服务中的对 harbor 仓库的配置需要注意集群部署的 harbor 仓库的版本，如为 2.0 或以上版本的则需修改以下属性：
```console
baseserver:
  data:
    harbor:
      apiVersion: v2.0
```


### 安装Pumpkin Chart

请在/deploy/charts/pumpkin/templates/目录下执行以下操作。通过 Helm 命令安装，｀--debug --dry-run｀为调试模式，只会输出 yaml 不传给 k8s,真正安装需要去掉。其中部分参数可见如下解释：

| Parameter           | Description                                                          |
|---------------------|----------------------------------------------------------------------|
| `chartVersion`      | 镜像版本号                   |
| `valuesfile`  | value 文件路径                       |

```console
helm install pumpkin ocharts/pumpkin --version {chartVersion} --values ${valuesfile}
```

### 更新Pumpkin

如果已经使用 helm install 成功安装过 chart 包
通过Helm命令更新．如下：
```console
helm upgrade pumpkin ocharts/pumpkin --version {chartVersion} --values ${valuesfile}
```


### 验证

在部署节点上执行以下命令，查看所有服务是否启动成功：
```console
kubectl get pod
```
执行安装操作后，可通过浏览器登录前端页面验证是否安装成功。假设 nginx 服务是部署在 IP 为 xxx.xxx.xxx.xxx 的服务器上。
首先登录管理员端页面，登录信息为:
```console
地址：xxx.xxx.xxx.xxx/admin/
账号：admin
密码：123456
```
登录管理员页面后，可以通过页面注册普通用户账号，然后用注册好的账号密码登录用户端页面。登录信息为：
```console
地址：xxx.xxx.xxx.xxx/openai/
```