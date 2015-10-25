function level1() {
    north();
    north();
}

function level2() {
    var process;

    do {
        process = east();
    } while (process === true);
}

function level3() {
    var process, steps = ['south', 'east'], index = 0;

    do {
        process = window[steps[index]].call();
        index = +!index;
    } while (process === true);
}

function level4() {
    var process, steps = ['south', 'east'], index = 0, current;

    do {
        current = steps[index];

        if (!isFree(current)) {
            index = +!index;
            current = steps[index];
        }

        process = window[current].call();
    } while (process === true);
}

function level5() {
    var directions = [['east', 'west'], ['north', 'south']],
        index = 0, i, process = false, current = null;

    do {
        if (!current || !isFree(current)) {
            for (i = 0; i < 2; i++) {
                if (isFree(directions[index][i])) {
                    current = directions[index][i];

                    break;
                }
            }

            index = +!index;
        }

        process = window[current].call();
    } while (process === true);
}