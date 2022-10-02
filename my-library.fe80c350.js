function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=o.parcelRequirea6b3;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){a[e]=o},o.parcelRequirea6b3=n);var l=n("eWCmQ"),d=n("3oXzi");
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
c.myLibraryBtn.addEventListener("click",f),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
c.movieDetails.addEventListener("click",(
//!!!!!! Загрузка популярных фильмов на главную (первую) страницу (без нажатия на кнопки HOME или Filmoteka)
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
async function(o){//!
if(console.log("Вешаю слушателя на открытие МОДАЛКИ (onMovieDetails)"),!o.target.closest("li"))return;
//! ПОКАЗЫВАЕМ Spinner
{const e=o.target.closest("li");s=Number(e.getAttribute("key")),//!!! вот ОН, РОДНОЙ!!!
console.log("idFilms:",s)}d.default.startSpinner();
//! ==> Делаем запрос-3 полной информации о фильме для МОДАЛКИ.
try{const e=await themoviedbApiService.getMovieDetails(s);
//! Очищаем контейнер МОДАЛКИ:
L(),
//! Перезаписываем в глобальную переменную (films) значение всей (results)
i=e}catch(o){
//! Очищаем контейнер МОДАЛКИ:
L(),
//! Прячем Spinner
d.default.removeSpinner(),
//! Очищаем контейнер переменную (films):
i=null,console.log(o),//!
e(l).Notify.failure(`Ошибка запроса: ${o.message}`,{timeout:3500})}
//! ==> Открываем модалку
window.addEventListener("keydown",w),document.body.classList.add("show-modal"),
//! Прячем Spinner
d.default.removeSpinner(),
//! Рисование интерфейса
t=i,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
c.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:o,poster_path:t,title:a,name:n,vote_average:l,vote_count:d,popularity:c,original_title:s,original_name:i,genres:r,overview:u}=e,m=r.map((e=>e.name)).join(", ");let M=a;a&&(M=a.toUpperCase());let g=n;return n&&n.toUpperCase(),`\n        <img src="https://image.tmdb.org/t/p/w300${t}" alt="${a||n}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${M||g}</h3\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${l}</span> / ${d}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${c}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${s||i}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div\n        \n            <div class="modal-button" data-action="library-btn">\n                <button \n                    type="button" \n                    class="modal-watched" \n                    data-action="modal-add-watched"\n                    >\n                    ADD TO WATCHED\n                </button>\n                <button \n                    type="button" \n                    class="modal-queue" \n                    data-action="modal-add-queue"\n                    >\n                    ADD TO QUEUE\n                </button>\n            </div>\n        </div>\n    `}(t)),c.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),c.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),console.log("addIventListenerModalBtn_refs.watchedModal:",c.watchedModal),//!
console.log("addIventListenerModalBtn_refs.queueModal:",c.queueModal),//!
c.watchedModal.addEventListener("click",M),c.queueModal.addEventListener("click",g),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
//!+++++++++++++ БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE> ++++++++++++++++++
function(){console.log("БЛОК ЛОГИКИ_refs.watchedModal ==>:",c.watchedModal),//!
console.log("БЛОК ЛОГИКИ_refs.queueModal ==>:",c.queueModal),//!
//! Устанвливаем начальные значения textContent для кнопок WATCHED и QUEUE в модалке
//! в зависимости от того, на какой странице находится пользователь
c.watchedModal.textContent="ADD TO WATCHED",c.watchedModal.classList.contains("colorRed")&&c.watchedModal.classList.remove("colorRed");c.watchedModal.classList.contains("colorGreen")||c.watchedModal.classList.add("colorGreen");"watched"===r&&(c.watchedModal.textContent="DELETE FROM WATCHED",c.watchedModal.classList.contains("colorGreen")&&c.watchedModal.classList.remove("colorGreen"),c.watchedModal.classList.contains("colorRed")||c.watchedModal.classList.add("colorRed"));c.queueModal.textContent="ADD TO QUEUE",c.queueModal.classList.contains("colorRed")&&c.queueModal.classList.remove("colorRed");c.queueModal.classList.contains("colorGreen")||c.queueModal.classList.add("colorGreen");c.queueModal.classList.add("colorGreen"),"queue"===r&&(c.queueModal.textContent="DELETE FROM QUEUE",c.queueModal.classList.contains("colorGreen")&&c.queueModal.classList.remove("colorGreen"),c.queueModal.classList.contains("colorRed")||c.queueModal.classList.add("colorRed"))}
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
();
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var t}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
c.closeModalBtn.addEventListener("click",h),c.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&h()})),
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
console.log("Слушатели_refs.watchedModal:",c.watchedModal),//!
console.log("Слушатели_refs.queueModal:",c.queueModal),//!
//! Импортируем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
c.watchedHeader.addEventListener("click",f),c.queueHeader.addEventListener("click",(function(){console.log("Вешаю слушателя на кнопку my-library.js==>QUEUE"),//!
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
r="queue",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
E();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("queue"))??[];console.log("results:",e),//!
//! Рисование интерфейса
y(e)}
//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
));
//! ++++++++++++++++++ ПОКАЗЫВАЕМ/ПРЯЧЕМ элементы разметки ++++++++++++++++++++
//! Создаем глобальную переменную (films) для хранения значение всей (results)
let s=1,i=null,r="",u=JSON.parse(localStorage.getItem("watched"))??[],m=JSON.parse(localStorage.getItem("queue"))??[];
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
function M(){console.log("Вешаю слушателя на кнопку ADD TO WATCHED в МОДАЛКЕ"),//!
console.log("infoFilm:",i),//!
console.log("infoFilm.id:",i.id),//!
console.log("Ф-ция_4_refs.watchedModal ==>:",c.watchedModal);//!
const o=c.watchedModal.textContent;//!
if(console.log("textWatchedModal ==> начало:",o),"ADD TO WATCHED"===o){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(u.find((e=>e.id===i.id)))return e(l).Notify.warning(`Фильм ${i.title||i.name} уже есть в WATCHED`,{timeout:3500}),c.watchedModal.textContent="DELETE FROM WATCHED",c.watchedModal.classList.contains("colorGreen")&&c.watchedModal.classList.remove("colorGreen"),void(c.watchedModal.classList.contains("colorRed")||c.watchedModal.classList.add("colorRed"));
//! Запись фильма в localStorage
u=[...u,i],console.log("localStorageWatched:",u),//!
localStorage.setItem("watched",JSON.stringify(u)),e(l).Notify.success(`Фильм ${i.title||i.name} добавлен в WATCHED`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
c.watchedModal.textContent="DELETE FROM WATCHED",c.watchedModal.classList.contains("colorGreen")&&c.watchedModal.classList.remove("colorGreen"),c.watchedModal.classList.contains("colorRed")||c.watchedModal.classList.add("colorRed"),console.log("textWatchedModal ==> конец:",o)}else"DELETE FROM WATCHED"===o&&(u=u.filter((e=>e.id!==i.id)),localStorage.setItem("watched",JSON.stringify(u)),console.log("Фильм удален из WATCHED"),//!
e(l).Notify.info(`Фильм ${i.title||i.name} удален из WATCHED`,{timeout:3500}),c.watchedModal.textContent="ADD TO WATCHED",c.watchedModal.classList.contains("colorRed")&&c.watchedModal.classList.remove("colorRed"),c.watchedModal.classList.contains("colorGreen")||c.watchedModal.classList.add("colorGreen"),"watched"===r&&(console.log("currentPage",r),//!
h(),
//! Очищаем контейнер:
E(),y(u)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function g(){console.log("Вешаю слушателя на кнопку ADD TO QUEUE в МОДАЛКЕ"),//!
console.log("infoFilm:",i),//!
console.log("infoFilm.id:",i.id);//!
const o=c.queueModal.textContent;//!
if(console.log("textQueuedModal ==> начало:",o),"ADD TO QUEUE"===o){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(m.find((e=>e.id===i.id)))return e(l).Notify.warning(`Фильм ${i.title||i.name} уже есть в QUEUE`,{timeout:3500}),c.queueModal.textContent="DELETE FROM QUEUE",c.queueModal.classList.contains("colorGreen")&&c.queueModal.classList.remove("colorGreen"),void(c.queueModal.classList.contains("colorRed")||c.queueModal.classList.add("colorRed"));
//! Запись фильма в localStorage
m=[...m,i],console.log("localStorageQueue:",m),//!
localStorage.setItem("queue",JSON.stringify(m)),e(l).Notify.success(`Фильм ${i.title||i.name} добавлен в QUEUE`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
c.queueModal.textContent="DELETE FROM QUEUE",c.queueModal.classList.contains("colorGreen")&&c.queueModal.classList.remove("colorGreen"),c.queueModal.classList.contains("colorRed")||c.queueModal.classList.add("colorRed"),console.log("textQueuedModal ==> конец:",o)}else"DELETE FROM QUEUE"===o&&(m=m.filter((e=>e.id!==i.id)),localStorage.setItem("queue",JSON.stringify(m)),console.log("Фильм удален из QUEUE"),e(l).Notify.info(`Фильм ${i.title||i.name} удален из QUEUE`,{timeout:3500}),c.queueModal.textContent="ADD TO QUEUE",c.queueModal.classList.contains("colorRed")&&c.queueModal.classList.remove("colorRed"),c.queueModal.classList.contains("colorGreen")||c.queueModal.classList.add("colorGreen"),"queue"===r&&(console.log("currentPage",r),//!
h(),
//! Очищаем контейнер:
E(),y(m)))}function f(){console.log("Вешаю слушателя на кнопку my-library.js==>WATCHED"),//!
//! Назначаем тип станицы WATCHED для логики работы кнопок МОДАЛКИ
r="watched",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
E();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("watched"))??[];console.log("results:",e),//!
//! Рисование интерфейса
y(e)}
//! ++++++++++++++ Ф-ция, к-рая получает id жанра и возвращает тип жанра ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function E(){c.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
function L(){c.InfoMovie.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
//! +++++++++++++++++++++++ Функции для МОДАЛКИ +++++++++++++++++++++++++++
function h(){window.removeEventListener("keydown",w),document.body.classList.remove("show-modal"),
//! Очищаем контейнер МОДАЛКИ:
L()}function w(e){"Escape"===e.code&&h()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
function y(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
c.moviesCards.insertAdjacentHTML("beforeend",
//! --------------------------------------------------------------------------------------------
function(e){return console.log("results:",e),e.map((({id:e,poster_path:o,title:t,name:a,genres:n,first_air_date:l,release_date:d,vote_average:c})=>{const s=n.map((e=>e.name)).join(", "),i=(l||d||"???? - ?? - ??").substr(0,4),r=c.toFixed(1);let u=t;t&&(u=t.toUpperCase());let m=a;if(a){a.toUpperCase();//!!! тут ошибка сделана СПЕЦИАЛЬНО!!!
}return`\n                <li key=${e}>\n                    <img src="https://image.tmdb.org/t/p/w780${o}" alt="${t||a}" />\n\n                    <div>\n                        <h2>${u||m}</h2>\n                        <h3>${s} &nbsp|&nbsp ${i}&nbsp &nbsp${r}</h3>\n                    </div>\n                </li>\n                `})).join("")}(e))}(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:o,closeModalTeamBtn:t,modalTeam:a,body:n}=e;function l(e){a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll"),window.removeEventListener("keydown",d)}function d(e){"Escape"===e.key&&l()}o.addEventListener("click",(function(e){window.addEventListener("keydown",d),a.classList.toggle("is-hidden"),n.classList.toggle("no-scroll")})),t.addEventListener("click",l),a.addEventListener("click",(function(e){e.currentTarget===e.target&&l()}))})();
//# sourceMappingURL=my-library.fe80c350.js.map
