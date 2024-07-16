package com.example.studentmanagementsystem.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CourseRequest {
    private Long id;
    private Long studentId;
    private String courseName;
    private String description;
    private String courseCode;

}
