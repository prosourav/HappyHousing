
import React, { useContext, useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

import './Checkout.css';
import { userContext } from '../../../App';
import { useHistory } from 'react-router';

const CheckoutForm = ({handleOrder}) => {


  const [paymentStatus,setPaymentStatus ] = useState({
    success:'',
    payerror:''
  });
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const handleSubmit = async (event) => {
  
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }

    
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      const newpaymentStatus = {...paymentStatus};
      newpaymentStatus.payerror = error.type;
      newpaymentStatus.success = null;
      setPaymentStatus(newpaymentStatus);

    } else {
      const newpaymentStatus = {...paymentStatus};
      newpaymentStatus.success = 'Your payment successFull';
      newpaymentStatus.error = null;
      setPaymentStatus(newpaymentStatus);
      handleOrder(paymentMethod);
      history.push('/dashboard');
    }
  };


  return (
    <div>
    <form onSubmit={handleSubmit} style={{margin:'10% auto', width:'400px'}}>
    <CardElement/>
      
      <button type="submit" disabled={!stripe}  style={{marginRight:'330px'}} >
        Pay
      </button>
    </form>
    
    {paymentStatus.payerror ?
      <p style={{color:'red'}}>{paymentStatus.payerror}</p> :
      <p style={{color:'green'}}>{paymentStatus.success}</p>

    }
    </div>
  );
};
export default CheckoutForm;
