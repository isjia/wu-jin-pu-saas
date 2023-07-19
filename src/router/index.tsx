import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import ManageLayout from '../layouts/ManageLayout'
import QuestionList from '../pages/QuestionList'
import QuestionStar from '../pages/QuestionStar'
import QuestionTrash from '../pages/QuestionTrash'
import QuestionLayout from '../layouts/QuestionLayout'
import Edit from '../pages/Edit'
import Stat from '../pages/Stat'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <QuestionList />,
          },
          {
            path: 'star',
            element: <QuestionStar />,
          },
          {
            path: 'trash',
            element: <QuestionTrash />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:qid',
        element: <Edit />,
      },
      {
        path: 'stat/:qid',
        element: <Stat />,
      },
    ],
  },
])

export default router

/* --------- 分割线 ---------- */
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'
