import React, { useContext, useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../Firebase/firebase.config';
import "firebase/auth";
import firebase from "firebase/app";
import google from "./../../../src/Image/google.png";
import { userContext } from '../../App';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  
    const { register, formState: { errors }, handleSubmit } = useForm();
    const  [loggedInUser,setLoggedInUser] = useContext(userContext);
   
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit =(data , e) =>{
    console.log(data);
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        
        const {displayName,email} = userCredential.user;
        const newUser = {...loggedInUser};
        newUser.name = displayName;
        newUser.email = email;
        newUser.isLoggedIn = true;
        setLoggedInUser(newUser);
        sessionStorage.setItem('name',newUser.name);
        sessionStorage.setItem('email',newUser.email);
        setUserToken();
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        
      })
      e.target.reset();
    }

    const setUserToken = () =>{
     
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {

        sessionStorage.setItem('token',idToken);
      }).catch(function(error) {
        // Handle error
      });
    }

    const handleGoogleLogin = () =>{
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const credential = result.credential;
    console.log(result.user);
    const token = credential.accessToken;
 
    const {displayName,email,photoURL} = result.user;
    const newUser = {...loggedInUser};
      newUser.name = displayName;
      newUser.email = email;
      newUser.isLoggedIn = true;
      newUser.photoURL = photoURL;
      setLoggedInUser(newUser);
      sessionStorage.setItem('name',newUser.name);
      sessionStorage.setItem('email',newUser.email);
      setUserToken();
      history.replace(from);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = error.credential;
    alert(errorMessage);
  });
    }
    
    return (
        <div>
        <Navbar/>
        <div className='login-box'>
        <h3>Log-In</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='signIn'>
  
        <input placeholder='Enter your email' type="email"  {...register('email',{ required:true,
         pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} /><br/> 
        <input placeholder='Enter password' type="password"  {...register("password", {  required:true, pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{6,}$/ })} /> <br/>
        <input type="submit" value='submit'  style={{backgroundColor:'rgb(65, 63, 100)',color:'white'}}/>

      </form>
      <h6 className='pt-4'>New User?</h6>
      <Link to='/signup'>SignUp</Link>
        </div>
        <h5>Or</h5><br/>
        <button onClick={handleGoogleLogin} style={{borderRadius:'20px',height:'70px', width:'22rem', marginBottom:'2%'}}>
        <img  src={google} alt="" style={{ width:'34px', marginRight:'15px'}}/>Continue With Google</button>

        </div>
    );
};

export default Login;
