import{S,A as L,a as x,b as E}from"./assets/vendor-yMjVgCq6.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const k=document.documentElement,f=document.getElementById("theme-switcher"),g=localStorage.getItem("theme");g&&(k.setAttribute("data-theme",g),f.checked=g==="dark");f.addEventListener("change",()=>{const e=f.checked?"dark":"light";k.setAttribute("data-theme",e),localStorage.setItem("theme",e)});const q=document.querySelector(".header__toggle-btn"),P=document.querySelector(".nav");q.addEventListener("click",function(){this.classList.toggle("is-active"),P.classList.toggle("is-open"),document.documentElement.classList.toggle("no-scroll")});let v=window.scrollY;const c=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>v?(c.style.transform="translateY(-100%)",c.classList.remove("scroll")):(c.style.transform="translateY(0)",c.classList.add("scroll")),window.scrollY===0&&(c.style.transform="translateY(0)",c.classList.remove("scroll")),v=window.scrollY});new S(".hero__slider",{modules:[L],slidesPerView:1,autoplay:{delay:5e3,disableOnInteraction:!1},loop:!0});function _(e,i){const r=document.getElementById(e),o=r.querySelector(".skills__inner");for(let t=0;t<i;t++){const s=o.cloneNode(!0);r.appendChild(s)}}document.addEventListener("DOMContentLoaded",()=>{_("top-skills",3),_("bottom-skills",3)});new x(".faq__accordion-container",{openOnInit:[0],collapse:!1,elementClass:"faq__acc-item",triggerClass:"faq__acc-trigger",panelClass:"faq__acc-panel"});const w=[{title:"power pulse webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:"/images/my-project/power-pulse-1x.jpg",retina:"/images/my-project/power-pulse-2x.jpg"},link:"#"},{title:"vyshyvanka vibes Landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:"/images/my-project/vyshyvanka-1x.jpg",retina:"/images/my-project/vyshyvanka-2x.jpg"},link:"#"},{title:"energy flow webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:"/images/my-project/energy-flow-1x.jpg",retina:"/images/my-project/energy-flow-2x.jpg"},link:"#"},{title:"mimino website",techStack:"React, JavaScript, Node JS, Git",images:{regular:"/images/my-project/mimino-1x.jpg",retina:"/images/my-project/mimino-2x.jpg"},link:"#"},{title:"chego jewelry website",techStack:"React, JavaScript, Node JS, Git",images:{regular:"/images/my-project/chego-jewelry-1x.jpg",retina:"/images/my-project/chego-jewelry-2x.jpg"},link:"#"},{title:"fruitbox online store",techStack:"React, JavaScript, Node JS, Git",images:{regular:"/images/my-project/fruitbox-1x.jpg",retina:"/images/my-project/fruitbox-2x.jpg"},link:"#"},{title:"starlight studio landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:"/images/my-project/starlight-1x.jpg",retina:"/images/my-project/starlight-2x.jpg"},link:"#"}],I=document.querySelector(".project__list"),h=document.getElementById("load-more"),y=document.getElementById("hide-projects");h.addEventListener("click",J);y.addEventListener("click",B);let n=0;function N(e){return`
    <li class="project__item">
      <img 
        src="${e.images.regular}" 
        srcset="${e.images.regular} 1x, ${e.images.retina} 2x" 
        alt="${e.title}" 
        class="project__image"
        title="${e.title}" 
      />
      <div class="project__info">
        <p class="project__tech__stack p-l">${e.techStack}</p>
        <div class="project__info__item">
          <h3 class="project__subtitle">${e.title}</h3>
          <a href="${e.link}" class="visit__btn p-l" target="_blank">VISIT
              <svg class="project__svg" width="15" height="15">
                  <use href="./images/icons.svg#icon-arr-right"></use>
              </svg>
          </a>
        </div>
      </div>
    </li>
  `}function J(){const e=w.slice(n,n+3);e.forEach(i=>{const r=N(i);I.insertAdjacentHTML("beforeend",r)}),n+=e.length,n>=w.length&&(h.style.display="none",y.style.display="inline-block")}function B(){document.querySelectorAll(".project__item").forEach((r,o)=>{o>=3&&r.remove()}),n=0,h.style.display="inline-block",y.style.display="none",document.querySelector(".load__more").focus()}const R="https://portfolio-js.b.goit.study",$="/api/reviews",j=document.querySelector(".reviews__swiper-list"),a=document.querySelector(".swiper__button-prev"),l=document.querySelector(".swiper__button-next"),p=new S(".reviews__swiper",{speed:400,breakpoints:{320:{slidesPerView:1,spaceBetween:300},768:{slidesPerView:1,spaceBetween:300},1280:{slidesPerView:2,spaceBetween:32}}});let d=p.activeIndex,m;async function M(){const{data:e}=await E(R+$);return e}function O(e){return e.map(({author:i,avatar_url:r,review:o})=>`<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class=".p-l">${o}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${r}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${i}</h3>
          </div>
        </li>`).join("")}function b(){m>1?d===0?(a.dataset.action=!1,l.dataset.action=!0):0<d&&d<m-1?(a.dataset.action=!0,l.dataset.action=!0):d===m-1&&(l.dataset.action=!1,a.dataset.action=!0):m===1&&(a.dataset.action=!1,l.dataset.action=!1)}M().then(e=>{m=e.length,b(),j.innerHTML=O(e)}).catch(e=>{alert("Reviews not found"),j.innerHTML="<p>Not found</p>"});l.addEventListener("click",e=>{p.slideNext()});a.addEventListener("click",e=>{p.slidePrev()});p.on("slideChange",()=>{d=p.activeIndex,b()});
//# sourceMappingURL=index.js.map
