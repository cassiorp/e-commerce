package com.ifsul.marketplace.dto.user.request;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Builder
@Data
public class ItemDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String idUser;

    @NotBlank
    private String description;

    @NotBlank
    private Double price;

}
