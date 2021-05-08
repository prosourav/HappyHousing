import React from 'react';
import './ProjectCard.css';
const ProjectCard = (props) => {
    const {img,name} = props.data;
  
    return (
        <div className=' col-md-4 col-sm-12 '>
        <div className= 'projects'>
              <img src={img} alt="" />
               <div className='pt-4'>
               <p>{name}</p>
               </div>
            </div>
        </div>
    );
};

export default ProjectCard;