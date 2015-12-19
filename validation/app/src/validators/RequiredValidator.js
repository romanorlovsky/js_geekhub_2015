import Validator from './Validator'

const RULE = 'ruleRequired';

class RequiredValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        this.message = 'This value is required';
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        return String(this.value).trim().length > 0;
    }
}

export default RequiredValidator;
