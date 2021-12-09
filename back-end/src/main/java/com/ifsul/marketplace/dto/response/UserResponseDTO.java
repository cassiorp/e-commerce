package com.ifsul.marketplace.dto.response;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
public class UserResponseDTO {
    private String id;
    private String name;
    private String email;
    private String password;
}
