import { onWatchedModal } from '../index';
import { onWatchedModal } from '../index';

export default function addIventListenerModalBtn() {
    const btnWatched = document.querySelector('[data-action="modal-add-watched"]');
    console.log("btnModalWatched:", btnWatched);
    const btnModalQueue = document.querySelector('[data-action="modal-add-queue"]');
    console.log("btnModalQueue:", btnModalQueue);
    btnModalQueue.addEventListener('click', () => {
        onWatchedModal();
    });
    btnWatched.addEventListener('click', () => {
        onWatchedModal();
    });
}



