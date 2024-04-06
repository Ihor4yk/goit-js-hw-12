import{a as S,S as P,i as c}from"./assets/vendor-550cebad.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function p(t,o){const n="https://pixabay.com",s="/api/",e={key:"43196488-b1a28e2a6e2ea3f6c7718f6c5",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15},r=`${n}${s}?${e}`;return(await S.get(r,{params:e})).data}const B=new P(".gallery-link",{captionsData:"alt",captionDelay:250});function $(t){const{webformatURL:o,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:w}=t;return`<li class="photos-list-item">
      <a class="photos-list-link" href="${n}">
        <img loading="lazy" class="photo" src="${o}" alt="${s}"/>
      </a>
      <ul class="photo-information-container">
        <li class="item-photo-information-container">
          <p><span class="accent">Likes</span></br>${e}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Views</span></br>${r}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Comments</span></br>${a}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Downloads</span></br>${w}</p>
        </li>
      </ul>
    </li>`}function k(t){return t.map($).join("")}function g(t){const o=k(t);d.insertAdjacentHTML("beforeend",o),B.refresh()}const d=document.querySelector(".gallery"),q=document.querySelector(".form"),m=document.querySelector(".loader"),u=document.querySelector(".button-load-more");let l,i=1,f=0;const C=15;q.addEventListener("submit",R);async function R(t){if(t.preventDefault(),l=t.target.elements.query.value.trim(),d.innerHTML="",i=1,l===""){c.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"}),h(),t.target.reset();return}try{y();const o=await p(l,i);f=Math.ceil(o.totalHits/C),g(o.hits),o.hits&&o.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",progressBar:!1,close:!1,position:"topRight"})}catch{c.error({message:"Sorry, an error occurred while fetching images. Please try again!",backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight"})}b(),L(),t.target.reset()}u.addEventListener("click",v);async function v(){i+=1,y();try{const t=await p(l,i);g(t.hits),i>=f&&c.error({message:"We're sorry, but you've reached the end of search results!",backgroundColor:"lightBlue",icon:!1,progressBar:!1,close:!1,position:"topRight"})}catch{c.error({message:"Sorry, an error occurred while fetching images. Please try again!",backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight"})}O(),b(),L()}function M(){u.classList.remove("hidden")}function h(){u.classList.add("hidden")}function y(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}function L(){i>=f?h():M()}function O(){const t=d.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
