import React, { useEffect, useState } from 'react';

const TeamTable = () => {
    let num = 1;

    const [team,setTeam] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/admin')
        .then(res=>res.json())
        .then(data=>setTeam(data));
    },[team]);

    const handleDelete = (id) =>{
        const url = `http://localhost:8000/deleteadmin/${id}`;
        fetch(url,{
            method:'DELETE'
        })
      .then(res=>res.json())
      .then(result=>{
        console.log('success',result);
      })
    }

    return (
        <div>
        <h4 className='text-center mb-4'>Admin List</h4>
        <table class="table table-dark w-60">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
         {
             team.map(data=><tr>
                <td>{num++}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td><button className='btn-danger' onClick={()=>handleDelete(data._id)}>Delete</button></td>
                </tr>)
         }
        </tbody>
      </table>
        </div>
    );
};

export default TeamTable;