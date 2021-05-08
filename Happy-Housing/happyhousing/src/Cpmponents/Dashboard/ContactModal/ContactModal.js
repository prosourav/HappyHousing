import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
   width:'500px',
   height:'500px',
   top:'50%',
   left:'50%',
   transform : 'translate(-50%, -50%)',
   backgroundColor:'floralwhite'
  }
};

Modal.setAppElement('#root')

const ContactModal = ({modalIsOpen,closeModal,data}) => {
    
    return (
        <div>
            
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div >
            <div className='text-center'>
            <small className='mt-2'>Date: {data.time}</small>
             <h4 className='mt-3'>Sub: {data.subject}</h4>
            <h6 className='mt-3'>Email: {data.email}</h6>
            <p className='pt-5'> <h6>Messege:</h6> {data.messege}</p>
            <button onClick={closeModal} className='mt-5'>Close</button>
            </div>
          </div>
        </Modal>


        </div>
    );
};

export default ContactModal;
