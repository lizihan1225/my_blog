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



## git commit 
如何修改最近一次的commit信息: git commit --amend
1. 如果只需要追加修改，而不修改上次提交信息: git commit --amend --no-edit
2. 如果只想修改上次提交信息，而不是追加修改: git commit --amend --only -m "new message"

## git rebase
git rebase -i ba90dc7ff4ab54f9bbb2ca89ddea031fa735c6d2
git rebase解决冲突：
1. git checkout branch_a  git rebase master
2. 手动解决冲突，然后执行git add 或者git rm文件，然后再执行git rebase --contiue继续变基，当然，也可以直接git rebase --skip跳过这个commit，或者使用git rebase --abort放弃rebase。
3. 修改好:wq保存即可
批量rebase：
1. git rebase -i ba90dc7ff4ab54f9bbb2ca89ddea031fa735c6d2
2. :%s/pick /f /g  (:s/old/new/g   将当前行的所有字符串old替换为new)
3. Ctrl + b 往上滚动一屏幕 找到第一个commit 改成s

## git注意点
- 有时即使你本地代码什么都没改，但别人可能把他代码同步到了远程分支，导致远程代码和你本地代码不一致会造成有冲突，git pull拉下来会有很多文件需要commit，可用git reset --hard origin/分支名和远程代码保持同步
git 