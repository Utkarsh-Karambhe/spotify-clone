import { useEffect, useState } from 'react';
import API from '../api/axios';
import ArtistCard from '../components/ArtistCard';

const USER_ID = 1;

function Profile() {
  const [user, setUser] = useState({ username: '', email: '', profilePic: '' });
  const [followedArtists, setFollowedArtists] = useState([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    API.get(`/users/${USER_ID}`).then(res => setUser(res.data));
    API.get(`/users/${USER_ID}/following`).then(res => setFollowedArtists(res.data));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await API.put(`/users/${USER_ID}`, user);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h2>Profile</h2>
      <div className="profile-card">
        <form onSubmit={handleUpdate}>
          <label>Username</label>
          <input type="text" value={user.username || ''} onChange={e => setUser({ ...user, username: e.target.value })} />

          <label>Email</label>
          <input type="email" value={user.email || ''} onChange={e => setUser({ ...user, email: e.target.value })} />

          <label>Profile Picture URL</label>
          <input type="text" value={user.profilePic || ''} onChange={e => setUser({ ...user, profilePic: e.target.value })} />

          <button className="btn-green" type="submit">
            {saved ? <span className="saved-text">✓ Saved!</span> : 'Update Profile'}
          </button>
        </form>
      </div>

      <section className="section-block">
        <h2>Following Artists</h2>
        {followedArtists.length === 0 && (
          <p className="empty-state">You're not following anyone yet.</p>
        )}
        <div className="cards-container">
          {[...followedArtists].map(a => <ArtistCard key={a.id} artist={a} />)}
        </div>
      </section>
    </div>
  );
}

export default Profile;
