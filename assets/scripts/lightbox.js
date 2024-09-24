const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

const handleLightbox = (id) => {
    lightbox.classList.remove('hidden');
    lightboxImage.src = `images/${id}`;
};

const hideLightbox = () => {
    lightbox.classList.add('hidden');
}