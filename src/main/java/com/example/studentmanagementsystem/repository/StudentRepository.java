package com.example.studentmanagementsystem.repository;

import com.example.studentmanagementsystem.model.Student;
import com.example.studentmanagementsystem.service.StudentService;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student,Long> {

      Optional<Student> findByEmail(String email);
      Optional<Student> findById(int id);

}
