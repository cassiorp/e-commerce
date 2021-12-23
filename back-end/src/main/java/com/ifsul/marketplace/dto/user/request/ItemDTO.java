package com.ifsul.marketplace.dto.user.request;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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

    @NotNull
    private String urlImage;

}
