'use strict';

import modalCallback from "./modules/modalCallback";
import smoothScroll from "./modules/smoothScroll";
import spoilers from "./modules/spoilers";
import sendForm from "./modules/sendForm";
import mainSlider from "./modules/mainSlider";
import SliderCarousel from "./modules/carousel";

mainSlider();
modalCallback();
smoothScroll();
spoilers();
sendForm();



const carousel = new SliderCarousel({
    main:'.services-elements',
    wrap: '.services-carousel',
    prev: '.arrow-left',
    next: '.arrow-right',
    slidesToShow: 3,
    infinity:2,
});


carousel.init();
