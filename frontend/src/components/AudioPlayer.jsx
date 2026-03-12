function AudioPlayer({ song }) {
  return (
    <div className="audio-player">
      <div>
        <span className="now-playing-label">Now Playing</span>
        <h4>{song.title}</h4>
        <p>{song.artist?.name}</p>
      </div>
      <audio controls autoPlay src={song.audioUrl} style={{ flex: 1 }}>
        Your browser does not support audio.
      </audio>
    </div>
  );
}

export default AudioPlayer;
