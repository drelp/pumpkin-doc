---
sidebar_position: 2
---

# Notebook镜像制作

创建 notebook 时，如果选用的是自定义镜像，需要配置 dockerfile 默认命令启动 jupyter。dockerfile 样例如下：

```
FROM python:3.10-rc-buster
RUN pip install jupyterlab
# v4.0.5及以上版本不需要下面语句
CMD ["sh","-c", "jupyter lab --no-browser --ip=0.0.0.0 --allow-root --notebook-dir='/code' --port=8888 --LabApp.token='' --LabApp.allow_origin='*' --LabApp.base_url=$PUMPKIN_JPY_BASE_URL"]
```

- 允许 jupyter 监听所有端口

  ```
  --ip=0.0.0.0
  ```

- 允许用户以 root 身份运行

  ```
  --allow-root
  ```

- 设置工作目录为/code，平台会将算法挂载到该目录下

  ```
  --notebook-dir='/code'
  ```

- 设置 port 为 8888

  ```
  --port=8888
  ```

- 关闭 token 认证

  ```
  --LabApp.token=''
  ```
  
- 允许所有源访问

  ```
  --LabApp.allow_origin='*'
  ```
  
- 设置 base URL，使用环境变量 PUMPKIN_JPY_BASE_URL 设置 base URL

  ```
  --LabApp.base_url=$PUMPKIN_JPY_BASE_URL
  ```
  
- notebook 运行后会将算法、数据集分别挂载到/code、/dataset 目录，因此制作的镜像需要不占用/code、/dataset 目录