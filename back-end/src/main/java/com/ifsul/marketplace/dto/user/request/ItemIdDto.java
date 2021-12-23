package com.ifsul.marketplace.dto.user.request;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
@Builder
@Data
public class ItemIdDto {

    @NotBlank
    private String userId;

    @NotBlank
    private String productId;
}
