import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceCard from '../ServiceCard/ServiceCard';
const Service = () => {
    const [ServiceAll,setServiceAll] = useState([]);
 
    useEffect(()=>{
        fetch('https://shrouded-caverns-99745.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServiceAll( data.length > 3 ? data.slice(data.length-3,data.length) : data));
    },[ServiceAll]);
    return (
        <div  className='container pb-5 marginleft'>
        <h1 className='my-5'>Services We Offer</h1>
        <div className='d-flex service-section'>
        {
            ServiceAll.map(data=><ServiceCard data={data} key={data._id}></ServiceCard>)
        }
        </div> 
        </div>
    );
};

export default Service;

