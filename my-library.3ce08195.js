function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=o.parcelRequirea6b3;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){a[e]=o},o.parcelRequirea6b3=l);var n=l("eWCmQ"),s=l("6GGET"),d=l("lpPzL"),c=l("3oXzi");
//! Создаем объект всех ссылок refs.*
const i=(0,d.default)(),r=new(0,s.default);
//! Создаем экземпляр класса ThemoviedbApiService
//! Создаем экземпляр класса LoadMoreBtn = Кнопка LOAD MORE
//!  Создаем слушателя событий на поле ввода данных - input form:
//!  Создаем слушателя событий на кнопке LOAD MORE:
//! Создаем слушателя событий на кнопке HOME:
//! Создаем слушателя событий на кнопке Filmoteka:
//! Создаем слушателя событий на кнопке MY LIBRARY:
i.myLibraryBtn.addEventListener("click",w),
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
i.movieDetails.addEventListener("click",(
//!!!!!! Загрузка популярных фильмов на главную (первую) страницу (без нажатия на кнопки HOME или Filmoteka)
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
async function(o){//!
if(console.log("Вешаю слушателя на открытие МОДАЛКИ (onMovieDetails)"),!o.target.closest("li"))return;
//! ПОКАЗЫВАЕМ Spinner
{const e=o.target.closest("li");u=Number(e.getAttribute("key")),//!!! вот ОН, РОДНОЙ!!!
console.log("idFilms:",u)}c.default.startSpinner();
//! ==> Делаем запрос-3 полной информации о фильме для МОДАЛКИ.
try{const e=await r.getMovieDetails(u);
//! Очищаем контейнер МОДАЛКИ:
v(),
//! Перезаписываем в глобальную переменную (films) значение всей (results)
m=e}catch(o){
//! Очищаем контейнер МОДАЛКИ:
v(),
//! Прячем Spinner
c.default.removeSpinner(),
//! Очищаем контейнер переменную (films):
m=null,console.log(o),//!
e(n).Notify.failure(`Ошибка запроса: ${o.message}`,{timeout:3500})}
//! ==> Открываем модалку
window.addEventListener("keydown",q),document.body.classList.add("show-modal"),
//! Прячем Spinner
c.default.removeSpinner(),
//! Рисование интерфейса 
t=m,
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
i.InfoMovie.insertAdjacentHTML("afterbegin",
//! --------------------------------------------------------------------------------------------
function(e){const{id:o,poster_path:t,title:a,name:l,vote_average:n,vote_count:s,popularity:d,original_title:c,original_name:i,genres:r,overview:u}=e,m=r.map((e=>e.name)).join(", ");let M=a;a&&(M=a.toUpperCase());let g=l;return l&&l.toUpperCase(),`\n        <img src="https://image.tmdb.org/t/p/w300${t}" alt="${a||l}" />\n        \n        <div class="modal-сontent">\n            <h3 class="modal-title-film">${M||g}</h3\n            <table class="modal-info">\n                <tbody>\n                    <tr>\n                        <td class="modal-key">Vote/Votes</td>\n                        <td class="modal-parametr"><span class="modal-parametr-vote">${n}</span> / ${s}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Popularity</td>\n                        <td class="modal-parametr">${d}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Original Title</td>\n                        <td class="modal-parametr">${c||i}</td>\n                    </tr>\n                    <tr>\n                        <td class="modal-key">Genre</td>\n                        <td class="modal-parametr">${m}</td>\n                    </tr>\n                </tbody>\n            </table\n            <div class="modal-about-film">\n                <h5 class="modal-about-title">ABOUT</h5>\n                <span class="modal-about-text">${u}</span>\n            </div\n        \n            <div class="modal-button" data-action="library-btn">\n                <button \n                    type="button" \n                    class="modal-watched" \n                    data-action="modal-add-watched"\n                    >\n                    ADD TO WATCHED\n                </button>\n                <button \n                    type="button" \n                    class="modal-queue" \n                    data-action="modal-add-queue"\n                    >\n                    ADD TO QUEUE\n                </button>\n            </div>\n        </div>\n    `}(t)),i.watchedModal=document.querySelector('button[data-action="modal-add-watched"]'),i.queueModal=document.querySelector('button[data-action="modal-add-queue"]'),console.log("addIventListenerModalBtn_refs.watchedModal:",i.watchedModal),//!
console.log("addIventListenerModalBtn_refs.queueModal:",i.queueModal),//!
i.watchedModal.addEventListener("click",f),i.queueModal.addEventListener("click",L),
//! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE> 
//!+++++++++++++ БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE> ++++++++++++++++++
function(){console.log("БЛОК ЛОГИКИ_refs.watchedModal ==>:",i.watchedModal),//!
console.log("БЛОК ЛОГИКИ_refs.queueModal ==>:",i.queueModal),//!
//! Устанвливаем начальные значения textContent для кнопок WATCHED и QUEUE в модалке
//! в зависимости от того, на какой странице находится пользователь
i.watchedModal.textContent="ADD TO WATCHED",i.watchedModal.classList.contains("colorRed")&&i.watchedModal.classList.remove("colorRed");i.watchedModal.classList.contains("colorGreen")||i.watchedModal.classList.add("colorGreen");"watched"===M&&(i.watchedModal.textContent="DELETE FROM WATCHED",i.watchedModal.classList.contains("colorGreen")&&i.watchedModal.classList.remove("colorGreen"),i.watchedModal.classList.contains("colorRed")||i.watchedModal.classList.add("colorRed"));i.queueModal.textContent="ADD TO QUEUE",i.queueModal.classList.contains("colorRed")&&i.queueModal.classList.remove("colorRed");i.queueModal.classList.contains("colorGreen")||i.queueModal.classList.add("colorGreen");i.queueModal.classList.add("colorGreen"),"queue"===M&&(i.queueModal.textContent="DELETE FROM QUEUE",i.queueModal.classList.contains("colorGreen")&&i.queueModal.classList.remove("colorGreen"),i.queueModal.classList.contains("colorRed")||i.queueModal.classList.add("colorRed"))}
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
();
//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
var t}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
)),
//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
i.closeModalBtn.addEventListener("click",p),i.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&p()})),
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
console.log("Слушатели_refs.watchedModal:",i.watchedModal),//!
console.log("Слушатели_refs.queueModal:",i.queueModal),//!
//! Импортируем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ 
//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
i.watchedHeader.addEventListener("click",w),i.queueHeader.addEventListener("click",(function(){console.log("Вешаю слушателя на кнопку my-library.js==>QUEUE"),//!
//! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
M="queue",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
h();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("queue"))??[];console.log("results:",e),//!
//! Рисование интерфейса 
y(e)}
//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
));
//! ++++++++++++++++++ ПОКАЗЫВАЕМ/ПРЯЧЕМ элементы разметки ++++++++++++++++++++
//! Создаем глобальную переменную (films) для хранения значение всей (results)
let u=1,m=null,M="",g=JSON.parse(localStorage.getItem("watched"))??[],E=JSON.parse(localStorage.getItem("queue"))??[];
//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
function f(){console.log("Вешаю слушателя на кнопку ADD TO WATCHED в МОДАЛКЕ"),//!
console.log("infoFilm:",m),//!
console.log("infoFilm.id:",m.id),//!
console.log("Ф-ция_4_refs.watchedModal ==>:",i.watchedModal);//!
const o=i.watchedModal.textContent;//!
if(console.log("textWatchedModal ==> начало:",o),"ADD TO WATCHED"===o){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(g.find((e=>e.id===m.id)))return e(n).Notify.warning(`Фильм ${m.title||m.name} уже есть в WATCHED`,{timeout:3500}),i.watchedModal.textContent="DELETE FROM WATCHED",i.watchedModal.classList.contains("colorGreen")&&i.watchedModal.classList.remove("colorGreen"),void(i.watchedModal.classList.contains("colorRed")||i.watchedModal.classList.add("colorRed"));
//! Запись фильма в localStorage
g=[...g,m],console.log("localStorageWatched:",g),//!
localStorage.setItem("watched",JSON.stringify(g)),e(n).Notify.success(`Фильм ${m.title||m.name} добавлен в WATCHED`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
i.watchedModal.textContent="DELETE FROM WATCHED",i.watchedModal.classList.contains("colorGreen")&&i.watchedModal.classList.remove("colorGreen"),i.watchedModal.classList.contains("colorRed")||i.watchedModal.classList.add("colorRed"),console.log("textWatchedModal ==> конец:",o)}else"DELETE FROM WATCHED"===o&&(g=g.filter((e=>e.id!==m.id)),localStorage.setItem("watched",JSON.stringify(g)),console.log("Фильм удален из WATCHED"),//!
e(n).Notify.info(`Фильм ${m.title||m.name} удален из WATCHED`,{timeout:3500}),i.watchedModal.textContent="ADD TO WATCHED",i.watchedModal.classList.contains("colorRed")&&i.watchedModal.classList.remove("colorRed"),i.watchedModal.classList.contains("colorGreen")||i.watchedModal.classList.add("colorGreen"),"watched"===M&&(console.log("currentPage",M),//!
p(),
//! Очищаем контейнер:
h(),y(g)))}
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function L(){console.log("Вешаю слушателя на кнопку ADD TO QUEUE в МОДАЛКЕ"),//!
console.log("infoFilm:",m),//!
console.log("infoFilm.id:",m.id);//!
const o=i.queueModal.textContent;//!
if(console.log("textQueuedModal ==> начало:",o),"ADD TO QUEUE"===o){
//! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
if(E.find((e=>e.id===m.id)))return e(n).Notify.warning(`Фильм ${m.title||m.name} уже есть в QUEUE`,{timeout:3500}),i.queueModal.textContent="DELETE FROM QUEUE",i.queueModal.classList.contains("colorGreen")&&i.queueModal.classList.remove("colorGreen"),void(i.queueModal.classList.contains("colorRed")||i.queueModal.classList.add("colorRed"));
//! Запись фильма в localStorage
E=[...E,m],console.log("localStorageQueue:",E),//!
localStorage.setItem("queue",JSON.stringify(E)),e(n).Notify.success(`Фильм ${m.title||m.name} добавлен в QUEUE`,{timeout:3500}),
//! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
i.queueModal.textContent="DELETE FROM QUEUE",i.queueModal.classList.contains("colorGreen")&&i.queueModal.classList.remove("colorGreen"),i.queueModal.classList.contains("colorRed")||i.queueModal.classList.add("colorRed"),console.log("textQueuedModal ==> конец:",o)}else"DELETE FROM QUEUE"===o&&(E=E.filter((e=>e.id!==m.id)),localStorage.setItem("queue",JSON.stringify(E)),console.log("Фильм удален из QUEUE"),e(n).Notify.info(`Фильм ${m.title||m.name} удален из QUEUE`,{timeout:3500}),i.queueModal.textContent="ADD TO QUEUE",i.queueModal.classList.contains("colorRed")&&i.queueModal.classList.remove("colorRed"),i.queueModal.classList.contains("colorGreen")||i.queueModal.classList.add("colorGreen"),"queue"===M&&(console.log("currentPage",M),//!
p(),
//! Очищаем контейнер:
h(),y(E)))}function w(){console.log("Вешаю слушателя на кнопку my-library.js==>WATCHED"),//!
//! Назначаем тип станицы WATCHED для логики работы кнопок МОДАЛКИ
M="watched",
//! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
//! ПРЯЧЕМ форму со строкой инпута:
//! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
//! Кнопка LOAD MORE => показываем и отключаем
//! Очищаем контейнер:
h();
//! Перезаписываем в локальную переменную (results) значение всего (localStorage)
const e=JSON.parse(localStorage.getItem("watched"))??[];console.log("results:",e),//!
//! Рисование интерфейса 
y(e)}
//! ++++++++++++++ Ф-ция, к-рая получает id жанра и возвращает тип жанра ++++++++++++++
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function h(){i.moviesCards.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
function v(){i.InfoMovie.innerHTML=""}
//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
//! +++++++++++++++++++++++ Функции для МОДАЛКИ +++++++++++++++++++++++++++
function p(){window.removeEventListener("keydown",q),document.body.classList.remove("show-modal"),
//! Очищаем контейнер МОДАЛКИ:
v()}function q(e){"Escape"===e.code&&p()}
//!_____________________________________________________________________
//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
function y(e){
//!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
i.moviesCards.insertAdjacentHTML("beforeend",
//! --------------------------------------------------------------------------------------------
function(e){return console.log("results:",e),e.map((({id:e,poster_path:o,title:t,name:a,genres:l,first_air_date:n,release_date:s,vote_average:d})=>{const c=l.map((e=>e.name)).join(", "),i=(n||s||"???? - ?? - ??").substr(0,4),r=d.toFixed(1);let u=t;t&&(u=t.toUpperCase());let m=a;if(a){a.toUpperCase();//!!! тут ошибка сделана СПЕЦИАЛЬНО!!!
}return`\n                <li key=${e}>\n                    <img src="https://image.tmdb.org/t/p/w780${o}" alt="${t||a}" />\n\n                    <div>\n                        <h2>${u||m}</h2>\n                        <h3>${c} &nbsp|&nbsp ${i}&nbsp &nbsp${r}</h3>\n                    </div>\n                </li>\n                `})).join("")}(e))}(()=>{const e={openModalTeamLink:document.querySelector(".team-link"),closeModalTeamBtn:document.querySelector(".team-close-btn"),modalTeam:document.querySelector(".backdrop-team"),body:document.querySelector("body")},{openModalTeamLink:o,closeModalTeamBtn:t,modalTeam:a,body:l}=e;function n(e){a.classList.toggle("is-hidden"),l.classList.toggle("no-scroll"),window.removeEventListener("keydown",s)}function s(e){"Escape"===e.key&&n()}o.addEventListener("click",(function(e){window.addEventListener("keydown",s),a.classList.toggle("is-hidden"),l.classList.toggle("no-scroll")})),t.addEventListener("click",n),a.addEventListener("click",(function(e){e.currentTarget===e.target&&n()}))})();
//# sourceMappingURL=my-library.3ce08195.js.map
