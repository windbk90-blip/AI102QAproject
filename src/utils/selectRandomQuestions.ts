import { Question } from '../types/quiz'

export interface QuestionPerf {
  consecutiveCorrect: number
  lastSeen: string
}

function getWeight(perf: QuestionPerf | undefined): number {
  if (!perf) return 3
  const daysSince = (Date.now() - new Date(perf.lastSeen).getTime()) / 86400000
  const base = Math.max(0.5, 4 - perf.consecutiveCorrect)
  return base + Math.min(1.5, daysSince / 7)
}

export function selectRandomQuestions(
  pool: Question[],
  count: number,
  perfMap?: Record<string, QuestionPerf>,
): Question[] {
  const n = Math.min(count, pool.length)

  if (!perfMap || Object.keys(perfMap).length === 0) {
    const indices = new Set<number>()
    while (indices.size < n) {
      indices.add(Math.floor(Math.random() * pool.length))
    }
    return Array.from(indices).map((i) => pool[i])
  }

  const available = pool.map((q) => ({ q, w: getWeight(perfMap[q.id]) }))
  const result: Question[] = []

  for (let i = 0; i < n && available.length > 0; i++) {
    const total = available.reduce((s, { w }) => s + w, 0)
    let r = Math.random() * total
    let chosen = available.length - 1
    for (let j = 0; j < available.length; j++) {
      r -= available[j].w
      if (r <= 0) {
        chosen = j
        break
      }
    }
    result.push(available[chosen].q)
    available.splice(chosen, 1)
  }

  return result
}
