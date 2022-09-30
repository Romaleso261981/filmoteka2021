import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {themoviedbApiService} from "../index"
const paginationContainer = document.querySelector('.tui-pagination')
export const renderPagination = (totalItems = 1) => {
    
if (parseInt(totalItems) < 20) return (paginationContainer.innerHTML = '');
  
    const pagination = new Pagination(paginationContainer, {
      totalItems,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
    });
  pagination.on('beforeMove', (e) => {
        themoviedbApiService.changePage(e.page)  
        //первіряю консолем чи змінюється themoviedbApiServi.page 
        console.log(themoviedbApiService.page); 
        // Має бути функція, яка буде робити запити при кліки на кнопки пагінації та рендерити перелік відповідних фільмів
    });
  };

