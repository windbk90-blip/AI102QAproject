import { useEffect } from 'react'
import { Question, SingleQuestion, MultipleQuestion } from '../types/quiz'

interface UseKeyboardShortcutsProps {
  enabled: boolean
  question: Question | undefined
  userAnswer: string[]
  showExplanation: boolean
  onAnswerChange: (answer: string[]) => void
  onSubmit: () => void
  onSkip: () => void
  onAdvance: () => void
}

export function useKeyboardShortcuts({
  enabled,
  question,
  userAnswer,
  showExplanation,
  onAnswerChange,
  onSubmit,
  onSkip,
  onAdvance,
}: UseKeyboardShortcutsProps) {
  useEffect(() => {
    if (!enabled || !question) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      // Don't intercept text inputs or selects
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      const onButton = tag === 'BUTTON'

      if (showExplanation) {
        if (!onButton && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onAdvance()
        }
        return
      }

      if (e.key === 'Enter' && !onButton && userAnswer.length > 0) {
        e.preventDefault()
        onSubmit()
        return
      }

      if (e.key === ' ' && !onButton) {
        e.preventDefault()
        onSkip()
        return
      }

      if (question.type === 'single' || question.type === 'multiple') {
        const q = question as SingleQuestion | MultipleQuestion
        const options = q.options
        let optionId: string | null = null

        const key = e.key.toUpperCase()
        if (/^[A-Z]$/.test(key) && options.some((o) => o.id === key)) {
          optionId = key
        } else if (/^[1-9]$/.test(e.key)) {
          const idx = parseInt(e.key) - 1
          if (idx < options.length) optionId = options[idx].id
        }

        if (optionId !== null) {
          e.preventDefault()
          if (question.type === 'single') {
            onAnswerChange([optionId])
          } else {
            const next = userAnswer.includes(optionId)
              ? userAnswer.filter((a) => a !== optionId)
              : [...userAnswer, optionId]
            onAnswerChange(next)
          }
        }
      } else if (question.type === 'truefalse') {
        const key = e.key.toUpperCase()
        if (key === 'T' || e.key === '1') {
          e.preventDefault()
          onAnswerChange(['true'])
        } else if (key === 'F' || e.key === '2') {
          e.preventDefault()
          onAnswerChange(['false'])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enabled, question, userAnswer, showExplanation, onAnswerChange, onSubmit, onSkip, onAdvance])
}
