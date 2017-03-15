import React from 'react';
import  ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import thunk from 'redux-thunk';

//Styles
import styles from './styles/scss/styles.scss'

//Components
import Layout from './components/Layout.js'
import Home from './components/Home.js'
import GiftyApp from './components/GiftyApp.js'
import GiftyForm from './components/gifty/GiftyForm.js'
import GiftyGenerated from './components/gifty/GiftyGenerated.js'
import Login from './components/Login.js'
import NotFound from './components/NotFound.js'

//Store
let store = applyMiddleware(thunk)(createStore)(reducers);

//Routing
ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={GiftyApp}></IndexRoute>
      <Route path="app" component={GiftyForm}></Route>
        <IndexRoute component={GiftyForm}></IndexRoute>
        <Route path="generated" component={GiftyGenerated}></Route>
      <Route path="login" component={Login}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
