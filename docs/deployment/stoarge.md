---
sidebar_position: 4
---

# 部署共享存储

## 部署NFS

### 服务端

- 安装 NFS 服务

```console
#执行以下命令安装 NFS 服务，
#apt 会自动安装 nfs-common、rpcbind 等软件包
sudo apt install nfs-kernel-server
```

- 创建共享目录

在服务器端创建 /nfs 目录。

- 编写配置文件

```console
vim /etc/exports
#[任意主机所有权限]
/nfs   *(rw,sync,insecure,no_subtree_check,no_root_squash)
```

- 重启 NFS 服务

```console
sudo service nfs-kernel-server restart
```

- 常用命令工具

```console
#在安装 NFS 服务器时，已包含常用的命令行工具，无需额外安装
#显示已经 mount 到本机 NFS 目录的客户端机器
sudo showmount -e localhost
#将配置文件中的目录全部重新 export 一次，无需重启服务
sudo exportfs -rv
#查看 NFS 的运行状态
sudo nfsstat
#查看 rpc 执行信息，可以用于检测 rpc 运行情况
sudo rpcinfo
```

### 客户端

- 安装客户端工具

```console
#在需要连接到 NFS 服务器的客户端机器上，
#需要执行以下命令，安装 nfs-common 软件包。
#apt 会自动安装 nfs-common、rpcbind 等软件包
sudo apt install nfs-common
```

- 查看 NFS 服务器上的共享目录

```console
#显示指定的 NFS 服务器(假设 IP 地址为 192.168.3.167)上 export 出来的目录
sudo showmount -e 192.168.3.167
```

- 创建本地挂载目录

```console
sudo mkdir -p /nfs
```

- 挂载共享目录

```console
#假设 NFS 服务器 IP为 192.168.3.167，可以如下设置挂载
sudo mount -t nfs 192.168.3.167:/nfs /nfs
```

- 查看客户端挂载信息

```console
df -h
```