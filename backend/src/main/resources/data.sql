-- SQL script to create tables and insert sample data

-- Create Users Table
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Playlists Table
CREATE TABLE Playlists (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    user_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

-- Create Songs Table
CREATE TABLE Songs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR(255),
    released_date DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data into Users Table
INSERT INTO Users (username, email, password) VALUES
('user1', 'user1@example.com', 'password1'),
('user2', 'user2@example.com', 'password2');

-- Insert Sample Data into Playlists Table
INSERT INTO Playlists (name, user_id) VALUES
('My Favorite Songs', 1),
('Chill Vibes', 1),
('Workout Playlist', 2);

-- Insert Sample Data into Songs Table
INSERT INTO Songs (title, artist, album, released_date) VALUES
('Song A', 'Artist A', 'Album A', '2021-01-01'),
('Song B', 'Artist B', 'Album B', '2021-02-01');