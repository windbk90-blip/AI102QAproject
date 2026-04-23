import React, { useState } from 'react';
import { QuestionRecord, QuizMode } from '../types/quiz';
import { QuestionText } from './questions/QuestionText';
import { exportWrongAnswersAsCsv } from '../utils/exportData';

interface ResultScreenProps {
  totalQuestions: number;
  correctCount: number;
  correctRate: number;
  records: QuestionRecord[];
  mode: QuizMode;
  onRestartAll: () => void;
  onRestartWrong: () => void;
  onViewHistory?: () => void;
  onReviewQuestion?: (questionId: string) => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  totalQuestions,
  correctCount,
  correctRate,
  records,
  mode,
  onRestartAll,
  onRestartWrong,
  onViewHistory,
  onReviewQuestion,
}) => {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  const typeStats = React.useMemo(() => {
    const stats: Record<string, { total: number; correct: number }> = {};
    records.forEach((record) => {
      const type = record.question.type;
      if (!stats[type]) stats[type] = { total: 0, correct: 0 };
      stats[type].total++;
      if (record.isCorrect) stats[type].correct++;
    });
    return stats;
  }, [records]);

  const wrongQuestions = records.filter((record) => !record.isCorrect);

  const toggleExpanded = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'single': return '单选';
      case 'multiple': return '多选';
      case 'sort': return '排序';
      case 'truefalse': return '判断';
      default: return type;
    }
  };

  return (
    <div className="result-screen">
      <h2>{mode === 'practice' ? '练习结束！' : '模拟考试完成！'}</h2>

      <div className="overall-score">
        <div className="score-display">{correctCount} / {totalQuestions}</div>
        <div className="score-percentage">{(correctRate * 100).toFixed(1)}%</div>
      </div>

      <div className="type-stats">
        <h3>题型统计</h3>
        {Object.entries(typeStats).map(([type, stat]) => (
          <div key={type} className="type-stat">
            {getTypeLabel(type)}: {stat.correct}/{stat.total}
          </div>
        ))}
      </div>

      {wrongQuestions.length > 0 && (
        <div className="wrong-questions">
          <div className="wrong-questions-header">
            <h3>错题回顾</h3>
            <button
              className="export-btn"
              onClick={() => exportWrongAnswersAsCsv(records)}
              title="导出错题为 CSV 文件"
            >
              导出 CSV
            </button>
          </div>
          {wrongQuestions.map((record, index) => (
            <div key={record.question.id} className="wrong-question-item">
              <button
                className="question-toggle"
                onClick={() => toggleExpanded(record.question.id)}
              >
                题目 {index + 1}: {record.question.content.substring(0, 50)}...
              </button>
              {expandedQuestions.has(record.question.id) && (
                <div className="question-details">
                  <QuestionText content={record.question.content} />
                  <p><strong>你的答案：</strong>{record.userAnswer.join(', ') || '跳过'}</p>
                  <p><strong>正确答案：</strong>{record.question.answer.join(', ')}</p>
                  <p><strong>解析：</strong>{record.question.explanation}</p>
                  {onReviewQuestion && (
                    <button
                      className="review-button"
                      onClick={() => onReviewQuestion(record.question.id)}
                    >
                      重新做这题
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="action-buttons">
        <button onClick={onRestartAll}>再来一次（全部）</button>
        <button onClick={onRestartWrong} disabled={wrongQuestions.length === 0}>
          只练错题
        </button>
        {onViewHistory && (
          <button onClick={onViewHistory} className="history-btn">
            查看历史
          </button>
        )}
      </div>
    </div>
  );
};
