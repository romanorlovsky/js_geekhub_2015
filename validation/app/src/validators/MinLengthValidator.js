import Validator from './Validator'

const RULE = 'ruleMinLength';

class MinLengthValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        let minLength = parseInt(this.dataset[RULE]);

        if (!isNaN(minLength)) {
            this.minLength = minLength;
        } else {
            new Error('Invalid min length value');
        }

        this.message = `Min length ${this.minLength}`;
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        return String(this.value).trim().length >= this.minLength;
    }
}

export default MinLengthValidator;
