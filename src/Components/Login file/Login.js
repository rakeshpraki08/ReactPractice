import React, { Component } from "react";
import './login.css'




class Login extends Component{

    constructor(){
        super();
        this.state = {userNameState:"" , passWordState:""};
    }

    handleUserName(event){
        console.log(event.target.value)
        this.setState({userNameState:event.target.value});
    }

    handlepassword(event){
        this.setState({passWordState:event.target.value});
    }
    

    render(){
        
        return(
            <div>
            <h1>Login Page</h1>
                    <form onSubmit={()=>this.props.verify(this.state.userNameState, this.state.passWordState)}>
                        <input className="UserName" type = "text" placeholder="UserName" value = {this.state.userNameState} onChange={(e)=>this.handleUserName(e)} />
                        <input className="Password" type = "password" placeholder="Password" value = {this.state.passWordState} onChange={(e)=>this.handlepassword(e)} />
                        <input className="Submit"  type="submit"/>
                    </form>
            </div>        
        )
        
    }
}

export default Login; 