import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import { mockSearchResults } from "./data/mockSongs";

export default function App() {
  const [results] = useState(mockSearchResults);
  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    setLibrary((prev) => {
      const exists = prev.some((s) => s.id === song.id);
      return exists ? prev : [...prev, song];
    });
  };

  const removeFromLibrary = (id) => {
    setLibrary((prev) => prev.filter((s) => s.id !== id));
  };

  useEffect(() => {
    console.log(`Biblioteca actualizada: ${library.length} canciones`, library);
  }, [library]);

  return (
    <>
      <Header title="Biblioteca Musical (Hooks + Funcionales)" />
      <main className="container">
        <section className="panel">
          <h2>Resultados de búsqueda</h2>
          <SearchResults songs={results} library={library} onAdd={addToLibrary} />
        </section>

        <section className="panel">
          <h2>Mi biblioteca</h2>
          <Library songs={library} onRemove={removeFromLibrary} />
        </section>
      </main>
    </>
  );
}
