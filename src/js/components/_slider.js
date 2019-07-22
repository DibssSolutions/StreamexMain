import slick from 'slick-carousel';
import { mediaWidth } from './../utils';
import { WIN } from './../constants';

const slider = $('.js-unit-slider');
const ressetStyle = () => {
  $('.js-unit-slider [data-anim=from-bottom]').css({
    'transform': 'translate(0,0)',
    'opacity': 1
  });
};
const sliderInit = () => {
  if (mediaWidth(1023) && !slider.hasClass('slick-initialized')) {
    slider.slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 800,
      slidesToShow: 3,
      slideToScroll: 1,
      autoplay: false,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 374,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  } else {
    if (!mediaWidth(1023) && slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
      ressetStyle();
    }
  }
  if (mediaWidth(1023) && slider.hasClass('slick-initialized')) ressetStyle();
};

sliderInit();
let timeout;
WIN.on('resize', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {sliderInit();},100);
});
