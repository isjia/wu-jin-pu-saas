import { FC, useState } from 'react'
import { produce } from 'immer'
import { useTitle } from 'ahooks'
import { Typography, Button } from 'antd'

import { Question } from '../types'
import QuestionCard from '../components/QuestionCard'

import styles from './QuestionList.module.scss'

const { Title } = Typography

const rawQuestionList: Question[] = [
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
    isStar: false,
    answerCount: 6,
    createdAt: '7月2日 12:12',
  },
  {
    _id: '323',
    title: '问卷323',
    isPublished: true,
    isStar: false,
    answerCount: 7,
    createdAt: '7月3日 12:12',
  },
]

// 在设置范围内生成随机数
function randomXToY(minVal: number, maxVal: number) {
  const randVal = minVal + Math.random() * (maxVal - minVal)
  return Math.round(randVal)
}

const QuestionList: FC = () => {
  useTitle('金普问卷 - 问卷列表')

  const [questionList, setQuestionList] = useState(rawQuestionList)

  // 新增问卷
  function create() {
    const r = randomXToY(101, 999).toString()
    const c = randomXToY(1, 9)
    // setQuestionList(
    //   questionList.concat({
    //     qid: r,
    //     title: '问题' + r,
    //     isPublished: false,
    //   })
    // )
    setQuestionList(
      produce((draft) => {
        draft.push({
          _id: r,
          title: '问题' + r,
          isPublished: false,
          isStar: false,
          answerCount: c,
          createdAt: '7月3日 12:12',
        })
      })
    )
    console.log('新增问卷')
  }

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
    // setQuestionList(
    //   questionList.map((item) => {
    //     if (item.qid === qid) {
    //       return {
    //         ...item,
    //         isPublished: true,
    //       }
    //     } else {
    //       return item
    //     }
    //   })
    // )
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
          {/* <h1 className={styles.title}>我的问卷</h1> */}
          <Title level={3} style={{ marginBottom: 0, marginRight: '8px' }}>
            我的问卷
          </Title>
          {/* 新增问卷按钮 */}
          <Button onClick={create} type='primary' size='small'>
            新增
          </Button>
        </div>
        <div>search</div>
      </div>
      {/* 问卷列表 */}
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

      {/* footer */}
      <div className={styles.footer}>load more ...</div>
    </div>
  )
}

export default QuestionList
