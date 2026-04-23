import { useState } from 'react'
import questionsData from '../data/sortedQuestions.json'
import { Question, QuestionRecord, QuestionType, QuizMode, Screen } from '../types/quiz'
import { selectRandomQuestions } from '../utils/selectRandomQuestions'
import { useCountdown } from './useCountdown'
import { useQuizSession } from './useQuizSession'
import { useQuizStorage } from './useQuizStorage'
import { useScoreTracker } from './useScoreTracker'

const SIMULATION_COUNT = 30
// Real AI-102 is ~120min for 60q; keep proportional at 60min for 30q.
const SIMULATION_DURATION_SECONDS = 60 * 60
const ALL_QUESTIONS = questionsData as Question[]

export interface UseQuizFlowReturn {
  screen: Screen
  mode: QuizMode | null
  currentQuestion: Question | undefined
  currentIndex: number
  totalQuestions: number
  records: QuestionRecord[]
  correctCount: number
  correctRate: number
  remainingSeconds: number | null
  goToHistory: () => void
  closeHistory: () => void
  startMode: (mode: QuizMode, typeFilter?: QuestionType[]) => void
  submitAnswer: (answer: string[]) => void
  skipCurrent: () => void
  advanceOrFinish: () => void
  finishQuiz: () => void
  closeToMenu: () => void
  restartAll: () => void
  restartWrong: () => void
  reviewQuestion: (questionId: string) => void
}

export function useQuizFlow(): UseQuizFlowReturn {
  const [screen, setScreen] = useState<Screen>('mode-select')
  const [mode, setMode] = useState<QuizMode | null>(null)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])

  const { shuffledQuestions, currentIndex, skipQuestion, jumpToQuestion } =
    useQuizSession(quizQuestions)
  const { records, submitAnswer: recordAnswer, correctRate, correctCount, reset: resetScores } =
    useScoreTracker()
  const { saveSession } = useQuizStorage()

  const currentQuestion = shuffledQuestions[currentIndex]
  const totalQuestions = shuffledQuestions.length

  // Save explicitly at the transition moment instead of via a useEffect whose
  // dep array would either be stale-closure-prone or over-fire during 'result'.
  const finishQuiz = () => {
    if (mode && records.length > 0) {
      saveSession({
        mode,
        correctRate,
        totalQuestions,
        correctCount,
        records,
      })
    }
    setScreen('result')
  }

  const startMode = (nextMode: QuizMode, typeFilter: QuestionType[] = []) => {
    const pool =
      typeFilter.length > 0
        ? ALL_QUESTIONS.filter((q) => typeFilter.includes(q.type))
        : ALL_QUESTIONS
    setMode(nextMode)
    setQuizQuestions(
      nextMode === 'simulation' ? selectRandomQuestions(pool, SIMULATION_COUNT) : pool,
    )
    setScreen('quiz')
  }

  const advanceOrFinish = () => {
    if (currentIndex < totalQuestions - 1) {
      skipQuestion()
    } else {
      finishQuiz()
    }
  }

  const submitAnswer = (answer: string[]) => {
    if (currentQuestion) recordAnswer(currentQuestion, answer)
  }

  const skipCurrent = () => {
    if (!currentQuestion) return
    recordAnswer(currentQuestion, [])
    advanceOrFinish()
  }

  const clearQuizState = () => {
    setMode(null)
    setQuizQuestions([])
    resetScores()
  }

  const closeToMenu = () => {
    clearQuizState()
    setScreen('mode-select')
  }

  const restartAll = () => {
    clearQuizState()
    setScreen('mode-select')
  }

  const restartWrong = () => {
    const wrong = records.filter((r) => !r.isCorrect).map((r) => r.question)
    if (wrong.length === 0) {
      alert('没有错题！')
      return
    }
    resetScores()
    setQuizQuestions(wrong)
    setScreen('quiz')
  }

  const reviewQuestion = (questionId: string) => {
    const idx = shuffledQuestions.findIndex((q) => q.id === questionId)
    if (idx === -1) return
    jumpToQuestion(idx)
    setScreen('quiz')
  }

  // Simulation mode only: count down from the full duration. Resets whenever
  // the question set changes (new session, restart-wrong, etc.).
  const timerRunning = screen === 'quiz' && mode === 'simulation'
  const countdown = useCountdown(
    SIMULATION_DURATION_SECONDS,
    timerRunning,
    finishQuiz,
  )
  const remainingSeconds = mode === 'simulation' ? countdown : null

  return {
    screen,
    mode,
    currentQuestion,
    currentIndex,
    totalQuestions,
    records,
    correctCount,
    correctRate,
    remainingSeconds,
    goToHistory: () => setScreen('history'),
    closeHistory: () => setScreen('mode-select'),
    startMode,
    submitAnswer,
    skipCurrent,
    advanceOrFinish,
    finishQuiz,
    closeToMenu,
    restartAll,
    restartWrong,
    reviewQuestion,
  }
}
