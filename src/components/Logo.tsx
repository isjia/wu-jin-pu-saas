import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'

import styles from './Logo.module.scss'
import { HOME_PATHNAME } from '../router'

const { Title } = Typography
const Logo: FC = () => {
  return (
    <Link to={HOME_PATHNAME}>
      <div className={styles['logo-section']}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>
            <span>金普问卷</span>
          </Title>
        </Space>
      </div>
    </Link>
  )
}

export default Logo
