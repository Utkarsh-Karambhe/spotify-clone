import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';

const USER_ID = 1; // hardcoded for hackathon - no auth

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    API.get(`/artists/${id}`).then(res => setArtist(res.data));
    API.get(`/users/${USER_ID}/following`).then(res => {
      const follows = res.data;
      setIsFollowing(follows.some(a => a.id === parseInt(id)));
    });
  }, [id]);

  const handleFollow = async () => {
    await API.post(`/users/${USER_ID}/follow/${id}`);
    setIsFollowing(true);
  };

  const handleUnfollow = async () => {
    await API.delete(`/users/${USER_ID}/unfollow/${id}`);
    setIsFollowing(false);
  };

  if (!artist) return <p className="loading-text">Loading...</p>;

  return (
    <div className="artist-hero">
      <img
        src={artist.imageUrl || 'https://via.placeholder.com/200'}
        alt={artist.name}
      />
      <h2>{artist.name}</h2>
      <p className="artist-genre">{artist.genre}</p>
      <div className="artist-actions">
        {isFollowing ? (
          <button className="btn" onClick={handleUnfollow}>✓ Following</button>
        ) : (
          <button className="btn-green" onClick={handleFollow}>Follow</button>
        )}
      </div>
    </div>
  );
}

export default ArtistPage;
