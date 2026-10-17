# Verificación del proyecto

## Pruebas automatizadas

Comando ejecutado: `npm test`

Resultado:
- 8 pruebas aprobadas.
- 0 pruebas fallidas.
- Se verificaron respuestas HTTP, validaciones, formato de precios y reglas de inventario.

## Compilación de producción

Comando ejecutado: `npm run build`

Resultado:
- Compilación completada correctamente.
- 226 módulos transformados.
- Se generó la carpeta `dist`.
- Vite advirtió que un archivo JavaScript supera los 500 kB minificados.

## Revisión estática

Comando ejecutado: `npm run lint`

Observación: el script actual imprime un mensaje informativo; no ejecuta un analizador estático real.
