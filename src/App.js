import React from 'react';
import { Component } from 'react';
// import { ModalTitle } from 'react-bootstrap';
import './App.css';
import Login from './Components/Login file/Login';
import Main from './Components/next file/Main';
import Modal from 'react-modal/lib/components/Modal';

Modal.setAppElement('#root');

class App extends Component{

  constructor(){
    super();
    this.state = {isLoggedin:true}
  }

  verifyFunction(userName, password){
    
    console.log(userName , password );
    const user = {userName, password}
    if(user.userName==="rakesh" && user.password==="123")
      this.setState({isLoggedin:true});
    else 
      alert("UserName or Password is incorrect");
  
  }

  render(){
    return(
      <div className='app-div'>
        {
        this.state.isLoggedin ?
        <Main/>
        :
        <Login verify = {this.verifyFunction.bind(this)} />
        }
      </div>
      
    ) 
     
  }
}

export default App;




