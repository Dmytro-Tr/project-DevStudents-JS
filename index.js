import{S as b,A as q,a as I,N as C,K as N,i as E,b as x}from"./assets/vendor-Czw9bCZh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const J=document.documentElement,f=document.getElementById("theme-switcher"),g=localStorage.getItem("theme");g&&(J.setAttribute("data-theme",g),f.checked=g==="dark");f.addEventListener("change",()=>{const e=f.checked?"dark":"light";J.setAttribute("data-theme",e),localStorage.setItem("theme",e)});const U=document.querySelector(".header__toggle-btn"),$=document.querySelector(".nav");document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll('a[href^="#"]');for(let t of e)t.addEventListener("click",function(r){r.preventDefault();const o=this.getAttribute("href").substring(1);document.getElementById(o).scrollIntoView({behavior:"smooth",block:"start"})})});U.addEventListener("click",function(){this.classList.toggle("is-active"),$.classList.toggle("is-open"),document.documentElement.classList.toggle("no-scroll")});let S=window.scrollY;const a=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>S?(a.style.transform="translateY(-100%)",a.classList.remove("scroll")):(a.style.transform="translateY(0)",a.classList.add("scroll")),window.scrollY===0&&(a.style.transform="translateY(0)",a.classList.remove("scroll")),S=window.scrollY});new b(".hero__slider",{modules:[q],slidesPerView:1,autoHeight:!0,loop:!0});function L(e){const t=document.getElementById(e),r=t.querySelector(".skills__inner");for(let s=0;s<4;s++){const n=r.cloneNode(!0);t.appendChild(n)}const o=()=>{const s=r.offsetWidth;t.style.width=`${s*5}px`};window.addEventListener("load",o),window.addEventListener("resize",o)}document.addEventListener("DOMContentLoaded",()=>{L("top-skills"),L("bottom-skills")});new I(".faq__accordion-container",{openOnInit:[0],collapse:!1,elementClass:"faq__acc-item",triggerClass:"faq__acc-trigger",panelClass:"faq__acc-panel"});const k=[{title:"power pulse webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/power-pulse-1x-acMDRKKi.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/power-pulse-2x-ZP1rUwJ6.jpg",import.meta.url).href},link:"#"},{title:"vyshyvanka vibes Landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/vyshyvanka-1x-wHj5BVEI.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/vyshyvanka-2x-Bw30tzD2.jpg",import.meta.url).href},link:"#"},{title:"energy flow webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/energy-flow-1x-DXN7nhJD.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/energy-flow-2x-DnFIyAp2.jpg",import.meta.url).href},link:"#"},{title:"mimino website",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/mimino-1x-DfqnBMXG.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/mimino-2x-Cda9-ebG.jpg",import.meta.url).href},link:"#"},{title:"chego jewelry website",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/chego-jewelry-1x-DslUanu5.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/chego-jewelry-2x-CeDm7Ud8.jpg",import.meta.url).href},link:"#"},{title:"fruitbox online store",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/fruitbox-1x-FvtoJi5e.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/fruitbox-2x-Crz6mVAG.jpg",import.meta.url).href},link:"#"},{title:"starlight studio landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:new URL("/project-DevStudents-JS/assets/starlight-1x-qCKERloI.jpg",import.meta.url).href,retina:new URL("/project-DevStudents-JS/assets/starlight-2x-DajCcANY.jpg",import.meta.url).href},link:"#"}],A=document.querySelector(".project__list"),v=document.getElementById("load-more"),_=document.getElementById("hide-projects");v.addEventListener("click",B);_.addEventListener("click",M);let c=0;function P(e){const t=new URL("/project-DevStudents-JS/assets/icons-CYC6FQL3.svg",import.meta.url).href;return`
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
                  <use href="${t}#icon-arr-right"></use>
              </svg>
          </a>
        </div>
      </div>
    </li>
  `}function B(){const e=k.slice(c,c+3);e.forEach(t=>{const r=P(t);A.insertAdjacentHTML("beforeend",r)}),c+=e.length,c>=k.length&&(v.style.display="none",_.style.display="inline-block")}function M(){document.querySelectorAll(".project__item").forEach((r,o)=>{o>=3&&r.remove()}),c=0,v.style.display="inline-block",_.style.display="none",document.querySelector(".load__more").focus()}const O="https://portfolio-js.b.goit.study",T="/api/reviews",j=document.querySelector(".reviews__swiper-list"),F=new b(".reviews__swiper",{modules:[C,N],keyboard:{enabled:!0},navigation:{nextEl:".swiper__btn-next",prevEl:".swiper__btn-prev"},speed:400,spaceBetween:32,breakpoints:{320:{slidesPerView:1},1280:{slidesPerView:2,centerInsufficientSlides:!0}}});async function G(){const{data:e}=await x(O+T);return e}function Y(e){return e.map(({author:t,avatar_url:r,review:o})=>`<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class="p-l">${o}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${r}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${t}</h3>
          </div>
        </li>`).join("")}G().then(e=>{j.innerHTML=Y(e),F.update()}).catch(e=>{E.show({message:"Reviews not found"}),j.innerHTML=`<li>
                              <p class="p-l">Not found</p>
                            </li>`});const D=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,m=document.querySelector(".work-together__form"),l=m.querySelector(".form__email"),V=document.querySelector(".form__textarea"),h=document.querySelector(".form__svg-check-right"),w=document.querySelector(".form__email-check-wrong"),K=document.querySelector(".work-together__modal-part");l.addEventListener("blur",()=>{if(D.test(l.value))h.style.display="block",l.style.color="var(--text)",w.style.display="none";else{l.style.color="var(--error)",w.style.display="block",h.style.display="none";return}});let d={"form-email":"","form-textarea":""};function z(){const e=localStorage.getItem("form-data-storage");e&&(d=JSON.parse(e),l.value=d["form-email"],V.value=d["form-textarea"])}z();m.addEventListener("input",e=>{const t=e.target;t.name&&(d[t.name]=t.value,localStorage.setItem("form-data-storage",JSON.stringify(d)))});m.addEventListener("submit",H);function H(e){e.preventDefault();const t=new FormData(m),r=t.get("form-email"),o=t.get("form-textarea");D.test(l.value)&&(X(`${W}/requests`,r,o).then(s=>{const n=`
      <div class="work-together__modal-window is-open">
        <div class="modal-window__container container">
          <button class="modal-window__close-btn" type="button">
            <svg class="modal-window__svg" width="12" height="12">
              <use href="/images/icons.svg#icon-close"></use>
            </svg>
          </button>
          <h2 class="modal-window__title">
            ${s.title}
          </h2>
          <p class="modal-window__text p-l">
            ${s.message}
          </p>
        </div>
      </div>`;K.innerHTML=n,m.reset();const i=document.querySelector(".work-together__modal-window"),R=document.querySelector(".modal-window__close-btn"),u=()=>{i.classList.contains("is-open")&&(i.classList.remove("is-open"),document.removeEventListener("keydown",y))},y=p=>{p.key==="Escape"&&u()};i.addEventListener("click",p=>{p.target===i&&u()}),R.addEventListener("click",()=>{u()}),document.addEventListener("keydown",y)}).catch(s=>{E.error({icon:"",titleColor:"var(--text)",message:`${s.message}, try again later`,backgroundColor:"var(--error)",messageColor:"var(--text)",closeOnEscape:!0,position:"topCenter",transitionIn:"flipInX",transitionOut:"flipOutX"})}),localStorage.removeItem("form-data-storage"),t["form-email"]="",t["form-textarea"]="",h.style.display="none",w.style.display="none")}const W="https://portfolio-js.b.goit.study/api";async function X(e,t,r){try{return(await x.post(e,{email:t,comment:r})).data}catch(o){throw new Error(o.message)}}
//# sourceMappingURL=index.js.map
