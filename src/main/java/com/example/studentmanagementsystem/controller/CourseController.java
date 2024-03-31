package com.example.studentmanagementsystem.controller;

import com.example.studentmanagementsystem.model.CourseRequest;
import com.example.studentmanagementsystem.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    // END POINTS
    //add new courses to students
    @PostMapping("/add-course/{studentId}")
    public ResponseEntity<String> addCourseToStudent(
            @PathVariable Long studentId,
            @RequestBody CourseRequest request
    ) {
        courseService.addCourseToStudent(studentId, request);
        return ResponseEntity.ok("Course added to student successfully");
    }

    //get student's course details by their id
    @GetMapping("/view-courses/{studentId}")
    public ResponseEntity<List<CourseRequest>> getCoursesByStudentId(@PathVariable Long studentId) {
        List<CourseRequest> courses = courseService.getCoursesByStudentId(studentId);
        return ResponseEntity.ok(courses);
    }
}
