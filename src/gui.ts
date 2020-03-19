import * as $ from 'jquery';
// import '../node_modules/select2/dist/js/select2.full';
const submit = document.querySelector('.slider-container__back');
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
      show=!show;
    });
  }
}
