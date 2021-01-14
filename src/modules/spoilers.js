const spoilers = () => {
    const titleAccordeon = document.querySelectorAll('.accordeon .element .title');
    const elementContent = document.querySelectorAll('.accordeon .element .element-content');
    const accordeon = document.querySelector('.accordeon');

    
    titleAccordeon.forEach(blockTitle => {
        blockTitle.addEventListener('click', ({target}) => {
            console.log(target);
            console.log('!');
            
            const parent = blockTitle.parentNode;
            console.log(parent);
            
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                item.style.cssText = 'display:none;'
            } else {
                elementContent.forEach(item => {
                    item.style.cssText = 'display:block;'
                })
                parent.classList.add('active');
            }
            
        })
    });
}
export default spoilers;
