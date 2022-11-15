import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallaryContainer = document.querySelector('.gallery');

function onClickGallaryElement(e) {
  e.preventDefault();
  const currentImg = e.target.dataset.source;
  if (!currentImg) {
    return;
  }

  let lightbox = new SimpleLightbox('.gallery a', {
    scrollZoom: false,
    captionDelay: 250,
    captionsData: 'alt',
    doubleTapZoom: 1,
  });
}

function onCreateImgGallary(gallaryItems) {
  return gallaryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__link" href='${original}'>
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}">
    </a>
    `;
    })
    .join('');
}
gallaryContainer.insertAdjacentHTML(
  'beforeend',
  onCreateImgGallary(galleryItems)
);
gallaryContainer.addEventListener('click', onClickGallaryElement);
