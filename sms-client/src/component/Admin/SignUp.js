
import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import LottieAnimation from './LottieAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {


let navigate= useNavigate();
const[Admin,setAdmin]=useState({
    firstName :'',
    lastName  :'',
    password: '',
    email: '',
  
   

});

const{firstName,lastName,email,password}=Admin;

const InputChange =(e)=>{
    setAdmin({...Admin,[e.target.name] : e.target.value});
};

// save Admin to database 
const saveAdmin=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/AdminRegister",Admin);
navigate("/Home");
};

  return (
<div>
    <div > 
        <h2 >Student Management System
        <FontAwesomeIcon className="smsIcon " icon={faBookOpen} /></h2>
    </div>
    

    <div className='AdminRegistrationForm  col-sm-3'>
        <h4 className='mt-1 mb-4'> Admin registreation </h4>
        <form onSubmit={(e)=> saveAdmin(e)}>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='firstName'>
                    First Name
                </label>
                <input
                className='form-control col-sm-6'
                type="text"
                name='firstName'
                id='firstName'
                required
                value={firstName}
                onChange={(e)=>InputChange(e)}
                />
            </div>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='lastName'>
                    Last Name
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='lastName'
                id='lastName'
                required
                value={lastName}
                onChange={(e)=>InputChange(e)}
                />
            </div>
          

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='email'>
                    Email   
                </label>
                <input
                className='form-control col-sm-10'
                type='text'
                name='email'
                id='email'
                required
                value={email}
                onChange={(e)=>InputChange(e)}
                />
            </div>

        
            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='password'>
                    password
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='password'
                htmlFor='password'
                id='password'
                required
                value={password}
                onChange={(e)=>InputChange(e)}
                />
            </div>
          
            <button 
                    type='submit'
                    className="btn-AdminRegister"
                   >
                    register
             </button>
          
        </form>

        <div className='signinLink'>
          <Link 
          className='signinLink'
          to={"/AdminSignin"}
         
          > Already have an account? </Link> 
        </div>
      
    </div>
    
    <div className='animation-container'>
    <LottieAnimation />
  </div>
</div>
  );

  
};

export default SignUp;