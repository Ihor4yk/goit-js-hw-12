import axios from 'axios';

export async function getImages(query, currentPage) {
  const BASE_URL = "https://pixabay.com";
  const END_POINT = "/api/";
  const params = {
    key: "43196488-b1a28e2a6e2ea3f6c7718f6c5",
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page: currentPage,
    per_page: 15,
  }
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const res = await axios.get(url, { params, });
  return res.data;
}