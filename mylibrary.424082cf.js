function e(){return{
//! Получаем ссылку на input form:
searchForm:document.querySelector('form[data-action="search-form"]'),
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
//! Получаем ссылку на форму со строкой инпута:
searchFormAlert:document.querySelector('div[data-action="search-form-alert"]'),
//! Получаем ссылку на блок кнопок WATCHED и QUEUE в header:
watchedQueueHeader:document.querySelector('[data-action="library-btn"]'),
//! Получаем ссылку на кнопоку ADD TO WATCHED в МОДАЛКЕ:
watchedModal:document.querySelector('button[data-action="modal-add-watched"]'),
//! Получаем ссылку на кнопоку DELETE FROM WATCHED в МОДАЛКЕ:
//! Получаем ссылку на кнопоку ADD TO QUEUE в МОДАЛКЕ:
queueModal:document.querySelector('button[data-action="modal-add-queue"]'),
//! Получаем ссылку на кнопоку DELETE FROM QUEUE в МОДАЛКЕ:
//! Получаем ссылку на кнопоку WATCHED в header:
watchedHeader:document.querySelector('[data-action="library-watched"]'),
//! Получаем ссылку на кнопоку QUEUE в header:
queueHeader:document.querySelector('[data-action="library-queue"]'),btnlibrary:document.querySelector('[data-action="button-home"]')}}console.log(e.homeBtn);
//! створюю рефи
const t=e();console.log(t),t.resultNotSuccessful.hidden=!0;
//# sourceMappingURL=mylibrary.424082cf.js.map
