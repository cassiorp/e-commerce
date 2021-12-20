package com.ifsul.marketplace.repository;

import com.ifsul.marketplace.entity.ProductEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductUserRepository extends MongoRepository<ProductEntity, String> {
}
