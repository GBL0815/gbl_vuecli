// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class testcomponent extends Component {
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="testcomponent">
        <span>{this.props.test}</span>
      </div>
    )
  }
}

testcomponent.propTypes = {
  test: PropTypes.string
}

export default testcomponent;
