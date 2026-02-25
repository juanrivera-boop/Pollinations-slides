# Explorador de Cómics - Instrucciones de Uso

Esta es una aplicación web dinámica diseñada para visualizar una colección de cómics digitales almacenados localmente.

## Estructura del Proyecto

*   `index.html`: Página principal de la aplicación.
*   `style.css`: Estilos visuales premium.
*   `script.js`: Lógica de funcionamiento y visor de cómics.
*   `images/`: Carpeta donde debes colocar las portadas de los cómics (formatos sugeridos: .png, .jpg).
*   `comics/`: Carpeta donde deben estar los archivos .html de los presentadores de cómics.
    *   *Nota: El nombre del archivo HTML en `comics/` debe coincidir exactamente con el nombre de la imagen en `images/` (por ejemplo: `mi_comic.png` y `mi_comic.html`).*
*   `update_db.js`: Script de Node.js para actualizar la galería automáticamente.

## Cómo agregar o eliminar cómics

La aplicación es dinámica, pero debido a restricciones de seguridad de los navegadores, necesita un pequeño paso manual para reconocer nuevos archivos:

1.  **Agrega tus archivos**:
    *   Copia la imagen de portada en la carpeta `images/`.
    *   Copia el archivo HTML correspondiente en la carpeta `comics/`.
2.  **Actualiza la Base de Datos**:
    *   Abre una terminal o consola de comandos en la carpeta raíz del proyecto.
    *   Ejecuta el siguiente comando:
        ```bash
        node update_db.js
        ```
    *   Este comando escaneará tus carpetas y actualizará tanto el archivo `images.json` como la lista interna en `script.js`.
3.  **Visualiza los cambios**:
    *   Refresca `index.html` en tu navegador.

## Compatibilidad y Visualización

*   **Uso Directo**: Puedes abrir el archivo `index.html` directamente haciendo doble clic desde tu explorador de archivos. Gracias al sistema de respaldo en `script.js`, la galería funcionará perfectamente.
*   **Servidor Local**: Si utilizas un servidor local (como Live Server en VS Code), la aplicación funcionará de forma óptima cargando los datos desde el archivo JSON.

## Correcciones y Mantenimiento

Si necesitas cambiar el texto de las etiquetas o el diseño, puedes editar `script.js` para la lógica o `style.css` para la apariencia. El script `update_db.js` garantiza que incluso si abres el archivo localmente, la lista de imágenes esté siempre sincronizada con lo que tienes en disco.
