package com.ifsul.marketplace.exception;

import org.springframework.http.HttpStatus;

public class UserDeleteException extends RuntimeException {
    public UserDeleteException(String message) {
        super(message);
    }

    public HttpStatus getStatus() {
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }

}
