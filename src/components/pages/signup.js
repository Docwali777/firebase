import React, { Component } from 'react'
import  firebaseApp from '../../firebase'

class SignUp extends Component{
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

firebaseApp.auth().createUserWithEmailAndPassword(email, password)
.catch(errors =>{
this.setState({errors})
})

}
  render(){
    console.log(this.state.errors);
    return (
    <form onSubmit={this.onSubmit}>
      <div className='form-inline'>
        <h2>Sign Up</h2>
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

{error.messagingSenderId}
        </div>

          <button className='btn btn-primary'>Submit</button>
        </div>

    </form>
    )
  }
}
export default SignUp
