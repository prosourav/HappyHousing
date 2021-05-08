import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import TeamTable from '../TeamTable/TeamTable';

const AddToTeam = () => {
  

    const [imgUrl,setImgUrl] = useState(null);

    const [member,setMemeber] = useState({})

    const handleUpload = (e) =>{
        const imageData = new FormData();
        imageData.set('key','8fa96cff7d7a3e5dd21028613fff8de4');
        imageData.append('image', e.target.files[0]);
        
         axios.post("https://api.imgbb.com/1/upload", imageData )
          .then(response => {
            setImgUrl(response.data.data.display_url);
          })
          .catch(error => {
            alert("error :",error);
          });
    }

    const handleChange = (e) =>{
      member[e.target.name] = e.target.value;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newmember = {...member}
              newmember.photo = imgUrl;
            
              const url = 'http://localhost:8000/addmember';
      fetch(url,{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(newmember)
      })
    .then(res=> console.log('server side response : ',res));
      alert('Admin added');

    }

    return (
        <div className='row' style={{width:'100%'}}>
        <div className='col-md-2' style={{background:'rgb(65, 63, 100)', color:'white', height:'100vh'}}>
        <Sidebar/>
        </div>
        <div className='col-md-5'>
        <div>
        <form onSubmit={handleSubmit} className='review-form' style={{width:'100%'}}>
        <h1 className='text-center pb-2 '>Add Team Member Here</h1>  
        <input onChange={handleUpload} type="file"  required />       
        <input onChange={handleChange} placeholder='*Enter Name' name='name' type="text" required />
        <input onChange={handleChange} placeholder='*Enter Email' name='email' type="email" required />
         <input type='submit' disabled={!imgUrl} className='submit'/>
         </form>
         </div>
        </div>
        <div className='col-md-4 mt-5' >
        <TeamTable></TeamTable>
        </div>
       
      
          
        </div>
    );
};

export default AddToTeam;