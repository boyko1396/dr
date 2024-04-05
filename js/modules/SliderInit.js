import Swiper from 'swiper';

function SliderInit() {
  const sliderElement = document.querySelector('.js-services-slider-init');
  
  if (!sliderElement) {
    return;
  }
  
  const swiper = new Swiper(sliderElement, {
    slidesPerView: 'auto',
    loop: false,
    centeredSlides: false,
    speed: 450,
    spaceBetween: 12,
    grabCursor: true,
    breakpoints: {
      1024: {
        spaceBetween: 20
      }
    }
  });

  return swiper;
}

export default SliderInit;