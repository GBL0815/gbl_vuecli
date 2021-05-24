import React, { PureComponent } from 'react'

class login extends PureComponent {
  componentDidMount() {}
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
