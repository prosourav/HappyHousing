import React, { useEffect, useState } from 'react';
import './Project.css'
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
    const [RecentProjects,setRecentProjects] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/projects')
        .then(res=>res.json())
        .then(data=>setRecentProjects(data.length > 3 ? data.slice(data.length-3,data.length) : data));
    },[RecentProjects]);
   
    // 
    return (
        <div className='container-fluid pt-4'>
        <h1 className='text-center pb-5 heading'>Our Recent Projects</h1>
        <div className='row projects-row card-row' style={{height:'520px'}} >
        {
            RecentProjects.map(data=> <ProjectCard data={data} key={data._id}></ProjectCard>)
        }
        </div>
        </div>
    );
};

export default Projects;
