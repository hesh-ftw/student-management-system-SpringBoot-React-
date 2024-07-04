package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.DTO.AdminDTO;
import com.example.studentmanagementsystem.model.Admin;
import com.example.studentmanagementsystem.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class AdminService implements AdminServiceInterface {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String AddAdmin(AdminDTO adminDTO) {
        Admin admin = new Admin(
                adminDTO.getAdminId(),
                adminDTO.getPassword(),
                adminDTO.getEmail(),
                adminDTO.getFirstName(),
                adminDTO.getLastName(),
                this.passwordEncoder.encode(adminDTO.getPassword())
        );
        adminRepository.save(admin);

        return admin.getEmail();
    }
}
