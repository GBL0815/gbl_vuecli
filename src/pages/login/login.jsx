import React, { Component } from 'react'

class login extends Component {
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  linkHome = () => {
    this.props.history.push({ pathname: '/home', query: { test: 'tessst' } })
  }

  render() {
    return (
      <div className="login">
        <span onClick={ this.linkHome }>login</span>
      </div>
    )
  }
}

export default login
