import React from 'react';
import ContactModal from '../ContactModal/ContactModal';
import './ContactReqBox.css';
const ContactReqBox = (props) => {
    const {email,subject,messege,time} = props.data;

    // var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    
    return (
        <div className='my-contactBox'>
        <div style={{margin:'20% auto'}}>
            <small className='text-center'>Time:{time}</small>
            <h6>Email:<br/>{email}</h6>
            <p className='para'> <span>Sub: </span>{subject}</p> 
            <button onClick={openModal}>Details</button>  
            <ContactModal modalIsOpen={modalIsOpen} closeModal={closeModal} data={props.data}></ContactModal>
            </div>
        </div>
    );
};

export default ContactReqBox;


   
  