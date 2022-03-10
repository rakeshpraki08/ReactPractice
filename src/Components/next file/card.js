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

    render(){
       
        console.log(this.props.userDetails);
        return(
            <div >

            
            <Modal
                isOpen = {this.props.openState}                
                onRequestClose = {this.props.closeState}
                className='modal'
                
            >
                <ModalTitle ><h1 className='h1css'>User Info</h1></ModalTitle>
                
                <div className='para'>
                    <div>
                    <img  alt = {this.props.userDetails.id} className ='imgModel' border='2px solid' width='200px' src={this.props.userDetails.picture}/>
                    </div>
                    <div className='bodydetails'>
                
                        <h3>
                            Mr/Ms : {this.props.userDetails.title}
                        </h3>
                        <h3>
                            FirstName : {this.props.userDetails.firstName}
                        </h3> 
                        <h3>
                            LastName : {this.props.userDetails.lastName}
                        </h3>
                        <h3>
                            UserId : {this.props.userDetails.id}
                        </h3>                   
                    
                    </div>                    
                    
                </div>

                <div className='BtnModalClass'>
                    <button className='btn' onClick={this.props.closeState}>Close</button>
                </div>
                
            </Modal>    
            </div>                  
        );
    }
}

export default CardUser;