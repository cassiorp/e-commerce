package com.ifsul.marketplace.service;

import com.ifsul.marketplace.dto.user.request.UserCreateDTO;
import com.ifsul.marketplace.dto.user.request.UserUpdateDTO;
import com.ifsul.marketplace.dto.user.response.UserResponseDTO;
import com.ifsul.marketplace.entity.UserEntity;
import com.ifsul.marketplace.exception.UserAlreadyExistsException;
import com.ifsul.marketplace.exception.UserDeleteException;
import com.ifsul.marketplace.exception.NotFoundException;
import com.ifsul.marketplace.exception.UserSaveException;
import com.ifsul.marketplace.mapper.UserMapper;
import com.ifsul.marketplace.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserResponseDTO createUser(UserCreateDTO userCreateDTO) {
        checkIfExistsEmail(userCreateDTO.getEmail());
        UserEntity userEntity = UserMapper.toEntity(userCreateDTO);
        userEntity.setPassword(new BCryptPasswordEncoder().encode(userEntity.getPassword()));
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
        checkExistsEmailToUpdate(userUpdateDTO, toCheck);
        UserEntity toUpdate = UserMapper.toEntity(userUpdateDTO, toCheck);
        toUpdate.setPassword(new BCryptPasswordEncoder().encode(toUpdate.getPassword()));
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
            log.error("ERRO " + e.getMessage());
            throw new UserSaveException("Erro ao salvar usuario " + userEntity);
        }
    }

    public UserEntity findById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Não encontrado: " + id));
    }

    private void delete(UserEntity userEntity) {
        try {
            userRepository.delete(userEntity);
        } catch (RuntimeException e) {
            throw new UserDeleteException(e.getMessage() + " " + userEntity.getId());
        }
    }

    public UserResponseDTO findByEmail(String email) {
        return UserMapper.toResponse(userRepository.findByEmail(email).get());
    }

    private void checkIfExistsEmail(String email) {
        var user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new UserAlreadyExistsException("Email já está cadastrado: " + email);
    }

    private void checkExistsEmailToUpdate(UserUpdateDTO userUpdateDTO, UserEntity toCheck) {
        var users = userRepository.findAll().stream()
                .filter(user -> !user.getId().equals(toCheck.getId()))
                .filter(user -> user.getEmail().equals(userUpdateDTO.getEmail()))
                .collect(Collectors.toList());
        if (!users.isEmpty())
            throw new UserAlreadyExistsException("Email já está cadastrado: " + userUpdateDTO.getEmail());
    }
}
