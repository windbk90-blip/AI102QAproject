import React from 'react';
import { MultipleQuestion } from '../../types/quiz';
import { QuestionText } from './QuestionText';

interface QuestionComponentProps {
  question: MultipleQuestion;
  userAnswer: string[];
  onAnswerChange: (answer: string[]) => void;
  showExplanation: boolean;
}

export const MultipleQuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  userAnswer,
  onAnswerChange,
  showExplanation,
}) => {
  const handleOptionClick = (optionId: string) => {
    const newAnswer = userAnswer.includes(optionId)
      ? userAnswer.filter(id => id !== optionId)
      : [...userAnswer, optionId];
    onAnswerChange(newAnswer);
  };

  const correctOptions = new Set(question.answer);

  return (
    <div className="question-container">
      <QuestionText content={question.content} />
      <div className="options">
        {question.options.map((option) => {
          const isSelected = userAnswer.includes(option.id);
          const isCorrect = correctOptions.has(option.id);
          const isWrong = showExplanation && isSelected && !isCorrect;
          return (
            <button
              key={option.id}
              className={`option ${isSelected ? 'selected' : ''} ${showExplanation && isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
              onClick={() => handleOptionClick(option.id)}
            >
              <span className="option-id">{option.id}</span>
              <span className="option-text">{option.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};