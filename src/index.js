import React from 'react'
import dva from 'dva'
import '@/style/index.scss'
import net from '@/utils/net-config'
import util from '@/utils/util'
import regexps from '@/utils/regexp'
import * as serviceWorker from '@/serviceWorker'
import reportWebVitals from './reportWebVitals'

React.$net = net
React.$util = util
React.$regexps = regexps

const app = dva()

app.model(require('@/models/index').default)
app.router(require('@/route').default)
app.start('#root')

serviceWorker.unregister()
reportWebVitals()
