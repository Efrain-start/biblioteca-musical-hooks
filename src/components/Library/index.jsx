import Song from "../Song";
import "./styles.css";

export default function Library({ songs = [], onRemove }) {
  return (
    <div className="library">
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
          secondaryActionLabel="Quitar"
          onSecondaryAction={onRemove}
        />
      ))}
      {songs.length === 0 && (
        <p className="library__empty">Aún no agregas canciones.</p>
      )}
    </div>
  );
}
