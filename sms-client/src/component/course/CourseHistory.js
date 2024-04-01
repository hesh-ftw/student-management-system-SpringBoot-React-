import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CourseHistory = () => {
    const [courses, setCourses]= useState([]);
    useEffect(()=>{
        loadCourses();
    },[]);

    //create the function to load data from the database
    const loadCourses = async () => {
        try {
            const response = await axios.get("http://localhost:8080/view-courses");
            setCourses(response.data);
        } catch (error) {
            console.error("Error loading courses:", error);
            
        }
    };



  return (
    <section>
      <h4 className='mt-1 mb-4'> student's course history  </h4>
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>ID</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Description</th>
            </tr>
        </thead>

        <tbody className='text-center'>
            {
            

                courses.map((course)=>(
                <tr key={course.id}>
                    <th scope="row">{course.studentId}</th>
                   <td>{course.courseCode}</td>
                   <td>{course.courseName}</td>
                   <td>{course.description}</td>     
                </tr>
                ))
            }
            
        </tbody>
      </table>
    </section>
  )
}

export default CourseHistory
