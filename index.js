import{S as q,A as R,a as B,b as P}from"./assets/vendor-yMjVgCq6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const $=document.documentElement,y=document.getElementById("theme-switcher"),f=localStorage.getItem("theme");f&&($.setAttribute("data-theme",f),y.checked=f==="dark");y.addEventListener("change",()=>{const e=y.checked?"dark":"light";$.setAttribute("data-theme",e),localStorage.setItem("theme",e)});const A=document.querySelector(".header__toggle-btn"),M=document.querySelector(".nav");A.addEventListener("click",function(){this.classList.toggle("is-active"),M.classList.toggle("is-open"),document.documentElement.classList.toggle("no-scroll")});let b=window.scrollY;const c=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>b?(c.style.transform="translateY(-100%)",c.classList.remove("scroll")):(c.style.transform="translateY(0)",c.classList.add("scroll")),window.scrollY===0&&(c.style.transform="translateY(0)",c.classList.remove("scroll")),b=window.scrollY});new q(".hero__slider",{modules:[R],slidesPerView:1,loop:!0});function L(e){const s=document.getElementById(e),i=s.querySelector(".skills__inner"),r=i.cloneNode(!0);s.appendChild(r);const t=()=>{const o=i.offsetWidth;s.style.width=`${o*2}px`};window.addEventListener("load",t),window.addEventListener("resize",t)}document.addEventListener("DOMContentLoaded",()=>{L("top-skills"),L("bottom-skills")});new B(".faq__accordion-container",{openOnInit:[0],collapse:!1,elementClass:"faq__acc-item",triggerClass:"faq__acc-trigger",panelClass:"faq__acc-panel"});const x=[{title:"power pulse webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:"./images/my-project/power-pulse-1x.jpg",retina:"./images/my-project/power-pulse-2x.jpg"},link:"#"},{title:"vyshyvanka vibes Landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:"./images/my-project/vyshyvanka-1x.jpg",retina:"./images/my-project/vyshyvanka-2x.jpg"},link:"#"},{title:"energy flow webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:"./images/my-project/energy-flow-1x.jpg",retina:"./images/my-project/energy-flow-2x.jpg"},link:"#"},{title:"mimino website",techStack:"React, JavaScript, Node JS, Git",images:{regular:"./images/my-project/mimino-1x.jpg",retina:"./images/my-project/mimino-2x.jpg"},link:"#"},{title:"chego jewelry website",techStack:"React, JavaScript, Node JS, Git",images:{regular:"./images/my-project/chego-jewelry-1x.jpg",retina:"./images/my-project/chego-jewelry-2x.jpg"},link:"#"},{title:"fruitbox online store",techStack:"React, JavaScript, Node JS, Git",images:{regular:"./images/my-project/fruitbox-1x.jpg",retina:"./images/my-project/fruitbox-2x.jpg"},link:"#"},{title:"starlight studio landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:"./images/my-project/starlight-1x.jpg",retina:"./images/my-project/starlight-2x.jpg"},link:"#"}],T=document.querySelector(".project__list"),v=document.getElementById("load-more"),j=document.getElementById("hide-projects");v.addEventListener("click",Y);j.addEventListener("click",G);let a=0;function O(e){return`
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
  `}function Y(){const e=x.slice(a,a+3);e.forEach(s=>{const i=O(s);T.insertAdjacentHTML("beforeend",i)}),a+=e.length,a>=x.length&&(v.style.display="none",j.style.display="inline-block")}function G(){document.querySelectorAll(".project__item").forEach((i,r)=>{r>=3&&i.remove()}),a=0,v.style.display="inline-block",j.style.display="none",document.querySelector(".load__more").focus()}const V="https://portfolio-js.b.goit.study",F="/api/reviews",E=document.querySelector(".reviews__swiper-list"),l=document.querySelector(".swiper__button-prev"),d=document.querySelector(".swiper__button-next"),g=new q(".reviews__swiper",{speed:400,breakpoints:{320:{slidesPerView:1,spaceBetween:300},768:{slidesPerView:1,spaceBetween:300},1280:{slidesPerView:2,spaceBetween:32}}});let m=g.activeIndex,u;async function W(){const{data:e}=await P(V+F);return e}function D(e){return e.map(({author:s,avatar_url:i,review:r})=>`<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class=".p-l">${r}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${i}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${s}</h3>
          </div>
        </li>`).join("")}function N(){u>1?m===0?(l.dataset.action=!1,d.dataset.action=!0):0<m&&m<u-1?(l.dataset.action=!0,d.dataset.action=!0):m===u-1&&(d.dataset.action=!1,l.dataset.action=!0):u===1&&(l.dataset.action=!1,d.dataset.action=!1)}W().then(e=>{u=e.length,N(),E.innerHTML=D(e)}).catch(e=>{alert("Reviews not found"),E.innerHTML="<p>Not found</p>"});d.addEventListener("click",e=>{g.slideNext()});l.addEventListener("click",e=>{g.slidePrev()});g.on("slideChange",()=>{m=g.activeIndex,N()});const I=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,w=document.querySelector(".work-together__form"),p=w.querySelector(".form__email"),h=document.querySelector(".form__svg-check-right"),_=document.querySelector(".form__email-check-wrong"),H=document.querySelector(".work-together__modal-part");p.addEventListener("blur",()=>{if(I.test(p.value))h.style.display="block",p.style.color="var(--text)",_.style.display="none";else{p.style.color="var(--error)",_.style.display="block",h.style.display="none";return}});w.addEventListener("submit",z);function z(e){e.preventDefault();const s=new FormData(w),i=s.get("form-email"),r=s.get("form-textarea");I.test(p.value)&&(U(`${K}/requests`,i,r).then(t=>{const o=`
      <div class="work-together__modal-window is-open">
        <div class="modal-window__container container">
          <button class="modal-window__close-btn" type="button">
            <svg class="modal-window__svg" width="12" height="12">
              <use href="/images/icons.svg#icon-close"></use>
            </svg>
          </button>
          <p class="modal-window__title">
            ${t.title}
          </p>
          <p class="modal-window__text p-l">
            ${t.message}
          </p>
        </div>
      </div>`;H.innerHTML=o,w.reset();const n=document.querySelector(".work-together__modal-window"),C=document.querySelector(".modal-window__close-btn"),k=()=>{n.classList.contains("is-open")&&(n.classList.remove("is-open"),document.removeEventListener("keydown",S))},S=J=>{J.key==="Escape"&&k()};C.addEventListener("click",()=>{k()}),document.addEventListener("keydown",S)}).catch(t=>{console.log(t)}),h.style.display="none",_.style.display="none")}const K="https://portfolio-js.b.goit.study/api";async function U(e,s,i){try{return(await P.post(e,{email:s,comment:i})).data}catch(r){throw new Error(r.message)}}
//# sourceMappingURL=index.js.map
