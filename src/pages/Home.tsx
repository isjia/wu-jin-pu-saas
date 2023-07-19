import { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from 'antd'

import { LOGIN_PATHNAME, REGISTER_PATHNAME } from '../router'

const Home: FC = () => {
  const nav = useNavigate()
  function handleClick() {
    nav(LOGIN_PATHNAME)
  }
  return (
    <div>
      Home Page <br />
      <Button onClick={handleClick} type='primary'>
        登陆
      </Button>
      &nbsp;
      <Link to={REGISTER_PATHNAME}>注册</Link>
    </div>
  )
}

export default Home
