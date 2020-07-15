// @flow
import React, { Component } from 'react'
import './home.scss'

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
    console.log('更新完成后调用')
  }
  componentWillUnmount() {
    console.log('卸载时调用')
  }

  testFunction = () => {
    console.log(this.state.name)
  }

  render() {
    return (
      <div className="home">
        <span>testtest</span>
      </div>
    )
  }
}

export default home;
