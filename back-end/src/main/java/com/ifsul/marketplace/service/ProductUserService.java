package com.ifsul.marketplace.service;

import com.ifsul.marketplace.dto.user.request.ItemDTO;
import com.ifsul.marketplace.dto.user.response.UserResponseDTO;
import com.ifsul.marketplace.entity.ItemEntity;
import com.ifsul.marketplace.exception.UserSaveException;
import com.ifsul.marketplace.mapper.UserMapper;
import com.ifsul.marketplace.repository.ItemRepository;
import com.ifsul.marketplace.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class ProductUserService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private UserRepository userRepository;

    public ItemEntity addNewProduct(ItemDTO itemDTO) {
        var user = userRepository.findByEmail(itemDTO.getUserEmail());
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setDescription(itemDTO.getDescription());
        itemEntity.setUserId(user.get().getId());
        itemEntity.setName(itemDTO.getName());
        itemEntity.setPrice(itemDTO.getPrice());
        this.save(itemEntity);
        return itemEntity;
    }

    private ItemEntity save(ItemEntity itemEntity) {
        try {
            return itemRepository.save(itemEntity);
        } catch (RuntimeException e) {
            log.error("ERRO " + e.getMessage());
            throw new UserSaveException("Erro ao salvar o item " + itemEntity);
        }
    }

    public List<ItemEntity> getAllProductsByUserEmail(String email) {
        var user = userRepository.findByEmail(email);
        return itemRepository.findByUserId(user.get().getId());
    }

    public List<ItemEntity> getAllProducts() {
        return itemRepository.findAll();
    }


}
