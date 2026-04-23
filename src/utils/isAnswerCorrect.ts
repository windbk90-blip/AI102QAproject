import { Question } from '../types/quiz'

export function isAnswerCorrect(question: Question, userAnswer: string[]): boolean {
  const correctAnswer = question.answer

  switch (question.type) {
    case 'single':
    case 'multiple':
    case 'truefalse': {
      if (userAnswer.length !== correctAnswer.length) return false
      const userSet = new Set(userAnswer)
      const correctSet = new Set(correctAnswer)
      return userSet.size === correctSet.size && [...userSet].every(id => correctSet.has(id))
    }

    case 'sort':
      return userAnswer.length === correctAnswer.length &&
             userAnswer.every((item, index) => item === correctAnswer[index])

    default:
      return false
  }
}
