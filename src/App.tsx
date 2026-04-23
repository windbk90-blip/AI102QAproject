import { HistoryScreen } from './components/HistoryScreen'
import { ModeSelection } from './components/ModeSelection'
import { ResultScreen } from './components/ResultScreen'
import { QuizCard } from './components/layout/QuizCard'
import { useCurrentAnswer } from './hooks/useCurrentAnswer'
import { useQuizFlow } from './hooks/useQuizFlow'

function App() {
  const flow = useQuizFlow()
  const answer = useCurrentAnswer(flow.currentQuestion?.id)

  if (flow.screen === 'mode-select') {
    return <ModeSelection onModeSelect={flow.startMode} />
  }

  if (flow.screen === 'history') {
    return <HistoryScreen onClose={flow.closeHistory} />
  }

  if (flow.screen === 'quiz' && flow.currentQuestion) {
    const handleSubmit = () => {
      flow.submitAnswer(answer.userAnswer)
      answer.revealExplanation()
    }

    const handleClose = () => {
      if (window.confirm('确定要关闭当前练习吗？进度将会丢失。')) {
        flow.closeToMenu()
      }
    }

    return (
      <div className="app">
        <QuizCard
          question={flow.currentQuestion}
          userAnswer={answer.userAnswer}
          onAnswerChange={answer.setUserAnswer}
          mode={flow.mode!}
          currentIndex={flow.currentIndex}
          totalQuestions={flow.totalQuestions}
          correctCount={flow.correctCount}
          correctRate={flow.correctRate}
          showExplanation={answer.showExplanation}
          remainingSeconds={flow.remainingSeconds}
        />
        <div className="controls">
          {!answer.showExplanation && (
            <>
              <button onClick={flow.skipCurrent}>跳过</button>
              <button onClick={handleSubmit} disabled={answer.userAnswer.length === 0}>
                提交
              </button>
            </>
          )}
          {answer.showExplanation && (
            <button onClick={flow.advanceOrFinish}>下一题</button>
          )}
          <button className="close-button" onClick={handleClose}>
            关闭
          </button>
          {flow.mode === 'practice' && (
            <button onClick={flow.finishQuiz}>结束练习</button>
          )}
        </div>
      </div>
    )
  }

  return (
    <ResultScreen
      totalQuestions={flow.totalQuestions}
      correctCount={flow.correctCount}
      correctRate={flow.correctRate}
      records={flow.records}
      mode={flow.mode!}
      onRestartAll={flow.restartAll}
      onRestartWrong={flow.restartWrong}
      onViewHistory={flow.goToHistory}
      onReviewQuestion={flow.reviewQuestion}
    />
  )
}

export default App
