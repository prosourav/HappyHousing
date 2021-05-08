import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { userContext } from '../../../App';
import  Navbar  from '../../Shared/Navbar/Navbar';

const stripePromise = loadStripe( "pk_test_51ImuYJSJ7m5JX0JeBoQtfd4jzogwcRns4ySIUbasOFbBVxXNUc7dtAQSPwU1kIBS6lwoQp1bh9zPg6AnvB1VJA2700MPKHWjtI");

const Checkout = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const [service, setService] = useState({});
    const [hidediv,setHideDiv] = useState(false);
    const [order,setOrder] = useState({});
    const {Id} = useParams();
 
  
    useEffect(()=>{
        const url = `http://localhost:8000/checkout?Id=${Id}`
        fetch(url)
        .then(res=> res.json())
        .then(data=>setService(data));
    },[service]);
    const hideDivition =(e)=>{
      e.preventDefault();
        setHideDiv(true);
    }
   const handleChange= (e) =>{
       const newOrder = {...order}
       newOrder[e.target.name] = e.target.value;
       setOrder(newOrder);
   }
 const handleOrder = (orderPayment)=>{

     const neworder = {...order}
        neworder.serviceName = service.serviceName;
        neworder.name = loggedInUser.name || sessionStorage.getItem('name');
        neworder.email = loggedInUser.email || sessionStorage.getItem('email');
        neworder.Cost = service.cost;
        neworder.photo = service.img;
        neworder.paymentId = orderPayment.id;
        neworder.lastdigits = orderPayment.card.last4;
        neworder.time = new Date().toLocaleDateString();
        neworder.status = 'Pending';
        console.log('newservice: ',service);

        const url = 'https://shrouded-caverns-99745.herokuapp.com/order';
        fetch(url,{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(neworder)
      })
    .then(res=> console.log('server side response : ',res));
      alert('Order successfull');
 } 

    return (
        <div>
        <Navbar/>
           <form onSubmit={hideDivition} style={{width:'45%', margin:'10% auto', display: hidediv ? 'none' : 'block'}}>
                <h4 className='my-5'>You booked <span style={{color:'red'}}>{service.serviceName}</span> </h4>
                <input type="text" name='address'  onChange={handleChange} required placeholder= 'Enter your address here'/>
                <input type="phone" name="Contact" onChange={handleChange} required  placeholder='Contact Number' />
                <input type='date' name='date' onChange={handleChange} required placeholder='Select date here'/>
                <input type='submit' />
           </form>
          <div style={{display: !hidediv ? 'none' : 'block'}}>
           <Elements stripe={stripePromise} >
           <CheckoutForm handleOrder={handleOrder}></CheckoutForm>
           </Elements>
           </div>
        </div>
    );
};

export default Checkout;

