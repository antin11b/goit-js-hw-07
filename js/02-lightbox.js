import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const GalleryItemMarkup = creatGalleryCardMarkup(galleryItems);

function creatGalleryCardMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
    }).join('');
};

galleryEl.insertAdjacentHTML('beforeend', GalleryItemMarkup);
new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: 250 } );