import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import firebaseConfig from '../Firebase/firebase.config';
import "firebase/auth";
import firebase from "firebase/app";
import './SignIn.css';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
const SignIn = () => {
 
 const history = useHistory();

  const [registerUser, setRegisterUser] = useState({
    name:'',
    email:'',
    error:'',
    success:'',
  });
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = ( data, e) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
     .then((userCredential) => {  
      const user = userCredential.user;
      const newUser = {...registerUser}
      newUser.name = data.firstName +" "+ data.lastName;
      newUser.email = data.email;
      newUser.password = data.password;
      newUser.success ='Registration successfull';
      newUser.error = '';
      setRegisterUser(newUser);
      updateUserName(newUser.name);
      alert(newUser.success);
      history.push('/login');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const newuser = {...registerUser};
    newuser.error= errorMessage;
    setRegisterUser(newuser);
    alert(newuser.error);
  });
  e.target.reset();
    }
  const updateUserName = userName =>{
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: userName
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
     console.log(error);
    });
  }

    return (
        <div>
        <Navbar/>
        <div className='signin-box mb-5'>
        <h3>Create An Account</h3>
        <form onSubmit={handleSubmit(onSubmit)} className='signIn'>
        <input placeholder='Enter your first name'  {...register("firstName", { required: true, maxLength: 20 })} /> <br/>
        <input placeholder='Enter your last name'   {...register("lastName", { required: true, maxLength: 20 })} /> <br/>
        <input placeholder='Enter your email' type="email"  {...register('email',{ required:true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} /><br/>
        <input placeholder='Enter password' type="password"  {...register("password", {  required:true, pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{6,}$/ })} /> <br/>
        {errors.password && <small style={{color:'red'}}>Password must be contain charecter Uppercase lowerCase and 7 digits long <br/></small> }
        <button type="submit" style={{width:'100px', marginTop:'30px'}}>Submit</button>
      </form>
      <h6 className='pt-4'>Allready have an account?</h6>
      <Link to='/login'>LogIn</Link>

        </div>
        </div>
    );
};

export default SignIn;

