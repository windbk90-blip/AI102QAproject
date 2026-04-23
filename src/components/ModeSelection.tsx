import React, { useMemo, useState } from 'react'
import questionsData from '../data/sortedQuestions.json'
import { useQuestionFilter } from '../hooks/useQuestionFilter'
import { Question, QuestionType, QuizMode } from '../types/quiz'

const ALL_TYPES: QuestionType[] = ['single', 'multiple', 'sort', 'truefalse']
const TYPE_LABELS: Record<QuestionType, string> = {
  single: '单选',
  multiple: '多选',
  sort: '排序',
  truefalse: '判断',
}

const ALL_QUESTIONS = questionsData as Question[]

interface ModeSelectionProps {
  onModeSelect: (mode: QuizMode, typeFilter: QuestionType[]) => void
  onResume?: () => void
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({ onModeSelect, onResume }) => {
  const { getTypeStats } = useQuestionFilter(ALL_QUESTIONS)
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>(ALL_TYPES)

  const toggleType = (t: QuestionType) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    )
  }

  const filteredCount = useMemo(
    () => selectedTypes.reduce((sum, t) => sum + getTypeStats[t], 0),
    [selectedTypes, getTypeStats],
  )

  const canStart = filteredCount > 0
  const effectiveFilter =
    selectedTypes.length === ALL_TYPES.length ? [] : selectedTypes

  return (
    <div className="mode-selection">
      <h1>选择答题模式</h1>

      {onResume && (
        <button className="resume-button" onClick={onResume}>
          继续上次练习
        </button>
      )}

      <div className="type-filter">
        <div className="type-filter-header">
          题型筛选（可选范围共 {filteredCount} 题）
        </div>
        <div className="type-filter-options">
          {ALL_TYPES.map((t) => (
            <label key={t} className="type-filter-option">
              <input
                type="checkbox"
                checked={selectedTypes.includes(t)}
                onChange={() => toggleType(t)}
              />
              <span>
                {TYPE_LABELS[t]}（{getTypeStats[t]}）
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mode-buttons">
        <button
          className="mode-button practice"
          onClick={() => onModeSelect('practice', effectiveFilter)}
          disabled={!canStart}
        >
          <h2>练习模式</h2>
          <p>实时显示进度和正确率，提交后立即显示答案解析，可随时结束练习</p>
        </button>
        <button
          className="mode-button simulation"
          onClick={() => onModeSelect('simulation', effectiveFilter)}
          disabled={!canStart}
        >
          <h2>模拟模式</h2>
          <p>完成30道随机题目后显示正确率和错题解析</p>
        </button>
      </div>
    </div>
  )
}
