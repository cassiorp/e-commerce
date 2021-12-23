package com.ifsul.marketplace.repository;

import com.ifsul.marketplace.entity.ItemEntity;
import com.ifsul.marketplace.entity.ProductEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PurchaseRepository extends MongoRepository<ProductEntity, String> {
    List<ProductEntity> findByUserId(String email);
}
