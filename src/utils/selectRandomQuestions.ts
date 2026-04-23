import { Question } from '../types/quiz'

export function selectRandomQuestions(pool: Question[], count: number): Question[] {
  const indices = new Set<number>()
  while (indices.size < count && indices.size < pool.length) {
    indices.add(Math.floor(Math.random() * pool.length))
  }
  return Array.from(indices).map((i) => pool[i])
}
