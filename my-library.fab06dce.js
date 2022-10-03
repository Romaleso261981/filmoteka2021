function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=t.parcelRequirea6b3;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequirea6b3=n);var l=n("eWCmQ"),d=n("3oXzi");n("gY4QW");var c=n("bGAxz");
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
s.myLibraryBtn.addEventListener("click",g),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
s.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const a=e.target.closest("li");r=Number(a.getAttribute("key")),console.log("idFilms:",r),function(e){const a=[...t(),...o()].find((t=>t.id==e));i=a}
//! ПОКАЗЫВАЕМ Spinner
(r)}function t(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function o(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать) 
d.default.startSpinner(),"watched"===u&&(i=m.find((e=>e.id===r)));"queue"===u&&(i=f.find((e=>e.id===r)));
//! ==> Открываем модалку
window.addEventListener("keydown",L),document.body.classList.add("show-modal"),
//! Прячем Spinner
d.default.removeSpinner(),
//! Рисование интерфейса
a=i,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
s.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:t,poster_path:o,title:a,name:n,vote_average:l,vote_count:d,popularity:c,original_title:s,original_name:r,genres:i,overview:u}=e,m=i.map((e=>e.name)).join(", ");let f=a;a&&(f=a.toUpperCase());let y=n;return n&&n.toUpperCase(),`\n        <img src="https://image.tmdb.org/t/p/w300${o}" alt="${a||n}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${f||y}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${l}</span> / ${d}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${s||r}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(a)),s.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),s.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),s.watchedModal.addEventListener("click",y),s.queueModal.addEventListener("click",p),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,c.default)(u,s,i,m,f);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var a}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
s.closeModalBtn.addEventListener("click",v),s.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&v()})),
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
s.watchedHeader.addEventListener("click",g),s.queueHeader.addEventListener("click",(function(){
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
u="queue",
//! Очищаем контейнер:
E();
//! Рисование интерфейса
b(JSON.parse(localStorage.getItem("queue"))??[])}
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let r=1,i=null,u="",m=JSON.parse(localStorage.getItem("watched"))??[],f=JSON.parse(localStorage.getItem("queue"))??[];
//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
function y(){const t=s.watchedModal.textContent;if("ADD TO WATCHED"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(m.find((e=>e.id===i.id)))return e(l).Notify.warning(`Фильм ${i.title||i.name} уже есть в WATCHED`,{timeout:3500}),s.watchedModal.textContent="DELETE FROM WATCHED",s.watchedModal.classList.contains("colorGreen")&&s.watchedModal.classList.remove("colorGreen"),void(s.watchedModal.classList.contains("colorRed")||s.watchedModal.classList.add("colorRed"));
//! Запись фильма в localStorage
m=[...m,i],localStorage.setItem("watched",JSON.stringify(m)),e(l).Notify.success(`Фильм ${i.title||i.name} добавлен в WATCHED`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
s.watchedModal.textContent="DELETE FROM WATCHED",s.watchedModal.classList.contains("colorGreen")&&s.watchedModal.classList.remove("colorGreen"),s.watchedModal.classList.contains("colorRed")||s.watchedModal.classList.add("colorRed")}else"DELETE FROM WATCHED"===t&&(m=m.filter((e=>e.id!==i.id)),localStorage.setItem("watched",JSON.stringify(m)),e(l).Notify.info(`Фильм ${i.title||i.name} удален из WATCHED`,{timeout:3500}),s.watchedModal.textContent="ADD TO WATCHED",s.watchedModal.classList.contains("colorRed")&&s.watchedModal.classList.remove("colorRed"),s.watchedModal.classList.contains("colorGreen")||s.watchedModal.classList.add("colorGreen"),"watched"===u&&(v(),
//! Очищаем контейнер:
E(),b(m)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function p(){const t=s.queueModal.textContent;if("ADD TO QUEUE"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(f.find((e=>e.id===i.id)))return e(l).Notify.warning(`Фильм ${i.title||i.name} уже есть в QUEUE`,{timeout:3500}),s.queueModal.textContent="DELETE FROM QUEUE",s.queueModal.classList.contains("colorGreen")&&s.queueModal.classList.remove("colorGreen"),void(s.queueModal.classList.contains("colorRed")||s.queueModal.classList.add("colorRed"));
//! Запись фильма в localStorage
f=[...f,i],localStorage.setItem("queue",JSON.stringify(f)),e(l).Notify.success(`Фильм ${i.title||i.name} добавлен в QUEUE`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
s.queueModal.textContent="DELETE FROM QUEUE",s.queueModal.classList.contains("colorGreen")&&s.queueModal.classList.remove("colorGreen"),s.queueModal.classList.contains("colorRed")||s.queueModal.classList.add("colorRed")}else"DELETE FROM QUEUE"===t&&(f=f.filter((e=>e.id!==i.id)),localStorage.setItem("queue",JSON.stringify(f)),e(l).Notify.info(`Фильм ${i.title||i.name} удален из QUEUE`,{timeout:3500}),s.queueModal.textContent="ADD TO QUEUE",s.queueModal.classList.contains("colorRed")&&s.queueModal.classList.remove("colorRed"),s.queueModal.classList.contains("colorGreen")||s.queueModal.classList.add("colorGreen"),"queue"===u&&(v(),
//! Очищаем контейнер:
E(),b(f)))}function g(){u="watched",
//! Очищаем контейнер:
E();
//! Рисование интерфейса
b(JSON.parse(localStorage.getItem("watched"))??[])}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function E(){s.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function v(){window.removeEventListener("keydown",L),document.body.classList.remove("show-modal"),s.InfoMovie.innerHTML=""}function L(e){"Escape"===e.code&&v()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function b(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
s.moviesCards.insertAdjacentHTML("beforeend",function(e){return e.map((({id:e,poster_path:t,title:o,name:a,genres:n,first_air_date:l,release_date:d,vote_average:c})=>{const s=n.map((e=>e.name)).join(", "),r=(l||d||"???? - ?? - ??").substr(0,4),i=c.toFixed(1);let u=o;o&&(u=o.toUpperCase());let m=a;if(a){a.toUpperCase()}return`\n                <li class="gallery__item" key=${e}>\n                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${t}" alt="${o||a}" />\n\n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${u||m}</h2>\n                        <p class="gallery__text">${s} &nbsp|&nbsp ${r}&nbsp &nbsp${i}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
g(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:o,modalTeam:a,body:n}=e;function l(e){a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",d)}function d(e){"Escape"===e.key&&l()}t.addEventListener("click",(function(e){window.addEventListener("keydown",d),a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),o.addEventListener("click",l),a.addEventListener("click",(function(e){e.currentTarget===e.target&&l()}))})();
//# sourceMappingURL=my-library.fab06dce.js.map
