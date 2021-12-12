package com.ifsul.marketplace.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class LoginFailureException extends ResponseStatusException {
    public LoginFailureException(String reason) {
        super(HttpStatus.UNAUTHORIZED, reason);
    }
}
