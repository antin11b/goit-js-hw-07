import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const GalleryItemMarkup = creatGalleryCardMarkup(galleryItems);

function creatGalleryCardMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    }).join('');
};

galleryEl.insertAdjacentHTML('beforeend', GalleryItemMarkup);
let modalWindow;

function onGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    modalWindow = basicLightbox.create(`
		<img src="${evt.target.dataset.source}">
	`)
    modalWindow.show(window.addEventListener('keydown', onEscKeyPress));
};

function onEscKeyPress(evt) {
    evt.preventDefault();
    if (evt.code === 'Escape') {
        modalWindow.close(window.removeEventListener('keydown', onEscKeyPress));
    }
};

galleryEl.addEventListener('click', onGalleryClick);