import React from 'react';
import './TestimonialCard.css';
const TestimoniaCard = (props) => {
    const {name,img,text} = props.data; 
 
    return (
        <div className='testimonial-box my-5'>
            <div>
                <img src={img} alt="" srcset=""/>
            </div>
                <h3>{name}</h3>
                <small>{text}</small>
        </div>
        
    );
};

export default TestimoniaCard;
