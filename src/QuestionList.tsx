import { FC, useState } from 'react'
import { produce } from 'immer'

import QuestionCard from './components/QuestionCard'

// 定义问卷类型
type Question = {
  qid: number
  title: string
  isPublished: boolean
  del?: (qid: number) => void
  pub?: (qid: number) => void
}

// 在设置范围内生成随机数
function randomXToY(minVal: number, maxVal: number) {
  const randVal = minVal + Math.random() * (maxVal - minVal)
  return Math.round(randVal)
}

const QuestionList: FC = () => {
  const [questionList, setQuestionList] = useState([
    { qid: 123, title: '问题100', isPublished: true },
  ])

  // 新增问卷
  function create() {
    const r = randomXToY(101, 999)
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
          qid: r,
          title: '问题' + r,
          isPublished: false,
        })
      })
    )
    console.log('新增问卷')
  }

  // 删除问卷
  function delQuestion(qid: number) {
    // setQuestionList(questionList.filter((item) => (item.qid === qid ? false : true)))
    setQuestionList(
      produce((draft) => {
        const isItem = (item: Question) => item.qid === qid
        const index = draft.findIndex(isItem)
        draft.splice(index, 1)
      })
    )
  }

  // 发布问卷
  function pubQuestion(qid: number) {
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
        const found = draft.find((element) => element.qid === qid)
        if (found) found.isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>Question List</h1>
      <div>
        {questionList.map((question) => {
          const { qid, title, isPublished } = question
          return (
            <QuestionCard
              key={qid}
              qid={qid}
              title={title}
              isPublished={isPublished}
              del={isPublished ? undefined : delQuestion}
              pub={isPublished ? undefined : pubQuestion}
            />
          )
        })}
      </div>
      <button onClick={create} className='btn-create'>
        新增问卷
      </button>
    </div>
  )
}

export default QuestionList
