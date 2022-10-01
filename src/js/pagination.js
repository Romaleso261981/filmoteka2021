import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {themoviedbApiService, currentPage, clearMovieContainer, appendHitsMarkup} from "../index"
const paginationContainer = document.querySelector('.tui-pagination')
export const renderPagination = (totalItems = 1) => {
 
if (parseInt(totalItems) < 20) return (paginationContainer.innerHTML = '');
  
    const pagination = new Pagination(paginationContainer, {
      totalItems,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
    });
  pagination.on('beforeMove', callBack);
  };

async function checkRequest (){
 
  if (currentPage === "home-Filmoteka") {
   const  results =  await themoviedbApiService.getTrendingAllDayPaginationClick();
    return results
} else {
    if (currentPage === "Movie search") {
      const  results= await themoviedbApiService.getSearchMoviesPaginationClick();
      return results 
    } else {
       
    }    
}} 

async function callBack (e) {  
  try{
  themoviedbApiService.changePage(e.page)  
   const dataFilms = await checkRequest(); 
   clearMovieContainer()
   console.log(dataFilms);
    appendHitsMarkup(dataFilms)
  }catch (error) { 
    console.log(error);
    }}


