---
sidebar_position: 1
---

# 环境依赖

##  通用依赖

:::note
以下操作，无特殊说明，**所有节点都需要执行**
:::

### 条件要求

- **节点 CPU：** 4 核及以上
- **节点内存：** 2G 及以上 
- **节点操作系统：** `Ubuntu 16.04 LTS`、`Ubuntu 18.04 LTS`、`Ubuntu 20.04 LTS` 
- **节点网络：**
    1. 都有一个固定 ip，且建议内网 ip 网卡名字要相同（如所有节点的内网 ip 网卡的名字都是“eno1”）
    2. 能够连接外网，`ping baidu.com`成功；
    3. 节点与节点之间能够互相`ping`成功；
- **节点登录：** `root`账户，且所有节点密码设为**统一的密码**
- **节点个数：** >= 2，至少一个 master 节点，一个 node 节点

### 依赖安装

- **安装 ssh 服务**

> 1. 安装 `openssh-server`
>
> ```shell
> sudo apt-get install openssh-server
> ```
>
> 2. 修改配置文件
>
> ```shell
> vim /etc/ssh/sshd_config
> ```
>
> 找到配置项
>
> ```text
> LoginGraceTime 120
> PermitRootLogin prohibit-password
> StrictModes yes
> ```
>
> 把 `prohibit-password` 改为 `yes`，如下：
>
> ```shell
> LoginGraceTime 120
> PermitRootLogin yes
> StrictModes yes
> ```

- **重启机器，并设置 root 密码**
```shell
reboot
sudo passwd root
```

- **设置主机名,保证每个节点名称都不相同**

```shell
hostnamectl set-hostname xxx
```
    
- **同步节点时间**

> 1. 安装 ntpdate
>
> ```shell
> sudo apt-get -y install ntpdate
> ```
>
> 2. 配置 crontab，添加定时任务
>
> ```shell
> crontab -e
>
> 0 */1 * * * ntpdate time1.aliyun.com
> ```

##  特殊节点依赖

### GPU 节点

:::note
如果节点是 GPU 节点，则需要安装相应厂商的 GPU 驱动
:::

#### NVIDIA 显卡驱动安装

:::note
如果节点是安装了 NVIDIA 显卡的节点，则需要**安装 NVIDIA 显卡驱动**
:::

- **确定机器上 NVIDIA 显卡型号**

```shell
sudo lspci |grep -i nvidia
```

- **去[官方网站](https://www.nvidia.cn/Download/index.aspx?lang=cn)下载对应版本的显卡驱动**

- **禁用 nouveau 驱动**

> :::note
> Ubuntu 系统集成的显卡驱动程序是 nouveau ，它是第三方为 NVIDIA 开发的开源驱动，我们需要先将其屏蔽再安装 NVIDIA 官方驱动，否则直接安全驱动的话往往会报以下错误：ERROR: The Nouveau kernel driver is currently in use by your system. This driver is incompatible with the NVIDIA driver
> :::
> 
> 1. 将 nouveau 驱动加入黑名单，将如下内容加入 `/etc/modprobe.d/blacklist.conf` 文件中：
>
> ```shell
> sudo vim /etc/modprobe.d/blacklist.conf
>
> # 添加如下内容
> blacklist vga16fb
> blacklist nouveau
> blacklist rivafb
> blacklist rivatv
> blacklist nvidiafb
> ```
>
> 然后执行命令
>
> ```shell
> sudo update-initramfs -u
> ```
>
> 重启机器后，执行如下命令，如果没有输出则证明禁用成功
>
> ```shell
> sudo lsmod | grep nouveau
> ```
>
> 2. 安装 NVIDIA 官方驱动
>
> ```shell
> sudo chmod a+x NVIDIA-Linux-x86_64-418.126.02.run
> sudo ./NVIDIA-Linux-x86_64-418.126.02.run -no-x-check -no-nouveau-check -no-opengl-files
> ```
>
> 提示：安装过程中如果报缺少`gcc`等依赖而失败，按照提示依次执行 `sudo apt-get install xxx` 安装即可
>
> 3. 安装完成后，执行命令：
>
> ```shell
> nvidia-smi
> ```
>
> 出现 GPU 相关信息则表示安装驱动成功

### 其他异构节点

#### 华为a910驱动安装

驱动由华为云提供，具体可前往 [**华为云官网**](https://www.huaweicloud.com/intl/zh-cn/) 搜索下载
