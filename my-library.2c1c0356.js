function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},n=t.parcelRequirea6b3;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){o[e]=t},t.parcelRequirea6b3=n);var d=n("eWCmQ"),l=n("3oXzi");n("gY4QW");var s=n("bGAxz");
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
c.myLibraryBtn.addEventListener("click",y),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
c.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const o=e.target.closest("li");i=Number(o.getAttribute("key")),console.log("idFilms:",i),function(e){const o=[...t(),...a()].find((t=>t.id==e));r=o}
//! ПОКАЗЫВАЕМ Spinner
(i)}function t(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function a(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать)
l.default.startSpinner(),"watched"===u&&(r=m.find((e=>e.id===i)));"queue"===u&&(r=b.find((e=>e.id===i)));
//! ==> Открываем модалку
window.addEventListener("keydown",h),document.body.classList.add("show-modal"),
//! Прячем Spinner
l.default.removeSpinner(),
//! Рисование интерфейса
o=r,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
c.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:t,poster_path:a,title:o,name:n,vote_average:d,vote_count:l,popularity:s,original_title:c,original_name:i,genres:r,overview:u}=e,m=r.map((e=>e.name)).join(", ");let b=o;o&&(b=o.toUpperCase());let p=n;return n&&n.toUpperCase(),`\n        <img class="modal-img" src="https://image.tmdb.org/t/p/w300${a}" alt="${o||n}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${b||p}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${d}</span> / ${l}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${s}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${c||i}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-add-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-add-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(o)),c.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),c.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),c.watchedModal.addEventListener("click",p),c.queueModal.addEventListener("click",f),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,s.default)(u,c,r,m,b);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var o}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
c.closeModalBtn.addEventListener("click",w),c.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&w()})),
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
c.watchedHeader.addEventListener("click",y),c.queueHeader.addEventListener("click",(function(){
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
u="queue",
//! Очищаем контейнер:
g();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("queue"))??[];
//! Рисование интерфейса ;
c.watchedHeader.classList.remove("current-page"),c.queueHeader.classList.add("current-page"),E(e)}
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let i=1,r=null,u="",m=JSON.parse(localStorage.getItem("watched"))??[],b=JSON.parse(localStorage.getItem("queue"))??[];
//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
function p(){const t=c.watchedModal.textContent;if("ADD TO WATCHED"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(m.find((e=>e.id===r.id)))return e(d).Notify.warning(`Фильм ${r.title||r.name} уже есть в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),c.watchedModal.textContent="DELETE FROM WATCHED",c.watchedModal.classList.contains("modal-button-add-watched")&&c.watchedModal.classList.remove("modal-button-add-watched"),void(c.watchedModal.classList.contains("modal-button-delete")||c.watchedModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
m=[...m,r],localStorage.setItem("watched",JSON.stringify(m)),e(d).Notify.success(`Фильм ${r.title||r.name} добавлен в WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
c.watchedModal.textContent="DELETE FROM WATCHED",c.watchedModal.classList.contains("modal-button-add-watched")&&c.watchedModal.classList.remove("modal-button-add-watched"),c.watchedModal.classList.contains("modal-button-delete")||c.watchedModal.classList.add("modal-button-delete")}else"DELETE FROM WATCHED"===t&&(m=m.filter((e=>e.id!==r.id)),localStorage.setItem("watched",JSON.stringify(m)),e(d).Notify.info(`Фильм ${r.title||r.name} удален из WATCHED`,{position:"center-top",clickToClose:!0,timeout:2500}),c.watchedModal.textContent="ADD TO WATCHED",c.watchedModal.classList.contains("modal-button-delete")&&c.watchedModal.classList.remove("modal-button-delete"),c.watchedModal.classList.contains("modal-button-add-watched")||c.watchedModal.classList.add("modal-button-add-watched"),"watched"===u&&(w(),
//! Очищаем контейнер:
g(),E(m)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function f(){const t=c.queueModal.textContent;if("ADD TO QUEUE"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(b.find((e=>e.id===r.id)))return e(d).Notify.warning(`Фильм ${r.title||r.name} уже есть в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),c.queueModal.textContent="DELETE FROM QUEUE",c.queueModal.classList.contains("modal-button-add-queue")&&c.queueModal.classList.remove("modal-button-add-queue"),void(c.queueModal.classList.contains("modal-button-delete")||c.queueModal.classList.add("modal-button-delete"));
//! Запись фильма в localStorage
b=[...b,r],localStorage.setItem("queue",JSON.stringify(b)),e(d).Notify.success(`Фильм ${r.title||r.name} добавлен в QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
c.queueModal.textContent="DELETE FROM QUEUE",c.queueModal.classList.contains("modal-button-add-queue")&&c.queueModal.classList.remove("modal-button-add-queue"),c.queueModal.classList.contains("modal-button-delete")||c.queueModal.classList.add("modal-button-delete")}else"DELETE FROM QUEUE"===t&&(b=b.filter((e=>e.id!==r.id)),localStorage.setItem("queue",JSON.stringify(b)),e(d).Notify.info(`Фильм ${r.title||r.name} удален из QUEUE`,{position:"center-top",clickToClose:!0,timeout:2500}),c.queueModal.textContent="ADD TO QUEUE",c.queueModal.classList.contains("modal-button-delete")&&c.queueModal.classList.remove("modal-button-delete"),c.queueModal.classList.contains("modal-button-add-queue")||c.queueModal.classList.add("modal-button-add-queue"),"queue"===u&&(w(),
//! Очищаем контейнер:
g(),E(b)))}function y(){u="watched",
//! Очищаем контейнер:
g();
//! Рисование интерфейса
E(JSON.parse(localStorage.getItem("watched"))??[]),c.watchedHeader.classList.add("current-page"),c.queueHeader.classList.remove("current-page")}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function g(){c.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function w(){window.removeEventListener("keydown",h),document.body.classList.remove("show-modal"),c.InfoMovie.innerHTML=""}function h(e){"Escape"===e.code&&w()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function E(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
c.moviesCards.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,poster_path:t,title:a,name:o,genres:n,first_air_date:d,release_date:l,vote_average:s})=>{const c=n.map((e=>e.name)).join(", "),i=(d||l||"???? - ?? - ??").substr(0,4),r=s.toFixed(1);let u=a;a&&(u=a.toUpperCase());let m=o;if(o){o.toUpperCase()}return`\n                <li class="gallery__item" key=${e}>\n                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${t}" alt="${a||o}" />\n\n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${u||m}</h2>\n                        <p class="gallery__text">${c} &nbsp|&nbsp ${i}&nbsp &nbsp${r}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
y(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:a,modalTeam:o,body:n}=e;function d(e){o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&d()}t.addEventListener("click",(function(e){window.addEventListener("keydown",l),o.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),a.addEventListener("click",d),o.addEventListener("click",(function(e){e.currentTarget===e.target&&d()}))})();
//# sourceMappingURL=my-library.2c1c0356.js.map
