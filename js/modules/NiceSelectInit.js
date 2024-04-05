import NiceSelect from '../libs/nice-select2';

export default function NiceSelectInit() {
  new NiceSelect(document.getElementById('js-select-services-init'), {
    searchable: false
  });

  var selectElement = document.getElementById('js-select-services-init');
  var selectElementsEl = document.querySelectorAll('.nice-select.js-select-services');

  selectElement.addEventListener('change', function() {
    var selectedValue = this.value;
    selectElementsEl.forEach(function(element) {
      if (selectedValue !== 'Выберите интересующий вас тип услуги') {
        element.classList.add('is-chooses');
      } else {
        element.classList.remove('is-chooses');
      }
    });
  });
}