export default function addIventListenerModalBtn() {
    const btnWatched = document.querySelector('[data-action="modal-add-watched"]');
    console.log("btnModalWatched:", btnWatched);
    const btnModalQueue = document.querySelector('[data-action="modal-add-queue"]');
    console.log("btnModalQueue:", btnModalQueue);
    btnModalQueue.addEventListener('click', () => {
        alert('Добавлено в очередь');
    });
    btnWatched.addEventListener('click', () => {
        alert('Добавлено в просмотренные');
    });
}

// function addIventListenerModalBtn() {
   
// }

