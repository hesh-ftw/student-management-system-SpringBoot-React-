package com.example.studentmanagementsystem.controller;

import com.example.studentmanagementsystem.DTO.AdminDTO;
import com.example.studentmanagementsystem.service.AdminServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admins")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminServiceInterface adminService;

    @PostMapping("/AdminRegister")
    public String SaveAdmin(@RequestBody AdminDTO adminDTO){
        String id= adminService.AddAdmin(adminDTO);

        return id;
    }
}
