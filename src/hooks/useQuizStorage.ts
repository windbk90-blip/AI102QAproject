import { useState, useCallback } from 'react'
import { QuizMode, QuestionRecord } from '../types/quiz'

export interface QuizSession {
  date: string
  mode: QuizMode
  correctRate: number
  totalQuestions: number
  correctCount: number
  records: QuestionRecord[]
}

const STORAGE_KEY = 'quiz_history'
const MAX_SESSIONS = 50 // 最多保存 50 次会话

export function useQuizStorage() {
  const [history, setHistory] = useState<QuizSession[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (e) {
      console.error('Failed to load quiz history from localStorage:', e)
      return []
    }
  })

  // 保存一次答题会话
  const saveSession = useCallback((session: Omit<QuizSession, 'date'>) => {
    try {
      const newSession: QuizSession = {
        ...session,
        date: new Date().toISOString(),
      }

      setHistory((prev) => {
        // 保持最近 MAX_SESSIONS 条记录
        const updated = [newSession, ...prev].slice(0, MAX_SESSIONS)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })

      return newSession
    } catch (e) {
      console.error('Failed to save quiz session:', e)
      return null
    }
  }, [])

  // 获取所有历史记录
  const getHistory = useCallback((): QuizSession[] => {
    return history
  }, [history])

  // 清空所有历史记录
  const clearHistory = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      setHistory([])
    } catch (e) {
      console.error('Failed to clear history:', e)
    }
  }, [])

  // 删除单条记录
  const deleteSession = useCallback((index: number) => {
    try {
      setHistory((prev) => {
        const updated = prev.filter((_, i) => i !== index)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
        return updated
      })
    } catch (e) {
      console.error('Failed to delete session:', e)
    }
  }, [])

  // 获取统计信息
  const getStats = useCallback(() => {
    const stats = {
      totalSessions: history.length,
      totalQuestions: history.reduce((sum, s) => sum + s.totalQuestions, 0),
      totalCorrect: history.reduce((sum, s) => sum + s.correctCount, 0),
      averageRate: 0,
      practiceCount: 0,
      simulationCount: 0,
    }

    if (stats.totalQuestions > 0) {
      stats.averageRate = stats.totalCorrect / stats.totalQuestions
    }

    stats.practiceCount = history.filter(s => s.mode === 'practice').length
    stats.simulationCount = history.filter(s => s.mode === 'simulation').length

    return stats
  }, [history])

  return {
    history,
    saveSession,
    getHistory,
    clearHistory,
    deleteSession,
    getStats,
  }
}
