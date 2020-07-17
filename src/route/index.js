import home from '@/pages/home/home'
import loginRouters from './login/login'

const routers = [
  {
    path: '/home',
    Component: home,
    exact: false,
    child: [
      ...loginRouters
    ]
  }
]

export default routers