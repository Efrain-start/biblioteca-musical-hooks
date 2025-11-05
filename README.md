# Biblioteca Musical — Hooks + Funcionales

Refactor de la app a componentes funcionales con `useState` y `useEffect`.
Incluye dos listas: **Resultados de búsqueda** (mock) y **Mi biblioteca** (estado).

## Requisitos cumplidos
- Header y Song refactorizados a **funcionales**.
- Nuevos componentes: `SearchResults` y `Library`.
- Estado en `App`: `results` (mock) y `library` (inicialmente vacío).
- Botón **Agregar a mi biblioteca** (evita duplicados).
- `useEffect` imprime cambios de la biblioteca en consola.
- Estilos separados por componente (`styles.css` en cada carpeta).
- Claves únicas por `id`.

## Ejecutar
```bash
npm install
npm run dev
