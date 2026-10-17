# Feature: Catálogo de productos

## Objetivo
Permitir consultar y administrar un catálogo de productos desde una app Ionic conectada a una API Express.

## Alcance funcional
- Consultar productos y buscar por fragmento del nombre sin distinguir mayúsculas.
- Filtrar por categoría exacta: Bebidas, Snacks, Aseo u Hogar.
- Consultar detalle, crear, editar y eliminar con confirmación.
- Validar los datos en la app y nuevamente en el servidor.

## Entidad
`Product`: `id` entero, `name` texto de máximo 60 caracteres, `price` número mayor que cero, `category` categoría permitida y `stock` entero no negativo.

## Estados de interfaz
Carga, lista vacía, búsqueda sin resultados y error recuperable con acción Reintentar.

## Criterios de aceptación
Los cinco endpoints cumplen los códigos de respuesta del enunciado; los formularios presentan errores de validación; precio y stock se muestran con etiquetas consistentes.
