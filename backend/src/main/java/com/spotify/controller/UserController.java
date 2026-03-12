package com.spotify.controller;

import com.spotify.model.Artist;
import com.spotify.model.User;
import com.spotify.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Set;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createUser(user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    @PostMapping("/{userId}/follow/{artistId}")
    public ResponseEntity<User> followArtist(@PathVariable Long userId, @PathVariable Long artistId) {
        return ResponseEntity.ok(userService.followArtist(userId, artistId));
    }

    @DeleteMapping("/{userId}/unfollow/{artistId}")
    public ResponseEntity<User> unfollowArtist(@PathVariable Long userId, @PathVariable Long artistId) {
        return ResponseEntity.ok(userService.unfollowArtist(userId, artistId));
    }

    @GetMapping("/{userId}/following")
    public ResponseEntity<Set<Artist>> getFollowing(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getFollowedArtists(userId));
    }
}
