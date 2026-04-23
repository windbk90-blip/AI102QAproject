import { useState, useCallback } from 'react'
import { QuizMode, QuestionRecord, QuizSnapshot } from '../types/quiz'
import { QuestionPerf } from '../utils/selectRandomQuestions'

export interface QuizSession {
  date: string
  mode: QuizMode
  correctRate: number
  totalQuestions: number
  correctCount: number
  records: QuestionRecord[]
}

const STORAGE_KEY = 'quiz_history'
const SNAPSHOT_KEY = 'quiz_snapshot'
const PERF_KEY = 'quiz_question_perf'
const MAX_SESSIONS = 50

function readJson<T>(key: string, fallback: T): T {
  try {
    const s = localStorage.getItem(key)
    return s ? (JSON.parse(s) as T) : fallback
  } catch {
    return fallback
  }
}

export function useQuizStorage() {
  const [history, setHistory] = useState<QuizSession[]>(() => readJson(STORAGE_KEY, []))
  const [snapshotExists, setSnapshotExists] = useState(() => !!localStorage.getItem(SNAPSHOT_KEY))
  const [perfMap, setPerfMap] = useState<Record<string, QuestionPerf>>(() =>
    readJson(PERF_KEY, {}),
  )

  // ── Session history ──────────────────────────────────────────────────────────

  const saveSession = useCallback((session: Omit<QuizSession, 'date'>) => {
    try {
      const newSession: QuizSession = { ...session, date: new Date().toISOString() }
      setHistory((prev) => {
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

  const getHistory = useCallback((): QuizSession[] => history, [history])

  const clearHistory = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      setHistory([])
    } catch (e) {
      console.error('Failed to clear history:', e)
    }
  }, [])

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

  const getStats = useCallback(() => {
    const stats = {
      totalSessions: history.length,
      totalQuestions: history.reduce((sum, s) => sum + s.totalQuestions, 0),
      totalCorrect: history.reduce((sum, s) => sum + s.correctCount, 0),
      averageRate: 0,
      practiceCount: 0,
      simulationCount: 0,
    }
    if (stats.totalQuestions > 0) stats.averageRate = stats.totalCorrect / stats.totalQuestions
    stats.practiceCount = history.filter((s) => s.mode === 'practice').length
    stats.simulationCount = history.filter((s) => s.mode === 'simulation').length
    return stats
  }, [history])

  // ── Mid-quiz snapshot ────────────────────────────────────────────────────────

  const saveSnapshot = useCallback((snapshot: QuizSnapshot) => {
    try {
      localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(snapshot))
      setSnapshotExists(true)
    } catch (e) {
      console.error('Failed to save snapshot:', e)
    }
  }, [])

  const loadSnapshot = useCallback((): QuizSnapshot | null => {
    return readJson<QuizSnapshot | null>(SNAPSHOT_KEY, null)
  }, [])

  const clearSnapshot = useCallback(() => {
    localStorage.removeItem(SNAPSHOT_KEY)
    setSnapshotExists(false)
  }, [])

  // ── Per-question performance (spaced repetition) ─────────────────────────────

  const updateQuestionPerf = useCallback((records: QuestionRecord[]) => {
    setPerfMap((prev) => {
      const updated = { ...prev }
      const now = new Date().toISOString()
      for (const r of records) {
        const id = r.question.id
        updated[id] = {
          consecutiveCorrect: r.isCorrect ? (updated[id]?.consecutiveCorrect ?? 0) + 1 : 0,
          lastSeen: now,
        }
      }
      try {
        localStorage.setItem(PERF_KEY, JSON.stringify(updated))
      } catch {}
      return updated
    })
  }, [])

  return {
    history,
    saveSession,
    getHistory,
    clearHistory,
    deleteSession,
    getStats,
    snapshotExists,
    saveSnapshot,
    loadSnapshot,
    clearSnapshot,
    perfMap,
    updateQuestionPerf,
  }
}
