import { Component } from "react";
import UserIndividual from "./userIndividual";
import './user.css'

class User extends Component{

    constructor(props){
        super();

    }

    

    render(){
        // console.log(this.props.userDataProps);
        return this.props.userDataProps && this.props.userDataProps.map((user)=>{
            
            return(
                <div className="user-div">
                    <UserIndividual singleUser = {user}/>
                </div>
            )
        });
           
        
    }


}

export default User;