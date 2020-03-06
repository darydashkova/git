import * as $ from 'jquery';
// import '../node_modules/select2/dist/js/select2.full';

export function guiInit() {
  // Проверка страницы
  if ($('.gui-page').toArray().length) {
    // Подключение селекта
    // $('#gui-select_1').select2({ minimumResultsForSearch: Infinity, dropdownCssClass: 'form-element__control-select-dropdown' });

    console.log('Gui page');
  }
}
