package com.ifsul.marketplace.api;

import com.ifsul.marketplace.dto.user.request.ItemDTO;
import com.ifsul.marketplace.dto.user.request.UserCreateDTO;
import com.ifsul.marketplace.dto.user.response.UserResponseDTO;
import com.ifsul.marketplace.entity.ItemEntity;
import com.ifsul.marketplace.service.ProductUserService;
import com.ifsul.marketplace.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("v1/products/user")
public class ProductUserController {

    @Autowired
    private ProductUserService productUserService;

    @PostMapping
    public ResponseEntity addNewProduct(@Valid @RequestBody ItemDTO itemDTO) {
        ItemEntity saved = productUserService.addNewProduct(itemDTO);
        return new ResponseEntity<>(saved, CREATED);
    }

    @GetMapping(value = "/{email}")
    public List<ItemEntity> getAllProductsByUserEmail(@PathVariable String email) {
        return productUserService.getAllProductsByUserEmail(email);
    }

    @GetMapping
    public List<ItemEntity> getAllProducts() {
        return productUserService.getAllProducts();
    }

}
