import React from 'react';
import { TrueFalseQuestion } from '../../types/quiz';
import { QuestionText } from './QuestionText';

interface QuestionComponentProps {
  question: TrueFalseQuestion;
  userAnswer: string[];
  onAnswerChange: (answer: string[]) => void;
  showExplanation: boolean;
}

export const TrueFalseQuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  userAnswer,
  onAnswerChange,
  showExplanation,
}) => {
  const handleOptionClick = (optionId: string) => {
    onAnswerChange([optionId]);
  };

  const correctAnswer = question.answer[0];
  const selectedTrue = userAnswer.includes('true');
  const selectedFalse = userAnswer.includes('false');
  const trueIsCorrect = correctAnswer === 'true';
  const falseIsCorrect = correctAnswer === 'false';

  return (
    <div className="question-container">
      <QuestionText content={question.content} />
      <div className="options">
        <button
          className={`option ${selectedTrue ? 'selected' : ''} ${showExplanation && trueIsCorrect ? 'correct' : ''} ${showExplanation && selectedTrue && !trueIsCorrect ? 'wrong' : ''}`}
          onClick={() => handleOptionClick('true')}
        >
          <span className="option-id">A</span>
          <span className="option-text">True</span>
        </button>
        <button
          className={`option ${selectedFalse ? 'selected' : ''} ${showExplanation && falseIsCorrect ? 'correct' : ''} ${showExplanation && selectedFalse && !falseIsCorrect ? 'wrong' : ''}`}
          onClick={() => handleOptionClick('false')}
        >
          <span className="option-id">B</span>
          <span className="option-text">False</span>
        </button>
      </div>
    </div>
  );
};