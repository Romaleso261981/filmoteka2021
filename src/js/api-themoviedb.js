import axios from 'axios';


//! +++++++++++++++++++++++++++++++++++++ Константы для URL-запросов: ++++++++++++++++++++++++++++++++++++
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '41b230c5977baa736e324532e16fdadb';

const END_POINTS_1 = "trending/all/week" //!  /trending/all/day ==> список самых популярных фильмов на сегодня для создания коллекции на главной странице.

const END_POINTS_2 = "search/movie" //!  /search/search-movies ==> поиск кинофильма по ключевому слову на странице фильмов.
// const query = "avatar" //? для тестирования
// const page = 1; //? можно добавить в строку запроса - для тестирования

const END_POINTS_3 = "movie" //!  /movies/get-movie-details ==> запрос полной информации о фильме для страницы кинофильма.
// const movie_id = 616037 //?

//!-----------------------------------------------------------------------------------------------------------------------------------------------------------
//! Формируем строки URL-запросов:
// const url_1 = `${BASE_URL}/${END_POINTS_1}?api_key=${API_KEY}`;
// console.log("url_1: ", url_1); //!

// const url_2 = `${BASE_URL}/${END_POINTS_2}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;
// console.log("url_2: ", url_2); //!

// const url_3 = `${BASE_URL}/${END_POINTS_3}/${movie_id}?api_key=${API_KEY}&language=en-US`;
// console.log("url_3: ", url_3); //!

// const url_4 = `${BASE_URL}/${END_POINTS_4}/${movie_id}/${CREDITS}?api_key=${API_KEY}&language=en-US`;
// console.log("url_4: ", url_4); //!

// const url_5 = `${BASE_URL}/${END_POINTS_5}/${movie_id}/${REVIEWS}?api_key=${API_KEY}&language=en-US&page=${page}`;
// console.log("url_5: ", url_5); //!
//!___________________________________________________________________________________________________________





import{renderPagination} from './pagination'

export default class ThemoviedbApiService {
    constructor() {
        this.searchQuery = ""; //! это то, что приходит в input
        //! Пагинация:
        this.page = 1; //! номер страницы (группы) в axios-запросе
        this.per_page = 40; // по ТЗ надо 40
    }

    //* ++++++++++++++++++++++++++++++++++++++++ Формируем URL-запросы: ++++++++++++++++++++++++++++++++++++++++
    //! 1 - Загрузка популярных фильмов на главную (первую) страницу 
    async getTrendingAllDay() {
        const url_1 = `${BASE_URL}/${END_POINTS_1}?api_key=${API_KEY}&page=${this.page}`;
        // console.log("url_1: ", url_1); //!
        const response = await axios.get(url_1) //! 1 
        const { results, total_results} = response.data;
        renderPagination (total_results)
        this.incrementPage();
        // console.log("getTrendingAllDay ==> this.page: ", this.page); //!
        return results;
    }
    async getTrendingAllDayPaginationClick() {
        const url_1 = `${BASE_URL}/${END_POINTS_1}?api_key=${API_KEY}&page=${this.page}`;
        const response = await axios.get(url_1)
        return response.data.results;
    }

    //! 2 - Поиск кинофильма по ключевому слову из input form
    async getSearchMovies() {
        const url_2 = `${BASE_URL}/${END_POINTS_2}?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
        console.log("url_2: ", url_2); //!
        const response = await axios.get(url_2) //!
        const { results, total_results} = response.data;
        renderPagination (total_results)
        this.incrementPage();
        console.log("getSearchMovies ==> this.page: ", this.page); //!
        return results;
    }
    async getSearchMoviesPaginationClick() {
        const url_2 = `${BASE_URL}/${END_POINTS_2}?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;
        const response = await axios.get(url_2) //!
         return response.data.results;
    } 


    //! 3 - Запрос полной информации о фильме для МОДАЛКИ.
    async getMovieDetails(idFilms) {
        const url_3 = `${BASE_URL}/${END_POINTS_3}/${idFilms}?api_key=${API_KEY}&language=en-US`;
        console.log("url_3: ", url_3); //!
        const response = await axios.get(url_3) //!
        const results = response.data
        return results;
    }
    //*  ________________________________________________________________________________________________________


    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    changePage(newPage){
        this.page=newPage
    }
}
