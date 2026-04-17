import React from 'react';
import { Question, QuizMode } from '../../types/quiz';
import { ExplanationPanel } from './ExplanationPanel';
import {
  SingleChoice,
  MultipleChoice,
  SortQuestionComponent,
  TrueFalse,
} from '../questions';

interface QuizCardProps {
  question: Question;
  userAnswer: string[];
  onAnswerChange: (answer: string[]) => void;
  mode: QuizMode;
  currentIndex: number;
  totalQuestions: number;
  correctCount: number;
  correctRate: number;
  showExplanation: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  userAnswer,
  onAnswerChange,
  mode,
  currentIndex,
  totalQuestions,
  correctCount,
  correctRate,
  showExplanation,
}) => {
  const renderQuestionComponent = () => {
    switch (question.type) {
      case 'single':
        return (
          <SingleChoice
            question={question}
            userAnswer={userAnswer}
            onAnswerChange={onAnswerChange}
            showExplanation={showExplanation}
          />
        );
      case 'multiple':
        return (
          <MultipleChoice
            question={question}
            userAnswer={userAnswer}
            onAnswerChange={onAnswerChange}
            showExplanation={showExplanation}
          />
        );
      case 'sort':
        return (
          <SortQuestionComponent
            question={question}
            userAnswer={userAnswer}
            onAnswerChange={onAnswerChange}
            showExplanation={showExplanation}
          />
        );
      case 'truefalse':
        return (
          <TrueFalse
            question={question}
            userAnswer={userAnswer}
            onAnswerChange={onAnswerChange}
            showExplanation={showExplanation}
          />
        );
      default:
        return <div>Unsupported question type</div>;
    }
  };

  return (
    <div className="quiz-card">
      {mode === 'practice' && (
        <div className="progress-display">
          <div>Progress: Question {currentIndex + 1} / {totalQuestions}</div>
          <div>Correct: {correctCount} ({(correctRate * 100).toFixed(1)}%)</div>
        </div>
      )}
      {mode === 'simulation' && (
        <div className="progress-display">
          <div>Progress: Question {currentIndex + 1} / {totalQuestions}</div>
        </div>
      )}
      {renderQuestionComponent()}
      {mode === 'practice' && <ExplanationPanel question={question} isVisible={showExplanation} />}
    </div>
  );
};