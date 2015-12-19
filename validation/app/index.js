import FormValidator from './src/FormValidator';

let forms = document.querySelectorAll('[data-validate-form]');

for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) {
        e.preventDefault();

        let validator = new FormValidator(this);

        validator.validate();
    });
}