package com.spotify.service;

import com.spotify.exception.ResourceNotFoundException;
import com.spotify.model.Artist;
import com.spotify.model.User;
import com.spotify.repository.ArtistRepository;
import com.spotify.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final ArtistRepository artistRepository;

    public UserService(UserRepository userRepository, ArtistRepository artistRepository) {
        this.userRepository = userRepository;
        this.artistRepository = artistRepository;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        User user = getUserById(id);
        user.setUsername(updatedUser.getUsername());
        user.setEmail(updatedUser.getEmail());
        user.setProfilePic(updatedUser.getProfilePic());
        return userRepository.save(user);
    }

    public User followArtist(Long userId, Long artistId) {
        User user = getUserById(userId);
        Artist artist = artistRepository.findById(artistId)
                .orElseThrow(() -> new ResourceNotFoundException("Artist not found with id: " + artistId));
        user.getFollowedArtists().add(artist);  // Set prevents duplicates
        return userRepository.save(user);
    }

    public User unfollowArtist(Long userId, Long artistId) {
        User user = getUserById(userId);
        Artist artist = artistRepository.findById(artistId)
                .orElseThrow(() -> new ResourceNotFoundException("Artist not found with id: " + artistId));
        user.getFollowedArtists().remove(artist);
        return userRepository.save(user);
    }

    public Set<Artist> getFollowedArtists(Long userId) {
        return getUserById(userId).getFollowedArtists();
    }
}
