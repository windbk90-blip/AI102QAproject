import { QuestionRecord } from '../types/quiz'
import { QuizSession } from '../hooks/useQuizStorage'

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function exportWrongAnswersAsCsv(records: QuestionRecord[], filename = 'wrong-answers.csv') {
  const rows: string[][] = [
    ['题目', '你的答案', '正确答案', '解析'],
    ...records
      .filter((r) => !r.isCorrect)
      .map((r) => [
        r.question.content,
        r.userAnswer.join('; ') || '跳过',
        r.question.answer.join('; '),
        r.question.explanation,
      ]),
  ]
  const csv = rows
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(','))
    .join('\n')
  downloadBlob(new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' }), filename)
}

export function exportHistoryAsJson(sessions: QuizSession[], filename = 'quiz-history.json') {
  const data = sessions.map((s) => ({
    date: s.date,
    mode: s.mode === 'practice' ? '练习模式' : '模拟模式',
    score: `${s.correctCount}/${s.totalQuestions}`,
    correctRate: (s.correctRate * 100).toFixed(1) + '%',
    wrongAnswers: s.records
      .filter((r) => !r.isCorrect)
      .map((r) => ({
        question: r.question.content,
        yourAnswer: r.userAnswer.join('; ') || '跳过',
        correctAnswer: r.question.answer.join('; '),
        explanation: r.question.explanation,
      })),
  }))
  downloadBlob(
    new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }),
    filename,
  )
}
