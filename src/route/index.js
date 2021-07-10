import React from 'react'
import { Route, Router, Switch, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'
import loginRouters from './login'

const routers = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/home'),
    models: () => [import('@/models/home')],
    child: [
      ...loginRouters
    ]
  }
]

const mapRouteMethod = (routeArr, app) => {
  return routeArr.map(({ path, component, models, child = [] }, index) => {
    if (child) {
      return <Route key={index} path={path} render={(props) => {
        const Component = dynamic({ app, models, component })
        return (<Component {...props}> {mapRouteMethod(child, app)} </Component>)
      }} />
    }
    return <Route key={index} path={path} exact component={dynamic({ app, models, component })} />
  })
}

const RouterConfig = ({history, app}) => {
  return (
    <Router history={history}>
      <Switch>
        {mapRouteMethod(routers, app)}
        <Redirect to='/home' />
      </Switch>
    </Router>
  );
}

export default RouterConfig
