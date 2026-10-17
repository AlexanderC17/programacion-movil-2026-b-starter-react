# Contrato de endpoints

Base: `/api/products`. Los errores usan `{ "error": "mensaje", "details": ["..." ] }`.

| Método y ruta | Éxito | Errores |
|---|---|---|
| GET `/api/products` | 200 y arreglo; admite `search` y `category` | — |
| GET `/api/products/:id` | 200 y producto | 400 id inválido; 404 no existe |
| POST `/api/products` | 201 y producto creado | 400 datos inválidos |
| PUT `/api/products/:id` | 200 y producto actualizado | 400 datos inválidos/id inválido; 404 no existe |
| DELETE `/api/products/:id` | 204 sin cuerpo | 400 id inválido; 404 no existe |

## Validación
`name` obligatorio, texto no vacío y máximo 60 caracteres; `price` número mayor que 0; `category` una de Bebidas, Snacks, Aseo u Hogar; `stock` entero mayor o igual que 0. Los filtros `search` y `category` se aplican simultáneamente cuando están presentes.
