package com.example.studentmanagementsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.util.List;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id //make the "id" as primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;


    private String address;
    private String dob;
    @NaturalId(mutable = true) //declare the modifiable foreign key
    private String email;
    private String degree;
    private String course;

    @JsonIgnore  // solved recursive serialization, where the Student entity includes a reference to the Course entity
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Course> courses;

}
