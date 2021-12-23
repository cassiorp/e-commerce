package com.ifsul.marketplace.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZoneId;
import java.time.ZonedDateTime;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value = {UserAlreadyExistsException.class})
    public ResponseEntity<Object> handleUnprocessableException(UserAlreadyExistsException e) {
        ApiExceptionSchema apiExceptionSchema = new ApiExceptionSchema(
                e.getMessage(),
                e.getStatus(),
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiExceptionSchema, e.getStatus());
    }

    @ExceptionHandler(value = {UserDeleteException.class})
    public ResponseEntity<Object> handleBadRequestException(UserDeleteException e) {
        ApiExceptionSchema apiExceptionSchema = new ApiExceptionSchema(
                e.getMessage(),
                e.getStatus(),
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiExceptionSchema, e.getStatus());
    }

    @ExceptionHandler(value = {NotFoundException.class})
    public ResponseEntity<Object> handleBadRequestException(NotFoundException e) {
        ApiExceptionSchema apiExceptionSchema = new ApiExceptionSchema(
                e.getMessage(),
                e.getStatus(),
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiExceptionSchema, e.getStatus());
    }

    @ExceptionHandler(value = {UserSaveException.class})
    public ResponseEntity<Object> handleBadRequestException(UserSaveException e) {
        ApiExceptionSchema apiExceptionSchema = new ApiExceptionSchema(
                e.getMessage(),
                e.getStatus(),
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiExceptionSchema, e.getStatus());
    }

    @ExceptionHandler(value = {BadCredentialsException.class})
    public ResponseEntity<Object> handleBadRequestException(BadCredentialsException e) {
        ApiExceptionSchema apiExceptionSchema = new ApiExceptionSchema(
                e.getMessage(),
                e.getStatus(),
                ZonedDateTime.now(ZoneId.of("Z"))
        );
        return new ResponseEntity<>(apiExceptionSchema, e.getStatus());
    }
}
