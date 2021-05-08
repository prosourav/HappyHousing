import React, { useState } from 'react';
import './AddService.css';
import axios from "axios";
import Sidebar from './../../Shared/Sidebar/Sidebar';
import ServiceTable from '../ServiceTable/ServiceTable';
import { useHistory } from 'react-router';
const AddService = () => {
    const [imgUrl,setImgUrl] = useState(null);

    const [service,setService] = useState({})
    const history = useHistory();
  
    
  const handleUpload = (e) =>{

    const imageData = new FormData();
    imageData.set('key','8fa96cff7d7a3e5dd21028613fff8de4');
    imageData.append('image', e.target.files[0]);
    
     axios.post("https://api.imgbb.com/1/upload", imageData )
      .then(response => {
        setImgUrl(response.data.data.display_url);
      })
      .catch(error => {
        console.log("error",error);
      });
  }

    const handleChange = (e) =>{ 
      const newservice = {...service};
      newservice[e.target.name] = e.target.value;
      setService(newservice);
    }


    const handleSubmit = (e) =>{
      // e.preventDefault();
      const newservice = {...service}
        newservice.img = imgUrl;
      const url = 'https://shrouded-caverns-99745.herokuapp.com/addservice';
      fetch(url,{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(newservice)
      })
    .then(res=> console.log('server side response : ',res));
      alert('service added');
      history.push('/dashboard');
    }


    return (
        <div className='row' style={{width:'99%'}}>

            <div className='col-md-3' style={{background:'rgb(65, 63, 100)', color:'white', height:'110vh'}}>
            <Sidebar/> 
            </div>

            <div className='col-md-9'>
                <div className='form-box'>
                   <form onSubmit={handleSubmit}>
                   <h1 className='text-center pb-4 '>Add Service here</h1>
                    <input onChange={handleUpload}  type="file"  required />
                    <input onChange={handleChange} placeholder='*Service Name' name='serviceName' type="text" required />
                    <input onChange={handleChange} placeholder='*Service Cost' name='cost' type="text" required />
                    <input onChange={handleChange} name='text' placeholder='*description about service' type="text" required />
                    <input type='submit' disabled={!imgUrl} className='submit'/>
                    </form>
                </div>
                <ServiceTable/>
            </div>
         
        </div>
    );
};

export default AddService;






