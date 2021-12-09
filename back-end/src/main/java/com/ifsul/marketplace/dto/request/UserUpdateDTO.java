package com.ifsul.marketplace.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserUpdateDTO {

    private String name;
    private String email;
    private String password;

}
