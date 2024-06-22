package com.example.studentmanagementsystem.exception;

public class studentAlreadyExistException extends RuntimeException{
    public studentAlreadyExistException(String message){
        super(message);
    }

}
