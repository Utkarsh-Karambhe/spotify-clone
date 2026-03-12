package com.spotify.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "artists")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String genre;
    private String imageUrl;
}
