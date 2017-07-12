import React, { Component } from 'react'
import firebaseApp from '../../firebase'
import {connect } from 'react-redux'


class App extends Component{

  signout = () =>{
    firebaseApp.auth().signOut()
  }
  render(){
    console.log(this.props.user);
    return (
      <div>
        <h1>App </h1>
        <button
          onClick={()=>this.signout()}
          className='btn btn-danger'>Sign Out</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    user: state.user.user
  }
}
export default connect(mapStateToProps)(App)
