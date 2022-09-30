import { onWatchedModal } from '../index';
import { onWatchedModal } from '../index';

export default function addIventListenerModalBtn() {
    const btnWatched = document.querySelector('[data-action="modal-add-watched"]');
    const btnModalQueue = document.querySelector('[data-action="modal-add-queue"]');
    btnModalQueue.addEventListener('click', () => {
        onWatchedModal();
    });
    btnWatched.addEventListener('click', () => {
        onWatchedModal();
    });
}



