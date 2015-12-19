import Validator from './Validator'

const RULE = 'rulePassword';

class PasswordValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        this.message = 'Incorrect password';
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        return /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])/.test(String(this.value));
    }
}

export default PasswordValidator;
