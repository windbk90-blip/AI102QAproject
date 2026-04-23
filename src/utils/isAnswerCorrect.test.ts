import { describe, it, expect } from 'vitest'
import { isAnswerCorrect } from './isAnswerCorrect'
import type {
  SingleQuestion,
  MultipleQuestion,
  SortQuestion,
  TrueFalseQuestion,
} from '../types/quiz'

const baseSingle: SingleQuestion = {
  id: '1',
  type: 'single',
  content: 'Q',
  explanation: '',
  options: [
    { id: 'A', text: 'a' },
    { id: 'B', text: 'b' },
  ],
  answer: ['A'],
}

const baseMultiple: MultipleQuestion = {
  id: '2',
  type: 'multiple',
  content: 'Q',
  explanation: '',
  options: [
    { id: 'A', text: 'a' },
    { id: 'B', text: 'b' },
    { id: 'C', text: 'c' },
  ],
  answer: ['A', 'C'],
}

const baseSort: SortQuestion = {
  id: '3',
  type: 'sort',
  content: 'Q',
  explanation: '',
  items: ['step1', 'step2', 'step3'],
  answer: ['1', '2', '3'],
}

const baseTrueFalse: TrueFalseQuestion = {
  id: '4',
  type: 'truefalse',
  content: 'Q',
  explanation: '',
  answer: ['true'],
}

describe('isAnswerCorrect — single', () => {
  it('accepts matching selection', () => {
    expect(isAnswerCorrect(baseSingle, ['A'])).toBe(true)
  })

  it('rejects wrong selection', () => {
    expect(isAnswerCorrect(baseSingle, ['B'])).toBe(false)
  })

  it('rejects empty answer', () => {
    expect(isAnswerCorrect(baseSingle, [])).toBe(false)
  })
})

describe('isAnswerCorrect — multiple (set equality, order-insensitive)', () => {
  it('accepts same-set different-order answer', () => {
    expect(isAnswerCorrect(baseMultiple, ['C', 'A'])).toBe(true)
  })

  it('rejects subset', () => {
    expect(isAnswerCorrect(baseMultiple, ['A'])).toBe(false)
  })

  it('rejects superset', () => {
    expect(isAnswerCorrect(baseMultiple, ['A', 'B', 'C'])).toBe(false)
  })

  it('rejects different set of same length', () => {
    expect(isAnswerCorrect(baseMultiple, ['A', 'B'])).toBe(false)
  })
})

describe('isAnswerCorrect — sort (order-sensitive)', () => {
  it('accepts exact sequence match', () => {
    expect(isAnswerCorrect(baseSort, ['1', '2', '3'])).toBe(true)
  })

  it('rejects correct items in wrong order', () => {
    expect(isAnswerCorrect(baseSort, ['2', '1', '3'])).toBe(false)
  })

  it('rejects length mismatch', () => {
    expect(isAnswerCorrect(baseSort, ['1', '2'])).toBe(false)
  })
})

describe('isAnswerCorrect — truefalse', () => {
  it('accepts true when answer is true', () => {
    expect(isAnswerCorrect(baseTrueFalse, ['true'])).toBe(true)
  })

  it('rejects false when answer is true', () => {
    expect(isAnswerCorrect(baseTrueFalse, ['false'])).toBe(false)
  })

  it('accepts false when answer is false', () => {
    const q: TrueFalseQuestion = { ...baseTrueFalse, answer: ['false'] }
    expect(isAnswerCorrect(q, ['false'])).toBe(true)
  })
})
