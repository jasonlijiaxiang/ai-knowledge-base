# 从 git 取回历史讲义

讲义的历史快照（`PPT-version/<模块>/raw-data/history/`）**不进版本库**：pptx 是二进制、
不可 diff，每存一份就是整份副本。版本历史交给 git 本身承担——**每个提交里都躺着当时那一份完整的
pptx**，取回来是三行命令的事。

## 三步取回

**① 看这册讲义改过哪些次**

```bash
git log --oneline -- PPT-version/MCP/MCP-讲义.pptx
```

**② 挑一个提交，把当时那一份导出来**

```bash
git show <提交号>:PPT-version/MCP/MCP-讲义.pptx > /tmp/MCP-讲义-旧版.pptx
```

`>` 重定向是必须的——`git show` 把二进制内容打到标准输出，不接文件就会刷屏。

**③ 验一遍再用**

```bash
python3 _maintenance/audit_pptx.py /tmp/MCP-讲义-旧版.pptx
```

## 按日期找

不记得提交号，只记得"大概是七月十七号那次改的"：

```bash
git log --oneline --since=2026-07-17 --until=2026-07-18 -- PPT-version/MCP/MCP-讲义.pptx
```

或者直接按日期取那天结束时的状态：

```bash
git show 'main@{2026-07-17}:PPT-version/MCP/MCP-讲义.pptx' > /tmp/旧版.pptx
```

（`main@{日期}` 依赖本地 reflog，clone 下来的新副本没有——新副本用上面 `git log` 那条。）

## 想比较两版差在哪

pptx 二进制看不出来，但可以把两版的**文字**导出来对。库内的 `dump_pages.py` 按放映序
dump 指定页（页码口径与 audit、MANIFEST 一致）：

```bash
git show <旧提交>:PPT-version/MCP/MCP-讲义.pptx > /tmp/old.pptx
python3 _maintenance/dump_pages.py /tmp/old.pptx 12 13 14 > /tmp/old.txt
python3 _maintenance/dump_pages.py PPT-version/MCP/MCP-讲义.pptx 12 13 14 > /tmp/new.txt
diff /tmp/old.txt /tmp/new.txt
```

要一次导全册而不是指定页，用技能包里的 `scripts/kb_deck_text.py`（装了技能就有，
库内 `_maintenance/` 没有这一份）。

## 为什么不干脆把 history/ 也传上去

约 170 份、49 MB，而且每次改动都会再多一份。它们与 git 里已有的内容**完全重复**：
git 每个提交本来就存了整份 pptx。传上去只是把同样的东西存第二遍，把仓库撑大四倍。

作者本地那份 `history/` 保留着（`.gitignore` 挡住不上传），是改坏了随手回滚的方便，
不是唯一副本——真正的版本历史在 git 里。
