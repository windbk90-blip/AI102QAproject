import { useState, useEffect } from 'react';
import questions from './data/sortedQuestions.json';
import { useQuizSession } from './hooks/useQuizSession';
import { useScoreTracker } from './hooks/useScoreTracker';
import { useQuizStorage } from './hooks/useQuizStorage';
import { QuizCard } from './components/layout/QuizCard';
import { ResultScreen } from './components/ResultScreen';
import { ModeSelection } from './components/ModeSelection';
import { HistoryScreen } from './components/HistoryScreen';
import { QuizMode, Screen } from './types/quiz';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('mode-select');
  const [quizMode, setQuizMode] = useState<QuizMode | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);

  const selectRandomQuestions = (questions: any[], count: number) => {
    const indices = new Set<number>();
    while (indices.size < count && indices.size < questions.length) {
      indices.add(Math.floor(Math.random() * questions.length));
    }
    return Array.from(indices).map(i => questions[i]);
  };

  const { shuffledQuestions, currentIndex, skipQuestion, jumpToQuestion } = useQuizSession(quizQuestions);
  const { records, submitAnswer, correctRate, correctCount, reset: resetScores } = useScoreTracker();
  const { saveSession } = useQuizStorage();

  // 自动保存会话到 localStorage
  useEffect(() => {
    if (currentScreen === 'result' && records.length > 0) {
      saveSession({
        mode: quizMode!,
        correctRate,
        totalQuestions: shuffledQuestions.length,
        correctCount,
        records,
      });
    }
  }, [currentScreen]);

  const handleModeSelect = (mode: QuizMode) => {
    setQuizMode(mode);
    setCurrentScreen('quiz');
    // 只在模式选择时一次性生成题目，之后不再变化
    if (mode === 'simulation') {
      setQuizQuestions(selectRandomQuestions(questions, 30));
    } else {
      setQuizQuestions(questions);
    }
  };

  const currentQuestion = shuffledQuestions[currentIndex];
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    if (currentQuestion) {
      submitAnswer(currentQuestion, userAnswer);
      setShowExplanation(true);
    }
  };

  const handleSkip = () => {
    if (currentQuestion) {
      submitAnswer(currentQuestion, []); // Skip with empty answer
      setUserAnswer([]);
      setShowExplanation(false);
      if (currentIndex < shuffledQuestions.length - 1) {
        skipQuestion();
      } else {
        setCurrentScreen('result');
      }
    }
  };

  if (currentScreen === 'mode-select') {
    return <ModeSelection onModeSelect={handleModeSelect} />;
  }

  if (currentScreen === 'history') {
    return <HistoryScreen onClose={() => setCurrentScreen('mode-select')} />;
  }

  if (currentScreen === 'quiz' && currentQuestion) {
    return (
      <div className="app">
        <QuizCard
          question={currentQuestion}
          userAnswer={userAnswer}
          onAnswerChange={setUserAnswer}
          mode={quizMode!}
          currentIndex={currentIndex}
          totalQuestions={shuffledQuestions.length}
          correctCount={correctCount}
          correctRate={correctRate}
          showExplanation={showExplanation}
        />
        <div className="controls">
          {!showExplanation && (
            <>
              <button onClick={handleSkip}>跳过</button>
              <button onClick={handleSubmit} disabled={userAnswer.length === 0}>提交</button>
            </>
          )}
          {showExplanation && (
            <button onClick={() => {
              setUserAnswer([]);
              setShowExplanation(false);
              if (currentIndex < shuffledQuestions.length - 1) {
                skipQuestion();
              } else {
                setCurrentScreen('result');
              }
            }}>下一题</button>
          )}
          <button 
            className="close-button"
            onClick={() => {
              setCurrentScreen('mode-select');
              setQuizMode(null);
              setQuizQuestions([]);
              setUserAnswer([]);
              setShowExplanation(false);
              resetScores();
            }}
          >
            关闭
          </button>
          {quizMode === 'practice' && (
            <button onClick={() => setCurrentScreen('result')}>结束练习</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <ResultScreen
      totalQuestions={shuffledQuestions.length}
      correctCount={correctCount}
      correctRate={correctRate}
      records={records}
      mode={quizMode!}
      onRestartAll={() => {
        setCurrentScreen('mode-select');
        setQuizMode(null);
        setQuizQuestions([]);
        setUserAnswer([]);
        setShowExplanation(false);
        resetScores();
      }}
      onRestartWrong={() => {
        const wrongQuestions = records.filter(r => !r.isCorrect).map(r => r.question);
        if (wrongQuestions.length > 0) {
          setQuizQuestions(wrongQuestions);
          setCurrentScreen('quiz');
          setUserAnswer([]);
          setShowExplanation(false);
          resetScores();
        } else {
          alert('没有错题！');
        }
      }}
      onViewHistory={() => setCurrentScreen('history')}
      onReviewQuestion={(questionId) => {
        // 查找问题在shuffledQuestions中的索引
        const questionIndex = shuffledQuestions.findIndex(q => q.id === questionId);
        if (questionIndex !== -1) {
          setCurrentScreen('quiz');
          setUserAnswer([]);
          setShowExplanation(false);
          jumpToQuestion(questionIndex);
        }
      }}
    />
  );
}

export default App;