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
| `portada.mp4` | El video de fondo de la portada (sin sonido, en loop). |
| `portada.jpg` | La imagen que se ve mientras carga el video. |

Para cambiar el video de portada, reemplazá `portada.mp4` por otro con el mismo nombre. Conviene que sea corto (10–20 segundos), horizontal y de menos de 5 MB.
