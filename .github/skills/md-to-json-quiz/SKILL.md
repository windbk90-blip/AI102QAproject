---
name: md-to-json-quiz
description: 将 Markdown 格式的题库文件转换为标准 JSON 格式。当用户上传或提及 .md 题库文件，并希望将其转换为 JSON 格式时，必须使用本 skill。适用场景包括：AI-102、AZ-900 等认证考试题库转换；题目格式整理；将 Markdown 题库批量转为可程序化处理的 JSON 结构。只要用户提到"题库转换"、"MD 转 JSON"、"导出题目"、"转换题库格式"等需求，立刻使用本 skill。
---

# MD 题库转 JSON Skill

将 Markdown 格式的题库文件（单选、多选混合）批量转换为结构化 JSON 格式。

---

## 目标 JSON 格式

```json
[
  {
    "id": "1",
    "type": "single",
    "content": "题目完整内容（含背景、要求、题目文本），不作删改",
    "explanation": "解析内容（含争议说明），不作删改",
    "options": [
      { "id": "A", "text": "选项文本" },
      { "id": "B", "text": "选项文本" }
    ],
    "answer": "B"
  },
  {
    "id": "3",
    "type": "multiple",
    "content": "题目完整内容",
    "explanation": "解析内容",
    "options": [
      { "id": "A", "text": "选项文本" },
      { "id": "F", "text": "选项文本" }
    ],
    "answer": ["C", "D", "F"]
  }
]
```

- `type`：`"single"`（单选）或 `"multiple"`（多选）
- `answer`：单选为字符串，多选为字符串数组
- `content`：保留题目的**所有文本**（背景、要求、题干），不删改
- `explanation`：保留解析的**所有文本**（含争议说明），不删改
- 选项 `text` 中**去除**开头的选项字母前缀（如 `A. ` 或 `A、`）

---

## MD 文件格式说明（AI-102 题库）

参见 `/mnt/skills/examples/` 或用户上传的文件。典型结构如下：

```
## 第 N 题

**背景**
[背景段落]

**题目**
[题干文字]

**选项**

A. 选项A文本

B. 选项B文本

...

---

**参考答案：X** （单选）
或
**参考答案：X、Y、Z** （多选，用顿号/逗号分隔）

**解析：**
[解析文字，可能含争议说明区块]

---
```

---

## 转换步骤

### 第一步：读取 MD 文件

```python
# 从用户上传路径读取
with open('/mnt/user-data/uploads/<filename>', 'r', encoding='utf-8') as f:
    content = f.read()
```

### 第二步：按题目分割

使用正则表达式按 `## 第 N 题` 分割题目块：

```python
import re
pattern = r'##\s*第\s*(\d+)\s*题'
blocks = re.split(pattern, content)
# blocks[0] 是文件头，此后每两个元素为 (题号, 题目内容)
```

### 第三步：解析每道题

从每个题目块中提取：

**a. content（题目内容）**  
合并 `**背景**`、`**题目**` 两个段落之间的所有文本，保留 Markdown 格式。  
规则：从背景块开始，到 `**选项**` 标题之前结束（不含选项本身）。

```python
# 提取 content（背景+题目，去掉 "**背景**" "**题目**" 标题本身，但保留内容）
content_match = re.search(
    r'(\*\*背景\*\*.*?)(?=\*\*选项\*\*)',
    block, re.DOTALL
)
```

**b. options（选项列表）**  
在 `**选项**` 之后，`---` 之前的区域提取选项：

```python
options_match = re.search(
    r'\*\*选项\*\*(.*?)(?=---)',
    block, re.DOTALL
)
# 每个选项格式：^[A-F]\.\s+(.+)$
option_pattern = re.compile(r'^([A-F])[\.、]\s*(.+?)$', re.MULTILINE)
```

**c. answer（答案）**  
从 `**参考答案：...` 中提取：

```python
answer_match = re.search(r'\*\*参考答案[：:]\s*([A-F、，,\s]+?)\*\*', block)
raw = answer_match.group(1).strip()
# 分割多选：re.split(r'[、，,\s]+', raw)
answers = [a.strip() for a in re.split(r'[、，,\s]+', raw) if a.strip()]
answer = answers[0] if len(answers) == 1 else answers
type_ = "single" if isinstance(answer, str) else "multiple"
```

**d. explanation（解析）**  
从 `**解析：**` 之后到下一个 `---` 分割符（或文件末尾）之间的所有文本，含争议说明区块：

```python
explanation_match = re.search(
    r'\*\*解析[：:]\*\*(.*?)(?=\n---|\Z)',
    block, re.DOTALL
)
```

### 第四步：构建 JSON 对象

```python
question = {
    "id": str(question_number),
    "type": type_,
    "content": content_text.strip(),
    "explanation": explanation_text.strip(),
    "options": [{"id": opt_id, "text": opt_text.strip()} for opt_id, opt_text in options],
    "answer": answer
}
```

### 第五步：输出 JSON 文件

```python
import json
output_path = '/mnt/user-data/outputs/questions.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)
```

---

## 注意事项与边界情况

| 情况 | 处理方式 |
|------|----------|
| 题目没有 `**背景**` 段落 | content 只包含 `**题目**` 段落的内容 |
| 多选答案用顿号 `、`、逗号 `,` 或空格分隔 | 统一用 `re.split(r'[、，,\s]+', ...)` 分割 |
| 解析中含 `> ⚠️ **争议说明**` 区块 | 直接包含在 explanation 中，不作删改 |
| 选项前缀格式 `A.` 或 `A、` | 均需去除，只保留选项正文 |
| 选项文本跨多行 | 合并为单行（去除多余换行） |
| `&nbsp;` 空行占位符 | 在 content 中可忽略（或保留，不影响语义） |
| 答案字母大小写不统一 | 统一转大写 `.upper()` |
| 文件编码 | 始终使用 `encoding='utf-8'` |

---

## 完整转换脚本

执行方式：

```bash
python /home/claude/md-to-json-quiz/scripts/convert.py \
  --input /mnt/user-data/uploads/<filename.md> \
  --output /mnt/user-data/outputs/questions.json
```

脚本位于 `scripts/convert.py`，见下方说明。

---

## 验证转换结果

转换完成后，需要验证：
1. 题目总数是否与 MD 文件中 `## 第 N 题` 出现次数一致
2. 单选题的 `answer` 字段是字符串（非数组）
3. 多选题的 `answer` 字段是数组
4. 每道题都有 `options`（至少 2 个选项）
5. 输出 summary：`单选 X 题，多选 Y 题，共 Z 题`

向用户展示验证结果和文件下载链接。
