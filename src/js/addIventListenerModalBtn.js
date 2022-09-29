export default function addIventListenerModalBtn() {

    const btnWatched = document.querySelector('[data-action="modal-add-watched"]');
    console.log("btnModalWatched:", btnWatched);

    btnWatched.addEventListener('click', () => {
        // alert('Добавлено в просмотренные');
        console.log("Вешаю слушателя на кнопку ADD TO WATCHED в МОДАЛКЕ");
    });

    

    const btnModalQueue = document.querySelector('[data-action="modal-add-queue"]');
    console.log("btnModalQueue:", btnModalQueue);

    btnModalQueue.addEventListener('click', () => {
        // alert('Добавлено в очередь');;
        console.log("Вешаю слушателя на кнопку ADD TO QUEUE в МОДАЛКЕ");
    });
    
}

// function addIventListenerModalBtn() {
   
// }

