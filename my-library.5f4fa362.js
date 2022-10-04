!function(){function e(e,t,a,o){Object.defineProperty(e,t,{get:a,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},d=a.parcelRequirea6b3;null==d&&((d=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},a.parcelRequirea6b3=d),d.register("iE7OH",(function(t,a){var o,n;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var d={};o=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)d[t[a]]=e[t[a]]},n=function(e){var t=d[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),d.register("aNJCr",(function(t,a){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var n={};function d(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=n[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return d(e[2])}return"/"}(),n[e]=t),t}})),d("iE7OH").register(JSON.parse('{"1B9dp":"my-library.5f4fa362.js","3JQXE":"noImg.cfedc109.jpg","6IIJ4":"my-library.d84ec7db.js"}'));var l=d("iU1Pc"),c=d("g2eb2");d("cRUDO");var i,r=d("gp4J8");i=d("aNJCr").getBundleURL("1B9dp")+d("iE7OH").resolve("3JQXE");
//! Создаем объект всех ссылок refs.*
const s={
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
s.myLibraryBtn.addEventListener("click",E),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
s.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const t=e.target.closest("li");u=Number(t.getAttribute("key")),function(e){const t=[...a(),...o()].find((t=>t.id==e));m=t}
//! ПОКАЗЫВАЕМ Spinner
(u)}function a(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function o(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать)
c.default.startSpinner(),"watched"===f&&(m=b.find((e=>e.id===u)));"queue"===f&&(m=v.find((e=>e.id===u)));
//! ==> Открываем модалку
window.addEventListener("keydown",q),document.body.classList.add("show-modal"),
//! Прячем Spinner
c.default.removeSpinner(),
//! Рисование интерфейса
n=m,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
s.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:a,poster_path:o,title:n,name:d,vote_average:l,vote_count:c,popularity:r,original_title:s,original_name:u,genres:m,overview:f}=e,p=m.map((e=>e.name)).join(", ");let b=n;n&&(b=n.toUpperCase());let g=d;return d&&d.toUpperCase(),`\n  ${o?`<img class="modal-img" src="https://image.tmdb.org/t/p/w300${o}" alt="${n||d}"  />`:`<img class="modal-img" src=${t(i)} alt="${n}" />`}\n                \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${b||g}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${l}</span> / ${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${r}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${s||u}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${p}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${f}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-add-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-add-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(n)),s.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),s.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),s.watchedModal.addEventListener("click",y),s.queueModal.addEventListener("click",h),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,r.default)(f,s,m,b,v);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var n}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
s.closeModalBtn.addEventListener("click",L),s.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&L()})),
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
s.watchedHeader.addEventListener("click",E),s.queueHeader.addEventListener("click",(function(){var e;
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
f="queue",
//! Очищаем контейнер:
w();const t=null!==(e=JSON.parse(localStorage.getItem("queue")))&&void 0!==e?e:[];
//! Рисование интерфейса ;
s.watchedHeader.classList.remove("current-page"),s.queueHeader.classList.add("current-page"),M(t)}
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let u=1,m=null,f="";
//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
var p;
//! Переменные для хранения массива объектов фильмов для станиц WATCHED и QUEUE
let b=null!==(p=JSON.parse(localStorage.getItem("watched")))&&void 0!==p?p:[];var g;let v=null!==(g=JSON.parse(localStorage.getItem("queue")))&&void 0!==g?g:[];
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
function y(){const e=s.watchedModal.textContent;if("ADD TO WATCHED"===e){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(b.find((e=>e.id===m.id)))return t(l).Notify.warning(`Фильм ${m.title||m.name} уже есть в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),s.watchedModal.textContent="DELETE FROM WATCHED",s.watchedModal.classList.contains("modal-button-add-watched")&&s.watchedModal.classList.remove("modal-button-add-watched"),void(s.watchedModal.classList.contains("modal-button-delete")||s.watchedModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
b=[...b,m],localStorage.setItem("watched",JSON.stringify(b)),t(l).Notify.success(`Фильм ${m.title||m.name} добавлен в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
s.watchedModal.textContent="DELETE FROM WATCHED",s.watchedModal.classList.contains("modal-button-add-watched")&&s.watchedModal.classList.remove("modal-button-add-watched"),s.watchedModal.classList.contains("modal-button-delete")||s.watchedModal.classList.add("modal-button-delete")}else"DELETE FROM WATCHED"===e&&(b=b.filter((e=>e.id!==m.id)),localStorage.setItem("watched",JSON.stringify(b)),t(l).Notify.info(`Фильм ${m.title||m.name} удален из WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),s.watchedModal.textContent="ADD TO WATCHED",s.watchedModal.classList.contains("modal-button-delete")&&s.watchedModal.classList.remove("modal-button-delete"),s.watchedModal.classList.contains("modal-button-add-watched")||s.watchedModal.classList.add("modal-button-add-watched"),"watched"===f&&(L(),
//! Очищаем контейнер:
w(),M(b)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function h(){const e=s.queueModal.textContent;if("ADD TO QUEUE"===e){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(v.find((e=>e.id===m.id)))return t(l).Notify.warning(`Фильм ${m.title||m.name} уже есть в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),s.queueModal.textContent="DELETE FROM QUEUE",s.queueModal.classList.contains("modal-button-add-queue")&&s.queueModal.classList.remove("modal-button-add-queue"),void(s.queueModal.classList.contains("modal-button-delete")||s.queueModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
v=[...v,m],localStorage.setItem("queue",JSON.stringify(v)),t(l).Notify.success(`Фильм ${m.title||m.name} добавлен в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
s.queueModal.textContent="DELETE FROM QUEUE",s.queueModal.classList.contains("modal-button-add-queue")&&s.queueModal.classList.remove("modal-button-add-queue"),s.queueModal.classList.contains("modal-button-delete")||s.queueModal.classList.add("modal-button-delete")}else"DELETE FROM QUEUE"===e&&(v=v.filter((e=>e.id!==m.id)),localStorage.setItem("queue",JSON.stringify(v)),t(l).Notify.info(`Фильм ${m.title||m.name} удален из QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),s.queueModal.textContent="ADD TO QUEUE",s.queueModal.classList.contains("modal-button-delete")&&s.queueModal.classList.remove("modal-button-delete"),s.queueModal.classList.contains("modal-button-add-queue")||s.queueModal.classList.add("modal-button-add-queue"),"queue"===f&&(L(),
//! Очищаем контейнер:
w(),M(v)))}function E(){var e;
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
f="watched",
//! Очищаем контейнер:
w();
//! Рисование интерфейса
M(null!==(e=JSON.parse(localStorage.getItem("watched")))&&void 0!==e?e:[]),s.watchedHeader.classList.add("current-page"),s.queueHeader.classList.remove("current-page")}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function w(){s.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function L(){window.removeEventListener("keydown",q),document.body.classList.remove("show-modal"),s.InfoMovie.innerHTML=""}function q(e){"Escape"===e.code&&L()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function M(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
s.moviesCards.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,poster_path:a,title:o,name:n,genres:d,first_air_date:l,release_date:c,vote_average:r})=>{const s=d.map((e=>e.name)).join(", "),u=(l||c||"???? - ?? - ??").substr(0,4),m=r.toFixed(1);let f=o;o&&(f=o.toUpperCase());let p=n;if(n){n.toUpperCase()}return`\n                <li class="gallery__item" key=${e}>\n                ${a?`<img class="gallery__img" src="https://image.tmdb.org/t/p/w780${a}" alt="${o||n}"  />`:`<img class="gallery__img" src=${t(i)} alt="${o}" />`}\n                    \n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${f||p}</h2>\n                        <p class="gallery__text">${s} &nbsp|&nbsp ${u}&nbsp &nbsp${m}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}E(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:a,modalTeam:o,body:n}=e;function d(e){o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&d()}t.addEventListener("click",(function(e){window.addEventListener("keydown",l),o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),a.addEventListener("click",d),o.addEventListener("click",(function(e){e.currentTarget===e.target&&d()}))})()}();
//# sourceMappingURL=my-library.5f4fa362.js.map
