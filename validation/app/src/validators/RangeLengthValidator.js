import Validator from './Validator'

const RULE = 'ruleRangeLength';

class RangeLengthValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        let range = this.dataset[RULE];

        range = range.split('..').filter(item => !isNaN(parseInt(item)));

        if (range < 1) {
            new Error('Invalid range value');
        } else if (range.length == 1) {
            this.minLength = parseInt(range[0]);
            this.maxLength = parseInt(range[0]);
        } else {
            this.minLength = parseInt(range[0]);
            this.maxLength = parseInt(range[1]);
        }

        this.message = `Min length ${this.minLength}, max length ${this.maxLength}`;
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        let length = String(this.value).trim().length;

        return length >= this.minLength && length <= this.maxLength;
    }
}

export default RangeLengthValidator;
