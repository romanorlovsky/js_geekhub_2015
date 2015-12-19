import Validator from './Validator'

const RULE = 'ruleEqualTo';

class EqualToValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        if (this.dataset[RULE]) {
            this.selector = this.dataset[RULE];
        } else {
            new Error('Selector is not specified');
        }

        this.message = 'This value is not the same';
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        let element = document.querySelector(this.selector);

        if (!element) return false;

        return element.value === String(this.value);
    }
}

export default EqualToValidator;