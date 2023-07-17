import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './ManageLayout.module.scss'

const ManageLayout: FC = () => {
  return (
    <div className={styles['content-wrap']}>
      <div className={styles['sidebar']}>Sidebar Nav</div>
      <div className={styles['main-content']}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
