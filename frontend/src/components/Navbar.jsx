import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <span className="logo">🎵 Spotify</span>
      <Link to="/" className={isActive('/') ? 'active-link' : ''}>Home</Link>
      <Link to="/search" className={isActive('/search') ? 'active-link' : ''}>Search</Link>
      <Link to="/playlist/1" className={isActive('/playlist') ? 'active-link' : ''}>My Playlist</Link>
      <Link to="/profile" className={isActive('/profile') ? 'active-link' : ''}>Profile</Link>
    </nav>
  );
}

export default Navbar;
