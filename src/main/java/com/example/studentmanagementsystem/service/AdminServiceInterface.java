package com.example.studentmanagementsystem.service;

import com.example.studentmanagementsystem.DTO.AdminDTO;
import com.example.studentmanagementsystem.DTO.AdminLoginDTO;
import com.example.studentmanagementsystem.Response.LoginResponse;


public interface AdminServiceInterface {

    String AdminRegister(AdminDTO adminDTO);

    LoginResponse adminLogin(AdminLoginDTO adminloginDTO);


}
