import React from 'react';
import  ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import styles from './styles/scss/styles.scss'

import Layout from './components/Layout.js'
import Home from './components/Home.js'
import GiftyApp from './components/GiftyApp.js'
import Login from './components/Login.js'
import NotFound from './components/NotFound.js'


let store = applyMiddleware(thunk)(createStore)(reducer);

  ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={GiftyApp}></IndexRoute>
        <Route path="app" component={GiftyApp}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="*" component={NotFound}></Route>
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));
