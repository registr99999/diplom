const mainSlider = () => {
    const slider = document.querySelector('.top-slider');
    const slides = document.querySelectorAll('.item');
    const table = document.querySelectorAll('.table');
    const slickDots = document.createElement('div');
    let slickDot;
    
    table.forEach(textBlockSlide => {
        textBlockSlide.style.opacity = '1';
        textBlockSlide.style.visibility = 'visible';
    })
    
    slickDots.classList.add('slick-dots');
    
    slider.appendChild(slickDots);
    
    
    let counterSlides = 0;
    for (let index = 0; index < slides.length; index++) {
        slickDot = document.createElement('li');
        slickDot.classList.add('dot');
        slickDots.appendChild(slickDot);
        slickDot.style.cursor = 'pointer';
        slickDot.style.zIndex = '10';
    }
    const dots = slickDots.querySelectorAll('.dot');
    
    
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    }
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    }
    nextSlide(dots, counterSlides, 'slick-active')
    const autoPlaySlide = () => {
        
        prevSlide(slides, counterSlides, 'active')
        prevSlide(dots, counterSlides, 'slick-active')
        slides[counterSlides].style.height = '0';
        counterSlides++;
        if (counterSlides >= slides.length) {
            counterSlides = 0;
        }
    
        nextSlide(slides, counterSlides, 'active')
        nextSlide(dots, counterSlides, 'slick-active')
        slides[counterSlides].style.height = '600px';
    
    }
    
    const startSlider = () => {
        setInterval(autoPlaySlide, 3000);
    
    }
    slider.addEventListener('click', ({ target }) => {
    
        prevSlide(slides, counterSlides, 'active')
        prevSlide(dots, counterSlides, 'slick-active')
        slides[counterSlides].style.height = '0';
        if (target.matches('.dot')) {
            dots.forEach((dot, index) => {
                if (dot === target) {
                    counterSlides = index;
                }
            })
        }
        nextSlide(slides, counterSlides, 'active')
        nextSlide(dots, counterSlides, 'slick-active')
        slides[counterSlides].style.height = '600px';
    })
    
    
    
    startSlider();
}


export default mainSlider;
