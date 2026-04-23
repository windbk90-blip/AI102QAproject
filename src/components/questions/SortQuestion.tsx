import React from 'react';
import { SortQuestion } from '../../types/quiz';
import { QuestionText } from './QuestionText';

interface QuestionComponentProps {
  question: SortQuestion;
  userAnswer: string[];
  onAnswerChange: (answer: string[]) => void;
  showExplanation: boolean;
}

export const SortQuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  userAnswer,
  onAnswerChange,
  showExplanation,
}) => {
  const shuffledItems = React.useMemo(() => {
    const shuffled = [...question.items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [question.items]);

  const availableItems = shuffledItems.filter((item) => !userAnswer.includes(item));

  const handleAddToQueue = (item: string) => {
    onAnswerChange([...userAnswer, item]);
  };

  const handleRemoveFromQueue = (index: number) => {
    const newAnswer = [...userAnswer];
    newAnswer.splice(index, 1);
    onAnswerChange(newAnswer);
  };

  const handleQueueKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (showExplanation) return;
    if (e.key === 'ArrowUp' && index > 0) {
      e.preventDefault();
      const next = [...userAnswer];
      [next[index], next[index - 1]] = [next[index - 1], next[index]];
      onAnswerChange(next);
    } else if (e.key === 'ArrowDown' && index < userAnswer.length - 1) {
      e.preventDefault();
      const next = [...userAnswer];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      onAnswerChange(next);
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      handleRemoveFromQueue(index);
    }
  };

  return (
    <div className="question-container">
      <QuestionText content={question.content} />
      <p className="sort-instruction">请点击选项按正确顺序排列（队列中可用 ↑↓ 调整顺序，Delete 移除）：</p>
      <div className="sort-container">
        <div className="available-options">
          <h4>可用选项：</h4>
          <div className="options">
            {availableItems.map((item) => (
              <button
                key={item}
                className="option"
                onClick={() => handleAddToQueue(item)}
                aria-label={`添加到队列：${item}`}
                disabled={showExplanation}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="sorted-queue">
          <h4>已排序队列：</h4>
          <div className="queue" role="list" aria-label="排序队列">
            {userAnswer.map((item, index) => {
              const isCorrect = showExplanation && question.answer[index] === item;
              const isWrong = showExplanation && !isCorrect;
              return (
                <div
                  key={index}
                  className={`queue-item ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                  role="listitem"
                  tabIndex={showExplanation ? -1 : 0}
                  aria-label={`第${index + 1}步：${item}${isCorrect ? '（正确）' : isWrong ? '（错误）' : ''}，按 ↑↓ 调整顺序，Delete 移除`}
                  onKeyDown={(e) => handleQueueKeyDown(e, index)}
                >
                  <span>{index + 1}. {item}</span>
                  {!showExplanation && (
                    <button
                      onClick={() => handleRemoveFromQueue(index)}
                      aria-label={`移除：${item}`}
                    >
                      移除
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
