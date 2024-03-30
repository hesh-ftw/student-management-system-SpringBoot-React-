import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";


const AddStudent = () => {


let navigate= useNavigate();
const[student,setStudent]=useState({
    firstName :'',
    lastName  :'',
    address: '',
    dob: '',
    email: '',
    degree :'',
    course :''
});

const{firstName,lastName,address,dob,email,degree,course}=student;

const handleInputChange =(e)=>{
    setStudent({...student,[e.target.name] : e.target.value});
};

// save student to database 
const saveStudent=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/students/add",student);
navigate("/view-students");
};


  return (
    <div className='col-sm-8 py-2 px-5'>
        <form onSubmit={(e)=> saveStudent(e)}>

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
                onChange={(e)=>handleInputChange(e)}
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
                onChange={(e)=>handleInputChange(e)}
                />
            </div>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='address'>
                    Address
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='address'
                id='address'
                required
                value={address}
                onChange={(e)=>handleInputChange(e)}
                />
            </div>
            
            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='dob'>
                    Date of birth
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='dob'
                id='dob'
                required
                value={dob}
                onChange={(e)=>handleInputChange(e)}
                />
            </div>

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
                onChange={(e)=>handleInputChange(e)}
                />
            </div>

        
            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='degree'>
                    Degree
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='degree'
                htmlFor='degree'
                id='degree'
                required
                value={degree}
                onChange={(e)=>handleInputChange(e)}
                />
            </div>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='course'>
                    Course
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='course'
                htmlFor='course'
                id='course'
                required
                value={course}
                onChange={(e)=>handleInputChange(e)}
                />
            </div>

        
                <div className='formSubmit'>
                    <button
                    type='submit'
                    className="btn btn-secondary btn-sm px-5 py-2">
                    Save
                    </button>
              
                    <Link 
                    to={"/view-students"}
                    type='submit'
                    className= "btn btn-secondary btn-sm px-5 py-2">
                    cancel
                    </Link>
                </div>

        </form>
      
    </div>
  );
};

export default AddStudent;
