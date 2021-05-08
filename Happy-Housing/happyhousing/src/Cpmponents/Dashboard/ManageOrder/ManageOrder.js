import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './ManageOrder.css';

const ManageOrder = () => {
  let num=1;
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const userEmail = sessionStorage.getItem('email');
    console.log(userEmail);
    const url = 'http://localhost:8000/orders';
    fetch(url,{
        method:'POST',
        headers: {'content-type' : 'application/json'},
        body:JSON.stringify({email:userEmail})
    })
    .then(res=>res.json())
    .then(data=>setOrders(data));
},[orders]);


    const handleChange = (e,data) =>{
        const status = data;
        const id = e;
        const newstatus = {id,status} 
        const url = `http://localhost:8000/update/${id}`;
        fetch(url,{
          method:'PATCH',
          headers:{'Content-type' : 'application/json'},
          body:JSON.stringify(newstatus)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('updated');
        })
    }


    return (
         
        <div className='row w-100'>
        <div className="col-md-2 nav-box" style={{backgroundColor:'rgb(65, 63, 100)', color:'white',height:'100vh'}}>
        <Sidebar></Sidebar>
        </div>

        <div className="col-md-10 mt-1">
        <h1 className='my-5'>Your  All Orders</h1>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">OrderId</th>
      <th scope="col">User Name</th>
      <th scope="col">Service</th>
      <th scope="col">Booking Date</th>
      <th scope="col">Service Date</th>
      <th scope="col">Contact No</th>
      <th scope="col">OrderStatus</th>
      
    </tr>
  </thead>
  <tbody>
        {
            orders.map(data=><tr>
                <td>{num++}</td>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.serviceName}</td>
                <td>{data.time}</td>
                <td>{data.date}</td>
                <td>{data.Contact}</td>
                <td>
                <select name = "dropdown" onChange={(e)=>handleChange(data._id,e.target.value)} style={{background: (data.status==='Pending' && 'red' )
                 ||(data.status==='Running' && 'blue' ) || (data.status==='Complete' && 'green'),color:'white', padding:'2px'}} >
                    <option value = "Pending"  className='bg-danger text-light'>{data.status}</option>
                    <option value = "Running" className='bg-primary text-light' >Running</option>
                    <option value = "Complete" className='bg-success text-light'>Complete</option>
                </select>
                </td>
                </tr>)
        }
  </tbody>
</table>
        
        </div>

        </div>
    );
};

export default ManageOrder;