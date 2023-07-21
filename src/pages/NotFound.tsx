import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'

import { MANAGE_INDEX_PATHNAME } from '../router'

const NotFound: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      <Result
        status='404'
        title='404'
        subTitle='您访问的页面不存在'
        extra={
          <Button type='primary' onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
            返回首页
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
