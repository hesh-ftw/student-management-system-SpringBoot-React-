package com.example.studentmanagementsystem.exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

    @ControllerAdvice
    public class customExceptionHandler {

        @ExceptionHandler(studentNotFoundException.class)
        public ResponseEntity<String> handleCustomException(studentNotFoundException ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }

        @ExceptionHandler(studentAlreadyExistException.class)
        public ResponseEntity<String> handleCustomException(studentAlreadyExistException ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }


    }


