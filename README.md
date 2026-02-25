# 🎨 Comics Explorer - Galería Interactiva Premium

![Versión](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Licencia](https://img.shields.io/badge/license-MIT-green.svg)
![Tecnologías](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20JS-orange.svg)

**Comics Explorer** es una plataforma web elegante y moderna diseñada para organizar y visualizar colecciones de cómics digitales o presentadores interactivos. Ofrece una experiencia de usuario fluida con un diseño de vanguardia basado en **Glassmorphism**.

---

## ✨ Características Principales

- **💎 Diseño Premium**: Interfaz oscura con efectos de desenfoque (Glassmorphism), gradientes vibrantes y tipografía moderna.
- **📱 Responsivo**: Adaptable a cualquier dispositivo (móviles, tablets y computadoras).
- **🖼️ Galería Dinámica**: Sistema que detecta automáticamente nuevas portadas dentro del directorio de imágenes.
- **🎭 Visor Integrado**: Abre los cómics en una ventana emergente (modal) sin necesidad de recargar la página o salir de la aplicación.
- **🔄 Sincronización Local**: Incluye herramientas para actualizar la base de datos de imágenes de forma automática.
- **🌐 Compatibilidad Dual**: Funciona tanto en servidores locales (Live Server) como abriendo el archivo directamente (`file://`).

---

## 🤖 Inteligencia Artificial y Generación

Los contenidos interactivos y las imágenes presentadas en esta galería han sido potenciados por tecnologías de inteligencia artificial de última generación:

- **[Pollinations.ai](https://pollinations.ai/)**: Se han utilizado las APIs de Pollinations para la generación dinámica de las imágenes y el contenido de los cómics, permitiendo una creatividad visual sin precedentes y una narrativa enriquecida.
- **Asistencia de IA**: El desarrollo de esta aplicación contó con la asistencia de modelos de lenguaje avanzados para la estructuración de código y diseño de interfaz.


## 🛠️ Requisitos del Sistema

- Un navegador web moderno (Chrome, Edge, Firefox, Safari).
- **Node.js** (opcional, necesario únicamente para usar la herramienta de actualización automática).

## 🚀 Instalación y Uso

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/Comics_repo.git
   ```

2. **Organiza tus archivos**:
   - Coloca las portadas en la carpeta `/images`.
   - Coloca los archivos HTML de los cómics en la carpeta `/comics`.
   - *Asegúrate de que ambos archivos tengan el mismo nombre (ej: `ia.png` y `ia.html`).*

3. **Actualiza la galería**:
   Si has añadido nuevos archivos, ejecuta el script de sincronización:
   ```bash
   node update_db.js
   ```

4. **¡Disfruta!**:
   Abre `index.html` en tu navegador.

## 📁 Estructura del Proyecto

```text
├── comics/           # Archivos HTML de los presentadores
├── images/           # Portadas de los cómics (.png, .jpg)
├── index.html        # Página principal
├── style.css         # Estilos visuales y animaciones
├── script.js         # Lógica de la galería y el visor
├── update_db.js      # Script de automatización (Node.js)
├── images.json       # Base de datos de la colección
└── README.md         # Documentación del proyecto
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar el diseño o añadir nuevas funciones, no dudes en abrir un *Issue* o enviar un *Pull Request*.

---

Desarrollado con ❤️ para la comunidad de educación digital.
