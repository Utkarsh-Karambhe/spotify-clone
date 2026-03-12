import { useNavigate } from 'react-router-dom';

function ArtistCard({ artist }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/artist/${artist.id}`)}>
      <div className="card-img-wrapper">
        <img src={artist.imageUrl || 'https://via.placeholder.com/150'} alt={artist.name} />
      </div>
      <h4>{artist.name}</h4>
      <p>{artist.genre}</p>
    </div>
  );
}

export default ArtistCard;
