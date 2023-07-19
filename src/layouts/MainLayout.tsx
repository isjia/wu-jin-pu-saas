import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Layout } from 'antd'
import styles from './MainLayout.module.scss'

import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'

const MainLayout: FC = () => {
  const { Header, Footer, Content } = Layout
  return (
    <Layout>
      <Header className={styles['header-section']}>
        <Logo />
        <UserInfo />
      </Header>
      <Content className={styles['content-section']}>
        <Outlet />
      </Content>
      <Footer className={styles['footer-section']}>金普问卷 &copy; 2023 by wiz</Footer>
    </Layout>
  )
}

export default MainLayout
