function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequirea6b3;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},t.parcelRequirea6b3=i),i.register("3oXzi",(function(t,n){e(t.exports,"default",(function(){return s}));var r=i("dSs1Y");var s=new class{startSpinner(){r.Loading.arrows({svgColor:"#ff6b01"})}removeSpinner(){r.Loading.remove()}erorrSpinner(){r.Loading.arrows("temporary problems",{svgColor:"#ff6b01"})}constructor(){}}})),i.register("dSs1Y",(function(e,n){var r,i;r=void 0!==t?t:"undefined"!=typeof window?window:e.exports,i=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",r="Hourglass",i="Circle",s="Arrows",o="Dots",a="Pulse",c="Custom",u="Notiflix",l={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},h=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(h('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=f(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},p=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(u,m,g,v,w){if(!d("body"))return!1;t||y.Loading.init({});var I=f(!0,t,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var b={};"object"==typeof m?b=m:"object"==typeof g&&(b=g),t=f(!0,t,b)}var _,E,T="";if("string"==typeof m&&m.length>0&&(T=m),v){var S="";(T=T.length>t.messageMaxLength?p(T).toString().substring(0,t.messageMaxLength)+"...":p(T).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+T+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var k="";if(u===n)_=t.svgSize,E=t.svgColor,_||(_="60px"),E||(E="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+E+'" width="'+_+'" height="'+_+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(u===r)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(u===i)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(u===s)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(u===o)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(u===a)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(u===c&&null!==t.customSvgCode&&null===t.customSvgUrl)k=t.customSvgCode||"";else if(u===c&&null!==t.customSvgUrl&&null===t.customSvgCode)k='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(u===c&&(null===t.customSvgUrl||null===t.customSvgCode))return h('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;k=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var x=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),A=e.innerWidth,N=x>=A?A-40+"px":x+"px",C='<div style="width:'+N+"; height:"+N+';" class="'+t.className+"-icon"+(T.length>0?" nx-with-message":"")+'">'+k+"</div>",D=e.document.createElement("div");D.id=l.ID,D.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),D.style.zIndex=t.zindex,D.style.background=t.backgroundColor,D.style.animationDuration=t.cssAnimationDuration+"ms",D.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',D.style.display="flex",D.style.flexWrap="wrap",D.style.flexDirection="column",D.style.alignItems="center",D.style.justifyContent="center",t.rtl&&(D.setAttribute("dir","rtl"),D.classList.add("nx-rtl-on")),D.innerHTML=C+S,e.document.getElementById(D.id)||(e.document.body.appendChild(D),t.clickToClose&&e.document.getElementById(D.id).addEventListener("click",(function(){D.classList.add("nx-remove");var e=setTimeout((function(){null!==D.parentNode&&(D.parentNode.removeChild(D),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(l.ID))var R=e.document.getElementById(l.ID),L=setTimeout((function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(L)}),w);t=f(!0,t,I)},y={Loading:{init:function(n){t=f(!0,l,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(m,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return h("You have to initialize the Loading module before call Merge function."),!1;t=f(!0,t,e)},standard:function(e,t){g(n,e,t,!0,0)},hourglass:function(e,t){g(r,e,t,!0,0)},circle:function(e,t){g(i,e,t,!0,0)},arrows:function(e,t){g(s,e,t,!0,0)},dots:function(e,t){g(o,e,t,!0,0)},pulse:function(e,t){g(a,e,t,!0,0)},custom:function(e,t){g(c,e,t,!0,0)},notiflix:function(e,t){g(u,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),g(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var r=e.document.getElementById(l.ID);if(r)if(n.length>0){n=n.length>t.messageMaxLength?p(n).substring(0,t.messageMaxLength)+"...":p(n);var i=r.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var s=e.document.createElement("p");s.id=t.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=t.messageColor,s.style.fontSize=t.messageFontSize,s.innerHTML=n,r.appendChild(s)}}else h("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?f(!0,e.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),i.register("gY4QW",(function(e,t){var n=i("b4Lzd");i("7nQac");var r=i("hVw4Q");function s(e){e.preventDefault(),function(e,t){const n=`\n  <div class="modal-login-backdrop">\n    <div class="modal-login">\n      <button class="modal-login-button-close" type="button">\n        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">\n          <path d="M8 8L22 22" stroke-width="2"/>\n          <path d="M8 22L22 8" stroke-width="2"/>\n        </svg>\n      </button>\n      <h2>${e}</h2>\n      <div class="modal-login-content">\n        ${t}\n      </div>\n    </div>\n  </div>\n  `;document.body.insertAdjacentHTML("beforeend",n)}("Registration &amp; Authentication",'\n    \n    <input class="login-input" type="email" id="email" name="email" placeholder="Email" />\n    \n    <input class="login-input" type="password" id="password" name="password" placeholder="Password" />\n    <button class="login-button" id="login-sign-in" name="signin" type="button" disabled>\n        Sign In\n    </button>\n    <button class="login-button" id="login-sign-up" name="signup" type="button">\n        Registration\n    </button>\n    <p class="login-user-details">\n        <span id="login-sign-in-status">Signed out</span>\n    </p>\n  '),document.querySelector(".modal-login-button-close").addEventListener("click",o,{once:!0}),document.querySelector(".modal-login-backdrop").addEventListener("click",c),document.body.classList.add("no-scroll"),window.addEventListener("keydown",a),r.default.auth().onAuthStateChanged((function(e){e?(e.displayName,e.email,e.emailVerified,e.photoURL,e.isAnonymous,e.uid,e.providerData,document.getElementById("login-sign-in-status").textContent="Signed in",document.getElementById("login-sign-in").textContent="Sign out"):(document.getElementById("login-sign-in-status").textContent="Signed out",document.getElementById("login-sign-in").textContent="Sign in"),document.getElementById("login-sign-in").disabled=!1})),document.getElementById("login-sign-in").addEventListener("click",u,!1),document.getElementById("login-sign-up").addEventListener("click",l,!1)}function o(){document.querySelector(".modal-login-backdrop").remove(),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",a)}function a(e){"Escape"===e.code&&o()}function c(e){e.currentTarget===e.target&&o()}function u(){if(r.default.auth().currentUser)r.default.auth().signOut();else{var e=document.getElementById("email").value,t=document.getElementById("password").value;if(e.length<4)return void alert("Please enter an email address.");if(t.length<4)return void alert("Please enter a password.");r.default.auth().signInWithEmailAndPassword(e,t).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(n),console.log(e),document.getElementById("login-sign-in").disabled=!1}))}document.getElementById("login-sign-in").disabled=!0}function l(){var e=document.getElementById("email").value,t=document.getElementById("password").value;e.length<4?alert("Please enter an email address."):t.length<4?alert("Please enter a password."):r.default.auth().createUserWithEmailAndPassword(e,t).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"==t?alert("The password is too weak."):alert(n),console.log(e)}))}i("8j8By"),i("7qahy"),r.default.initializeApp(n.default),window.onload=function(){!function(){const e='\n    <li>\n      <a href="./" class="button-login" data-action="button-login">\n        <span class="button-login-label text-menu">LOGIN</span>\n      </a>\n    </li>\n  ';document.querySelector("ul.nav-list").insertAdjacentHTML("afterbegin",e),document.querySelector("a.button-login").addEventListener("click",s)}()}})),i.register("b4Lzd",(function(t,n){e(t.exports,"default",(function(){return r}));var r={apiKey:"AIzaSyAIIh3ETGj37RVMmyy1xyAEHcnvA4j1JJs",authDomain:"filmoteka-js52-team5.firebaseapp.com",projectId:"filmoteka-js52-team5",storageBucket:"filmoteka-js52-team5.appspot.com",messagingSenderId:"316870306630",appId:"1:316870306630:web:7920920738f7c0ebf59347",measurementId:"G-FJKM4M8NNT"}})),i.register("7nQac",(function(t,n){e(t.exports,"default",(function(){return i("hVw4Q").default}));i("hVw4Q");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i("hVw4Q").default.registerVersion("firebase","9.10.0","app-compat")})),i.register("hVw4Q",(function(t,n){e(t.exports,"default",(function(){return f}));var r=i("ffjl9"),s=i("4a6xH"),o=i("ix4Jr"),a=(o=i("ix4Jr"),i("7vF8m"));
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,o.deleteApp)(this._delegate))))}_getService(e,t=o._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,o._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,o._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,(0,o._addComponent)(e,new(0,s.Component)("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new(0,r.ErrorFactory)("app-compat","Firebase",u);const h=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e(){const t=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){const t={},n={__esModule:!0,initializeApp:function(i,s={}){const a=o.initializeApp(i,s);if((0,r.contains)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c},app:i,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:function(t){const s=t.name,a=s.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!=typeof e[a])throw l.create("invalid-app-argument",{appName:s});return e[a]()};void 0!==t.serviceProps&&(0,r.deepExtend)(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){return this._getService.bind(this,s).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:o}};function i(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,r.contains)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),i.App=e,n}(c);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,r.deepExtend)(t,e)},createSubscribe:r.createSubscribe,ErrorFactory:r.ErrorFactory,deepExtend:r.deepExtend}),t}(),d=new(0,a.Logger)("@firebase/app-compat");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if((0,r.isBrowser)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const f=h;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var p;(0,o.registerVersion)("@firebase/app-compat","0.1.34",p)})),i.register("ffjl9",(function(n,r){e(n.exports,"base64urlEncodeWithoutPadding",(function(){return o})),e(n.exports,"base64Decode",(function(){return a})),e(n.exports,"deepExtend",(function(){return c})),e(n.exports,"Deferred",(function(){return u})),e(n.exports,"createMockUserToken",(function(){return l})),e(n.exports,"getUA",(function(){return h})),e(n.exports,"isMobileCordova",(function(){return d})),e(n.exports,"isNode",(function(){return f})),e(n.exports,"isBrowser",(function(){return p})),e(n.exports,"isBrowserExtension",(function(){return m})),e(n.exports,"isReactNative",(function(){return g})),e(n.exports,"isIE",(function(){return y})),e(n.exports,"isSafari",(function(){return v})),e(n.exports,"isIndexedDBAvailable",(function(){return w})),e(n.exports,"validateIndexedDBOpenable",(function(){return I})),e(n.exports,"FirebaseError",(function(){return b})),e(n.exports,"ErrorFactory",(function(){return _})),e(n.exports,"contains",(function(){return T})),e(n.exports,"isEmpty",(function(){return S})),e(n.exports,"deepEqual",(function(){return k})),e(n.exports,"querystring",(function(){return A})),e(n.exports,"querystringDecode",(function(){return N})),e(n.exports,"extractQuerystring",(function(){return C})),e(n.exports,"createSubscribe",(function(){return D})),e(n.exports,"getModularInstance",(function(){return O}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){return function(e){const t=i(e);return s.encodeByteArray(t,!0)}(e).replace(/\./g,"")},a=function(e){try{return s.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=c(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function d(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){return"object"==typeof self&&self.self===self}function m(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function g(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function y(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"==typeof indexedDB}function I(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class b extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(E,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new b(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function S(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function k(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(x(n)&&x(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function x(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function N(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function C(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){return e&&e._delegate?e._delegate:e}})),i.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return s})),e(t.exports,"ComponentContainer",(function(){return c}));var r=i("ffjl9");class s{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,r.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===o?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),i.register("ix4Jr",(function(t,n){e(t.exports,"_DEFAULT_ENTRY_NAME",(function(){return d})),e(t.exports,"_apps",(function(){return p})),e(t.exports,"_components",(function(){return m})),e(t.exports,"_addComponent",(function(){return g})),e(t.exports,"_addOrOverwriteComponent",(function(){return y})),e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return w})),e(t.exports,"_removeServiceInstance",(function(){return I})),e(t.exports,"_clearComponents",(function(){return b})),e(t.exports,"SDK_VERSION",(function(){return S})),e(t.exports,"initializeApp",(function(){return k})),e(t.exports,"getApp",(function(){return x})),e(t.exports,"getApps",(function(){return A})),e(t.exports,"deleteApp",(function(){return N})),e(t.exports,"registerVersion",(function(){return C})),e(t.exports,"onLog",(function(){return D})),e(t.exports,"setLogLevel",(function(){return R})),e(t.exports,"FirebaseError",(function(){return i("ffjl9").FirebaseError}));var r=i("4a6xH"),s=i("7vF8m"),o=i("ffjl9"),a=i("cCiiD");o=i("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const u="@firebase/app",l="0.7.33",h=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e,t){e.container.addOrOverwriteComponent(t)}function v(e){const t=e.name;if(m.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of p.values())g(t,e);return!0}function w(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function I(e,t,n=d){w(e,t).clearInstance(n)}function b(){m.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new(0,o.ErrorFactory)("app","Firebase",_);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S="9.10.0";function k(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw E.create("bad-app-name",{appName:String(i)});const s=p.get(i);if(s){if((0,o.deepEqual)(e,s.options)&&(0,o.deepEqual)(n,s.config))return s;throw E.create("duplicate-app",{appName:i})}const a=new(0,r.ComponentContainer)(i);for(const e of m.values())a.addComponent(e);const c=new T(e,n,a);return p.set(i,c),c}function x(e=d){const t=p.get(e);if(!t)throw E.create("no-app",{appName:e});return t}function A(){return Array.from(p.values())}async function N(e){const t=e.name;p.has(t)&&(p.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function C(e,t,n){var i;let s=null!==(i=f[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}v(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function D(e,t){if(null!==e&&"function"!=typeof e)throw E.create("invalid-log-argument");(0,s.setUserLogHandler)(e,t)}function R(e){(0,s.setLogLevel)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="firebase-heartbeat-store";let O=null;function P(){return O||(O=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(L)}}).catch((e=>{throw E.create("idb-open",{originalErrorMessage:e.message})}))),O}async function M(e,t){var n;try{const n=(await P()).transaction(L,"readwrite"),r=n.objectStore(L);return await r.put(t,F(e)),n.done}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const t=E.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});h.warn(t.message)}}}function F(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=V();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=V(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),q(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),q(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new B(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function V(){return(new Date).toISOString().substring(0,10)}class B{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await P()).transaction(L).objectStore(L).get(F(e))}catch(e){if(e instanceof o.FirebaseError)h.warn(e.message);else{const n=E.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});h.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return M(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function q(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;j="",v(new(0,r.Component)("platform-logger",(e=>new c(e)),"PRIVATE")),v(new(0,r.Component)("heartbeat",(e=>new U(e)),"PRIVATE")),C(u,l,j),C(u,l,"esm2017"),C("fire-js","")})),i.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return i})),e(t.exports,"Logger",(function(){return l})),e(t.exports,"setLogLevel",(function(){return h})),e(t.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=c[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}}function h(e){r.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}})),i.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return s}));var r=i("ekHjI");r=i("ekHjI");function s(e,t,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),c=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(e=>{i((0,r.w)(a.result),e.oldVersion,e.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((e=>{o&&e.addEventListener("close",(()=>o())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return c.set(t,s),s}(0,r.r)((e=>({...e,get:(t,n,r)=>u(t,n)||e.get(t,n,r),has:(t,n)=>!!u(t,n)||e.has(t,n)})))})),i.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return p})),e(t.exports,"r",(function(){return h}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let l={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function h(e){l=e(l)}function d(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),p(s.get(this))}:function(...t){return p(e.apply(m(this),t))}:function(t,...n){const r=e.call(m(this),t,...n);return a.set(r,t.sort?t.sort():[t]),p(r)}}function f(e){return"function"==typeof e?d(e):(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));o.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,l):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(p(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&s.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),u.set(t,e)),t}const m=e=>u.get(e)})),i.register("8j8By",(function(e,t){i("cexSw")})),i.register("cexSw",(function(e,n){var r=i("hVw4Q");i("j3TbB");var s=i("6NE14"),o=i("j3TbB"),a=i("4a6xH"),c=i("ffjl9");function u(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function l(e=(0,c.getUA)()){return!("file:"!==u()&&"ionic:"!==u()&&"capacitor:"!==u()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function h(e=(0,c.getUA)()){return(0,c.isIE)()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=(0,c.getUA)()){return/Edge\/\d+/.test(e)}(e)}function d(){try{const e=self.localStorage,t=s.aI();if(e)return e.setItem(t,"1"),e.removeItem(t),!h()||(0,c.isIndexedDBAvailable)()}catch(e){return f()&&(0,c.isIndexedDBAvailable)()}return!1}function f(){return void 0!==t&&"WorkerGlobalScope"in t&&"importScripts"in t}function p(){return("http:"===u()||"https:"===u()||(0,c.isBrowserExtension)()||l())&&!((0,c.isReactNative)()||(0,c.isNode)())&&d()&&!f()}function m(){return l()&&"undefined"!=typeof document}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const g={LOCAL:"local",NONE:"none",SESSION:"session"},y=s.ax,v="persistence";async function w(e){await e._initializationPromise;const t=I(),n=s.az(v,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function I(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=s.ax;class _{async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return m()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return b(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!m()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}constructor(){this.browserResolver=s.ay(s.k),this.cordovaResolver=s.ay(o.cordovaPopupRedirectResolver),this.underlyingResolver=null,this._redirectPersistence=s.a,this._completeRedirectFn=s.aB,this._overrideRedirectResult=s.aC}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){return e.unwrap()}function T(e){const{_tokenResponse:t}=e instanceof c.FirebaseError?e.customData:e;if(!t)return null;if(!(e instanceof c.FirebaseError)&&"temporaryProof"in t&&"phoneNumber"in t)return s.P.credentialFromResult(e);const n=t.providerId;if(!n||n===s.o.PASSWORD)return null;let r;switch(n){case s.o.GOOGLE:r=s.Q;break;case s.o.FACEBOOK:r=s.N;break;case s.o.GITHUB:r=s.T;break;case s.o.TWITTER:r=s.W;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=t;return i||o||e||a?a?n.startsWith("saml.")?s.aL._create(n,a):s.J._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:e,accessToken:i}):new s.U(n).credential({idToken:e,accessToken:i,rawNonce:c}):null}return e instanceof c.FirebaseError?r.credentialFromError(e):r.credentialFromResult(e)}function S(e,t){return t.catch((t=>{throw t instanceof c.FirebaseError&&function(e,t){var n,r;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code))t.resolver=new x(e,s.an(e,t));else if(i){const e=T(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:(r=e,T(r)),additionalUserInfo:s.al(e),user:A.getOrCreate(n)};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r}))}async function k(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>S(e,n.confirm(t))}}class x{get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return S(E(this.auth),this.resolver.resolveSignIn(e))}constructor(e,t){this.resolver=t,this.auth=e.wrapped()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static getOrCreate(e){return A.USER_MAP.has(e)||A.USER_MAP.set(e,new A(e)),A.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return S(this.auth,s.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return k(this.auth,s.l(this._delegate,e,t))}async linkWithPopup(e){return S(this.auth,s.d(this._delegate,e,_))}async linkWithRedirect(e){return await w(s.aE(this.auth)),s.g(this._delegate,e,_)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return S(this.auth,s._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return k(this.auth,s.r(this._delegate,e,t))}reauthenticateWithPopup(e){return S(this.auth,s.e(this._delegate,e,_))}async reauthenticateWithRedirect(e){return await w(s.aE(this.auth)),s.h(this._delegate,e,_)}sendEmailVerification(e){return s.ab(this._delegate,e)}async unlink(e){return await s.ak(this._delegate,e),this}updateEmail(e){return s.ag(this._delegate,e)}updatePassword(e){return s.ah(this._delegate,e)}updatePhoneNumber(e){return s.u(this._delegate,e)}updateProfile(e){return s.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return s.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}constructor(e){this._delegate=e,this.multiFactor=s.ao(e)}}A.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N=s.ax;class C{get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?A.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){s.G(this._delegate,e,t)}applyActionCode(e){return s.a2(this._delegate,e)}checkActionCode(e){return s.a3(this._delegate,e)}confirmPasswordReset(e,t){return s.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return S(this._delegate,s.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return s.aa(this._delegate,e)}isSignInWithEmailLink(e){return s.a8(this._delegate,e)}async getRedirectResult(){N(p(),this._delegate,"operation-not-supported-in-this-environment");const e=await s.j(this._delegate,_);return e?S(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){o.addFrameworkForLogging(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=D(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=D(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return s.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return s.a0(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){y(Object.values(g).includes(t),e,"invalid-persistence-type"),(0,c.isReactNative)()?y(t!==g.SESSION,e,"unsupported-persistence-type"):(0,c.isNode)()?y(t===g.NONE,e,"unsupported-persistence-type"):f()?y(t===g.NONE||t===g.LOCAL&&(0,c.isIndexedDBAvailable)(),e,"unsupported-persistence-type"):y(t===g.NONE||d(),e,"unsupported-persistence-type")}(this._delegate,e),e){case g.SESSION:t=s.a;break;case g.LOCAL:t=await s.ay(s.i)._isAvailable()?s.i:s.b;break;case g.NONE:t=s.L;break;default:return s.at("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return S(this._delegate,s.X(this._delegate))}signInWithCredential(e){return S(this._delegate,s.Y(this._delegate,e))}signInWithCustomToken(e){return S(this._delegate,s.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return S(this._delegate,s.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return S(this._delegate,s.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return k(this._delegate,s.s(this._delegate,e,t))}async signInWithPopup(e){return N(p(),this._delegate,"operation-not-supported-in-this-environment"),S(this._delegate,s.c(this._delegate,e,_))}async signInWithRedirect(e){return N(p(),this._delegate,"operation-not-supported-in-this-environment"),await w(this._delegate),s.f(this._delegate,e,_)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return s.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;N(n,"invalid-api-key",{appName:e.name}),N(n,"invalid-api-key",{appName:e.name});const r="undefined"!=typeof window?_:void 0;this._delegate=t.initialize({options:{persistence:R(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(s.B),this.linkUnderlyingAuth()}}function D(e,t,n){let r=e;"function"!=typeof e&&({next:r,error:t,complete:n}=e);const i=r;return{next:e=>i(e&&A.getOrCreate(e)),error:t,complete:n}}function R(e,t){const n=function(e,t){const n=I();if(!n)return[];const r=s.az(v,e,t);switch(n.getItem(r)){case g.NONE:return[s.L];case g.LOCAL:return[s.i,s.a];case g.SESSION:return[s.a];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(s.i)||n.push(s.i),"undefined"!=typeof window)for(const e of[s.b,s.a])n.includes(e)||n.push(e);return n.includes(s.L)||n.push(s.L),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */C.Persistence=g;class L{static credential(e,t){return s.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}constructor(){this.providerId="phone",this._delegate=new s.P(E(r.default.auth()))}}L.PHONE_SIGN_IN_METHOD=s.P.PHONE_SIGN_IN_METHOD,L.PROVIDER_ID=s.P.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O=s.ax;class P{clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}constructor(e,t,n=r.default.app()){var i;O(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new s.R(e,t,n.auth()),this.type=this._delegate.type}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(M=r.default).INTERNAL.registerComponent(new(0,a.Component)("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new C(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:s.A.EMAIL_SIGNIN,PASSWORD_RESET:s.A.PASSWORD_RESET,RECOVER_EMAIL:s.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:s.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:s.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:s.A.VERIFY_EMAIL}},EmailAuthProvider:s.M,FacebookAuthProvider:s.N,GithubAuthProvider:s.T,GoogleAuthProvider:s.Q,OAuthProvider:s.U,SAMLAuthProvider:s.V,PhoneAuthProvider:L,PhoneMultiFactorGenerator:s.m,RecaptchaVerifier:P,TwitterAuthProvider:s.W,Auth:C,AuthCredential:s.H,Error:c.FirebaseError}).setInstantiationMode("LAZY").setMultipleInstances(!1)),M.registerVersion("@firebase/auth-compat","0.2.20")})),i.register("j3TbB",(function(t,n){e(t.exports,"cordovaPopupRedirectResolver",(function(){return m})),e(t.exports,"addFrameworkForLogging",(function(){return y})),e(t.exports,"ActionCodeOperation",(function(){return i("6NE14").A})),e(t.exports,"AuthCredential",(function(){return i("6NE14").H})),e(t.exports,"EmailAuthProvider",(function(){return i("6NE14").M})),e(t.exports,"FacebookAuthProvider",(function(){return i("6NE14").N})),e(t.exports,"GithubAuthProvider",(function(){return i("6NE14").T})),e(t.exports,"GoogleAuthProvider",(function(){return i("6NE14").Q})),e(t.exports,"OAuthCredential",(function(){return i("6NE14").J})),e(t.exports,"OAuthProvider",(function(){return i("6NE14").U})),e(t.exports,"PhoneAuthProvider",(function(){return i("6NE14").P})),e(t.exports,"PhoneMultiFactorGenerator",(function(){return i("6NE14").m})),e(t.exports,"ProviderId",(function(){return i("6NE14").o})),e(t.exports,"RecaptchaVerifier",(function(){return i("6NE14").R})),e(t.exports,"SAMLAuthCredential",(function(){return i("6NE14").aL})),e(t.exports,"SAMLAuthProvider",(function(){return i("6NE14").V})),e(t.exports,"TwitterAuthProvider",(function(){return i("6NE14").W})),e(t.exports,"_assert",(function(){return i("6NE14").ax})),e(t.exports,"_castAuth",(function(){return i("6NE14").aE})),e(t.exports,"_fail",(function(){return i("6NE14").at})),e(t.exports,"_generateEventId",(function(){return i("6NE14").aI})),e(t.exports,"_getInstance",(function(){return i("6NE14").ay})),e(t.exports,"_getRedirectResult",(function(){return i("6NE14").aB})),e(t.exports,"_overrideRedirectResult",(function(){return i("6NE14").aC})),e(t.exports,"_persistenceKeyName",(function(){return i("6NE14").az})),e(t.exports,"applyActionCode",(function(){return i("6NE14").a2})),e(t.exports,"browserLocalPersistence",(function(){return i("6NE14").b})),e(t.exports,"browserPopupRedirectResolver",(function(){return i("6NE14").k})),e(t.exports,"browserSessionPersistence",(function(){return i("6NE14").a})),e(t.exports,"checkActionCode",(function(){return i("6NE14").a3})),e(t.exports,"confirmPasswordReset",(function(){return i("6NE14").a1})),e(t.exports,"connectAuthEmulator",(function(){return i("6NE14").G})),e(t.exports,"createUserWithEmailAndPassword",(function(){return i("6NE14").a5})),e(t.exports,"debugErrorMap",(function(){return i("6NE14").B})),e(t.exports,"fetchSignInMethodsForEmail",(function(){return i("6NE14").aa})),e(t.exports,"getAdditionalUserInfo",(function(){return i("6NE14").al})),e(t.exports,"getMultiFactorResolver",(function(){return i("6NE14").an})),e(t.exports,"getRedirectResult",(function(){return i("6NE14").j})),e(t.exports,"inMemoryPersistence",(function(){return i("6NE14").L})),e(t.exports,"indexedDBLocalPersistence",(function(){return i("6NE14").i})),e(t.exports,"isSignInWithEmailLink",(function(){return i("6NE14").a8})),e(t.exports,"linkWithCredential",(function(){return i("6NE14").Z})),e(t.exports,"linkWithPhoneNumber",(function(){return i("6NE14").l})),e(t.exports,"linkWithPopup",(function(){return i("6NE14").d})),e(t.exports,"linkWithRedirect",(function(){return i("6NE14").g})),e(t.exports,"multiFactor",(function(){return i("6NE14").ao})),e(t.exports,"reauthenticateWithCredential",(function(){return i("6NE14")._})),e(t.exports,"reauthenticateWithPhoneNumber",(function(){return i("6NE14").r})),e(t.exports,"reauthenticateWithPopup",(function(){return i("6NE14").e})),e(t.exports,"reauthenticateWithRedirect",(function(){return i("6NE14").h})),e(t.exports,"sendEmailVerification",(function(){return i("6NE14").ab})),e(t.exports,"sendPasswordResetEmail",(function(){return i("6NE14").a0})),e(t.exports,"sendSignInLinkToEmail",(function(){return i("6NE14").a7})),e(t.exports,"signInAnonymously",(function(){return i("6NE14").X})),e(t.exports,"signInWithCredential",(function(){return i("6NE14").Y})),e(t.exports,"signInWithCustomToken",(function(){return i("6NE14").$})),e(t.exports,"signInWithEmailAndPassword",(function(){return i("6NE14").a6})),e(t.exports,"signInWithEmailLink",(function(){return i("6NE14").a9})),e(t.exports,"signInWithPhoneNumber",(function(){return i("6NE14").s})),e(t.exports,"signInWithPopup",(function(){return i("6NE14").c})),e(t.exports,"signInWithRedirect",(function(){return i("6NE14").f})),e(t.exports,"unlink",(function(){return i("6NE14").ak})),e(t.exports,"updateEmail",(function(){return i("6NE14").ag})),e(t.exports,"updatePassword",(function(){return i("6NE14").ah})),e(t.exports,"updatePhoneNumber",(function(){return i("6NE14").u})),e(t.exports,"updateProfile",(function(){return i("6NE14").af})),e(t.exports,"verifyBeforeUpdateEmail",(function(){return i("6NE14").ac})),e(t.exports,"verifyPasswordResetCode",(function(){return i("6NE14").a4}));var r=i("6NE14"),s=i("ffjl9");i("ix4Jr"),i("7vF8m"),i("4a6xH");r=i("6NE14");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a(e,t,n){var i;const{BuildInfo:s}=o();(0,r.aq)(t.sessionId,"AuthEvent did not contain a session ID");const a=await async function(e){const t=function(e){if((0,r.aq)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let t=0;t<e.length;t++)n[t]=e.charCodeAt(t);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),c={};return(0,r.ar)()?c.ibi=s.packageName:(0,r.as)()?c.apn=s.packageName:(0,r.at)(e,"operation-not-supported-in-this-environment"),s.displayName&&(c.appDisplayName=s.displayName),c.sessionId=a,(0,r.au)(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,c)}class c extends r.aA{addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}}async function u(e){const t=await d()._get(f(e));return t&&await d()._remove(f(e)),t}function l(e,t){var n,i;const s=function(e){const t=p(e),n=t.link?decodeURIComponent(t.link):void 0,r=p(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return p(i).link||i||r||n||e}(t);if(s.includes("/__/auth/callback")){const t=p(s),o=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,a=null===(i=null===(n=null==o?void 0:o.code)||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],c=a?(0,r.aw)(a):null;return c?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:s,postBody:null}}return null}function h(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function d(){return(0,r.ay)(r.b)}function f(e){return(0,r.az)("authEvent",e.config.apiKey,e.name)}function p(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,s.querystringDecode)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=class{async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new c(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,r.at)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){!function(e){var t,n,i,s,a,c,u,l,h,d;const f=o();(0,r.ax)("function"==typeof(null===(t=null==f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,r.ax)(void 0!==(null===(n=null==f?void 0:f.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,r.ax)("function"==typeof(null===(a=null===(s=null===(i=null==f?void 0:f.cordova)||void 0===i?void 0:i.plugins)||void 0===s?void 0:s.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"==typeof(null===(l=null===(u=null===(c=null==f?void 0:f.cordova)||void 0===c?void 0:c.plugins)||void 0===u?void 0:u.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,r.ax)("function"==typeof(null===(d=null===(h=null==f?void 0:f.cordova)||void 0===h?void 0:h.InAppBrowser)||void 0===d?void 0:d.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),(0,r.aD)(),await this._originValidation(e);const c=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:h(),postBody:null,tenantId:e.tenantId,error:(0,r.aw)(e,"no-auth-event")}}(e,n,i);await function(e,t){return d()._set(f(e),t)}(e,c);const u=await a(e,c,t);return async function(e,t,n){const{cordova:i}=o();let s=()=>{};try{await new Promise(((o,a)=>{let c=null;function u(){var e;o();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function l(){c||(c=window.setTimeout((()=>{a((0,r.aw)(e,"redirect-cancelled-by-user"))}),2e3))}function h(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}t.addPassiveListener(u),document.addEventListener("resume",l,!1),(0,r.as)()&&document.addEventListener("visibilitychange",h,!1),s=()=>{t.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",h,!1),c&&window.clearTimeout(c)}}))}finally{s()}}(e,s,await function(e){const{cordova:t}=o();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let s=null;i?t.plugins.browsertab.openUrl(e):s=t.InAppBrowser.open(e,(0,r.ap)()?"_blank":"_system","location=yes"),n(s)}))}))}(u))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=o(),n={};(0,r.ar)()?n.iosBundleId=t.packageName:(0,r.as)()?n.androidPackageName=t.packageName:(0,r.at)(e,"operation-not-supported-in-this-environment"),await(0,r.av)(e,n)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=o(),s=setTimeout((async()=>{await u(e),t.onEvent(g())}),500),a=async n=>{clearTimeout(s);const r=await u(e);let i=null;r&&(null==n?void 0:n.url)&&(i=l(r,n.url)),t.onEvent(i||g())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,a);const c=r,h=`${i.packageName.toLowerCase()}://`;o().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(h)&&a({url:e}),"function"==typeof c)try{c(e)}catch(e){console.error(e)}}}constructor(){this._redirectPersistence=r.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=r.aB,this._overrideRedirectResult=r.aC}};function g(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,r.aw)("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,t){(0,r.aE)(e)._logFramework(t)}})),i.register("6NE14",(function(t,n){e(t.exports,"o",(function(){return u})),e(t.exports,"A",(function(){return l})),e(t.exports,"B",(function(){return d})),e(t.exports,"at",(function(){return y})),e(t.exports,"aw",(function(){return v})),e(t.exports,"ax",(function(){return _})),e(t.exports,"aq",(function(){return T})),e(t.exports,"ay",(function(){return k})),e(t.exports,"L",(function(){return Z})),e(t.exports,"az",(function(){return ee})),e(t.exports,"as",(function(){return ae})),e(t.exports,"ar",(function(){return le})),e(t.exports,"ap",(function(){return he})),e(t.exports,"aE",(function(){return ge})),e(t.exports,"G",(function(){return ve})),e(t.exports,"H",(function(){return be})),e(t.exports,"J",(function(){return xe})),e(t.exports,"M",(function(){return De})),e(t.exports,"U",(function(){return Oe})),e(t.exports,"N",(function(){return Pe})),e(t.exports,"Q",(function(){return Me})),e(t.exports,"T",(function(){return Fe})),e(t.exports,"aL",(function(){return Ue})),e(t.exports,"V",(function(){return Ve})),e(t.exports,"W",(function(){return Be})),e(t.exports,"X",(function(){return ze})),e(t.exports,"ak",(function(){return He})),e(t.exports,"Y",(function(){return Ze})),e(t.exports,"Z",(function(){return et})),e(t.exports,"_",(function(){return tt})),e(t.exports,"$",(function(){return nt})),e(t.exports,"a0",(function(){return ot})),e(t.exports,"a1",(function(){return at})),e(t.exports,"a2",(function(){return ct})),e(t.exports,"a3",(function(){return ut})),e(t.exports,"a4",(function(){return lt})),e(t.exports,"a5",(function(){return ht})),e(t.exports,"a6",(function(){return dt})),e(t.exports,"a7",(function(){return ft})),e(t.exports,"a8",(function(){return pt})),e(t.exports,"a9",(function(){return mt})),e(t.exports,"aa",(function(){return gt})),e(t.exports,"ab",(function(){return yt})),e(t.exports,"ac",(function(){return vt})),e(t.exports,"af",(function(){return wt})),e(t.exports,"ag",(function(){return It})),e(t.exports,"ah",(function(){return bt})),e(t.exports,"al",(function(){return Nt})),e(t.exports,"an",(function(){return Rt})),e(t.exports,"ao",(function(){return Pt})),e(t.exports,"b",(function(){return Vt})),e(t.exports,"a",(function(){return qt})),e(t.exports,"aI",(function(){return Gt})),e(t.exports,"i",(function(){return nn})),e(t.exports,"R",(function(){return mn})),e(t.exports,"s",(function(){return yn})),e(t.exports,"l",(function(){return vn})),e(t.exports,"r",(function(){return wn})),e(t.exports,"u",(function(){return bn})),e(t.exports,"P",(function(){return _n})),e(t.exports,"c",(function(){return Cn})),e(t.exports,"e",(function(){return Dn})),e(t.exports,"d",(function(){return Rn})),e(t.exports,"aD",(function(){return Fn})),e(t.exports,"aC",(function(){return Un})),e(t.exports,"f",(function(){return qn})),e(t.exports,"h",(function(){return jn})),e(t.exports,"g",(function(){return Gn})),e(t.exports,"j",(function(){return zn})),e(t.exports,"aB",(function(){return Kn})),e(t.exports,"aA",(function(){return $n})),e(t.exports,"av",(function(){return Yn})),e(t.exports,"au",(function(){return dr})),e(t.exports,"k",(function(){return pr})),e(t.exports,"m",(function(){return gr}));var r=i("ffjl9"),s=i("ix4Jr"),o=i("l73V3"),a=i("7vF8m"),c=i("4a6xH");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};function h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},f=h,p=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),m=new(0,a.Logger)("@firebase/auth");function g(e,...t){m.logLevel<=a.LogLevel.ERROR&&m.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw b(e,...t)}function v(e,...t){return b(e,...t)}function w(e,t,n){const i=Object.assign(Object.assign({},f()),{[t]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(t,{appName:e.name})}function I(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&y(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function b(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return p.create(e,...t)}function _(e,t,...n){if(!e)throw b(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw g(t),new Error(t)}function T(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new Map;function k(e){T(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(T(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function A(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(A()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){T(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},O=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function M(e,t,n,i,s={}){return F(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),R.fetch()(V(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function F(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},L),t);try{const t=new B(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw q(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw q(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw q(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw q(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw w(e,a,o);y(e,a)}}catch(t){if(t instanceof r.FirebaseError)throw t;y(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await M(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function V(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?D(e.config,i):`${e.config.apiScheme}://${i}`}class B{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(v(this.auth,"network-request-failed"))),O.get())}))}}function q(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=v(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return 1e3*Number(e)}function z(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return g("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.base64Decode)(i);return e?JSON.parse(e):(g("Failed to decode base64 JWT payload"),null)}catch(e){return g("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function K(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof r.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class W{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${_initializeTime(){this.lastSignInTime=j(this.lastLoginAt),this.creationTime=j(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,async function(e,t){return M(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,o.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=e.providerData,l=a,[...u.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var u,l;const h=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!h&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new $(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(void 0!==e.idToken,"internal-error"),_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=z(e);return _(t,"internal-error"),_(void 0!==t.exp,"internal-error"),_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await F(e,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=V(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Q;return n&&(_("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Q,this.toJSON())}_performRefresh(){return E("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e,t){_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class X{async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,r.getModularInstance)(e),i=await n.getIdToken(t),s=z(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:j(G(s.auth_time)),issuedAtTime:j(G(s.iat)),expirationTime:j(G(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,r.getModularInstance)(e);await H(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new X(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await H(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,async function(e,t){return M(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:I,providerData:b,stsTokenManager:E}=t;_(v&&E,e,"internal-error");const T=Q.fromJSON(this.name,E);_("string"==typeof v,e,"internal-error"),Y(l,e.name),Y(h,e.name),_("boolean"==typeof w,e,"internal-error"),_("boolean"==typeof I,e,"internal-error"),Y(d,e.name),Y(f,e.name),Y(p,e.name),Y(m,e.name),Y(g,e.name),Y(y,e.name);const S=new X({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new Q;r.updateFromServerResponse(t);const i=new X({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await H(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=(0,o.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new W(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}J.type="NONE";const Z=J;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t,n){return`firebase:${e}:${t}:${n}`}class te{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?X._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new te(k(Z),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||k(Z);const s=ee(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=X._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new te(i,e,n)):new te(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ee(this.userKey,r.apiKey,i),this.fullPersistenceKey=ee("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(oe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(re(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ce(t))return"Blackberry";if(ue(t))return"Webos";if(ie(t))return"Safari";if((t.includes("chrome/")||se(t))&&!t.includes("edge/"))return"Chrome";if(ae(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function re(e=(0,r.getUA)()){return/firefox\//i.test(e)}function ie(e=(0,r.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function se(e=(0,r.getUA)()){return/crios\//i.test(e)}function oe(e=(0,r.getUA)()){return/iemobile/i.test(e)}function ae(e=(0,r.getUA)()){return/android/i.test(e)}function ce(e=(0,r.getUA)()){return/blackberry/i.test(e)}function ue(e=(0,r.getUA)()){return/webos/i.test(e)}function le(e=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function he(e=(0,r.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function de(e=(0,r.getUA)()){return le(e)||ae(e)||ue(e)||ce(e)||/windows phone/i.test(e)||oe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(e,t=[]){let n;switch(e){case"Browser":n=ne((0,r.getUA)());break;case"Worker":n=`${ne((0,r.getUA)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=k(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await te.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await H(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.getModularInstance)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(k(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&k(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await te.create(this,[k(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ye(this),this.idTokenSubscription=new ye(this),this.beforeStateQueue=new pe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function ge(e){return(0,r.getModularInstance)(e)}class ye{get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.createSubscribe)((e=>this.observer=e))}}function ve(e,t,n){const r=ge(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=we(t),{host:o,port:a}=function(e){const t=we(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ie(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ie(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function we(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ie(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class be{toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _e(e,t){return M(e,"POST","/v1/accounts:resetPassword",P(e,t))}async function Ee(e,t){return M(e,"POST","/v1/accounts:update",t)}async function Te(e,t){return M(e,"POST","/v1/accounts:sendOobCode",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se extends be{static _fromEmailAndPassword(e,t){return new Se(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Se(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ee(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends be{static _fromParams(e){const t=new xe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=(0,o.__rest)(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new xe(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return ke(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ke(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ke(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,r.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne extends be{static _fromVerification(e,t){return new Ne({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ne({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw q(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ae)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ne({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static parseLink(e){const t=function(e){const t=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).link,n=t?(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||t||e}(e);try{return new Ce(t)}catch(e){return null}}constructor(e){var t,n,i,s,o,a;const c=(0,r.querystringDecode)((0,r.extractQuerystring)(e)),u=null!==(t=c.apiKey)&&void 0!==t?t:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{static credential(e,t){return Se._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ce.parseLink(t);return _(n,"argument-error"),Se._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=De.PROVIDER_ID}}De.PROVIDER_ID="password",De.EMAIL_PASSWORD_SIGN_IN_METHOD="password",De.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Re{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}class Oe extends Le{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return _("providerId"in t&&"signInMethod"in t,"argument-error"),xe._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return _(e.idToken||e.accessToken,"argument-error"),xe._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Oe.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Oe.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new Oe(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Le{static credential(e){return xe._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com",Pe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends Le{static credential(e,t){return xe._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Me.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Me.GOOGLE_SIGN_IN_METHOD="google.com",Me.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe extends Le{static credential(e){return xe._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Fe.GITHUB_SIGN_IN_METHOD="github.com",Fe.PROVIDER_ID="github.com";class Ue extends be{_getIdTokenResponse(e){return ke(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ke(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ke(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Ue(n,i):null}static _create(e,t){return new Ue(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}constructor(e,t){super(e,e),this.pendingToken=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Re{static credentialFromResult(e){return Ve.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ve.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ue.fromJSON(e);return _(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ue._create(n,t)}catch(e){return null}}constructor(e){_(e.startsWith("saml."),"argument-error"),super(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Le{static credential(e,t){return xe._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Be.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qe(e,t){return U(e,"POST","/v1/accounts:signUp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.TWITTER_SIGN_IN_METHOD="twitter.com",Be.PROVIDER_ID="twitter.com";class je{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await X._fromIdTokenResponse(e,n,r),s=Ge(n);return new je({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ge(n);return new je({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Ge(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e){var t;const n=ge(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new je({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await qe(n,{returnSecureToken:!0}),i=await je._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends r.FirebaseError{static _fromErrorAndOperation(e,t,n,r){return new Ke(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ke.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function We(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ke._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t){const n=(0,r.getModularInstance)(e);await Ye(!0,n,t);const{providerUserInfo:i}=await async function(e,t){return M(e,"POST","/v1/accounts:update",t)}(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=$e(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Qe(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return je._forOperation(e,"link",r)}async function Ye(e,t,n){await H(t);const r=!1===e?"provider-already-linked":"no-such-provider";_($e(t.providerData).has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xe(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await K(e,We(i,s,t,e),n);_(r.idToken,i,"internal-error");const o=z(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(e.uid===a,i,"user-mismatch"),je._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&y(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t,n=!1){const r="signIn",i=await We(e,r,t),s=await je._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ze(e,t){return Je(ge(e),t)}async function et(e,t){const n=(0,r.getModularInstance)(e);return await Ye(!1,n,t.providerId),Qe(n,t)}async function tt(e,t){return Xe((0,r.getModularInstance)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){const n=ge(e),r=await async function(e,t){return U(e,"POST","/v1/accounts:signInWithCustomToken",P(e,t))}(n,{token:t,returnSecureToken:!0}),i=await je._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{static _fromServerResponse(e,t){return"phoneInfo"in t?it._fromServerResponse(e,t):y(e,"internal-error")}constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}}class it extends rt{static _fromServerResponse(e,t){return new it(t)}constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,t,n){var r;_((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),_(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(_(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n){const i=(0,r.getModularInstance)(e),s={requestType:"PASSWORD_RESET",email:t};n&&st(i,s,n),await async function(e,t){return Te(e,t)}(i,s)}async function at(e,t,n){await _e((0,r.getModularInstance)(e),{oobCode:t,newPassword:n})}async function ct(e,t){await async function(e,t){return M(e,"POST","/v1/accounts:update",P(e,t))}((0,r.getModularInstance)(e),{oobCode:t})}async function ut(e,t){const n=(0,r.getModularInstance)(e),i=await _e(n,{oobCode:t}),s=i.requestType;switch(_(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(i.mfaInfo,n,"internal-error");default:_(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=rt._fromServerResponse(ge(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function lt(e,t){const{data:n}=await ut((0,r.getModularInstance)(e),t);return n.email}async function ht(e,t,n){const r=ge(e),i=await qe(r,{returnSecureToken:!0,email:t,password:n}),s=await je._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function dt(e,t,n){return Ze((0,r.getModularInstance)(e),De.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n){const i=(0,r.getModularInstance)(e),s={requestType:"EMAIL_SIGNIN",email:t};_(n.handleCodeInApp,i,"argument-error"),n&&st(i,s,n),await async function(e,t){return Te(e,t)}(i,s)}function pt(e,t){const n=Ce.parseLink(t);return"EMAIL_SIGNIN"===(null==n?void 0:n.operation)}async function mt(e,t,n){const i=(0,r.getModularInstance)(e),s=De.credentialWithLink(t,n||x());return _(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Ze(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function gt(e,t){const n={identifier:t,continueUri:A()?x():"http://localhost"},{signinMethods:i}=await async function(e,t){return M(e,"POST","/v1/accounts:createAuthUri",P(e,t))}((0,r.getModularInstance)(e),n);return i||[]}async function yt(e,t){const n=(0,r.getModularInstance)(e),i={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&st(n.auth,i,t);const{email:s}=await async function(e,t){return Te(e,t)}(n.auth,i);s!==e.email&&await e.reload()}async function vt(e,t,n){const i=(0,r.getModularInstance)(e),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&st(i.auth,s,n);const{email:o}=await async function(e,t){return Te(e,t)}(i.auth,s);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.getModularInstance)(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await K(i,async function(e,t){return M(e,"POST","/v1/accounts:update",t)}(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function It(e,t){return _t((0,r.getModularInstance)(e),t,null)}function bt(e,t){return _t((0,r.getModularInstance)(e),null,t)}async function _t(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await K(e,Ee(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Tt extends Et{constructor(e,t,n,r){super(e,t,n),this.username=r}}class St extends Et{constructor(e,t){super(e,"facebook.com",t)}}class kt extends Tt{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class xt extends Et{constructor(e,t){super(e,"google.com",t)}}class At extends Tt{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Nt(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null==e?void 0:e.idToken)){const r=null===(n=null===(t=z(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n.sign_in_provider;if(r)return new Et(s,"anonymous"!==r&&"custom"!==r?r:null)}if(!r)return null;switch(r){case"facebook.com":return new St(s,i);case"github.com":return new kt(s,i);case"google.com":return new xt(s,i);case"twitter.com":return new At(s,i,e.screenName||null);case"custom":case"anonymous":return new Et(s,null);default:return new Et(s,r,i)}}(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{static _fromIdtoken(e,t){return new Ct("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ct("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Ct._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Ct._fromIdtoken(e.multiFactorSession.idToken)}return null}constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{static _fromError(e,t){const n=ge(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>rt._fromServerResponse(n,e)));_(r.mfaPendingCredential,n,"internal-error");const s=Ct._fromMfaPendingCredential(r.mfaPendingCredential);return new Dt(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await je._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return _(t.user,n,"internal-error"),je._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}}function Rt(e,t){var n;const i=(0,r.getModularInstance)(e),s=t;return _(t.customData.operationType,i,"argument-error"),_(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Dt._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{static _fromUser(e){return new Lt(e)}async getSession(){return Ct._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await K(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const n="string"==typeof e?e:e.uid,r=await this.user.getIdToken(),i=await K(this.user,(s=this.user.auth,o={idToken:r,mfaEnrollmentId:n},M(s,"POST","/v2/accounts/mfaEnrollment:withdraw",P(s,o))));var s,o;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(e){if("auth/user-token-expired"!==(null===(t=e)||void 0===t?void 0:t.code))throw e}}constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>rt._fromServerResponse(e.auth,t))))}))}}const Ot=new WeakMap;function Pt(e){const t=(0,r.getModularInstance)(e);return Ot.has(t)||Ot.set(t,Lt._fromUser(t)),Ot.get(t)}const Mt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{_isAvailable(){try{return this.storage?(this.storage.setItem(Mt,"1"),this.storage.removeItem(Mt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Ft{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,r.getUA)();return ie(e)||le(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=de(),this._shouldAllowMigration=!0}}Ut.type="LOCAL";const Vt=Ut;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Ft{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Bt.type="SESSION";const qt=Bt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new jt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.receivers=[];class zt{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Gt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(){return void 0!==Kt().WorkerGlobalScope&&"function"==typeof Kt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $t="firebaseLocalStorageDb",Ht="firebaseLocalStorage",Qt="fbase_key";class Yt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Xt(e,t){return e.transaction([Ht],t?"readwrite":"readonly").objectStore(Ht)}function Jt(){const e=indexedDB.open($t,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ht,{keyPath:Qt})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ht)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase($t);return new Yt(e).toPromise()}(),t(await Jt()))}))}))}async function Zt(e,t,n){const r=Xt(e,!0).put({[Qt]:t,value:n});return new Yt(r).toPromise()}function en(e,t){const n=Xt(e,!0).delete(t);return new Yt(n).toPromise()}class tn{async _openDb(){return this.db||(this.db=await Jt()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jt._getInstance(Wt()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new zt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jt();return await Zt(e,Mt,"1"),await en(e,Mt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Xt(e,!1).get(t),r=await new Yt(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>en(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xt(e,!1).getAll();return new Yt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}tn.type="LOCAL";const nn=tn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=v("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function sn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=1e12;class an{render(e,t){const n=this.counter;return this._widgets.set(n,new cn(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||on;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||on;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||on;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}constructor(e){this.auth=e,this.counter=on,this._widgets=new Map}}class cn{getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"==typeof e?document.getElementById(e):e;_(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}}const un=sn("rcb"),ln=new C(3e4,6e4);class hn{load(e,t=""){return _(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Kt().grecaptcha):new Promise(((n,i)=>{const s=Kt().setTimeout((()=>{i(v(e,"network-request-failed"))}),ln.get());Kt()[un]=()=>{Kt().clearTimeout(s),delete Kt()[un];const r=Kt().grecaptcha;if(!r)return void i(v(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};rn(`https://www.google.com/recaptcha/api.js??${(0,r.querystring)({onload:un,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(s),i(v(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Kt().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Kt().grecaptcha)||void 0===e?void 0:e.render)}}class dn{async load(e){return new an(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="recaptcha",pn={theme:"light",type:"image"};class mn{async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){_(!this.parameters.sitekey,this.auth,"argument-error"),_(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const n=Kt()[e];"function"==typeof n&&n(t)}}}assertNotDestroyed(){_(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){_(A()&&!Wt(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e){return(await M(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);_(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return _(this.recaptcha,this.auth,"internal-error"),this.recaptcha}constructor(e,t=Object.assign({},pn),n){this.parameters=t,this.type=fn,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ge(n),this.isInvisible="invisible"===this.parameters.size,_("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"==typeof e?document.getElementById(e):e;_(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new dn:new hn,this.validateStartingState()}}class gn{confirm(e){const t=Ne._fromVerification(this.verificationId,e);return this.onConfirmation(t)}constructor(e,t){this.verificationId=e,this.onConfirmation=t}}async function yn(e,t,n){const i=ge(e),s=await In(i,t,(0,r.getModularInstance)(n));return new gn(s,(e=>Ze(i,e)))}async function vn(e,t,n){const i=(0,r.getModularInstance)(e);await Ye(!1,i,"phone");const s=await In(i.auth,t,(0,r.getModularInstance)(n));return new gn(s,(e=>et(i,e)))}async function wn(e,t,n){const i=(0,r.getModularInstance)(e),s=await In(i.auth,t,(0,r.getModularInstance)(n));return new gn(s,(e=>tt(i,e)))}async function In(e,t,n){var r;const i=await n.verify();try{let s;if(_("string"==typeof i,e,"argument-error"),_(n.type===fn,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return M(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function bn(e,t){await Qe((0,r.getModularInstance)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{verifyPhoneNumber(e,t){return In(this.auth,e,(0,r.getModularInstance)(t))}static credential(e,t){return Ne._fromVerification(e,t)}static credentialFromResult(e){const t=e;return _n.credentialFromTaggedObject(t)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ne._fromTokenResponse(t,n):null}constructor(e){this.providerId=_n.PROVIDER_ID,this.auth=ge(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function En(e,t){return t?k(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.PROVIDER_ID="phone",_n.PHONE_SIGN_IN_METHOD="phone";class Tn extends be{_getIdTokenResponse(e){return ke(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ke(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ke(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Sn(e){return Je(e.auth,new Tn(e),e.bypassAuthState)}function kn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Xe(n,new Tn(e),e.bypassAuthState)}async function xn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),Qe(n,new Tn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sn;case"linkViaPopup":case"linkViaRedirect":return xn;case"reauthViaPopup":case"reauthViaRedirect":return kn;default:y(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new C(2e3,1e4);async function Cn(e,t,n){const r=ge(e);I(e,t,Re);const i=En(r,n);return new Ln(r,"signInViaPopup",t,i).executeNotNull()}async function Dn(e,t,n){const i=(0,r.getModularInstance)(e);I(i.auth,t,Re);const s=En(i.auth,n);return new Ln(i.auth,"reauthViaPopup",t,s,i).executeNotNull()}async function Rn(e,t,n){const i=(0,r.getModularInstance)(e);I(i.auth,t,Re);const s=En(i.auth,n);return new Ln(i.auth,"linkViaPopup",t,s,i).executeNotNull()}class Ln extends An{async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const e=Gt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(v(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(v(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(v(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Nn.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}}Ln.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On=new Map;class Pn extends An{async execute(){let e=On.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Bn(t),r=Vn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}On.set(this.auth._key(),e)}return this.bypassAuthState||On.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}async function Mn(e,t){return Vn(e)._set(Bn(t),"true")}function Fn(){On.clear()}function Un(e,t){On.set(e._key(),t)}function Vn(e){return k(e._redirectPersistence)}function Bn(e){return ee("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e,t,n){return async function(e,t,n){const r=ge(e);I(e,t,Re);const i=En(r,n);return await Mn(i,r),i._openRedirect(r,t,"signInViaRedirect")}(e,t,n)}function jn(e,t,n){return async function(e,t,n){const i=(0,r.getModularInstance)(e);I(i.auth,t,Re);const s=En(i.auth,n);await Mn(s,i.auth);const o=await Wn(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}(e,t,n)}function Gn(e,t,n){return async function(e,t,n){const i=(0,r.getModularInstance)(e);I(i.auth,t,Re);const s=En(i.auth,n);await Ye(!1,i,t.providerId),await Mn(s,i.auth);const o=await Wn(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}(e,t,n)}async function zn(e,t){return await ge(e)._initializationPromise,Kn(e,t,!1)}async function Kn(e,t,n=!1){const r=ge(e),i=En(r,t),s=new Pn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Wn(e){const t=Gt(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Qn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(v(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hn(e))}saveEventToCache(e){this.cachedEventUids.add(Hn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Hn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Qn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function Yn(e,t={}){return M(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jn=/^https?/;function Zn(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Jn.test(n))return!1;if(Xn.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new C(3e4,6e4);function tr(){const e=Kt().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let nr=null;function rr(e){return nr=nr||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){tr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tr(),n(v(e,"network-request-failed"))},timeout:er.get()})}if(null===(i=null===(r=Kt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Kt().gapi)||void 0===s?void 0:s.load)){const t=sn("iframefcb");return Kt()[t]=()=>{gapi.load?o():n(v(e,"network-request-failed"))},rn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw nr=null,e}))}(e),nr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new C(5e3,15e3),sr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},or=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ar(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?D(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=or.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.querystring)(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ur{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function lr(e,t,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},cr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.getUA)().toLowerCase();n&&(c=se(l)?"_blank":n),re(l)&&(t=t||"http://localhost",u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,r.getUA)()){var t;return le(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",c),new ur(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(e){}return new ur(d)}const hr="emulator/auth/handler";function dr(e,t,n,i,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.SDK_VERSION,eventId:o};if(t instanceof Re){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.isEmpty)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Le){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];return`${function({config:e}){return e.emulator?D(e,hr):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${(0,r.querystring)(u).slice(1)}`}const fr="webStorageSupport";const pr=class{async _openPopup(e,t,n,r){var i;T(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return lr(e,dr(e,t,n,x(),r),Gt())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=dr(e,t,n,x(),r),Kt().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await rr(e),n=Kt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:ar(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=v(e,"network-request-failed"),s=Kt().setTimeout((()=>{r(i)}),ir.get());function o(){Kt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new $n(e);return t.register("authEvent",(t=>{_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fr,{type:fr},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Yn(e);for(const e of t)try{if(Zn(e))return}catch(e){}y(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return de()||ie()||le()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qt,this._completeRedirectFn=Kn,this._overrideRedirectResult=Un}};class mr extends class{_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}constructor(e){this.factorId=e}}{static _fromCredential(e){return new mr(e)}_finalizeEnroll(e,t,n){return function(e,t){return M(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return M(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}constructor(e){super("phone"),this.credential=e}}class gr{static assertion(e){return mr._fromCredential(e)}constructor(){}}gr.FACTOR_ID="phone";var yr,vr="@firebase/auth",wr="0.20.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr="Browser",(0,s._registerComponent)(new(0,c.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{_(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),_(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:yr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fe(yr)},o=new me(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(k);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,s._registerComponent)(new(0,c.Component)("auth-internal",(e=>{const t=ge(e.getProvider("auth").getImmediate());return new Ir(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(vr,wr,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(yr)),(0,s.registerVersion)(vr,wr,"esm2017")})),i.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),i.register("7qahy",(function(e,t){i("hhibK")})),i.register("hhibK",(function(e,t){var n=i("hVw4Q"),r=i("3PjDZ"),s=i("ffjl9"),o=i("4a6xH");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function a(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new(0,r.FirestoreError)("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(){if("undefined"==typeof Uint8Array)throw new(0,r.FirestoreError)("unimplemented","Uint8Arrays are not available in this environment.")}function u(){if(!(0,r._isBase64Available)())throw new(0,r.FirestoreError)("unimplemented","Blobs are unavailable in Firestore in this environment.")}class l{static fromBase64String(e){return u(),new l(r.Bytes.fromBase64String(e))}static fromUint8Array(e){return c(),new l(r.Bytes.fromUint8Array(e))}toBase64(){return u(),this._delegate.toBase64()}toUint8Array(){return c(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}constructor(e){this._delegate=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class d{enableIndexedDbPersistence(e,t){return(0,r.enableIndexedDbPersistence)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,r.enableMultiTabIndexedDbPersistence)(e._delegate)}clearIndexedDbPersistence(e){return(0,r.clearIndexedDbPersistence)(e._delegate)}}class f{get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||(0,r._logWarn)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&delete(e=Object.assign(Object.assign({},t),e)).merge,this._delegate._setSettings(e)}useEmulator(e,t,n={}){(0,r.connectFirestoreEmulator)(this._delegate,e,t,n)}enableNetwork(){return(0,r.enableNetwork)(this._delegate)}disableNetwork(){return(0,r.disableNetwork)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,(0,r._validateIsNotUsedTogether)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,r.waitForPendingWrites)(this._delegate)}onSnapshotsInSync(e){return(0,r.onSnapshotsInSync)(this._delegate,e)}get app(){if(!this._appCompat)throw new(0,r.FirestoreError)("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new x(this,(0,r.collection)(this._delegate,e))}catch(e){throw w(e,"collection()","Firestore.collection()")}}doc(e){try{return new v(this,(0,r.doc)(this._delegate,e))}catch(e){throw w(e,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new T(this,(0,r.collectionGroup)(this._delegate,e))}catch(e){throw w(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,r.runTransaction)(this._delegate,(t=>e(new m(this,t))))}batch(){return(0,r.ensureFirestoreConfigured)(this._delegate),new g(new(0,r.WriteBatch)(this._delegate,(e=>(0,r.executeWrite)(this._delegate,e))))}loadBundle(e){return(0,r.loadBundle)(this._delegate,e)}namedQuery(e){return(0,r.namedQuery)(this._delegate,e).then((e=>e?new T(this,e):null))}constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof r._DatabaseId||(this._appCompat=e)}}class p extends r.AbstractUserDataWriter{convertBytes(e){return new l(new(0,r.Bytes)(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return v.forKey(t,this.firestore,null)}constructor(e){super(),this.firestore=e}}class m{get(e){const t=A(e);return this._delegate.get(t).then((e=>new _(this._firestore,new(0,r.DocumentSnapshot)(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=A(e);return n?(a("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=A(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=A(e);return this._delegate.delete(t),this}constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new p(e)}}class g{set(e,t,n){const r=A(e);return n?(a("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=A(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=A(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}constructor(e){this._delegate=e}}class y{fromFirestore(e,t){const n=new(0,r.QueryDocumentSnapshot)(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new E(this._firestore,n),null!=t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=y.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new y(e,new p(e),t),r.set(t,i)),i}constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}}y.INSTANCES=new WeakMap;class v{static forPath(e,t,n){if(e.length%2!=0)throw new(0,r.FirestoreError)("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new v(t,new(0,r.DocumentReference)(t._delegate,n,new(0,r._DocumentKey)(e)))}static forKey(e,t,n){return new v(t,new(0,r.DocumentReference)(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new x(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new x(this.firestore,(0,r.collection)(this._delegate,e))}catch(e){throw w(e,"collection()","DocumentReference.collection()")}}isEqual(e){return(e=(0,s.getModularInstance)(e))instanceof r.DocumentReference&&(0,r.refEqual)(this._delegate,e)}set(e,t){t=a("DocumentReference.set",t);try{return t?(0,r.setDoc)(this._delegate,e,t):(0,r.setDoc)(this._delegate,e)}catch(e){throw w(e,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?(0,r.updateDoc)(this._delegate,e):(0,r.updateDoc)(this._delegate,e,t,...n)}catch(e){throw w(e,"updateDoc()","DocumentReference.update()")}}delete(){return(0,r.deleteDoc)(this._delegate)}onSnapshot(...e){const t=I(e),n=b(e,(e=>new _(this.firestore,new(0,r.DocumentSnapshot)(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return(0,r.onSnapshot)(this._delegate,t,n)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,r.getDocFromCache)(this._delegate):"server"===(null==e?void 0:e.source)?(0,r.getDocFromServer)(this._delegate):(0,r.getDoc)(this._delegate),t.then((e=>new _(this.firestore,new(0,r.DocumentSnapshot)(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new v(this.firestore,e?this._delegate.withConverter(y.getInstance(this.firestore,e)):this._delegate.withConverter(null))}constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}}function w(e,t,n){return e.message=e.message.replace(t,n),e}function I(e){for(const t of e)if("object"==typeof t&&!h(t))return t;return{}}function b(e,t){var n,r;let i;return i=h(e[0])?e[0]:h(e[1])?e[1]:"function"==typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class _{get ref(){return new v(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,r.snapshotEqual)(this._delegate,e._delegate)}constructor(e,t){this._firestore=e,this._delegate=t}}class E extends _{data(e){const t=this._delegate.data(e);return(0,r._debugAssert)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class T{where(e,t,n){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.where)(e,t,n)))}catch(e){throw w(e,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.orderBy)(e,t)))}catch(e){throw w(e,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.limit)(e)))}catch(e){throw w(e,"limit()","Query.limit()")}}limitToLast(e){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.limitToLast)(e)))}catch(e){throw w(e,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.startAt)(...e)))}catch(e){throw w(e,"startAt()","Query.startAt()")}}startAfter(...e){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.startAfter)(...e)))}catch(e){throw w(e,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.endBefore)(...e)))}catch(e){throw w(e,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new T(this.firestore,(0,r.query)(this._delegate,(0,r.endAt)(...e)))}catch(e){throw w(e,"endAt()","Query.endAt()")}}isEqual(e){return(0,r.queryEqual)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null==e?void 0:e.source)?(0,r.getDocsFromCache)(this._delegate):"server"===(null==e?void 0:e.source)?(0,r.getDocsFromServer)(this._delegate):(0,r.getDocs)(this._delegate),t.then((e=>new k(this.firestore,new(0,r.QuerySnapshot)(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=I(e),n=b(e,(e=>new k(this.firestore,new(0,r.QuerySnapshot)(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return(0,r.onSnapshot)(this._delegate,t,n)}withConverter(e){return new T(this.firestore,e?this._delegate.withConverter(y.getInstance(this.firestore,e)):this._delegate.withConverter(null))}constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new p(e)}}class S{get type(){return this._delegate.type}get doc(){return new E(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}constructor(e,t){this._firestore=e,this._delegate=t}}class k{get query(){return new T(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new E(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new S(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new E(this._firestore,n))}))}isEqual(e){return(0,r.snapshotEqual)(this._delegate,e._delegate)}constructor(e,t){this._firestore=e,this._delegate=t}}class x extends T{get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new v(this.firestore,e):null}doc(e){try{return new v(this.firestore,void 0===e?(0,r.doc)(this._delegate):(0,r.doc)(this._delegate,e))}catch(e){throw w(e,"doc()","CollectionReference.doc()")}}add(e){return(0,r.addDoc)(this._delegate,e).then((e=>new v(this.firestore,e)))}isEqual(e){return(0,r.refEqual)(this._delegate,e._delegate)}withConverter(e){return new x(this.firestore,e?this._delegate.withConverter(y.getInstance(this.firestore,e)):this._delegate.withConverter(null))}constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}}function A(e){return(0,r._cast)(e,r.DocumentReference)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static documentId(){return new N(r._FieldPath.keyField().canonicalString())}isEqual(e){return(e=(0,s.getModularInstance)(e))instanceof r.FieldPath&&this._delegate._internalPath.isEqual(e._internalPath)}constructor(...e){this._delegate=new(0,r.FieldPath)(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{static serverTimestamp(){const e=(0,r.serverTimestamp)();return e._methodName="FieldValue.serverTimestamp",new C(e)}static delete(){const e=(0,r.deleteField)();return e._methodName="FieldValue.delete",new C(e)}static arrayUnion(...e){const t=(0,r.arrayUnion)(...e);return t._methodName="FieldValue.arrayUnion",new C(t)}static arrayRemove(...e){const t=(0,r.arrayRemove)(...e);return t._methodName="FieldValue.arrayRemove",new C(t)}static increment(e){const t=(0,r.increment)(e);return t._methodName="FieldValue.increment",new C(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}constructor(e){this._delegate=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={Firestore:f,GeoPoint:r.GeoPoint,Timestamp:r.Timestamp,Blob:l,Transaction:m,WriteBatch:g,DocumentReference:v,DocumentSnapshot:_,Query:T,QueryDocumentSnapshot:E,QuerySnapshot:k,CollectionReference:x,FieldPath:N,FieldValue:C,setLogLevel:function(e){(0,r.setLogLevel)(e)},CACHE_SIZE_UNLIMITED:r.CACHE_SIZE_UNLIMITED};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var R,L;R=n.default,L=(e,t)=>new f(e,t,new d),R.INTERNAL.registerComponent(new(0,o.Component)("firestore-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("firestore").getImmediate();return L(t,n)}),"PUBLIC").setServiceProps(Object.assign({},D))),R.registerVersion("@firebase/firestore-compat","0.1.25")})),i.register("3PjDZ",(function(t,n){e(t.exports,"setLogLevel",(function(){return m})),e(t.exports,"_logWarn",(function(){return v})),e(t.exports,"_debugAssert",(function(){return _})),e(t.exports,"FirestoreError",(function(){return S})),e(t.exports,"Timestamp",(function(){return B})),e(t.exports,"_FieldPath",(function(){return K})),e(t.exports,"_DocumentKey",(function(){return W})),e(t.exports,"_isBase64Available",(function(){return Ae})),e(t.exports,"_DatabaseId",(function(){return Ve})),e(t.exports,"_validateIsNotUsedTogether",(function(){return xc})),e(t.exports,"_cast",(function(){return Dc})),e(t.exports,"connectFirestoreEmulator",(function(){return Pc})),e(t.exports,"DocumentReference",(function(){return Mc})),e(t.exports,"collection",(function(){return Vc})),e(t.exports,"collectionGroup",(function(){return Bc})),e(t.exports,"doc",(function(){return qc})),e(t.exports,"refEqual",(function(){return jc})),e(t.exports,"queryEqual",(function(){return Gc})),e(t.exports,"CACHE_SIZE_UNLIMITED",(function(){return $c})),e(t.exports,"ensureFirestoreConfigured",(function(){return Qc})),e(t.exports,"enableIndexedDbPersistence",(function(){return Xc})),e(t.exports,"enableMultiTabIndexedDbPersistence",(function(){return Jc})),e(t.exports,"clearIndexedDbPersistence",(function(){return eu})),e(t.exports,"waitForPendingWrites",(function(){return tu})),e(t.exports,"enableNetwork",(function(){return nu})),e(t.exports,"disableNetwork",(function(){return ru})),e(t.exports,"loadBundle",(function(){return iu})),e(t.exports,"namedQuery",(function(){return su})),e(t.exports,"FieldPath",(function(){return au})),e(t.exports,"Bytes",(function(){return cu})),e(t.exports,"GeoPoint",(function(){return lu})),e(t.exports,"DocumentSnapshot",(function(){return qu})),e(t.exports,"QueryDocumentSnapshot",(function(){return ju})),e(t.exports,"QuerySnapshot",(function(){return Gu})),e(t.exports,"snapshotEqual",(function(){return Ku})),e(t.exports,"query",(function(){return Hu})),e(t.exports,"where",(function(){return Yu})),e(t.exports,"orderBy",(function(){return Ju})),e(t.exports,"limit",(function(){return el})),e(t.exports,"limitToLast",(function(){return tl})),e(t.exports,"startAt",(function(){return rl})),e(t.exports,"startAfter",(function(){return il})),e(t.exports,"endBefore",(function(){return ol})),e(t.exports,"endAt",(function(){return al})),e(t.exports,"AbstractUserDataWriter",(function(){return fl})),e(t.exports,"WriteBatch",(function(){return gl})),e(t.exports,"getDoc",(function(){return vl})),e(t.exports,"getDocFromCache",(function(){return Il})),e(t.exports,"getDocFromServer",(function(){return bl})),e(t.exports,"getDocs",(function(){return _l})),e(t.exports,"getDocsFromCache",(function(){return El})),e(t.exports,"getDocsFromServer",(function(){return Tl})),e(t.exports,"setDoc",(function(){return Sl})),e(t.exports,"executeWrite",(function(){return Dl})),e(t.exports,"updateDoc",(function(){return kl})),e(t.exports,"deleteDoc",(function(){return xl})),e(t.exports,"addDoc",(function(){return Al})),e(t.exports,"onSnapshot",(function(){return Nl})),e(t.exports,"onSnapshotsInSync",(function(){return Cl})),e(t.exports,"runTransaction",(function(){return Ol})),e(t.exports,"deleteField",(function(){return Pl})),e(t.exports,"serverTimestamp",(function(){return Ml})),e(t.exports,"arrayUnion",(function(){return Fl})),e(t.exports,"arrayRemove",(function(){return Ul})),e(t.exports,"increment",(function(){return Vl}));var r=i("ix4Jr"),s=i("4a6xH"),o=i("7vF8m"),a=i("ffjl9"),c=i("lW9Fu"),u=i("4TNnu");const l="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let d="9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new(0,o.Logger)("@firebase/firestore");function p(){return f.logLevel}function m(e){f.setLogLevel(e)}function g(e,...t){if(f.logLevel<=o.LogLevel.DEBUG){const n=t.map(w);f.debug(`Firestore (${d}): ${e}`,...n)}}function y(e,...t){if(f.logLevel<=o.LogLevel.ERROR){const n=t.map(w);f.error(`Firestore (${d}): ${e}`,...n)}}function v(e,...t){if(f.logLevel<=o.LogLevel.WARN){const n=t.map(w);f.warn(`Firestore (${d}): ${e}`,...n)}}function w(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw y(t),new Error(t)}function b(e,t){e||I()}function _(e,t){e||I()}function E(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends a.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(h.UNAUTHENTICATED)))}shutdown(){}}class N{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class C{start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new k;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new k,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new k)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(b("string"==typeof t.accessToken),new x(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(null===e||"string"==typeof e),new h(e)}constructor(e){this.t=e,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class D{I(){return this.g?this.g():(b(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=h.FIRST_PARTY,this.p=new Map}}class R{getToken(){return Promise.resolve(new D(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{start(e,t){const n=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(b("string"==typeof e.token),this.A=e.token,new L(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=P(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function F(e,t){return e<t?-1:e>t?1:0}function U(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function V(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new B(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?F(this.nanoseconds,e.nanoseconds):F(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new S(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new S(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new S(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new B(0,0))}static max(){return new q(new B(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{get length(){return this.len}isEqual(e){return 0===j.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof j?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&I(),void 0===n?n=e.length-t:n>e.length-t&&I(),this.segments=e,this.offset=t,this.len=n}}class G extends j{construct(e,t,n){return new G(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new G(t)}static emptyPath(){return new G([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends j{construct(e,t,n){return new K(e,t,n)}static isValidIdentifier(e){return z.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new S(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new S(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new S(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new S(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new K(t)}static emptyPath(){return new K([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromPath(e){return new W(G.fromString(e))}static fromName(e){return new W(G.fromString(e).popFirst(5))}static empty(){return new W(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===G.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return G.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new G(e.slice()))}constructor(e){this.path=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function H(e){return e.fields.find((e=>2===e.kind))}function Q(e){return e.fields.filter((e=>2!==e.kind))}$.UNKNOWN_ID=-1;class Y{constructor(e,t){this.fieldPath=e,this.kind=t}}class X{static empty(){return new X(0,ee.min())}constructor(e,t){this.sequenceNumber=e,this.offset=t}}function J(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=q.fromTimestamp(1e9===r?new B(n+1,0):new B(n,r));return new ee(i,W.empty(),t)}function Z(e){return new ee(e.readTime,e.key,-1)}class ee{static min(){return new ee(q.min(),W.empty(),-1)}static max(){return new ee(q.max(),W.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}function te(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=W.comparator(e.documentKey,t.documentKey),0!==n?n:F(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class re{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){if(e.code!==T.FAILED_PRECONDITION||e.message!==ne)throw e;g("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new se(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof se?t:se.resolve(t)}catch(e){return se.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):se.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):se.reject(t)}static resolve(e){return new se(((t,n)=>{t(e)}))}static reject(e){return new se(((t,n)=>{n(e)}))}static waitFor(e){return new se(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=se.resolve(!1);for(const n of e)t=t.next((e=>e?se.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new se(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new se(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static open(e,t,n,r){try{return new oe(t,e.transaction(r,n))}catch(e){throw new ue(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(g("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new he(t)}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new k,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new ue(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=pe(t.target.error);this.P.reject(new ue(e,n))}}}class ae{static delete(e){return g("SimpleDb","Removing database:",e),de(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,a.isIndexedDBAvailable)())return!1;if(ae.N())return!0;const e=(0,a.getUA)(),t=ae.D(e),n=0<t&&t<10,r=ae.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static N(){var e;return void 0!==u&&"YES"===(void 0===(e={})?void 0:e.M)}static O(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new ue(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new S(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new S(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new ue(e,r))},r.onupgradeneeded=e=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next((()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.F(e);const t=oe.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.V(),e))).catch((e=>(t.abort(e),se.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(g("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===ae.D((0,a.getUA)())&&y("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}}class ce{get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return de(this.U.delete())}constructor(e){this.U=e,this.q=!1,this.K=null}}class ue extends S{constructor(e,t){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function le(e){return"IndexedDbTransactionError"===e.name}class he{put(e,t){let n;return void 0!==t?(g("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),de(n)}add(e){return g("SimpleDb","ADD",this.store.name,e,e),de(this.store.add(e))}get(e){return de(this.store.get(e)).next((t=>(void 0===t&&(t=null),g("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return g("SimpleDb","DELETE",this.store.name,e),de(this.store.delete(e))}count(){return g("SimpleDb","COUNT",this.store.name),de(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new se(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new se(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Y(e,t){g("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const r=this.cursor(n);return this.H(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}tt(e){const t=this.cursor({});return new se(((n,r)=>{t.onerror=e=>{const t=pe(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}H(e,t){const n=[];return new se(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new ce(i),o=t(i.primaryKey,i.value,s);if(o instanceof se){const e=o.catch((e=>(s.done(),se.reject(e))));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}})).next((()=>se.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}constructor(e){this.store=e}}function de(e){return new se(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=pe(e.target.error);n(t)}}))}let fe=!1;function pe(e){const t=ae.D((0,a.getUA)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fe||(fe=!0,setTimeout((()=>{throw e}),0)),e}}return e}class me{start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){g("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{g("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){le(e)?g("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await ie(e)}await this.nt(6e4)}))}constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}}class ge{async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.it(t,e)))}it(e,t){const n=new Set;let r=t,i=!0;return se.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return g("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.ot(r,n))).next((n=>(g("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}ot(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Z(t);te(r,n)>0&&(n=r)})),new ee(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}constructor(e,t){this.localStore=e,this.persistence=t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function we(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ie(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.at=-1;class be{insert(e,t){return new be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _e(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _e(this.root,e,this.comparator,!1)}getReverseIterator(){return new _e(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _e(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}}class _e{getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class Ee{copy(e,t,n,r,i){return new Ee(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ee.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw I();if(this.right.isRed())throw I();const e=this.left.check();if(e!==this.right.check())throw I();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ee.RED,this.left=null!=r?r:Ee.EMPTY,this.right=null!=i?i:Ee.EMPTY,this.size=this.left.size+1+this.right.size}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1,Ee.EMPTY=new class{get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Se(this.data.getIterator())}getIteratorFrom(e){return new Se(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Te))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new be(this.comparator)}}class Se{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}function ke(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static empty(){return new xe([])}unionWith(e){let t=new Te(K.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return U(this.fields,e.fields,((e,t)=>e.isEqual(t)))}constructor(e){this.fields=e,e.sort(K.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return"undefined"!=typeof atob}let Ne=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromBase64String(e){const t=atob(e);return new Ce(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ce(t)}[Ne](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return F(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}Ce.EMPTY_BYTE_STRING=new Ce("");const De=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Re(e){if(b(!!e),"string"==typeof e){let t=0;const n=De.exec(e);if(b(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Le(e.seconds),nanos:Le(e.nanos)}}function Le(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Oe(e){return"string"==typeof e?Ce.fromBase64String(e):Ce.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Me(e){const t=e.mapValue.fields.__previous_value__;return Pe(t)?Me(t):t}function Fe(e){const t=Re(e.mapValue.fields.__local_write_time__.timestampValue);return new B(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ve{static empty(){return new Ve("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ve&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}function Be(e){return null==e}function qe(e){return 0===e&&1/e==-1/0}function je(e){return"number"==typeof e&&Number.isInteger(e)&&!qe(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ze={nullValue:"NULL_VALUE"};function Ke(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pe(e)?4:st(e)?9007199254740991:10:I()}function We(e,t){if(e===t)return!0;const n=Ke(e);if(n!==Ke(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fe(e).isEqual(Fe(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Re(e.timestampValue),r=Re(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Oe(e.bytesValue).isEqual(Oe(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Le(e.geoPointValue.latitude)===Le(t.geoPointValue.latitude)&&Le(e.geoPointValue.longitude)===Le(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Le(e.integerValue)===Le(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Le(e.doubleValue),r=Le(t.doubleValue);return n===r?qe(n)===qe(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return U(e.arrayValue.values||[],t.arrayValue.values||[],We);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ve(n)!==ve(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!We(n[e],r[e])))return!1;return!0}(e,t);default:return I()}var r}function $e(e,t){return void 0!==(e.values||[]).find((e=>We(e,t)))}function He(e,t){if(e===t)return 0;const n=Ke(e),r=Ke(t);if(n!==r)return F(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return F(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Le(e.integerValue||e.doubleValue),r=Le(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Qe(e.timestampValue,t.timestampValue);case 4:return Qe(Fe(e),Fe(t));case 5:return F(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Oe(e),r=Oe(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=F(n[e],r[e]);if(0!==t)return t}return F(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=F(Le(e.latitude),Le(t.latitude));return 0!==n?n:F(Le(e.longitude),Le(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=He(n[e],r[e]);if(t)return t}return F(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ge.mapValue&&t===Ge.mapValue)return 0;if(e===Ge.mapValue)return 1;if(t===Ge.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=F(r[e],s[e]);if(0!==t)return t;const o=He(n[r[e]],i[s[e]]);if(0!==o)return o}return F(r.length,s.length)}(e.mapValue,t.mapValue);default:throw I()}}function Qe(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return F(e,t);const n=Re(e),r=Re(t),i=F(n.seconds,r.seconds);return 0!==i?i:F(n.nanos,r.nanos)}function Ye(e){return Xe(e)}function Xe(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Re(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Oe(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,W.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Xe(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Xe(e.fields[i])}`;return n+"}"}(e.mapValue):I()}function Je(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ze(e){return!!e&&"integerValue"in e}function et(e){return!!e&&"arrayValue"in e}function tt(e){return!!e&&"nullValue"in e}function nt(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rt(e){return!!e&&"mapValue"in e}function it(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return we(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=it(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=it(e.arrayValue.values[n]);return t}return Object.assign({},e)}function st(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ot(e){return"nullValue"in e?ze:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Je(Ve.empty(),W.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:I()}function at(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Je(Ve.empty(),W.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Ge:I()}function ct(e,t){const n=He(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ut(e,t){const n=He(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!rt(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=it(t)}setAll(e){let t=K.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=it(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());rt(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return We(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){we(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new lt(it(this.value))}constructor(e){this.value=e}}function ht(e){const t=[];return we(e.fields,((e,n)=>{const r=new K([e]);if(rt(n)){const e=ht(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new xe(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dt{static newInvalidDocument(e){return new dt(e,0,q.min(),q.min(),lt.empty(),0)}static newFoundDocument(e,t,n){return new dt(e,1,t,q.min(),n,0)}static newNoDocument(e,t){return new dt(e,2,t,q.min(),lt.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,q.min(),lt.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function pt(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ft(e,t,n,r,i,s,o)}function mt(e){const t=E(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{var t;return(t=e).field.canonicalString()+t.op.toString()+Ye(t.value)})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Be(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ye(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ye(e))).join(",")),t.ht=e}return t.ht}function gt(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Rt(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!We(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ot(e.startAt,t.startAt)&&Ot(e.endAt,t.endAt)}function yt(e){return W.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function vt(e,t){return e.filters.filter((e=>e instanceof bt&&e.field.isEqual(t)))}function wt(e,t,n){let r=ze,i=!0;for(const n of vt(e,t)){let e=ze,t=!0;switch(n.op){case"<":case"<=":e=ot(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=ze}ct({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];ct({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function It(e,t,n){let r=Ge,i=!0;for(const n of vt(e,t)){let e=Ge,t=!0;switch(n.op){case">=":case">":e=at(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Ge}ut({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];ut({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class bt extends class{}{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new _t(e,t,n):"array-contains"===t?new kt(e,n):"in"===t?new xt(e,n):"not-in"===t?new At(e,n):"array-contains-any"===t?new Nt(e,n):new bt(e,t,n)}static lt(e,t,n){return"in"===t?new Et(e,n):new Tt(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(He(t,this.value)):null!==t&&Ke(this.value)===Ke(t)&&this.ft(He(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return I()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class _t extends bt{matches(e){const t=W.comparator(e.key,this.key);return this.ft(t)}constructor(e,t,n){super(e,t,n),this.key=W.fromName(n.referenceValue)}}class Et extends bt{matches(e){return this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"in",t),this.keys=St("in",t)}}class Tt extends bt{matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}constructor(e,t){super(e,"not-in",t),this.keys=St("not-in",t)}}function St(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>W.fromName(e.referenceValue)))}class kt extends bt{matches(e){const t=e.data.field(this.field);return et(t)&&$e(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class xt extends bt{matches(e){const t=e.data.field(this.field);return null!==t&&$e(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class At extends bt{matches(e){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!$e(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class Nt extends bt{matches(e){const t=e.data.field(this.field);return!(!et(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>$e(this.value.arrayValue,e)))}constructor(e,t){super(e,"array-contains-any",t)}}class Ct{constructor(e,t){this.position=e,this.inclusive=t}}class Dt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rt(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Lt(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?W.comparator(W.fromName(o.referenceValue),n.key):He(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ot(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!We(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Mt(e,t,n,r,i,s,o,a){return new Pt(e,t,n,r,i,s,o,a)}function Ft(e){return new Pt(e)}function Ut(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Vt(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Bt(e){for(const t of e.filters)if(t.dt())return t.field;return null}function qt(e){return null!==e.collectionGroup}function jt(e){const t=E(e);if(null===t._t){t._t=[];const e=Bt(t),n=Vt(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new Dt(e)),t._t.push(new Dt(K.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Dt(K.keyField(),e))}}}return t._t}function Gt(e){const t=E(e);if(!t.wt)if("F"===t.limitType)t.wt=pt(t.path,t.collectionGroup,jt(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of jt(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Dt(n.field,t))}const n=t.endAt?new Ct(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ct(t.startAt.position,t.startAt.inclusive):null;t.wt=pt(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function zt(e,t,n){return new Pt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Kt(e,t){return gt(Gt(e),Gt(t))&&e.limitType===t.limitType}function Wt(e){return`${mt(Gt(e))}|lt:${e.limitType}`}function $t(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{var t;return`${(t=e).field.canonicalString()} ${t.op} ${Ye(t.value)}`})).join(", ")}]`),Be(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ye(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ye(e))).join(",")),`Target(${t})`}(Gt(e))}; limitType=${e.limitType})`}function Ht(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):W.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=Lt(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,jt(n),r)||n.endAt&&!function(e,t,n){const r=Lt(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,jt(n),r)));var n,r}function Qt(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Yt(e){return(t,n)=>{let r=!1;for(const i of jt(e)){const e=Xt(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Xt(e,t,n){const r=e.field.isKeyField()?W.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?He(r,i):I()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qe(t)?"-0":t}}function Zt(e){return{integerValue:""+e}}function en(e,t){return je(t)?Zt(t):Jt(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this._=void 0}}function nn(e,t,n){return e instanceof on?an(e,t):e instanceof cn?un(e,t):n}function rn(e,t){var n,r;return e instanceof ln?Ze(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}class sn extends tn{}class on extends tn{constructor(e){super(),this.elements=e}}function an(e,t){const n=dn(t);for(const t of e.elements)n.some((e=>We(e,t)))||n.push(t);return{arrayValue:{values:n}}}class cn extends tn{constructor(e){super(),this.elements=e}}function un(e,t){let n=dn(t);for(const t of e.elements)n=n.filter((e=>!We(e,t)));return{arrayValue:{values:n}}}class ln extends tn{constructor(e,t){super(),this.It=e,this.yt=t}}function hn(e){return Le(e.integerValue||e.doubleValue)}function dn(e){return et(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.field=e,this.transform=t}}class pn{constructor(e,t){this.version=e,this.transformResults=t}}class mn{static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function gn(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class yn{}function vn(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new An(e.key,mn.none()):new En(e.key,e.data,mn.none());{const n=e.data,r=lt.empty();let i=new Te(K.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Tn(e.key,r,new xe(i.toArray()),mn.none())}}function wn(e,t,n){var r;e instanceof En?function(e,t,n){const r=e.value.clone(),i=kn(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Tn?function(e,t,n){if(!gn(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=kn(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Sn(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function In(e,t,n,r){return e instanceof En?function(e,t,n,r){if(!gn(e.precondition,t))return n;const i=e.value.clone(),s=xn(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Tn?function(e,t,n,r){if(!gn(e.precondition,t))return n;const i=xn(e.fieldTransforms,r,t),s=t.data;return s.setAll(Sn(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,gn(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function bn(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=rn(r.transform,e||null);null!=i&&(null===n&&(n=lt.empty()),n.set(r.field,i))}return n||null}function _n(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&U(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof on&&r instanceof on||n instanceof cn&&r instanceof cn?U(n.elements,r.elements,We):n instanceof ln&&r instanceof ln?We(n.yt,r.yt):n instanceof sn&&r instanceof sn);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}class En extends yn{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Tn extends yn{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Sn(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function kn(e,t,n){const r=new Map;b(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,nn(o,a,n[i]))}return r}function xn(e,t,n){const r=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=t,(i=e)instanceof sn?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,s):i instanceof on?an(i,s):i instanceof cn?un(i,s):function(e,t){const n=rn(e,t),r=hn(n)+hn(e.yt);return Ze(n)&&Ze(e.yt)?Zt(r):Jt(e.It,r)}(i,s)))}var i,s,o;return r}class An extends yn{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Nn extends yn{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn,Rn;function Ln(e){switch(e){default:return I();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function On(e){if(void 0===e)return y("GRPC error has no .code"),T.UNKNOWN;switch(e){case Dn.OK:return T.OK;case Dn.CANCELLED:return T.CANCELLED;case Dn.UNKNOWN:return T.UNKNOWN;case Dn.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Dn.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Dn.INTERNAL:return T.INTERNAL;case Dn.UNAVAILABLE:return T.UNAVAILABLE;case Dn.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Dn.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Dn.NOT_FOUND:return T.NOT_FOUND;case Dn.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Dn.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Dn.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Dn.ABORTED:return T.ABORTED;case Dn.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Dn.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Dn.DATA_LOSS:return T.DATA_LOSS;default:return I()}}(Rn=Dn||(Dn={}))[Rn.OK=0]="OK",Rn[Rn.CANCELLED=1]="CANCELLED",Rn[Rn.UNKNOWN=2]="UNKNOWN",Rn[Rn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rn[Rn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rn[Rn.NOT_FOUND=5]="NOT_FOUND",Rn[Rn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rn[Rn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rn[Rn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rn[Rn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rn[Rn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rn[Rn.ABORTED=10]="ABORTED",Rn[Rn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rn[Rn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rn[Rn.INTERNAL=13]="INTERNAL",Rn[Rn.UNAVAILABLE=14]="UNAVAILABLE",Rn[Rn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pn{get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){we(this.inner,((t,n)=>{for(const[t,r]of n)e(t,r)}))}isEmpty(){return Ie(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new be(W.comparator);function Fn(){return Mn}const Un=new be(W.comparator);function Vn(...e){let t=Un;for(const n of e)t=t.insert(n.key,n);return t}function Bn(e){let t=Un;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function qn(){return Gn()}function jn(){return Gn()}function Gn(){return new Pn((e=>e.toString()),((e,t)=>e.isEqual(t)))}const zn=new be(W.comparator),Kn=new Te(W.comparator);function Wn(...e){let t=Kn;for(const n of e)t=t.add(n);return t}const $n=new Te(F);function Hn(){return $n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Yn.createSynthesizedTargetChangeForCurrentChange(e,t)),new Qn(q.min(),n,Hn(),Fn(),Wn())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class Yn{static createSynthesizedTargetChangeForCurrentChange(e,t){return new Yn(Ce.EMPTY_BYTE_STRING,t,Wn(),Wn(),Wn())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class Jn{constructor(e,t){this.targetId=e,this.At=t}}class Zn{constructor(e,t,n=Ce.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class er{get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Wn(),t=Wn(),n=Wn();return this.bt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:I()}})),new Yn(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=rr()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}constructor(){this.Rt=0,this.bt=rr(),this.Pt=Ce.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}}class tr{Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:I()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){const e=r.target;if(yt(e))if(0===n){const n=new W(e.path);this.jt(t,n,dt.newNoDocument(n,q.min()))}else b(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&yt(i.target)){const t=new W(i.target.path);null!==this.Ut.get(t)||this.ee(r,t)||this.jt(r,t,dt.newNoDocument(t,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}}));let n=Wn();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new Qn(e,t,this.Kt,this.Ut,n);return this.Ut=Fn(),this.qt=nr(),this.Kt=new Te(F),r}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Mt(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let t=this.Lt.get(e);return t||(t=new er,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new Te(F),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new er),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Fn(),this.qt=nr(),this.Kt=new Te(F)}}function nr(){return new be(W.comparator)}function rr(){return new be(W.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={asc:"ASCENDING",desc:"DESCENDING"},sr={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class or{constructor(e,t){this.databaseId=e,this.gt=t}}function ar(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function cr(e,t){return e.gt?t.toBase64():t.toUint8Array()}function ur(e,t){return ar(e,t.toTimestamp())}function lr(e){return b(!!e),q.fromTimestamp(function(e){const t=Re(e);return new B(t.seconds,t.nanos)}(e))}function hr(e,t){return(n=e,new G(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function dr(e){const t=G.fromString(e);return b(Lr(t)),t}function fr(e,t){return hr(e.databaseId,t.path)}function pr(e,t){const n=dr(t);if(n.get(1)!==e.databaseId.projectId)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new W(vr(n))}function mr(e,t){return hr(e.databaseId,t)}function gr(e){const t=dr(e);return 4===t.length?G.emptyPath():vr(t)}function yr(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function vr(e){return b(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function wr(e,t,n){return{name:fr(e,t),fields:n.value.mapValue.fields}}function Ir(e,t,n){const r=pr(e,t.name),i=lr(t.updateTime),s=new lt({mapValue:{fields:t.fields}}),o=dt.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function br(e,t){let n;if(t instanceof En)n={update:wr(e,t.key,t.value)};else if(t instanceof An)n={delete:fr(e,t.key)};else if(t instanceof Tn)n={update:wr(e,t.key,t.data),updateMask:Rr(t.fieldMask)};else{if(!(t instanceof Nn))return I();n={verify:fr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof sn)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof on)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof cn)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ln)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw I()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:ur(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:I())),n;var r,i}function _r(e,t){const n=t.currentDocument?void 0!==(i=t.currentDocument).updateTime?mn.updateTime(lr(i.updateTime)):void 0!==i.exists?mn.exists(i.exists):mn.none():mn.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)b("REQUEST_TIME"===t.setToServerValue),n=new sn;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new on(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new cn(e)}else"increment"in t?n=new ln(e,t.increment):I();const r=K.fromServerFormat(t.fieldPath);return new fn(r,n)}(e,t))):[];var i;if(t.update){t.update.name;const i=pr(e,t.update.name),s=new lt({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new xe(t.map((e=>K.fromServerFormat(e))))}(t.updateMask);return new Tn(i,s,e,n,r)}return new En(i,s,n,r)}if(t.delete){const r=pr(e,t.delete);return new An(r,n)}if(t.verify){const r=pr(e,t.verify);return new Nn(r,n)}return I()}function Er(e,t){return{documents:[mr(e,t.path)]}}function Tr(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=mr(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=mr(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(nt(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NAN"}};if(tt(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(nt(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NAN"}};if(tt(e.value))return{unaryFilter:{field:Nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(e.field),op:Ar(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:Nr((t=e).field),direction:xr(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,c=t.limit,a.gt||Be(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Sr(e){let t=gr(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=kr(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new Dt(Cr((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Be(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ct(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ct(n,t)}(n.endAt)),Mt(t,i,o,s,a,"F",c,u)}function kr(e){return e?void 0!==e.unaryFilter?[Dr(e)]:void 0!==e.fieldFilter?[(t=e,bt.create(Cr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>kr(e))).reduce(((e,t)=>e.concat(t))):I():[];var t}function xr(e){return ir[e]}function Ar(e){return sr[e]}function Nr(e){return{fieldPath:e.canonicalString()}}function Cr(e){return K.fromServerFormat(e.fieldPath)}function Dr(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Cr(e.unaryFilter.field);return bt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Cr(e.unaryFilter.field);return bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Cr(e.unaryFilter.field);return bt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Cr(e.unaryFilter.field);return bt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Rr(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Lr(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Mr(t)),t=Pr(e.get(n),t);return Mr(t)}function Pr(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Mr(e){return e+""}function Fr(e){const t=e.length;if(b(t>=2),2===t)return b(""===e.charAt(0)&&""===e.charAt(1)),G.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&I(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:I()}s=t+2}return new G(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e,t){return[e,Or(t)]}function Br(e,t,n){return[e,Or(t),n]}const qr={},jr=["prefixPath","collectionGroup","readTime","documentId"],Gr=["prefixPath","collectionGroup","documentId"],zr=["collectionGroup","readTime","prefixPath","documentId"],Kr=["canonicalId","targetId"],Wr=["targetId","path"],$r=["path","targetId"],Hr=["collectionId","parent"],Qr=["indexId","uid"],Yr=["uid","sequenceNumber"],Xr=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Jr=["indexId","uid","orderedDocumentKey"],Zr=["userId","collectionPath","documentId"],ei=["userId","collectionPath","largestBatchId"],ti=["userId","collectionGroup","largestBatchId"],ni=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ri=[...ni,"documentOverlays"],ii=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],si=ii,oi=[...si,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends re{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function ci(e,t){const n=E(e);return ae.O(n.ie,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&wn(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=In(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=In(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=jn();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=vn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(q.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Wn())}isEqual(e){return this.batchId===e.batchId&&U(this.mutations,e.mutations,((e,t)=>_n(e,t)))&&U(this.baseMutations,e.baseMutations,((e,t)=>_n(e,t)))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class li{static from(e,t,n){b(e.mutations.length===n.length);let r=zn;const i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new li(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(e,t){this.largestBatchId=e,this.mutation=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}constructor(e,t,n,r,i=q.min(),s=q.min(),o=Ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.re=e}}function pi(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:mi(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document={name:fr(i=e.re,(s=t).key),fields:s.data.value.mapValue.fields,updateTime:ar(i,s.version.toTimestamp())};else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:gi(t.version)};else{if(!t.isUnknownDocument())return I();r.unknownDocument={path:n.path.toArray(),version:gi(t.version)}}var i,s;return r}function mi(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function gi(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function yi(e){const t=new B(e.seconds,e.nanoseconds);return q.fromTimestamp(t)}function vi(e,t){const n=(t.baseMutations||[]).map((t=>_r(e.re,t)));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map((t=>_r(e.re,t))),i=B.fromMillis(t.localWriteTimeMs);return new ui(t.batchId,i,n,r)}function wi(e){const t=yi(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?yi(e.lastLimboFreeSnapshotVersion):q.min();let r;var i;return void 0!==e.query.documents?(b(1===(i=e.query).documents.length),r=Gt(Ft(gr(i.documents[0])))):r=Gt(Sr(e.query)),new di(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Ce.fromBase64String(e.resumeToken))}function Ii(e,t){const n=gi(t.snapshotVersion),r=gi(t.lastLimboFreeSnapshotVersion);let i;i=yt(t.target)?Er(e.re,t.target):Tr(e.re,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:mt(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function bi(e){const t=Sr({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?zt(t,t.limit,"L"):t}function _i(e,t){return new hi(t.largestBatchId,_r(e.re,t.overlayMutation))}function Ei(e,t){const n=t.path.lastSegment();return[e,Or(t.path.popLast()),n]}function Ti(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:gi(r.readTime),documentKey:Or(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{getBundleMetadata(e,t){return ki(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:yi(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){var n;return ki(e).put({bundleId:(n=t).id,createTime:gi(lr(n.createTime)),version:n.version})}getNamedQuery(e,t){return xi(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:bi(t.bundledQuery),readTime:yi(t.readTime)};var t}))}saveNamedQuery(e,t){return xi(e).put({name:(n=t).name,readTime:gi(lr(n.readTime)),bundledQuery:n.bundledQuery});var n}}function ki(e){return ci(e,"bundles")}function xi(e){return ci(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{static oe(e,t){const n=t.uid||"";return new Ai(e,n)}getOverlay(e,t){return Ni(e).get(Ei(this.userId,t)).next((e=>e?_i(this.It,e):null))}getOverlays(e,t){const n=qn();return se.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new hi(t,i);r.push(this.ue(e,s))})),se.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Or(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Ni(e).Y("collectionPathOverlayIndex",r))})),se.waitFor(i)}getOverlaysForCollection(e,t,n){const r=qn(),i=Or(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Ni(e).W("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=_i(this.It,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=qn();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ni(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=_i(this.It,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ue(e,t){return Ni(e).put(function(e,t,n){const[r,i,s]=Ei(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:br(e.re,n.mutation)}}(this.It,this.userId,t))}constructor(e,t){this.It=e,this.userId=t}}function Ni(e){return ci(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Le(e.integerValue));else if("doubleValue"in e){const n=Le(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),qe(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Oe(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?st(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):I()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const e of Object.keys(n))this._e(e,t),this.ae(n[e],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const e of n)this.ae(e,t)}ge(e,t){this.le(t,37),W.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}constructor(){}}function Di(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Ri(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Di(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Ci.Te=new Ci;class Li{Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Pe(n.value),n=t.next();this.ve()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}Se(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Pe(e);else if(e<2048)this.Pe(960|e>>>6),this.Pe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Pe(480|e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e);else{const e=t.codePointAt(0);this.Pe(240|e>>>18),this.Pe(128|63&e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e)}}this.ve()}De(e){const t=this.Ce(e),n=Ri(t);this.xe(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Ne(e){const t=this.Ce(e),n=Ri(t);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Ae(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(t)}Pe(e){const t=255&e;0===t?(this.Fe(0),this.Fe(255)):255===t?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}constructor(){this.buffer=new Uint8Array(1024),this.position=0}}class Oi{me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}constructor(e){this.Be=e}}class Pi{me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Oe()}constructor(e){this.Be=e}}class Mi{seed(e){this.Be.seed(e)}qe(e){return 0===e?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}constructor(){this.Be=new Li,this.Le=new Oi(this.Be),this.Ue=new Pi(this.Be)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{Ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Fi(this.indexId,this.documentKey,this.arrayValue,n)}constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}}function Ui(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Vi(e.arrayValue,t.arrayValue),0!==n?n:(n=Vi(e.directionalValue,t.directionalValue),0!==n?n:W.comparator(e.documentKey,t.documentKey)))}function Vi(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{We(e){const t=H(e);if(void 0!==t&&!this.ze(t))return!1;const n=Q(e);let r=0,i=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.je){const e=n[r];if(!this.He(this.je,e)||!this.Je(this.Ge[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],e))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const e=t;e.dt()?this.je=e:this.Qe.push(e)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{addToCollectionParentIndex(e,t){return this.Ye.add(t),se.resolve()}getCollectionParents(e,t){return se.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return se.resolve()}deleteFieldIndex(e,t){return se.resolve()}getDocumentsMatchingTarget(e,t){return se.resolve(null)}getIndexType(e,t){return se.resolve(0)}getFieldIndexes(e,t){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,t){return se.resolve(ee.min())}getMinOffsetFromCollectionGroup(e,t){return se.resolve(ee.min())}updateCollectionGroup(e,t,n){return se.resolve()}updateIndexEntries(e,t){return se.resolve()}constructor(){this.Ye=new ji}}class ji{add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Te(G.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Te(G.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new Uint8Array(0);class zi{addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Xe.add(t)}));const i={collectionId:n,parent:Or(r)};return Ki(e).put(i)}return se.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[V(t),""],!1,!0);return Ki(e).W(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Fr(r.parent))}return n}))}addFieldIndex(e,t){const n=$i(e),r={indexId:(i=t).indexId,collectionGroup:i.collectionGroup,fields:i.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))};var i;delete r.indexId;const s=n.add(r);if(t.indexState){const n=Hi(e);return s.next((e=>{n.put(Ti(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=$i(e),r=Hi(e),i=Wi(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Wi(e);let r=!0;const i=new Map;return se.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Wn();const r=[];return se.forEach(i,((i,s)=>{var o;g("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${mt(t)}`);const a=function(e,t){const n=H(t);if(void 0===n)return null;for(const t of vt(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Q(t))for(const t of vt(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Q(t)){const t=0===i.kind?wt(e,i.fieldPath,e.startAt):It(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ct(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Q(t)){const t=0===i.kind?It(e,i.fieldPath,e.endAt):wt(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ct(n,r)}(s,i),h=this.nn(i,s,u),d=this.nn(i,s,l),f=this.sn(i,s,c),p=this.rn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return se.forEach(p,(i=>n.J(i,t.limit).next((t=>{t.forEach((t=>{const n=W.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return se.resolve(null)}))}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.on(t[l/c]):Gi,h=this.un(e,a,n[l%c],r),d=this.cn(e,a,i[l%c],s),f=o.map((t=>this.un(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}un(e,t,n,r){const i=new Fi(e,W.empty(),t,n);return r?i:i.Ke()}cn(e,t,n,r){const i=new Fi(e,W.empty(),t,n);return r?i.Ke():i}en(e,t){const n=new Bi(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.We(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return se.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Te(K.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}an(e,t){const n=new Mi;for(const r of Q(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.qe(r.kind);Ci.Te.ce(e,i)}return n.$e()}on(e){const t=new Mi;return Ci.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const n=new Mi;return Ci.Te.ce(Je(this.databaseId,t),n.qe(function(e){const t=Q(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}sn(e,t,n){if(null===n)return[];let r=[];r.push(new Mi);let i=0;for(const s of Q(e)){const e=n[i++];for(const n of r)if(this.ln(t,s.fieldPath)&&et(e))r=this.fn(r,s,e);else{const t=n.qe(s.kind);Ci.Te.ce(e,t)}}return this.dn(r)}nn(e,t,n){return this.sn(e,t,n.position)}dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}fn(e,t,n){const r=[...e],i=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new Mi;r.seed(n.$e()),Ci.Te.ce(e,r.qe(t.kind)),i.push(r)}return i}ln(e,t){return!!e.filters.find((e=>e instanceof bt&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=$i(e),r=Hi(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next((e=>{const t=[];return se.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new X(t.sequenceNumber,new ee(yi(t.readTime),new W(Fr(t.documentKey)),t.largestBatchId)):X.empty(),r=e.fields.map((([e,t])=>new Y(K.fromServerFormat(e),t)));return new $(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:F(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=$i(e),i=Hi(e);return this._n(e).next((e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>se.forEach(t,(t=>i.put(Ti(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return se.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?se.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),se.forEach(i,(n=>this.wn(e,t,n).next((t=>{const i=this.mn(r,n);return t.isEqual(i)?se.resolve():this.gn(e,r,n,t,i)})))))))}))}yn(e,t,n,r){return Wi(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(n,t.key),documentKey:t.key.path.toArray()})}pn(e,t,n,r){return Wi(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const r=Wi(e);let i=new Te(Ui);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,t)])},((e,r)=>{i=i.add(new Fi(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}mn(e,t){let n=new Te(Ui);const r=this.an(t,e);if(null==r)return n;const i=H(t);if(null!=i){const s=e.data.field(i.fieldPath);if(et(s))for(const i of s.arrayValue.values||[])n=n.add(new Fi(t.indexId,e.key,this.on(i),r))}else n=n.add(new Fi(t.indexId,e.key,Gi,r));return n}gn(e,t,n,r,i){g("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=ke(s),c=ke(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=ke(o)):t?(i(a),a=ke(s)):(a=ke(s),c=ke(o))}}(r,i,Ui,(r=>{s.push(this.yn(e,t,n,r))}),(r=>{s.push(this.pn(e,t,n,r))})),se.waitFor(s)}_n(e){let t=1;return Hi(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Ui(e,t))).filter(((e,t,n)=>!t||0!==Ui(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=Ui(i,e),s=Ui(i,t);if(0===n)r[0]=e.Ke();else if(n>0&&s<0)r.push(i),r.push(i.Ke());else if(s>0)break}r.push(t);const i=[];for(let e=0;e<r.length;e+=2)i.push(IDBKeyRange.bound([r[e].indexId,this.uid,r[e].arrayValue,r[e].directionalValue,Gi,[]],[r[e+1].indexId,this.uid,r[e+1].arrayValue,r[e+1].directionalValue,Gi,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Qi)}getMinOffset(e,t){return se.mapArray(this.tn(t),(t=>this.en(e,t).next((e=>e||I())))).next(Qi)}constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new ji,this.Ze=new Pn((e=>mt(e)),((e,t)=>gt(e,t))),this.uid=e.uid||""}}function Ki(e){return ci(e,"collectionParents")}function Wi(e){return ci(e,"indexEntries")}function $i(e){return ci(e,"indexConfiguration")}function Hi(e){return ci(e,"indexState")}function Qi(e){b(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;te(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new ee(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xi{static withCacheSize(e){return new Xi(e,Xi.DEFAULT_COLLECTION_PERCENTILE,Xi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{b(1===a)})));const u=[];for(const e of n.mutations){const r=Br(t,e.key.path,n.batchId);s.push(i.delete(r)),u.push(e.key)}return se.waitFor(s).next((()=>u))}function Zi(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw I();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xi.DEFAULT_COLLECTION_PERCENTILE=10,Xi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xi.DEFAULT=new Xi(41943040,Xi.DEFAULT_COLLECTION_PERCENTILE,Xi.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xi.DISABLED=new Xi(-1,0,0);class es{static oe(e,t,n,r){b(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new es(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ns(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=rs(e),s=ns(e);return s.add({}).next((o=>{b("number"==typeof o);const a=new ui(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>br(e.re,t))),i=n.mutations.map((t=>br(e.re,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.It,this.userId,a),u=[];let l=new Te(((e,t)=>F(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Br(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,qr))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.In[o]=a.keys()})),se.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return ns(e).get(t).next((e=>e?(b(e.userId===this.userId),vi(this.It,e)):null))}Tn(e,t){return this.In[t]?se.resolve(this.In[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ns(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(b(t.batchId>=n),i=vi(this.It,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ns(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ns(e).W("userMutationsIndex",t).next((e=>e.map((e=>vi(this.It,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Vr(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return rs(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=Fr(a);if(o===this.userId&&t.path.isEqual(u))return ns(e).get(c).next((e=>{if(!e)throw I();b(e.userId===this.userId),i.push(vi(this.It,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Te(F);const r=[];return t.forEach((t=>{const i=Vr(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=rs(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=Fr(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),se.waitFor(r).next((()=>this.En(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Vr(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Te(F);return rs(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=Fr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.En(e,o)))}En(e,t){const n=[],r=[];return t.forEach((t=>{r.push(ns(e).get(t).next((e=>{if(null===e)throw I();b(e.userId===this.userId),n.push(vi(this.It,e))})))})),se.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Ji(e.ie,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.An(t.batchId)})),se.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return se.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return rs(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Fr(e[1]);r.push(t)}else n.done()})).next((()=>{b(0===r.length)}))}))}containsKey(e,t){return ts(e,this.userId,t)}Rn(e){return is(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}constructor(e,t,n,r){this.userId=e,this.It=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}}function ts(e,t,n){const r=Vr(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return rs(e).Z({range:s,X:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function ns(e){return ci(e,"mutations")}function rs(e){return ci(e,"documentMutations")}function is(e){return ci(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{next(){return this.bn+=2,this.bn}static Pn(){return new ss(0)}static vn(){return new ss(-1)}constructor(e){this.bn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{allocateTargetId(e){return this.Vn(e).next((t=>{const n=new ss(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Vn(e).next((e=>q.fromTimestamp(new B(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Vn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Vn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r))))}addTargetData(e,t){return this.Dn(e,t).next((()=>this.Vn(e).next((n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>as(e).delete(t.targetId))).next((()=>this.Vn(e))).next((t=>(b(t.targetCount>0),t.targetCount-=1,this.Sn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return as(e).Z(((s,o)=>{const a=wi(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>se.waitFor(i))).next((()=>r))}forEachTarget(e,t){return as(e).Z(((e,n)=>{const r=wi(n);t(r)}))}Vn(e){return cs(e).get("targetGlobalKey").next((e=>(b(null!==e),e)))}Sn(e,t){return cs(e).put("targetGlobalKey",t)}Dn(e,t){return as(e).put(Ii(this.It,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=mt(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return as(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=wi(n);gt(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=us(e);return t.forEach((t=>{const s=Or(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),se.waitFor(r)}removeMatchingKeys(e,t,n){const r=us(e);return se.forEach(t,(t=>{const i=Or(t.path);return se.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=us(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=us(e);let i=Wn();return r.Z({range:n,X:!0},((e,t,n)=>{const r=Fr(e[1]),s=new W(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Or(t.path),r=IDBKeyRange.bound([n],[V(n)],!1,!0);let i=0;return us(e).Z({index:"documentTargetsIndex",X:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}se(e,t){return as(e).get(t).next((e=>e?wi(e):null))}constructor(e,t){this.referenceDelegate=e,this.It=t}}function as(e){return ci(e,"targets")}function cs(e){return ci(e,"targetGlobal")}function us(e){return ci(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls([e,t],[n,r]){const i=F(e,n);return 0===i?F(t,r):i}class hs{kn(){return++this.Nn}Mn(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ls(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}constructor(e){this.xn=e,this.buffer=new Te(ls),this.Nn=0}}class ds{start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}Fn(e){g("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){le(e)?g("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ie(e)}await this.Fn(3e5)}))}constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.On=null}}class fs{calculateTargetCount(e,t){return this.$n.Bn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return se.resolve(ye.at);const n=new hs(t);return this.$n.forEachTarget(e,(e=>n.Mn(e.sequenceNumber))).next((()=>this.$n.Ln(e,(e=>n.Mn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(Yi)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(g("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yi):this.Un(e,t)))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let n,r,i,s,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(g("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),p()<=o.LogLevel.DEBUG&&g("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}constructor(e,t){this.$n=e,this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}qn(e){let t=0;return this.Ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,((e,n)=>t(n)))}addReference(e,t,n){return ms(e,n)}removeReference(e,t,n){return ms(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ms(e,t)}Gn(e,t){return function(e,t){let n=!1;return is(e).tt((r=>ts(e,r,t).next((e=>(e&&(n=!0),se.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,((s,o)=>{if(o<=t){const t=this.Gn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,q.min()),us(e).delete([0,Or(s.path)]))))}));r.push(t)}})).next((()=>se.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ms(e,t)}Kn(e,t){const n=us(e);let r,i=ye.at;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==ye.at&&t(new W(Fr(r)),i),i=o,r=s):i=ye.at})).next((()=>{i!==ye.at&&t(new W(Fr(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}constructor(e,t){this.db=e,this.garbageCollector=new fs(this,t)}}function ms(e,t){return us(e).put((n=t,r=e.currentSequenceNumber,{targetId:0,path:Or(n.path),sequenceNumber:r}));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?se.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new Pn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return bs(e).put(n)}removeEntry(e,t,n){return bs(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],mi(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Qn(e,n))))}getEntry(e,t){let n=dt.newInvalidDocument(t);return bs(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(_s(t))},((e,r)=>{n=this.jn(t,r)})).next((()=>n))}Wn(e,t){let n={size:0,document:dt.newInvalidDocument(t)};return bs(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(_s(t))},((e,r)=>{n={document:this.jn(t,r),size:Zi(r)}})).next((()=>n))}getEntries(e,t){let n=Fn();return this.zn(e,t,((e,t)=>{const r=this.jn(e,t);n=n.insert(e,r)})).next((()=>n))}Hn(e,t){let n=Fn(),r=new be(W.comparator);return this.zn(e,t,((e,t)=>{const i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,Zi(t))})).next((()=>({documents:n,Jn:r})))}zn(e,t,n){if(t.isEmpty())return se.resolve();let r=new Te(Ts);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(_s(r.first()),_s(r.last())),s=r.getIterator();let o=s.getNext();return bs(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=W.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Ts(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.j(_s(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),mi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return bs(e).W(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=Fn();for(const n of e){const e=this.jn(W.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=Fn();const s=Es(t,n),o=Es(t,ee.max());return bs(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.jn(W.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new ws(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Is(e).get("remoteDocumentGlobalKey").next((e=>(b(!!e),e)))}Qn(e,t){return Is(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=function(e,t){let n;if(t.document)n=Ir(e.re,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=W.fromSegments(t.noDocument.path),r=yi(t.noDocument.readTime);n=dt.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return I();{const e=W.fromSegments(t.unknownDocument.path),r=yi(t.unknownDocument.version);n=dt.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new B(e[0],e[1]);return q.fromTimestamp(t)}(t.readTime)),n}(this.It,t);if(!e.isNoDocument()||!e.version.isEqual(q.min()))return e}return dt.newInvalidDocument(e)}constructor(e){this.It=e}}function vs(e){return new ys(e)}class ws extends gs{applyChanges(e){const t=[];let n=0,r=new Te(((e,t)=>F(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=pi(this.Yn.It,s);r=r.add(i.path.popLast());const c=Zi(a);n+=c-o.size,t.push(this.Yn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=pi(this.Yn.It,s.convertToNoDocument(q.min()));t.push(this.Yn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Yn.updateMetadata(e,n)),se.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next((e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next((({documents:e,Jn:t})=>(t.forEach(((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new Pn((e=>e.toString()),((e,t)=>e.isEqual(t)))}}function Is(e){return ci(e,"remoteDocumentGlobal")}function bs(e){return ci(e,"remoteDocumentsV14")}function _s(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Es(e,t){const n=t.documentKey.path.toArray();return[e,mi(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Ts(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(i=F(n[e],r[e]),i)return i;return i=F(n.length,r.length),i||(i=F(n[n.length-2],r[r.length-2]),i||F(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ss{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&In(n.mutation,e,xe.empty(),B.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Wn()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Wn()){const r=qn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Vn();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=qn();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Wn())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Fn();const s=Gn(),o=Gn();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Tn)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),In(o.mutation,t,o.mutation.getFieldMask(),B.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ss(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Gn();let r=new be(((e,t)=>e-t)),i=Wn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||xe.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Wn()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=jn();c.forEach((e=>{if(!i.has(e)){const r=vn(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return se.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return r=t,W.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):qt(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):se.resolve(qn());let o=-1,a=i;return s.next((t=>se.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?se.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Wn()))).next((e=>({batchId:o,changes:Bn(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next((e=>{let t=Vn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Vn();return this.indexManager.getCollectionParents(e,r).next((s=>se.forEach(s,(s=>{const o=(a=t,c=s.child(r),new Pt(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,dt.newInvalidDocument(n)))}));let n=Vn();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&In(s.mutation,i,xe.empty(),B.now()),Ht(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):se.resolve(dt.newInvalidDocument(t))}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{getBundleMetadata(e,t){return se.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:lr(n.createTime)}),se.resolve()}getNamedQuery(e,t){return se.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,{name:(n=t).name,query:bi(n.bundledQuery),readTime:lr(n.readTime)}),se.resolve();var n}constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{getOverlay(e,t){return se.resolve(this.overlays.get(t))}getOverlays(e,t){const n=qn();return se.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ue(e,t,r)})),se.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),se.resolve()}getOverlaysForCollection(e,t,n){const r=qn(),i=t.length+1,s=new W(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return se.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new be(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=qn(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=qn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return se.resolve(o)}ue(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new hi(t,n));let i=this.es.get(t);void 0===i&&(i=Wn(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}constructor(){this.overlays=new be(W.comparator),this.es=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Cs(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Cs(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new W(new G([])),n=new Cs(t,e),r=new Cs(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new W(new G([])),n=new Cs(t,e),r=new Cs(t,e+1);let i=Wn();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Cs(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.ns=new Te(Cs.ss),this.rs=new Te(Cs.os)}}class Cs{static ss(e,t){return W.comparator(e.key,t.key)||F(e._s,t._s)}static os(e,t){return F(e._s,t._s)||W.comparator(e.key,t.key)}constructor(e,t){this.key=e,this._s=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{checkEmpty(e){return se.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ui(i,t,n,r);this.mutationQueue.push(s);for(const t of r)this.gs=this.gs.add(new Cs(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return se.resolve(s)}lookupMutationBatch(e,t){return se.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return se.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Cs(t,0),r=new Cs(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),se.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Te(F);return t.forEach((e=>{const t=new Cs(e,0),r=new Cs(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),se.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;W.isDocumentKey(i)||(i=i.child(""));const s=new Cs(new W(i),0);let o=new Te(F);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),se.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){b(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return se.forEach(t.mutations,(r=>{const i=new Cs(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Cs(t,0),r=this.gs.firstAfterOrEqual(n);return se.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Te(Cs.ss)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return se.resolve(n?n.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let n=Fn();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():dt.newInvalidDocument(e))})),se.resolve(n)}getAllFromCollection(e,t,n){let r=Fn();const i=new W(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||te(Z(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return se.resolve(r)}getAllFromCollectionGroup(e,t,n,r){I()}As(e,t){return se.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ls(this)}getSize(e){return se.resolve(this.size)}constructor(e){this.Es=e,this.docs=new be(W.comparator),this.size=0}}class Ls extends gs{applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),se.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}constructor(e){super(),this.Yn=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),se.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new ss(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,se.resolve()}updateTargetData(e,t){return this.Dn(t),se.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),se.waitFor(i).next((()=>r))}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return se.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),se.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),se.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),se.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return se.resolve(n)}containsKey(e,t){return se.resolve(this.Ps.containsKey(t))}constructor(e){this.persistence=e,this.Rs=new Pn((e=>mt(e)),gt),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ns,this.targetCount=0,this.vs=ss.Pn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new As,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Ds(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);const r=new Ms(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Ms(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Os(e,t){return se.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}constructor(e,t){this.Vs={},this.overlays={},this.Ss=new ye(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Os(this),this.indexManager=new qi,this.remoteDocumentCache=new Rs((e=>this.referenceDelegate.xs(e))),this.It=new fi(t),this.Ns=new xs(this.It)}}class Ms extends re{constructor(e){super(),this.currentSequenceNumber=e}}class Fs{static Bs(e){return new Fs(e)}get Ls(){if(this.$s)return this.$s;throw I()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),se.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),se.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),se.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Ms(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.Ls,(n=>{const r=W.fromPath(n);return this.Us(e,r).next((e=>{e||t.removeEntry(r,q.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return se.or([()=>se.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}constructor(e){this.persistence=e,this.Fs=new Ns,this.$s=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{$(e,t,n,r){const i=new oe("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore("owner"),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ur,{unique:!0}),e.createObjectStore("documentMutations")}(e),Vs(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=se.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Vs(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:q.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>{return t=e,(n=i).store("mutations").W().next((e=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ur,{unique:!0});const r=n.store("mutations"),i=e.map((e=>r.put(e)));return se.waitFor(i)}));var t,n}))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.qs(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i))))),n<7&&r>=7&&(s=s.next((()=>this.Gs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Qs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.js(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Zr});t.createIndex("collectionPathOverlayIndex",ei,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",ti,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:jr});t.createIndex("documentKeyIndex",Gr),t.createIndex("collectionGroupIndex",zr)}(e))).next((()=>this.Ws(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.zs(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Qr}).createIndex("sequenceNumberIndex",Yr,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Xr}).createIndex("documentKeyIndex",Jr,{unique:!1})}(e)))),s}Ks(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=Zi(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}qs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next((t=>se.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next((n=>se.forEach(n,(n=>{b(n.userId===t.userId);const r=vi(this.It,n);return Ji(e,t.userId,r).next((()=>{}))}))))}))))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new G(n),o=[0,Or(s)];r.push(t.get(o).next((n=>{return n?se.resolve():(r=s,t.put({targetId:0,path:Or(r),sequenceNumber:e.highestListenSequenceNumber}));var r})))})).next((()=>se.waitFor(r)))}))}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:Hr});const n=t.store("collectionParents"),r=new ji,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Or(r)})}};return t.store("remoteDocuments").Z({X:!0},((e,t)=>{const n=new G(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({X:!0},(([e,t,n],r)=>{const s=Fr(t);return i(s.popLast())}))))}js(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=wi(n),i=Ii(this.It,r);return t.put(i)}))}Ws(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new W(G.fromString(o.document.name).popFirst(5)):o.noDocument?W.fromSegments(o.noDocument.path):o.unknownDocument?W.fromSegments(o.unknownDocument.path):I()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>se.waitFor(r)))}zs(e,t){const n=t.store("mutations"),r=vs(this.It),i=new Ps(Fs.Bs,this.It.re);return n.W().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Wn();vi(this.It,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),se.forEach(n,((e,n)=>{const s=new h(n),o=Ai.oe(this.It,s),a=i.getIndexManager(s),c=es.oe(s,this.It,a,i.referenceDelegate);return new ks(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new ai(t,ye.at),e).next()}))}))}constructor(e){this.It=e}}function Vs(e){e.createObjectStore("targetDocuments",{keyPath:Wr}).createIndex("documentTargetsIndex",$r,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Kr,{unique:!0}),e.createObjectStore("targetGlobal")}const Bs="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class qs{start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,Bs);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Cs.getHighestSequenceNumber(e)))})).then((e=>{this.Ss=new ye(e,this.Js)})).then((()=>{this.Ds=!0})).catch((e=>(this.ri&&this.ri.close(),Promise.reject(e))))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Gs(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(e))).next((t=>this.isPrimary&&!t?this._i(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(le(e))return g("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return g("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable((()=>this.si(e))),this.isPrimary=e}))}fi(e){return js(e).get("owner").next((e=>se.resolve(this.mi(e))))}gi(e){return Gs(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=ci(e,"clientMetadata");return t.W().next((e=>{const n=this.Ii(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return se.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?se.resolve(!0):js(e).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new S(T.FAILED_PRECONDITION,Bs);return!1}}return!(!this.networkEnabled||!this.inForeground)||Gs(e).W().next((e=>void 0===this.Ii(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&g("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new ai(e,ye.at);return this._i(t).next((()=>this.gi(t)))})),this.ri.close(),this.Pi()}Ii(e,t){return e.filter((e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(e=>Gs(e).W().next((e=>this.Ii(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ds}getMutationQueue(e,t){return es.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new zi(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Ai.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){g("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Xs)?oi:14===s?si:13===s?ii:12===s?ri:11===s?ni:void I();var s;let o;return this.ri.runTransaction(e,r,i,(r=>(o=new ai(r,this.Ss?this.Ss.next():ye.at),"readwrite-primary"===t?this.fi(o).next((e=>!!e||this.di(o))).next((t=>{if(!t)throw y(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new S(T.FAILED_PRECONDITION,ne);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Vi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Vi(e){return js(e).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new S(T.FAILED_PRECONDITION,Bs)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return js(e).put("owner",t)}static C(){return ae.C()}_i(e){const t=js(e);return t.get("owner").next((e=>this.mi(e)?(g("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):se.resolve()))}pi(e,t){const n=Date.now();return!(e<n-t||e>n&&(y(`Detected an update time that is in the future: ${e} > ${n}`),1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),(0,a.isSafari)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return g("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return y("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){y("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(e){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=o,this.Js=c,this.Ys=u,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!qs.C())throw new S(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ps(this,r),this.ii=t+"main",this.It=new fi(a),this.ri=new ae(this.ii,this.Xs,new Us(this.It)),this.Cs=new os(this.referenceDelegate,this.It),this.remoteDocumentCache=vs(this.It),this.Ns=new Si,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&y("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}}function js(e){return ci(e,"owner")}function Gs(e){return ci(e,"clientMetadata")}function zs(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ks{static Ci(e,t){let n=Wn(),r=Wn();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Ks(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Mi(e,t,r,n))).next((n=>n||this.Oi(e,t)))}ki(e,t){if(Ut(t))return se.resolve(null);let n=Gt(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=zt(t,null,"F"),n=Gt(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Wn(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,zt(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Mi(e,t,n,r){return Ut(t)||r.isEqual(q.min())?this.Oi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Oi(e,t):(p()<=o.LogLevel.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),$t(t)),this.Bi(e,s,t,J(r,-1)))}))}Fi(e,t){let n=new Te(Yt(e));return t.forEach(((t,r)=>{Ht(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return p()<=o.LogLevel.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",$t(t)),this.Ni.getDocumentsMatchingQuery(e,t,ee.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}constructor(){this.xi=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ks(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new be(F),this.qi=new Pn((e=>mt(e)),gt),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}}function Hs(e,t,n,r){return new $s(e,t,n,r)}async function Qs(e,t){const n=E(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Wn();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ys(e){const t=E(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function Xs(e,t,n){let r=Wn(),i=Wn();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Fn();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(q.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function Js(e,t){const n=E(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Zs(e,t){const n=E(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,se.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new di(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function eo(e,t,n){const r=E(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!le(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function to(e,t,n){const r=E(e);let i=q.min(),s=Wn();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=E(e),i=r.qi.get(n);return void 0!==i?se.resolve(r.Ui.get(i)):r.Cs.getTargetData(t,n)}(r,e,Gt(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:q.min(),n?s:Wn()))).next((e=>(io(r,Qt(t),e),{documents:e,Hi:s})))))}function no(e,t){const n=E(e),r=E(n.Cs),i=n.Ui.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.se(e,t).next((e=>e?e.target:null))))}function ro(e,t){const n=E(e),r=n.Ki.get(t)||q.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Gi.getAllFromCollectionGroup(e,t,J(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(io(n,t,e),e)))}function io(e,t,n){let r=q.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}async function so(e,t,n=Wn()){const r=await Zs(e,Gt(bi(t.bundledQuery))),i=E(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=lr(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);const o=r.withResumeToken(Ce.EMPTY_BYTE_STRING,s);return i.Ui=i.Ui.insert(o.targetId,o),i.Cs.updateTargetData(e,o).next((()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Cs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ns.saveNamedQuery(e,t)))}))}function oo(e,t){return`firestore_clients_${e}_${t}`}function ao(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function co(e,t){return`firestore_targets_${e}_${t}`}class uo{static Zi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new S(r.error.code,r.error.message))),s?new uo(e,t,r.state,i):(y("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}}class lo{static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new S(n.error.code,n.error.message))),i?new lo(e,n.state,r):(y("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}}class ho{static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Hn();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=je(n.activeTargetIds[e]),i=i.add(n.activeTargetIds[e]);return r?new ho(e,i):(y("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}constructor(e,t){this.clientId=e,this.activeTargetIds=t}}class fo{static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new fo(t.clientId,t.onlineState):(y("SharedClientState",`Failed to parse online state: ${e}`),null)}constructor(e,t){this.clientId=e,this.onlineState=t}}class po{er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}constructor(){this.activeTargetIds=Hn()}}class mo{static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const t of e){if(t===this.sr)continue;const e=this.getItem(oo(this.persistenceKey,t));if(e){const n=ho.Zi(t,e);n&&(this.ur=this.ur.insert(n.clientId,n))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const e of this.cr)this.rr(e);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(co(this.persistenceKey,e));if(n){const r=lo.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(co(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Er(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return g("SharedClientState","READ",e,t),t}setItem(e,t){g("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){g("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(g("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void y("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=ye.at;if(null!=e)try{const n=JSON.parse(e);b("number"==typeof n),t=n}catch(e){y("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==ye.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Mr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Or(e))))}}else this.cr.push(t)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const r=new uo(this.currentUser,e,t,n),i=ao(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=ao(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const r=co(this.persistenceKey,e),i=new lo(e,t,n);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return ho.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return uo.Zi(new h(i),r,t)}Nr(e,t){const n=this._r.exec(e),r=Number(n[1]);return lo.Zi(r,t)}yr(e){return fo.Zi(e)}Mr(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);g("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Br(s,o).then((()=>{this.ur=n}))}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=Hn();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new be(F),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=oo(this.persistenceKey,this.sr),this.hr=`firestore_sequence_number_${this.persistenceKey}`,this.ur=this.ur.insert(this.sr,new po),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.mr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}}class go{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new po,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.Lr=new po,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends class{co(e,t,n,r,i){const s=this.ao(e,t);g("RestConnection","Sending: ",s,n);const o={};return this.ho(o,r,i),this.lo(e,s,o,n).then((e=>(g("RestConnection","Received: ",e),e)),(t=>{throw v("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}fo(e,t,n,r,i,s){return this.co(e,t,n,r,i)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=wo[e];return`${this.oo}/v1/${t}:${n}`}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{lo(e,t,n,r){return new Promise(((i,s)=>{const o=new(0,c.XhrIo);o.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const t=o.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),i(t);break;case c.ErrorCode.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),s(new S(T.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(t)>=0?t:T.UNKNOWN}(e.status);s(new S(t,e.message))}else s(new S(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new S(T.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{g("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}_o(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,c.createWebChannelTransport)(),s=(0,c.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,c.FetchXmlHttpFactory)({})),this.ho(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");g("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,h=!1;const d=new Io({Hr:e=>{h?g("Connection","Not sending because WebChannel is closed:",e):(l||(g("Connection","Opening WebChannel transport."),u.open(),l=!0),g("Connection","WebChannel sending:",e),u.send(e))},Jr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,c.WebChannel.EventType.OPEN,(()=>{h||g("Connection","WebChannel transport opened.")})),f(u,c.WebChannel.EventType.CLOSE,(()=>{h||(h=!0,g("Connection","WebChannel transport closed"),d.io())})),f(u,c.WebChannel.EventType.ERROR,(e=>{h||(h=!0,v("Connection","WebChannel transport errored:",e),d.io(new S(T.UNAVAILABLE,"The operation could not be completed")))})),f(u,c.WebChannel.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];b(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){g("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Dn[e];if(void 0!==t)return On(t)}(e),n=i.message;void 0===t&&(t=T.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.io(new S(t,n)),u.close()}else g("Connection","WebChannel received:",n),d.ro(n)}})),f(s,c.Event.STAT_EVENT,(e=>{e.stat===c.Stat.PROXY?g("Connection","Detected buffering proxy"):e.stat===c.Stat.NOPROXY&&g("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(){return"undefined"!=typeof window?window:null}function Eo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e){return new or(e,!0)}class So{reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),r=Math.max(0,t-n);r>0&&g("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.wo=n,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===T.RESOURCE_EXHAUSTED?(y(t.toString()),y("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):t&&t.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new S(T.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.Po=n,this.vo=r,this.Vo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new So(e,t)}}class xo extends ko{jo(e,t){return this.Vo._o("Listen",e,t)}onMessage(e){this.xo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:I(),s=t.targetChange.targetIds||[],o=function(e,t){return e.gt?(b(void 0===t||"string"==typeof t),Ce.fromBase64String(t||"")):(b(void 0===t||t instanceof Uint8Array),Ce.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?T.UNKNOWN:On(e.code);return new S(t,e.message||"")}(a);n=new Zn(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=pr(e,r.document.name),s=lr(r.document.updateTime),o=new lt({mapValue:{fields:r.document.fields}}),a=dt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Xn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=pr(e,r.document),s=r.readTime?lr(r.readTime):q.min(),o=dt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=pr(e,r.document),s=r.removedTargetIds||[];n=new Xn([],s,i,null)}else{if(!("filter"in t))return I();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Cn(r),s=e.targetId;n=new Jn(s,i)}}var r;return n}(this.It,e),n=function(e){if(!("targetChange"in e))return q.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?q.min():t.readTime?lr(t.readTime):q.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=yr(this.It),t.addTarget=function(e,t){let n;const r=t.target;return n=yt(r)?{documents:Er(e,r)}:{query:Tr(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=cr(e,t.resumeToken):t.snapshotVersion.compareTo(q.min())>0&&(n.readTime=ar(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=yr(this.It),t.removeTarget=e,this.Bo(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}}class Ao extends ko{get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.Vo._o("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(b(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?lr(e.updateTime):lr(t);return n.isEqual(q.min())&&(n=lr(t)),new pn(n,e.transformResults||[])}(e,n)))):[]),i=lr(e.commitTime);return this.listener.Zo(i,r)}var t,n;return b(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=yr(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>br(this.It,e)))};this.Bo(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Jo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends class{}{su(){if(this.nu)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.Vo.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())}))}fo(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.Vo.fo(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new S(T.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.Vo=n,this.It=r,this.nu=!1}}class Co{uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(y(t),this.ou=!1):g("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((e=>{n.enqueueAndForget((async()=>{Bo(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=E(e);t._u.add(4),await Lo(t),t.gu.set("Unknown"),t._u.delete(4),await Ro(t)}(this))}))})),this.gu=new Co(n,r)}}async function Ro(e){if(Bo(e))for(const t of e.wu)await t(!0)}async function Lo(e){for(const t of e.wu)await t(!1)}function Oo(e,t){const n=E(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Vo(n)?Uo(n):ia(n).ko()&&Mo(n,t))}function Po(e,t){const n=E(e),r=ia(n);n.du.delete(t),r.ko()&&Fo(n,t),0===n.du.size&&(r.ko()?r.Fo():Bo(n)&&n.gu.set("Unknown"))}function Mo(e,t){e.yu.Ot(t.targetId),ia(e).zo(t)}function Fo(e,t){e.yu.Ot(t),ia(e).Ho(t)}function Uo(e){e.yu=new tr({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),ia(e).start(),e.gu.uu()}function Vo(e){return Bo(e)&&!ia(e).No()&&e.du.size>0}function Bo(e){return 0===E(e)._u.size}function qo(e){e.yu=void 0}async function jo(e){e.du.forEach(((t,n)=>{Mo(e,t)}))}async function Go(e,t){qo(e),Vo(e)?(e.gu.hu(t),Uo(e)):e.gu.set("Unknown")}async function zo(e,t,n){if(e.gu.set("Online"),t instanceof Zn&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ko(e,n)}else if(t instanceof Xn?e.yu.Gt(t):t instanceof Jn?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(q.min()))try{const t=await Ys(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ce.EMPTY_BYTE_STRING,n.snapshotVersion)),Fo(e,t);const r=new di(n.target,t,1,n.sequenceNumber);Mo(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await Ko(e,t)}}async function Ko(e,t,n){if(!le(t))throw t;e._u.add(1),await Lo(e),e.gu.set("Offline"),n||(n=()=>Ys(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Ro(e)}))}function Wo(e,t){return t().catch((n=>Ko(e,n,t)))}async function $o(e){const t=E(e),n=sa(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Ho(t);)try{const e=await Js(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,Qo(t,e)}catch(e){await Ko(t,e)}Yo(t)&&Xo(t)}function Ho(e){return Bo(e)&&e.fu.length<10}function Qo(e,t){e.fu.push(t);const n=sa(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Yo(e){return Bo(e)&&!sa(e).No()&&e.fu.length>0}function Xo(e){sa(e).start()}async function Jo(e){sa(e).eu()}async function Zo(e){const t=sa(e);for(const n of e.fu)t.Xo(n.mutations)}async function ea(e,t,n){const r=e.fu.shift(),i=li.from(r,t,n);await Wo(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await $o(e)}async function ta(e,t){t&&sa(e).Yo&&await async function(e,t){if(Ln(n=t.code)&&n!==T.ABORTED){const n=e.fu.shift();sa(e).Oo(),await Wo(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await $o(e)}var n}(e,t),Yo(e)&&Xo(e)}async function na(e,t){const n=E(e);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=Bo(n);n._u.add(3),await Lo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Ro(n)}async function ra(e,t){const n=E(e);t?(n._u.delete(2),await Ro(n)):t||(n._u.add(2),await Lo(n),n.gu.set("Unknown"))}function ia(e){return e.pu||(e.pu=function(e,t,n){const r=E(e);return r.su(),new xo(t,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:jo.bind(null,e),Zr:Go.bind(null,e),Wo:zo.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),Vo(e)?Uo(e):e.gu.set("Unknown")):(await e.pu.stop(),qo(e))}))),e.pu}function sa(e){return e.Iu||(e.Iu=function(e,t,n){const r=E(e);return r.su(),new Ao(t,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:Jo.bind(null,e),Zr:ta.bind(null,e),tu:Zo.bind(null,e),Zo:ea.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Oo(),await $o(e)):(await e.Iu.stop(),e.fu.length>0&&(g("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class oa{static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new oa(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new k,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}}function aa(e,t){if(y("AsyncQueue",`${t}: ${e}`),le(e))return new S(T.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{static emptySet(e){return new ca(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ca))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new ca;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||W.comparator(t.key,n.key):(e,t)=>W.comparator(e.key,t.key),this.keyedMap=Vn(),this.sortedSet=new be(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):I():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}constructor(){this.Tu=new be(W.comparator)}}class la{static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new la(e,t,ca.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kt(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(){this.Au=void 0,this.listeners=[]}}class da{constructor(){this.queries=new Pn((e=>Wt(e)),Kt),this.onlineState="Unknown",this.Ru=new Set}}async function fa(e,t){const n=E(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ha),i)try{s.Au=await n.onListen(r)}catch(e){const n=aa(e,`Initialization of query '${$t(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&ya(n)}async function pa(e,t){const n=E(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ma(e,t){const n=E(e);let r=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.Pu(e)&&(r=!0);i.Au=e}}r&&ya(n)}function ga(e,t,n){const r=E(e),i=r.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);r.queries.delete(t)}function ya(e){e.Ru.forEach((e=>{e.next()}))}class va{Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new la(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.Nu&&n||e.docs.isEmpty()&&"Offline"!==t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=la.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{ku(){return"metadata"in this.payload}constructor(e,t){this.payload=e,this.byteLength=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{Ji(e){return pr(this.It,e)}Yi(e){return e.metadata.exists?Ir(this.It,e.document,!1):dt.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return lr(e)}constructor(e){this.It=e}}class ba{Ou(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=G.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Fu(e){const t=new Map,n=new Ia(this.It);for(const r of e)if(r.metadata.queries){const e=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Wn()).add(e);t.set(n,r)}}return t}async complete(){const e=await async function(e,t,n,r){const i=E(e);let s=Wn(),o=Fn();for(const e of n){const n=t.Ji(e.metadata.name);e.document&&(s=s.add(n));const r=t.Yi(e);r.setReadTime(t.Xi(e.metadata.readTime)),o=o.insert(n,r)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await Zs(i,(u=r,Gt(Ft(G.fromString(`__bundle__/docs/${u}`)))));var u;return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Xs(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Cs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Cs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi))).next((()=>t.Wi))))))}(this.localStore,new Ia(this.It),this.documents,this.Mu.id),t=this.Fu(this.documents);for(const e of this.queries)await so(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,$u:this.collectionGroups,Bu:e}}constructor(e,t,n){this.Mu=e,this.localStore=t,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=_a(e)}}function _a(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e){this.key=e}}class Ta{constructor(e){this.key=e}}class Sa{get Qu(){return this.Lu}ju(e,t){const n=t?t.Wu:new ua,r=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ht(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.zu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,Wu:n,$i:o,mutatedKeys:i}}zu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.Wu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return n(e)-n(t)}(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const s=t?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new la(this.query,e.Gu,r,i,e.mutatedKeys,0===o,a,!1),Yu:s}:{Yu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new ua,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=Wn(),this.Gu.forEach((e=>{this.Xu(e.key)&&(this.qu=this.qu.add(e.key))}));const t=[];return e.forEach((e=>{this.qu.has(e)||t.push(new Ta(e))})),this.qu.forEach((n=>{e.has(n)||t.push(new Ea(n))})),t}Zu(e){this.Lu=e.Hi,this.qu=Wn();const t=this.ju(e.documents);return this.applyChanges(t,!0)}tc(){return la.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}constructor(e,t){this.query=e,this.Lu=t,this.Uu=null,this.current=!1,this.qu=Wn(),this.mutatedKeys=Wn(),this.Ku=Yt(e),this.Gu=new ca(this.Ku)}}class ka{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class xa{constructor(e){this.key=e,this.ec=!1}}class Aa{get isPrimaryClient(){return!0===this.fc}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Pn((e=>Wt(e)),Kt),this.ic=new Map,this.rc=new Set,this.oc=new be(W.comparator),this.uc=new Map,this.cc=new Ns,this.ac={},this.hc=new Map,this.lc=ss.vn(),this.onlineState="Unknown",this.fc=void 0}}async function Na(e,t){const n=tc(e);let r,i;const s=n.sc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const e=await Zs(n.localStore,Gt(t));n.isPrimaryClient&&Oo(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Ca(n,t,r,"current"===s)}return i}async function Ca(e,t,n,r){e.dc=(t,n,r)=>async function(e,t,n,r){let i=t.view.ju(n);i.$i&&(i=await to(e.localStore,t.query,!1).then((({documents:e})=>t.view.ju(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return qa(e,t.targetId,o.Yu),o.snapshot}(e,t,n,r);const i=await to(e.localStore,t,!0),s=new Sa(t,i.Hi),o=s.ju(i.documents),a=Yn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);qa(e,n,c.Yu);const u=new ka(t,n,s);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function Da(e,t){const n=E(e),r=n.sc.get(t),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter((e=>!Kt(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await eo(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Po(n.remoteStore,r.targetId),Va(n,r.targetId)})).catch(ie)):(Va(n,r.targetId),await eo(n.localStore,r.targetId,!0))}async function Ra(e,t){const n=E(e);try{const e=await function(e,t){const n=E(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var l,h,d;t.targetMismatches.has(a)?u=u.withResumeToken(Ce.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Fn(),c=Wn();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Xs(e,s,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(q.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return se.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ui=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.uc.get(t);r&&(b(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ec=!0:e.modifiedDocuments.size>0?b(r.ec):e.removedDocuments.size>0&&(b(r.ec),r.ec=!1))})),await za(n,e,t)}catch(e){await ie(e)}}function La(e,t,n){const r=E(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.sc.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=E(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.bu(t)&&(r=!0)})),r&&ya(n)}(r.eventManager,t),e.length&&r.nc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Oa(e,t,n){const r=E(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.uc.get(t),s=i&&i.key;if(s){let e=new be(W.comparator);e=e.insert(s,dt.newNoDocument(s,q.min()));const n=Wn().add(s),i=new Qn(q.min(),new Map,new Te(F),e,n);await Ra(r,i),r.oc=r.oc.remove(s),r.uc.delete(t),Ga(r)}else await eo(r.localStore,t,!1).then((()=>Va(r,t,n))).catch(ie)}async function Pa(e,t){const n=E(e),r=t.batch.batchId;try{const e=await function(e,t){const n=E(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=se.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);b(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Wn();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Ua(n,r,null),Fa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,e)}catch(e){await ie(e)}}async function Ma(e,t,n){const r=E(e);try{const e=await function(e,t){const n=E(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(b(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Ua(r,t,n),Fa(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await za(r,e)}catch(e){await ie(e)}}function Fa(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Ua(e,t,n){const r=E(e);let i=r.ac[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ac[r.currentUser.toKey()]=i}}function Va(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ic.get(t))e.sc.delete(r),n&&e.nc._c(r,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach((t=>{e.cc.containsKey(t)||Ba(e,t)}))}function Ba(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Po(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Ga(e))}function qa(e,t,n){for(const r of n)r instanceof Ea?(e.cc.addReference(r.key,t),ja(e,r)):r instanceof Ta?(g("SyncEngine","Document no longer in limbo: "+r.key),e.cc.removeReference(r.key,t),e.cc.containsKey(r.key)||Ba(e,r.key)):I()}function ja(e,t){const n=t.key,r=n.path.canonicalString();e.oc.get(n)||e.rc.has(r)||(g("SyncEngine","New document in limbo: "+n),e.rc.add(r),Ga(e))}function Ga(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new W(G.fromString(t)),r=e.lc.next();e.uc.set(r,new xa(n)),e.oc=e.oc.insert(n,r),Oo(e.remoteStore,new di(Gt(Ft(n.path)),r,2,ye.at))}}async function za(e,t,n){const r=E(e),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach(((e,a)=>{o.push(r.dc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=Ks.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.nc.Wo(i),await async function(e,t){const n=E(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>se.forEach(t,(t=>se.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>se.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!le(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,i)}}}(r.localStore,s))}async function Ka(e,t){const n=E(e);if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const e=await Qs(n.localStore,t);n.currentUser=t,(r=n).hc.forEach((e=>{e.forEach((e=>{e.reject(new S(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.hc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await za(n,e.ji)}var r}function Wa(e,t){const n=E(e),r=n.uc.get(t);if(r&&r.ec)return Wn().add(r.key);{let e=Wn();const r=n.ic.get(t);if(!r)return e;for(const t of r){const r=n.sc.get(t);e=e.unionWith(r.view.Qu)}return e}}async function $a(e,t){const n=E(e),r=await to(n.localStore,t.query,!0),i=t.view.Zu(r);return n.isPrimaryClient&&qa(n,t.targetId,i.Yu),i}async function Ha(e,t){const n=E(e);return ro(n.localStore,t).then((e=>za(n,e)))}async function Qa(e,t,n,r){const i=E(e),s=await function(e,t){const n=E(e),r=E(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Tn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):se.resolve(null)))))}(i.localStore,t);var o,a;null!==s?("pending"===n?await $o(i.remoteStore):"acknowledged"===n||"rejected"===n?(Ua(i,t,r||null),Fa(i,t),o=i.localStore,a=t,E(E(o).mutationQueue).An(a)):I(),await za(i,s)):g("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Ya(e,t,n){const r=E(e),i=[],s=[];for(const e of t){let t;const n=r.ic.get(e);if(n&&0!==n.length){t=await Zs(r.localStore,Gt(n[0]));for(const e of n){const t=r.sc.get(e),n=await $a(r,t);n.snapshot&&s.push(n.snapshot)}}else{const n=await no(r.localStore,e);t=await Zs(r.localStore,n),await Ca(r,Xa(n),e,!1)}i.push(t)}return r.nc.Wo(s),i}function Xa(e){return Mt(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Ja(e){const t=E(e);return E(E(t.localStore).persistence).vi()}async function Za(e,t,n,r){const i=E(e);if(i.fc)return void g("SyncEngine","Ignoring unexpected query state notification.");const s=i.ic.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await ro(i.localStore,Qt(s[0])),r=Qn.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await za(i,e,r);break}case"rejected":await eo(i.localStore,t,!0),Va(i,t,r);break;default:I()}}async function ec(e,t,n){const r=tc(e);if(r.fc){for(const e of t){if(r.ic.has(e)){g("SyncEngine","Adding an already active target "+e);continue}const t=await no(r.localStore,e),n=await Zs(r.localStore,t);await Ca(r,Xa(t),n.targetId,!1),Oo(r.remoteStore,n)}for(const e of n)r.ic.has(e)&&await eo(r.localStore,e,!1).then((()=>{Po(r.remoteStore,e),Va(r,e)})).catch(ie)}}function tc(e){const t=E(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Ra.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wa.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Oa.bind(null,t),t.nc.Wo=ma.bind(null,t.eventManager),t.nc._c=ga.bind(null,t.eventManager),t}function nc(e){const t=E(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pa.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ma.bind(null,t),t}class rc{async initialize(e){this.It=To(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,t){return null}Tc(e,t){return null}yc(e){return Hs(this.persistence,new Ws,e.initialUser,this.It)}gc(e){return new Ps(Fs.Bs,this.It)}mc(e){return new go}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ic extends rc{async initialize(e){await super.initialize(e),await this.Ec.initialize(this,e),await nc(this.Ec.syncEngine),await $o(this.Ec.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}yc(e){return Hs(this.persistence,new Ws,e.initialUser,this.It)}Ic(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new ds(n,e.asyncQueue,t)}Tc(e,t){const n=new ge(t,this.persistence);return new me(e.asyncQueue,n)}gc(e){const t=zs(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Xi.withCacheSize(this.cacheSizeBytes):Xi.DEFAULT;return new qs(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,_o(),Eo(),this.It,this.sharedClientState,!!this.forceOwnership)}mc(e){return new go}constructor(e,t,n){super(),this.Ec=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}}class sc extends ic{async initialize(e){await super.initialize(e);const t=this.Ec.syncEngine;this.sharedClientState instanceof mo&&(this.sharedClientState.syncEngine={Fr:Qa.bind(null,t),$r:Za.bind(null,t),Br:ec.bind(null,t),vi:Ja.bind(null,t),Or:Ha.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li((async e=>{await async function(e,t){const n=E(e);if(tc(n),nc(n),!0===t&&!0!==n.fc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Ya(n,e.toArray());n.fc=!0,await ra(n.remoteStore,!0);for(const e of t)Oo(n.remoteStore,e)}else if(!1===t&&!1!==n.fc){const e=[];let t=Promise.resolve();n.ic.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(Va(n,i),eo(n.localStore,i,!0)))),Po(n.remoteStore,i)})),await t,await Ya(n,e),function(e){const t=E(e);t.uc.forEach(((e,n)=>{Po(t.remoteStore,n)})),t.cc.fs(),t.uc=new Map,t.oc=new be(W.comparator)}(n),n.fc=!1,await ra(n.remoteStore,!1)}}(this.Ec.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}mc(e){const t=_o();if(!mo.C(t))throw new S(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=zs(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new mo(t,e.asyncQueue,n,e.clientId,e.initialUser)}constructor(e,t){super(e,t,!1),this.Ec=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}}class oc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>La(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ka.bind(null,this.syncEngine),await ra(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new da}createDatastore(e){const t=To(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new bo(r));var r,i,s;return i=e.authCredentials,s=e.appCheckCredentials,new No(i,s,n,t)}createRemoteStore(e){var t,n,r,i,s;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>La(this.syncEngine,e,0),s=vo.C()?new vo:new yo,new Do(t,n,r,i,s)}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Aa(e,t,n,r,i,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);g("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Lo(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):y("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}constructor(e){this.observer=e,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{close(){return this.bc.cancel()}async getMetadata(){return this.metadata.promise}async wc(){return await this.getMetadata(),this.vc()}async vc(){const e=await this.Vc();if(null===e)return null;const t=this.Pc.decode(e),n=Number(t);isNaN(n)&&this.Sc(`length string (${t}) is not valid number`);const r=await this.Dc(n);return new wa(JSON.parse(r),e.length+n)}Cc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Vc(){for(;this.Cc()<0&&!await this.xc(););if(0===this.buffer.length)return null;const e=this.Cc();e<0&&this.Sc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Dc(e){for(;this.buffer.length<e;)await this.xc()&&this.Sc("Reached the end of bundle when more is expected.");const t=this.Pc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Sc(e){throw this.bc.cancel(),new Error(`Invalid bundle format: ${e}`)}async xc(){const e=await this.bc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}constructor(e,t){this.bc=e,this.It=t,this.metadata=new k,this.buffer=new Uint8Array,this.Pc=new TextDecoder("utf-8"),this.vc().then((e=>{e&&e.ku()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=E(e),r=yr(n.It)+"/documents",i={documents:t.map((e=>fr(n.It,e)))},s=await n.fo("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=(r=n.It,"found"in(i=e)?function(e,t){b(!!t.found),t.found.name,t.found.updateTime;const n=pr(e,t.found.name),r=lr(t.found.updateTime),i=new lt({mapValue:{fields:t.found.fields}});return dt.newFoundDocument(n,r,i)}(r,i):"missing"in i?function(e,t){b(!!t.missing),b(!!t.readTime);const n=pr(e,t.missing),r=lr(t.readTime);return dt.newNoDocument(n,r)}(r,i):I());var r,i;o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());b(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new An(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=W.fromPath(t);this.mutations.push(new Nn(n,this.precondition(n)))})),await async function(e,t){const n=E(e),r=yr(n.It)+"/documents",i={writes:t.map((e=>br(n.It,e)))};await n.co("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw I();t=q.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new S(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(q.min())?mn.exists(!1):mn.updateTime(t):mn.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(q.min()))throw new S(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return mn.updateTime(t)}return mn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{run(){this.Nc-=1,this.kc()}kc(){this.xo.Ao((async()=>{const e=new lc(this.datastore),t=this.Mc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Oc(e)}))))})).catch((e=>{this.Oc(e)}))}))}Mc(e){try{const t=this.updateFunction(e);return!Be(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Oc(e){this.Nc>0&&this.Fc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget((()=>(this.kc(),Promise.resolve())))):this.deferred.reject(e)}Fc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Ln(t)}return!1}constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.Nc=n.maxAttempts,this.xo=new So(this.asyncQueue,"transaction_retry")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new k;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=aa(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=h.UNAUTHENTICATED,this.clientId=M.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}}async function fc(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Qs(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function pc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await mc(e);g("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>na(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>na(t.remoteStore,n))),e.onlineComponents=t}async function mc(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await fc(e,new rc)),e.offlineComponents}async function gc(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await pc(e,new oc)),e.onlineComponents}function yc(e){return mc(e).then((e=>e.persistence))}function vc(e){return mc(e).then((e=>e.localStore))}function wc(e){return gc(e).then((e=>e.remoteStore))}function Ic(e){return gc(e).then((e=>e.syncEngine))}async function bc(e){const t=await gc(e),n=t.eventManager;return n.onListen=Na.bind(null,t.syncEngine),n.onUnlisten=Da.bind(null,t.syncEngine),n}function _c(e,t,n={}){const r=new k;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new cc({next:s=>{t.enqueueAndForget((()=>pa(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new S(T.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new va(Ft(n.path),s,{includeMetadataChanges:!0,Nu:!0});return fa(e,o)}(await bc(e),e.asyncQueue,t,n,r))),r.promise}function Ec(e,t,n={}){const r=new k;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new cc({next:n=>{t.enqueueAndForget((()=>pa(e,o))),n.fromCache&&"server"===r.source?i.reject(new S(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new va(n,s,{includeMetadataChanges:!0,Nu:!0});return fa(e,o)}(await bc(e),e.asyncQueue,t,n,r))),r.promise}function Tc(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,r=function(e,t){if(e instanceof Uint8Array)return ac(e,t);if(e instanceof ArrayBuffer)return ac(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new uc(r,t);var r}(n,To(t));e.asyncQueue.enqueueAndForget((async()=>{!function(e,t,n){const r=E(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=E(e),r=lr(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ns.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,i))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:(r=i).totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}),Promise.resolve(new Set);n._updateProgress(_a(i));const s=new ba(i,e.localStore,t.It);let o=await t.wc();for(;o;){const e=await s.Ou(o);e&&n._updateProgress(e),o=await t.wc()}const a=await s.complete();return await za(e,a.Bu,void 0),await function(e,t){const n=E(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ns.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(a.progress),Promise.resolve(a.$u)}catch(r){return v("SyncEngine",`Loading bundle failed with ${r}`),n._failWith(r),Promise.resolve(new Set)}var r})(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}(await Ic(e),i,r)}))}const Sc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(e,t,n){if(!n)throw new S(T.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function xc(e,t,n,r){if(!0===t&&!0===r)throw new S(T.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ac(e){if(!W.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Nc(e){if(W.isDocumentKey(e))throw new S(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":I()}function Dc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cc(e);throw new S(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Rc(e,t){if(t<=0)throw new S(T.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new S(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new S(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,xc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{get app(){if(!this._app)throw new S(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lc(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new A;switch(e.type){case"gapi":const t=e.client;return new R(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new S(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Sc.get(e);t&&(g("ComponentProvider","Removing Datastore"),Sc.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lc({}),this._settingsFrozen=!1}}function Pc(e,t,n,r={}){var i;const s=(e=Dc(e,Oc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&v("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=h.MOCK_USER;else{t=(0,a.createMockUserToken)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(s)}e._authCredentials=new N(new x(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Uc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mc(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class Fc{withConverter(e){return new Fc(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class Uc extends Fc{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mc(this.firestore,null,new W(e))}withConverter(e){return new Uc(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,Ft(n)),this._path=n,this.type="collection"}}function Vc(e,t,...n){if(e=(0,a.getModularInstance)(e),kc("collection","path",t),e instanceof Oc){const r=G.fromString(t,...n);return Nc(r),new Uc(e,null,r)}{if(!(e instanceof Mc||e instanceof Uc))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Nc(r),new Uc(e.firestore,null,r)}}function Bc(e,t){if(e=Dc(e,Oc),kc("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new S(T.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Fc(e,null,(n=t,new Pt(G.emptyPath(),n)));var n}function qc(e,t,...n){if(e=(0,a.getModularInstance)(e),1===arguments.length&&(t=M.R()),kc("doc","path",t),e instanceof Oc){const r=G.fromString(t,...n);return Ac(r),new Mc(e,null,new W(r))}{if(!(e instanceof Mc||e instanceof Uc))throw new S(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Ac(r),new Mc(e.firestore,e instanceof Uc?e.converter:null,new W(r))}}function jc(e,t){return e=(0,a.getModularInstance)(e),t=(0,a.getModularInstance)(t),(e instanceof Mc||e instanceof Uc)&&(t instanceof Mc||t instanceof Uc)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Gc(e,t){return e=(0,a.getModularInstance)(e),t=(0,a.getModularInstance)(t),e instanceof Fc&&t instanceof Fc&&e.firestore===t.firestore&&Kt(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zc{get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const t=Eo();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise((()=>{}));const t=new k;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Bc.push(e),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!le(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(e){const t=this.$c.then((()=>(this.Kc=!0,e().catch((e=>{this.qc=e,this.Kc=!1;throw y("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.Kc=!1,e))))));return this.$c=t,t}enqueueAfterDelay(e,t,n){this.Wc(),this.Qc.indexOf(e)>-1&&(t=0);const r=oa.createAndSchedule(this,e,t,n,(e=>this.Jc(e)));return this.Uc.push(r),r}Wc(){this.qc&&I()}verifyOperationInProgress(){}async Yc(){let e;do{e=this.$c,await e}while(e!==this.$c)}Xc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}Zc(e){return this.Yc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Yc()}))}ta(e){this.Qc.push(e)}Jc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new So(this,"async_queue_retry"),this.jc=()=>{const e=Eo();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.bo()};const e=Eo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.jc)}}function Kc(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class Wc{onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}constructor(){this._progressObserver={},this._taskCompletionResolver=new k,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=-1;class Hc extends Oc{_terminate(){return this._firestoreClient||Yc(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new zc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function Qc(e){return e._firestoreClient||Yc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Yc(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new Ue(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;e._firestoreClient=new dc(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Xc(e,t){ou(e=Dc(e,Hc));const n=Qc(e),r=e._freezeSettings(),i=new oc;return Zc(n,i,new ic(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Jc(e){ou(e=Dc(e,Hc));const t=Qc(e),n=e._freezeSettings(),r=new oc;return Zc(t,r,new sc(r,n.cacheSizeBytes))}function Zc(e,t,n){const r=new k;return e.asyncQueue.enqueue((async()=>{try{await fc(e,n),await pc(e,t),r.resolve()}catch(e){const t=e;if(!("FirebaseError"===(i=t).name?i.code===T.FAILED_PRECONDITION||i.code===T.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&i instanceof DOMException)||22===i.code||20===i.code||11===i.code))throw t;v("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}var i})).then((()=>r.promise))}function eu(e){if(e._initialized&&!e._terminated)throw new S(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new k;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!ae.C())return Promise.resolve();const t=e+"main";await ae.delete(t)}(zs(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function tu(e){return function(e){const t=new k;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t){const n=E(e);Bo(n.remoteStore)||g("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=E(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.hc.get(e)||[];r.push(t),n.hc.set(e,r)}catch(e){const n=aa(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}(await Ic(e),t))),t.promise}(Qc(e=Dc(e,Hc)))}function nu(e){return(t=Qc(e=Dc(e,Hc))).asyncQueue.enqueue((async()=>{const e=await yc(t),n=await wc(t);return e.setNetworkEnabled(!0),function(e){const t=E(e);return t._u.delete(0),Ro(t)}(n)}));var t}function ru(e){return(t=Qc(e=Dc(e,Hc))).asyncQueue.enqueue((async()=>{const e=await yc(t),n=await wc(t);return e.setNetworkEnabled(!1),async function(e){const t=E(e);t._u.add(0),await Lo(t),t.gu.set("Offline")}(n)}));var t}function iu(e,t){const n=Qc(e=Dc(e,Hc)),r=new Wc;return Tc(n,e._databaseId,t,r),r}function su(e,t){return(n=Qc(e=Dc(e,Hc)),r=t,n.asyncQueue.enqueue((async()=>function(e,t){const n=E(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ns.getNamedQuery(e,t)))}(await vc(n),r)))).then((t=>t?new Fc(e,null,t.query):null));var n,r}function ou(e){if(e._initialized||e._terminated)throw new S(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new S(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{static fromBase64String(e){try{return new cu(Ce.fromBase64String(e))}catch(e){throw new S(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new cu(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return F(this._lat,e._lat)||F(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new S(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new S(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=/^__.*__$/;class du{toMutation(e,t){return null!==this.fieldMask?new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new En(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class fu{toMutation(e,t){return new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function pu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class mu{get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new mu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.oa(e),r}ua(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.sa({path:n,ra:!1});return r.ea(),r}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Pu(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(0===e.length)throw this.aa("Document fields must not be empty");if(pu(this.na)&&hu.test(e))throw this.aa('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class gu{fa(e,t,n,r=!1){return new mu({na:e,methodName:t,la:n,path:K.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||To(e)}}function yu(e){const t=e._freezeSettings(),n=To(e._databaseId);return new gu(e._databaseId,!!t.ignoreUndefinedProperties,n)}function vu(e,t,n,r,i,s={}){const o=e.fa(s.merge||s.mergeFields?2:0,t,n,i);Du("Data must be an object, but it was:",o,r);const a=Nu(r,o);let c,u;if(s.merge)c=new xe(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Ru(t,r,n);if(!o.contains(i))throw new S(T.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Mu(e,i)||e.push(i)}c=new xe(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new du(new lt(a),c,u)}class wu extends uu{_toFieldTransform(e){if(2!==e.na)throw 1===e.na?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wu}}function Iu(e,t,n){return new mu({na:3,la:t.settings.la,methodName:e._methodName,ra:n},t.databaseId,t.It,t.ignoreUndefinedProperties)}class bu extends uu{_toFieldTransform(e){return new fn(e.path,new sn)}isEqual(e){return e instanceof bu}}class _u extends uu{_toFieldTransform(e){const t=Iu(this,e,!0),n=this.da.map((e=>Au(e,t))),r=new on(n);return new fn(e.path,r)}isEqual(e){return this===e}constructor(e,t){super(e),this.da=t}}class Eu extends uu{_toFieldTransform(e){const t=Iu(this,e,!0),n=this.da.map((e=>Au(e,t))),r=new cn(n);return new fn(e.path,r)}isEqual(e){return this===e}constructor(e,t){super(e),this.da=t}}class Tu extends uu{_toFieldTransform(e){const t=new ln(e.It,en(e.It,this._a));return new fn(e.path,t)}isEqual(e){return this===e}constructor(e,t){super(e),this._a=t}}function Su(e,t,n,r){const i=e.fa(1,t,n);Du("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();we(r,((e,r)=>{const c=Ou(t,e,n);r=(0,a.getModularInstance)(r);const u=i.ua(c);if(r instanceof wu)s.push(c);else{const e=Au(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new xe(s);return new fu(o,c,i.fieldTransforms)}function ku(e,t,n,r,i,s){const o=e.fa(1,t,n),c=[Ru(t,r,n)],u=[i];if(s.length%2!=0)throw new S(T.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)c.push(Ru(t,s[e])),u.push(s[e+1]);const l=[],h=lt.empty();for(let e=c.length-1;e>=0;--e)if(!Mu(l,c[e])){const t=c[e];let n=u[e];n=(0,a.getModularInstance)(n);const r=o.ua(t);if(n instanceof wu)l.push(t);else{const e=Au(n,r);null!=e&&(l.push(t),h.set(t,e))}}const d=new xe(l);return new fu(h,d,o.fieldTransforms)}function xu(e,t,n,r=!1){return Au(n,e.fa(r?4:3,t))}function Au(e,t){if(Cu(e=(0,a.getModularInstance)(e)))return Du("Unsupported field value:",t,e),Nu(e,t);if(e instanceof uu)return function(e,t){if(!pu(t.na))throw t.aa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.aa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&4!==t.na)throw t.aa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Au(i,t.ca(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return en(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=B.fromDate(e);return{timestampValue:ar(t.It,n)}}if(e instanceof B){const n=new B(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ar(t.It,n)}}if(e instanceof lu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cu)return{bytesValue:cr(t.It,e._byteString)};if(e instanceof Mc){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:hr(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.aa(`Unsupported field value: ${Cc(e)}`)}(e,t)}function Nu(e,t){const n={};return Ie(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):we(e,((e,r)=>{const i=Au(r,t.ia(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Cu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof B||e instanceof lu||e instanceof cu||e instanceof Mc||e instanceof uu)}function Du(e,t,n){if(!Cu(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Cc(n);throw"an object"===r?t.aa(e+" a custom object"):t.aa(e+" "+r)}var r}function Ru(e,t,n){if((t=(0,a.getModularInstance)(t))instanceof au)return t._internalPath;if("string"==typeof t)return Ou(e,t);throw Pu("Field path arguments must be of type string or ",e,!1,void 0,n)}const Lu=new RegExp("[~\\*/\\[\\]]");function Ou(e,t,n){if(t.search(Lu)>=0)throw Pu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new au(...t.split("."))._internalPath}catch(r){throw Pu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Pu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new S(T.INVALID_ARGUMENT,a+e+c)}function Mu(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{get id(){return this._key.path.lastSegment()}get ref(){return new Mc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Uu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vu("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class Uu extends Fu{data(){return super.data()}}function Vu(e,t){return"string"==typeof t?Ou(e,t):t instanceof au?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class qu extends Fu{exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ju(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Vu("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class ju extends qu{data(e={}){return super.data(e)}}class Gu{get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ju(this._firestore,this._userDataWriter,n.key,n,new Bu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new S(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new ju(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Bu(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ju(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Bu(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:zu(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Bu(r.hasPendingWrites,r.fromCache),this.query=n}}function zu(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}function Ku(e,t){return e instanceof qu&&t instanceof qu?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Gu&&t instanceof Gu&&e._firestore===t._firestore&&Gc(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new S(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $u{}function Hu(e,...t){for(const n of t)e=n._apply(e);return e}class Qu extends $u{_apply(e){const t=yu(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new S(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ll(o,s);const t=[];for(const n of o)t.push(ul(r,e,n));a={arrayValue:{values:t}}}else a=ul(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ll(o,s),a=xu(n,"where",o,"in"===s||"not-in"===s);const c=bt.create(i,s,a);return function(e,t){if(t.dt()){const n=Bt(e);if(null!==n&&!n.isEqual(t.field))throw new S(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Vt(e);null!==r&&hl(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new S(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,0,t,e.firestore._databaseId,this.wa,this.ma,this.ga);return new Fc(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Pt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}constructor(e,t,n){super(),this.wa=e,this.ma=t,this.ga=n,this.type="where"}}function Yu(e,t,n){const r=t,i=Vu("where",e);return new Qu(i,r,n)}class Xu extends $u{_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new S(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Dt(t,n);return function(e,t){if(null===Vt(e)){const n=Bt(e);null!==n&&hl(e,n,t.field)}}(e,r),r}(e._query,this.wa,this.ya);return new Fc(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Pt(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}constructor(e,t){super(),this.wa=e,this.ya=t,this.type="orderBy"}}function Ju(e,t="asc"){const n=t,r=Vu("orderBy",e);return new Xu(r,n)}class Zu extends $u{_apply(e){return new Fc(e.firestore,e.converter,zt(e._query,this.pa,this.Ia))}constructor(e,t,n){super(),this.type=e,this.pa=t,this.Ia=n}}function el(e){return Rc("limit",e),new Zu("limit",e,"F")}function tl(e){return Rc("limitToLast",e),new Zu("limitToLast",e,"L")}class nl extends $u{_apply(e){const t=cl(e,this.type,this.Ta,this.Ea);return new Fc(e.firestore,e.converter,(n=e._query,r=t,new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}constructor(e,t,n){super(),this.type=e,this.Ta=t,this.Ea=n}}function rl(...e){return new nl("startAt",e,!0)}function il(...e){return new nl("startAfter",e,!1)}class sl extends $u{_apply(e){const t=cl(e,this.type,this.Ta,this.Ea);return new Fc(e.firestore,e.converter,(n=e._query,r=t,new Pt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}constructor(e,t,n){super(),this.type=e,this.Ta=t,this.Ea=n}}function ol(...e){return new sl("endBefore",e,!1)}function al(...e){return new sl("endAt",e,!0)}function cl(e,t,n,r){if(n[0]=(0,a.getModularInstance)(n[0]),n[0]instanceof Fu)return function(e,t,n,r,i){if(!r)throw new S(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const n of jt(e))if(n.field.isKeyField())s.push(Je(t,r.key));else{const e=r.data.field(n.field);if(Pe(e))throw new S(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+n.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=n.field.canonicalString();throw new S(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ct(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=yu(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new S(T.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let s=0;s<i.length;s++){const c=i[s];if(o[s].field.isKeyField()){if("string"!=typeof c)throw new S(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof c}`);if(!qt(e)&&-1!==c.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${c}' contains a slash.`);const n=e.path.child(G.fromString(c));if(!W.isDocumentKey(n))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new W(n);a.push(Je(t,i))}else{const e=xu(n,r,c);a.push(e)}}return new Ct(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function ul(e,t,n){if("string"==typeof(n=(0,a.getModularInstance)(n))){if(""===n)throw new S(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qt(t)&&-1!==n.indexOf("/"))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(G.fromString(n));if(!W.isDocumentKey(r))throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Je(e,new W(r))}if(n instanceof Mc)return Je(e,n._key);throw new S(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cc(n)}.`)}function ll(e,t){if(!Array.isArray(e)||0===e.length)throw new S(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new S(T.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function hl(e,t,n){if(!n.isEqual(t))throw new S(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{convertValue(e,t="none"){switch(Ke(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Oe(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw I()}}convertObject(e,t){const n={};return we(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new lu(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Me(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fe(e));default:return null}}convertTimestamp(e){const t=Re(e);return new B(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=G.fromString(e);b(Lr(n));const r=new Ve(n.get(1),n.get(3)),i=new W(n.popFirst(5));return r.isEqual(t)||y(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class ml extends fl{convertBytes(e){return new cu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mc(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{set(e,t,n){this._verifyNotCommitted();const r=yl(e,this._firestore),i=pl(r.converter,t,n),s=vu(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,mn.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=yl(e,this._firestore);let s;return s="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof au?ku(this._dataReader,"WriteBatch.update",i._key,t,n,r):Su(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,mn.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=yl(e,this._firestore);return this._mutations=this._mutations.concat(new An(t._key,mn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=yu(e)}}function yl(e,t){if((e=(0,a.getModularInstance)(e)).firestore!==t)throw new S(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(e){e=Dc(e,Mc);const t=Dc(e.firestore,Hc);return _c(Qc(t),e._key).then((n=>Rl(t,e,n)))}class wl extends fl{convertBytes(e){return new cu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Mc(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function Il(e){e=Dc(e,Mc);const t=Dc(e.firestore,Hc),n=Qc(t),r=new wl(t);return function(e,t){const n=new k;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=E(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new S(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=aa(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await vc(e),t,n))),n.promise}(n,e._key).then((n=>new qu(t,r,e._key,n,new Bu(null!==n&&n.hasLocalMutations,!0),e.converter)))}function bl(e){e=Dc(e,Mc);const t=Dc(e.firestore,Hc);return _c(Qc(t),e._key,{source:"server"}).then((n=>Rl(t,e,n)))}function _l(e){e=Dc(e,Fc);const t=Dc(e.firestore,Hc),n=Qc(t),r=new wl(t);return Wu(e._query),Ec(n,e._query).then((n=>new Gu(t,r,e,n)))}function El(e){e=Dc(e,Fc);const t=Dc(e.firestore,Hc),n=Qc(t),r=new wl(t);return function(e,t){const n=new k;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await to(e,t,!0),i=new Sa(t,r.Hi),s=i.ju(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=aa(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await vc(e),t,n))),n.promise}(n,e._query).then((n=>new Gu(t,r,e,n)))}function Tl(e){e=Dc(e,Fc);const t=Dc(e.firestore,Hc),n=Qc(t),r=new wl(t);return Ec(n,e._query,{source:"server"}).then((n=>new Gu(t,r,e,n)))}function Sl(e,t,n){e=Dc(e,Mc);const r=Dc(e.firestore,Hc),i=pl(e.converter,t,n);return Dl(r,[vu(yu(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,mn.none())])}function kl(e,t,n,...r){e=Dc(e,Mc);const i=Dc(e.firestore,Hc),s=yu(i);let o;return o="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof au?ku(s,"updateDoc",e._key,t,n,r):Su(s,"updateDoc",e._key,t),Dl(i,[o.toMutation(e._key,mn.exists(!0))])}function xl(e){return Dl(Dc(e.firestore,Hc),[new An(e._key,mn.none())])}function Al(e,t){const n=Dc(e.firestore,Hc),r=qc(e),i=pl(e.converter,t);return Dl(n,[vu(yu(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,mn.exists(!1))]).then((()=>r))}function Nl(e,...t){var n,r,i;e=(0,a.getModularInstance)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Kc(t[o])||(s=t[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Kc(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Mc)l=Dc(e.firestore,Hc),h=Ft(e._key.path),u={next:n=>{t[o]&&t[o](Rl(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Dc(e,Fc);l=Dc(n.firestore,Hc),h=n._query;const r=new wl(l);u={next:e=>{t[o]&&t[o](new Gu(l,r,n,e))},error:t[o+1],complete:t[o+2]},Wu(e._query)}return function(e,t,n,r){const i=new cc(r),s=new va(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>fa(await bc(e),s))),()=>{i.Rc(),e.asyncQueue.enqueueAndForget((async()=>pa(await bc(e),s)))}}(Qc(l),h,c,u)}function Cl(e,t){return function(e,t){const n=new cc(t);return e.asyncQueue.enqueueAndForget((async()=>{return t=await bc(e),r=n,E(t).Ru.add(r),void r.next();var t,r})),()=>{n.Rc(),e.asyncQueue.enqueueAndForget((async()=>{return t=await bc(e),r=n,void E(t).Ru.delete(r);var t,r}))}}(Qc(e=Dc(e,Hc)),Kc(t)?t:{next:t})}function Dl(e,t){return function(e,t){const n=new k;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const r=nc(e);try{const e=await function(e,t){const n=E(e),r=B.now(),i=t.reduce(((e,t)=>e.add(t.key)),Wn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Fn(),c=Wn();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=bn(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Tn(e.key,t,ht(t.value.mapValue),mn.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Bn(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ac[e.currentUser.toKey()];r||(r=new be(F)),r=r.insert(t,n),e.ac[e.currentUser.toKey()]=r}(r,e.batchId,n),await za(r,e.changes),await $o(r.remoteStore)}catch(e){const t=aa(e,"Failed to persist write");n.reject(t)}}(await Ic(e),t,n))),n.promise}(Qc(e),t)}function Rl(e,t,n){const r=n.docs.get(t._key),i=new wl(e);return new qu(e,i,t._key,r,new Bu(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends class{get(e){const t=yl(e,this._firestore),n=new ml(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return I();const r=e[0];if(r.isFoundDocument())return new Fu(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Fu(this._firestore,n,t._key,null,t.converter);throw I()}))}set(e,t,n){const r=yl(e,this._firestore),i=pl(r.converter,t,n),s=vu(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=yl(e,this._firestore);let s;return s="string"==typeof(t=(0,a.getModularInstance)(t))||t instanceof au?ku(this._dataReader,"Transaction.update",i._key,t,n,r):Su(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=yl(e,this._firestore);return this._transaction.delete(t._key),this}constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=yu(e)}}{get(e){const t=yl(e,this._firestore),n=new wl(this._firestore);return super.get(e).then((e=>new qu(this._firestore,n,t._key,e._document,new Bu(!1,!1),t.converter)))}constructor(e,t){super(e,t),this._firestore=e}}function Ol(e,t,n){e=Dc(e,Hc);const r=Object.assign(Object.assign({},dl),n);return function(e){if(e.maxAttempts<1)throw new S(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new k;return e.asyncQueue.enqueueAndForget((async()=>{const i=await(s=e,gc(s).then((e=>e.datastore)));var s;new hc(e.asyncQueue,i,n,t,r).run()})),r.promise}(Qc(e),(n=>t(new Ll(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){return new wu("deleteField")}function Ml(){return new bu("serverTimestamp")}function Fl(...e){return new _u("arrayUnion",e)}function Ul(...e){return new Eu("arrayRemove",e)}function Vl(e){return new Tu("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){var n;n=r.SDK_VERSION,d=n,(0,r._registerComponent)(new(0,s.Component)("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Hc(new C(e.getProvider("auth-internal")),new O(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new S(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ve(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(l,"3.5.0",e),(0,r.registerVersion)(l,"3.5.0","esm2017")}()})),i.register("lW9Fu",(function(n,r){e(n.exports,"createWebChannelTransport",(function(){return Zn})),e(n.exports,"getStatEventTarget",(function(){return er})),e(n.exports,"ErrorCode",(function(){return tr})),e(n.exports,"EventType",(function(){return nr})),e(n.exports,"Event",(function(){return rr})),e(n.exports,"Stat",(function(){return ir})),e(n.exports,"FetchXmlHttpFactory",(function(){return sr})),e(n.exports,"WebChannel",(function(){return or})),e(n.exports,"XhrIo",(function(){return ar}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o={},a=a||{},c=s||self;function u(){}function l(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function h(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(e,t,n){return e.call.apply(e.bind,arguments)}function m(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function g(e,t,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function y(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function v(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function w(){this.s=this.s,this.o=this.o}var I={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,d)&&e[d]||(e[d]=++f)}(this);delete I[e]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function _(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function E(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(l(n)){const t=e.length||0,r=n.length||0;e.length=t+r;for(let i=0;i<r;i++)e[t+i]=n[i]}else e.push(n)}}function T(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{c.addEventListener("test",u,t),c.removeEventListener("test",u,t)}catch(e){}return e}();function k(e){return/^[\s\xa0]*$/.test(e)}var x=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function A(e,t){return e<t?-1:e>t?1:0}function N(){var e=c.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return-1!=N().indexOf(e)}function D(e){return D[" "](e),e}D[" "]=u;var R,L,O=C("Opera"),P=C("Trident")||C("MSIE"),M=C("Edge"),F=M||P,U=C("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),V=-1!=N().toLowerCase().indexOf("webkit")&&!C("Edge");function B(){var e=c.document;return e?e.documentMode:void 0}e:{var q="",j=(L=N(),U?/rv:([^\);]+)(\)|;)/.exec(L):M?/Edge\/([\d\.]+)/.exec(L):P?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(L):V?/WebKit\/(\S+)/.exec(L):O?/(?:Version)[ \/]?(\S+)/.exec(L):void 0);if(j&&(q=j?j[1]:""),P){var G=B();if(null!=G&&G>parseFloat(q)){R=String(G);break e}}R=q}var z,K={};function W(){return function(e){var t=K;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=x(String(R)).split("."),n=x("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=A(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||A(0==i[2].length,0==s[2].length)||A(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(c.document&&P){var $=B();z=$||(parseInt(R,10)||void 0)}else z=void 0;var H=z;function Q(e,t){if(T.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(U){e:{try{D(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Y[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Q.X.h.call(this)}}v(Q,T);var Y={2:"touch",3:"pen",4:"mouse"};Q.prototype.h=function(){Q.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),J=0;function Z(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++J,this.ba=this.ea=!1}function ee(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function te(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,r;for(let t=1;t<arguments.length;t++){for(n in r=arguments[t],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=b(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ee(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new Z(t,this.src,s,!!r,i)).ea=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return de(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=we(n),e&&e[X]?e.N(t,n,h(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=ye(e);if(a||(e[ce]=a=new se(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=ge;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)S||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)de(e,t[s],n,r,i);return null}return n=we(n),e&&e[X]?e.O(t,n,h(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function fe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=we(n),e&&e[X]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ae(s=e.g[t],n,r,i))&&(ee(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&pe(n))}function pe(e){if("number"!=typeof e&&e&&!e.ba){var t=e.src;if(t&&t[X])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):ee(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ge(e,t){if(e.ba)e=!0;else{t=new Q(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&pe(e),e=n.call(r,t)}return e}function ye(e){return(e=e[ce])instanceof se?e:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"==typeof e?e:(e[ve]||(e[ve]=function(t){return e.handleEvent(t)}),e[ve])}function Ie(){w.call(this),this.i=new se(this),this.P=this,this.I=null}function be(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new T(t,e);else if(t instanceof T)t.target=t.target||e;else{var i=t;ie(t=new T(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=_e(o,r,!0,t)&&i}if(i=_e(o=t.g=e,r,!0,t)&&i,i=_e(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=_e(o=t.g=n[s],r,!1,t)&&i}function _e(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(Ie,w),Ie.prototype[X]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){fe(this,e,t,n,r)},Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ee(n[r]);delete t.g[e],t.h--}}this.I=null},Ie.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ee=c.JSON.stringify;function Te(){var e=De;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Se,ke=new class{get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}}((()=>new xe),(e=>e.reset()));class xe{set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Ae(e){c.setTimeout((()=>{throw e}),0)}function Ne(e,t){Se||function(){var e=c.Promise.resolve(void 0);Se=function(){e.then(Re)}}(),Ce||(Se(),Ce=!0),De.add(e,t)}var Ce=!1,De=new class{add(e,t){const n=ke.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Re(){for(var e;e=Te();){try{e.h.call(e.g)}catch(e){Ae(e)}var t=ke;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ce=!1}function Le(e,t){Ie.call(this),this.h=e||1,this.g=t||c,this.j=g(this.kb,this),this.l=Date.now()}function Oe(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Pe(e,t,n){if("function"==typeof e)n&&(e=g(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=g(e.handleEvent,e)}return 2147483647<Number(t)?-1:c.setTimeout(e,t||0)}function Me(e){e.g=Pe((()=>{e.g=null,e.i&&(e.i=!1,Me(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}v(Le,Ie),(i=Le.prototype).ca=!1,i.R=null,i.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),be(this,"tick"),this.ca&&(Oe(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Le.X.M.call(this),Oe(this),delete this.g};class Fe extends w{l(e){this.h=arguments,this.g?this.i=!0:Me(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}}function Ue(e){w.call(this),this.h=e,this.g={}}v(Ue,w);var Ve=[];function Be(e,t,n,r){Array.isArray(n)||(n&&(Ve[0]=n.toString()),n=Ve);for(var i=0;i<n.length;i++){var s=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function qe(e){te(e.g,(function(e,t){this.g.hasOwnProperty(t)&&pe(e)}),e),e.g={}}function je(){this.g=!0}function Ge(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ee(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Ue.prototype.M=function(){Ue.X.M.call(this),qe(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},je.prototype.Aa=function(){this.g=!1},je.prototype.info=function(){};var ze={},Ke=null;function We(){return Ke=Ke||new Ie}function $e(e){T.call(this,ze.Oa,e)}function He(e){const t=We();be(t,new $e(t,e))}function Qe(e,t){T.call(this,ze.STAT_EVENT,e),this.stat=t}function Ye(e){const t=We();be(t,new Qe(t,e))}function Xe(e,t){T.call(this,ze.Pa,e),this.size=t}function Je(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){e()}),t)}ze.Oa="serverreachability",v($e,T),ze.STAT_EVENT="statevent",v(Qe,T),ze.Pa="timingevent",v(Xe,T);var Ze={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},et={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function tt(){}function nt(e){return e.h||(e.h=e.i())}function rt(){}tt.prototype.h=null;var it,st={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function ot(){T.call(this,"d")}function at(){T.call(this,"c")}function ct(){}function ut(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ue(this),this.O=ht,e=F?125:void 0,this.T=new Le(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lt}function lt(){this.i=null,this.g="",this.h=!1}v(ot,T),v(at,T),v(ct,tt),ct.prototype.g=function(){return new XMLHttpRequest},ct.prototype.i=function(){return{}},it=new ct;var ht=45e3,dt={},ft={};function pt(e,t,n){e.K=1,e.v=Lt(At(t)),e.s=n,e.P=!0,mt(e,null)}function mt(e,t){e.F=Date.now(),wt(e),e.A=At(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Wt(n.i,"t",r),e.C=0,n=e.l.H,e.h=new lt,e.g=Wn(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Fe(g(e.Ka,e,e.g),e.N)),Be(e.S,e.g,"readystatechange",e.hb),t=e.H?ne(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),He(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.U,e.s)}function gt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function yt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=vt(e,n),r==ft){4==t&&(e.o=4,Ye(14),i=!1),Ge(e.j,e.m,null,"[Incomplete Response]");break}if(r==dt){e.o=4,Ye(15),Ge(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ge(e.j,e.m,r,null),Tt(e,r)}gt(e)&&r!=ft&&r!=dt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ye(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Un(t),t.K=!0,Ye(11))):(Ge(e.j,e.m,n,"[Invalid Chunked Response]"),Et(e),_t(e))}function vt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ft:(n=Number(t.substring(n,r)),isNaN(n)?dt:(r+=1)+n>t.length?ft:(t=t.substr(r,n),e.C=r+n,t))}function wt(e){e.V=Date.now()+e.O,It(e,e.O)}function It(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Je(g(e.fb,e),t)}function bt(e){e.B&&(c.clearTimeout(e.B),e.B=null)}function _t(e){0==e.l.G||e.I||qn(e.l,e)}function Et(e){bt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Oe(e.T),qe(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Tt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Jt(n.h,e)))if(!e.J&&Jt(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(e){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Bn(n),Cn(n)}Fn(n),Ye(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Je(g(n.bb,n),6e3));if(1>=Xt(n.h)&&n.ja){try{n.ja()}catch(e){}n.ja=void 0}}else Gn(n,11)}else if((e.J||n.g==e)&&Bn(n),!k(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Zt(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Rt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((r=n).sa=Kn(r,r.H?r.ka:null,r.V),o.J){en(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(bt(a),wt(a)),r.g=o}else Mn(r);0<n.i.length&&Rn(n)}else"stop"!=u[0]&&"close"!=u[0]||Gn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Gn(n,7):Nn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}He(4)}catch(e){}}function St(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(l(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(l(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(l(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}(i=ut.prototype).setTimeout=function(e){this.O=e},i.hb=function(e){e=e.target;const t=this.L;t&&3==En(e)?t.l():this.Ka(e)},i.Ka=function(e){try{if(e==this.g)e:{const h=En(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(3!=h||F||this.g&&(this.h.h||this.g.fa()||Tn(this.g)))){this.I||4!=h||7==t||He(8==t||0>=d?3:2),bt(this);var n=this.g.aa();this.Y=n;t:if(gt(this)){var r=Tn(this.g);e="";var i=r.length,s=4==En(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Et(this),_t(this);var o="";break t}this.h.i=new c.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Ye(12),Et(this),_t(this);break e}Ge(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Tt(this,n)}this.P?(yt(this,h,o),F&&this.i&&3==h&&(Be(this.S,this.T,"tick",this.gb),this.T.start())):(Ge(this.j,this.m,o,null),Tt(this,o)),4==h&&Et(this),this.i&&!this.I&&(4==h?qn(this.l,this):(this.i=!1,wt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ye(12)):(this.o=0,Ye(13)),Et(this),_t(this)}}}catch(e){}},i.gb=function(){if(this.g){var e=En(this.g),t=this.g.fa();this.C<t.length&&(bt(this),yt(this,e,t),this.i&&4!=e&&wt(this))}},i.cancel=function(){this.I=!0,Et(this)},i.fb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(He(3),Ye(17)),Et(this),this.o=2,_t(this)):It(this,this.V-e)};var kt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof xt){this.h=void 0!==t?t:e.h,Nt(this,e.j),this.s=e.s,this.g=e.g,Ct(this,e.m),this.l=e.l,t=e.i;var n=new jt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Dt(this,n),this.o=e.o}else e&&(n=String(e).match(kt))?(this.h=!!t,Nt(this,n[1]||"",!0),this.s=Ot(n[2]||""),this.g=Ot(n[3]||"",!0),Ct(this,n[4]),this.l=Ot(n[5]||"",!0),Dt(this,n[6]||"",!0),this.o=Ot(n[7]||"")):(this.h=!!t,this.i=new jt(null,this.h))}function At(e){return new xt(e)}function Nt(e,t,n){e.j=n?Ot(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ct(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Dt(e,t,n){t instanceof jt?(e.i=t,function(e,t){t&&!e.j&&(Gt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(zt(this,t),Wt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Pt(t,Bt)),e.i=new jt(t,e.h))}function Rt(e,t,n){e.i.set(t,n)}function Lt(e){return Rt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ot(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Mt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Mt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pt(t,Ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Pt(t,Ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Pt(n,"/"==n.charAt(0)?Vt:Ut,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pt(n,qt)),e.join("")};var Ft=/[#\/\?@]/g,Ut=/[#\?:]/g,Vt=/[#\?]/g,Bt=/[#\?@]/g,qt=/#/g;function jt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function zt(e,t){Gt(e),t=$t(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Kt(e,t){return Gt(e),t=$t(e,t),e.g.has(t)}function Wt(e,t,n){zt(e,t),0<n.length&&(e.i=null,e.g.set($t(e,t),_(n)),e.h+=n.length)}function $t(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(i=jt.prototype).add=function(e,t){Gt(this),this.i=null,e=$t(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){Gt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},i.oa=function(){Gt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},i.W=function(e){Gt(this);let t=[];if("string"==typeof e)Kt(this,e)&&(t=t.concat(this.g.get($t(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},i.set=function(e,t){return Gt(this),this.i=null,Kt(this,e=$t(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ht(e){this.l=e||Qt,c.PerformanceNavigationTiming?e=0<(e=c.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(c.g&&c.g.Ga&&c.g.Ga()&&c.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qt=10;function Yt(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xt(e){return e.h?1:e.g?e.g.size:0}function Jt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Zt(e,t){e.g?e.g.add(t):e.h=t}function en(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function tn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return _(e.i)}function nn(){}function rn(){this.g=new nn}function sn(e,t,n){const r=n||"";try{St(e,(function(e,n){let i=e;h(e)&&(i=Ee(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function on(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function an(e){this.l=e.$b||null,this.j=e.ib||!1}function cn(e,t){Ie.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=un,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ht.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},nn.prototype.stringify=function(e){return c.JSON.stringify(e,void 0)},nn.prototype.parse=function(e){return c.JSON.parse(e,void 0)},v(an,tt),an.prototype.g=function(){return new cn(this.l,this.j)},an.prototype.i=function(e){return function(){return e}}({}),v(cn,Ie);var un=0;function ln(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}function hn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,dn(e)}function dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(i=cn.prototype).open=function(e,t){if(this.readyState!=un)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,dn(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||c).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,hn(this)),this.readyState=un},i.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==c.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ln(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))},i.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?hn(this):dn(this),3==this.readyState&&ln(this)}},i.Ua=function(e){this.g&&(this.response=this.responseText=e,hn(this))},i.Ta=function(e){this.g&&(this.response=e,hn(this))},i.ga=function(){this.g&&hn(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var fn=c.JSON.parse;function pn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=mn,this.K=this.L=!1}v(pn,Ie);var mn="",gn=/^https?$/i,yn=["POST","PUT"];function vn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,wn(e),bn(e)}function wn(e){e.D||(e.D=!0,be(e,"complete"),be(e,"error"))}function In(e){if(e.h&&void 0!==a&&(!e.C[1]||4!=En(e)||2!=e.aa()))if(e.v&&4==En(e))Pe(e.Ha,0,e);else if(be(e,"readystatechange"),4==En(e)){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.H).match(kt)[1]||null;if(!i&&c.self&&c.self.location){var s=c.self.location.protocol;i=s.substr(0,s.length-1)}r=!gn.test(i?i.toLowerCase():"")}n=r}if(n)be(e,"complete"),be(e,"success");else{e.m=6;try{var o=2<En(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.aa()+"]",wn(e)}}finally{bn(e)}}}function bn(e,t){if(e.g){_n(e);const n=e.g,r=e.C[0]?u:null;e.g=null,e.C=null,t||be(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function _n(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(c.clearTimeout(e.A),e.A=null)}function En(e){return e.g?e.g.readyState:0}function Tn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case mn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Sn(e){let t="";return te(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function kn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Sn(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Rt(e,t,n))}function xn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function An(e){this.Ca=0,this.i=[],this.j=new je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=xn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=xn("baseRetryDelayMs",5e3,e),this.ab=xn("retryDelaySeedMs",1e4,e),this.Za=xn("forwardChannelMaxRetries",2,e),this.ta=xn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ht(e&&e.concurrentRequestLimit),this.Fa=new rn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Nn(e){if(Dn(e),3==e.G){var t=e.U++,n=At(e.F);Rt(n,"SID",e.I),Rt(n,"RID",t),Rt(n,"TYPE","terminate"),On(e,n),(t=new ut(e,e.j,t,void 0)).K=2,t.v=Lt(At(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(t.v.toString(),"")),!n&&c.Image&&((new Image).src=t.v,n=!0),n||(t.g=Wn(t.l,null),t.g.da(t.v)),t.F=Date.now(),wt(t)}zn(e)}function Cn(e){e.g&&(Un(e),e.g.cancel(),e.g=null)}function Dn(e){Cn(e),e.u&&(c.clearTimeout(e.u),e.u=null),Bn(e),e.h.cancel(),e.m&&("number"==typeof e.m&&c.clearTimeout(e.m),e.m=null)}function Rn(e){Yt(e.h)||e.m||(e.m=!0,Ne(e.Ja,e),e.C=0)}function Ln(e,t){var n;n=t?t.m:e.U++;const r=At(e.F);Rt(r,"SID",e.I),Rt(r,"RID",n),Rt(r,"AID",e.T),On(e,r),e.o&&e.s&&kn(r,e.o,e.s),n=new ut(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Pn(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Zt(e.h,n),pt(n,r,t)}function On(e,t){e.ia&&te(e.ia,(function(e,n){Rt(t,n,e)})),e.l&&St({},(function(e,n){Rt(t,n,e)}))}function Pn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?g(e.l.Qa,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{sn(a,e,"req"+n+"_")}catch(e){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Mn(e){e.g||e.u||(e.Z=1,Ne(e.Ia,e),e.A=0)}function Fn(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=Je(g(e.Ia,e),jn(e,e.A)),e.A++,!0)}function Un(e){null!=e.B&&(c.clearTimeout(e.B),e.B=null)}function Vn(e){e.g=new ut(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=At(e.sa);Rt(t,"RID","rpc"),Rt(t,"SID",e.I),Rt(t,"CI",e.L?"0":"1"),Rt(t,"AID",e.T),Rt(t,"TYPE","xmlhttp"),On(e,t),e.o&&e.s&&kn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Lt(At(t)),n.s=null,n.P=!0,mt(n,e)}function Bn(e){null!=e.v&&(c.clearTimeout(e.v),e.v=null)}function qn(e,t){var n=null;if(e.g==t){Bn(e),Un(e),e.g=null;var r=2}else{if(!Jt(e.h,t))return;n=t.D,en(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;be(r=We(),new Xe(r,n,t,i)),Rn(e)}else Mn(e);else if(3==(i=t.o)||0==i&&0<e.pa||!(1==r&&function(e,t){return!(Xt(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.C>=(e.Ya?0:e.Za)||(e.m=Je(g(e.Ja,e,t),jn(e,e.C)),e.C++,0)))}(e,t)||2==r&&Fn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Gn(e,5);break;case 4:Gn(e,10);break;case 3:Gn(e,6);break;default:Gn(e,2)}}function jn(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function Gn(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=g(e.jb,e);n||(n=new xt("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Nt(n,"https"),Lt(n)),function(e,t){const n=new je;if(c.Image){const r=new Image;r.onload=y(on,n,r,"TestLoadImage: loaded",!0,t),r.onerror=y(on,n,r,"TestLoadImage: error",!1,t),r.onabort=y(on,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=y(on,n,r,"TestLoadImage: timeout",!1,t),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ye(2);e.G=0,e.l&&e.l.va(t),zn(e),Dn(e)}function zn(e){if(e.G=0,e.la=[],e.l){const t=tn(e.h);0==t.length&&0==e.i.length||(E(e.la,t),E(e.la,e.i),e.h.i.length=0,_(e.i),e.i.length=0),e.l.ua()}}function Kn(e,t,n){var r=n instanceof xt?At(n):new xt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),Ct(r,r.m);else{var i=c.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new xt(null,void 0);r&&Nt(s,r),t&&(s.g=t),i&&Ct(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Rt(r,n,t),Rt(r,"VER",e.ma),On(e,r),r}function Wn(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new pn(new an({ib:!0})):new pn(e.ra)).L=e.H,t}function $n(){}function Hn(){if(P&&!(10<=Number(H)))throw Error("Environmental error: no available transport.")}function Qn(e,t){Ie.call(this),this.g=new An(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!k(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!k(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Jn(this)}function Yn(e){ot.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Xn(){at.call(this),this.status=1}function Jn(e){this.g=e}(i=pn.prototype).da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():it.g(),this.C=this.u?nt(this.u):nt(it),this.g.onreadystatechange=g(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void vn(this,e)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=c.FormData&&e instanceof c.FormData,!(0<=b(yn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{_n(this),0<this.B&&((this.K=function(e){return P&&W()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.qa,this)):this.A=Pe(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){vn(this,e)}},i.qa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,be(this,"complete"),be(this,"abort"),bn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bn(this,!0)),pn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?In(this):this.eb())},i.eb=function(){In(this)},i.aa=function(){try{return 2<En(this)?this.g.status:-1}catch(e){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),fn(t)}},i.Ea=function(){return this.m},i.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=An.prototype).ma=8,i.G=1,i.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ut(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=ne(s),ie(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Pn(this,i,t),Rt(n=At(this.F),"RID",e),Rt(n,"CVER",22),this.D&&Rt(n,"X-HTTP-Session-Id",this.D),On(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Sn(s)))+"&"+t:this.o&&kn(n,this.o,s)),Zt(this.h,i),this.Xa&&Rt(n,"TYPE","init"),this.O?(Rt(n,"$req",t),Rt(n,"SID","null"),i.Z=!0,pt(i,n,null)):pt(i,n,t),this.G=2}}else 3==this.G&&(e?Ln(this,e):0==this.i.length||Yt(this.h)||Ln(this))},i.Ia=function(){if(this.u=null,Vn(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=Je(g(this.cb,this),e)}},i.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ye(10),Cn(this),Vn(this))},i.bb=function(){null!=this.v&&(this.v=null,Cn(this),Fn(this),Ye(19))},i.jb=function(e){e?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))},(i=$n.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Qa=function(){},Hn.prototype.g=function(e,t){return new Qn(e,t)},v(Qn,Ie),Qn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ye(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Kn(e,null,e.V),Rn(e)},Qn.prototype.close=function(){Nn(this.g)},Qn.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ee(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.$a++,e)),3==t.G&&Rn(t)},Qn.prototype.M=function(){this.g.l=null,delete this.j,Nn(this.g),delete this.g,Qn.X.M.call(this)},v(Yn,ot),v(Xn,at),v(Jn,$n),Jn.prototype.xa=function(){be(this.g,"a")},Jn.prototype.wa=function(e){be(this.g,new Yn(e))},Jn.prototype.va=function(e){be(this.g,new Xn(e))},Jn.prototype.ua=function(){be(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,Qn.prototype.send=Qn.prototype.u,Qn.prototype.open=Qn.prototype.m,Qn.prototype.close=Qn.prototype.close,Ze.NO_ERROR=0,Ze.TIMEOUT=8,Ze.HTTP_ERROR=6,et.COMPLETE="complete",rt.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",Ie.prototype.listen=Ie.prototype.N,pn.prototype.listenOnce=pn.prototype.O,pn.prototype.getLastError=pn.prototype.Na,pn.prototype.getLastErrorCode=pn.prototype.Ea,pn.prototype.getStatus=pn.prototype.aa,pn.prototype.getResponseJson=pn.prototype.Ra,pn.prototype.getResponseText=pn.prototype.fa,pn.prototype.send=pn.prototype.da;var Zn=o.createWebChannelTransport=function(){return new Hn},er=o.getStatEventTarget=function(){return We()},tr=o.ErrorCode=Ze,nr=o.EventType=et,rr=o.Event=ze,ir=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},sr=o.FetchXmlHttpFactory=an,or=o.WebChannel=rt,ar=o.XhrIo=pn})),i.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var e=a(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++h<t;)c&&c[h].run();h=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),i.register("bGAxz",(function(t,n){function r(e,t,n,r,i){
//! Устанвливаем начальные значения textContent для кнопки WATCHED в модалке
t.watchedModal.textContent="ADD TO WATCHED",t.watchedModal.classList.contains("modal-button-delete")&&t.watchedModal.classList.remove("modal-button-delete"),t.watchedModal.classList.contains("modal-button-add-watched")||t.watchedModal.classList.add("modal-button-add-watched"),
//! Устанвливаем начальные значения textContent для кнопки QUEUE в модалке
t.queueModal.textContent="ADD TO QUEUE",t.queueModal.classList.contains("modal-button-delete")&&t.queueModal.classList.remove("modal-button-delete"),t.queueModal.classList.contains("modal-button-add-queue")||t.queueModal.classList.add("modal-button-add-queue"),
//! ИЛИ: в зависимости от того, на какой странице находится пользователь:
//! 1.Логика работы кнопок на странице <HOME или Filmoteka> и <Movie search> если фильм уже есть в localStorage
"home-Filmoteka"!==e&&"Movie search"!==e||(
//! Замена "ADD TO WATCHED" на "DELETE FROM WATCHED" если фильм уже есть в localStorage
r.find((e=>e.id===n.id))&&(t.watchedModal.textContent="DELETE FROM WATCHED",t.watchedModal.classList.contains("modal-button-add-watched")&&t.watchedModal.classList.remove("modal-button-add-watched"),t.watchedModal.classList.contains("modal-button-delete")||t.watchedModal.classList.add("modal-button-delete")),
//! Замена "ADD TO QUEUE" на "DELETE FROM QUEUE" если фильм уже есть в localStorage
i.find((e=>e.id===n.id))&&(t.queueModal.textContent="DELETE FROM QUEUE",t.queueModal.classList.contains("modal-button-add-queue")&&t.queueModal.classList.remove("modal-button-add-queue"),t.queueModal.classList.contains("modal-button-delete")||t.queueModal.classList.add("modal-button-delete"))),
//! 2.Замена "ADD TO WATCHED" на "DELETE FROM WATCHED" если пользователь на странице MY LIBRARY==>WATCHED
"watched"===e&&(t.watchedModal.textContent="DELETE FROM WATCHED",t.watchedModal.classList.contains("modal-button-add-watched")&&t.watchedModal.classList.remove("modal-button-add-watched"),t.watchedModal.classList.contains("modal-button-delete")||t.watchedModal.classList.add("modal-button-delete"),
//! Замена "ADD TO QUEUE" на "DELETE FROM QUEUE" если пользователь на странице MY LIBRARY==>WATCHED и фильм уже есть в localStorage-QUEUE
i.find((e=>e.id===n.id))&&(t.queueModal.textContent="DELETE FROM QUEUE",t.queueModal.classList.contains("modal-button-add-queue")&&t.queueModal.classList.remove("modal-button-add-queue"),t.queueModal.classList.contains("modal-button-delete")||t.queueModal.classList.add("modal-button-delete"))),
//! 3.Замена "ADD TO QUEUE" на "DELETE FROM QUEUE" если пользователь на странице MY LIBRARY==>QUEUE
"queue"===e&&(t.queueModal.textContent="DELETE FROM QUEUE",t.queueModal.classList.contains("modal-button-add-queue")&&t.queueModal.classList.remove("modal-button-add-queue"),t.queueModal.classList.contains("modal-button-delete")||t.queueModal.classList.add("modal-button-delete"),
//! Замена "ADD TO WATCHED" на "DELETE FROM WATCHED" если пользователь на странице MY LIBRARY==>QUEUE и фильм уже есть в localStorage-WATCHED
r.find((e=>e.id===n.id))&&(t.watchedModal.textContent="DELETE FROM WATCHED",t.watchedModal.classList.contains("modal-button-add-watched")&&t.watchedModal.classList.remove("modal-button-add-watched"),t.watchedModal.classList.contains("modal-button-delete")||t.watchedModal.classList.add("modal-button-delete")))}e(t.exports,"default",(function(){return r}))}));
//# sourceMappingURL=my-library.2ffd000a.js.map
