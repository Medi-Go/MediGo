package com.capstone.medigo.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/login")
    public String index(){
        System.out.println("!!!!!");
        return "Hello world";
    }
}
