package com.example.studentmanagementsystem.controller;

import com.example.studentmanagementsystem.DTO.AdminDTO;
import com.example.studentmanagementsystem.DTO.AdminLoginDTO;
import com.example.studentmanagementsystem.Response.LoginResponse;
import com.example.studentmanagementsystem.service.AdminServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminServiceInterface adminService;

    @PostMapping("/AdminRegister")
    public String SaveAdmin(@RequestBody AdminDTO adminDTO){
        String id= adminService.AdminRegister(adminDTO);

        return id;
    }

    @PostMapping("/AdminLogin")
    public ResponseEntity<?> AdminLogin(@RequestBody AdminLoginDTO adminloginDTO){
        LoginResponse loginMessage= adminService.adminLogin(adminloginDTO);

        return ResponseEntity.ok(loginMessage);
    }

}
