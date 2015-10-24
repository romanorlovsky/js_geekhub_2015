var crawler = {
    topBottom: ['north', 'south'],
    leftRight: ['east', 'west'],
    directions: null,
    dirLength: 0,
    progress: null,
    rules: {
        south: 'west',
        north: 'east',
        west: 'north',
        east: 'south'
    },

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

        var i, current, right, deadEnd;

        // шукаємо всі доступні напрямки пересування
        for (i = 0; i < this.dirLength; i++) {
            if (isFree(this.directions[i])) {
                current = this.directions[i];

                break;
            }
        }

        do {
            deadEnd = false;

            right = this.rules[current];

            if (isFree(right)) {
                current = right;
            } else if (!isFree(current)) {
                deadEnd = true;

                current = this.getReversSide(current);
            }

            if (!deadEnd) {
                map();

                this.progress = window[current].call();
            }
        } while (this.progress === true);
    }
};