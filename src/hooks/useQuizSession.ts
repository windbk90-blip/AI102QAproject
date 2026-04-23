import { useState, useMemo, useCallback, useEffect } from 'react'
import { Question } from '../types/quiz'

export interface UseQuizSessionReturn {
  shuffledQuestions: Question[]
  currentIndex: number
  skipQuestion: () => void
  jumpToQuestion: (index: number) => void
  restoreOrder: (ordered: Question[], startIndex: number) => void
  clearOverride: () => void
}

export function useQuizSession(questions: Question[]): UseQuizSessionReturn {
  const shuffledByMemo = useMemo(() => {
    const shuffled = [...questions]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [questions])

  // When set, overrides the shuffled order (used for session resume)
  const [override, setOverride] = useState<Question[] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const shuffledQuestions = override ?? shuffledByMemo

  // Reset index to 0 when a new shuffle is computed (new quiz), but not when override is active
  useEffect(() => {
    if (override) return
    setCurrentIndex(0)
  }, [shuffledByMemo]) // eslint-disable-line react-hooks/exhaustive-deps

  const restoreOrder = useCallback((ordered: Question[], startIndex: number) => {
    setOverride(ordered)
    setCurrentIndex(startIndex)
  }, [])

  const clearOverride = useCallback(() => {
    setOverride(null)
  }, [])

  const skipQuestion = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, shuffledQuestions.length - 1))
  }, [shuffledQuestions.length])

  const jumpToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < shuffledQuestions.length) {
        setCurrentIndex(index)
      }
    },
    [shuffledQuestions.length],
  )

  return { shuffledQuestions, currentIndex, skipQuestion, jumpToQuestion, restoreOrder, clearOverride }
}
