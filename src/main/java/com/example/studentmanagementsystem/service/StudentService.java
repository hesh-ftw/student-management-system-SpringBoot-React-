package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.exception.studentAlreadyExistException;
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


    @Override
    public Student updateStudent(Student student, Long id) {

        return null;
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
