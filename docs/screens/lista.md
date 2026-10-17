# Pantalla: Lista de productos

## Propósito
Mostrar productos obtenidos desde `GET /api/products`.
## Elementos
Buscador, filtro de categoría, botón Nuevo producto y tarjetas con nombre, precio, categoría y stock.
## Estados
Carga; vacío cuando la API no devuelve productos; sin resultados cuando hay productos pero los filtros no coinciden; error con botón Reintentar.
## Acciones
Abrir detalle, buscar, filtrar y navegar al formulario de creación.
## Aceptación
El buscador no distingue mayúsculas y el filtro de categoría es exacto.
