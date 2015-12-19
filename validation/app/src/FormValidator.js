import EmailValidator from './validators/EmailValidator';
import EqualToValidator from './validators/EqualToValidator';
import MaxLengthValidator from './validators/MaxLengthValidator';
import MinLengthValidator from './validators/MinLengthValidator';
import PasswordValidator from './validators/PasswordValidator';
import RangeLengthValidator from './validators/RangeLengthValidator';
import RequiredValidator from './validators/RequiredValidator';
import TelephoneValidator from './validators/TelephoneValidator';

const VALIDATOR_ERROR_WRAPPER = 'div';
const VALIDATOR_ERROR_CLASS = 'validation-error';

class FormValidator {
    constructor(form) {
        if (!form) new Error('Form is not specified');

        this.form = form;
        this.elements = [];

        let elements = document.evaluate(".//input/@*[starts-with(name(), 'data-rule-')][1] | .//textarea/@*[starts-with(name(), 'data-rule-')][1]", this.form, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

        if (elements.snapshotLength > 0) {
            for (let i = 0; i < elements.snapshotLength; i++) {
                this.elements.push(elements.snapshotItem(i).ownerElement);
            }
        }

        this.validators = [EqualToValidator, MaxLengthValidator, MinLengthValidator, PasswordValidator,
            RangeLengthValidator, RequiredValidator, TelephoneValidator, EmailValidator];
    }

    clearPreviousMessages() {
        let errors = this.form.querySelectorAll(`${VALIDATOR_ERROR_WRAPPER}.${VALIDATOR_ERROR_CLASS}`);

        for (let i = 0; i < errors.length; i++) {
            errors[i].parentNode.removeChild(errors[i]);
        }

        errors = this.form.querySelectorAll(`.${VALIDATOR_ERROR_CLASS}`);

        for (let i = 0; i < errors.length; i++) {
            errors[i].classList.remove(VALIDATOR_ERROR_CLASS);
        }
    }

    validate() {
        this.clearPreviousMessages();

        let valid = true;

        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];

            let rules = Object.keys(element.dataset).filter(rule => !/^rule.*?(?:Msg)$/.test(rule));

            if (rules.length < 1) return;

            let validatorsCount = this.validators.length;

            for (let k = 0; k < rules.length; k++) {
                let currentValidator;

                for (let j = 0; j < validatorsCount; j++) {
                    if (rules[k] === this.validators[j].rule()) {
                        currentValidator = new this.validators[j](element.dataset, element.value);

                        break;
                    }
                }

                if (currentValidator && !currentValidator.is_valid()) {
                    valid = false;

                    let error = document.createElement(VALIDATOR_ERROR_WRAPPER.toUpperCase());
                    error.innerHTML = currentValidator.message;
                    error.classList.add(VALIDATOR_ERROR_CLASS);

                    element.classList.add(VALIDATOR_ERROR_CLASS);
                    element.parentNode.appendChild(error);

                    break;
                }
            }
        }

        return valid;
    }
}

export default FormValidator;
