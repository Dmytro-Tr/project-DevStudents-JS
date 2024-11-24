import{S as k,A as q,a as D,N as P,i as B,b as x}from"./assets/vendor-CsXjbZeb.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const b=document.documentElement,p=document.getElementById("theme-switcher"),u=localStorage.getItem("theme");u&&(b.setAttribute("data-theme",u),p.checked=u==="dark");p.addEventListener("change",()=>{const e=p.checked?"dark":"light";b.setAttribute("data-theme",e),localStorage.setItem("theme",e)});const C=document.querySelector(".header__toggle-btn"),$=document.querySelector(".nav");C.addEventListener("click",function(){this.classList.toggle("is-active"),$.classList.toggle("is-open"),document.documentElement.classList.toggle("no-scroll")});let _=window.scrollY;const c=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>_?(c.style.transform="translateY(-100%)",c.classList.remove("scroll")):(c.style.transform="translateY(0)",c.classList.add("scroll")),window.scrollY===0&&(c.style.transform="translateY(0)",c.classList.remove("scroll")),_=window.scrollY});new k(".hero__slider",{modules:[q],slidesPerView:1,autoHeight:!0,loop:!0});function y(e){const s=document.getElementById(e),n=s.querySelector(".skills__inner"),r=n.cloneNode(!0);s.appendChild(r);const t=()=>{const o=n.offsetWidth;s.style.width=`${o*2}px`};window.addEventListener("load",t),window.addEventListener("resize",t)}document.addEventListener("DOMContentLoaded",()=>{y("top-skills"),y("bottom-skills")});new D(".faq__accordion-container",{openOnInit:[0],collapse:!1,elementClass:"faq__acc-item",triggerClass:"faq__acc-trigger",panelClass:"faq__acc-panel"});const N="/project-DevStudents-JS/assets/power-pulse-1x-DTpgQafh.jpg",I="/project-DevStudents-JS/assets/power-pulse-2x-Cw5uS5EO.jpg",R="/project-DevStudents-JS/assets/vyshyvanka-1x-DYsLGOss.jpg",T="/project-DevStudents-JS/assets/vyshyvanka-2x-CMz-MVjp.jpg",M="/project-DevStudents-JS/assets/energy-flow-1x-DjCSsjIT.jpg",A="/project-DevStudents-JS/assets/energy-flow-2x-D7FAv1gG.jpg",O="/project-DevStudents-JS/assets/mimino-1x-61FpHT4m.jpg",F="/project-DevStudents-JS/assets/mimino-2x-BdScmuBT.jpg",Y="/project-DevStudents-JS/assets/chego-jewelry-1x-BrqolCaM.jpg",G="/project-DevStudents-JS/assets/chego-jewelry-2x-ZoNsjX18.jpg",V="/project-DevStudents-JS/assets/fruitbox-1x-BVptF6eP.jpg",z="/project-DevStudents-JS/assets/fruitbox-2x-Br3xIT71.jpg",H="/project-DevStudents-JS/assets/starlight-1x-Bgp0Ru8C.jpg",W="/project-DevStudents-JS/assets/starlight-2x-DztUzfdu.jpg",S=[{title:"power pulse webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:N,retina:I},link:"#"},{title:"vyshyvanka vibes Landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:R,retina:T},link:"#"},{title:"energy flow webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:M,retina:A},link:"#"},{title:"mimino website",techStack:"React, JavaScript, Node JS, Git",images:{regular:O,retina:F},link:"#"},{title:"chego jewelry website",techStack:"React, JavaScript, Node JS, Git",images:{regular:Y,retina:G},link:"#"},{title:"fruitbox online store",techStack:"React, JavaScript, Node JS, Git",images:{regular:V,retina:z},link:"#"},{title:"starlight studio landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:H,retina:W},link:"#"}],U=document.querySelector(".project__list"),w=document.getElementById("load-more"),v=document.getElementById("hide-projects");w.addEventListener("click",K);v.addEventListener("click",Q);let a=0;function Z(e){const s=new URL("/project-DevStudents-JS/assets/icons-CYC6FQL3.svg",import.meta.url).href;return`
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
  `}function K(){const e=S.slice(a,a+3);e.forEach(s=>{const n=Z(s);U.insertAdjacentHTML("beforeend",n)}),a+=e.length,a>=S.length&&(w.style.display="none",v.style.display="inline-block")}function Q(){document.querySelectorAll(".project__item").forEach((n,r)=>{r>=3&&n.remove()}),a=0,w.style.display="inline-block",v.style.display="none",document.querySelector(".load__more").focus()}const X="https://portfolio-js.b.goit.study",ee="/api/reviews",j=document.querySelector(".reviews__swiper-list"),te=new k(".reviews__swiper",{modules:[P],navigation:{nextEl:".swiper__btn-next",prevEl:".swiper__btn-prev"},speed:400,breakpoints:{320:{slidesPerView:1,spaceBetween:300},768:{slidesPerView:1,spaceBetween:300},1280:{slidesPerView:2,spaceBetween:32,centerInsufficientSlides:!0}}});async function se(){const{data:e}=await x(X+ee);return e}function oe(e){return e.map(({author:s,avatar_url:n,review:r})=>`<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class="p-l">${r}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${n}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${s}</h3>
          </div>
        </li>`).join("")}se().then(e=>{j.innerHTML=oe(e),te.update()}).catch(e=>{B.show({message:"Reviews not found"}),j.innerHTML=`<li>
                              <p class="p-l">Not found</p>
                            </li>`});const L=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,d=document.querySelector(".work-together__form"),l=d.querySelector(".form__email"),m=document.querySelector(".form__svg-check-right"),g=document.querySelector(".form__email-check-wrong"),ne=document.querySelector(".work-together__modal-part");l.addEventListener("blur",()=>{if(L.test(l.value))m.style.display="block",l.style.color="var(--text)",g.style.display="none";else{l.style.color="var(--error)",g.style.display="block",m.style.display="none";return}});d.addEventListener("submit",re);function re(e){e.preventDefault();const s=new FormData(d),n=s.get("form-email"),r=s.get("form-textarea");L.test(l.value)&&(ce(`${ie}/requests`,n,r).then(t=>{const o=`
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
      </div>`;ne.innerHTML=o,d.reset();const i=document.querySelector(".work-together__modal-window"),E=document.querySelector(".modal-window__close-btn"),h=()=>{i.classList.contains("is-open")&&(i.classList.remove("is-open"),document.removeEventListener("keydown",f))},f=J=>{J.key==="Escape"&&h()};E.addEventListener("click",()=>{h()}),document.addEventListener("keydown",f)}).catch(t=>{console.log(t)}),m.style.display="none",g.style.display="none")}const ie="https://portfolio-js.b.goit.study/api";async function ce(e,s,n){try{return(await x.post(e,{email:s,comment:n})).data}catch(r){throw new Error(r.message)}}
//# sourceMappingURL=index.js.map
