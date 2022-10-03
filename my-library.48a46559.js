!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequirea6b3;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequirea6b3=n);var l=n("iU1Pc"),d=n("g2eb2");n("cRUDO");var c=n("gp4J8");
//! Создаем объект всех ссылок refs.*
const i={
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
i.myLibraryBtn.addEventListener("click",E),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
i.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const a=e.target.closest("li");r=Number(a.getAttribute("key")),console.log("idFilms:",r),function(e){const a=[...t(),...o()].find((t=>t.id==e));s=a}
//! ПОКАЗЫВАЕМ Spinner
(r)}function t(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function o(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать) 
d.default.startSpinner(),"watched"===u&&(s=f.find((e=>e.id===r)));"queue"===u&&(s=p.find((e=>e.id===r)));
//! ==> Открываем модалку
window.addEventListener("keydown",w),document.body.classList.add("show-modal"),
//! Прячем Spinner
d.default.removeSpinner(),
//! Рисование интерфейса
a=s,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
i.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:t,poster_path:o,title:a,name:n,vote_average:l,vote_count:d,popularity:c,original_title:i,original_name:r,genres:s,overview:u}=e,m=s.map((e=>e.name)).join(", ");let f=a;a&&(f=a.toUpperCase());let y=n;return n&&n.toUpperCase(),`\n        <img src="https://image.tmdb.org/t/p/w300${o}" alt="${a||n}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${f||y}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${l}</span> / ${d}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${i||r}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(a)),i.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),i.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),i.watchedModal.addEventListener("click",v),i.queueModal.addEventListener("click",g),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,c.default)(u,i,s,f,p);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var a}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
i.closeModalBtn.addEventListener("click",b),i.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&b()})),
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
i.watchedHeader.addEventListener("click",E),i.queueHeader.addEventListener("click",(function(){var e;
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
u="queue",
//! Очищаем контейнер:
L();
//! Рисование интерфейса
h(null!==(e=JSON.parse(localStorage.getItem("queue")))&&void 0!==e?e:[])}
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let r=1,s=null,u="";
//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
var m;
//! Переменные для хранения массива объектов фильмов для станиц WATCHED и QUEUE
let f=null!==(m=JSON.parse(localStorage.getItem("watched")))&&void 0!==m?m:[];var y;let p=null!==(y=JSON.parse(localStorage.getItem("queue")))&&void 0!==y?y:[];
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
function v(){const t=i.watchedModal.textContent;if("ADD TO WATCHED"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(f.find((e=>e.id===s.id)))return e(l).Notify.warning(`Фильм ${s.title||s.name} уже есть в WATCHED`,{timeout:3500}),i.watchedModal.textContent="DELETE FROM WATCHED",i.watchedModal.classList.contains("colorGreen")&&i.watchedModal.classList.remove("colorGreen"),void(i.watchedModal.classList.contains("colorRed")||i.watchedModal.classList.add("colorRed"));
//! Запись фильма в localStorage
f=[...f,s],localStorage.setItem("watched",JSON.stringify(f)),e(l).Notify.success(`Фильм ${s.title||s.name} добавлен в WATCHED`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
i.watchedModal.textContent="DELETE FROM WATCHED",i.watchedModal.classList.contains("colorGreen")&&i.watchedModal.classList.remove("colorGreen"),i.watchedModal.classList.contains("colorRed")||i.watchedModal.classList.add("colorRed")}else"DELETE FROM WATCHED"===t&&(f=f.filter((e=>e.id!==s.id)),localStorage.setItem("watched",JSON.stringify(f)),e(l).Notify.info(`Фильм ${s.title||s.name} удален из WATCHED`,{timeout:3500}),i.watchedModal.textContent="ADD TO WATCHED",i.watchedModal.classList.contains("colorRed")&&i.watchedModal.classList.remove("colorRed"),i.watchedModal.classList.contains("colorGreen")||i.watchedModal.classList.add("colorGreen"),"watched"===u&&(b(),
//! Очищаем контейнер:
L(),h(f)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function g(){const t=i.queueModal.textContent;if("ADD TO QUEUE"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(p.find((e=>e.id===s.id)))return e(l).Notify.warning(`Фильм ${s.title||s.name} уже есть в QUEUE`,{timeout:3500}),i.queueModal.textContent="DELETE FROM QUEUE",i.queueModal.classList.contains("colorGreen")&&i.queueModal.classList.remove("colorGreen"),void(i.queueModal.classList.contains("colorRed")||i.queueModal.classList.add("colorRed"));
//! Запись фильма в localStorage
p=[...p,s],localStorage.setItem("queue",JSON.stringify(p)),e(l).Notify.success(`Фильм ${s.title||s.name} добавлен в QUEUE`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
i.queueModal.textContent="DELETE FROM QUEUE",i.queueModal.classList.contains("colorGreen")&&i.queueModal.classList.remove("colorGreen"),i.queueModal.classList.contains("colorRed")||i.queueModal.classList.add("colorRed")}else"DELETE FROM QUEUE"===t&&(p=p.filter((e=>e.id!==s.id)),localStorage.setItem("queue",JSON.stringify(p)),e(l).Notify.info(`Фильм ${s.title||s.name} удален из QUEUE`,{timeout:3500}),i.queueModal.textContent="ADD TO QUEUE",i.queueModal.classList.contains("colorRed")&&i.queueModal.classList.remove("colorRed"),i.queueModal.classList.contains("colorGreen")||i.queueModal.classList.add("colorGreen"),"queue"===u&&(b(),
//! Очищаем контейнер:
L(),h(p)))}function E(){var e;
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
u="watched",
//! Очищаем контейнер:
L();
//! Рисование интерфейса
h(null!==(e=JSON.parse(localStorage.getItem("watched")))&&void 0!==e?e:[])}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function L(){i.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function b(){window.removeEventListener("keydown",w),document.body.classList.remove("show-modal"),i.InfoMovie.innerHTML=""}function w(e){"Escape"===e.code&&b()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function h(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
i.moviesCards.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,poster_path:t,title:o,name:a,genres:n,first_air_date:l,release_date:d,vote_average:c})=>{const i=n.map((e=>e.name)).join(", "),r=(l||d||"???? - ?? - ??").substr(0,4),s=c.toFixed(1);let u=o;o&&(u=o.toUpperCase());let m=a;if(a){a.toUpperCase()}return`\n                <li class="gallery__item" key=${e}>\n                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${t}" alt="${o||a}" />\n\n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${u||m}</h2>\n                        <p class="gallery__text">${i} &nbsp|&nbsp ${r}&nbsp &nbsp${s}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}E(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:o,modalTeam:a,body:n}=e;function l(e){a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",d)}function d(e){"Escape"===e.key&&l()}t.addEventListener("click",(function(e){window.addEventListener("keydown",d),a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),o.addEventListener("click",l),a.addEventListener("click",(function(e){e.currentTarget===e.target&&l()}))})()}();
//# sourceMappingURL=my-library.48a46559.js.map
