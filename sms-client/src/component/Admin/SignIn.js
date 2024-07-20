import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LottieAnimation from './LottieAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';



function SignIn() {

    let navigate= useNavigate();
    const[Admin,setAdmin]=useState({
        email: '',
        password: '',
    
    });
    
    const{email,password}=Admin;
    
    const InputChange =(e)=>{
        setAdmin({...Admin,[e.target.name] : e.target.value});
    };
    
    
      return (  
    <div> 
        <div > 
        <h2 >Student Management System
        <FontAwesomeIcon className="smsIcon " icon={faBookOpen} /></h2>
    </div>
      <div className='signinForm  col-sm-3'>
            <h4 className='mt-1 mb-4'> Admin Login </h4>
            <form>

                <div className='input-group mb-3'>
                    <label 
                    className='input-group-text'
                    htmlFor='email'>
                        Email   
                    </label>
                    <input
                    className='form-control col-sm-6'
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


                <div className='signinButtons'>

                
                <Link
                 to={"/AdminRegister"} 
                 className= " AdminSigninCancel ">
                 cancel
                
                </Link>


                  <button 
                        onSubmit={"/Home"}
                        type='submit'
                        className='AdminSignin'
                       >
                        Login
                 </button>


                 
                </div>
                
              
            </form>
 
        </div>
        
        <div className='animation-container'>
            <LottieAnimation />
        </div>

    </div>

      );
}

export default SignIn
