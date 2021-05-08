import React from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css';
const ServiceCard = (props) => {
    const{name,text,img,cost,_id} = props.data;
    const history = useHistory();

    const handleOnclick = (x) =>{
        const url = `/service/${_id}`;
        history.push(url);
    }

    return (
        <div className='service-card'>
            <div className='pt-5'>
            <img src={img} alt="" style={{height:'80px'}}/> 
            </div> 
            <div className='p-2'> 
            <h3>{name}</h3>
            <h4>{cost}</h4>
            <p>{text}</p>
            </div> 
             <button className='mt-2' onClick={()=>handleOnclick(_id)} >Get Service</button>
        </div>
    );
};
export default ServiceCard;

