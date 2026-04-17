#!/usr/bin/env python3
"""
MD 题库 → JSON 转换器
支持单选、多选题目，适用于 AI-102 等认证考试 Markdown 题库格式。
"""

import re
import json
import argparse
import sys
from pathlib import Path


def extract_letters(text: str) -> list:
    """从文本中提取所有独立的字母选项（A-F）。"""
    return re.findall(r'\b([A-F])\b', text.upper())


def parse_answer(answer_raw: str) -> tuple:
    """
    解析答案字符串，返回 (answer, type)。
    支持：
      - "B"
      - "B（1-是，2-否，3-否）" → 括号前取 B
      - "A → B → C" → 排序多选
      - "C、D、F" → 多选
      - "A / D（取决于实现方式）" → 取第一个 A
      - "A 或 C（视题目要求）" → 取第一个 A
      - "E（File1 和 File3）" → E
      - "A → B（含 C）→ D → E" → [A,B,C,D,E]
    """
    # 先用括号内容作为补充：如果括号外只有一个字母，括号内可能有更多
    # 提取括号前的部分
    before_paren = re.split(r'（|[\(（]', answer_raw)[0].strip()

    # 箭头排序
    if '→' in answer_raw:
        letters = extract_letters(answer_raw)
        if len(letters) > 1:
            return letters, "multiple"
        elif len(letters) == 1:
            return letters[0], "single"

    # 斜杠/或 → 有争议，取第一个
    if '/' in before_paren or '或' in before_paren:
        letters = extract_letters(before_paren)
        if letters:
            return letters[0], "single"

    # 顿号/逗号分隔的多选
    letters_before = extract_letters(before_paren)
    if len(letters_before) > 1:
        return letters_before, "multiple"
    if len(letters_before) == 1:
        return letters_before[0], "single"

    # 从完整字符串中提取（含括号）
    letters_all = extract_letters(answer_raw)
    if len(letters_all) > 1:
        return letters_all, "multiple"
    if len(letters_all) == 1:
        return letters_all[0], "single"

    return None, None


def parse_content(block: str) -> str:
    options_pos = re.search(r'\*\*选项\*\*', block)
    if options_pos:
        text = block[:options_pos.start()].strip()
    else:
        special_option = re.search(r'\*\*选项\s*[A-F]', block)
        first_option = re.search(r'^[A-F][\.、]\s+', block, re.MULTILINE)
        candidates = [m.start() for m in [special_option, first_option] if m]
        pos = min(candidates) if candidates else None
        text = block[:pos].strip() if pos is not None else block.strip()

    text = re.sub(r'&nbsp;', '', text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def parse_options_from_block(block: str) -> list:
    options = []
    options_section_match = re.search(r'\*\*选项\*\*(.*?)(?=\n---)', block, re.DOTALL)
    if options_section_match:
        section = options_section_match.group(1)
        for match in re.finditer(r'^([A-F])[\.、]\s*(.+?)$', section, re.MULTILINE):
            options.append({"id": match.group(1).upper(), "text": match.group(2).strip()})
        if options:
            return options

    special_pattern = re.compile(r'\*\*选项\s*([A-F])[^*]*\*\*[：:]\s*(.+?)(?=\n\*\*选项|\n\n---|\Z)', re.DOTALL)
    for match in special_pattern.finditer(block):
        options.append({"id": match.group(1).upper(), "text": match.group(2).strip().replace('\n', ' ')})
    if options:
        return options

    before_answer = re.split(r'\n---', block)[0]
    for match in re.finditer(r'^([A-F])[\.、]\s*(.+?)$', before_answer, re.MULTILINE):
        options.append({"id": match.group(1).upper(), "text": match.group(2).strip()})
    return options


def parse_explanation(block: str) -> str:
    match = re.search(r'\*\*解析[：:]\*\*(.*?)(?=\n---\s*\n##\s*第|\Z)', block, re.DOTALL)
    if match:
        return match.group(1).strip()
    return ""


def parse_question_block(question_num: str, block: str) -> dict | None:
    content = parse_content(block)
    options = parse_options_from_block(block)

    # 匹配参考答案（宽松匹配，支持各种格式）
    answer_inline_match = re.search(
        r'\*\*参考答案[：:]\s*(.+?)\*\*',
        block
    )
    answer_multiline_match = re.search(
        r'\*\*参考答案[：:]\*\*\s*\n([\s\S]+?)(?=\n\*\*解析|\n---|\Z)',
        block
    )

    answer = None
    q_type = None

    if answer_inline_match:
        raw = answer_inline_match.group(1).strip()
        # 排除纯空内容
        if raw:
            answer, q_type = parse_answer(raw)
        if answer is None:
            print(f"  ⚠️  第 {question_num} 题：答案无法解析（{raw[:40]}），设为见解析", file=sys.stderr)
            answer, q_type = "见解析", "single"
    elif answer_multiline_match:
        multiline_content = answer_multiline_match.group(1)
        yes_pattern = re.compile(r'方案\s*([A-F])[：:].*(能|Yes)', re.IGNORECASE)
        yes_answers = [m.group(1).upper() for m in yes_pattern.finditer(multiline_content)]
        if yes_answers:
            answer = yes_answers[0] if len(yes_answers) == 1 else yes_answers
            q_type = "single" if isinstance(answer, str) else "multiple"
        else:
            answer, q_type = "见解析", "single"
    else:
        print(f"  ⚠️  第 {question_num} 题：未找到参考答案，跳过", file=sys.stderr)
        return None

    explanation = parse_explanation(block)

    return {
        "id": str(int(question_num)),
        "type": q_type,
        "content": content,
        "explanation": explanation,
        "options": options,
        "answer": answer
    }


def convert_md_to_json(input_path: str, output_path: str) -> dict:
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    parts = re.compile(r'##\s*第\s*(\d+)\s*题').split(content)
    questions = []
    errors = []
    skipped = []

    if len(parts) < 3:
        print("❌ 未找到任何题目（格式：## 第 N 题），请检查文件格式", file=sys.stderr)
        return {"questions": [], "stats": {}}

    for i in range(1, len(parts) - 1, 2):
        question_num = parts[i].strip()
        block = parts[i + 1] if i + 1 < len(parts) else ""
        try:
            q = parse_question_block(question_num, block)
            if q:
                questions.append(q)
            else:
                skipped.append(question_num)
        except Exception as e:
            errors.append(f"第 {question_num} 题：{e}")
            print(f"  ❌ 第 {question_num} 题解析失败：{e}", file=sys.stderr)

    questions.sort(key=lambda x: int(x["id"]))

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(questions, f, ensure_ascii=False, indent=2)

    single = sum(1 for q in questions if q["type"] == "single")
    multiple = sum(1 for q in questions if q["type"] == "multiple")

    stats = {
        "total": len(questions),
        "single": single,
        "multiple": multiple,
        "skipped": len(skipped),
        "skipped_ids": skipped,
        "errors": len(errors),
        "error_details": errors
    }
    return {"questions": questions, "stats": stats}


def main():
    parser = argparse.ArgumentParser(description="MD 题库 → JSON 转换器")
    parser.add_argument("--input", "-i", required=True)
    parser.add_argument("--output", "-o", required=True)
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ 输入文件不存在：{input_path}", file=sys.stderr)
        sys.exit(1)

    Path(args.output).parent.mkdir(parents=True, exist_ok=True)
    print(f"📂 读取文件：{input_path}")
    result = convert_md_to_json(str(input_path), args.output)
    stats = result["stats"]

    print(f"\n✅ 转换完成！")
    print(f"   单选题：{stats['single']} 题")
    print(f"   多选题：{stats['multiple']} 题")
    print(f"   共计：{stats['total']} 题")
    if stats.get("skipped"):
        print(f"   ⚠️  跳过：{stats['skipped']} 题 → 题号：{', '.join(stats['skipped_ids'])}")
    if stats.get("errors"):
        print(f"   ❌ 出错：{stats['errors']} 题")
    print(f"   输出文件：{args.output}")


if __name__ == "__main__":
    main()
