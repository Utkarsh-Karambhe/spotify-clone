package com.spotify.service;

import com.spotify.exception.ResourceNotFoundException;
import com.spotify.model.Song;
import com.spotify.repository.SongRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SongService {

    private final SongRepository songRepository;

    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    public Song getSongById(Long id) {
        return songRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Song not found with id: " + id));
    }

    public List<Song> searchSongs(String title) {
        return songRepository.findByTitleContainingIgnoreCase(title);
    }

    public Song createSong(Song song) {
        return songRepository.save(song);
    }
}
