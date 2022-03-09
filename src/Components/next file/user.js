import React, { Component }  from 'react';
import UserIndividual from "./userIndividual";
import './user.css'
import CardUser from './card';

class User extends Component{

    constructor(props){
        super();
        this.state={isclicked:[], open:false}
        // this.show=this.show.bind(this);

    }

    show(e){
        // e.preventDefault();
        // console.log("clicking", e);
        this.setState({open:true});

        if(!this.state.isclicked.includes(e))
            this.setState({isclicked:[...this.state.isclicked, e]})
        
    }
    

    render(){
        // console.log(this.props.userDataProps);
        // console.log(this.state.isclicked);
        return this.props.userDataProps && this.props.userDataProps.map((user)=>{
            
            return(
                <div key={user.id} className="user-div">
                    <UserIndividual singleUser = {user} BtnClicked = {this.show.bind(this)}/>
                    
                    {
                        (this.state.isclicked.includes(user.id)) && <CardUser openState = {this.state.open} closeState = {()=>this.setState({open:false})} userDetails = {user}/>
                    } 
                    
                </div>
            )
        });                   
    }
}

export default User;