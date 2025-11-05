# Inventario Barcode — React + Vite

Plantilla para una aplicación web/móvil (PWA-friendly) de gestión de inventarios mediante escaneo de códigos de barras.

## Características
- Escaneo por cámara (códigos de barras / QR) usando `@zxing/browser`.
- Comparación entre inventario físico (detectado con escaneo) e inventario teórico (registrado en la base de datos local / API mock).
- Reportes de discrepancias y descarga en PDF (usando `jspdf` + `jspdf-autotable`).
- Almacenamiento local con `localforage`.

## Ejecutar
1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:5173`

## Notas
- Este repo es una plantilla. Para producción añade autenticación, validación y un backend real.