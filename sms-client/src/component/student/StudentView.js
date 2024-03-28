import React, { useEffect, useState } from 'react'
import axios from 'axios';

const StudentView = () => {

    const [students, setStudents]= useState([]);

    useEffect(()=>{
        loadStudents();
    },[]);

    //create the function to laod data from the database
    const loadStudents = async()=>{
        const result =await axios.get("http://localhost:8080/students",{
          validateStatus:() => {
            return true;
          }
        }
        );
        if(result.status===302){
          setStudents(result.data);
        }
        
    };
  return (
    <section className='section'>
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Degree</th>
                <th>Course</th>
                <th colSpan={3}>Actions</th>
            </tr>
        </thead>

        <tbody className='text-center'>
            {
                students.map((student,index)=>(
                <tr key={student.id}>
                    <th scope="row" key={index}>
                        {index +1}
                    </th>
                   <td>{student.firstName}</td>
                   <td>{student.lastName}</td>
                   <td>{student.address}</td>
                   <td>{student.email}</td>
                   <td>{student.dob}</td>
                   <td>{student.degree}</td>
                   <td>{student.course}</td>
                   <td className='mx-2'>
                    <button
                      className='btn btn-info'>
                        View
                    </button>
                    </td>
                   <td className='mx-2'>

                   <button
                      className='btn btn-warning'>
                        update
                    </button>
                   </td>

                   <td className='mx-2'>
                   <button
                      className='btn btn-danger'>
                        delete
                    </button>
                   </td>
                </tr>
                ))
            }
            
        </tbody>
      </table>
    </section>
  )
}

export default StudentView
