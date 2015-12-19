import Validator from './Validator'

const RULE = 'ruleTelephone';

class TelephoneValidator extends Validator {
    constructor(dataset, value) {
        super(dataset, value);

        this.message = 'Telephone is invalid';
    }

    static rule() {
        return RULE;
    }

    is_valid() {
        return /^(\+38)?[0-9]{10}$/.test(String(this.value).replace(/ /g, '').replace(/-/g, ''));
    }
}

export default TelephoneValidator;
