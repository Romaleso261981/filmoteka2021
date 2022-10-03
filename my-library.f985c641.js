var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequirea6b3;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequirea6b3=n);n("eWCmQ");var o=n("3oXzi");
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
r.myLibraryBtn.addEventListener("click",s),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
r.movieDetails.addEventListener("click",(
//!!!!!! Загрузка популярных фильмов на главную (первую) страницу (без нажатия на кнопки HOME или Filmoteka)
async function(e){if(!e.target.closest("li"))return;{const n=e.target.closest("li");l=Number(n.getAttribute("key")),console.log("idFilms:",l),function(e){const n=[...t(),...a()].find((t=>t.id==e));d=n}
//! ПОКАЗЫВАЕМ Spinner
(l)}function t(){try{const e=JSON.parse(localStorage.getItem("queue"))||[];return null===e?[]:e}catch(e){console.log(e)}}function a(){try{const e=JSON.parse(localStorage.getItem("watched"));return null===e?[]:e}catch(e){console.log(e)}}o.default.startSpinner(),
//! ==> Открываем модалку
window.addEventListener("keydown",m),document.body.classList.add("show-modal"),
//! Прячем Spinner
o.default.removeSpinner(),
//! Рисование интерфейса
n=d,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
r.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:t,poster_path:a,title:n,name:o,vote_average:r,vote_count:l,popularity:d,original_title:c,original_name:s,genres:i,overview:u}=e,m=i.map((e=>e.name)).join(", ");let p=n;n&&(p=n.toUpperCase());let y=o;return o&&o.toUpperCase(),`\n        <img src="https://image.tmdb.org/t/p/w300${a}" alt="${n||o}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${p||y}</h3>\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${r}</span> / ${l}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${d}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${c||s}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div>\n        \n            <div class="modal-button" data-action="library-btn">\n                <button type="button" class="modal-button-watched" data-action="modal-add-watched">ADD TO WATCHED</button>\n                <button type="button" class="modal-button-watched" data-action="modal-add-queue">ADD TO QUEUE</button>\n            </div>\n        </div>\n    `}(n));
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var n}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
r.closeModalBtn.addEventListener("click",u),r.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&u()})),
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! Импортируем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
r.watchedHeader.addEventListener("click",s),r.queueHeader.addEventListener("click",(function(){console.log("Вешаю слушателя на кнопку my-library.js==>QUEUE"),//!
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
c="queue",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
i();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("queue"))??[];console.log("results:",e),//!
//! Рисование интерфейса
p(e)}
//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
));
//! ++++++++++++++++++ ПОКАЗЫВАЕМ/ПРЯЧЕМ элементы разметки ++++++++++++++++++++
//! Создаем глобальную переменную (films) для хранения значение всей (results)
let l=1,d=null,c="";
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
JSON.parse(localStorage.getItem("watched")),JSON.parse(localStorage.getItem("queue"));function s(){
//! Назначаем тип станицы WATCHED для логики работы кнопок МОДАЛКИ
c="watched",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
i();
//! Рисование интерфейса
p(JSON.parse(localStorage.getItem("watched"))??[])}
//! ++++++++++++++ Ф-ция, к-рая получает id жанра и возвращает тип жанра ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function i(){r.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
//! +++++++++++++++++++++++ Функции для МОДАЛКИ +++++++++++++++++++++++++++
function u(){window.removeEventListener("keydown",m),document.body.classList.remove("show-modal"),r.InfoMovie.innerHTML=""}function m(e){"Escape"===e.code&&u()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function p(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
r.moviesCards.insertAdjacentHTML("beforeend",
//! --------------------------------------------------------------------------------------------
function(e){return e.map((({id:e,poster_path:t,title:a,name:n,genres:o,first_air_date:r,release_date:l,vote_average:d})=>{const c=o.map((e=>e.name)).join(", "),s=(r||l||"???? - ?? - ??").substr(0,4),i=d.toFixed(1);let u=a;a&&(u=a.toUpperCase());let m=n;if(n){n.toUpperCase();//!!! тут ошибка сделана СПЕЦИАЛЬНО!!!
}return`\n                <li class="gallery__item" key=${e}>\n                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${t}" alt="${a||n}" />\n\n                    <div class="gallery__thumb">\n                        <h2 class="gallery__title">${u||m}</h2>\n                        <p class="gallery__text">${c} &nbsp|&nbsp ${s}&nbsp &nbsp${i}</p>\n                    </div>\n                </li>\n                `})).join("")}(e))}s(),(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:a,modalTeam:n,body:o}=e;function r(e){n.classList.toggle("is-hidden"),o.classList.toggle("no-scroll"),window.removeEventListener("keydown",l)}function l(e){"Escape"===e.key&&r()}t.addEventListener("click",(function(e){window.addEventListener("keydown",l),n.classList.toggle("is-hidden"),o.classList.toggle("no-scroll")})),a.addEventListener("click",r),n.addEventListener("click",(function(e){e.currentTarget===e.target&&r()}))})();
//# sourceMappingURL=my-library.f985c641.js.map
