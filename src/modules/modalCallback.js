
const modalCallback = () => {
    const modalOverlay = document.querySelector('.modal-overlay');
    const callback = document.getElementById('callback');
    const mobMenuBtn = document.querySelector('.callback-btn');
    console.log(mobMenuBtn);
    
    document.addEventListener('click', ({target}) => {
        if (target.hasClass('.callback-btn') === mobMenuBtn) {
            alert('попал прям в кнопку');
        }
        console.dir(target);
        
    })
    
};


export default modalCallback;
