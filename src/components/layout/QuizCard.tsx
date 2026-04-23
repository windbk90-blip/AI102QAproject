import React from 'react';
import { formatCountdown } from '../../hooks/useCountdown';
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
  remainingSeconds?: number | null;
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
  remainingSeconds,
}) => {
  const lowTime = typeof remainingSeconds === 'number' && remainingSeconds <= 60;
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
          {typeof remainingSeconds === 'number' && (
            <div className={`countdown${lowTime ? ' countdown-low' : ''}`}>
              剩余时间: {formatCountdown(remainingSeconds)}
            </div>
          )}
        </div>
      )}
      {renderQuestionComponent()}
      {mode === 'practice' && <ExplanationPanel question={question} isVisible={showExplanation} />}
    </div>
  );
};