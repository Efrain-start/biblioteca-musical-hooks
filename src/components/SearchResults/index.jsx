import Song from "../Song";
import "./styles.css";

export default function SearchResults({ songs = [], library = [], onAdd }) {
  const isInLibrary = (id) => library.some((s) => s.id === id);

  return (
    <div className="search">
      {songs.map((song) => (
        <Song
          key={song.id}
          song={song}
          actionLabel="Agregar a mi biblioteca"
          onAction={onAdd}
          disabled={isInLibrary(song.id)}
        />
      ))}
      {songs.length === 0 && <p className="search__empty">Sin resultados…</p>}
    </div>
  );
}
