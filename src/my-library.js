import Notiflix from 'notiflix';

//?  Импорт spinner (Loader ==> isLoadin)
import spinner from './js/preLoader';

import './js/login-modal';

// import ThemoviedbApiService from './js/api-themoviedb.js';


//! Импорт БЛОКА ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE> ./js/get-refs.js
import operationLogicWatchedQueue from './js/operationLogicWatchedQueue.js';

//* +++++++++++++++++++++++++++++++++++ Импорты файлов ++++++++++++++++++++++++++++++++++++++++++++
function getRefsLibrary() {
  return {
    //! Получаем ссылку на div-контейнер для разметки карточек изображений:
    moviesCards: document.querySelector('ul[data-action="movies-cards"]'),

    //! Получаем ссылку на div-контейнер для разметки карточек изображений:
    InfoMovie: document.querySelector('div[data-action="modal-markup"]'),

    //! Получаем ссылку на кнопку HOME:
    homeBtn: document.querySelector('a[data-action="button-home"]'),

    //! Получаем ссылку на кнопку Filmoteka:
    filmotekaBtn: document.querySelector('a[data-action="button-filmoteka"]'),

    //! Получаем ссылку на кнопку MY LIBRARY:
    myLibraryBtn: document.querySelector('a[data-action="button-mylibrary"]'),

    //! Получаем ссылку на <section class="section-hero"> ==> на poster_path:
    movieDetails: document.querySelector('section[data-action="section-hero"]'),


    //! Получаем ссылки для модалки:
    // openModalBtn: document.querySelector('[data-action="open-modal"]'), //! ----- для тестирования
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),

    //! Получаем ссылку на строку предупреждения об отсутствии фильмов:
    resultNotSuccessful: document.querySelector('[data-action="search-alert"]'),

    //! Получаем ссылку на блок кнопок WATCHED и QUEUE в header:
    watchedQueueHeader: document.querySelector('[data-action="library-btn"]'),

    //! Получаем ссылку на кнопоку WATCHED в header:
    watchedHeader: document.querySelector('[data-action="library-watched"]'),

    //! Получаем ссылку на кнопоку QUEUE в header:
    queueHeader: document.querySelector('[data-action="library-queue"]'),
  };
}

//! Создаем объект всех ссылок refs.*
const refs = getRefsLibrary();

// console.log("refs:", refs); //!

// export const themoviedbApiService = new ThemoviedbApiService();




//* +++++++++++++++++++++++++++++++ Создаем ВСЕХ слушателей +++++++++++++++++++++++++++++++++++++++++

//!  Создаем слушателя событий на поле ввода данных - input form:
// refs.searchForm.addEventListener('submit', onFormMoviesSearch); //! +-+-+-

//!  Создаем слушателя событий на кнопке LOAD MORE:
// loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

//! Создаем слушателя событий на кнопке HOME:
// refs.homeBtn.addEventListener('click', onHome);

//! Создаем слушателя событий на кнопке Filmoteka:
// refs.filmotekaBtn.addEventListener('click', onHome);

//! Создаем слушателя событий на кнопке MY LIBRARY:
refs.myLibraryBtn.addEventListener('click', onMyLibraryWatched);

//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
refs.movieDetails.addEventListener('click', onMovieDetails);

//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
// refs.openModalBtn.addEventListener('click', onOpenModal); //? ----- для тестирования
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
// refs.watchedModal.addEventListener('click', onWatchedModal); //!!! +-+-+-+-
// refs.queueModal.addEventListener('click', onQueueModal); //!!! +-+-+-+-
// console.log('Слушатели_refs.watchedModal:', refs.watchedModal); //!
// console.log('Слушатели_refs.queueModal:', refs.queueModal); //!
//! Импортируем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ
// import addIventListenerModalBtn from './js/addIventListenerModalBtn.js'; //! пока не надо, поключена ЛОКАЛЬНО

//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
refs.watchedHeader.addEventListener('click', onMyLibraryWatched);
refs.queueHeader.addEventListener('click', onQueue);

//! ++++++++++++++++++ ПОКАЗЫВАЕМ/ПРЯЧЕМ элементы разметки ++++++++++++++++++++
//? ПОКАЗЫВАЕМ форму со строкой инпута:
// refs.searchFormAlert.hidden = true; //! ПРЯЧЕМ
// refs.searchFormAlert.hidden = false; //! ПОКАЗЫВАЕМ  +-+-+-+-

//? ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
// refs.resultNotSuccessful.hidden = true;

//? ПРЯЧЕМ блок кнопок WATCHED и QUEUE в header:
// refs.watchedQueueHeader.hidden = true; +-+-+-+-

//* +++++++++++++++++++++++++++++++ Создаем ГЛОБАЛЬНЫЕ переменные +++++++++++++++++++++++++++++++++++++++++

//! Создаем глобальную переменную (films) для хранения значение всей (results)
let films = [];

//! Создаем глобальную переменную (idFilms) для хранения idF одного фильма
let idFilms = 1;

//! Создаем глобальную переменную (infoFilm) для хранения полной информации об одном фильме
let infoFilm = null;

//! Переменная для определения типа запроса в кнопке LOAD MORE
//! и типа станиц WATCHED и QUEUE
let currentPage = '';

//! Переменные для хранения массива объектов фильмов для станиц WATCHED и QUEUE
let localStorageWatched = JSON.parse(localStorage.getItem('watched')) ?? [];
let localStorageQueue = JSON.parse(localStorage.getItem('queue')) ?? [];




//* +++++++++++++++++++++++++++++++++++++++ Блок Функций  +++++++++++++++++++++++++++++++++++++++++++++++++


//!!!!!! Загрузка популярных фильмов на страницу MY LIDRARY
onMyLibraryWatched();

//* -------------------------- Ф-ция-запрос_1, к-рая прослушивает события на кнопке HOME: ----------------------

//* ---------- Ф-ция-запрос_2, к-рая прослушивает события на поле ввода данных - input form:-------

//* -------------------------- Ф-ция-запрос_3, к-рая запрашивает полную информацию об одном фильме: ----------------------
//шукаємо по id фільм і виводимо його на сторінку
async function onMovieDetails(event) {
  if (event.target.closest('li')) {
    const itemId = event.target.closest('li');
    idFilms = Number(itemId.getAttribute('key'));
    console.log('idFilms:', idFilms);
    findFilmByIdLs(idFilms);
  } else return;


  // забираємо всі фільми з localStorage
  function getQueueData() {
    try {
      const watched = JSON.parse(localStorage.getItem('queue')) || [];
      if (watched === null) {
        return [];
      }
      return watched;
    } catch (error) {
      console.log(error);
    }
  }

  function getWatchedData() {
    try {
      const watched = JSON.parse(localStorage.getItem('watched'));
      if (watched === null) {
        return [];
      }
      return watched;
    } catch (error) {
      console.log(error);
    }
  }

  // шукає об'єкт по ID
  function findFilmByIdLs(id) {
    const films = [...getQueueData(), ...getWatchedData()]
    const film = films.find((film) => film.id == id)
    infoFilm = film;
    return film
}
  //! ПОКАЗЫВАЕМ Spinner
  spinner.startSpinner();
  //! ==> Делаем запрос-3 полной информации о фильме для МОДАЛКИ.
  // try {
  //   const results = await themoviedbApiService.getMovieDetails(idFilms);
  //   //! Очищаем контейнер МОДАЛКИ:
  //   clearModalContainer();
  //   //! Перезаписываем в глобальную переменную (films) значение всей (results)
  //   infoFilm = results;
  // } catch (error) {
  //   //! Очищаем контейнер МОДАЛКИ:
  //   clearModalContainer();
  //   //! Прячем Spinner
  //   spinner.removeSpinner();
  //   //! Очищаем контейнер переменную (films):
  //   infoFilm = null;
  //   console.log(error); //!
  //   Notiflix.Notify.failure(`Ошибка запроса: ${error.message}`, {
  //     timeout: 3500,
  //   });
  // }

  //! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
  //! + проверяем на какой странице находимся (т.е. в каком localStorage искать) 
  if (currentPage === 'watched') {
    infoFilm = localStorageWatched.find(option => option.id === idFilms);
  };

  if (currentPage === 'queue') {
    infoFilm = localStorageQueue.find(option => option.id === idFilms);
  };


  //? ------- Получаем и консолим все данные для рендера разметки главной страницы -------
  // console.log("getMovieDetails ==> infoFilm:", infoFilm); //!
  // const titleOrName = infoFilm.title || infoFilm.name;
  // console.log("titleOrName:", titleOrName);
  // console.log("id:", infoFilm.id); //!
  // console.log("poster_path:", infoFilm.poster_path);
  // console.log("Vote:", infoFilm.vote_average);
  // console.log("Votes:", infoFilm.vote_count);
  // console.log("Popularity:", infoFilm.popularity);
  // const originalTitleOrName = infoFilm.original_title || infoFilm.original_name;
  // console.log("Original Title:", originalTitleOrName);
  // const genresAllOneFilm = infoFilm.genres.map(item => item.name).join(", ");
  // console.log("Genre:", genresAllOneFilm); //! строка всех жанров
  // console.log("About:", infoFilm.overview);
  //?_________________КОНЕЦ Получения и консоли всех данных _____________________

  //! ==> Открываем модалку
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');

  //! Прячем Spinner
  spinner.removeSpinner();

  //! Рисование интерфейса
  appendInfoMovieMarkup(infoFilm);

  //! Добавляем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ
  addIventListenerModalBtn();

  //! Вызываем БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE>
  operationLogicWatchedQueue(currentPage, refs, infoFilm, localStorageWatched, localStorageQueue);
}

//* -------------- Ф-ция_4, ДОБАВЛЕНИЕ/УДАЛЕНИЕ просмотренных фильмов в localStorage по кноке ADD TO WATCHED: ----------
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function onWatchedModal() {
  console.log('Вешаю слушателя на кнопку ADD TO WATCHED в МОДАЛКЕ'); //!

  console.log('infoFilm:', infoFilm); //!
  console.log('infoFilm.id:', infoFilm.id); //!

  console.log('Ф-ция_4_refs.watchedModal ==>:', refs.watchedModal); //!

  const textWatchedModal = refs.watchedModal.textContent;
  console.log('textWatchedModal ==> начало:', textWatchedModal); //!

  if (textWatchedModal === 'ADD TO WATCHED') {
    //! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
    if (localStorageWatched.find(option => option.id === infoFilm.id)) {
      Notiflix.Notify.warning(
        `Фильм ${infoFilm.title || infoFilm.name} уже есть в WATCHED`,
        { timeout: 3500 }
      );
      refs.watchedModal.textContent = 'DELETE FROM WATCHED';
      if (refs.watchedModal.classList.contains('colorGreen'))
        refs.watchedModal.classList.remove('colorGreen');
      if (!refs.watchedModal.classList.contains('colorRed'))
        refs.watchedModal.classList.add('colorRed');
      return;
    }
    //! Запись фильма в localStorage
    localStorageWatched = [...localStorageWatched, infoFilm];
    console.log('localStorageWatched:', localStorageWatched); //!
    localStorage.setItem('watched', JSON.stringify(localStorageWatched));
    Notiflix.Notify.success(
      `Фильм ${infoFilm.title || infoFilm.name} добавлен в WATCHED`,
      { timeout: 3500 }
    );
    //! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
    refs.watchedModal.textContent = 'DELETE FROM WATCHED';
    if (refs.watchedModal.classList.contains('colorGreen'))
      refs.watchedModal.classList.remove('colorGreen');
    if (!refs.watchedModal.classList.contains('colorRed'))
      refs.watchedModal.classList.add('colorRed');
    console.log('textWatchedModal ==> конец:', textWatchedModal); //!
  } else {
    if (textWatchedModal === 'DELETE FROM WATCHED') {
      localStorageWatched = localStorageWatched.filter(
        item => item.id !== infoFilm.id
      );
      localStorage.setItem('watched', JSON.stringify(localStorageWatched));
      console.log('Фильм удален из WATCHED'); //!
      Notiflix.Notify.info(
        `Фильм ${infoFilm.title || infoFilm.name} удален из WATCHED`,
        { timeout: 3500 }
      );
      refs.watchedModal.textContent = 'ADD TO WATCHED';
      if (refs.watchedModal.classList.contains('colorRed'))
        refs.watchedModal.classList.remove('colorRed');
      if (!refs.watchedModal.classList.contains('colorGreen'))
        refs.watchedModal.classList.add('colorGreen');

      if (currentPage === 'watched') {
        console.log('currentPage', currentPage); //!
        onCloseModal();
        //! Очищаем контейнер:
        clearMovieContainer();
        appendWatchedQueueMarkup(localStorageWatched);
      }
    }
  }
}

//* ------------------ Ф-ция_5, ДОБАВЛЕНИЕ/УДАЛЕНИЕ просмотренных фильмов в localStorage по кноке ADD TO QUEUE: --------------
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function onQueueModal() {
  console.log('Вешаю слушателя на кнопку ADD TO QUEUE в МОДАЛКЕ'); //!

  console.log('infoFilm:', infoFilm); //!
  console.log('infoFilm.id:', infoFilm.id); //!

  const textQueuedModal = refs.queueModal.textContent;
  console.log('textQueuedModal ==> начало:', textQueuedModal); //!

  if (textQueuedModal === 'ADD TO QUEUE') {
    //! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
    if (localStorageQueue.find(option => option.id === infoFilm.id)) {
      Notiflix.Notify.warning(
        `Фильм ${infoFilm.title || infoFilm.name} уже есть в QUEUE`,
        { timeout: 3500 }
      );
      refs.queueModal.textContent = 'DELETE FROM QUEUE';
      if (refs.queueModal.classList.contains('colorGreen'))
        refs.queueModal.classList.remove('colorGreen');
      if (!refs.queueModal.classList.contains('colorRed'))
        refs.queueModal.classList.add('colorRed');
      return;
    }
    //! Запись фильма в localStorage
    localStorageQueue = [...localStorageQueue, infoFilm];
    console.log('localStorageQueue:', localStorageQueue); //!
    localStorage.setItem('queue', JSON.stringify(localStorageQueue));
    Notiflix.Notify.success(
      `Фильм ${infoFilm.title || infoFilm.name} добавлен в QUEUE`,
      { timeout: 3500 }
    );
    //! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
    refs.queueModal.textContent = 'DELETE FROM QUEUE';
    if (refs.queueModal.classList.contains('colorGreen'))
      refs.queueModal.classList.remove('colorGreen');
    if (!refs.queueModal.classList.contains('colorRed'))
      refs.queueModal.classList.add('colorRed');
    console.log('textQueuedModal ==> конец:', textQueuedModal); //!
  } else {
    if (textQueuedModal === 'DELETE FROM QUEUE') {
      localStorageQueue = localStorageQueue.filter(
        item => item.id !== infoFilm.id
      );
      localStorage.setItem('queue', JSON.stringify(localStorageQueue));
      console.log('Фильм удален из QUEUE');
      Notiflix.Notify.info(
        `Фильм ${infoFilm.title || infoFilm.name} удален из QUEUE`,
        { timeout: 3500 }
      );
      refs.queueModal.textContent = 'ADD TO QUEUE';
      if (refs.queueModal.classList.contains('colorRed'))
        refs.queueModal.classList.remove('colorRed');
      if (!refs.queueModal.classList.contains('colorGreen'))
        refs.queueModal.classList.add('colorGreen');

      if (currentPage === 'queue') {
        console.log('currentPage', currentPage); //!
        onCloseModal();
        //! Очищаем контейнер:
        clearMovieContainer();
        appendWatchedQueueMarkup(localStorageQueue);
      }
    }
  }
}

//* -------------------------- Ф-ция_6, для работы с MY LIBRARY или кнопкой WATCHED: ----------------------
function onMyLibraryWatched() {
  // console.log('Вешаю слушателя на кнопку my-library.js==>WATCHED'); //!

  // refs.watchedModal.textContent = "DELETE FROM WATCHED";
  //! Назначаем тип станицы WATCHED для логики работы кнопок МОДАЛКИ
  currentPage = 'watched';

  //! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
  // refs.resultNotSuccessful.hidden = true;

  //! ПРЯЧЕМ форму со строкой инпута:
  // refs.searchFormAlert.hidden = true;

  //! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
  // refs.watchedQueueHeader.hidden = false;

  //! Кнопка LOAD MORE => показываем и отключаем
  // loadMoreBtn.show();
  // loadMoreBtn.hide(); //! Временно => ПРЯЧЕМ
  // loadMoreBtn.disable();

  //! Очищаем контейнер:
  clearMovieContainer();

  //! Перезаписываем в локальную переменную (results) значение всего (localStorage)
  const results = JSON.parse(localStorage.getItem('watched')) ?? [];
  // console.log('results:', results); //!

  //! Рисование интерфейса
  appendWatchedQueueMarkup(results);

  //! Кнопка LOAD MORE => включаем
  // loadMoreBtn.enable();
}

//* -------------------------- Ф-ция_7, для работы с кнопкой QUEUEв MY LIBRARY : ----------------------
function onQueue() {
  console.log('Вешаю слушателя на кнопку my-library.js==>QUEUE'); //!

  //! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
  currentPage = 'queue';

  //! ПРЯЧЕМ строку предупреждения об отсутствии фильмов:
  // refs.resultNotSuccessful.hidden = true;

  //! ПРЯЧЕМ форму со строкой инпута:
  // refs.searchFormAlert.hidden = true;

  //! ПОКАЗЫВАЕМ блок кнопок WATCHED и QUEUE в header:
  // refs.watchedQueueHeader.hidden = false;

  //! Кнопка LOAD MORE => показываем и отключаем
  // loadMoreBtn.show();
  // loadMoreBtn.hide(); //! Временно => ПРЯЧЕМ
  // loadMoreBtn.disable();

  //! Очищаем контейнер:
  clearMovieContainer();

  //! Перезаписываем в локальную переменную (results) значение всего (localStorage)
  const results = JSON.parse(localStorage.getItem('queue')) ?? [];
  console.log('results:', results); //!

  //! Рисование интерфейса
  appendWatchedQueueMarkup(results);

  //! Кнопка LOAD MORE => включаем
  // loadMoreBtn.enable();
}

//todo ++++++++++++++++++++++++++++++++ Кнопка LOAD MORE (для Ф-ции-запрос ==> ОБЩАЯ - для 1 и 2) ++++++++++++++++++++++++++++++++++++++++++++
//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
// async function onLoadMore() {
//   //! Кнопка LOAD MORE => ВЫключаем
//   // loadMoreBtn.disable()

//   //! проверяеm значения переменной (currentPage)
//   //! и СРАЗУ получаем в переменной films нужный массив объектов
//   //! для отрисовки следующих 20 фильмов
//   await checkResults();

//   // console.log("onLoadMore ==> films:", films); //!

//   //! Очищаем контейнер:
//   clearMovieContainer();

//   //!  Проверка results на ОКОНЧАНИЕ КОЛЛЕКЦИИИ
//   // checkResultsForEnd(endOfCollection);

//   //! Рисование интерфейса
//   appendMoviesMarkup(films);

//   //! Кнопка LOAD MORE => включаем
//   // loadMoreBtn.enable();
// }
//todo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//* ---------------------------------------------- Функции-вызывалки ;-) ----------------------------------------------
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
async function checkResults() {
  if (currentPage === 'home-Filmoteka') {
    const results = await themoviedbApiService.getTrendingAllDay();
    films = results;
    // console.log("home-Filmoteka ==> films:", films); //!
  } else {
    if (currentPage === 'Movie search') {
      const results = await themoviedbApiService.getSearchMovies();
      films = results;
      // console.log("Movie search ==> films:", films); //!
    } else {
      return;
    }
  }
}

//! ++++++++++++++ Ф-ция, к-рая получает id жанра и возвращает тип жанра ++++++++++++++

//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function clearMovieContainer() {
  refs.moviesCards.innerHTML = '';
}

//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
function clearModalContainer() {
  refs.InfoMovie.innerHTML = '';
}

//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++

//! +++++++++++++++++++++++ Функции для МОДАЛКИ +++++++++++++++++++++++++++
//? ----- для тестирования открытия модалки по кнопке
// function onOpenModal() {
//     window.addEventListener('keydown', onEscKeyPress);
//     document.body.classList.add('show-modal');
// }

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  //! Очищаем контейнер МОДАЛКИ:
  clearModalContainer();
}

function onBackdropClick(event) {
  // console.log(event.currentTarget); //!
  // console.log(event.target); //!
  if (event.currentTarget === event.target) {
    // console.log('Кликнули именно в бекдроп!!!!'); //!
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  // console.log(event.code); //!
  // const ESC_KEY_CODE = 'Escape';
  // const isEscKey = event.code === ESC_KEY_CODE;
  // if (isEscKey) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
//!_____________________________________________________________________

//! +++++++++ Создаем слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ ++++++++++++++
function addIventListenerModalBtn() {
  refs.watchedModal = document.querySelector(
    'button[data-action="modal-add-watched"]'
  );
  refs.queueModal = document.querySelector(
    'button[data-action="modal-add-queue"]'
  );

  console.log('addIventListenerModalBtn_refs.watchedModal:', refs.watchedModal); //!
  console.log('addIventListenerModalBtn_refs.queueModal:', refs.queueModal); //!

  refs.watchedModal.addEventListener('click', onWatchedModal);
  refs.queueModal.addEventListener('click', onQueueModal);

  //! -----------------------------------------------------------------------------
  // refs.watchedModal.addEventListener('click', () => {
  //     console.log("Вешаю ГОТОВОГО слушателя на кнопку ADD TO WATCHED в МОДАЛКЕ"); //!
  // });

  // refs.queueModal.addEventListener('click', () => {
  //     console.log("Вешаю ГОТОВОГО слушателя на кнопку ADD TO QUEUE в МОДАЛКЕ"); //!
  // });
}

//!+++++++++++++ БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE> ++++++++++++++++++
// ?  Теперь импортируем из файла './js/operationLogicWatchedQueue.js';
//----------------------------------------------------------------------------------------------------
// function operationLogicWatchedQueue() {
//   console.log('БЛОК ЛОГИКИ_refs.watchedModal ==>:', refs.watchedModal); //!
//   console.log('БЛОК ЛОГИКИ_refs.queueModal ==>:', refs.queueModal); //!
//   //! Устанвливаем начальные значения textContent для кнопок WATCHED и QUEUE в модалке
//   //! в зависимости от того, на какой странице находится пользователь
//   refs.watchedModal.textContent = 'ADD TO WATCHED';
//   if (refs.watchedModal.classList.contains('colorRed'))
//     refs.watchedModal.classList.remove('colorRed');
//   if (!refs.watchedModal.classList.contains('colorGreen'))
//     refs.watchedModal.classList.add('colorGreen');
//   if (currentPage === 'watched') {
//     refs.watchedModal.textContent = 'DELETE FROM WATCHED';
//     if (refs.watchedModal.classList.contains('colorGreen'))
//       refs.watchedModal.classList.remove('colorGreen');
//     if (!refs.watchedModal.classList.contains('colorRed'))
//       refs.watchedModal.classList.add('colorRed');
//   }
//   refs.queueModal.textContent = 'ADD TO QUEUE';
//   if (refs.queueModal.classList.contains('colorRed'))
//     refs.queueModal.classList.remove('colorRed');
//   if (!refs.queueModal.classList.contains('colorGreen'))
//     refs.queueModal.classList.add('colorGreen');
//   refs.queueModal.classList.add('colorGreen');
//   if (currentPage === 'queue') {
//     refs.queueModal.textContent = 'DELETE FROM QUEUE';
//     if (refs.queueModal.classList.contains('colorGreen'))
//       refs.queueModal.classList.remove('colorGreen');
//     if (!refs.queueModal.classList.contains('colorRed'))
//       refs.queueModal.classList.add('colorRed');
//   }
// };
//! __________________________________________________________________________________________________________________




//* --------------------------------------- Функции-разметки ---------------------------------------------------------
//! +++++++++++++++++++++++++++++ Markup WATCHED и QUEUE ++++++++++++++++++++++++++++++++++++++++++++++
//*  Ф-ция-then, к-рая отрисовывает интерфейс ВСЕХ карточек на странице:
function appendWatchedQueueMarkup(results) {
  //!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
  refs.moviesCards.insertAdjacentHTML(
    'beforeend',
    createWatchedQueueCardsMarkup(results)
  );
}

//! --------------------------------------------------------------------------------------------
//*   Ф-ция, к-рая создает новую разметку для ОДНОЙ карточки из ВСЕХ карточек:
function createWatchedQueueCardsMarkup(results) {
  // console.log('results:', results);
  return results
    .map(
      ({
        id,
        poster_path,
        title,
        name,
        genres,
        first_air_date,
        release_date,
        vote_average,
      }) => {
        //? Получаем строку со всеми жанрами
        const genresAllOneFilm = genres.map(item => item.name).join(', ');
        // console.log("genresAllOneFilm:", genresAllOneFilm); //!

        //? Получаем значение года из строки даты:
        const date = first_air_date || release_date || '???? - ?? - ??';
        // console.log("date:", date); //!
        const yearDate = date.substr(0, 4); //! значение года из строки даты:
        // console.log("yearDate:", yearDate); //!

        //?Убираем лишние знаки после запятой
        const voteAverage = vote_average.toFixed(1);
        // console.log("voteAverage:", voteAverage); //!

        //? Делаем заглавныее буквы в названии фильма (пока НЕ РАБОТАЕТ capitalsName)
        let capitalsTitle = title;
        if (title) {
          capitalsTitle = title.toUpperCase();
          // const title = title.toUpperCase();
          // console.log("capitalsTitle:", capitalsTitle); //!
        }

        let capitalsName = name;
        if (name) {
          const capitalsName = name.toUpperCase(); //!!! тут ошибка сделана СПЕЦИАЛЬНО!!!
          // const name = name.toUpperCase();
          // console.log("capitalsName:", capitalsName); //!
        }

        return `
                <li class="gallery__item" key=${id}>
                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${poster_path}" alt="${title || name
          }" />

                    <div class="gallery__thumb">
                        <h2 class="gallery__title">${capitalsTitle || capitalsName}</h2>
                        <p class="gallery__text">${genresAllOneFilm} &nbsp|&nbsp ${yearDate}&nbsp &nbsp${voteAverage}</p>
                    </div>
                </li>
                `;
      }
    )
    .join('');
}

//! +++++++++++++++++++++++++++++ Markup infoFilm ++++++++++++++++++++++++++++++++++++++++++++++
//*  Ф-ция-then, к-рая отрисовывает интерфейс ОДНОГО фильма в МОДАЛКЕ:
function appendInfoMovieMarkup(infoFilm) {
  //!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
  refs.InfoMovie.insertAdjacentHTML(
    'afterbegin',
    createInfoMovieMarkup(infoFilm)
  );

  //! Добавляем ГОТОВЫХ слушателей на кнопках <ADD TO WATCHED> и <ADD TO QUEUE> для МОДАЛКИ
  // addIventListenerModalBtn(); //! НЕ СЮДА!!!
}

//! --------------------------------------------------------------------------------------------
//*   Ф-ция, к-рая создает новую разметку ОДНОГО фильма в МОДАЛКЕ:
function createInfoMovieMarkup(infoFilm) {
  // console.log("createInfoMovieMarkup ==> infoFilm:", infoFilm); //!
  const {
    id,
    poster_path,
    title,
    name,
    vote_average,
    vote_count,
    popularity,
    original_title,
    original_name,
    genres,
    overview,
  } = infoFilm;

  //? Получаем строку со всеми жанрами
  const genresAllOneFilm = genres.map(item => item.name).join(', ');

  //? Делаем заглавныее буквы в названии фильма (пока НЕ РАБОТАЕТ capitalsName)
  let capitalsTitle = title;
  if (title) {
    capitalsTitle = title.toUpperCase();
    // const title = title.toUpperCase();
    // console.log("capitalsTitle:", capitalsTitle); //!
  }

  let capitalsName = name;
  if (name) {
    const capitalsName = name.toUpperCase(); //!!! тут ошибка сделана СПЕЦИАЛЬНО!!!
    // const name = name.toUpperCase();
    // console.log("capitalsName:", capitalsName); //!
  }

  return `
        <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title || name
    }" />
        
        <div class="modal-сontent">
            <h3 class="modal-title-film">${capitalsTitle || capitalsName}</h3>
            <table class="modal-info">
                <tbody>
                    <tr>
                        <td class="modal-key">Vote/Votes</td>
                        <td class="modal-parametr"><span class="modal-parametr-vote">${vote_average}</span> / ${vote_count}</td>
                    </tr>
                    <tr>
                        <td class="modal-key">Popularity</td>
                        <td class="modal-parametr">${popularity}</td>
                    </tr>
                    <tr>
                        <td class="modal-key">Original Title</td>
                        <td class="modal-parametr">${original_title || original_name
    }</td>
                    </tr>
                    <tr>
                        <td class="modal-key">Genre</td>
                        <td class="modal-parametr">${genresAllOneFilm}</td>
                    </tr>
                </tbody>
            </table>
            <div class="modal-about-film">
                <h5 class="modal-about-title">ABOUT</h5>
                <span class="modal-about-text">${overview}</span>
            </div>
        
            <div class="modal-button" data-action="library-btn">
                <button type="button" class="modal-button-watched" data-action="modal-add-watched">ADD TO WATCHED</button>

                <button type="button" class="modal-button-queue" data-action="modal-add-queue">ADD TO QUEUE</button>

            </div>
        </div>
    `;
}

// --KHARLAMOVA TETIANA----------------МОДАЛЬНЕ ВІКНО З КОМАНДОЮ----------------------------------
(() => {
  const refsModalTeam = {
    openModalTeamLink: document.querySelector('.team-link'),
    closeModalTeamBtn: document.querySelector('.team-close-btn'),
    modalTeam: document.querySelector('.backdrop-team'),
    body: document.querySelector('body'),
  };
  const { openModalTeamLink, closeModalTeamBtn, modalTeam, body } =
    refsModalTeam;
  openModalTeamLink.addEventListener('click', onOpenModalTeam);
  closeModalTeamBtn.addEventListener('click', onCloseModalTeam);
  modalTeam.addEventListener('click', onBackdropTeamClick);

  function onCloseModalTeam(e) {
    modalTeam.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
    window.removeEventListener('keydown', onEscKeyPress);
  }

  function onOpenModalTeam(e) {
    window.addEventListener('keydown', onEscKeyPress);
    modalTeam.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
  }
  function onEscKeyPress(e) {
    if (e.key === 'Escape') {
      onCloseModalTeam();
    }
  }

  function onBackdropTeamClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModalTeam();
    }
  }
})();
// -----------------------END OF МОДАЛЬНЕ ВІКНО З КОМАНДОЮ----------------------------
