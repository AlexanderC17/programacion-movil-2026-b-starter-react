# ADR-002 — Consumo de la API y manejo de errores

- **Estado:** Aceptada.
- **Contexto:** Las pantallas necesitan consultar y modificar productos en un servidor Express y mostrar errores comprensibles.
- **Decisión:** Centralizar las peticiones HTTP en `src/features/products/data/api.ts`. La constante `API_URL` toma `VITE_API_URL` o usa `http://localhost:3000`. Las respuestas no exitosas se convierten en `ApiError`, con código HTTP y arreglo `details`.
- **Consecuencias:** Se evita repetir `fetch` en las pantallas y se estandariza el tratamiento de errores. El cliente no sustituye la validación del servidor.
