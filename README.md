# Catálogo de productos — Parcial práctico

Proyecto académico de Ionic React + Express y ejercicio independiente en Kotlin.

## Requisitos
Node.js 22.12 o superior y npm.

## Instalación y ejecución
1. `npm install`
2. Copiar `.env.example` a `.env` si se necesita cambiar la configuración.
3. En una terminal: `npm run server`.
4. En otra terminal: `npm run dev`.
5. Abrir la URL local que indique Vite. La API queda por defecto en `http://localhost:3000`.

Para cambiar la URL de la API, configurar `VITE_API_URL` en `.env` y reiniciar Vite. El almacenamiento del servidor es en memoria y se reinicia al apagarlo.

## Pruebas y compilación
- `npm test`
- `npm run build`
- `npm run lint`

## Kotlin
Abrir `kotlin/Product.kt` en Kotlin Playground, ejecutar y verificar las tres líneas de salida.

## State management decision
The application uses React `useState` and `useEffect` to manage page-level state. This keeps the code simple because each page owns the data it needs. The product list stores loading and error states separately. Search and category filters are local to the list page. A global state library is not necessary for this small application.

## API error handling
The API returns an HTTP status code and a JSON error object when a request fails. The error object contains an `error` message and a `details` array with validation problems. The client wraps failed responses in an `ApiError` object. The interface can then show a useful message instead of treating every response as successful. A 404 means that the requested route or product was not found, while a 400 indicates invalid input.

## Documentación y sustentación

La documentación del diseño está en `docs/`, la lista de tareas está en `TODO.md` y las preguntas sugeridas para la sustentación están en `docs/GUIA-SUSTENTACION.md`.

## Git y entrega del parcial

Crea un fork del starter oficial, crea la rama `feature/catalogo-productos` desde `main` y realiza primero un commit que contenga únicamente la documentación. Después realiza commits pequeños con formato Conventional Commits, por ejemplo `feat(api): add products endpoints`. Sube la rama y abre un Pull Request hacia `main` de tu propio fork. En Moodle pega el enlace del PR como texto. Estos pasos deben hacerse desde tu cuenta para que el historial refleje tu trabajo individual.

## Alcance y advertencias
Este proyecto es una base funcional elaborada a partir del enunciado. Antes de entregar, intégrala en el starter oficial elegido por el curso y revisa las pruebas con la configuración real del starter. El estudiante debe realizar sus propios commits, fork y Pull Request; esos elementos no se pueden generar honestamente desde este archivo.
