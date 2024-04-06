import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery } from "../main";

// -------------------------------------------------------------------------------

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: "alt",
  captionDelay: 250,
});

// -------------------------------------------------------------------------------

function imageTemplate(obj) {
  const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = obj;
  return `<li class="photos-list-item">
      <a class="photos-list-link" href="${largeImageURL}">
        <img loading="lazy" class="photo" src="${webformatURL}" alt="${tags}"/>
      </a>
      <ul class="photo-information-container">
        <li class="item-photo-information-container">
          <p><span class="accent">Likes</span></br>${likes}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Views</span></br>${views}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Comments</span></br>${comments}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Downloads</span></br>${downloads}</p>
        </li>
      </ul>
    </li>`
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join("");
}

export function renderImages(arr) {
  const markup = imagesTemplate(arr);
  gallery.insertAdjacentHTML("beforeend", markup)
  lightbox.refresh();
}