import React, { Component } from 'react'
import firebaseApp from '../../firebase'
import {Link } from 'react-router'

import { connect } from 'react-redux'

import { logUser } from '../../actions/index'


class SignIn extends Component{
constructor(props){
  super(props)
    this.state ={
      email: '',
      password: '',
      errors: {}
  }
}

onChange = (e) =>{
this.setState({[e.target.name]: e.target.value})
}

onSubmit =(e) =>{
e.preventDefault()
const { email, password} = this.state

firebaseApp.auth().signInWithEmailAndPassword(email, password)
.catch(errors =>{
this.setState({errors})

})
}
  render(){
  const { errors }  = this.state
    console.log(this.props.user);
    return (
    <form onSubmit={this.onSubmit}>
      <div className='form-inline'>
        <h2>Sign In</h2>

        <div className='form-group' >
          <label>Email</label>
          <input
            className='form-control'
              type='text'
              name='email'
              placeholder='email'
onChange={this.onChange}
          />
        </div>

        <div  className='form-group'>
          <label>Password</label>
                  <input
                    className='form-control'
                      type='password'
                      name='password'
                      placeholder='Passsword'
                      onChange={this.onChange}
                  />

        </div>

          <button className='btn btn-primary'>Submit</button>
        </div>
        {<span>{errors.messsage != 'undefined' ? errors.message :
        ''}</span>}
        <div><Link to={'/signup'}>If you are not a user. Sign up </Link></div>
    </form>
    )
  }
}

function mapStateToProps(state){
return{
  user: state.user
}
}

export default connect(mapStateToProps, {logUser})(SignIn)
