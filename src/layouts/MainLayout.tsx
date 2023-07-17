import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayout Header</div>
      <Outlet />
      <div>MainLayout footer</div>
    </>
  )
}

export default MainLayout
