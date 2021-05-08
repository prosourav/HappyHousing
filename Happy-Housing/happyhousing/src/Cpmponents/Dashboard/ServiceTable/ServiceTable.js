import React, { useEffect, useState } from 'react';

const ServiceTable = () => {
    let num = 1;

    const [ServiceAll,setServiceAll] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/services')
        .then(res=>res.json())
        .then(data=>setServiceAll(data));
    },[ServiceAll]);
    console.log('data',ServiceAll);
    const handleDelete=(id)=>{
        const url = `http://localhost:8000/servicedelete/${id}`;
        fetch(url,{
            method:'DELETE'
        })
      .then(res=>res.json())
      .then(result=>{
        console.log('success',result);
      })
    };

    return (
        <div>
            <h4 className='text-center mb-4'>Your Services</h4>
            <table class="table table-dark w-60">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Cost</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             {
                 ServiceAll.map(data=><tr>
                    <td>{num++}</td>
                    <td>{data.serviceName}</td>
                    <td>{data.cost}</td>
                    <td><button className='btn-danger' onClick={()=>handleDelete(data._id)}>Delete</button></td>
                    </tr>)
             }
            </tbody>
          </table>
        </div>
    );
};

export default ServiceTable;

// <tr>
// <th scope="row">1</th>
// <td>{ServiceAll.name}</td>
// <td>{ServiceAll.cost}</td>
// <td><button className='btn-danger'>Delete</button></td>
// </tr>
// <tr>
// <th scope="row">2</th>
// <td>Jacob</td>
// <td>Thornton</td>
// <td>@fat</td>
// </tr>
// <tr>
// <th scope="row">3</th>
// <td>Larry</td>
// <td>the Bird</td>
// <td>@twitter</td>
// </tr>