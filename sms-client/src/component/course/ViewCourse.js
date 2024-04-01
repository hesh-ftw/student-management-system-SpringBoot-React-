import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewCourse = () => {

    const [courses, setCourses] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/view-courses/${id}`);
                setCourses(response.data);

            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, [id]);

    return (
        <div>
            <div>
              
                <h4 className='mt-1 mb-4'>Course details of ID: {id}</h4>

                <ol>
                    {courses.map(course => (
                        
                        <li className='mb-4' key={course.id}>
                            <strong>Course Code:</strong> {course.courseCode},<br/>{' '}
                            <strong>Course Name:</strong> {course.courseName},<br/>{' '}  
                            <strong>Description:</strong> {course.description}
                            
                        </li>
                    ))}
                </ol>
            </div>

            <div>
                <Link 
                    to={"/view-students"}
                    type='submit'
                    className= "btn btn-secondary btn-sm px-4 py-2 mt-5">
                    cancel
                </Link>
            </div>
        </div>


    );
  
}

export default ViewCourse
