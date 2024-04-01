package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.exception.studentAlreadyExistException;
import com.example.studentmanagementsystem.exception.studentNotFoundException;
import com.example.studentmanagementsystem.model.Student;
import com.example.studentmanagementsystem.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class StudentService implements StudentServiceInterface {

    private final StudentRepository studentRepository;

    // Add new Student
    @Override
    public Student addStudent(Student student) {

        //checks the student already exist by email
        if(studentAlreadyExists(student.getEmail())){
            throw new studentAlreadyExistException(student.getEmail()+ "Already exist");
        }

        return studentRepository.save(student);
    }


    //Get all students
    @Override
    public List<Student> getStudent() {
        return studentRepository.findAll() ;
    }

    //Update Student
    @Override
    public Student updateStudent(Student student, Long id) {
        return studentRepository.findById(id).map(st-> {
            st.setFirstName(student.getFirstName());
            st.setLastName(student.getLastName());
            st.setAddress(student.getAddress());
            st.setDob(student.getDob());
            st.setEmail(student.getEmail());
            st.setDegree(student.getDegree());



            return studentRepository.save(st);
        }).orElseThrow(()-> new studentNotFoundException("sorry! student could not be found")) ;
    }

    //find student by id
    @Override
    public Student getStudentById(Long id) {
        return studentRepository.findById(id).
                orElseThrow(()-> new studentNotFoundException("sorry student cannot be found with the id="+ id));
    }


    //delete student by id
    @Override
    public void deleteStudent(Long id) {
        if(!studentRepository.existsById(id)){
            throw new studentNotFoundException("Sorry! student not found");
        }
        studentRepository.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }

}
