package com.ifsul.marketplace.api;

import com.ifsul.marketplace.dto.user.request.UserCreateDTO;
import com.ifsul.marketplace.dto.user.request.UserUpdateDTO;
import com.ifsul.marketplace.dto.user.response.UserResponseDTO;
import com.ifsul.marketplace.exception.UserAlreadyExistsException;
import com.ifsul.marketplace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.HttpStatus.*;

@RestController
@RequestMapping("v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity createUser(@Valid @RequestBody UserCreateDTO userCreateDTO) {
        UserResponseDTO saved = userService.createUser(userCreateDTO);
        return new ResponseEntity<>(saved, CREATED);
    }

    @GetMapping
    public List<UserResponseDTO> getUsers() {
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable String id) {
        UserResponseDTO userResponseDTO = userService.getUserById(id);
        return new ResponseEntity<>(userResponseDTO, OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@PathVariable String id, @RequestBody UserUpdateDTO userUpdateDTO) {
        UserResponseDTO updated = userService.updateUser(id, userUpdateDTO);
        return new ResponseEntity<>(updated, OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable String id) {
        userService.deleteUserById(id);
        return new ResponseEntity<>(NO_CONTENT);
    }

}
