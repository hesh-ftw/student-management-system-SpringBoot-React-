package com.example.studentmanagementsystem.DTO;

public class AdminDTO {

    private Long AdminId;
    private String password;
    private String email;
    private String firstName;
    private String lastName;

    public AdminDTO(Long adminId, String password, String email, String firstName, String lastName) {
        AdminId = adminId;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public AdminDTO(){

    }


    public Long getAdminId() {
        return AdminId;
    }

    public void setAdminId(Long adminId) {
        AdminId = adminId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
