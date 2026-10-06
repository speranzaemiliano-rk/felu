# Felu · Estrella de Maldonado

Página de Felu, jugador de futsal de Estrella de Maldonado, con todos sus videos de YouTube ordenados por temporada.

Se publica gratis con **GitHub Pages**: es un solo archivo `index.html`, sin instalar nada.

## Cómo editarla

Todo lo que se cambia está arriba de todo en el `<script>` de `index.html`:

- **`JUGADOR`**: nombre, club, la frase de presentación y los datos (posición, categoría, camiseta). Si un dato queda vacío (`''`) aparece como «a completar».
- **`VIDEOS`**: un video por línea. Para sumar uno nuevo, copiá una línea y cambiá:
  - `id`: lo que va después de `watch?v=` en el link de YouTube (por ejemplo, en `https://www.youtube.com/watch?v=IWbZp_nwXhU` el id es `IWbZp_nwXhU`).
  - `fecha`: en formato `AAAA-MM-DD`.
  - `titulo`: el nombre que querés que se vea.

  El **primero** de la lista es el que se muestra grande. Los demás se agrupan solos por año.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página completa (diseño + datos + código). |
| `portada.mp4` | El video de fondo de la portada en alta calidad, para compu (sin sonido, en loop). |
| `portada-movil.mp4` | El mismo video, más liviano, para celulares. |
| `portada.webm` | Copia de respaldo para navegadores que no reproducen MP4. |
| `portada.jpg` | La imagen que se ve mientras carga el video. |
| `manifest.json` | Nombre, colores e íconos de la app instalada. |
| `sw.js` | *Service worker*: hace que se pueda instalar y que abra aunque no haya señal. |
| `iconos/` | Los íconos de la app (estrella con el 10). |

## Instalarla como app

- **Android / Chrome en la compu:** aparece el botón **«Instalar app»** arriba a la izquierda de la portada (o en el menú ⋮ → *Instalar*).
- **iPhone (Safari):** botón *Compartir* → **«Agregar a pantalla de inicio»**.

Cada vez que cambies algo, subí también el número de `CACHE` en `sw.js` (`felu-v2` → `felu-v3`) para que los celulares que la tienen instalada bajen la versión nueva.

Para cambiar el video de portada, reemplazá los tres archivos de video (`portada.mp4`, `portada-movil.mp4` y `portada.webm`) por versiones nuevas con los mismos nombres. Conviene que sea corto (10–20 segundos) y horizontal (16:9): se muestra entero, sin recortes.
