package com.ifsul.marketplace.dto.user.response;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserResponseDTO {
    private String id;
    private String name;
    private String email;
    private String password;
}
