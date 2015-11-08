function map(arr, callback) { //third parameter is thisArg
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var thisArg;

    if (arguments.length > 2) {
        thisArg = arguments[2];
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0, result = [];

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString())) {
            result[i] = callback.call(thisArg, currentObject[i], i, currentObject);
        }

        i++;
    }

    return result;
}

function reduce(arr, callback) {  //third parameter is initialValue
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    var value;

    if (arguments.length > 2) {
        value = arguments[2];
    }

    var currentObject = Object(arr),
        length = currentObject.length, i = 0, k = 0;

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString()) && currentObject[i] != undefined) k++;
        i++;
    }

    if (k < 1 && value == undefined) {
        throw new TypeError('Array is empty and initialValue is not defined');
    } else if (k === 1 && value == undefined) {
        return currentObject[k];
    } else if (k < 1 && value != undefined) {
        return value;
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    i = 0;

    if (value == undefined) {
        value = currentObject[i++];
    }


    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString())) {
            value = callback(value, currentObject[i], i, currentObject);
        }

        i++;
    }

    return value;
}

function forEach(arr, callback) { //third parameter is thisArg
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var thisArg;

    if (arguments.length > 2) {
        thisArg = arguments[2];
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0;

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString())) {
            callback.call(thisArg, currentObject[i], i, currentObject);
        }

        i++;
    }
}

function some(arr, callback) {  //third parameter is thisArg
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var thisArg;

    if (arguments.length > 2) {
        thisArg = arguments[2];
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0;

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString()) && !!callback.call(thisArg, currentObject[i], i, currentObject)) return true;
        i++;
    }

    return false;
}

function every(arr, callback) {  //third parameter is thisArg
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    var thisArg;

    if (arguments.length > 2) {
        thisArg = arguments[2];
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0;

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString()) && !callback.call(thisArg, currentObject[i], i, currentObject)) return false;
        i++;
    }

    return true;
}

function indexOf(arr, searchElement) {  //third parameter is fromIndex
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    var fromIndex = 0;

    if (arguments.length > 2) {
        fromIndex = arguments[2];
    }

    fromIndex = parseInt(fromIndex);

    var currentObject = Object(arr),
        length = currentObject.length,
        notFound = -1;

    if (fromIndex >= length || isNaN(fromIndex)) {
        return notFound;
    }

    if (fromIndex < 0) {
        fromIndex = length - Math.abs(fromIndex);
    }

    fromIndex = Math.max(fromIndex, 0);

    while (fromIndex < length) {
        if (currentObject.hasOwnProperty(fromIndex.toString()) && currentObject[fromIndex] === searchElement) {
            return fromIndex;
        }

        fromIndex++;
    }

    return notFound;
}

function reverse(arr) {
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    var currentObject = Object(arr),
        i = currentObject.length - 1, k = 0, result = [];

    while (i >= 0) {
        if (currentObject.hasOwnProperty(i.toString())) {
            result[k] = currentObject[i];
        }
        i--;
        k++;
    }

    return result;
}

function join(arr) { //second argument is separator
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    var separator = ',';

    if (arguments.length > 1) {
        separator = arguments[1].toString();
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0, result = '';

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString())) {
            if (i > 0) result += separator;
            result += currentObject[i];
        }
        i++;
    }

    return result;
}

function insertionSort(arr) {
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0, currentArray = [];

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString()) && currentObject[i] != undefined) {
            currentArray.push(currentObject[i]);
        }
        i++;
    }

    length = currentArray.length;

    var result = new Array(length);

    result[0] = currentArray[0];

    i = 1;

    var tmp, k, j, notFound;

    while (i < length) {
        tmp = currentArray[i];
        k = 0;
        notFound = true;

        while (k < length && result[k] !== undefined) {
            if (tmp <= result[k]) {
                j = length - 1;

                while (j >= k) {
                    result[j] = result[j - 1];
                    j--;
                }

                result[k] = tmp;

                notFound = false;

                break;
            }

            k++;
        }

        if (notFound) {
            result[k] = tmp;
        }

        i++;
    }

    return result;
}

function quickSort(arr) {
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0, currentArray = [];

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString()) && currentObject[i] != undefined) {
            currentArray.push(currentObject[i]);
        }
        i++;
    }

    var partition = function (part, left, right) {
        var x = part[right],
            i = left - 1, j, tmp;

        for (j = left; j <= right - 1; j++) {
            if (part[j] <= x) {
                i++;

                tmp = part[i];
                part[i] = part[j];
                part[j] = tmp;
            }
        }

        i++;
        tmp = part[i];
        part[i] = part[right];
        part[right] = tmp;

        return i;
    };

    var quickSort = function (part, left, right) {
        if (left >= right) {
            return;
        }

        var i = partition(part, left, right);

        quickSort(part, left, i - 1);
        quickSort(part, i + 1, right);
    };

    quickSort(currentArray, 0, currentArray.length - 1);

    return currentArray;
}

function mergeSort(arr) {
    if (!Array.isArray(arr) && typeof arr !== 'string') {
        throw new TypeError(arr + ' is not an array or string');
    }

    var currentObject = Object(arr),
        length = currentObject.length,
        i = 0, currentArray = [];

    while (i < length) {
        if (currentObject.hasOwnProperty(i.toString()) && currentObject[i] != undefined) {
            currentArray.push(currentObject[i]);
        }
        i++;
    }

    var merge = function (part, start, center, end) {
        var i = start,
            j = center + 1,
            k, result = [];

        for (k = start; k <= end; k++) {
            if (j > end || (i <= center && part[i] <= part[j])) {
                result[k] = part[i];
                i++;
            } else {
                result[k] = part[j];
                j++;
            }
        }

        for (k = start; k <= end; k++) {
            part[k] = result[k];
        }
    };

    var mergeSort = function (part, start, end) {
        if ((end - start) < 1) {
            return;
        }

        var center = Math.floor((start + end) / 2);

        if ((end - start) > 1) {
            mergeSort(part, start, center);
            mergeSort(part, center + 1, end);
        }

        merge(part, start, center, end);
    };

    mergeSort(currentArray, 0, currentArray.length - 1);

    return currentArray;
}