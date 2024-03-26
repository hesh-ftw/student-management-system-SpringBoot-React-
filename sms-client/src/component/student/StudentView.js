import React, { useEffect, useState } from 'react'
import axios from 'axios';

const StudentView = () => {

    const [students, setStudents]= useState([]);

    useEffect(()=>{
        loadStudents();
    },[]);

    //create the method to laod data from the database
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
    <section>
      <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Department</td>
                <td>Actions</td>
            </tr>
        </thead>

        <tbody>
            {
                students.map((student,index)=>(
                <tr key={student.id}>
                    <th scope="row" key={index}>
                        {index +1}
                    </th>
                   <td>{student.firstName}</td>
                   <td>{student.lastName}</td>
                   <td>{student.email}</td>
                   <td>{student.department}</td>
                   <td>View</td>
                   <td>Update</td>
                   <td>Delete</td>
                </tr>
                ))
            }
            
        </tbody>
      </table>
    </section>
  )
}

export default StudentView
