
const images = document.querySelectorAll('.gallery img');

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0, 0, 0, 0.9)';
lightbox.style.display = 'none';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';

const lightboxImage = document.createElement('img');
lightboxImage.style.maxWidth = '90%';
lightboxImage.style.maxHeight = '80%';
lightboxImage.style.borderRadius = '10px';
lightboxImage.style.boxShadow = '0 8px 20px rgba(255, 255, 255, 0.2)';
lightbox.appendChild(lightboxImage);

images.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightbox.style.display = 'flex';
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
        lightbox.style.display = 'none';
    }
});
