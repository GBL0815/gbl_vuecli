// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import App from '@/App'
import '@/style/index.scss'
import net from '@/utils/net-config'
import util from '@/utils/util'
import regexps from '@/utils/regexp'
import * as serviceWorker from '@/serviceWorker'

React.$net = net
React.$util = util
React.$regexps = regexps

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
