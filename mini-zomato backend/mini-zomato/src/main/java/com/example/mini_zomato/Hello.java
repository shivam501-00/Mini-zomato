package com.example.mini_zomato;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello {
    @GetMapping("/")
    public String hello(){
        return "Welcome to Mini zomato";
    }
}
