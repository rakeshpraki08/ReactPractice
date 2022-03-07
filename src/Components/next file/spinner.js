import React, { Component }  from 'react';

import {Spinner} from "react-bootstrap";



class SpinnerLoading extends Component{

    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div>
            <Spinner  animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
            
        )
        
    }
}

export default SpinnerLoading;