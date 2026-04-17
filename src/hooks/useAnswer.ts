import { useState, useCallback } from 'react'
import { QuestionType } from '../types/quiz'

export interface UseAnswerReturn {
  currentAnswer: string[]
  toggleAnswer: (optionId: string) => void
}

export function useAnswer(questionType: QuestionType): UseAnswerReturn {
  const [currentAnswer, setCurrentAnswer] = useState<string[]>([])

  const toggleAnswer = useCallback((optionId: string) => {
    setCurrentAnswer(prev => {
      switch (questionType) {
        case 'single':
          // 单选：如果点击已选中的，则取消；否则替换
          return prev.includes(optionId) ? [] : [optionId]

        case 'multiple':
          // 多选：添加或移除
          return prev.includes(optionId)
            ? prev.filter(id => id !== optionId)
            : [...prev, optionId]

        case 'truefalse':
          // 判断题：在 'true' 和 'false' 之间切换
          if (optionId === 'true' || optionId === 'false') {
            return prev.includes(optionId) ? [] : [optionId]
          }
          return prev

        case 'sort':
          // 排序题：暂时不支持toggle，可能需要单独的排序逻辑
          console.warn('Sort questions do not support toggleAnswer. Use dedicated sort functions.')
          return prev

        default:
          return prev
      }
    })
  }, [questionType])

  return {
    currentAnswer,
    toggleAnswer,
  }
}