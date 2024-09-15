package com.cod.merch.model.DTO.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.lang.Nullable;

@Data
@AllArgsConstructor
public class RegisterRequest {
    private String name;
    private String surname;
    private String password;
    private Boolean sex;
    private Long department_id;
    private String birthday; // "DD.MM.YYYY"
    private String email;
    @Nullable
    private String photo;
}
