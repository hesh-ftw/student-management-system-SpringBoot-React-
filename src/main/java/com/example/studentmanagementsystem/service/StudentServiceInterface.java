package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.model.Student;

import java.util.List;

public interface StudentServiceInterface {

    Student addStudent(Student student);

    List<Student> getStudent();

    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudent(Long id);





}
