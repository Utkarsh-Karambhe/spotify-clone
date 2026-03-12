package com.spotify.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "albums")
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String coverUrl;
    private int releaseYear;

    @ManyToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;
}
