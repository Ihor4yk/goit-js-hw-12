// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from "./js/pixabay-api.js"
import { renderImages } from "./js/render-functions.js";
// import { queryTemplate } from "./js/render-functions.js";

// -----------------------------------------------------------------------

export const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form");
const loading = document.querySelector('.loading');
const btnLoadMore = document.querySelector(".button-load-more");

let query;
let currentPage = 1;

// -----------------------------------------------------------------------

form.addEventListener("submit", handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  query = event.target.elements.query.value.trim();
  gallery.innerHTML = "";
  const data = await getImages(query, currentPage);
  renderImages(data.hits);
  showLoadMore()
}

btnLoadMore.addEventListener("click", handleClick);

async function handleClick() {
  currentPage += 1;
  const data = await getImages(query, currentPage);
  renderImages(data.hits);
  showLoadMore()
}

// -----------------------------------------------------------------------

function showLoadMore() {
  btnLoadMore.classList.remove("hidden");
}

function hideLoadMore() {
  btnLoadMore.classList.add("hidden");

}

// -----------------------------------------------------------------------
