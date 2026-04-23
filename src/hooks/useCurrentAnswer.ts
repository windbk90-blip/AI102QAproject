import { useEffect, useState } from 'react'

export interface UseCurrentAnswerReturn {
  userAnswer: string[]
  setUserAnswer: (answer: string[]) => void
  showExplanation: boolean
  revealExplanation: () => void
}

// Resets answer + explanation whenever the question identity changes,
// so stale state from a previous question never leaks into the next.
export function useCurrentAnswer(questionId: string | undefined): UseCurrentAnswerReturn {
  const [userAnswer, setUserAnswer] = useState<string[]>([])
  const [showExplanation, setShowExplanation] = useState(false)

  useEffect(() => {
    setUserAnswer([])
    setShowExplanation(false)
  }, [questionId])

  return {
    userAnswer,
    setUserAnswer,
    showExplanation,
    revealExplanation: () => setShowExplanation(true),
  }
}
