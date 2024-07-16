package com.example.studentmanagementsystem.repository;

import com.example.studentmanagementsystem.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByStudentId(Long studentId);

//    Optional<Course> findById(Long CourseId);

}
