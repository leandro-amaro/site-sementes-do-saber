export function showModal(title, message) {
    

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal-container';

    const modalTitle = document.createElement('h3');
    modalTitle.textContent = title;

    const modalMessage = document.createElement('p');
    modalMessage.textContent = message;

    const closeButton = document.createElement('button');
    closeButton.textContent = 'OK';
    closeButton.className = 'modal-close-btn';

    modal.append(modalTitle, modalMessage, closeButton);
    overlay.append(modal);

    document.body.append(overlay);

    setTimeout(() => {
        overlay.classList.add('ativo');
    }, 10);

    function closeModal() {
        overlay.classList.remove('ativo');
        
        
        overlay.addEventListener('transitionend', () => {
            overlay.remove();
        }, { once: true }); 
    }

    
    closeButton.addEventListener('click', closeModal);
    
    overlay.addEventListener('click', (evento) => {
        
        if (evento.target === overlay) {
            closeModal();
        }
    });
}