### 1. 列举工作中常用的几个git命令？
pull add commit push
### 2. 提交时发生冲突，你能解释冲突是如何产生的吗？你是如何解决的？
多人协作开发同时修改相同文件就会产生冲突
已提交 git pull 造成conflict, 手动处理完冲突之后 merge --continue
未提交 git stash, git pull, git stash pop, 处理冲突, 提交

### 3. 如果本次提交误操作，如何撤销？
git reset --soft(撤销本地仓库), --mixed(撤销本地仓库,索引区), --hard(撤销本地仓库,索引区,工作空间)

### 4. 如果我想修改提交的历史信息，应该用什么命令？
修改前一次 git commit --amend
修改前几次 git brease -i commitId / HEAD~3

### 5. 你使用过git stash命令吗？你一般什么情况下会使用它？
1. 临时切换工作区
2. 解决冲突

### 6. 如何查看分支提交的历史记录？查看某个文件的历史记录呢？
git log, git reflog.
后边追加文件名即可

### 7. 能不能说一下git fetch和git pull命令之间的区别？
fetch只是拉去远端分支, pull会拉去远端分支,并进行merge

### 8. 使用过git merge和git rebase吗？它们之间有什么区别？
将
都是提交的合并.
merge: 将两个分支进行合并,会生成一个新的节点,原有commitId不变.
rebase: 将当前分支变基到目标分支,两个分支合并为一个的线性操作.不会生成新的节点,原有commitId变化,便于commit信息的整合,清晰的展示

### 9. 能说一下git系统中HEAD、工作树和索引之间的区别吗？
HEAD: 包含当前分支的引用(指针)
工作树: 把当前分支检出到工作空间后形成的目录树
索引: 文件修改之后,通过add更新索引文件,索引文件生成tree对象

### 1. 之前项目中是使用的GitFlow工作流程吗？它有什么好处？

### 1. 使用过git cherry-pick，有什么作用？
可以将不同分支的commit进行复制

### 1. git跟其他版本控制器有啥区别？
git为分布式版本控制工具,相对于集中式版本控制系统
每个节点的地位时平等的,拥有自己的版本库,在没有网络的情况下,对工作空间的修改可以提交到本地仓库.

### 1. 我们在本地工程常会修改一些配置文件，这些文件不需要被提交，而我们又不想每次执行git status时都让这些文件显示出来，我们该如何操作？
放入.gitignore文件中

### 1. 如何把本地仓库的内容推向一个空的远程仓库？
git remote add ori 仓库地址
git push ori master

### 1. 如在 Git 恢复先前的提交?
git checkout commitId
git reset --hard HEAD~1
