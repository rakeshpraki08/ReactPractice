import React, { Component } from "react";
import './login.css'




class Login extends Component{

    constructor(){
        super();
        this.state = {userNameState:"" , passWordState:""};
    }

    handleUserName(event){
        // console.log("inside Function", this.state.userNameState)
        this.setState({userNameState:event.target.value});
    }

    handlepassword(event){
        this.setState({passWordState:event.target.value});
    }
    

    render(){
        // console.log("after render",this.state.userNameState)
        return(
            <div className="login-div">
            <h1 className="login-h1">Login Page</h1>
                    <form>
                        <input className="UserName" type = "text" placeholder="UserName" value = {this.state.userNameState} onChange={(e)=>this.handleUserName(e)} />
                        <input className="Password" type = "password" placeholder="Password" value = {this.state.passWordState} onChange={(e)=>this.handlepassword(e)} />
                        <input onClick={()=>this.props.verify(this.state.userNameState, this.state.passWordState)} className="Submit"  type="submit"/>
                    </form>
            </div>        
        )
        
    }
}

export default Login; 