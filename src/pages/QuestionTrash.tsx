import { FC, useState, Key } from 'react'
// import { produce } from 'immer'
import { useTitle } from 'ahooks'
import { Typography, Table, Tag, Empty, Space, Button, Modal, message } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { Question } from '../types'
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
    isPublished: false,
    isStar: false,
    answerCount: 7,
    createdAt: '7月3日 12:12',
  },
]

const tableColumns = [
  {
    title: '问卷标题',
    dataIndex: 'title',
  },
  {
    title: '发布状态',
    dataIndex: 'isPublished',
    render: (isPublished: boolean) => {
      return isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>
    },
  },
  {
    title: '答卷数',
    dataIndex: 'answerCount',
  },
  {
    title: '创建日期',
    dataIndex: 'createdAt',
  },
]

const QuestionTrash: FC = () => {
  useTitle('金普问卷 - 回收站')

  const [questionList] = useState(rawQuestionList)
  const [selectedQids, setSelectedQids] = useState<string[]>([])

  const rowSelection = {
    onChange: (newSelected: Key[]) => {
      // console.log('selectedQids: ', newSelected)
      setSelectedQids(newSelected as string[])
    },
  }

  const showDelConfirm = () => {
    Modal.confirm({
      title: '确认删除当前问卷?',
      icon: <ExclamationCircleFilled />,
      content: `需要彻底删除问卷：${selectedQids.join(', ')}`,
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        message.success('彻底删除成功')
      },
      onCancel() {
        message.error('取消删除')
      },
    })
  }

  const TableElement = (
    <div className={styles['main-content']}>
      <div className={styles['trash-btn-group-wrap']}>
        <Space>
          <Button type='primary' size='small' disabled={selectedQids.length === 0 ? true : false}>
            恢复
          </Button>
          <Button
            danger
            size='small'
            disabled={selectedQids.length === 0 ? true : false}
            onClick={showDelConfirm}
          >
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={(q) => q._id}
        rowSelection={rowSelection}
      />
    </div>
  )

  return (
    <>
      <div className={styles['page-wrap']}>
        <div className={styles.header}>
          <div className={styles['title-wrap']}>
            {/* <h1 className={styles.title}>我的问卷</h1> */}
            <Title level={3} style={{ marginBottom: 0, marginRight: '8px' }}>
              我的问卷
            </Title>
          </div>
          <div>search</div>
        </div>
        {/* 回收问卷列表 */}
        {questionList.length === 0 ? <Empty description='暂无数据' /> : TableElement}
      </div>
    </>
  )
}

export default QuestionTrash
