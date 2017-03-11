import React from 'react';
import  ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import styles from './styles/scss/styles.scss'

import Layout from './components/Layout.js'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>

    </Route>
  </Router>), document.getElementById('app'));
