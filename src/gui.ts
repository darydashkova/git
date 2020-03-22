import * as $ from 'jquery';
// import '../node_modules/select2/dist/js/select2.full';
const submit = document.querySelector('.slider-container__back');
let show = true;
let summ = 1;
const slider = document.querySelector('.slider__back');
export function guiInit() {
  // Проверка страницы
  if ($('.gui-page').toArray().length) {
    // Подключение селекта
    // $('#gui-select_1').select2({ minimumResultsForSearch: Infinity, dropdownCssClass: 'form-element__control-select-dropdown' });
    console.log('Gui page');
    submit.addEventListener('click', function () {
      const fff = document.querySelector('.table__item');
      if (show) {
        fff.classList.add('none');
      } else {
        fff.classList.remove('none');
      }
      show = !show;
    });
    slider.addEventListener('click', function () {
      const nextSlider = document.querySelector('.slider__container-img');
      const secondSlide = document.querySelector('.slider__container-second');
      const thirdlide = document.querySelector('.slider__container-third');
      if (nextSlider) {
        nextSlider.classList.remove('slider__container-img');
        nextSlider.classList.add('addopacity');
        secondSlide.classList.remove('slider__container-second');
        secondSlide.classList.add('slider__container-img');
        thirdlide.classList.remove('slider__container-third');
        thirdlide.classList.add('slider__container-second');
      } else {
      }
      summ++;
      if (summ == 2) {
        nextSlider.classList.remove('slider__container-img');
        nextSlider.classList.add('addopacity');
        secondSlide.classList.remove('slider__container-second');
        secondSlide.classList.add('slider__container-img');
        thirdlide.classList.remove('slider__container-third');
        thirdlide.classList.add('slider__container-second');
        summ++;
      }
      if (summ == 3) {
        nextSlider.classList.remove('slider__container-img');
        nextSlider.classList.add('addopacity');
        secondSlide.classList.remove('slider__container-second');
        secondSlide.classList.add('slider__container-img');
        thirdlide.classList.remove('slider__container-third');
        thirdlide.classList.add('slider__container-second');
        summ = 1;
      }

    });
  }
}
