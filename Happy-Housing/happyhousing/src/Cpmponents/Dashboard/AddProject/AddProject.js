import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddProject.css'
const AddProject = () => {
    const [imgUrl,setImgUrl] = useState(null);

    const [project,setproject] = useState({name:''})

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
      const newProject = {...project};
      newProject[e.target.name] = e.target.value;
      setproject(newProject);
    }


    const handleSubmit = (e) =>{
    //   e.preventDefault();
      const newProject = {...project}
        newProject.img = imgUrl;
      const url = 'http://localhost:8000/addproject';
      fetch(url,{
        method:'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(newProject)
      })
    .then(res=> console.log('server side response : ',res));
      alert('project added');
      history.push('/home');
    }


    return (
        <div className='row' style={{width:'99%'}}>

            <div className='col-md-3' style={{background:'rgb(65, 63, 100)', color:'white', height:'100vh'}}>
            <Sidebar/> 
            </div>

            <div className='col-md-9'>
                <div className='form-box'>
                   <form onSubmit={handleSubmit}>
                   <h1 className='text-center pb-5 '>Add project here</h1>
                    <input onChange={handleUpload}  type="file"  required />
                    <input onChange={handleChange}  placeholder='*About project' name='name' type="text" required />
                    <input disabled={!imgUrl} type='submit' className='submit'/>
                    </form>
                </div>
            </div>
         
        </div>
    );
};

export default AddProject;
