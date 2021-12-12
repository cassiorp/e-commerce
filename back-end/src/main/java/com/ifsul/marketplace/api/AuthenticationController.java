package com.ifsul.marketplace.api;

import com.ifsul.marketplace.dto.auth.LoginDTO;
import com.ifsul.marketplace.dto.auth.TokenDTO;
import com.ifsul.marketplace.security.service.AuthenticationService;
import com.ifsul.marketplace.security.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/login")
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<TokenDTO> auth(@RequestBody @Validated LoginDTO loginDTO) {
       TokenDTO tokenDTO = authenticationService.login(loginDTO);
       return new ResponseEntity<>(tokenDTO, HttpStatus.OK);
    }

}
