package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.DTO.AdminDTO;
import com.example.studentmanagementsystem.DTO.AdminLoginDTO;
import com.example.studentmanagementsystem.Response.LoginResponse;
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
    public String AdminRegister(AdminDTO adminDTO) {
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


    public LoginResponse adminLogin(AdminLoginDTO adminloginDTO){

        // Check if the email is available in the database
        Admin admin1 = adminRepository.findByEmail(adminloginDTO.getEmail());

        if (admin1 != null) {
            String password = adminloginDTO.getPassword();
            String encodePw = admin1.getPassword();

            // Print debug statements
            System.out.println("Entered Password: " + password);
            System.out.println("Stored Encoded Password: " + encodePw);

            // Check if the password and encoded password match
            Boolean isPwRight = passwordEncoder.matches(password, encodePw);

            // Print the result of password matching
            System.out.println("Is Password Right: " + isPwRight);

            if (isPwRight) {
                return new LoginResponse("Login successful", true);
            } else {
                return new LoginResponse("Password does not match", false);
            }
        } else {
            return new LoginResponse("Email does not match", false);
        }
    }


}
