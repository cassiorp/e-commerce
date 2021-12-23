package com.ifsul.marketplace.repository;

import com.ifsul.marketplace.entity.ItemEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ItemRepository extends MongoRepository<ItemEntity, String> {
    List<ItemEntity> findByUserId(String email);
}
