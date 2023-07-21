import React, { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Divider, Space, Tag, message, Popconfirm, Modal } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  DeleteOutlined,
  CopyOutlined,
  StarOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons'
import styles from './QuestionCard.module.scss'

// 定义问卷类型
type PropsType = {
  qid: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
  del: (qid: string) => void
  pub?: (qid: string) => void
}

const QuestionCard: FC<PropsType> = (props) => {
  const nav = useNavigate()
  const { qid, title, isStar, isPublished, answerCount, createdAt, del } = props

  const cancel = (msg: string, e?: MouseEvent<HTMLElement>) => {
    console.log(e)
    message.error(msg)
  }

  const confirm = (msg: string, qid: string, e?: MouseEvent<HTMLElement>) => {
    console.log(e)
    message.success(msg)
    del(qid)
  }

  const showCopyConfirm = () => {
    Modal.confirm({
      title: '确认复制当前问卷?',
      icon: <ExclamationCircleFilled />,
      content: '需要复制一份当前问卷',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('确认复制')
        message.success('复制成功')
      },
      onCancel() {
        console.log('取消复制')
        message.error('取消复制')
      },
    })
  }

  return (
    <div key={qid} className={styles['question-card']}>
      <div className={styles['row-title']}>
        <h2 className={styles.title}>
          {isStar && (
            <StarOutlined style={{ fontSize: '14px', color: 'red', marginRight: '4px' }} />
          )}
          <a href='#'>{title}</a>
        </h2>
        <div className='status'>
          <Space>
            {isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '3px 0' }} />
      <div className={styles['row-edit']}>
        <div>
          <Space>
            <Button
              onClick={() => {
                nav(`/question/edit/${qid}`)
              }}
              type='text'
              size='small'
              icon={<EditOutlined />}
            >
              编辑问卷
            </Button>

            <Button
              onClick={() => {
                nav(`/question/stat/${qid}`)
              }}
              type='text'
              size='small'
              icon={<LineChartOutlined />}
              disabled={!isPublished}
            >
              统计问卷
            </Button>
          </Space>
        </div>
        <div>
          <Space>
            <Button size='small' type='text' icon={<StarOutlined />}>
              {isStar ? '取消星标' : '星标'}
            </Button>
            <Button size='small' type='text' icon={<CopyOutlined />} onClick={showCopyConfirm}>
              复制
            </Button>
            <Popconfirm
              title='删除问卷'
              description='确认删除当前问卷？'
              onConfirm={(e) => {
                confirm('删除成功', qid, e)
              }}
              onCancel={(e) => cancel('取消删除', e)}
              okText='确认'
              cancelText='取消'
            >
              <Button size='small' type='text' icon={<DeleteOutlined />}>
                删除
              </Button>
            </Popconfirm>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
