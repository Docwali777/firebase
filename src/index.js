import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'

import { Router, Route, browserHistory} from 'react-router'

import App from './components/pages/app'
import SignIn from './components/pages/signin'
import SignUp from './components/pages/signup'

import rootreducer from './reducers/rootreducer'
const store = createStore(
  rootreducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

import {logUser} from './actions/index'

import firebaseApp from './firebase'

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    console.log('user has signed in');
    browserHistory.push('/app')
    const {email} = user
    store.dispatch(logUser(email))
  }
  else {
    console.log('user not signed or signout');
    browserHistory.replace('/signin')
  }
})



const mountNode = document.getElementById('wali')

render(
<Provider store={store}>
  <Router path='/' history={browserHistory}>
  <Route path='/' component={App} />
  <Route path='/app' component={App} />
  <Route path='/signin' component={SignIn} />
  <Route path='/signup' component={SignUp} />
  </Router>
</Provider>
  , mountNode)
