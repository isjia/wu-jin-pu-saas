import React, { FC } from 'react'
import styles from './QuestionCard.module.scss'

// 定义问卷类型
type PropsType = {
  qid: string
  title: string
  isPublished: boolean
  answerCount: number
  createdAt: string
  del?: (qid: string) => void
  pub?: (qid: string) => void
}

const QuestionCard: FC<PropsType> = (props) => {
  const { qid, title, isPublished, answerCount, createdAt, del, pub } = props

  const edit = (qid: string) => {
    console.log('edit ', qid)
  }

  return (
    <div key={qid} className={styles['question-card']}>
      <div className={styles['row-title']}>
        <h2 className={styles.title}>
          <a href='#'>{title}</a>
        </h2>
        <div className='status'>
          <div className='status-publish'>
            {isPublished ? (
              <span className={styles['status-publish']}>已发布</span>
            ) : (
              <span className={styles['status-publish']}>未发布</span>
            )}
            <span className={styles['status-answer-count']}>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
      <div className={styles['row-edit']}>
        <div>
          <button
            onClick={() => {
              edit(qid)
            }}
          >
            编辑问卷
          </button>
          &nbsp;
          {pub ? (
            <button
              onClick={() => {
                pub(qid)
              }}
            >
              发布问卷
            </button>
          ) : (
            ''
          )}
          &nbsp;
          {del ? (
            <button
              onClick={() => {
                del(qid)
              }}
            >
              删除问卷
            </button>
          ) : (
            ''
          )}
        </div>
        <div>
          <span className={styles['btn-status']}>星标</span>
          <span className={styles['btn-status']}>复制</span>
          <span className={styles['btn-status']}>删除</span>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
