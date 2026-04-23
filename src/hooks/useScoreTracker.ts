import { useState, useCallback } from 'react'
import { Question, QuestionRecord } from '../types/quiz'
import { isAnswerCorrect } from '../utils/isAnswerCorrect'

export interface UseScoreTrackerReturn {
  records: QuestionRecord[]
  submitAnswer: (question: Question, userAnswer: string[]) => void
  restoreRecords: (records: QuestionRecord[]) => void
  correctRate: number
  totalAnswered: number
  correctCount: number
  reset: () => void
}

export function useScoreTracker(): UseScoreTrackerReturn {
  const [records, setRecords] = useState<QuestionRecord[]>([])

  const submitAnswer = useCallback((question: Question, userAnswer: string[]) => {
    const isCorrect = isAnswerCorrect(question, userAnswer)
    const record: QuestionRecord = { question, userAnswer, isCorrect }
    setRecords((prev) => [...prev, record])
  }, [])

  const restoreRecords = useCallback((restored: QuestionRecord[]) => {
    setRecords(restored)
  }, [])

  const reset = useCallback(() => {
    setRecords([])
  }, [])

  const totalAnswered = records.length
  const correctCount = records.filter((r) => r.isCorrect).length
  const correctRate = totalAnswered > 0 ? correctCount / totalAnswered : 0

  return { records, submitAnswer, restoreRecords, correctRate, totalAnswered, correctCount, reset }
}
