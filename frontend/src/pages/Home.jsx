import { useEffect, useState } from 'react';
import API from '../api/axios';
import SongCard from '../components/SongCard';
import ArtistCard from '../components/ArtistCard';
import AlbumCard from '../components/AlbumCard';

function Home({ setCurrentSong }) {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    API.get('/songs').then(res => setSongs(res.data));
    API.get('/artists').then(res => setArtists(res.data));
    API.get('/albums').then(res => setAlbums(res.data));
  }, []);

  return (
    <div>
      <section className="section-block">
        <h2>🎵 All Songs</h2>
        {songs.map(song => (
          <SongCard key={song.id} song={song} onPlay={setCurrentSong} />
        ))}
      </section>

      <section className="section-block">
        <h2>🎤 Artists</h2>
        <div className="cards-container">
          {artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2>💿 Albums</h2>
        <div className="cards-container">
          {albums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
