var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequirea6b3;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequirea6b3=n);n("eWCmQ");var a=n("3oXzi");
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
r.myLibraryBtn.addEventListener("click",d),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
r.movieDetails.addEventListener("click",(
//!!!!!! Загрузка популярных фильмов на главную (первую) страницу (без нажатия на кнопки HOME или Filmoteka)
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
async function(e){//!
if(console.log("Вешаю слушателя на открытие МОДАЛКИ (onMovieDetails)"),!e.target.closest("li"))return;
//! ПОКАЗЫВАЕМ Spinner
{const t=e.target.closest("li");c=Number(t.getAttribute("key")),//!!! вот ОН, РОДНОЙ!!!
console.log("idFilms:",c)}a.default.startSpinner(),
//! ==> Делаем запрос-3 полной информации о фильме для МОДАЛКИ.
//! ==> Открываем модалку
window.addEventListener("keydown",u),document.body.classList.add("show-modal"),
//! Прячем Spinner
a.default.removeSpinner()}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
r.closeModalBtn.addEventListener("click",s),r.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&s()})),
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! Импортируем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
r.watchedHeader.addEventListener("click",d),r.queueHeader.addEventListener("click",(function(){console.log("Вешаю слушателя на кнопку my-library.js==>QUEUE"),//!
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
i="queue",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
l();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("queue"))??[];console.log("results:",e),//!
//! Рисование интерфейса
m(e)}
//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
));
//! ++++++++++++++++++ ПОКАЗЫВАЕМ/ПРЯЧЕМ элементы разметки ++++++++++++++++++++
//! Создаем глобальную переменную (films) для хранения значение всей (results)
let c=1,i="";
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
JSON.parse(localStorage.getItem("watched")),JSON.parse(localStorage.getItem("queue"));function d(){console.log("Вешаю слушателя на кнопку my-library.js==>WATCHED"),//!
//! Назначаем тип станицы WATCHED для логики работы кнопок МОДАЛКИ
i="watched",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
l();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("watched"))??[];console.log("results:",e),//!
//! Рисование интерфейса
m(e)}
//! ++++++++++++++ Ф-ция, к-рая получает id жанра и возвращает тип жанра ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function l(){r.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
//! +++++++++++++++++++++++ Функции для МОДАЛКИ +++++++++++++++++++++++++++
function s(){window.removeEventListener("keydown",u),document.body.classList.remove("show-modal"),r.InfoMovie.innerHTML=""}function u(e){"Escape"===e.code&&s()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
function m(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
r.moviesCards.insertAdjacentHTML("beforeend",
//! --------------------------------------------------------------------------------------------
function(e){return console.log("results:",e),e.map((({id:e,poster_path:t,title:o,name:n,genres:a,first_air_date:r,release_date:c,vote_average:i})=>{const d=a.map((e=>e.name)).join(", "),l=(r||c||"???? - ?? - ??").substr(0,4),s=i.toFixed(1);let u=o;o&&(u=o.toUpperCase());let m=n;if(n){n.toUpperCase();//!!! тут ошибка сделана СПЕЦИАЛЬНО!!!
}return`\n                <li key=${e}>\n                    <img src="https://image.tmdb.org/t/p/w780${t}" alt="${o||n}" />\n\n                    <div>\n                        <h2>${u||m}</h2>\n                        <h3>${d} &nbsp|&nbsp ${l}&nbsp &nbsp${s}</h3>\n                    </div>\n                </li>\n                `})).join("")}
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
(e))}(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:t,closeModalTeamBtn:o,modalTeam:n,body:a}=e;function r(e){n.classList.toggle("is-hidden"),a.classList.toggle("no-scroll"),window.removeEventListener("keydown",c)}function c(e){"Escape"===e.key&&r()}t.addEventListener("click",(function(e){window.addEventListener("keydown",c),n.classList.toggle("is-hidden"),a.classList.toggle("no-scroll")})),o.addEventListener("click",r),n.addEventListener("click",(function(e){e.currentTarget===e.target&&r()}))})();
//# sourceMappingURL=my-library.47140a8c.js.map
