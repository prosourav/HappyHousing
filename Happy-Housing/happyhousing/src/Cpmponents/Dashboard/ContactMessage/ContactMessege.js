import React, { useEffect, useState } from 'react';
import  Navbar  from './../../Shared/Navbar/Navbar';
import ContactReqBox from '../ContactReqBox/ContactReqBox';
import './ContactMessege.css';

const ContactMessege = () => {
    const [contactReq,setContactReq] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/readContactreq')
        .then(res=>res.json())
        .then(data=>setContactReq(data));
    },[contactReq]);
    return (
        <div>
        <Navbar></Navbar>
            <h1 className='mt-5 headingh1'>Your All Contact Request</h1>
            <div className='pt-2 d-flex flex-wrap justify-content-center mycontact'>
            {
                contactReq.map(data=> <ContactReqBox data={data}></ContactReqBox>)
            }
            </div>
        </div>
    );
};

export default ContactMessege;