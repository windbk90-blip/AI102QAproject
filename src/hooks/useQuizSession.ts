import { useState, useMemo, useEffect } from 'react'
import { Question } from '../types/quiz'

export interface UseQuizSessionReturn {
  shuffledQuestions: Question[]
  currentIndex: number
  skipQuestion: () => void
  jumpToQuestion: (index: number) => void
}

export function useQuizSession(questions: Question[]): UseQuizSessionReturn {
  // 随机打乱题目顺序
  const shuffledQuestions = useMemo(() => {
    const shuffled = [...questions]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, [questions])

  // 当前题目索引
  const [currentIndex, setCurrentIndex] = useState(0)

  // 当题目列表改变时，重置索引
  useEffect(() => {
    setCurrentIndex(0)
  }, [shuffledQuestions.length])

  // 跳题函数：跳到下一题，如果已经是最后一题则不操作
  const skipQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  // 跳转到指定题目
  const jumpToQuestion = (index: number) => {
    if (index >= 0 && index < shuffledQuestions.length) {
      setCurrentIndex(index)
    }
  }

  return {
    shuffledQuestions,
    currentIndex,
    skipQuestion,
    jumpToQuestion,
  }
}