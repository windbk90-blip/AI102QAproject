import { useState, useCallback } from 'react'
import { Question, QuestionRecord } from '../types/quiz'
import { isAnswerCorrect } from '../utils/isAnswerCorrect'

export interface UseScoreTrackerReturn {
  records: QuestionRecord[]
  submitAnswer: (question: Question, userAnswer: string[]) => void
  correctRate: number
  totalAnswered: number
  correctCount: number
  reset: () => void
}

export function useScoreTracker(): UseScoreTrackerReturn {
  const [records, setRecords] = useState<QuestionRecord[]>([])

  const submitAnswer = useCallback((question: Question, userAnswer: string[]) => {
    const isCorrect = isAnswerCorrect(question, userAnswer)
    const record: QuestionRecord = {
      question,
      userAnswer,
      isCorrect,
    }
    setRecords(prev => [...prev, record])
  }, [])

  const reset = useCallback(() => {
    setRecords([])
  }, [])

  const totalAnswered = records.length
  const correctCount = records.filter(record => record.isCorrect).length
  const correctRate = totalAnswered > 0 ? correctCount / totalAnswered : 0

  return {
    records,
    submitAnswer,
    correctRate,
    totalAnswered,
    correctCount,
    reset,
  }
}