// @flow
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './home.scss'

import { add, minus } from '@/redux/action'

import Testcomponent from '@/components/testcomponent/testcomponent'

class home extends Component {
  state = {
    name: 'gblTest'
  }
  componentWillMount() {
    // 初始化调用，只调用1次
    this.setState({
      name: 'gbl'
    })
  }
  componentDidMount() {
    console.log('渲染后调用，只调用一次', React.$util.getNowDate(0))
    React.$net('/test').then(res => {
      console.log('请求成功')
      this.testFunction()
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(`接收到新props时调用${nextProps}`)
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(`组件更新时调用${nextProps},${nextState}`)
  }
  componentDidUpdate() {
    console.log('更新完成后调用', this.props.location.query)
  }
  componentWillUnmount() {
    console.log('卸载时调用')
  }

  testFunction = () => {
    console.log(this.state.name)
  }
  consoleState = () => {
    console.log(this.props.counter)
  }

  render() {
    const { counter, add, minus } = this.props
    return (
      <div className="home">
        <div onClick={this.consoleState}>{counter}</div>
        <div onClick={add}>add</div>
        <div onClick={minus}>minus</div>
        <Testcomponent test="test" />
        <div>
          {
            this.props.routes.map(({path, Component, exact = true, child = []}, key) => {
              return <Route exact = { exact } path = { path } key = { key }
                render = { props => (<Component { ...props } routes = { child } />) }
              />
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({counter: state.counter}),
  {
     add, minus
  }
)(home)
