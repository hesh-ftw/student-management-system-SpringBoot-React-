import React, { useState } from 'react'
import {Link} from "react-router-dom";

const AddStudent = () => {

const[student,setStudents]=useState({
    firstName :'',
    lastName  :'',
    address: '',
    dob: '',
    email: '',
    degree :'',
    course :''
})

const{firstName,lastName,address,dob,email,degree,course}=student;

const handleinputChange =(e)=>{
    setStudents({...student,[e.targer.name] : e.target.value});
}

  return (
    <div className='col-sm-8 py-2 px-5'>
        <form>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='firstName'>
                    First Name
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='firstName'
                id='firstName'
                required
                value={firstName}
                onChange={(e)=>handleinputChange}
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
                onChange={(e)=>handleinputChange}
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
                onChange={(e)=>handleinputChange}
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
                onChange={(e)=>handleinputChange}
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
                onChange={(e)=>handleinputChange}
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
                onChange={(e)=>handleinputChange}
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
                onChange={(e)=>handleinputChange}
                />
            </div>

        <div className='Add-btn'>

            <div className='row mb-3'>  
                <div className='col-sm-2'>
                    <button
                    type='submit'
                    className='btn btn-outline btn-lg border-primary border-custom-btn'>
                    Save
                    </button>
                </div>

                <div className='col-sm-2'>
                    <Link 
                    to={"/view-students"}
                    type='submit'
                    className= "btn btn-outline btn-lg border-primary border-custom-btn">
                    cancel
                    </Link>
                </div>
            
            </div>  
        </div>


        </form>
      
    </div>
  )
}

export default AddStudent
