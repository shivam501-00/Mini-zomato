package com.example.mini_zomato.model;

import jakarta.persistence.*;
//import javax.persistence.;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "restaurant")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String city;
    private String category;
    private String cuisine;
    private double rating;
    private String imgUrl;

    public Restaurant() {
    }
}
