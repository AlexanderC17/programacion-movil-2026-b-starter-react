# Guía breve para sustentar el parcial

## Presentación inicial
“Desarrollé un catálogo de productos con Ionic React y una API REST en Express. La aplicación permite consultar, buscar y filtrar productos, ver sus detalles, crear, editar y eliminar registros. También preparé validaciones, pruebas, documentación y un ejercicio independiente en Kotlin”.

## Arquitectura
- **Presentation:** pantallas y componentes que ve el usuario.
- **Domain:** modelo `Product`, validaciones, filtros, formato de moneda y etiqueta de inventario.
- **Data:** funciones HTTP que se comunican con la API.
- **Server:** API Express con almacenamiento temporal en memoria.

## Preguntas y respuestas
**¿Qué es una API REST?** Es una interfaz que permite que la aplicación solicite o modifique recursos mediante HTTP.

**¿Qué hace GET /api/products?** Devuelve la lista y permite filtrar por `search` y `category`.

**¿Para qué sirve POST?** Crea un producto; si los datos son válidos responde 201.

**¿Qué diferencia hay entre PUT y DELETE?** PUT actualiza un producto y devuelve 200; DELETE lo elimina y responde 204 sin cuerpo.

**¿Por qué se valida en el cliente y en el servidor?** La validación del cliente ayuda al usuario, pero el servidor debe verificar los datos porque puede recibir solicitudes externas a la aplicación.

**¿Qué significa 400, 404 y 500?** 400 indica datos inválidos; 404 significa que la ruta o el producto no existe; 500 representa un error interno inesperado.

**¿Qué hace ApiError?** Conserva el mensaje, el código HTTP y los detalles del error para que la interfaz pueda mostrarlos.

**¿Para qué sirven useState y useEffect?** `useState` guarda estado de la pantalla; `useEffect` permite cargar datos cuando se monta una pantalla o cambian sus dependencias.

**¿Por qué el almacenamiento es en memoria?** El enunciado lo pide para este ejercicio. Los datos se reinician al reiniciar el servidor; no es una base de datos persistente.

**¿Qué hace Kotlin Product.kt?** Modela un producto, calcula la etiqueta de inventario incluso si el stock es `null` y aplica un descuento porcentual.

## Demostración sugerida
1. Mostrar el listado y la búsqueda.
2. Filtrar por categoría.
3. Abrir el detalle de un producto.
4. Crear un producto válido y mostrarlo.
5. Intentar guardar un formulario inválido y explicar los mensajes.
6. Editar el producto y luego eliminarlo con confirmación.
7. Mostrar una prueba de error 404 y una de POST inválido.
8. Ejecutar el archivo Kotlin en Kotlin Playground.
9. Mostrar documentos, commits y Pull Request reales.

## Importante
No afirmes que las pruebas, la compilación, el fork o el Pull Request se completaron hasta ejecutarlos y verificarlos en tu equipo.
