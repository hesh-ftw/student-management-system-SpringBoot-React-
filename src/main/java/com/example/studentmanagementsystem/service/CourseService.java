package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.model.Course;
import com.example.studentmanagementsystem.model.CourseRequest;
import com.example.studentmanagementsystem.model.Student;
import com.example.studentmanagementsystem.repository.CourseRepository;
import com.example.studentmanagementsystem.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;



    // add course to students by id
    @Transactional
    public void addCourseToStudent(Long studentId, CourseRequest request) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found"));

        Course course = new Course();
        course.setCourseName(request.getCourseName());
        course.setDescription(request.getDescription());
        course.setCourseCode(request.getCourseCode());
        course.setStudent(student);

        courseRepository.save(course);
    }

    // get course details of students
    public List<CourseRequest> getCoursesByStudentId(Long studentId) {
        List<Course> courses = courseRepository.findByStudentId(studentId);
        return courses.stream()
                .map(this::convertToRequest)
                .collect(Collectors.toList());
    }

    private CourseRequest convertToRequest(Course course) {
        CourseRequest result = new CourseRequest();
        result.setStudentId(course.getStudent().getId());
        result.setCourseName(course.getCourseName());
        result.setCourseCode(course.getCourseCode());
        result.setDescription(course.getDescription());
        return result;
    }


    //get course history details from course table
    public List<CourseRequest> getCourseHistory() {
        List<Course> courses = courseRepository.findAll();
        return courses.stream()
                .map(this::mapToCourseRequest)
                .collect(Collectors.toList());
    }


    public CourseRequest mapToCourseRequest(Course course) {
        CourseRequest courseRequest = new CourseRequest();

        // Map course attributes to courseRequest attributes

        courseRequest.setStudentId(course.getStudent().getId());
        courseRequest.setCourseName(course.getCourseName());
        courseRequest.setCourseCode(course.getCourseCode());
        courseRequest.setDescription(course.getDescription());

        return courseRequest;
    }


}
