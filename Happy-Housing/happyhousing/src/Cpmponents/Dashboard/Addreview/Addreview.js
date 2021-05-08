import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './Addreview.css';

const Addreview = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    

    console.log('image',loggedInUser.photoURL);
    const [review,setReview] = useState({
      text:''
    });
        
      
    
        const handleChange = (e) =>{ 
          const newreview = {...review};
          newreview[e.target.name] = e.target.value;
          setReview(newreview);
        }
        
        const handleSubmit = (e) =>{
          // e.preventDefault();
          const newreview = {...review}
          newreview.img = loggedInUser.photoURL;
          newreview.name = loggedInUser.name;
   
          const url = 'https://shrouded-caverns-99745.herokuapp.com/addreview';
          fetch(url,{
            method:'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body:JSON.stringify(newreview)
          })
          .then(res=> console.log('server side response : ',res));
          alert('review added'); 
        }

    return (
        <div className='row' style={{width:'99%'}}>
        <div className='col-md-3' style={{background:'rgb(65, 63, 100)', color:'white', height:'100vh'}}>
        <Sidebar/>
        </div>
        <div className='col-md-9'>
        <form onSubmit={handleSubmit} className='review-form'>
        <h1 className='text-center pb-5 '>Add review here</h1>         
         <textarea name="text" className="form-control mb-3" onChange={handleChange} id="" cols="30" rows="4" placeholder="feedback *"  required ></textarea>
         <input type='submit' disabled={review.text.trim()===''} className='submit'/>
         </form>
        </div>
       
        </div>
    );
};

export default Addreview;


