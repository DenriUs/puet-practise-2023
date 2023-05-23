/* eslint-disable */
import Swiper, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

console.log('Landing...');

$(window).on('load', function () {
  console.log('Load...');

  $('.features-blocks').slick({
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      510: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

$('#slick-next').on('click', function () {
  $('.features-blocks').slick('slickNext');
});

$('#slick-prev').on('click', function () {
  $('.features-blocks').slick('slickPrev');
});

$(document).ready(function () {
  console.log('Ready...');
});
