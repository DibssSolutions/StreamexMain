import { BODY, OPEN } from '../constants';

const lang = $('.js-lang');
const currentLang = $('.js-current-lang');
currentLang.on('click', function() {
  const parent = $(this).parents('.js-lang');
  if (!parent.hasClass(OPEN)) {
    parent.addClass(OPEN);
  }
  else {
    parent.removeClass(OPEN);
  }
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-current-lang').length) return;
  lang.removeClass(OPEN);
});
