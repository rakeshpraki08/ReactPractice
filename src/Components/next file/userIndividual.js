import React, { Component }  from 'react';

import './userIndividual.css'

class UserIndividual extends Component{
    constructor(props){
        super();
        
    }

    

    render(){
        const firstName = this.props.singleUser.firstName;
        const secondName = this.props.singleUser.secondName;
        const title = this.props.singleUser.title;
        const picture = this.props.singleUser.picture;
        const fullName = firstName+" "+secondName;
        // console.log(fullName);
        
        return(
            <div className="pic-div">
                <button className="individual_btn" onClick={(e)=>this.props.BtnClicked(this.props.singleUser.id)} >
                <img width="200" className="pic-img" src={picture} alt="img"/>      
                <h1 className="name">{title} {fullName}</h1> 
                </button>    
                            
            </div>
        
        )   
        
    } 

}

export default UserIndividual;