import Notiflix from 'notiflix';
import spinner from './js/preLoader';
import './js/login-modal';
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
//* +++++++++++++++++++++++++++++++ Создаем ВСЕХ слушателей +++++++++++++++++++++++++++++++++++++++++

//! Создаем слушателя событий на кнопке MY LIBRARY:
refs.myLibraryBtn.addEventListener('click', onMyLibraryWatched);
//! Создаем слушателя событий на <section class="section-hero"> ==> на poster_path:
refs.movieDetails.addEventListener('click', onMovieDetails);

//! +++++++++++++++++++ Создаем слушателей для МОДАЛКИ ++++++++++++++++++++++++
// refs.openModalBtn.addEventListener('click', onOpenModal); //? ----- для тестирования
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

//! ++++ Создаем слушателей на кнопках WATCHED и QUEUE для страницы MY LIBRARY +++++++
refs.watchedHeader.addEventListener('click', onMyLibraryWatched);
refs.queueHeader.addEventListener('click', onQueue);

//* +++++++++++++++++++++++++++++++ Создаем ГЛОБАЛЬНЫЕ переменные +++++++++++++++++++++++++++++++++++++++++

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

//* -------------------------- Ф-ция-запрос_3, к-рая запрашивает полную информацию об одном фильме: ----------------------
//шукаємо по id фільм і виводимо його на сторінку
async function onMovieDetails(event) {
  if (event.target.closest('li')) {
    const itemId = event.target.closest('li');
    idFilms = Number(itemId.getAttribute('key'));
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
    const films = [...getQueueData(), ...getWatchedData()];
    const film = films.find(film => film.id == id);
    infoFilm = film;
    return film;
  }
  //! ПОКАЗЫВАЕМ Spinner
  spinner.startSpinner();

  //! Достаем из localStorage полную информации о фильме для МОДАЛКИ.
  //! + проверяем на какой странице находимся (т.е. в каком localStorage искать)
  if (currentPage === 'watched') {
    infoFilm = localStorageWatched.find(option => option.id === idFilms);
  }

  if (currentPage === 'queue') {
    infoFilm = localStorageQueue.find(option => option.id === idFilms);
  }
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
  operationLogicWatchedQueue(
    currentPage,
    refs,
    infoFilm,
    localStorageWatched,
    localStorageQueue
  );
}

//* -------------- Ф-ция_4, ДОБАВЛЕНИЕ/УДАЛЕНИЕ просмотренных фильмов в localStorage по кноке ADD TO WATCHED: ----------
//! +++ Запрос полной информации о фильме для МОДАЛКИ +++
function onWatchedModal() {
  const textWatchedModal = refs.watchedModal.textContent;

  if (textWatchedModal === 'ADD TO WATCHED') {
    //! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
    if (localStorageWatched.find(option => option.id === infoFilm.id)) {
      Notiflix.Notify.warning(
        `Фильм ${infoFilm.title || infoFilm.name} уже есть в WATCHED`,
        {
          position: 'center-top',
          clickToClose: true,
          timeout: 2500,
        }
      );

      refs.watchedModal.textContent = 'DELETE FROM WATCHED';
      if (refs.watchedModal.classList.contains('modal-button-add-watched'))
        refs.watchedModal.classList.remove('modal-button-add-watched');
      if (!refs.watchedModal.classList.contains('modal-button-delete'))
        refs.watchedModal.classList.add('modal-button-delete');
      return;
    }
    //! Запись фильма в localStorage
    localStorageWatched = [...localStorageWatched, infoFilm];
    localStorage.setItem('watched', JSON.stringify(localStorageWatched));
    Notiflix.Notify.success(
      `Фильм ${infoFilm.title || infoFilm.name} добавлен в WATCHED`,
      {
        position: 'center-top',
        clickToClose: true,
        timeout: 2500,
      }
    );

    //! Смена названия (textContent) кнопки на "DELETE FROM WATCHED"
    refs.watchedModal.textContent = 'DELETE FROM WATCHED';
    if (refs.watchedModal.classList.contains('modal-button-add-watched'))
      refs.watchedModal.classList.remove('modal-button-add-watched');
    if (!refs.watchedModal.classList.contains('modal-button-delete'))
      refs.watchedModal.classList.add('modal-button-delete');
  } else {
    if (textWatchedModal === 'DELETE FROM WATCHED') {
      localStorageWatched = localStorageWatched.filter(
        item => item.id !== infoFilm.id
      );
      localStorage.setItem('watched', JSON.stringify(localStorageWatched));

      Notiflix.Notify.info(
        `Фильм ${infoFilm.title || infoFilm.name} удален из WATCHED`,
        {
          position: 'center-top',
          clickToClose: true,
          timeout: 2500,
        }
      );

      refs.watchedModal.textContent = 'ADD TO WATCHED';
      if (refs.watchedModal.classList.contains('modal-button-delete'))
        refs.watchedModal.classList.remove('modal-button-delete');
      if (!refs.watchedModal.classList.contains('modal-button-add-watched'))
        refs.watchedModal.classList.add('modal-button-add-watched');

      if (currentPage === 'watched') {
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
  const textQueuedModal = refs.queueModal.textContent;

  if (textQueuedModal === 'ADD TO QUEUE') {
    //! Блокировка повторной записи фильма в localStorage (ВРЕМЕННО)
    if (localStorageQueue.find(option => option.id === infoFilm.id)) {
      Notiflix.Notify.warning(
        `Фильм ${infoFilm.title || infoFilm.name} уже есть в QUEUE`,
        {
          position: 'center-top',
          clickToClose: true,
          timeout: 2500,
        }
      );

      refs.queueModal.textContent = 'DELETE FROM QUEUE';
      if (refs.queueModal.classList.contains('modal-button-add-queue'))
        refs.queueModal.classList.remove('modal-button-add-queue');
      if (!refs.queueModal.classList.contains('modal-button-delete'))
        refs.queueModal.classList.add('modal-button-delete');
      return;
    }
    //! Запись фильма в localStorage
    localStorageQueue = [...localStorageQueue, infoFilm];
    localStorage.setItem('queue', JSON.stringify(localStorageQueue));

    Notiflix.Notify.success(
      `Фильм ${infoFilm.title || infoFilm.name} добавлен в QUEUE`,
      {
        position: 'center-top',
        clickToClose: true,
        timeout: 2500,
      }
    );

    //! Смена названия (textContent) кнопки на "DELETE FROM QUEUE"
    refs.queueModal.textContent = 'DELETE FROM QUEUE';
    if (refs.queueModal.classList.contains('modal-button-add-queue'))
      refs.queueModal.classList.remove('modal-button-add-queue');
    if (!refs.queueModal.classList.contains('modal-button-delete'))
      refs.queueModal.classList.add('modal-button-delete');
  } else {
    if (textQueuedModal === 'DELETE FROM QUEUE') {
      localStorageQueue = localStorageQueue.filter(
        item => item.id !== infoFilm.id
      );
      localStorage.setItem('queue', JSON.stringify(localStorageQueue));
      Notiflix.Notify.info(
        `Фильм ${infoFilm.title || infoFilm.name} удален из QUEUE`,
        {
          position: 'center-top',
          clickToClose: true,
          timeout: 2500,
        }
      );

      refs.queueModal.textContent = 'ADD TO QUEUE';
      if (refs.queueModal.classList.contains('modal-button-delete'))
        refs.queueModal.classList.remove('modal-button-delete');
      if (!refs.queueModal.classList.contains('modal-button-add-queue'))
        refs.queueModal.classList.add('modal-button-add-queue');

      if (currentPage === 'queue') {
        onCloseModal();
        //! Очищаем контейнер:
        clearMovieContainer();
        appendWatchedQueueMarkup(localStorageQueue);
        // refs.queueHeader.classList.t oggle('current-page');
      }
    }
  }
}

//* -------------------------- Ф-ция_6, для работы с MY LIBRARY или кнопкой WATCHED: ----------------------
function onMyLibraryWatched() {
  currentPage = 'watched';
  //! Очищаем контейнер:
  clearMovieContainer();
  //! Перезаписываем в локальную переменную (results) значение всего (localStorage)
  const results = JSON.parse(localStorage.getItem('watched')) ?? [];
  //! Рисование интерфейса
  appendWatchedQueueMarkup(results);

    refs.watchedHeader.classList.add('current-page');
  refs.queueHeader.classList.remove('current-page');
}

//* -------------------------- Ф-ция_7, для работы с кнопкой QUEUEв MY LIBRARY : ----------------------
function onQueue() {
  //! Назначаем тип станицы QUEUE для логики работы кнопок МОДАЛКИ
  currentPage = 'queue';
  //! Очищаем контейнер:
  clearMovieContainer();

  //! Перезаписываем в локальную переменную (results) значение всего (localStorage)
  const results = JSON.parse(localStorage.getItem('queue')) ?? [];

  //! Рисование интерфейса ;
  refs.watchedHeader.classList.remove('current-page');
  refs.queueHeader.classList.add('current-page');
  appendWatchedQueueMarkup(results);
}

//* ---------------------------------------------- Функции-вызывалки ;-) ----------------------------------------------
//! ++++++++++++++ Ф-ция, к-рая проверяет значения переменной (currentPage) для определения типа запроса в кнопке LOAD MORE ++++++++++++++
async function checkResults() {
  if (currentPage === 'home-Filmoteka') {
    const results = await themoviedbApiService.getTrendingAllDay();
    films = results;
  } else {
    if (currentPage === 'Movie search') {
      const results = await themoviedbApiService.getSearchMovies();
      films = results;
    } else {
      return;
    }
  }
}

//! ++++++++++++++ Ф-ция, к-рая очищает контейнер при новом вводе данных в input form: ++++++++++++++
function clearMovieContainer() {
  refs.moviesCards.innerHTML = '';
}

//! ++++++++++++++ Ф-ция, к-рая очищает контейнер МОДАЛКИ: ++++++++++++++
function clearModalContainer() {
  refs.InfoMovie.innerHTML = '';
}

//! ++++++++++++++ Ф-ция, к-рая  прверяет results на пустой массив: ++++++++++++++
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  //! Очищаем контейнер МОДАЛКИ:
  clearModalContainer();
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
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

  refs.watchedModal.addEventListener('click', onWatchedModal);
  refs.queueModal.addEventListener('click', onQueueModal);
}

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

//*   Ф-ция, к-рая создает новую разметку для ОДНОЙ карточки из ВСЕХ карточек:
function createWatchedQueueCardsMarkup(results) {
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

        //? Получаем значение года из строки даты:
        const date = first_air_date || release_date || '???? - ?? - ??';
        const yearDate = date.substr(0, 4);

        //?Убираем лишние знаки после запятой
        const voteAverage = vote_average.toFixed(1);

        //? Делаем заглавныее буквы в названии фильма (пока НЕ РАБОТАЕТ capitalsName)
        let capitalsTitle = title;
        if (title) {
          capitalsTitle = title.toUpperCase();
        }

        let capitalsName = name;
        if (name) {
          const capitalsName = name.toUpperCase();
        }

        return `
                <li class="gallery__item" key=${id}>
                    <img class="gallery__img" src="https://image.tmdb.org/t/p/w780${poster_path}" alt="${
          title || name
        }" />

                    <div class="gallery__thumb">
                        <h2 class="gallery__title">${
                          capitalsTitle || capitalsName
                        }</h2>
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
}

//! --------------------------------------------------------------------------------------------
//*   Ф-ция, к-рая создает новую разметку ОДНОГО фильма в МОДАЛКЕ:
function createInfoMovieMarkup(infoFilm) {
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
  }

  let capitalsName = name;
  if (name) {
    const capitalsName = name.toUpperCase();
  }

  return `
        <img class="modal-img" src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${
    title || name
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
                        <td class="modal-parametr">${
                          original_title || original_name
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
                <button type="button" class="modal-button-add-watched" data-action="modal-add-watched">ADD TO WATCHED</button>

                <button type="button" class="modal-button-add-queue" data-action="modal-add-queue">ADD TO QUEUE</button>

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
