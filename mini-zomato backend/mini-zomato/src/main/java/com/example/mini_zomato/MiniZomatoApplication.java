package com.example.mini_zomato;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
//SpringBootApplication
@EntityScan("com.example.mini_zomato.model")
@EnableJpaRepositories("com.example.mini_zomato.repository")

public class MiniZomatoApplication {

	public static void main(String[] args) {

		SpringApplication.run(MiniZomatoApplication.class, args);
	}

}
