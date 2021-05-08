import React, { useEffect, useState } from 'react';
import Team from './../../Home/Team/Team';
import './Maketeam.css'
const Maketeam = () => {
    const [team,setTeam] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/admin')
        .then(res=>res.json())
        .then(data=>setTeam(data.length > 2 ? data.slice(data.length-2,data.length) : data));
    },[team]);

    return (
        <div className='ourteam'>
        <h1 className='my-5'>Our Team</h1>
        <div className='row my-row' style={{margin:'0 12%'}}>

            {
                team.map(data=><Team data={data} key={data._id}></Team>)
            }
            <div className='team-about'>
            <h5> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus inventore maxime dolor sed quasi quidem et laudantium aspernatur voluptate cupiditate voluptates, officia ea, delectus iste assumenda, a unde temporibus. </h5>
            </div>
            </div>
            
        </div>
    );
};

export default Maketeam;