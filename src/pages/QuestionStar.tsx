import { FC, useState } from 'react'
import { produce } from 'immer'
import { useTitle } from 'ahooks'
import { Typography, Empty } from 'antd'

import QuestionCard from '../components/QuestionCard'
import { Question } from '../types'
import styles from './QuestionList.module.scss'

const { Title } = Typography

const rawStarQuestionList: Question[] = [
  {
    _id: '123',
    title: '问卷123',
    isPublished: true,
    isStar: true,
    answerCount: 5,
    createdAt: '7月1日 12:12',
  },
  {
    _id: '223',
    title: '问卷223',
    isPublished: true,
    isStar: true,
    answerCount: 6,
    createdAt: '7月2日 12:12',
  },
  {
    _id: '323',
    title: '问卷323',
    isPublished: true,
    isStar: true,
    answerCount: 7,
    createdAt: '7月3日 12:12',
  },
  {
    _id: '444',
    title: '问卷323',
    isPublished: true,
    isStar: true,
    answerCount: 7,
    createdAt: '7月3日 12:12',
  },
]

const QuestionStar: FC = () => {
  useTitle('金普问卷 - 星标问卷')

  const [questionList, setQuestionList] = useState(rawStarQuestionList)

  // 删除问卷
  function delQuestion(qid: string) {
    // setQuestionList(questionList.filter((item) => (item.qid === qid ? false : true)))
    setQuestionList(
      produce((draft) => {
        const isItem = (item: Question) => item._id === qid
        const index = draft.findIndex(isItem)
        draft.splice(index, 1)
      })
    )
  }

  // 发布问卷
  function pubQuestion(qid: string) {
    setQuestionList(
      produce((draft) => {
        const found = draft.find((element) => element._id === qid)
        if (found) found.isPublished = true
      })
    )
  }

  return (
    <div className={styles['page-wrap']}>
      <div className={styles.header}>
        <div className={styles['title-wrap']}>
          <Title level={3} style={{ marginBottom: 0, marginRight: '8px' }}>
            我的问卷
          </Title>
        </div>
        <div>search</div>
      </div>
      {/* 问卷列表 */}
      {questionList.length === 0 && <Empty />}
      {questionList.length > 0 && (
        <div className={styles['main-content']}>
          {questionList.map((question) => {
            const { _id, title, isStar, isPublished, answerCount, createdAt } = question
            return (
              <QuestionCard
                key={_id}
                qid={_id}
                title={title}
                isStar={isStar}
                isPublished={isPublished}
                answerCount={answerCount}
                createdAt={createdAt}
                del={delQuestion}
                pub={isPublished ? undefined : pubQuestion}
              />
            )
          })}
        </div>
      )}

      {/* footer */}
      <div className={styles.footer}>分页</div>
    </div>
  )
}

export default QuestionStar
