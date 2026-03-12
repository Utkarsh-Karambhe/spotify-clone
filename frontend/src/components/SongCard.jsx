function SongCard({ song, onPlay }) {
  return (
    <div className="song-row">
      <div className="song-info">
        <h4>{song.title}</h4>
        <span>{song.artist?.name}</span>
        <span>{song.duration}</span>
      </div>
      <button className="play-btn" onClick={() => onPlay(song)}>▶</button>
    </div>
  );
}

export default SongCard;
