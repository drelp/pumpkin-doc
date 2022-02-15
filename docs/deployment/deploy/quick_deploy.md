---
sidebar_position: 1
---

# 快速部署

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

## 部署南瓜系统

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

### 添加Chart仓库

执行以下命令增加 Chart 仓库：

```console
helm repo add bitnami https://charts.bitnami.com/bitnami

helm repo add ocharts https://git.yunqiic.org.cn/Yunqiic/pumpkin-charts/raw/branch/master
```
添加成功后同步仓库信息，如下：
```console
helm repo update
```

这里可以先查看南瓜系统已有的安装包版本，如下：

```console
helm search repo ocharts
```

然后将南瓜系统对应版本的 chart 包下载到本地，并解压，如下：
```console
helm pull ocharts/pumpkin --version vx.x.x
tar -zxvf pumpkin-vx.x.x.tgz
```

进入解压后的pumpkin目录，执行以下命令更新南瓜系统安装所依赖的 chart 包
```console
helm dependency update
```

### 配置values.yaml文件

部署南瓜 chart 包时，需要修改部署包中的一些参数，这些参数都配置在安装包解压后目录中的 values.yaml 文件。南瓜 chart 包具体参数含义和默认值，可参考解压目录下README.md文件，或在[此链接](https://artifacthub.io/packages/helm/pumpkin/pumpkin) ，选择对应版本后查看配置信息。

下面遵循最小化部署的原则，介绍在大多数场景中会涉及修改的配置项：

#### 数据持久化配置

数据持久化配置关系到系统运行过程相关数据的存储策略，相关配置项包括：

- `pv.minio`配置项主要确认`数据集`,`算法`,`模型`等数据的存储位置，这部分需要采用有共享能力的存储方案，比如：nfs,ceph,lustre等；
- `pv.mysql`配置项主要确认系统关系型的结构化数据的存储位置，比如用户信息，群组信息等；
- `pv.redis`配置项主要确认对数据库数据缓存信息的存储位置；
- `pv.logger`配置项主要确认训练任务日志数据的存储位置；

以上`4`个配置项都有`2`个子属性配置项，包括：

- `requests`子属性配置项，该项主要对应Kubernetes中`PersistentVolume`资源的`spec.capacity.storage`属性([参考](https://v1-20.docs.kubernetes.io/docs/concepts/storage/persistent-volumes/#capacity) )，可抽象理解为存储的容量大小．
- `storageType`子属性配置项，该项属于对象类型，主要对应Kubernetes中`PersistentVolume`资源的具体存储类型的定义([参考](https://v1-20.docs.kubernetes.io/docs/concepts/storage/persistent-volumes/#types-of-persistent-volumes) )．

下面我们通过一些例子来说明：

1.`pv.minio`配置项使用nfs存储定义
```
pv:
  minio:
    requests: 100Gi
    storageType:
      nfs:
        // nfs服务地址
        server: 192.168.1.2
        // nfs中的目录
        path: /data
```

2.`pv.mysql`配置项使用服务器本地磁盘存储来持久化数据，在此类场景中，需要保证`mysql`运行实例能固定调度到选中的持久化存储的服务器，这里通过[NodeSelector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector) 实现，如下

假设持久化存储的服务器名称为`pv-node1`,
```
// 配置mysql实例调度到固定节点
mysql:
  primary:
    nodeSelector:
      kubernetes.io/hostname: pv-node1
...省略...
pv:
  mysql:
    storageType:
      // 定义mysql的存储类型为本地文件存储
      hostPath:
        type: Directory
        // 服务器节点上的文件系统目录
        path: /data
```

另外，监控数据通过[Prometheus](https://prometheus.io/) 来存储与管理，这里还需要对集群监控数据的存储位置进行配置，如下：

假设监控数据持久化存储的服务器名称为`prom-node`,

```
prometheus:
  nodeSelector: 
    kubernetes.io/hostname: prom-node
  volumes:
    dataPath: /data
```

#### 镜像仓库配置

在部署好harbor镜像仓库后，需要在配置中填入仓库服务的地址与信息.

> 注意: 
> 由于`harbor`发行版本中接口版本有`v1.0`与`v2.0`之分，请先确认已部署的`harbor`的版本，并修改配置项`baseserver.data.harbor.apiVersion`的值．

> 配置项`baseserver.data.harbor.apiVersion`可选值有："","v1.0","v2.0"．
> 空字符默认为"v2.0"

```console
baseserver:
  data:
    harbor:
      host: xxx.xxx.xxx.xxx:5000
      username: xxx
      password: xxx
      apiVersion: v1.0
      useSSL: false
```

#### 管理员账号配置

baserserver 服务中对系统管理员初始账号的设置，***注意只在第一次安装集群时***，将会以系统管理员初始账号的配置信息初始化管理员账号，之后的升级或重装，只要数据没有清理，将不会做修改，相关配置信息如下：

```console
baseserver:
  administrator:
    username: "admin"
    password: "123456"
    email: ""
    phone: ""
```

### 安装Pumpkin

通过 Helm 命令安装，进入到解压后的pumpkin目录，｀--debug --dry-run｀为调试模式，只会输出 yaml 不传给 k8s,真正安装需要去掉．如下：
```console
helm install pumpkin ./  --values values.yaml
```

### 更新Pumpkin

如果已经使用 helm install 成功安装过 chart 包
通过 Helm 命令更新．如下：
```console
helm upgrade pumpkin ./ --values values.yaml
```

### 验证

在部署节点上执行以下命令，查看所有服务是否启动成功：
```console
kubectl get pod
```
执行安装操作后，可通过浏览器登录前端页面验证是否安装成功。假设 nginx 服务是部署在 IP 为xxx.xxx.xxx.xxx 的服务器上。
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

### 卸载Pumpkin

命令行下执行以下命令：
```console
helm uninstall pumpkin
```