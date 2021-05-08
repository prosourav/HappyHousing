import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
  const [loggedInUser,setLoggedInUser] = useContext(userContext);
  const loginUserName = sessionStorage.getItem('name');
    return (
        <div className='d-flex justify-content-between align-items-center Nav px-5'>
      <div>
      <h4 style={{fontWeight:'bold',fontStyle:'italic'}}>HappyHousing</h4>
      </div>
      <div className='d-flex justify-content-center item'>
      <Link to='/home'>   <a class="nav-link active mx-2 py-3" >Home </a></Link>
      <Link to='/home'>   <a class="nav-link active mx-2 py-3" >Services</a></Link>
      <Link to='/dashboard'>   <a class="nav-link active mx-2 py-3">Dashboard</a></Link>
      {!loginUserName ? 
        <Link to='/login' style={{background:'red',borderRadius:'5px'}} className="login px-3 py-3">   <a className="login px-3 py-3">Login</a></Link> 
        :         <a className="login px-3 py-3"  style={{background:'green',borderRadius:'5px'}}>{loginUserName}</a>
        }
      </div>
      
      
        </div>
    );
};

export default Navbar;

