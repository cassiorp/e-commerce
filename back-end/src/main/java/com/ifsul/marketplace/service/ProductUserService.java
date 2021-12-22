package com.ifsul.marketplace.service;

import com.ifsul.marketplace.dto.user.request.ItemDTO;
import com.ifsul.marketplace.dto.user.response.UserResponseDTO;
import com.ifsul.marketplace.entity.ItemEntity;
import com.ifsul.marketplace.exception.UserSaveException;
import com.ifsul.marketplace.mapper.UserMapper;
import com.ifsul.marketplace.repository.ItemRepository;
import com.ifsul.marketplace.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
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
    private UserService userService;

    public ItemEntity addNewProduct(ItemDTO itemDTO) {
        var user = userService.findById(itemDTO.getIdUser());
        ItemEntity itemEntity = new ItemEntity();
        itemEntity.setUrlImage(itemDTO.getUrlImage());
        itemEntity.setDescription(itemDTO.getDescription());
        itemEntity.setUserId(user.getId());
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

    public List<ItemEntity> getAllProductsByUserId(String id) {
        var user = userService.findById(id);
        return itemRepository.findByUserId(user.getId());
    }

    public List<ItemEntity> getAllProducts() {
        return itemRepository.findAll();
    }


}
