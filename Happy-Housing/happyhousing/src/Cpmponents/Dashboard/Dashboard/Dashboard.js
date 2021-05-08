import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderItem from '../OrderItem/OrderItem';

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const userEmail = sessionStorage.getItem('email');
        // console.log(userEmail);
        const url = 'https://shrouded-caverns-99745.herokuapp.com/orders';
        fetch(url,{
            method:'POST',
            headers: {'content-type' : 'application/json'},
            body:JSON.stringify({email:userEmail})
        })
        .then(res=>res.json())
        .then(data=>setOrders(data));
    },[orders]);

    return (
        <div className='row w-100'>
        <div className="col-md-3" style={{backgroundColor:'rgb(65, 63, 100)', color:'white',height:'100%',paddingBottom:'80px'}}>
        <Sidebar style={{height:'100%'}}></Sidebar>
        </div>
        <div className="col-md-9 mt-5">
        <h1>Your Orders</h1>
        {
            orders.map(orders=><OrderItem orders={orders}></OrderItem>)
        }
        </div>
        
        </div>
    );
};

export default Dashboard;