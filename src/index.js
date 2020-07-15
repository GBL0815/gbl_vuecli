// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './route/'
import '@/style/index.scss';
import net from '@/utils/net-config'
import util from '@/utils/util'
import regexps from '@/utils/regexp'
import * as serviceWorker from '@/serviceWorker';

React.$net = net
React.$util = util
React.$regexps = regexps

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
}
render(Route)
serviceWorker.unregister();
