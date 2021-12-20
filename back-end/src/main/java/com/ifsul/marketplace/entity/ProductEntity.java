package com.ifsul.marketplace.entity;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
@Builder
@Data
@ToString
public class ProductEntity {

    @Id
    private String id;
    private String userId;
    private ItemEntity[] products;

}
