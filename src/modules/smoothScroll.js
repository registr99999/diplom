const smoothScroll = () => {
    // arrow Up
    const arrowUp = document.querySelector('.up');
    const services = document.getElementById('services');

    console.log(services.offsetHeight);
    arrowUp.style.cssText = 'display: none;';
    
    
    window.addEventListener('scroll', () => {

        if (window.scrollY > (services.offsetTop - 100)) {
            arrowUp.style.cssText = 'display: block;';
        } else {
            arrowUp.style.cssText = 'display: none;';
        }
    })

    arrowUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })



    // smooth Scroll
    document.querySelectorAll('a[href^="#"').forEach(link => {
        link.classList.add('scrollto');
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = document.querySelector('.scrollto').offsetHeight;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            console.log(offsetPosition);

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

}
export default smoothScroll;


