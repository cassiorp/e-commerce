package com.ifsul.marketplace.entity;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Builder
@Data
@Document(collection = "users")
public class UserEntity {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;


}
