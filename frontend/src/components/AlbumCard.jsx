function AlbumCard({ album }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={album.coverUrl || 'https://via.placeholder.com/150'} alt={album.title} />
      </div>
      <h4>{album.title}</h4>
      <p>{album.artist?.name} · {album.releaseYear}</p>
    </div>
  );
}

export default AlbumCard;
