import React from 'react'
import { QuizMode } from '../types/quiz'

interface ModeSelectionProps {
  onModeSelect: (mode: QuizMode) => void
}

export const ModeSelection: React.FC<ModeSelectionProps> = ({ onModeSelect }) => {
  return (
    <div className="mode-selection">
      <h1>选择答题模式</h1>
      <div className="mode-buttons">
        <button
          className="mode-button practice"
          onClick={() => onModeSelect('practice')}
        >
          <h2>练习模式</h2>
          <p>实时显示进度和正确率，提交后立即显示答案解析，可随时结束练习</p>
        </button>
        <button
          className="mode-button simulation"
          onClick={() => onModeSelect('simulation')}
        >
          <h2>模拟模式</h2>
          <p>完成30道随机题目后显示正确率和错题解析</p>
        </button>
      </div>
    </div>
  )
}