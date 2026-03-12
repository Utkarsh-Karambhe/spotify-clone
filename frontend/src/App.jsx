import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import Home from './pages/Home';
import Search from './pages/Search';
import ArtistPage from './pages/ArtistPage';
import PlaylistPage from './pages/PlaylistPage';
import Profile from './pages/Profile';
import { useState } from 'react';

function App() {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home setCurrentSong={setCurrentSong} />} />
            <Route path="/search" element={<Search setCurrentSong={setCurrentSong} />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
            <Route path="/playlist/:id" element={<PlaylistPage setCurrentSong={setCurrentSong} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {currentSong && <AudioPlayer song={currentSong} />}
      </div>
    </Router>
  );
}

export default App;
