// import Notiflix from 'notiflix';


// ! +++++++++++++++++++++++ БЛОК ЛОГИКИ работы кнопок <ADD TO WATCHED> и <ADD TO QUEUE> +++++++++++++++++++++++
export default function operationLogicWatchedQueue(currentPage, refs, infoFilm, localStorageWatched, localStorageQueue) {
    //? ------------------------------------------- кнопки WATCHED и QUEUE -------------------------------------------
    //! Устанвливаем начальные значения textContent для кнопки WATCHED в модалке
    refs.watchedModal.textContent = "ADD TO WATCHED";
    if (refs.watchedModal.classList.contains("modal-button-delete")) refs.watchedModal.classList.remove("modal-button-delete");
    if (!refs.watchedModal.classList.contains("modal-button-add-watched")) refs.watchedModal.classList.add("modal-button-add-watched");
    //! Устанвливаем начальные значения textContent для кнопки QUEUE в модалке
    refs.queueModal.textContent = "ADD TO QUEUE";
    if (refs.queueModal.classList.contains("modal-button-delete")) refs.queueModal.classList.remove("modal-button-delete");
    if (!refs.queueModal.classList.contains("modal-button-add-queue")) refs.queueModal.classList.add("modal-button-add-queue");
    //! ИЛИ: в зависимости от того, на какой странице находится пользователь:
    //! 1.Логика работы кнопок на странице <HOME или Filmoteka> и <Movie search> если фильм уже есть в localStorage
    if (currentPage === "home-Filmoteka" || currentPage === "Movie search") {
        // console.log("currentPage = home-Filmoteka && Movie search"); //!
        //! Замена "ADD TO WATCHED" на "DELETE FROM WATCHED" если фильм уже есть в localStorage
        if (localStorageWatched.find(option => option.id === infoFilm.id)) {
            Notiflix.Notify.warning(
              `Фильм ${infoFilm.title || infoFilm.name} уже есть в WATCHED`,
              {
                position: 'center-top',
                clickToClose: true,
                timeout: 2500,
              }
            );

            refs.watchedModal.textContent = "DELETE FROM WATCHED";
            if (refs.watchedModal.classList.contains("modal-button-add-watched")) refs.watchedModal.classList.remove("modal-button-add-watched");
            if (!refs.watchedModal.classList.contains("modal-button-delete")) refs.watchedModal.classList.add("modal-button-delete");
        };
        //! Замена "ADD TO QUEUE" на "DELETE FROM QUEUE" если фильм уже есть в localStorage
        if (localStorageQueue.find(option => option.id === infoFilm.id)) {
            Notiflix.Notify.warning(
              `Фильм ${infoFilm.title || infoFilm.name} уже есть в QUEUE`,
              {
                position: 'center-top',
                clickToClose: true,
                timeout: 2500,
              }
            );

            refs.queueModal.textContent = "DELETE FROM QUEUE";
            if (refs.queueModal.classList.contains("modal-button-add-queue")) refs.queueModal.classList.remove("modal-button-add-queue");
            if (!refs.queueModal.classList.contains("modal-button-delete")) refs.queueModal.classList.add("modal-button-delete");
        };
    };
    //? ------------------------------------------- кнопка WATCHED -------------------------------------------
    //! 2.Замена "ADD TO WATCHED" на "DELETE FROM WATCHED" если пользователь на странице MY LIBRARY==>WATCHED
    if (currentPage === "watched") {
        refs.watchedModal.textContent = "DELETE FROM WATCHED";
        if (refs.watchedModal.classList.contains("modal-button-add-watched")) refs.watchedModal.classList.remove("modal-button-add-watched");
        if (!refs.watchedModal.classList.contains("modal-button-delete")) refs.watchedModal.classList.add("modal-button-delete");
        //! Замена "ADD TO QUEUE" на "DELETE FROM QUEUE" если пользователь на странице MY LIBRARY==>WATCHED и фильм уже есть в localStorage-QUEUE
        if (localStorageQueue.find(option => option.id === infoFilm.id)) {
            Notiflix.Notify.warning(
              `Фильм ${infoFilm.title || infoFilm.name} уже есть в QUEUE`,
              {
                position: 'center-top',
                clickToClose: true,
                timeout: 2500,
              }
            );

            refs.queueModal.textContent = "DELETE FROM QUEUE";
            if (refs.queueModal.classList.contains("modal-button-add-queue")) refs.queueModal.classList.remove("modal-button-add-queue");
            if (!refs.queueModal.classList.contains("modal-button-delete")) refs.queueModal.classList.add("modal-button-delete");
        };
    };
    //? ------------------------------------------- кнопка QUEUE -------------------------------------------
    //! 3.Замена "ADD TO QUEUE" на "DELETE FROM QUEUE" если пользователь на странице MY LIBRARY==>QUEUE
    // refs.queueModal.classList.add("modal-button-add-watched");
    if (currentPage === "queue") {
        refs.queueModal.textContent = "DELETE FROM QUEUE";
        if (refs.queueModal.classList.contains("modal-button-add-queue")) refs.queueModal.classList.remove("modal-button-add-queue");
        if (!refs.queueModal.classList.contains("modal-button-delete")) refs.queueModal.classList.add("modal-button-delete");
        //! Замена "ADD TO WATCHED" на "DELETE FROM WATCHED" если пользователь на странице MY LIBRARY==>QUEUE и фильм уже есть в localStorage-WATCHED
        if (localStorageWatched.find(option => option.id === infoFilm.id)) {
            Notiflix.Notify.warning(
              `Фильм ${infoFilm.title || infoFilm.name} уже есть в WATCHED`,
              {
                position: 'center-top',
                clickToClose: true,
                timeout: 2500,
              }
            );

            refs.watchedModal.textContent = "DELETE FROM WATCHED";
            if (refs.watchedModal.classList.contains("modal-button-add-watched")) refs.watchedModal.classList.remove("modal-button-add-watched");
            if (!refs.watchedModal.classList.contains("modal-button-delete")) refs.watchedModal.classList.add("modal-button-delete");
        };
    };
};

