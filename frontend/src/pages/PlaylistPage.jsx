import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';
import SongCard from '../components/SongCard';

const USER_ID = 1;

function PlaylistPage({ setCurrentSong }) {
  const { id } = useParams();
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [newName, setNewName] = useState('');
  const [allSongs, setAllSongs] = useState([]);
  const [creating, setCreating] = useState(false);
  const [createName, setCreateName] = useState('');

  useEffect(() => {
    loadPlaylists();
    API.get('/songs').then(res => setAllSongs(res.data));
  }, []);

  const loadPlaylists = async () => {
    const res = await API.get(`/playlists/user/${USER_ID}`);
    setPlaylists(res.data);
    if (res.data.length > 0) setSelectedPlaylist(res.data[0]);
  };

  const createPlaylist = async () => {
    if (!createName.trim()) return;
    await API.post('/playlists', { name: createName, user: { id: USER_ID } });
    setCreateName('');
    setCreating(false);
    loadPlaylists();
  };

  const updatePlaylist = async () => {
    if (!newName.trim() || !selectedPlaylist) return;
    await API.put(`/playlists/${selectedPlaylist.id}`, { name: newName });
    setNewName('');
    loadPlaylists();
  };

  const addSong = async (songId) => {
    await API.post(`/playlists/${selectedPlaylist.id}/songs/${songId}`);
    const res = await API.get(`/playlists/${selectedPlaylist.id}`);
    setSelectedPlaylist(res.data);
  };

  const removeSong = async (songId) => {
    await API.delete(`/playlists/${selectedPlaylist.id}/songs/${songId}`);
    const res = await API.get(`/playlists/${selectedPlaylist.id}`);
    setSelectedPlaylist(res.data);
  };

  return (
    <div>
      <h2>My Playlists</h2>

      <div className="playlist-tabs">
        {playlists.map(p => (
          <button
            key={p.id}
            className={selectedPlaylist?.id === p.id ? 'btn-green' : 'btn'}
            onClick={() => setSelectedPlaylist(p)}
          >
            {p.name}
          </button>
        ))}
        <button className="btn" onClick={() => setCreating(!creating)}>+ New Playlist</button>
      </div>

      {creating && (
        <div className="create-playlist-form">
          <input type="text" placeholder="Playlist name" value={createName} onChange={e => setCreateName(e.target.value)} />
          <button className="btn-green" onClick={createPlaylist}>Create</button>
        </div>
      )}

      {selectedPlaylist && (
        <div className="playlist-content">
          <h3>🎵 {selectedPlaylist.name}</h3>

          <div className="playlist-rename">
            <input type="text" placeholder="Rename playlist" value={newName} onChange={e => setNewName(e.target.value)} />
            <button className="btn-green" onClick={updatePlaylist}>Rename</button>
          </div>

          <h4 className="playlist-section-title">Songs in this playlist</h4>
          {selectedPlaylist.songs?.length === 0 && (
            <p className="empty-state">No songs yet. Add some below!</p>
          )}
          {selectedPlaylist.songs?.map(song => (
            <div key={song.id} className="playlist-song-entry">
              <SongCard song={song} onPlay={setCurrentSong} />
              <button className="btn" onClick={() => removeSong(song.id)}>Remove</button>
            </div>
          ))}

          <h4 className="playlist-section-title">Add Songs</h4>
          {allSongs
            .filter(s => !selectedPlaylist.songs?.some(ps => ps.id === s.id))
            .map(song => (
              <div key={song.id} className="playlist-song-entry">
                <SongCard song={song} onPlay={setCurrentSong} />
                <button className="btn-green" onClick={() => addSong(song.id)}>+ Add</button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default PlaylistPage;
