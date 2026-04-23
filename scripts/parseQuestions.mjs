/**
 * MD 题库 → JSON 转换器 (Node.js 版本)
 * 支持单选、多选、排序、判断题，适用于 AI-102 等认证考试 Markdown 题库格式。
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * 从文本中提取所有独立的字母选项（A-F）
 */
function extractLetters(text) {
  const matches = text.match(/\b([A-F])\b/gi);
  return matches ? matches.map(m => m.toUpperCase()) : [];
}

/**
 * 解析答案字符串，返回 [answer, type]
 * 支持：
 *   - "B"
 *   - "B（1-是，2-否）" → 括号前取 B
 *   - "A → B → C" → 排序多选
 *   - "C、D、F" → 多选
 *   - "A / D" → 取第一个 A
 */
export function parseAnswer(answerRaw) {
  if (!answerRaw || typeof answerRaw !== 'string') {
    return [null, null];
  }

  const beforeParen = answerRaw.split(/（|[\(]/)[0].trim();

  // 箭头排序
  if (answerRaw.includes('→')) {
    const letters = extractLetters(answerRaw);
    if (letters.length > 1) {
      return [letters, 'multiple'];
    } else if (letters.length === 1) {
      return [letters[0], 'single'];
    }
  }

  // 斜杠或 "或" 有争议，取第一个
  if (beforeParen.includes('/') || beforeParen.includes('或')) {
    const letters = extractLetters(beforeParen);
    if (letters.length > 0) {
      return [letters[0], 'single'];
    }
  }

  // 顿号/逗号分隔的多选
  const lettersBefore = extractLetters(beforeParen);
  if (lettersBefore.length > 1) {
    return [lettersBefore, 'multiple'];
  }
  if (lettersBefore.length === 1) {
    return [lettersBefore[0], 'single'];
  }

  // 从完整字符串中提取（含括号）
  const lettersAll = extractLetters(answerRaw);
  if (lettersAll.length > 1) {
    return [lettersAll, 'multiple'];
  }
  if (lettersAll.length === 1) {
    return [lettersAll[0], 'single'];
  }

  return [null, null];
}

/**
 * 提取题目内容（在选项之前的部分）
 */
function parseContent(block) {
  let text = block;

  // 查找 **选项** 标记
  const optionsMatch = block.search(/\*\*选项\*\*/);
  if (optionsMatch !== -1) {
    text = block.substring(0, optionsMatch).trim();
  } else {
    // 查找特殊格式的选项或首个字母选项
    const specialOptionMatch = block.match(/\*\*选项\s*[A-F]/);
    const firstOptionMatch = block.match(/^[A-F][\.、]\s+/m);
    
    const candidates = [];
    if (specialOptionMatch) candidates.push(block.indexOf(specialOptionMatch[0]));
    if (firstOptionMatch) candidates.push(block.indexOf(firstOptionMatch[0]));

    if (candidates.length > 0) {
      const pos = Math.min(...candidates);
      text = block.substring(0, pos).trim();
    }
  }

  // 清理文本
  text = text.replace(/&nbsp;/g, '');
  text = text.replace(/\n{3,}/g, '\n\n');
  return text.trim();
}

/**
 * 解析选项
 */
function parseOptions(block) {
  const options = [];

  // 方式1：**选项** 标记之后的内容
  const optionsSectionMatch = block.match(/\*\*选项\*\*([\s\S]*?)(?=\n---)/);
  if (optionsSectionMatch) {
    const section = optionsSectionMatch[1];
    const optionMatches = section.matchAll(/^([A-F])[\.、]\s*(.+?)$/gm);
    for (const match of optionMatches) {
      options.push({
        id: match[1].toUpperCase(),
        text: match[2].trim()
      });
    }
    if (options.length > 0) return options;
  }

  // 方式2：**选项 A**: 格式
  const specialPattern = /\*\*选项\s*([A-F])[^*]*\*\*[：:]\s*(.+?)(?=\n\*\*选项|\n\n---|\Z)/gs;
  let specialMatch;
  while ((specialMatch = specialPattern.exec(block)) !== null) {
    options.push({
      id: specialMatch[1].toUpperCase(),
      text: specialMatch[2].trim().replace(/\n/g, ' ')
    });
  }
  if (options.length > 0) return options;

  // 方式3：在答案之前的 A. B. C. D. 格式
  const beforeAnswer = block.split(/\n---/)[0];
  const standardMatches = beforeAnswer.matchAll(/^([A-F])[\.、]\s*(.+?)$/gm);
  for (const match of standardMatches) {
    options.push({
      id: match[1].toUpperCase(),
      text: match[2].trim()
    });
  }

  return options;
}

/**
 * 解析解析部分
 */
function parseExplanation(block) {
  const match = block.match(/\*\*解析[：:]\*\*([\s\S]*?)(?=\n---\s*\n##\s*第|\Z)/);
  if (match) {
    return match[1].trim();
  }
  return '';
}

/**
 * 解析单个题目块
 */
function parseQuestionBlock(questionNum, block) {
  const content = parseContent(block);
  const options = parseOptions(block);

  // 匹配参考答案
  let answer = null;
  let qType = null;

  // 内联答案格式
  const answerInlineMatch = block.match(/\*\*参考答案[：:]\s*(.+?)\*\*/);
  if (answerInlineMatch) {
    const raw = answerInlineMatch[1].trim();
    if (raw) {
      [answer, qType] = parseAnswer(raw);
    }
    if (answer === null) {
      console.warn(
        `  ⚠️  第 ${questionNum} 题：答案无法解析（${raw.substring(0, 40)}），设为见解析`
      );
      answer = '见解析';
      qType = 'single';
    }
  } else {
    // 多行答案格式
    const answerMultilineMatch = block.match(
      /\*\*参考答案[：:]\*\*\s*\n([\s\S]+?)(?=\n\*\*解析|\n---|\Z)/
    );
    if (answerMultilineMatch) {
      const multilineContent = answerMultilineMatch[1];
      const yesPattern = /方案\s*([A-F])[：:].*(能|Yes)/gi;
      const yesAnswers = [];
      let yesMatch;
      while ((yesMatch = yesPattern.exec(multilineContent)) !== null) {
        yesAnswers.push(yesMatch[1].toUpperCase());
      }

      if (yesAnswers.length > 0) {
        answer = yesAnswers.length === 1 ? yesAnswers[0] : yesAnswers;
        qType = typeof answer === 'string' ? 'single' : 'multiple';
      } else {
        answer = '见解析';
        qType = 'single';
      }
    } else {
      console.warn(`  ⚠️  第 ${questionNum} 题：未找到参考答案，跳过`);
      return null;
    }
  }

  const explanation = parseExplanation(block);

  return {
    id: String(parseInt(questionNum)),
    type: qType,
    content: content,
    explanation: explanation,
    options: options,
    answer: answer
  };
}

/**
 * 从 Markdown 转换到 JSON
 */
function convertMdToJson(inputPath, outputPath) {
  const content = fs.readFileSync(inputPath, 'utf-8');

  // 按 ## 第 N 题 分割
  const parts = content.split(/##\s*第\s*(\d+)\s*题/);
  const questions = [];
  const errors = [];
  const skipped = [];

  if (parts.length < 3) {
    console.error(
      '❌ 未找到任何题目（格式：## 第 N 题），请检查文件格式'
    );
    return { questions: [], stats: {} };
  }

  for (let i = 1; i < parts.length - 1; i += 2) {
    const questionNum = parts[i].trim();
    const block = parts[i + 1] || '';

    try {
      const q = parseQuestionBlock(questionNum, block);
      if (q) {
        questions.push(q);
      } else {
        skipped.push(questionNum);
      }
    } catch (e) {
      errors.push(`第 ${questionNum} 题：${e.message}`);
      console.error(`  ❌ 第 ${questionNum} 题解析失败：${e.message}`);
    }
  }

  // 按 ID 排序
  questions.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  // 输出 JSON
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf-8');

  // 统计信息
  const single = questions.filter(q => q.type === 'single').length;
  const multiple = questions.filter(q => q.type === 'multiple').length;
  const sort = questions.filter(q => q.type === 'sort').length;
  const truefalse = questions.filter(q => q.type === 'truefalse').length;

  const stats = {
    total: questions.length,
    single,
    multiple,
    sort,
    truefalse,
    skipped: skipped.length,
    skipped_ids: skipped,
    errors: errors.length,
    error_details: errors
  };

  return { questions, stats };
}

/**
 * 主函数
 */
function main() {
  // 默认路径
  const projectRoot = path.resolve(__dirname, '..');
  const inputPath = path.resolve(projectRoot, 'src/data/questions.md');
  const outputPath = path.resolve(projectRoot, 'src/data/sortedQuestions.json');

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ 输入文件不存在：${inputPath}`);
    process.exit(1);
  }

  console.log(`📂 读取文件：${inputPath}`);
  const result = convertMdToJson(inputPath, outputPath);
  const stats = result.stats;

  console.log('\n✅ 转换完成！');
  console.log(`   单选题：${stats.single} 题`);
  console.log(`   多选题：${stats.multiple} 题`);
  console.log(`   排序题：${stats.sort} 题`);
  console.log(`   判断题：${stats.truefalse} 题`);
  console.log(`   共计：${stats.total} 题`);
  if (stats.skipped > 0) {
    console.log(
      `   ⚠️  跳过：${stats.skipped} 题 → 题号：${stats.skipped_ids.join(', ')}`
    );
  }
  if (stats.errors > 0) {
    console.log(`   ❌ 出错：${stats.errors} 题`);
  }
  console.log(`   输出文件：${outputPath}`);
}

// Only run main() when executed directly via CLI, not when imported for tests.
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
