// 定义问卷类型
declare type Question = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
  del?: (qid: number) => void
  pub?: (qid: number) => void
}

export { Question }
