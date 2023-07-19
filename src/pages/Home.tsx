import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'

import styles from './Home.module.scss'

import { MANAGE_INDEX_PATHNAME } from '../router'

const Home: FC = () => {
  const { Title, Paragraph } = Typography

  const nav = useNavigate()
  function handleClick() {
    nav(MANAGE_INDEX_PATHNAME)
  }
  return (
    <div className={styles.container}>
      <div>
        <Title>
          <span className={styles.info}>问卷调查 ｜ 在线投票</span>
        </Title>
        <Paragraph>
          <span className={styles.info}>
            已累计创建问卷 100 份，发布问卷 99 份，收到答卷 999 份
          </span>
        </Paragraph>
      </div>
      <Button onClick={handleClick} type='primary' size='large'>
        开始使用
      </Button>
    </div>
  )
}

export default Home
