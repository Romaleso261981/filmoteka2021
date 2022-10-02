import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {themoviedbApiService, currentPage, clearMovieContainer, appendHitsMarkup} from "../index"
import spinner from './preLoader';
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

async function callBack (e) {  
  try{
  themoviedbApiService.changePage(e.page)
spinner.startSpinner()
   const dataFilms = await checkRequest(); 
   clearMovieContainer()
   console.log(dataFilms);
   spinner.removeSpinner() 
   handleScrollUp  ()
   appendHitsMarkup(dataFilms)
    }catch (error) { 
    console.log(error);
    }}
    
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

function handleScrollUp  () {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
