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
            st.setEmail(student.getEmail());
            st.setDepartment(student.getDepartment());

            return studentRepository.save(st);
        }).orElseThrow(()-> new studentNotFoundException("sorry! student could not be found")) ;
    }

    @Override
    public Student getStudentById(Long id) {
        return null;
    }

    @Override
    public void deleteStudent(Long id) {

    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
}
