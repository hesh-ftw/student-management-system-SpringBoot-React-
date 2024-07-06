package com.example.studentmanagementsystem.DTO;

public class AdminLoginDTO {
    private String email;
    private String password;

    public AdminLoginDTO() {
    }

    public AdminLoginDTO(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "AdminLoginDTO{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}


