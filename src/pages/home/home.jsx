import React, { PureComponent } from 'react'
import { connect } from 'dva';
import './home.scss'

import Testcomponent from '@/components/testcomponent/testcomponent'

@connect(({ home, index }) => ({
  home,
  index,
}))
class Home extends PureComponent {
  state = {
    name: 'gblTest'
  }
  componentDidMount() {
    this.setState({
      name: 'gbl'
    })
    console.log('渲染后调用，只调用一次', React.$util.getNowDate(0))
    React.$net('/test').then(res => {
      console.log('请求成功')
    })
  }
  componentDidUpdate() {
    console.log('更新完成后调用', this.props.location.query)
  }
  componentWillUnmount() {
    console.log('卸载时调用')
  }

  consoleState = () => {
    const { dispatch, home } = this.props
    dispatch({type: 'home/test'})
    console.log(home)
  }

  render() {
    return (
      <div className="home">
        <div onClick={this.consoleState}>123</div>
        <Testcomponent test="test" callback={this.testFunction} />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Home
