function e(e,t,a,o){Object.defineProperty(e,t,{get:a,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},d=a.parcelRequirea6b3;null==d&&((d=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},a.parcelRequirea6b3=d),d.register("kyEFX",(function(t,a){var o,n;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var d={};o=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)d[t[a]]=e[t[a]]},n=function(e){var t=d[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),d("kyEFX").register(JSON.parse('{"7OqUs":"my-library.251e6a66.js","evOhi":"noImg.cfedc109.jpg","4627Z":"my-library.341932d3.js"}'));var l=d("eWCmQ"),s=d("3oXzi");d("gY4QW");var i,c=d("bGAxz");i=new URL(d("kyEFX").resolve("evOhi"),import.meta.url).toString();
//! Создаем объект всех ссылок refs.*
const r={
//! Получаем ссылку на div-контейнер для разметки карточек изображений:
moviesCards:document.querySelector('ul[data-action="movies-cards"]'),
//! Получаем ссылку на div-контейнер для разметки карточек изображений:
InfoMovie:document.querySelector('div[data-action="modal-markup"]'),
//! Получаем ссылку на кнопку HOME:
homeBtn:document.querySelector('a[data-action="button-home"]'),
//! Получаем ссылку на кнопку Filmoteka:
filmotekaBtn:document.querySelector('a[data-action="button-filmoteka"]'),
//! Получаем ссылку на кнопку MY LIBRARY:
myLibraryBtn:document.querySelector('a[data-action="button-mylibrary"]'),
//! Получаем ссылку на <section class="section-hero"> ==> на poster_path:
movieDetails:document.querySelector('section[data-action="section-hero"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),
//! Получаем ссылку на строку предупреждения об отсутствии фильмов:
resultNotSuccessful:document.querySelector('[data-action="search-alert"]'),
//! Получаем ссылку на блок кнопок WATCHED и QUEUE в header:
watchedQueueHeader:document.querySelector('[data-action="library-btn"]'),
//! Получаем ссылку на кнопоку WATCHED в header:
watchedHeader:document.querySelector('[data-action="library-watched"]'),
//! Получаем ссылку на кнопоку QUEUE в header:
queueHeader:document.querySelector('[data-action="library-queue"]')};
//! Создаем слушателя событий на кнопке MY LIBRARY:
r.myLibraryBtn.addEventListener("click",v),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
r.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const t=e.target.closest("li");u=Number(t.getAttribute("key")),function(e){const t=[...a(),...o()].find((t=>t.id==e));m=t}
//! ПОКАЗЫВАЕМ Spinner
(u)}function a(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function o(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать)
s.default.startSpinner(),"watched"===b&&(m=f.find((e=>e.id===u)));"queue"===b&&(m=p.find((e=>e.id===u)));
//! ==> Открываем модалку
window.addEventListener("keydown",w),document.body.classList.add("show-modal"),
//! Прячем Spinner
s.default.removeSpinner(),
//! Рисование интерфейса
n=m,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
r.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:a,poster_path:o,title:n,name:d,vote_average:l,vote_count:s,popularity:c,original_title:r,original_name:u,genres:m,overview:b}=e,f=m.map((e=>e.name)).join(", ");let p=n;n&&(p=n.toUpperCase());let g=d;return d&&d.toUpperCase(),`\n  ${o?`<img class="modal-img" src="https://image.tmdb.org/t/p/w300${o}" alt="${n||d}"  />`:`<img class="modal-img" src=${t(i)} alt="${n}" />`}\n                \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${p||g}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${l}</span> / ${s}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${r||u}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${f}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${b}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-add-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-add-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(n)),r.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),r.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),r.watchedModal.addEventListener("click",g),r.queueModal.addEventListener("click",y),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,c.default)(b,r,m,f,p);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var n}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
r.closeModalBtn.addEventListener("click",h),r.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&h()})),
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
r.watchedHeader.addEventListener("click",v),r.queueHeader.addEventListener("click",(function(){
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
b="queue",
//! Очищаем контейнер:
E();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("queue"))??[];
//! Рисование интерфейса ;
r.watchedHeader.classList.remove("current-page"),r.queueHeader.classList.add("current-page"),L(e)}
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let u=1,m=null,b="",f=JSON.parse(localStorage.getItem("watched"))??[],p=JSON.parse(localStorage.getItem("queue"))??[];
//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
function g(){const e=r.watchedModal.textContent;if("ADD TO WATCHED"===e){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(f.find((e=>e.id===m.id)))return t(l).Notify.warning(`Фильм ${m.title||m.name} уже есть в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),r.watchedModal.textContent="DELETE FROM WATCHED",r.watchedModal.classList.contains("modal-button-add-watched")&&r.watchedModal.classList.remove("modal-button-add-watched"),void(r.watchedModal.classList.contains("modal-button-delete")||r.watchedModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
f=[...f,m],localStorage.setItem("watched",JSON.stringify(f)),t(l).Notify.success(`Фильм ${m.title||m.name} добавлен в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
r.watchedModal.textContent="DELETE FROM WATCHED",r.watchedModal.classList.contains("modal-button-add-watched")&&r.watchedModal.classList.remove("modal-button-add-watched"),r.watchedModal.classList.contains("modal-button-delete")||r.watchedModal.classList.add("modal-button-delete")}else"DELETE FROM WATCHED"===e&&(f=f.filter((e=>e.id!==m.id)),localStorage.setItem("watched",JSON.stringify(f)),t(l).Notify.info(`Фильм ${m.title||m.name} удален из WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),r.watchedModal.textContent="ADD TO WATCHED",r.watchedModal.classList.contains("modal-button-delete")&&r.watchedModal.classList.remove("modal-button-delete"),r.watchedModal.classList.contains("modal-button-add-watched")||r.watchedModal.classList.add("modal-button-add-watched"),"watched"===b&&(h(),
//! Очищаем контейнер:
E(),L(f)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function y(){const e=r.queueModal.textContent;if("ADD TO QUEUE"===e){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(p.find((e=>e.id===m.id)))return t(l).Notify.warning(`Фильм ${m.title||m.name} уже есть в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),r.queueModal.textContent="DELETE FROM QUEUE",r.queueModal.classList.contains("modal-button-add-queue")&&r.queueModal.classList.remove("modal-button-add-queue"),void(r.queueModal.classList.contains("modal-button-delete")||r.queueModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
p=[...p,m],localStorage.setItem("queue",JSON.stringify(p)),t(l).Notify.success(`Фильм ${m.title||m.name} добавлен в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
r.queueModal.textContent="DELETE FROM QUEUE",r.queueModal.classList.contains("modal-button-add-queue")&&r.queueModal.classList.remove("modal-button-add-queue"),r.queueModal.classList.contains("modal-button-delete")||r.queueModal.classList.add("modal-button-delete")}else"DELETE FROM QUEUE"===e&&(p=p.filter((e=>e.id!==m.id)),localStorage.setItem("queue",JSON.stringify(p)),t(l).Notify.info(`Фильм ${m.title||m.name} удален из QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),r.queueModal.textContent="ADD TO QUEUE",r.queueModal.classList.contains("modal-button-delete")&&r.queueModal.classList.remove("modal-button-delete"),r.queueModal.classList.contains("modal-button-add-queue")||r.queueModal.classList.add("modal-button-add-queue"),"queue"===b&&(h(),
//! Очищаем контейнер:
E(),L(p)))}function v(){b="watched",
//! Очищаем контейнер:
E();
//! Рисование интерфейса
L(JSON.parse(localStorage.getItem("watched"))??[]),r.watchedHeader.classList.add("current-page"),r.queueHeader.classList.remove("current-page")}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function E(){r.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function h(){window.removeEventListener("keydown",w),document.body.classList.remove("show-modal"),r.InfoMovie.innerHTML=""}function w(e){"Escape"===e.code&&h()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function L(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
r.moviesCards.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,poster_path:a,title:o,name:n,genres:d,first_air_date:l,release_date:s,vote_average:c})=>{const r=d.map((e=>e.name)).join(", "),u=(l||s||"???? - ?? - ??").substr(0,4),m=c.toFixed(1);let b=o;o&&(b=o.toUpperCase());let f=n;if(n){n.toUpperCase()}return`\n                <li class="gallery__item" key=${e}>\n                ${a?`<img class="gallery__img" src="https://image.tmdb.org/t/p/w780${a}" alt="${o||n}"  />`:`<img class="gallery__img" src=${t(i)} alt="${o}" />`}\n                    \n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${b||f}</h2>\n                        <p class="gallery__text">${r} &nbsp|&nbsp ${u}&nbsp &nbsp${m}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
v(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:a,modalTeam:o,body:n}=e;function d(e){o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&d()}t.addEventListener("click",(function(e){window.addEventListener("keydown",l),o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),a.addEventListener("click",d),o.addEventListener("click",(function(e){e.currentTarget===e.target&&d()}))})();
//# sourceMappingURL=my-library.251e6a66.js.map
