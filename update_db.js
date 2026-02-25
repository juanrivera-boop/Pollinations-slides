const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');
const outputFile = path.join(__dirname, 'images.json');

// Supported image extensions
const extensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];

try {
    console.log('Leyendo directorio de imágenes...');
    const files = fs.readdirSync(imagesDir);

    const imageFiles = files.filter(file => {
        return extensions.includes(path.extname(file).toLowerCase());
    });

    // 1. Update images.json
    fs.writeFileSync(outputFile, JSON.stringify(imageFiles, null, 2));

    // 2. Update embedded list in script.js for file:// protocol support
    const scriptFile = path.join(__dirname, 'script.js');
    if (fs.existsSync(scriptFile)) {
        let scriptContent = fs.readFileSync(scriptFile, 'utf8');
        const regex = /const localImages = \[[\s\S]*?\];/;
        const newList = `const localImages = ${JSON.stringify(imageFiles, null, 2)};`;
        scriptContent = scriptContent.replace(regex, newList);
        fs.writeFileSync(scriptFile, scriptContent);
    }

    console.log('-------------------------------------------');
    console.log(`¡Éxito! Se han encontrado ${imageFiles.length} imágenes.`);
    console.log(`Bases de datos actualizadas (JSON y Script).`);
    console.log('-------------------------------------------');
} catch (error) {
    console.error('Error al actualizar la base de datos de imágenes:', error.message);
}
