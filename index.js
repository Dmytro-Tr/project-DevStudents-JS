import{S as J,A as N,a as $,b as q}from"./assets/vendor-DTLM_MCx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const D=document.documentElement,h=document.getElementById("theme-switcher"),w=localStorage.getItem("theme");w&&(D.setAttribute("data-theme",w),h.checked=w==="dark");h.addEventListener("change",()=>{const e=h.checked?"dark":"light";D.setAttribute("data-theme",e),localStorage.setItem("theme",e)});const M=document.querySelector(".header__toggle-btn"),R=document.querySelector(".nav");M.addEventListener("click",function(){this.classList.toggle("is-active"),R.classList.toggle("is-open"),document.documentElement.classList.toggle("no-scroll")});let x=window.scrollY;const c=document.querySelector("header");window.addEventListener("scroll",()=>{window.scrollY>x?(c.style.transform="translateY(-100%)",c.classList.remove("scroll")):(c.style.transform="translateY(0)",c.classList.add("scroll")),window.scrollY===0&&(c.style.transform="translateY(0)",c.classList.remove("scroll")),x=window.scrollY});new J(".hero__slider",{modules:[N],slidesPerView:1,autoHeight:!0,loop:!0});function b(e){const s=document.getElementById(e),n=s.querySelector(".skills__inner"),r=n.cloneNode(!0);s.appendChild(r);const t=()=>{const o=n.offsetWidth;s.style.width=`${o*2}px`};window.addEventListener("load",t),window.addEventListener("resize",t)}document.addEventListener("DOMContentLoaded",()=>{b("top-skills"),b("bottom-skills")});new $(".faq__accordion-container",{openOnInit:[0],collapse:!1,elementClass:"faq__acc-item",triggerClass:"faq__acc-trigger",panelClass:"faq__acc-panel"});const T="/project-DevStudents-JS/assets/power-pulse-1x-DTpgQafh.jpg",A="/project-DevStudents-JS/assets/power-pulse-2x-Cw5uS5EO.jpg",O="/project-DevStudents-JS/assets/vyshyvanka-1x-DYsLGOss.jpg",F="/project-DevStudents-JS/assets/vyshyvanka-2x-CMz-MVjp.jpg",G="/project-DevStudents-JS/assets/energy-flow-1x-DjCSsjIT.jpg",V="/project-DevStudents-JS/assets/energy-flow-2x-D7FAv1gG.jpg",Y="/project-DevStudents-JS/assets/mimino-1x-61FpHT4m.jpg",z="/project-DevStudents-JS/assets/mimino-2x-BdScmuBT.jpg",H="/project-DevStudents-JS/assets/chego-jewelry-1x-BrqolCaM.jpg",W="/project-DevStudents-JS/assets/chego-jewelry-2x-ZoNsjX18.jpg",U="/project-DevStudents-JS/assets/fruitbox-1x-BVptF6eP.jpg",Z="/project-DevStudents-JS/assets/fruitbox-2x-Br3xIT71.jpg",K="/project-DevStudents-JS/assets/starlight-1x-Bgp0Ru8C.jpg",Q="/project-DevStudents-JS/assets/starlight-2x-DztUzfdu.jpg",L=[{title:"power pulse webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:T,retina:A},link:"#"},{title:"vyshyvanka vibes Landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:O,retina:F},link:"#"},{title:"energy flow webservice",techStack:"React, JavaScript, Node JS, Git",images:{regular:G,retina:V},link:"#"},{title:"mimino website",techStack:"React, JavaScript, Node JS, Git",images:{regular:Y,retina:z},link:"#"},{title:"chego jewelry website",techStack:"React, JavaScript, Node JS, Git",images:{regular:H,retina:W},link:"#"},{title:"fruitbox online store",techStack:"React, JavaScript, Node JS, Git",images:{regular:U,retina:Z},link:"#"},{title:"starlight studio landing page",techStack:"React, JavaScript, Node JS, Git",images:{regular:K,retina:Q},link:"#"}],X=document.querySelector(".project__list"),y=document.getElementById("load-more"),S=document.getElementById("hide-projects");y.addEventListener("click",te);S.addEventListener("click",se);let a=0;function ee(e){return`
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
                  <use href="/images/icons.svg#icon-arr-right"></use>
              </svg>
          </a>
        </div>
      </div>
    </li>
  `}function te(){const e=L.slice(a,a+3);e.forEach(s=>{const n=ee(s);X.insertAdjacentHTML("beforeend",n)}),a+=e.length,a>=L.length&&(y.style.display="none",S.style.display="inline-block")}function se(){document.querySelectorAll(".project__item").forEach((n,r)=>{r>=3&&n.remove()}),a=0,y.style.display="inline-block",S.style.display="none",document.querySelector(".load__more").focus()}const oe="https://portfolio-js.b.goit.study",ne="/api/reviews",E=document.querySelector(".reviews__swiper-list"),l=document.querySelector(".swiper__button-prev"),d=document.querySelector(".swiper__button-next"),g=new J(".reviews__swiper",{speed:400,breakpoints:{320:{slidesPerView:1,spaceBetween:300},768:{slidesPerView:1,spaceBetween:300},1280:{slidesPerView:2,spaceBetween:32}}});let u=g.activeIndex,p;async function re(){const{data:e}=await q(oe+ne);return e}function ie(e){return e.map(({author:s,avatar_url:n,review:r})=>`<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class=".p-l">${r}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${n}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${s}</h3>
          </div>
        </li>`).join("")}function P(){p>1?u===0?(l.dataset.action=!1,d.dataset.action=!0):0<u&&u<p-1?(l.dataset.action=!0,d.dataset.action=!0):u===p-1&&(d.dataset.action=!1,l.dataset.action=!0):p===1&&(l.dataset.action=!1,d.dataset.action=!1)}re().then(e=>{p=e.length,P(),E.innerHTML=ie(e)}).catch(e=>{alert("Reviews not found"),E.innerHTML="<p>Not found</p>"});d.addEventListener("click",e=>{g.slideNext()});l.addEventListener("click",e=>{g.slidePrev()});g.on("slideChange",()=>{u=g.activeIndex,P()});const B=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,v=document.querySelector(".work-together__form"),m=v.querySelector(".form__email"),f=document.querySelector(".form__svg-check-right"),_=document.querySelector(".form__email-check-wrong"),ce=document.querySelector(".work-together__modal-part");m.addEventListener("blur",()=>{if(B.test(m.value))f.style.display="block",m.style.color="var(--text)",_.style.display="none";else{m.style.color="var(--error)",_.style.display="block",f.style.display="none";return}});v.addEventListener("submit",ae);function ae(e){e.preventDefault();const s=new FormData(v),n=s.get("form-email"),r=s.get("form-textarea");B.test(m.value)&&(de(`${le}/requests`,n,r).then(t=>{const o=`
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
      </div>`;ce.innerHTML=o,v.reset();const i=document.querySelector(".work-together__modal-window"),C=document.querySelector(".modal-window__close-btn"),j=()=>{i.classList.contains("is-open")&&(i.classList.remove("is-open"),document.removeEventListener("keydown",k))},k=I=>{I.key==="Escape"&&j()};C.addEventListener("click",()=>{j()}),document.addEventListener("keydown",k)}).catch(t=>{console.log(t)}),f.style.display="none",_.style.display="none")}const le="https://portfolio-js.b.goit.study/api";async function de(e,s,n){try{return(await q.post(e,{email:s,comment:n})).data}catch(r){throw new Error(r.message)}}
//# sourceMappingURL=index.js.map
