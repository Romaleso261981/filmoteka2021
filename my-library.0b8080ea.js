var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequirea6b3;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequirea6b3=o);var d=o("3oXzi");o("gY4QW");var n=o("bGAxz");
//! Создаем объект всех ссылок refs.*
const l={
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
l.myLibraryBtn.addEventListener("click",p),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
l.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const o=e.target.closest("li");s=Number(o.getAttribute("key")),console.log("idFilms:",s),function(e){const o=[...t(),...a()].find((t=>t.id==e));c=o}
//! ПОКАЗЫВАЕМ Spinner
(s)}function t(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function a(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать) 
d.default.startSpinner(),"watched"===i&&(c=r.find((e=>e.id===s)));"queue"===i&&(c=u.find((e=>e.id===s)));
//! ==> Открываем модалку
window.addEventListener("keydown",g),document.body.classList.add("show-modal"),
//! Прячем Spinner
d.default.removeSpinner(),
//! Рисование интерфейса
o=c,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
l.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:t,poster_path:a,title:o,name:d,vote_average:n,vote_count:l,popularity:s,original_title:c,original_name:i,genres:r,overview:u}=e,m=r.map((e=>e.name)).join(", ");let b=o;o&&(b=o.toUpperCase());let p=d;return d&&d.toUpperCase(),`\n        <img src="https://image.tmdb.org/t/p/w300${a}" alt="${o||d}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${b||p}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${n}</span> / ${l}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${s}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${c||i}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-add-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-add-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(o)),l.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),l.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),l.watchedModal.addEventListener("click",m),l.queueModal.addEventListener("click",b),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,n.default)(i,l,c,r,u);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var o}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
l.closeModalBtn.addEventListener("click",y),l.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&y()})),
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
l.watchedHeader.addEventListener("click",p),l.queueHeader.addEventListener("click",(function(){
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
i="queue",
//! Очищаем контейнер:
f();
//! Рисование интерфейса
h(JSON.parse(localStorage.getItem("queue"))??[])}
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let s=1,c=null,i="",r=JSON.parse(localStorage.getItem("watched"))??[],u=JSON.parse(localStorage.getItem("queue"))??[];
//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
function m(){const e=l.watchedModal.textContent;if("ADD TO WATCHED"===e){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(r.find((e=>e.id===c.id)))return l.watchedModal.textContent="DELETE FROM WATCHED",l.watchedModal.classList.contains("modal-button-add-watched")&&l.watchedModal.classList.remove("modal-button-add-watched"),void(l.watchedModal.classList.contains("modal-button-delete")||l.watchedModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
r=[...r,c],localStorage.setItem("watched",JSON.stringify(r)),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
l.watchedModal.textContent="DELETE FROM WATCHED",l.watchedModal.classList.contains("modal-button-add-watched")&&l.watchedModal.classList.remove("modal-button-add-watched"),l.watchedModal.classList.contains("modal-button-delete")||l.watchedModal.classList.add("modal-button-delete")}else"DELETE FROM WATCHED"===e&&(r=r.filter((e=>e.id!==c.id)),localStorage.setItem("watched",JSON.stringify(r)),l.watchedModal.textContent="ADD TO WATCHED",l.watchedModal.classList.contains("modal-button-delete")&&l.watchedModal.classList.remove("modal-button-delete"),l.watchedModal.classList.contains("modal-button-add-watched")||l.watchedModal.classList.add("modal-button-add-watched"),"watched"===i&&(y(),
//! Очищаем контейнер:
f(),h(r)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function b(){const e=l.queueModal.textContent;if("ADD TO QUEUE"===e){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(u.find((e=>e.id===c.id)))return l.queueModal.textContent="DELETE FROM QUEUE",l.queueModal.classList.contains("modal-button-add-queue")&&l.queueModal.classList.remove("modal-button-add-queue"),void(l.queueModal.classList.contains("modal-button-delete")||l.queueModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
u=[...u,c],localStorage.setItem("queue",JSON.stringify(u)),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
l.queueModal.textContent="DELETE FROM QUEUE",l.queueModal.classList.contains("modal-button-add-queue")&&l.queueModal.classList.remove("modal-button-add-queue"),l.queueModal.classList.contains("modal-button-delete")||l.queueModal.classList.add("modal-button-delete")}else"DELETE FROM QUEUE"===e&&(u=u.filter((e=>e.id!==c.id)),localStorage.setItem("queue",JSON.stringify(u)),l.queueModal.textContent="ADD TO QUEUE",l.queueModal.classList.contains("modal-button-delete")&&l.queueModal.classList.remove("modal-button-delete"),l.queueModal.classList.contains("modal-button-add-queue")||l.queueModal.classList.add("modal-button-add-queue"),"queue"===i&&(y(),
//! Очищаем контейнер:
f(),h(u)))}function p(){i="watched",
//! Очищаем контейнер:
f();
//! Рисование интерфейса
h(JSON.parse(localStorage.getItem("watched"))??[])}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function f(){l.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function y(){window.removeEventListener("keydown",g),document.body.classList.remove("show-modal"),l.InfoMovie.innerHTML=""}function g(e){"Escape"===e.code&&y()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function h(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
l.moviesCards.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,poster_path:t,title:a,name:o,genres:d,first_air_date:n,release_date:l,vote_average:s})=>{const c=d.map((e=>e.name)).join(", "),i=(n||l||"???? - ?? - ??").substr(0,4),r=s.toFixed(1);let u=a;a&&(u=a.toUpperCase());let m=o;if(o){o.toUpperCase()}return`\n                <li class="gallery__item" key=${e}>\n                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${t}" alt="${a||o}" />\n\n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${u||m}</h2>\n                        <p class="gallery__text">${c} &nbsp|&nbsp ${i}&nbsp &nbsp${r}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
p(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:a,modalTeam:o,body:d}=e;function n(e){o.classList.toggle("is-hidden"),d.classList.toggle("no-scroll"),window.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&n()}t.addEventListener("click",(function(e){window.addEventListener("keydown",l),o.classList.toggle("is-hidden"),d.classList.toggle("no-scroll")})),a.addEventListener("click",n),o.addEventListener("click",(function(e){e.currentTarget===e.target&&n()}))})();
//# sourceMappingURL=my-library.0b8080ea.js.map
