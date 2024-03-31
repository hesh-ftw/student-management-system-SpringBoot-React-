import React, { useState } from 'react'
import {Link} from "react-router-dom";

const AddCourse = () => {
    const[course,setCourse]=useState({
        courseName :'',
        courseCode  :'',
        description: '',
    })
    
    const{courseName,courseCode,description}=course;
    
    const handleinputChange =(e)=>{
        setCourse({...course,[e.targer.name] : e.target.value});
    }
  return (
    
    <div className='col-sm-8 py-2 px-5'>
        <h4 className='mt-1 mb-4'> Add new courses to students  </h4>
        <form>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='courseName'>
                    Course Name
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='courseName'
                id='courseName'
                required
                value={courseName}
                onChange={(e)=>handleinputChange}
                />
            </div>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='courseCode'>
                    Course Code
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='courseCode'
                id='courseCode'
                required
                value={courseCode}
                onChange={(e)=>handleinputChange}
                />
            </div>

            <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='description'>
                    Description
                </label>
                <input
                className='form-control col-sm-6'
                type='text'
                name='description'
                id='description'
                required
                value={description}
                onChange={(e)=>handleinputChange}
                />
            </div>

            <div className='formSubmit'>
                    <button
                    type='submit'
                    className="btn btn-secondary btn-sm px-5 py-2">
                    Add
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
  )
}

export default AddCourse
