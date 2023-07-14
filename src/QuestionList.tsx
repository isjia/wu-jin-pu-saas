// import React from 'react'
import QuestionCard from './components/QuestionCard'

const questionList = [
  { qid: 1, title: '问题1', isPublished: true },
  { qid: 2, title: '问题2', isPublished: true },
  { qid: 3, title: '问题3', isPublished: false },
  { qid: 4, title: '问题4', isPublished: true },
  { qid: 5, title: '问题5', isPublished: false },
  { qid: 6, title: '问题6', isPublished: true },
]

function List1() {
  return (
    <div>
      <h1>Question List</h1>
      <div>
        {questionList.map((question) => {
          const { qid, title, isPublished } = question
          return <QuestionCard key={qid} qid={qid} title={title} isPublished={isPublished} />
        })}
      </div>
    </div>
  )
}

export default List1
