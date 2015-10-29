function toNumbers() {
    var result = [], i = 0, tmp;

    if (arguments.length) {
        for (; i < arguments.length; i++) {
            tmp = parseInt(arguments[i]);

            if (isNaN(tmp)) continue;

            result.push(tmp);
        }

        result = result.length < 1 ? null : result;
    } else {
        result = null;
    }

    return result;
}

function onlyNumbers() {
    var result = [], i = 0;

    if (arguments.length) {
        for (; i < arguments.length; i++) {
            if (Number(arguments[i]) !== arguments[i]) continue;

            result.push(arguments[i]);
        }

        result = result.length < 1 ? null : result;
    } else {
        result = null;
    }

    return result;
}

function toPositive() {
    var result = [], i = 0;

    if (arguments.length) {
        for (; i < arguments.length; i++) {
            result.push(Math.abs(arguments[i]));
        }

        result = result.length < 1 ? null : result;
    } else {
        result = null;
    }

    return result;
}

function sum() {
    var sum = 0, i = 0;

    if (arguments.length) {
        for (; i < arguments.length; i++) {
            sum += arguments[i];
        }
    } else {
        sum = null;
    }

    return sum;
}

function fn() {
    if (arguments.length) {
        var functions_list = arguments;

        return function () {
            if (arguments.length) {
                var result = arguments, i = 0;

                for (; i < functions_list.length; i++) {
                    if (typeof functions_list[i] !== 'function' || functions_list[i].name === 'fn') continue;

                    result = functions_list[i].apply(null, result);

                    if (result === null) {
                        throw new Error(functions_list[i].name + ' decorator error');
                    }
                }

                if (result === arguments) {
                    throw new Error('Each argument is not a function ')
                }

                return result;
            } else {
                throw new Error('Arguments is empty')
            }
        }
    } else {
        throw new Error('Functions list is empty')
    }
}