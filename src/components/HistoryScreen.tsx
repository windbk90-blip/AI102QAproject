import React, { useState } from 'react'
import { useQuizStorage } from '../hooks/useQuizStorage'
import { exportHistoryAsJson } from '../utils/exportData'

interface HistoryScreenProps {
  onClose: () => void
}

export const HistoryScreen: React.FC<HistoryScreenProps> = ({ onClose }) => {
  const { history, deleteSession, clearHistory, getStats } = useQuizStorage()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const stats = getStats()

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('zh-CN')
  }

  const getModeLabel = (mode: string) => {
    return mode === 'practice' ? '练习模式' : '模拟模式'
  }

  const handleClearHistory = () => {
    if (window.confirm('确定要清空所有历史记录吗？此操作不可撤销。')) {
      clearHistory()
    }
  }

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  if (history.length === 0) {
    return (
      <div className="history-screen">
        <div className="history-header">
          <h2>学习历史</h2>
          <button onClick={onClose} className="close-button">关闭</button>
        </div>
        <div className="history-empty">
          <p>暂无学习记录</p>
        </div>
      </div>
    )
  }

  return (
    <div className="history-screen">
      <div className="history-header">
        <h2>学习历史</h2>
        <button onClick={onClose} className="close-button">关闭</button>
      </div>

      <div className="history-stats">
        <div className="stat-item">
          <span className="stat-label">总次数</span>
          <span className="stat-value">{stats.totalSessions}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">总题数</span>
          <span className="stat-value">{stats.totalQuestions}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">平均正确率</span>
          <span className="stat-value">{(stats.averageRate * 100).toFixed(1)}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">练习/模拟</span>
          <span className="stat-value">{stats.practiceCount}/{stats.simulationCount}</span>
        </div>
      </div>

      <div className="history-list">
        <div className="history-list-header">
          <span className="col-date">日期</span>
          <span className="col-mode">模式</span>
          <span className="col-score">成绩</span>
          <span className="col-rate">正确率</span>
          <span className="col-action">操作</span>
        </div>

        {history.map((session, index) => (
          <div key={index} className="history-item">
            <div className="history-item-summary" onClick={() => toggleExpanded(index)}>
              <span className="col-date">{formatDate(session.date)}</span>
              <span className="col-mode">{getModeLabel(session.mode)}</span>
              <span className="col-score">{session.correctCount}/{session.totalQuestions}</span>
              <span className="col-rate">{(session.correctRate * 100).toFixed(1)}%</span>
              <div className="col-action">
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteSession(index)
                  }}
                >
                  删除
                </button>
              </div>
            </div>

            {expandedIndex === index && (
              <div className="history-item-details">
                <div className="wrong-questions">
                  <h4>错题详情</h4>
                  {session.records.filter((r) => !r.isCorrect).length === 0 ? (
                    <p className="no-wrong">全部正确！</p>
                  ) : (
                    <ul className="wrong-list">
                      {session.records
                        .filter((r) => !r.isCorrect)
                        .map((record, idx) => (
                          <li key={idx} className="wrong-item">
                            <div className="question-preview">
                              {record.question.content.substring(0, 80)}...
                            </div>
                            <div className="answer-info">
                              <span className="user-answer">你的答案: {record.userAnswer.join(', ') || '跳过'}</span>
                              <span className="correct-answer">正确答案: {
                                Array.isArray(record.question.answer)
                                  ? record.question.answer.join(', ')
                                  : record.question.answer
                              }</span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="history-footer">
        <button
          className="export-btn"
          onClick={() => exportHistoryAsJson(history)}
          title="导出所有历史记录为 JSON 文件"
        >
          导出历史 JSON
        </button>
        <button onClick={handleClearHistory} className="clear-all-btn">
          清空所有历史记录
        </button>
      </div>
    </div>
  )
}
