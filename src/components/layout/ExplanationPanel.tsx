import React from 'react';
import { Question } from '../../types/quiz';

interface ExplanationPanelProps {
  question: Question;
  isVisible: boolean;
}

export const ExplanationPanel: React.FC<ExplanationPanelProps> = ({
  question,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="explanation-panel">
      <h4>解释：</h4>
      <p>{question.explanation}</p>
      {question.tags && question.tags.length > 0 && (
        <div className="tags">
          <span>标签：</span>
          {question.tags.map((tag: string) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};