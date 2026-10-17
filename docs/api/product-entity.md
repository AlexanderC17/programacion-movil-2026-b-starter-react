# Entidad Product

- `id`: entero positivo asignado por el servidor.
- `name`: texto obligatorio de hasta 60 caracteres.
- `price`: número mayor que cero.
- `category`: `Bebidas`, `Snacks`, `Aseo` o `Hogar`.
- `stock`: entero igual o mayor que cero.

## Persistencia
N/A: el enunciado pide almacenamiento en memoria. Los ocho productos iniciales se cargan desde `server/data/products.json`; las altas, cambios y eliminaciones se pierden cuando se reinicia el servidor. El identificador nuevo es incremental durante la ejecución.
