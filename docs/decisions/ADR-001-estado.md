# ADR-001 — Estado local por pantalla

- **Estado:** Aceptada.
- **Contexto:** El catálogo tiene lista, detalle y formulario; cada pantalla necesita manejar datos y estados de interfaz.
- **Decisión:** En Ionic React se usa `useState` para los datos, filtros, carga y errores; `useEffect` carga los productos cuando corresponde. No se incorpora una librería global de estado.
- **Consecuencias:** La solución es fácil de explicar y suficiente para el alcance del parcial. Si la aplicación creciera y compartiera mucho estado entre pantallas, habría que reevaluar esta decisión.
