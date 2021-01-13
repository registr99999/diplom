
const modalCallback = () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const callback = document.getElementById('callback');

    document.addEventListener('click', ({ target }) => {
        if (target.classList.contains('callback-btn')) {
            modalOverlay.style.display = 'block';
            callback.style.display = 'block';
        }
        if (target.classList.contains('.modal-close')) {
            modalOverlay.style.display = 'none';
            callback.style.display = 'none';
        }
        console.log(target);
        
    })

};


export default modalCallback;
