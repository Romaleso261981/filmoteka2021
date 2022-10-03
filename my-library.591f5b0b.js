!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},n=t.parcelRequirea6b3;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},t.parcelRequirea6b3=n);var d=n("iU1Pc"),l=n("g2eb2");n("cRUDO");var i=n("gp4J8");
//! Создаем объект всех ссылок refs.*
const c={
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
c.myLibraryBtn.addEventListener("click",v),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
c.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const o=e.target.closest("li");s=Number(o.getAttribute("key")),console.log("idFilms:",s),function(e){const o=[...t(),...a()].find((t=>t.id==e));r=o}
//! ПОКАЗЫВАЕМ Spinner
(s)}function t(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function a(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать) 
l.default.startSpinner(),"watched"===u&&(r=b.find((e=>e.id===s)));"queue"===u&&(r=f.find((e=>e.id===s)));
//! ==> Открываем модалку
window.addEventListener("keydown",h),document.body.classList.add("show-modal"),
//! Прячем Spinner
l.default.removeSpinner(),
//! Рисование интерфейса
o=r,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
c.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:t,poster_path:a,title:o,name:n,vote_average:d,vote_count:l,popularity:i,original_title:c,original_name:s,genres:r,overview:u}=e,m=r.map((e=>e.name)).join(", ");let b=o;o&&(b=o.toUpperCase());let p=n;return n&&n.toUpperCase(),`\n        <img class="modal-img" src="https://image.tmdb.org/t/p/w300${a}" alt="${o||n}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${b||p}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${d}</span> / ${l}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${i}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${c||s}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-add-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-add-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(o)),c.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),c.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),c.watchedModal.addEventListener("click",y),c.queueModal.addEventListener("click",g),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,i.default)(u,c,r,b,f);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var o}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
c.closeModalBtn.addEventListener("click",E),c.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&E()})),
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
c.watchedHeader.addEventListener("click",v),c.queueHeader.addEventListener("click",(function(){var e;
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
u="queue",
//! Очищаем контейнер:
w();
//! Рисование интерфейса
L(null!==(e=JSON.parse(localStorage.getItem("queue")))&&void 0!==e?e:[])}
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let s=1,r=null,u="";
//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
var m;
//! Переменные для хранения массива объектов фильмов для станиц WATCHED и QUEUE
let b=null!==(m=JSON.parse(localStorage.getItem("watched")))&&void 0!==m?m:[];var p;let f=null!==(p=JSON.parse(localStorage.getItem("queue")))&&void 0!==p?p:[];
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
function y(){const t=c.watchedModal.textContent;if("ADD TO WATCHED"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(b.find((e=>e.id===r.id)))return e(d).Notify.warning(`Фильм ${r.title||r.name} уже есть в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),c.watchedModal.textContent="DELETE FROM WATCHED",c.watchedModal.classList.contains("modal-button-add-watched")&&c.watchedModal.classList.remove("modal-button-add-watched"),void(c.watchedModal.classList.contains("modal-button-delete")||c.watchedModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
b=[...b,r],localStorage.setItem("watched",JSON.stringify(b)),e(d).Notify.success(`Фильм ${r.title||r.name} добавлен в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
c.watchedModal.textContent="DELETE FROM WATCHED",c.watchedModal.classList.contains("modal-button-add-watched")&&c.watchedModal.classList.remove("modal-button-add-watched"),c.watchedModal.classList.contains("modal-button-delete")||c.watchedModal.classList.add("modal-button-delete")}else"DELETE FROM WATCHED"===t&&(b=b.filter((e=>e.id!==r.id)),localStorage.setItem("watched",JSON.stringify(b)),e(d).Notify.info(`Фильм ${r.title||r.name} удален из WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),c.watchedModal.textContent="ADD TO WATCHED",c.watchedModal.classList.contains("modal-button-delete")&&c.watchedModal.classList.remove("modal-button-delete"),c.watchedModal.classList.contains("modal-button-add-watched")||c.watchedModal.classList.add("modal-button-add-watched"),"watched"===u&&(E(),
//! Очищаем контейнер:
w(),L(b)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function g(){const t=c.queueModal.textContent;if("ADD TO QUEUE"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(f.find((e=>e.id===r.id)))return e(d).Notify.warning(`Фильм ${r.title||r.name} уже есть в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),c.queueModal.textContent="DELETE FROM QUEUE",c.queueModal.classList.contains("modal-button-add-queue")&&c.queueModal.classList.remove("modal-button-add-queue"),void(c.queueModal.classList.contains("modal-button-delete")||c.queueModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
f=[...f,r],localStorage.setItem("queue",JSON.stringify(f)),e(d).Notify.success(`Фильм ${r.title||r.name} добавлен в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
c.queueModal.textContent="DELETE FROM QUEUE",c.queueModal.classList.contains("modal-button-add-queue")&&c.queueModal.classList.remove("modal-button-add-queue"),c.queueModal.classList.contains("modal-button-delete")||c.queueModal.classList.add("modal-button-delete")}else"DELETE FROM QUEUE"===t&&(f=f.filter((e=>e.id!==r.id)),localStorage.setItem("queue",JSON.stringify(f)),e(d).Notify.info(`Фильм ${r.title||r.name} удален из QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),c.queueModal.textContent="ADD TO QUEUE",c.queueModal.classList.contains("modal-button-delete")&&c.queueModal.classList.remove("modal-button-delete"),c.queueModal.classList.contains("modal-button-add-queue")||c.queueModal.classList.add("modal-button-add-queue"),"queue"===u&&(E(),
//! Очищаем контейнер:
w(),L(f)))}function v(){var e;
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
u="watched",
//! Очищаем контейнер:
w();
//! Рисование интерфейса
L(null!==(e=JSON.parse(localStorage.getItem("watched")))&&void 0!==e?e:[])}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function w(){c.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function E(){window.removeEventListener("keydown",h),document.body.classList.remove("show-modal"),c.InfoMovie.innerHTML=""}function h(e){"Escape"===e.code&&E()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function L(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
c.moviesCards.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,poster_path:t,title:a,name:o,genres:n,first_air_date:d,release_date:l,vote_average:i})=>{const c=n.map((e=>e.name)).join(", "),s=(d||l||"???? - ?? - ??").substr(0,4),r=i.toFixed(1);let u=a;a&&(u=a.toUpperCase());let m=o;if(o){o.toUpperCase()}return`\n                <li class="gallery__item" key=${e}>\n                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${t}" alt="${a||o}" />\n\n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${u||m}</h2>\n                        <p class="gallery__text">${c} &nbsp|&nbsp ${s}&nbsp &nbsp${r}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}v(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:a,modalTeam:o,body:n}=e;function d(e){o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&d()}t.addEventListener("click",(function(e){window.addEventListener("keydown",l),o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),a.addEventListener("click",d),o.addEventListener("click",(function(e){e.currentTarget===e.target&&d()}))})()}();
//# sourceMappingURL=my-library.591f5b0b.js.map
