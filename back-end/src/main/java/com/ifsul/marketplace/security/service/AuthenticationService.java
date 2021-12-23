package com.ifsul.marketplace.security.service;

import com.ifsul.marketplace.dto.auth.LoginDTO;
import com.ifsul.marketplace.dto.auth.TokenDTO;
import com.ifsul.marketplace.exception.BadCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthenticationService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    public TokenDTO login(LoginDTO loginDTO) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(loginDTO.getUser(), loginDTO.getPassword());
        Authentication authentication = this.authentication(usernamePasswordAuthenticationToken);
        String token = tokenService.generateToken(authentication);
        return TokenDTO.builder().type("Bearer").token(token).build();
    }

    private Authentication authentication(UsernamePasswordAuthenticationToken usernameAndPassword) {
        try {
            return authenticationManager.authenticate(usernameAndPassword);
        } catch (AuthenticationException e){
            throw new BadCredentialsException(e.getMessage());
        }
    }
}
