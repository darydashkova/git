import * as $ from 'jquery';
// import '../node_modules/select2/dist/js/select2.full';
const submit = document.querySelector('.slider-container__back');
const ru = document.querySelector('.header__container-lang-ru');
const eng = document.querySelector('.header__container-lang-eng');
let show = true;
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
    eng.addEventListener('click', function () {
        eng.classList.add('header__container-lang-active');
        ru.classList.remove('header__container-lang-active');
    });
    ru.addEventListener('click', function () {
      ru.classList.add('header__container-lang-active');
      eng.classList.remove('header__container-lang-active');
  });
  }
}
