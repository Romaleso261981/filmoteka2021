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
movieDetails:document.querySelector('section[data-action="section-hero"]'),
//! Получаем ссылки для модалки:
closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),
//! Получаем ссылку на строку предупреждения об отсутствии фильмов:
resultNotSuccessful:document.querySelector('[data-action="search-alert"]'),
//! Получаем ссылку на блок кнопок WATCHED и QUEUE в header:
watchedQueueHeader:document.querySelector('[data-action="library-btn"]'),
//! Получаем ссылку на кнопоку WATCHED в header:
watchedHeader:document.querySelector('[data-action="library-watched"]'),
//! Получаем ссылку на кнопоку QUEUE в header:
queueHeader:document.querySelector('[data-action="library-queue"]')};
//!  Создаем слушателя событий на поле ввода данных - input form:
//!  Создаем слушателя событий на кнопке LOAD MORE:
//! Создаем слушателя событий на кнопке HOME:
//! Создаем слушателя событий на кнопке Filmoteka:
//! Создаем слушателя событий на кнопке MY LIBRARY:
s.myLibraryBtn.addEventListener("click",E),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
s.movieDetails.addEventListener("click",(async function(e){if(!e.target.closest("li"))return;{const a=e.target.closest("li");i=Number(a.getAttribute("key")),console.log("idFilms:",i),function(e){const a=[...t(),...o()].find((t=>t.id==e));r=a}
//! ПОКАЗЫВАЕМ Spinner
(i)}function t(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function o(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}
//! ==> Делаем запрос-3 полной информации о фильме для МОДАЛКИ.
//! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
//! + проверяем на какой странице находимся (т.е. в каком localStorage искать) 
d.default.startSpinner(),"watched"===u&&(r=m.find((e=>e.id===i)));"queue"===u&&(r=g.find((e=>e.id===i)));
//! ==> Открываем модалку
window.addEventListener("keydown",h),document.body.classList.add("show-modal"),
//! Прячем Spinner
d.default.removeSpinner(),
//! Рисование интерфейса
a=r,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
s.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:t,poster_path:o,title:a,name:n,vote_average:l,vote_count:d,popularity:c,original_title:s,original_name:i,genres:r,overview:u}=e,m=r.map((e=>e.name)).join(", ");let g=a;a&&(g=a.toUpperCase());let f=n;return n&&n.toUpperCase(),`\n        <img src="https://image.tmdb.org/t/p/w300${o}" alt="${a||n}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${g||f}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${l}</span> / ${d}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${s||i}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n\n                <button type="button" class="modal-button-queue" data-action="modal-add-queue">ADD TO QUEUE</button>\n\n            </div>\n        </div>\n    `}(a)),s.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),s.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),console.log("addIventListenerModalBtn_refs.watchedModal:",s.watchedModal),//!
console.log("addIventListenerModalBtn_refs.queueModal:",s.queueModal),//!
s.watchedModal.addEventListener("click",f),s.queueModal.addEventListener("click",y),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
(0,c.default)(u,s,r,m,g);
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var a}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
s.closeModalBtn.addEventListener("click",p),s.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&p()})),
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! Импортируем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
s.watchedHeader.addEventListener("click",E),s.queueHeader.addEventListener("click",(function(){console.log("Вешаю слушателя на кнопку my-library.js==>QUEUE"),//!
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
u="queue",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
M();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("queue"))??[];console.log("results:",e),//!
//! Рисование интерфейса
v(e)}
//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
));
//! ++++++++++++++++++ ПОКАЗЫВАЕМ/ПРЯЧЕМ элементы разметки ++++++++++++++++++++
//! Создаем глобальную переменную (films) для хранения значение всей (results)
let i=1,r=null,u="",m=JSON.parse(localStorage.getItem("watched"))??[],g=JSON.parse(localStorage.getItem("queue"))??[];
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
function f(){console.log("Вешаю слушателя на кнопку ADD TO WATCHED в МОДАЛКЕ"),//!
console.log("infoFilm:",r),//!
console.log("infoFilm.id:",r.id),//!
console.log("Ф-ция_4_refs.watchedModal ==>:",s.watchedModal);//!
const t=s.watchedModal.textContent;//!
if(console.log("textWatchedModal ==> начало:",t),"ADD TO WATCHED"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(m.find((e=>e.id===r.id)))return e(l).Notify.warning(`Фильм ${r.title||r.name} уже есть в WATCHED`,{timeout:3500}),s.watchedModal.textContent="DELETE FROM WATCHED",s.watchedModal.classList.contains("colorGreen")&&s.watchedModal.classList.remove("colorGreen"),void(s.watchedModal.classList.contains("colorRed")||s.watchedModal.classList.add("colorRed"));
//! Запись фильма в localStorage
m=[...m,r],console.log("localStorageWatched:",m),//!
localStorage.setItem("watched",JSON.stringify(m)),e(l).Notify.success(`Фильм ${r.title||r.name} добавлен в WATCHED`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
s.watchedModal.textContent="DELETE FROM WATCHED",s.watchedModal.classList.contains("colorGreen")&&s.watchedModal.classList.remove("colorGreen"),s.watchedModal.classList.contains("colorRed")||s.watchedModal.classList.add("colorRed"),console.log("textWatchedModal ==> конец:",t)}else"DELETE FROM WATCHED"===t&&(m=m.filter((e=>e.id!==r.id)),localStorage.setItem("watched",JSON.stringify(m)),console.log("Фильм удален из WATCHED"),//!
e(l).Notify.info(`Фильм ${r.title||r.name} удален из WATCHED`,{timeout:3500}),s.watchedModal.textContent="ADD TO WATCHED",s.watchedModal.classList.contains("colorRed")&&s.watchedModal.classList.remove("colorRed"),s.watchedModal.classList.contains("colorGreen")||s.watchedModal.classList.add("colorGreen"),"watched"===u&&(console.log("currentPage",u),//!
p(),
//! Очищаем контейнер:
M(),v(m)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function y(){console.log("Вешаю слушателя на кнопку ADD TO QUEUE в МОДАЛКЕ"),//!
console.log("infoFilm:",r),//!
console.log("infoFilm.id:",r.id);//!
const t=s.queueModal.textContent;//!
if(console.log("textQueuedModal ==> начало:",t),"ADD TO QUEUE"===t){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(g.find((e=>e.id===r.id)))return e(l).Notify.warning(`Фильм ${r.title||r.name} уже есть в QUEUE`,{timeout:3500}),s.queueModal.textContent="DELETE FROM QUEUE",s.queueModal.classList.contains("colorGreen")&&s.queueModal.classList.remove("colorGreen"),void(s.queueModal.classList.contains("colorRed")||s.queueModal.classList.add("colorRed"));
//! Запись фильма в localStorage
g=[...g,r],console.log("localStorageQueue:",g),//!
localStorage.setItem("queue",JSON.stringify(g)),e(l).Notify.success(`Фильм ${r.title||r.name} добавлен в QUEUE`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
s.queueModal.textContent="DELETE FROM QUEUE",s.queueModal.classList.contains("colorGreen")&&s.queueModal.classList.remove("colorGreen"),s.queueModal.classList.contains("colorRed")||s.queueModal.classList.add("colorRed"),console.log("textQueuedModal ==> конец:",t)}else"DELETE FROM QUEUE"===t&&(g=g.filter((e=>e.id!==r.id)),localStorage.setItem("queue",JSON.stringify(g)),console.log("Фильм удален из QUEUE"),e(l).Notify.info(`Фильм ${r.title||r.name} удален из QUEUE`,{timeout:3500}),s.queueModal.textContent="ADD TO QUEUE",s.queueModal.classList.contains("colorRed")&&s.queueModal.classList.remove("colorRed"),s.queueModal.classList.contains("colorGreen")||s.queueModal.classList.add("colorGreen"),"queue"===u&&(console.log("currentPage",u),//!
p(),
//! Очищаем контейнер:
M(),v(g)))}function E(){
//! Назначаем тип станицы WATCHED для логики работы кнопок МОДАЛКИ
u="watched",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
M();
//! Рисование интерфейса
v(JSON.parse(localStorage.getItem("watched"))??[])}
//! ++++++++++++++ Ф-ция, к-рая получает id жанра и возвращает тип жанра ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function M(){s.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
//! +++++++++++++++++++++++ Функции для МОДАЛКИ +++++++++++++++++++++++++++
function p(){window.removeEventListener("keydown",h),document.body.classList.remove("show-modal"),s.InfoMovie.innerHTML=""}function h(e){"Escape"===e.code&&p()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//!+++++++++++++ БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE> ++++++++++++++++++
//! __________________________________________________________________________________________________________________
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function v(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
s.moviesCards.insertAdjacentHTML("beforeend",
//! --------------------------------------------------------------------------------------------
function(e){return e.map((({id:e,poster_path:t,title:o,name:a,genres:n,first_air_date:l,release_date:d,vote_average:c})=>{const s=n.map((e=>e.name)).join(", "),i=(l||d||"???? - ?? - ??").substr(0,4),r=c.toFixed(1);let u=o;o&&(u=o.toUpperCase());let m=a;if(a){a.toUpperCase();//!!! тут ошибка сделана СПЕЦИАЛЬНО!!!
}return`\n                <li class="gallery__item" key=${e}>\n                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${t}" alt="${o||a}" />\n\n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${u||m}</h2>\n                        <p class="gallery__text">${s} &nbsp|&nbsp ${i}&nbsp &nbsp${r}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}
//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
E(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:o,modalTeam:a,body:n}=e;function l(e){a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",d)}function d(e){"Escape"===e.key&&l()}t.addEventListener("click",(function(e){window.addEventListener("keydown",d),a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),o.addEventListener("click",l),a.addEventListener("click",(function(e){e.currentTarget===e.target&&l()}))})();
//# sourceMappingURL=my-library.18dad559.js.map
