import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const AddCourse = () => {
    let navigate= useNavigate();
    const[studentId, setStudentId] = useState('');
    const[course,setCourse]=useState({
        courseName :'',
        courseCode  :'',
        description: '',
    })
    
    const{courseName,courseCode,description}=course;
    
    const handleInputChange =(e)=>{
        setCourse({...course,[e.target.name] : e.target.value});
    }

// add course to students 
const addNewCourse = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`http://localhost:8080/add-course/${studentId}`, course);
        navigate("/view-students");
    } catch (error) {
        // Handle errors
        console.error("Error adding new course:", error);
        // Optionally, set an error state to display a message to the user
    }
};

  return (
    
    <div className='col-sm-8 py-2 px-5'>
        <h4 className='mt-1 mb-4'> Add new courses to students  </h4>
        <form onSubmit={(e)=> addNewCourse(e)}>

        <div className='input-group mb-3'>
                <label 
                className='input-group-text'
                htmlFor='studentId'>
                    Student ID
                </label>
                <input
                className='form-control col-sm-6'
                type='int'
                name='studentId'
                id='studentId'
                required
                value={studentId}
                onChange={(e)=>setStudentId(e.target.value)}
                />
            </div>

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
                onChange={(e)=>handleInputChange(e)}
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
                onChange={(e)=>handleInputChange(e)}
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
                onChange={(e)=>handleInputChange(e)}
                />
            </div>

            <div className='formSubmit'>
                    <button
                    type='submit'
                    className="btn btn-secondary btn-sm px-5 py-2 mt-2 mb-2">
                    Add
                    </button>
              
                    <Link 
                    to={"/view-students"}
                    type='submit'
                    className= "btn btn-secondary btn-sm px-5 py-2 mt-2 mb-2">
                    cancel
                    </Link>
            </div>

        </form>

        <div>
                <h4 className='mt-5'>View Course History</h4>
                <Link
                to={"/view-course-history"}
                >
                view course log
                </Link>
        </div>
    
    </div>

    
  )
}


export default AddCourse
