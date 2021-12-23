package com.ifsul.marketplace.service;

import com.ifsul.marketplace.dto.user.request.ItemDTO;
import com.ifsul.marketplace.dto.user.request.ItemIdDto;
import com.ifsul.marketplace.entity.ItemEntity;
import com.ifsul.marketplace.entity.ProductEntity;
import com.ifsul.marketplace.exception.UserSaveException;
import com.ifsul.marketplace.repository.ItemRepository;
import com.ifsul.marketplace.repository.PurchaseRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import java.util.List;

@Slf4j
@Service
public class ProductUserService {

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private PurchaseRepository purchaseRepository;

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

    public ProductEntity purchase (ItemIdDto itemIdDto) {
        var product = itemRepository.findById(itemIdDto.getProductId());
        ProductEntity productEntity = new ProductEntity();
        productEntity.setProduct(product.get());
        productEntity.setUserId(itemIdDto.getUserId());
        purchaseRepository.save(productEntity);
        return productEntity;
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

    public List<ProductEntity> getAllPurchaseByUserId(String id) {
        return purchaseRepository.findByUserId(id);
    }

    public List<ItemEntity> getAllProducts() {
        return itemRepository.findAll();
    }


}
