package com.example.studentmanagementsystem.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import java.util.Set;

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

    @OneToMany(mappedBy = "student")
    private Set<Course> courses;

}
