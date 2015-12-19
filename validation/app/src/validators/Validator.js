class Validator {
    constructor(dataset, value) {
        this.dataset = dataset;
        this.value = value;
    }

    get message() {
        return this.invalidMessage;
    }

    set message(message) {
        let constructor = this.constructor;

        let invalidMessage = this.dataset[`${constructor.rule()}Msg`];

        if (!invalidMessage) {
            invalidMessage = message;
        }

        this.invalidMessage = invalidMessage;
    }

    is_valid() {
        return false;
    }
}

export default Validator;
