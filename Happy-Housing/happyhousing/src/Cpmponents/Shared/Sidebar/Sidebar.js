import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Sidebar.css';
// import firebaseConfig from '../Firebase/firebase.config';
import "firebase/auth";
import firebase from "firebase/app";
const Sidebar = () => {
  const [loggedInUser,setLoggedInUser]=useContext(userContext);
  const [isAdmin,setIsAdmin] = useState(false);
  const email = sessionStorage.getItem('email');
  useEffect(()=>{
    const url = `http://localhost:8000/isAdmin?email=${email}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> setIsAdmin(data));
},[]);

  const logout = () =>{
    firebase.auth().signOut().then(() => {
        const logoutUser = {
          name:'',
          email:'',
          isLoggedIn:false,
          photoURL:''
        }
        setLoggedInUser(logoutUser);
      }).catch((error) => {
        // An error happened.
      });
      sessionStorage.clear();
}
  
    return (
        <div className='dashboard-menu'>
          <Link to='/home' style={{textDecoration:'none',color:'white'}}> <p>Home</p></Link>         
          <Link to='/dashboard' style={{textDecoration:'none',color:'white'}}> <p>Orders</p></Link>
          <Link to='/addReview' style={{textDecoration:'none',color:'white'}}> <p>Give Feedback</p></Link>
          {isAdmin && <span>
          <Link to='/admin/addService' style={{textDecoration:'none',color:'white'}} ><p>Add Service</p></Link>
          <Link to='/admin/projects' style={{textDecoration:'none',color:'white'}} ><p>Add Project</p></Link>
          <Link to='/admin/addAdmin' style={{textDecoration:'none',color:'white'}} ><p>Manage Admin</p></Link>
          <Link to='/admin/manageOrders' style={{textDecoration:'none',color:'white'}} ><p>Manage Orders</p></Link>
          <Link to='/admin/readContact' style={{textDecoration:'none',color:'white'}} > <p>Contact Messages</p></Link>
          </span>}
          <p onClick={logout} style={{cursor:'pointer'}}>logout</p>
        </div>
    );
};

export default Sidebar;