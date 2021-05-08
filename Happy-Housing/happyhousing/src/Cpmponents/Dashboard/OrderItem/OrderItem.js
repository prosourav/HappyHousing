import React from 'react';
import './OrderItem.css';
const OrderItem = (props) => {
const {photo,serviceName,date,time,status,Cost,_id} = props.orders;

     return (
        <div  className='mt-5 p-5 d-flex align-items-center justify-content-between box' style={{background:'lightgoldenrodyellow'}}>
            <div>
            <img src={photo} className='pt-2' alt="" style={{height:'40px'}}/>
            <p>Service Name: {serviceName} </p>
            <h6>Cost:{Cost}</h6>
            <small style={{color:'red'}}>Service Date:{date}</small>  <br/>          
            <small style={{color:'green'}}>Oreder placed: {time}</small>
            </div>
            <div>
            <h5 style={{background:'goldenrod',padding:'5px',borderRadius:'3px'}}>Status:{status}</h5>
            <small>OredrId:{_id}</small>
            </div>
        </div>
    );
};

export default OrderItem;
