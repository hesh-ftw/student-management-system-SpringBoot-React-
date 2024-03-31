package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.model.Course;

public interface CourseServiceInterface {
    Course addCourse(Course course);

    Course StudentById(Long id);
}
