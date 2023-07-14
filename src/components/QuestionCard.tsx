import React, { FC } from 'react'
import './QuestionCard.css'

// 定义问卷类型
type PropsType = {
  qid: number
  title: string
  isPublished: boolean
}

const QuestionCard: FC<PropsType> = (props) => {
  const { qid, title, isPublished } = props

  const edit = (qid: number) => {
    console.log('edit ', qid)
  }

  return (
    <div key={qid} className='question-card'>
      <h2>{title}</h2>
      <div>
        {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
        &nbsp;
        <button
          onClick={() => {
            edit(qid)
          }}
        >
          编辑问卷
        </button>
      </div>
    </div>
  )
}

export default QuestionCard
