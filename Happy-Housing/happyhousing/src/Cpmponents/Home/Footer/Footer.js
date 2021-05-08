import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer container-fluid'>
        <div className='d-flex justify-content-center '>
    
        <div className='mx-4'>
        <h3>Services</h3>
        <p>Lorem ipsum dolor, sit amet consectet elit.</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet cons.</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mx-4'>
        <h3>Partners</h3>
        <p>Lorem ipsum dolor, sit amet consectet elit.</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet cons.</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>    
        <div className='mx-4'>
        <h3>Our Address</h3>
        <p>Lorem ipsum dolor, sit amet consectet elit.</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <div>
        
        </div>
        Call Now<br/>
        <button style={{background:'orange'}}>1234567891</button>
        </div>
        </div>
        <p className='text-center pt-5'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;