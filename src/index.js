import React, { Component } from 'react'
import { render } from 'react-dom'

import { Router, Route, browserHistory} from 'react-router'

import App from './components/pages/app'
import SignIn from './components/pages/signin'
import SignUp from './components/pages/signup'

import firebaseApp from './firebase'


const mountNode = document.getElementById('wali')

render(
<Router path='/' history={browserHistory}>
<Route path='/' component={App} />
<Route path='/app' component={App} />
<Route path='/signin' component={SignIn} />
<Route path='/signup' component={SignUp} />
</Router>
  , mountNode)
