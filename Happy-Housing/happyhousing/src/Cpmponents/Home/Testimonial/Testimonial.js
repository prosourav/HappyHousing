import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import TestimoniaCard from '../TestimonialCard/TestimoniaCard';



const Testimonial = () => {
    const [reviews,setreviews] = useState([])
    useEffect(()=>{
        fetch('https://shrouded-caverns-99745.herokuapp.com/reveiws')
        .then(res=>res.json())
        .then(data=>setreviews( data.length > 4 ? data.slice(data.length-4,data.length) : data));
    },[reviews]);
//  need to add dependencies
    return (
        <div className='reviews margin'>
            <h1 className='py-5'>Testimonial</h1>
            <div className='d-flex justify-content-center testimonial-section'>
            {
                reviews.map(data=> <TestimoniaCard data={data} key={data._id}></TestimoniaCard>)
            }
            
            </div>
        </div>
    );
};

export default Testimonial;

