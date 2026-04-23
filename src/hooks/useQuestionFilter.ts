import { useMemo } from 'react'
import { Option, Question, QuestionType } from '../types/quiz'

export interface FilterOptions {
  types?: QuestionType[]
  keyword?: string
}

export function useQuestionFilter(questions: Question[]) {
  /**
   * 按题型筛选
   */
  const filterByType = (types: QuestionType[]): Question[] => {
    if (!types || types.length === 0) return questions
    const typeSet = new Set(types)
    return questions.filter(q => typeSet.has(q.type))
  }

  /**
   * 按关键字搜索
   */
  const filterByKeyword = (keyword: string): Question[] => {
    if (!keyword || keyword.trim() === '') return questions
    const lowerKeyword = keyword.toLowerCase()
    return questions.filter(q => {
      const matchesContent = q.content.toLowerCase().includes(lowerKeyword)
      const matchesExplanation = q.explanation.toLowerCase().includes(lowerKeyword)
      const matchesOptions = 'options' in q && q.options.some((opt: Option) =>
        opt.text.toLowerCase().includes(lowerKeyword)
      )
      return matchesContent || matchesExplanation || matchesOptions
    })
  }

  /**
   * 组合多个筛选条件
   */
  const applyFilters = (options: FilterOptions): Question[] => {
    let result = questions

    if (options.types && options.types.length > 0) {
      result = filterByType(options.types)
    }

    if (options.keyword && options.keyword.trim() !== '') {
      const filtered = filterByKeyword(options.keyword)
      result = result.filter(q => filtered.includes(q))
    }

    return result
  }

  /**
   * 获取所有可用的题型及其数量
   */
  const getTypeStats = useMemo(() => {
    const stats: Record<QuestionType, number> = {
      single: 0,
      multiple: 0,
      sort: 0,
      truefalse: 0,
    }

    questions.forEach(q => {
      stats[q.type]++
    })

    return stats
  }, [questions])

  return {
    filterByType,
    filterByKeyword,
    applyFilters,
    getTypeStats,
  }
}
