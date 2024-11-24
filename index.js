import{S as L,A as J,a as q,N as D,i as C,b as k}from"./assets/vendor-CsXjbZeb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const b=document.documentElement,m=document.getElementById("theme-switcher"),u=localStorage.getItem("theme");u&&(b.setAttribute("data-theme",u),m.checked=u==="dark");m.addEventListener("change",()=>{const e=m.checked?"dark":"light";b.setAttribute("data-theme",e),localStorage.setItem("theme",e)});const B=document.querySelector(".header__toggle-btn"),P=document.querySelector(".nav");B.addEventListener("click",function(){this.classList.toggle("is-active"),P.classList.toggle("is-open"),document.documentElement.classList.toggle("no-scroll")});let _=window.scrollY;const a=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>_?(a.style.transform="translateY(-100%)",a.classList.remove("scroll")):(a.style.transform="translateY(0)",a.classList.add("scroll")),window.scrollY===0&&(a.style.transform="translateY(0)",a.classList.remove("scroll")),_=window.scrollY});new L(".hero__slider",{modules:[J],slidesPerView:1,autoHeight:!0,loop:!0});function S(e){const s=document.getElementById(e),r=s.querySelector(".skills__inner"),n=r.cloneNode(!0);s.appendChild(n);const t=()=>{const o=r.offsetWidth;s.style.width=`${o*2}px`};window.addEventListener("load",t),window.addEventListener("resize",t)}document.addEventListener("DOMContentLoaded",()=>{S("top-skills"),S("bottom-skills")});new q(".faq__accordion-container",{openOnInit:[0],collapse:!1,elementClass:"faq__acc-item",triggerClass:"faq__acc-trigger",panelClass:"faq__acc-panel"});const y=[{title:"power pulse webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/power-pulse-1x-DTpgQafh.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/power-pulse-2x-Cw5uS5EO.jpg",import.meta.url).href},link:"#"},{title:"vyshyvanka vibes Landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/vyshyvanka-1x-DYsLGOss.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/vyshyvanka-2x-CMz-MVjp.jpg",import.meta.url).href},link:"#"},{title:"energy flow webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/energy-flow-1x-DjCSsjIT.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/energy-flow-2x-D7FAv1gG.jpg",import.meta.url).href},link:"#"},{title:"mimino website",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/mimino-1x-DfqnBMXG.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/mimino-2x-Cda9-ebG.jpg",import.meta.url).href},link:"#"},{title:"chego jewelry website",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/chego-jewelry-1x-BrqolCaM.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/chego-jewelry-2x-ZoNsjX18.jpg",import.meta.url).href},link:"#"},{title:"fruitbox online store",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/fruitbox-1x-BVptF6eP.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/fruitbox-2x-Br3xIT71.jpg",import.meta.url).href},link:"#"},{title:"starlight studio landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/starlight-1x-Bgp0Ru8C.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/starlight-2x-DztUzfdu.jpg",import.meta.url).href},link:"#"}],U=document.querySelector(".project__list"),w=document.getElementById("load-more"),h=document.getElementById("hide-projects");w.addEventListener("click",N);h.addEventListener("click",I);let l=0;function $(e){const s=new URL("/project-DevStudents-JS/assets/icons-CYC6FQL3.svg",import.meta.url).href;return`
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
  `}function N(){const e=y.slice(l,l+3);e.forEach(s=>{const r=$(s);U.insertAdjacentHTML("beforeend",r)}),l+=e.length,l>=y.length&&(w.style.display="none",h.style.display="inline-block")}function I(){document.querySelectorAll(".project__item").forEach((r,n)=>{n>=3&&r.remove()}),l=0,w.style.display="inline-block",h.style.display="none",document.querySelector(".load__more").focus()}const M="https://portfolio-js.b.goit.study",T="/api/reviews",j=document.querySelector(".reviews__swiper-list"),A=new L(".reviews__swiper",{modules:[D],navigation:{nextEl:".swiper__btn-next",prevEl:".swiper__btn-prev"},speed:400,breakpoints:{320:{slidesPerView:1,spaceBetween:300},768:{slidesPerView:1,spaceBetween:300},1280:{slidesPerView:2,spaceBetween:32,centerInsufficientSlides:!0}}});async function G(){const{data:e}=await k(M+T);return e}function O(e){return e.map(({author:s,avatar_url:r,review:n})=>`<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class="p-l">${n}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${r}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${s}</h3>
          </div>
        </li>`).join("")}G().then(e=>{j.innerHTML=O(e),A.update()}).catch(e=>{C.show({message:"Reviews not found"}),j.innerHTML=`<li>
                              <p class="p-l">Not found</p>
                            </li>`});const E=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,d=document.querySelector(".work-together__form"),c=d.querySelector(".form__email"),p=document.querySelector(".form__svg-check-right"),g=document.querySelector(".form__email-check-wrong"),Y=document.querySelector(".work-together__modal-part");c.addEventListener("blur",()=>{if(E.test(c.value))p.style.display="block",c.style.color="var(--text)",g.style.display="none";else{c.style.color="var(--error)",g.style.display="block",p.style.display="none";return}});d.addEventListener("submit",F);function F(e){e.preventDefault();const s=new FormData(d),r=s.get("form-email"),n=s.get("form-textarea");E.test(c.value)&&(z(`${V}/requests`,r,n).then(t=>{const o=`
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
      </div>`;Y.innerHTML=o,d.reset();const i=document.querySelector(".work-together__modal-window"),R=document.querySelector(".modal-window__close-btn"),f=()=>{i.classList.contains("is-open")&&(i.classList.remove("is-open"),document.removeEventListener("keydown",v))},v=x=>{x.key==="Escape"&&f()};R.addEventListener("click",()=>{f()}),document.addEventListener("keydown",v)}).catch(t=>{console.log(t)}),p.style.display="none",g.style.display="none")}const V="https://portfolio-js.b.goit.study/api";async function z(e,s,r){try{return(await k.post(e,{email:s,comment:r})).data}catch(n){throw new Error(n.message)}}
//# sourceMappingURL=index.js.map
