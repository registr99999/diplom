const spoilers = () => {
    const titleAccordeon = document.querySelectorAll('.accordeon .element .title');
    const elementAccordeon = document.querySelectorAll('.accordeon .element');
    titleAccordeon.forEach(blockTitle => {

        blockTitle.addEventListener('click', ({ target }) => {
            const parent = target.parentNode;
            blockTitle.nextElementSibling.style.display = 'block';
            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
                blockTitle.nextElementSibling.style.display = 'none';
            } else {
                elementAccordeon.forEach(item => {
                    item.classList.remove('active');
                    blockTitle.nextElementSibling.style.display = 'none';
                    item.children[1].style.display = 'none';
                })
                parent.classList.add('active');
                blockTitle.nextElementSibling.style.display = 'block';
            }
            

        })
    });
}
export default spoilers;
