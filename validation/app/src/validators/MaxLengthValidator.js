import Validator from './Validator'

const RULE = 'ruleMaxLength';

class MaxLengthValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        let maxLength = parseInt(this.dataset[RULE]);

        if (!isNaN(maxLength)) {
            this.maxLength = maxLength;
        } else {
            new Error('Invalid max length value');
        }

        this.message = `Max length ${this.maxLength}`;
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        return String(this.value).trim().length <= this.maxLength;
    }
}

export default MaxLengthValidator;
