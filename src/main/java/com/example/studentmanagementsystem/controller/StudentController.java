package com.example.studentmanagementsystem.controller;

import com.example.studentmanagementsystem.model.Student;

import com.example.studentmanagementsystem.service.StudentServiceInterface;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


// ADD REST CONTROLLERS
@Controller
@RestController
@RequiredArgsConstructor


public class StudentController {
    private final StudentServiceInterface std; //make reference to the studentSrevice Interface

    // get all students
    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents(){
        return new ResponseEntity<>(std.getStudent(), HttpStatus.FOUND);
    }

    //add new student
    @PostMapping("/students/add")
    public Student addStudent(@RequestBody Student student){
        return std.addStudent(student);
    }

    //update students
    @PutMapping("/students/update/{id}")
    public Student updateStudent(@RequestBody Student student,@PathVariable Long id){
        return std.updateStudent(student,id);
    }

    //delete student
    @DeleteMapping("/students/delete/{id}")
    public void deleteStudent( @PathVariable Long id){
        std.deleteStudent(id);
    }

    //find student by id
    @GetMapping("/students/{id}")
    public Student getById(@PathVariable Long id){
        return std.getStudentById(id);
    }

}