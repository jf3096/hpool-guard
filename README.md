# hpool-guard

> hpool 守卫, 解决扫盘超时的问题

## 适用平台

- window

## 机制
1. 打开 `hpool-guard-x.x.exe` 后, hpool-guard 会使用子进程的方式启动 hpool 官方程序 `hpool-miner-chia-console.exe`
2. 打开后 `hpool-guard-x.x.exe` 会监听所有日志, 当日志出现 `超过最大时间限制` 关键词时自动杀掉 `hpool-miner-chia-console.exe` 进程并重启

## 使用方式
1. 将仓库中的 hpool-guard-x.x.exe 复制到 hpool 挖矿程序目录中, 后续启动直接使用 `hpool-guard-x.x.exe` 即可

## 个人日常使用
为了方便矿机开关, 个人在 window 中将当前程序加入到开启启动中, 详细步骤如下:

1. 复制好 `hpool-guard-x.x.exe` 到指定目录后, 右键 `hpool-guard-x.x.exe` 发送到 `桌面快捷方式`
2. 使用快捷键 `win+r` 打开 `window 运行`, 并输入 `shell:startup`, 打开系统启动项目录
3. 将桌面 `快捷方式 hpool-guard-x.x.exe` 剪切到 `系统启动项目录` 即可做到开机启动

## 360 安全警告
由于源码不足 30 行, 欢迎简单阅读. 不存在任何安全风险

## 变更日志

## 1.0.0 (2021-05-22)

* init commit

## 作者
She Ailun