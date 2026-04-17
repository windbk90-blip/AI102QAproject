import React from 'react';

interface QuestionTextProps {
  content: string;
}

const renderInlineMarkdown = (text: string): React.ReactNode[] => {
  const regex = /(\*\*(.+?)\*\*|`([^`]+)`)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      nodes.push(
        <strong key={`strong-${index}`}>{match[2]}</strong>
      );
    } else if (match[3]) {
      nodes.push(
        <code key={`code-${index}`}>{match[3]}</code>
      );
    }

    lastIndex = match.index + match[0].length;
    index += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
};

const renderParagraphs = (text: string) => {
  return text
    .split(/\n{2,}/)
    .filter((paragraph) => paragraph.trim().length > 0)
    .map((paragraph, index) => (
      <p key={index}>{renderInlineMarkdown(paragraph)}</p>
    ));
};

const parseContentSections = (content: string) => {
  const normalized = content.trim();
  const marker = /\*\*题目\*\*/;
  const hasTitleMarker = marker.test(normalized);

  if (!hasTitleMarker) {
    return {
      background: '',
      question: normalized,
      hasBackground: false,
    };
  }

  const [backgroundPart, questionPart] = normalized.split(marker).map((part) => part.trim());
  const background = backgroundPart.replace(/\*\*背景\*\*/g, '').trim();
  const question = questionPart.trim();

  return {
    background,
    question,
    hasBackground: background.length > 0,
  };
};

export const QuestionText: React.FC<QuestionTextProps> = ({ content }) => {
  const { background, question, hasBackground } = parseContentSections(content);

  if (!hasBackground) {
    return (
      <div className="question-text question-main">
        <div className="section-content">{renderParagraphs(question)}</div>
      </div>
    );
  }

  return (
    <div className="question-text">
      <div className="question-section question-background">
        <div className="section-label">背景</div>
        <div className="section-content">{renderParagraphs(background)}</div>
      </div>
      <div className="question-section question-main">
        <div className="section-label">题目</div>
        <div className="section-content">{renderParagraphs(question)}</div>
      </div>
    </div>
  );
};
