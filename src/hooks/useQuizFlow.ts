import { useState } from 'react'
import questionsData from '../data/sortedQuestions.json'
import { Question, QuestionRecord, QuestionType, QuizMode, Screen } from '../types/quiz'
import { selectRandomQuestions } from '../utils/selectRandomQuestions'
import { useCountdown } from './useCountdown'
import { useQuizSession } from './useQuizSession'
import { useQuizStorage } from './useQuizStorage'
import { useScoreTracker } from './useScoreTracker'

const SIMULATION_COUNT = 30
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
  snapshotExists: boolean
  goToHistory: () => void
  closeHistory: () => void
  startMode: (mode: QuizMode, typeFilter?: QuestionType[]) => void
  resumeSession: () => void
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

  const { shuffledQuestions, currentIndex, skipQuestion, jumpToQuestion, restoreOrder, clearOverride } =
    useQuizSession(quizQuestions)
  const { records, submitAnswer: recordAnswer, restoreRecords, correctRate, correctCount, reset: resetScores } =
    useScoreTracker()
  const {
    saveSession,
    snapshotExists,
    saveSnapshot,
    loadSnapshot,
    clearSnapshot,
    perfMap,
    updateQuestionPerf,
  } = useQuizStorage()

  const currentQuestion = shuffledQuestions[currentIndex]
  const totalQuestions = shuffledQuestions.length

  const finishQuiz = () => {
    if (mode && records.length > 0) {
      saveSession({ mode, correctRate, totalQuestions, correctCount, records })
      updateQuestionPerf(records)
    }
    clearSnapshot()
    setScreen('result')
  }

  const startMode = (nextMode: QuizMode, typeFilter: QuestionType[] = []) => {
    const pool =
      typeFilter.length > 0
        ? ALL_QUESTIONS.filter((q) => typeFilter.includes(q.type))
        : ALL_QUESTIONS
    clearOverride()
    resetScores()
    setMode(nextMode)
    setQuizQuestions(
      nextMode === 'simulation' ? selectRandomQuestions(pool, SIMULATION_COUNT, perfMap) : pool,
    )
    setScreen('quiz')
  }

  const resumeSession = () => {
    const snapshot = loadSnapshot()
    if (!snapshot) return
    const ordered = snapshot.questionIds
      .map((id) => ALL_QUESTIONS.find((q) => q.id === id))
      .filter(Boolean) as Question[]
    restoreRecords(snapshot.records)
    setMode(snapshot.mode)
    restoreOrder(ordered, snapshot.currentIndex)
    setQuizQuestions(ordered)
    setScreen('quiz')
  }

  const advanceOrFinish = () => {
    if (currentIndex < totalQuestions - 1) {
      const nextIndex = currentIndex + 1
      if (mode) {
        saveSnapshot({
          mode,
          questionIds: shuffledQuestions.map((q) => q.id),
          currentIndex: nextIndex,
          records,
        })
      }
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
    clearOverride()
    setMode(null)
    setQuizQuestions([])
    resetScores()
  }

  const closeToMenu = () => {
    clearSnapshot()
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
    clearOverride()
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

  const timerRunning = screen === 'quiz' && mode === 'simulation'
  const countdown = useCountdown(SIMULATION_DURATION_SECONDS, timerRunning, finishQuiz)
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
    snapshotExists,
    goToHistory: () => setScreen('history'),
    closeHistory: () => setScreen('mode-select'),
    startMode,
    resumeSession,
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
