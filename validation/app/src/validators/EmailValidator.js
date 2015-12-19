import Validator from './Validator'

const RULE = 'ruleEmail';

class EmailValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        this.message = 'Email is not valid';
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return regex.test(String(this.value));
    }
}

export default EmailValidator;
