class Figure {
    constructor(...coordinates) {
        if (coordinates.length % 2 !== 0) {
            throw new Error('Incorrect number of coordinates');
        }

        let i = 0, index = 1;

        for (; i < coordinates.length; i += 2, index++) {
            this[`x${index}`] = coordinates[i];
            this[`y${index}`] = coordinates[i + 1];
        }
    }
}

export default Figure;