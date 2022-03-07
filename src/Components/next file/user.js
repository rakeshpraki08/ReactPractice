import React, { Component }  from 'react';
import UserIndividual from "./userIndividual";
import './user.css'
import CardUser from './card';

class User extends Component{

    constructor(props){
        super();
        this.state={isclicked:false}
        // this.show=this.show.bind(this);

    }

    show(e){
        // e.preventDefault();
        console.log("clicking");
        this.setState({isclicked:true})
        
    }
    

    render(){
        // console.log(this.props.userDataProps);
        return this.props.userDataProps && this.props.userDataProps.map((user)=>{
            
            return(
                <div className="user-div">
                    <UserIndividual singleUser = {user} BtnClicked = {this.show.bind(this)}/>
                    {
                 (this.state.isclicked) && <CardUser/>
                    } 
                    
                </div>
            )
        });                   
    }
}

export default User;