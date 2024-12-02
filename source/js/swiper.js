// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const juriSwiper = new Swiper('.juri__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  modules: [Navigation],
  navigation: {
    nextEl: '.juri__button-next',
    prevEl: '.juri__button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 200,
  navigation: {
    nextEl: '.reviews__swiper-button-next',
    prevEl: '.reviews__swiper-button-prev',
  },
  modules: [Navigation],
});

juriSwiper();
reviewsSwiper();

