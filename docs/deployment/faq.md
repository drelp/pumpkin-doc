---
sidebar_position: 7
---

# 常见问题

## Kubernetes集群部署相关问题

### 证书过期

- **问题** 

使用 kubeadm 部署的集群，出现 api 无法调取的现象，使用 kubectl 命令获取资源均返回如下报错：

```shell
Unable to connect to the server: x509: certificate has expired or is not yet valid
```

- **原因** 

Kubernetes 各个组件证书到期了，因为使用 kubeadm 部署的集群，默认证书有效期为一年，一年后需更新证书

- **验证** 

执行以下命令
```shell
kubeadm alpha certs check-expiration
```

得到以下结果，如果 `RESIDUAL TIME` 小于等于 0，则表示证书过去，需要更新证书

```shell
CERTIFICATE                EXPIRES                  RESIDUAL TIME   EXTERNALLY MANAGED
admin.conf                 Oct 12, 2021 03:13 UTC   81d             no
apiserver                  Oct 12, 2021 03:13 UTC   81d             no
apiserver-etcd-client      Oct 12, 2021 03:13 UTC   81d             no
apiserver-kubelet-client   Oct 12, 2021 03:13 UTC   81d             no
controller-manager.conf    Oct 12, 2021 03:13 UTC   81d             no
etcd-healthcheck-client    Oct 12, 2021 03:13 UTC   81d             no
etcd-peer                  Oct 12, 2021 03:13 UTC   81d             no
etcd-server                Oct 12, 2021 03:13 UTC   81d             no
front-proxy-client         Oct 12, 2021 03:13 UTC   81d             no
scheduler.conf             Oct 12, 2021 03:13 UTC   81d             no
```

- **解决** 

采用 kubeadm 默认延期 1 年时间的策略，更新所有证书

备份集群配置

```shell
kubeadm config view > kubeadm-cluster.yaml
```

更新证书

```shell
kubeadm alpha certs renew all --config=kubeadm-cluster.yaml
```

确认验证

```shell
kubeadm alpha certs check-expiration
```

其他方案可参考[Kubernetes更新证书](https://www.cnblogs.com/itzgr/p/13370185.html)

:::note
更新操作需要在所有 **`master`** 节点执行
:::

### kubectl命令失效

- **问题**

当在节点上使用 `kubectl` 时，均报以下错误：

```shell
The connection to the server localhost:8080 was refused - did you specify the right host or port?
```

- **原因**

这是因为我们提供的快速部署脚本是在 `root` 账户下执行的，所以把Kubernetes的配置文件放到了 `/root` 目录下，所以如果是其他账户登录的时候，会报以上问题，这时候只需要把这个配置文件拷贝到相应的账户的 home 目录下即可

- **解决**

在要执行 `kubectl` 的账户下，执行以下命令

```shell
mkdir $HOME/.kube
sudo cp /root/.kube/config $HOME/.kube
export KUBECONFIG=$HOME/.kube/config
```

确认验证

```shell
kubectl get node
```

### docker镜像拉取失败

- **问题**

当在节点上使用 `docker pull` 时，均报以下错误：

```shell
Error response from daemon: Get ... HTTP response to HTTPS client
```

- **原因**

这是因为我们提供的快速部署脚本安装的docker，仅支持https协议，如果用自建的habor且是http协议的话，就会出现以上问题，需要在**每个节点**上，新增个docker配置并重启docker即可

- **解决**

在 `root` 账户下，执行以下命令

```shell
vim /etc/docker/daemon.json
```

```shell
{
   "experimental": true,
   "registry-mirrors": ["https://n8eijkli.mirror.aliyuncs.com"],
   "exec-opts":["native.cgroupdriver=systemd"],
   "insecure-registries": ["${自建habor的地址}"], "live-restore": true
}
```

 新增这个配置项`"insecure-registries": ["${自建habor的地址}"], "live-restore": true`，其中 ${自建habor的地址} 为自建habor的地址

重启docker

```shell
systemctl daemon-reload
systemctl restart docker
```


### swap分区未关闭

- **问题**

当在某个节点上的状态是 `notReady` ，登录该节点，使用 `journalctl -f -u kubelet` 命令查看相关错误时，报以下错误：

```shell
failed to run Kubelet: running with swap on is not supported, please disable swap
```

- **原因**

这是因为我们提供的快速部署脚本关闭swap分区是临时关闭方式，如果出现机器重启，会重新恢复，这时候需要手动关闭一下

- **解决**

1. 可以选择，在 `root` 账户下，执行以下命令，临时关闭swap

```shell
swapon -a
```

重启kubelet

```shell
systemctl restart kubelet
```

2. 或者选择，在 `root` 账户下，永久关闭swap

```shell
vim /etc/fstab
```

注释掉swap分区的记录

```shell
#/dev/mapper/cl-swap     swap                    swap    defaults        0 0
```

重启机器

```shell
systemctl reboot
```