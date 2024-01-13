---
title: 001 git命令
date: 2024-01-14
categories:
  - 编程技能
tags:
  - git 
sidebar: "auto"
---

## 常用git命令

### git remote
- git remote：此命令列出本地仓库关联的所有远程仓库的名称。
- git remote -v：此选项显示所有远程仓库的 URL，以及它们对应的名称。
- git remote add <name> <url>：该子命令向本地仓库添加一个新的远程仓库。<name> 是您为远程仓库选择的自定义名称，<url> 是远程仓库的 URL。
- git remote rename <old-name> <new-name>：该子命令重命名现有的远程仓库。<old-name> 是当前的远程仓库名称，<new-name> 是您要为其指定的新名称。
- git remote remove <name>：该子命令取消本地仓库与远程仓库之间的关联。<name> 是要删除的远程仓库的名称。
- git remote set-url <name> <new-url>：该子命令更改现有远程仓库的 URL。<name> 是远程仓库的名称，<new-url> 是要指定的新 URL。