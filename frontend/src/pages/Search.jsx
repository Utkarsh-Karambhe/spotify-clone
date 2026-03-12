import { useState } from 'react';
import API from '../api/axios';
import SongCard from '../components/SongCard';
import ArtistCard from '../components/ArtistCard';
import AlbumCard from '../components/AlbumCard';

function Search({ setCurrentSong }) {
  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  const handleSearch = async (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim() === '') {
      setSongs([]); setArtists([]); setAlbums([]);
      return;
    }
    const [s, ar, al] = await Promise.all([
      API.get(`/songs/search?query=${val}`),
      API.get(`/artists/search?query=${val}`),
      API.get(`/albums/search?query=${val}`),
    ]);
    setSongs(s.data);
    setArtists(ar.data);
    setAlbums(al.data);
  };

  return (
    <div>
      <h2>Search</h2>
      <div className="search-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Search songs, artists, albums..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      {songs.length > 0 && (
        <section className="section-block">
          <h2>Songs</h2>
          {songs.map(s => <SongCard key={s.id} song={s} onPlay={setCurrentSong} />)}
        </section>
      )}

      {artists.length > 0 && (
        <section className="section-block">
          <h2>Artists</h2>
          <div className="cards-container">
            {artists.map(a => <ArtistCard key={a.id} artist={a} />)}
          </div>
        </section>
      )}

      {albums.length > 0 && (
        <section className="section-block">
          <h2>Albums</h2>
          <div className="cards-container">
            {albums.map(a => <AlbumCard key={a.id} album={a} />)}
          </div>
        </section>
      )}

      {query && songs.length === 0 && artists.length === 0 && albums.length === 0 && (
        <p className="no-results">No results found for "{query}"</p>
      )}
    </div>
  );
}

export default Search;
