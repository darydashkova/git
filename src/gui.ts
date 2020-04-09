import * as $ from 'jquery';
import Swiper from 'swiper';
// import '../node_modules/select2/dist/js/select2.full';
export function guiInit() {
  // Проверка страницы
  if ($('.gui-page').toArray().length) {
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // Подключение селекта
    // $('#gui-select_1').select2({ minimumResultsForSearch: Infinity, dropdownCssClass: 'form-element__control-select-dropdown' });
    console.log('Gui page');
  }
}
