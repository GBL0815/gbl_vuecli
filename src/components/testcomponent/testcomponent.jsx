import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import PropTypes from 'prop-types'

class testcomponent extends Component {
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  linkLogin = () => {
    this.props.history.push('/home/login')
  }

  render() {
    return (
      <div className="testcomponent">
        <span onClick={ this.linkLogin }>{this.props.test}</span>
      </div>
    )
  }
}

testcomponent.propTypes = {
  test: PropTypes.string
}

export default withRouter(testcomponent)
