import React, { PureComponent } from 'react'
import { withRouter } from 'dva/router'
import PropTypes from 'prop-types'

class testcomponent extends PureComponent {
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  linkLogin = () => {
    this.props.callback()
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
