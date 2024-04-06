import{a as g}from"./assets/vendor-34f890c2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function l(o,n){const a="https://pixabay.com",r="/api/",e={key:"43196488-b1a28e2a6e2ea3f6c7718f6c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:15},t=`${a}${r}?${e}`;return(await g.get(t,{params:e})).data}function h(o){const{webformatURL:n,largeImageURL:a,tags:r,likes:e,views:t,comments:s,downloads:f}=o;return`<li class="photos-list-item">
      <a class="photos-list-link" href="${a}">
        <img loading="lazy" class="photo" src="${n}" alt="${r}"/>
      </a>
      <ul class="photo-information-container">
        <li class="item-photo-information-container">
          <p><span class="accent">Likes</span></br>${e}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Views</span></br>${t}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Comments</span></br>${s}</p>
        </li>
        <li class="item-photo-information-container">
          <p><span class="accent">Downloads</span></br>${f}</p>
        </li>
      </ul>
    </li>`}function y(o){return o.map(h).join("")}function u(o){const n=y(o);m.insertAdjacentHTML("beforeend",n)}const m=document.querySelector(".gallery"),L=document.querySelector(".form");document.querySelector(".loading");const p=document.querySelector(".button-load-more");let i,c=1;L.addEventListener("submit",b);async function b(o){o.preventDefault(),i=o.target.elements.query.value.trim(),m.innerHTML="";const n=await l(i,c);u(n.hits),d()}p.addEventListener("click",w);async function w(){c+=1;const o=await l(i,c);u(o.hits),d()}function d(){p.classList.remove("hidden")}
//# sourceMappingURL=commonHelpers.js.map
