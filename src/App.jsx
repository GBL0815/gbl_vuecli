import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import routers from '@/route/index'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        {
          routers.map(({path, Component, exact = true, child = []}, key) => {
            return <Route exact = { exact } path = { path } key = { key }
              render = { props => (<Component { ...props } routes = { child } />) }
            />
          }) 
        }
        <Redirect from="/*" to="/home"></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default App