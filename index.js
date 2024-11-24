import{S as j,A as R,a as q,N as x,i as C,b as k}from"./assets/vendor-CsXjbZeb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const b=document.documentElement,m=document.getElementById("theme-switcher"),u=localStorage.getItem("theme");u&&(b.setAttribute("data-theme",u),m.checked=u==="dark");m.addEventListener("change",()=>{const e=m.checked?"dark":"light";b.setAttribute("data-theme",e),localStorage.setItem("theme",e)});const I=document.querySelector(".header__toggle-btn"),U=document.querySelector(".nav");document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll('a[href^="#"]');for(let s of e)s.addEventListener("click",function(o){o.preventDefault();const r=this.getAttribute("href").substring(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})})});I.addEventListener("click",function(){this.classList.toggle("is-active"),U.classList.toggle("is-open"),document.documentElement.classList.toggle("no-scroll")});let _=window.scrollY;const a=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>_?(a.style.transform="translateY(-100%)",a.classList.remove("scroll")):(a.style.transform="translateY(0)",a.classList.add("scroll")),window.scrollY===0&&(a.style.transform="translateY(0)",a.classList.remove("scroll")),_=window.scrollY});new j(".hero__slider",{modules:[R],slidesPerView:1,autoHeight:!0,loop:!0});function y(e){const s=document.getElementById(e),o=s.querySelector(".skills__inner");for(let t=0;t<4;t++){const n=o.cloneNode(!0);s.appendChild(n)}const r=()=>{const t=o.offsetWidth;s.style.width=`${t*5}px`};window.addEventListener("load",r),window.addEventListener("resize",r)}document.addEventListener("DOMContentLoaded",()=>{y("top-skills"),y("bottom-skills")});new q(".faq__accordion-container",{openOnInit:[0],collapse:!1,elementClass:"faq__acc-item",triggerClass:"faq__acc-trigger",panelClass:"faq__acc-panel"});const S=[{title:"power pulse webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/power-pulse-1x-acMDRKKi.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/power-pulse-2x-ZP1rUwJ6.jpg",import.meta.url).href},link:"#"},{title:"vyshyvanka vibes Landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/vyshyvanka-1x-wHj5BVEI.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/vyshyvanka-2x-Bw30tzD2.jpg",import.meta.url).href},link:"#"},{title:"energy flow webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/energy-flow-1x-DXN7nhJD.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/energy-flow-2x-DnFIyAp2.jpg",import.meta.url).href},link:"#"},{title:"mimino website",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/mimino-1x-DfqnBMXG.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/mimino-2x-Cda9-ebG.jpg",import.meta.url).href},link:"#"},{title:"chego jewelry website",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/chego-jewelry-1x-DslUanu5.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/chego-jewelry-2x-CeDm7Ud8.jpg",import.meta.url).href},link:"#"},{title:"fruitbox online store",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/fruitbox-1x-FvtoJi5e.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/fruitbox-2x-Crz6mVAG.jpg",import.meta.url).href},link:"#"},{title:"starlight studio landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/starlight-1x-qCKERloI.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/starlight-2x-DajCcANY.jpg",import.meta.url).href},link:"#"}],N=document.querySelector(".project__list"),w=document.getElementById("load-more"),h=document.getElementById("hide-projects");w.addEventListener("click",$);h.addEventListener("click",A);let l=0;function P(e){const s=new URL("/project-DevStudents-JS/assets/icons-CYC6FQL3.svg",import.meta.url).href;return`
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
                  <use href="${s}#icon-arr-right"></use>
              </svg>
          </a>
        </div>
      </div>
    </li>
  `}function $(){const e=S.slice(l,l+3);e.forEach(s=>{const o=P(s);N.insertAdjacentHTML("beforeend",o)}),l+=e.length,l>=S.length&&(w.style.display="none",h.style.display="inline-block")}function A(){document.querySelectorAll(".project__item").forEach((o,r)=>{r>=3&&o.remove()}),l=0,w.style.display="inline-block",h.style.display="none",document.querySelector(".load__more").focus()}const B="https://portfolio-js.b.goit.study",M="/api/reviews",L=document.querySelector(".reviews__swiper-list"),T=new j(".reviews__swiper",{modules:[x],navigation:{nextEl:".swiper__btn-next",prevEl:".swiper__btn-prev"},speed:400,breakpoints:{320:{slidesPerView:1,spaceBetween:300},768:{slidesPerView:1,spaceBetween:300},1280:{slidesPerView:2,spaceBetween:32,centerInsufficientSlides:!0}}});async function G(){const{data:e}=await k(B+M);return e}function O(e){return e.map(({author:s,avatar_url:o,review:r})=>`<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class="p-l">${r}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${o}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${s}</h3>
          </div>
        </li>`).join("")}G().then(e=>{L.innerHTML=O(e),T.update()}).catch(e=>{C.show({message:"Reviews not found"}),L.innerHTML=`<li>
                              <p class="p-l">Not found</p>
                            </li>`});const E=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,d=document.querySelector(".work-together__form"),c=d.querySelector(".form__email"),p=document.querySelector(".form__svg-check-right"),g=document.querySelector(".form__email-check-wrong"),V=document.querySelector(".work-together__modal-part");c.addEventListener("blur",()=>{if(E.test(c.value))p.style.display="block",c.style.color="var(--text)",g.style.display="none";else{c.style.color="var(--error)",g.style.display="block",p.style.display="none";return}});d.addEventListener("submit",Y);function Y(e){e.preventDefault();const s=new FormData(d),o=s.get("form-email"),r=s.get("form-textarea");E.test(c.value)&&(z(`${F}/requests`,o,r).then(t=>{const n=`
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
      </div>`;V.innerHTML=n,d.reset();const i=document.querySelector(".work-together__modal-window"),J=document.querySelector(".modal-window__close-btn"),f=()=>{i.classList.contains("is-open")&&(i.classList.remove("is-open"),document.removeEventListener("keydown",v))},v=D=>{D.key==="Escape"&&f()};J.addEventListener("click",()=>{f()}),document.addEventListener("keydown",v)}).catch(t=>{console.log(t)}),p.style.display="none",g.style.display="none")}const F="https://portfolio-js.b.goit.study/api";async function z(e,s,o){try{return(await k.post(e,{email:s,comment:o})).data}catch(r){throw new Error(r.message)}}
//# sourceMappingURL=index.js.map
