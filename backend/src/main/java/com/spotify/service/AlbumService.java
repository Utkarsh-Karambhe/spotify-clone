package com.spotify.service;

import com.spotify.exception.ResourceNotFoundException;
import com.spotify.model.Album;
import com.spotify.repository.AlbumRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AlbumService {

    private final AlbumRepository albumRepository;

    public AlbumService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    public Album getAlbumById(Long id) {
        return albumRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Album not found with id: " + id));
    }

    public List<Album> searchAlbums(String title) {
        return albumRepository.findByTitleContainingIgnoreCase(title);
    }

    public Album createAlbum(Album album) {
        return albumRepository.save(album);
    }
}
