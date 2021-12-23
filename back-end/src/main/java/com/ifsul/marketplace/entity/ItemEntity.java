package com.ifsul.marketplace.entity;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@ToString
@Document(collection = "items")
public class ItemEntity {

    @Id
    private String id;
    private String userId;
    private String name;
    private String description;
    private Double price;
    private String urlImage;

    public ItemEntity () {

    }

}
