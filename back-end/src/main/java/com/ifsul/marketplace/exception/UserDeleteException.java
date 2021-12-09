package com.ifsul.marketplace.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;


public class UserDeleteException extends ResponseStatusException {
    public UserDeleteException(String reason) {
        super(HttpStatus.INTERNAL_SERVER_ERROR, reason);
    }
}
