//package com.example.studentmanagementsystem.controller;
//
//import com.example.studentmanagementsystem.model.Student;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Controller
//@RestController
//public class StudentController {
//
//   private List<Student> list= new ArrayList<>(); //declare the student array
//
//    @GetMapping("students")
//   public List<Student> getStudents(){
//        return list;
//    }
//
//    @GetMapping("student/{id}")
//    public Student getStudentById(@PathVariable("id") int id){
//        for(Student student: list){
//            return student;
//        }
//        return null;
//    }
//
//    @PostMapping("students")
//    public Student addStudent(@RequestBody Student student){
//        if (studentAlreadyExist(student.getEmail())){
//                throw studentAlreadyExistException(student.getEmail()+"Already exist");
//        }
//        student.setId((long) (list.size()+1));
//        list.add(student);
//        return student;
//    }
//
//
//    private boolean studentAlreadyExist(String email) {
//        return false;
//    }
//
//}
