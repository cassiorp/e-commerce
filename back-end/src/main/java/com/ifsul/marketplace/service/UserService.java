package com.ifsul.marketplace.service;

import com.ifsul.marketplace.dto.request.UserCreateDTO;
import com.ifsul.marketplace.dto.request.UserUpdateDTO;
import com.ifsul.marketplace.dto.response.UserResponseDTO;
import com.ifsul.marketplace.entity.UserEntity;
import com.ifsul.marketplace.exception.UserSaveException;
import com.ifsul.marketplace.exception.UserDeleteException;
import com.ifsul.marketplace.exception.UserNotFoundException;
import com.ifsul.marketplace.mapper.UserMapper;
import com.ifsul.marketplace.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserResponseDTO createUser(UserCreateDTO userCreateDTO) {
        UserEntity userEntity = UserMapper.toEntity(userCreateDTO);
        userEntity = this.save(userEntity);
        return UserMapper.toResponse(userEntity);
    }

    public List<UserResponseDTO> getUsers() {
        return userRepository.findAll().stream()
                .map(UserMapper::toResponse).collect(Collectors.toList());
    }

    public UserResponseDTO getUserById(String id) {
        UserEntity userEntity = this.findById(id);
        return UserMapper.toResponse(userEntity);
    }

    public UserResponseDTO updateUser(String id, UserUpdateDTO userUpdateDTO) {
        UserEntity toCheck = this.findById(id);
        UserEntity toUpdate = UserMapper.toEntity(userUpdateDTO, toCheck);
        toUpdate = this.save(toUpdate);
        return UserMapper.toResponse(toUpdate);
    }

    public void deleteUserById(String id) {
        UserEntity userEntity = this.findById(id);
        delete(userEntity);
    }

    private UserEntity save(UserEntity userEntity) {
        try {
            return userRepository.save(userEntity);
        } catch (RuntimeException e) {
            throw new UserSaveException(userEntity);
        }
    }

    private UserEntity findById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    private void delete(UserEntity userEntity) {
        try {
            userRepository.delete(userEntity);
        } catch (RuntimeException e) {
            throw new UserDeleteException(userEntity.getId());
        }
    }

}
