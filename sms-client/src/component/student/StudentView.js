import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UpdateStudent from './EditStudent';
import { Link } from 'react-router-dom';
import Search from '../common/Search';

const StudentView = () => {

    const [students, setStudents]= useState([]);
    const[search,setSearch] =useState("");
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


    // delete student function

    const deleteStudent = async(id)=>{
      await axios.delete(`http://localhost:8080/students/delete/${id}`);

      loadStudents();
    }


  return (
    <section>
      <Search  
      search={search}
      setSearch={setSearch}
      />
      <h4 className='mt-1 mb-4'> View Student List  </h4>
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
                <th>Courses</th>
                <th colSpan={3}>Actions</th>
            </tr>
        </thead>

        <tbody className='text-center'>
            {
                students
                .filter((student)=>
                student.id.toString()  //filtering student by id in search bar
                .includes(search))

                .map((student)=>(
                <tr key={student.id}>
                    <th scope="row">{student.id}</th>
                   <td>{student.firstName}</td>
                   <td>{student.lastName}</td>
                   <td>{student.address}</td>
                   <td>{student.email}</td>
                   <td>{student.dob}</td>
                   <td>{student.degree}</td>
                   {/* <td>{student.course}</td> */}
                   <td className='mx-2'>
                    <Link
                    to={`/view-course/${student.id}`}
                      className='btn btn-secondary'>
                        View
                    </Link>
                    </td>

                   <td className='mx-2'>
                   <Link 
                      to={`/edit-student/${student.id}`}
                      className='btn btn-secondary'>
                        update
                    </Link>
                   </td>

                   <td className='mx-2'>
                   <button
                      className='btn btn-secondary'
                      onClick={()=> deleteStudent(student.id)}>
                    
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
