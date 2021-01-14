document.addEventListener('click', ({ target }) => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const callback = document.getElementById('callback');
    const feedback = document.getElementById('feedback');
    if (target.closest('.callback-btn')) {
        modalOverlay.style.cssText = 'display:block; opacity:1; transition: all .9s ease 3s;';
        callback.style.cssText = 'display:block; opacity:1; transform: scale(1) translate(-50%, 0) rotate(0deg); transition: all .9s ease 1s;';
    }
    if (target.closest('.modal-overlay') || target.closest('.modal-close')) {
        modalOverlay.style.cssText = 'display:none; opacity:0; transform:translate(0, 0) rotate(45deg); transition: all .9s ease 3s;';
        callback.style.cssText = 'display:none; opacity:0; transform:scale(1) translate(0, 0) rotate(45deg); transition: all .9s ease 3s;';
    }
})





export default modalCallback;
