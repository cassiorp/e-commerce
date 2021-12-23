package com.ifsul.marketplace.api;

import com.ifsul.marketplace.dto.user.request.ItemDTO;
import com.ifsul.marketplace.dto.user.request.ItemIdDto;
import com.ifsul.marketplace.entity.ItemEntity;
import com.ifsul.marketplace.entity.ProductEntity;
import com.ifsul.marketplace.service.ProductUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

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

    @PostMapping(value = "/purchase")
    public ResponseEntity purchase(@RequestBody ItemIdDto itemIdDto) {
        var product = productUserService.purchase(itemIdDto);
        return new ResponseEntity<>(product, CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateProduct(@Valid @RequestBody ItemDTO itemDTO, @PathVariable String id) {
        ItemEntity saved = productUserService.updateProduct(itemDTO, id);
        return new ResponseEntity<>(saved, OK);
    }

    @GetMapping(value = "/{id}")
    public List<ItemEntity> getAllProductsByUserEmail(@PathVariable String id) {
        return productUserService.getAllProductsByUserId(id);
    }

    @GetMapping(value = "/purchase/{id}")
    public List<ProductEntity> getAllPurchaseByUserId(@PathVariable String id) {
        return productUserService.getAllPurchaseByUserId(id);
    }

    @GetMapping
    public List<ItemEntity> getAllProducts() {
        return productUserService.getAllProducts();
    }

}
