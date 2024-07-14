package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.DTO.AdminDTO;
import com.example.studentmanagementsystem.DTO.AdminLoginDTO;
import com.example.studentmanagementsystem.Response.LoginResponse;
import com.example.studentmanagementsystem.model.Admin;
import com.example.studentmanagementsystem.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AdminService implements AdminServiceInterface {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String AdminRegister(AdminDTO adminDTO) {
        String rawPassword;
        String encodePww;
        Admin admin = new Admin(

                adminDTO.getAdminId(),
                rawPassword = adminDTO.getPassword(),
                adminDTO.getEmail(),
                adminDTO.getFirstName(),
                adminDTO.getLastName(),

               encodePww= passwordEncoder.encode(rawPassword)
        );

        admin.setPassword(encodePww);

        adminRepository.save(admin);

        return admin.getEmail();
    }

    AdminDTO adminDTO;


    public LoginResponse adminLogin(AdminLoginDTO adminloginDTO) {
        // Check if the email is available in the database
        Admin admin1 = adminRepository.findByEmail(adminloginDTO.getEmail());

        if (admin1 != null) {
            String password = adminloginDTO.getPassword();
            String encodePw = admin1.getPassword();

            // Print debug statements
            System.out.println("Entered Email: " + adminloginDTO.getEmail());
            System.out.println("Entered Password: " + password);
            System.out.println("Stored Encoded Password: " + encodePw);

            // Check if the password and encoded password match
            Boolean isPwRight = passwordEncoder.matches(password, encodePw);

            // Print the result of password matching
            System.out.println("Is Password Right: " + isPwRight);

            if (isPwRight) {
                Optional<Admin> adminOptional = adminRepository.findOneByEmailAndPassword(adminloginDTO.getEmail(), encodePw);

                // Check if the adminOptional is present
                if (adminOptional.isPresent()) {
                    System.out.println("Admin found with matching email and password.");
                    return new LoginResponse("Login successful", true);
                } else {
                    System.out.println("Admin not found with matching email and password.");
                    return new LoginResponse("Password does not match", false);
                }
            } else {
                System.out.println("Password does not match the encoded password.");
                return new LoginResponse("Password does not match", false);
            }
        } else {
            System.out.println("Email not found in the database.");
            return new LoginResponse("Email does not match", false);
        }
    }








}
