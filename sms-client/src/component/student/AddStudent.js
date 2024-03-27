import React, { useState } from 'react'
import {Link} from "react-router-dom";

const AddStudent = () => {

const[student,setStudents]=useState({
    firstName :'',
    lastName  :'',
    email :'',
    department :''

})

const{firstName,lastName,email,department}=student;

const handleinputChange =(e)=>{
    setStudents({...student,[e.targer.name] : e.target.value});
}

  return (
    <div className='col-sm-8 py-2 px-5 '>
        <form>
            <div className='input-group mb-5'>
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

            <div className='input-group mb-5'>
                <label 
                className='input-group-text'
                htmlFor='lastname'>
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

            <div className='input-group mb-5'>
                <label 
                className='input-group-text'
                htmlFor='email'>
                    Email
                </label>
                <input
                className='form-control col-sm-6'
                type='email'
                name='email'
                id='email'
                required
                value={email}
                onChange={(e)=>handleinputChange}
                />
            </div>

        
            <div className='input-group mb-5'>
                <label 
                className='input-group-text'
                htmlFor='department'>
                    Department
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='department'
                id='department'
                required
                value={department}
                onChange={(e)=>handleinputChange}
                />
            </div>

        <div>  
            <div className='col-sm-2'>
                <button
                type='submit'
                className='btn btn-outline-wearing btn-lg'>
                Save
                </button>
            </div>

            <div className='col-sm-2'>
                <Link 
                to={"/view-students"}
                type='submit'
                className= "btn btn-outline-wearing btn-lg">
                cancel
                </Link>
            </div>
           
         </div>  

        </form>
      
    </div>
  )
}

export default AddStudent
