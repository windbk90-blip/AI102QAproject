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
  // 打乱顺序的 items
  const shuffledItems = React.useMemo(() => {
    const shuffled = [...question.items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [question.items]);

  // 可用的选项：shuffledItems 中不在 userAnswer 中的
  const availableItems = shuffledItems.filter(item => !userAnswer.includes(item));

  const handleAddToQueue = (item: string) => {
    onAnswerChange([...userAnswer, item]);
  };

  const handleRemoveFromQueue = (index: number) => {
    const newAnswer = [...userAnswer];
    newAnswer.splice(index, 1);
    onAnswerChange(newAnswer);
  };

  return (
    <div className="question-container">
      <QuestionText content={question.content} />
      <p className="sort-instruction">请点击选项按正确顺序排列：</p>
      <div className="sort-container">
        <div className="available-options">
          <h4>可用选项：</h4>
          <div className="options">
            {availableItems.map((item) => (
              <button
                key={item}
                className="option"
                onClick={() => handleAddToQueue(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="sorted-queue">
          <h4>已排序队列：</h4>
          <div className="queue">
            {userAnswer.map((item, index) => {
              const isCorrect = showExplanation && question.answer[index] === item;
              const isWrong = showExplanation && !isCorrect;
              return (
                <div key={index} className={`queue-item ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}>
                  <span>{index + 1}. {item}</span>
                  <button onClick={() => handleRemoveFromQueue(index)}>移除</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};