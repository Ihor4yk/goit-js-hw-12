import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImages } from "./js/pixabay-api.js"
import { renderImages } from "./js/render-functions.js";

// -----------------------------------------------------------------------

export const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form");
const loaderEl = document.querySelector('.loader');
const btnLoadMore = document.querySelector(".button-load-more");

let query;
let currentPage = 1;
let maxPage = 0;
const perPage = 15;


// -----------------------------------------------------------------------

form.addEventListener("submit", handleSubmit);
async function handleSubmit(event) {
  event.preventDefault();
  query = event.target.elements.query.value.trim();
  gallery.innerHTML = "";
  currentPage = 1;

  if (query === "") {
      iziToast.error({
        backgroundColor: 'lightred',
        icon: false,
        progressBar: false,
        close: false,
        position: 'topRight',
        message: 'Please, fill the field!',
      });
    hideLoadMore();
    event.target.reset();
      return;
    }

  try {
    showLoader();
    const data = await getImages(query, currentPage);
    maxPage = Math.ceil(data.totalHits / perPage);
    renderImages(data.hits);

    if (data.hits && data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: 'red',      
        progressBar: false,     
        close: false,      
        position: 'topRight',         
      })
    }
  } catch (error) {
    iziToast.error({
      message: 'Sorry, an error occurred while fetching images. Please try again!',
      backgroundColor: 'red',      
      icon: false,           
      progressBar: false,         
      close: false, 
      position: 'topRight',
    });
  }
  hideLoader();
  checkBtnStatus();
  event.target.reset();
}

btnLoadMore.addEventListener("click", handleClick);
async function handleClick() {
  currentPage += 1;
  showLoader();
  try {
    const data = await getImages(query, currentPage);
    renderImages(data.hits);

    if (currentPage >= maxPage) {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results!",
        backgroundColor: 'lightBlue',
        icon: false,
        progressBar: false,
        close: false,
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Sorry, an error occurred while fetching images. Please try again!',
      backgroundColor: 'red',
      icon: false,
      progressBar: false,
      close: false,
      position: 'topRight',
    });
  }
  myScroll();
  hideLoader();
  checkBtnStatus();
}

// -----------------------------------------------------------------------

function showLoadMore() {
  btnLoadMore.classList.remove("hidden");
}

function hideLoadMore() {
  btnLoadMore.classList.add("hidden");

}

function showLoader() {
  loaderEl.classList.remove("hidden");
}

function hideLoader() {
  loaderEl.classList.add("hidden");

}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}

function myScroll() {
  const height = gallery.firstChild.getBoundingClientRect().height;
  scrollBy({
    top: height*2,
    behavior: "smooth",
  })
}