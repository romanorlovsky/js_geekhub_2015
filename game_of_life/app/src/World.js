class World {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.generation = [];
        this.isSetGeneration = false;

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

            this.generation[x][y] = 1;

            rightDataCount++;
        }

        if (rightDataCount > 0) {
            this.isSetGeneration = true;
        }
    }

    nextGeneration() {
        if (!this.isSetGeneration) return false;

        return false;
    }
}

export default World;