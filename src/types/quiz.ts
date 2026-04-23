export type QuestionType = 'single' | 'multiple' | 'sort' | 'truefalse'

export interface Option {
  id: string      // 'A' | 'B' | 'C' | 'D'
  text: string
}

interface BaseQuestion {
  id: string
  type: QuestionType
  content: string
  explanation: string
  tags?: string[]
}

export interface SingleQuestion extends BaseQuestion {
  type: 'single'
  options: Option[]
  answer: string[]        // ['A']
}
export interface MultipleQuestion extends BaseQuestion {
  type: 'multiple'
  options: Option[]
  answer: string[]      // ['A', 'C']
}
export interface SortQuestion extends BaseQuestion {
  type: 'sort'
  items: string[]       // 打乱顺序展示
  answer: string[]      // 正确顺序
}
export interface TrueFalseQuestion extends BaseQuestion {
  type: 'truefalse'
  answer: string[]      // ['true'] or ['false']
}

export type Question =
  | SingleQuestion
  | MultipleQuestion
  | SortQuestion
  | TrueFalseQuestion

// 答题会话中每道题的记录
export interface QuestionRecord {
  question: Question
  userAnswer: string[]
  isCorrect: boolean
}

export type QuizMode = 'practice' | 'simulation'

export type Screen = 'mode-select' | 'quiz' | 'result' | 'history'

export interface QuizSnapshot {
  mode: QuizMode
  questionIds: string[]  // shuffled question order
  currentIndex: number
  records: QuestionRecord[]
}