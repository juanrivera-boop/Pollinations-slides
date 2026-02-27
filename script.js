/**
 * Comics Explorer - Dynamic Gallery Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('image-grid');
    const modal = document.getElementById('comic-modal');
    const iframe = document.getElementById('comic-iframe');
    const closeBtn = document.querySelector('.close-btn');
    const openNewTabBtn = document.getElementById('open-new-tab');

    let currentComicUrl = '';

    // Function to load images
    async function loadGallery() {
        try {
            // Check if we are running via file:// protocol
            if (window.location.protocol === 'file:') {
                console.warn('Running locally via file:// protocol. Fetch might fail due to CORS.');
                // Embedded list for local file support
                const localImages = [
  "4RI-Cartoon_3D.png",
  "4RI.png",
  "Bits_y_bytes.png",
  "Blockchain.png",
  "Conjuntos-Pixar.png",
  "Descartes.png",
  "Descartes2.png",
  "Facotrizar-manga.png",
  "Fracciones-South_Park.png",
  "Fractales-Disney.png",
  "Github_comic.png",
  "IA.png",
  "IIoT-Marvel.png",
  "Inecuaciones-Stop-Motion-v1.png",
  "Inecuaciones-Stop-Motion-v2.png",
  "IoT.png",
  "IoT_Kawaii.png",
  "Nube.png",
  "Potencias-Looney-tunes.png",
  "Productos_notables-webtoon.png",
  "Proporciones-Hanna-Barbera.png",
  "Proporciones-Minions.png",
  "Recta_real.png",
  "Robotica.png",
  "RV.png",
  "Solin.png",
  "Turing.png",
  "Venn-Disney.png"
];
                renderGrid(localImages);
                return;
            }

            const response = await fetch('images.json?t=' + new Date().getTime());
            if (!response.ok) throw new Error('No se pudo cargar la lista de imágenes');

            const images = await response.json();
            renderGrid(images);
        } catch (error) {
            console.error('Error:', error);
            grid.innerHTML = `
                <div class="loader">
                    <p style="color: #ef4444;">Error al cargar la galería. Intenta usando un servidor local (Live Server) o revisa la consola.</p>
                </div>
            `;
        }
    }

    // Function to render the grid items
    function renderGrid(images) {
        grid.innerHTML = '';

        images.forEach(imageName => {
            // Get base name without extension
            const baseName = imageName.substring(0, imageName.lastIndexOf('.'));
            const imagePath = `images/${imageName}`;
            const comicPath = `comics/${baseName}.html`;

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${imagePath}" alt="${baseName}" loading="lazy">
                </div>
                <div class="card-info">
                    <h3 class="card-title">${baseName.replace(/_/g, ' ')}</h3>
                    <span class="card-tag">Interactivo</span>
                </div>
            `;

            card.addEventListener('click', () => openComic(comicPath));
            grid.appendChild(card);
        });
    }

    // Modal Control
    function openComic(url) {
        currentComicUrl = url;
        iframe.src = url;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            iframe.src = ''; // Clear iframe after animation
            document.body.style.overflow = '';
        }, 300);
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    openNewTabBtn.addEventListener('click', () => {
        if (currentComicUrl) {
            window.open(currentComicUrl, '_blank');
        }
    });

    // Handle Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Initial Load
    loadGallery();
});
