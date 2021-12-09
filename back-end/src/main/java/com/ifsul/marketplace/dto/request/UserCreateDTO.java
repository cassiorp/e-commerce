package com.ifsul.marketplace.dto.request;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Builder
@Data
public class UserCreateDTO {

    @NotBlank
    private String name;
    @NotBlank
    private String email;
    @NotBlank
    private String password;

}
