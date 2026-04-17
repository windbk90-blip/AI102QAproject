import { useState, useCallback } from 'react'
import { Question, QuestionRecord } from '../types/quiz'

export interface UseScoreTrackerReturn {
  records: QuestionRecord[]
  submitAnswer: (question: Question, userAnswer: string[]) => void
  correctRate: number
  totalAnswered: number
  correctCount: number
  reset: () => void
}

function isAnswerCorrect(question: Question, userAnswer: string[]): boolean {
  const correctAnswer = question.answer

  switch (question.type) {
    case 'single':
    case 'multiple':
    case 'truefalse':
      // 对于这些类型，顺序不重要，比较集合
      if (userAnswer.length !== correctAnswer.length) return false
      const userSet = new Set(userAnswer)
      const correctSet = new Set(correctAnswer)
      return userSet.size === correctSet.size && [...userSet].every(id => correctSet.has(id))

    case 'sort':
      // 排序题顺序重要，完全匹配
      return userAnswer.length === correctAnswer.length &&
             userAnswer.every((item, index) => item === correctAnswer[index])

    default:
      return false
  }
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