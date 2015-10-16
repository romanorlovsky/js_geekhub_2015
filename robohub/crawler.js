var crawler = {
    topBottom: ['north', 'south'],
    leftRight: ['east', 'west'],
    directions: null,
    dirLength: 0,
    progress: null,

    init: function () {
        this.directions = this.topBottom.concat(this.leftRight);
        this.dirLength = this.directions.length;

        return true;
    },

    getReversSide: function (direction) {
        var tmp = this.topBottom.indexOf(direction);

        if (tmp >= 0) {
            return this.topBottom[+!tmp];
        }

        tmp = this.leftRight.indexOf(direction);

        if (tmp >= 0) {
            return this.leftRight[+!tmp];
        }

        return false;
    },

    start: function () {
        if (!this.dirLength) {
            console.log('Crawler is not init. Please call crawler.init()');

            return;
        } else if (this.progress === 'end') {
            console.log('You finish all levels');

            return;
        }

        var availableSteps, i, stepsLength, current = null, previous = null, path = [],
            pathLevel = 0, choices = [], backPath, backPathLength;

        do {
            if (path[pathLevel] === undefined) {
                path[pathLevel] = [];
            }

            availableSteps = [];

            // шукаємо всі доступні напрямки пересування
            for (i = 0; i < this.dirLength; i++) {
                if (isFree(this.directions[i])) {
                    availableSteps.push(this.directions[i])
                }
            }

            if (current) {
                // отримуєм попередній крок (north => south)
                previous = this.getReversSide(current);

                // зберігаємо пройдений крок
                path[pathLevel].push(previous);

                // видаляємо з доступних напрямків попередній крок щоб не рухатись назад
                availableSteps.splice(availableSteps.indexOf(previous), 1);
            }

            // визначаємо скільки є доступних маршрутів
            stepsLength = availableSteps.length;

            if (stepsLength === 1) {
                current = availableSteps.shift();
            } else if (stepsLength > 1) { // робот на розвилці
                pathLevel++;

                // виділяєм місце для зберігання пройденого шляху для поточної розвилки
                // (щоб в разі необхіності повертатись до неї)
                if (path[pathLevel] === undefined) {
                    path[pathLevel] = [];
                }

                // зберігаєм всі можливі маршрути поточної розвилки і берем перший
                if (choices[pathLevel] === undefined) {
                    current = availableSteps.shift();

                    choices[pathLevel] = availableSteps;
                }
            } else { // робот в тупику
                // берем останній пройдений шлях від розвилки
                backPath = path.pop();
                backPathLength = backPath.length;

                // робот повертається до розвилки
                for (i = 0; i < backPathLength; i++) {
                    window[backPath[i]].call();
                }

                map();

                if (choices[pathLevel].length === 0) { // якщо в розвилці не залишилось варіантів - пропускаємо крок (робот повернеться до попередньої розвилки)
                    pathLevel--;

                    current = null;
                } else { // якщо маршрути в розвилці є - берем наступний
                    path[pathLevel] = [];

                    current = choices[pathLevel].shift();
                }
            }

            if (current) {
                // рухаємо робота на вибрану позицію
                this.progress = window[current].call();

                map();
            }
        } while (this.progress === true);
    }
};