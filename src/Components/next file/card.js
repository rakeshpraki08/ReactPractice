import {Component } from 'react';
import * as React from 'react';
import Modal from 'react-modal/lib/components/Modal';
// import Modal from 'react-modal';
import { ModalTitle } from 'react-bootstrap';
import './card.css';
// import { Button } from 'bootstrap';
// import { Button } from 'bootstrap';


class CardUser extends Component{

    constructor(props){

        super();
        this.state={modalState:false}
    }

    // stateChangeModal(a){
    //     const b = a;
    //     (this.setState({modalState:b}));
    // }

    render(){
        // this.setState({modalState:this.props.openState})
        console.log(this.props.openState);
        return(
            <div>

            
            <Modal
                // isOpen = {()=>this.stateChangeModal(this.props.openState)} 
                isOpen = {this.props.openState}
                
                // shouldCloseOnOverlayClick = {false}
                // onRequestClose = {()=>this.stateChange(false)}
                
            >
                <ModalTitle><h1>Modal Title</h1></ModalTitle>
                <p>Modal body</p>   
                <div className='BtnModalClass'>
                    <button onClick={this.props.closeState}>Close</button>
                </div>
                
            </Modal>    
            </div>                  
        );
    }
}

export default CardUser;