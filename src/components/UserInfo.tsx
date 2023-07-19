import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LOGIN_PATHNAME } from '../router'

const UserInfo: FC = () => {
  return (
    <Link to={LOGIN_PATHNAME}>
      <div style={{ color: 'white' }}>登陆</div>
    </Link>
  )
}

export default UserInfo
