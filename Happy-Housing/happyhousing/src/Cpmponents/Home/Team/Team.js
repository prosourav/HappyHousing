import React from 'react';
import './Team.css';
import whatsapp from  './../../../Image/whatsapp.png';
import facebook from  './../../../Image/facebook.png';

const Team = (props) => {
    const {name,photo,email} = props.data;
   
    return (
        <div>
           
       
        <div className='info d-flex justify-content-around align-items-center main'>
        <h3>{name}</h3> 
           <div>
           <small className='px-3'>Email:{email}</small> 
           <img src={whatsapp} className='px-2' alt="" style={{width:'35px', height:'25px'}}/>
           <img src={facebook} alt="" style={{width:'25px', height:'25px'}}/>
           </div>
        </div>
           <img src={photo} alt="" srcset=""/>
        </div>
            
     
    );
};

export default Team;


// <div>   
// <div className='info d-flex justify-content-around align-items-center'>
// <h3>Mr.Roddy</h3> 
//    <div>
//    <small className='px-3'>Email:rodderSmith@gmail.com</small> 
//    <img src={whatsapp} className='px-2' alt="" style={{width:'35px', height:'25px'}}/>
//    <img src={facebook} alt="" style={{width:'25px', height:'25px'}}/>
//    </div>
// </div>
//    <img src={team1} alt="" srcset=""/>
// </div>

// <div>
// <div className='info info d-flex justify-content-around align-items-center'>
// <h3>Ms.Helena </h3>
// <div>
// <small className='px-3'>Email:rodderSmith@gmail.com</small> 
// <img src={whatsapp} className='px-2' alt="" style={{width:'35px', height:'25px'}}/>
// <img src={facebook} alt="" style={{width:'25px', height:'25px'}}/>
// </div>
// </div>
//    <img src={team2} alt="" srcset=""/>
// </div> 
