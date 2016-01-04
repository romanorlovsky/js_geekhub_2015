class World {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.generation = [];
        this.isSetGeneration = false;
        this.aliveItems = 0;

        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                if (!this.generation[i]) {
                    this.generation[i] = [];
                }

                this.generation[i][j] = 0;
            }
        }
    }

    get currentGeneration() {
        return this.generation;
    }

    setFirstRandomGeneration(itemsCount) {
        if (itemsCount > this.width * this.height) {
            throw new Error('Invalid itemsCount parameter');
        }

        let x;
        let y;
        let generations = [];

        for (let i = 0; i < itemsCount; i++) {
            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);

            generations.push([x, y]);
        }

        this.setFirstGeneration(...generations);
    }

    setFirstGeneration(...args) {
        let x;
        let y;
        let rightDataCount = 0;

        for (let i = 0; i < args.length; i++) {
            if (args[i].constructor.name !== 'Array' || args[i].length < 2) {
                throw new Error('Incorrect incoming data. Must be [x,y]')
            }

            x = parseInt(args[i][0]);
            y = parseInt(args[i][1]);

            if (isNaN(x) || isNaN(y)) continue;

            x--;
            y--;

            if ((x >= this.width || x < 0) || (y >= this.height || y < 0)) continue;

            this.generation[y][x] = 1;

            this.aliveItems++;

            rightDataCount++;
        }

        if (rightDataCount > 0) {
            this.isSetGeneration = true;
        }
    }

    nextGeneration() {
        if (!this.isSetGeneration) return false;

        let neighborhoodsCount;
        let tmpGeneration = JSON.parse(JSON.stringify(this.generation));

        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                neighborhoodsCount = this.neighborhoodsCount(j, i);

                if (neighborhoodsCount === 3 && !this.generation[i][j]) {
                    tmpGeneration[i][j] = 1;

                    this.aliveItems++;
                } else if ((neighborhoodsCount < 2 || neighborhoodsCount > 3) && this.generation[i][j]) {
                    tmpGeneration[i][j] = 0;

                    this.aliveItems--;
                }
            }
        }

        this.generation = tmpGeneration;

        return this.aliveItems > 0;
    }

    neighborhoodsCount(x, y) {
        let neighborhoods = 0;

        for (let i = y - 1; i <= y + 1; i++) {
            for (let j = x - 1; j <= x + 1; j++) {
                if ((i === y && j === x) || !this.generation[i] || !this.generation[i][j]) continue;

                neighborhoods++;
            }
        }

        return neighborhoods;
    }
}

export default World;