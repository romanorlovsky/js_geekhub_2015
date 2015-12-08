import Figure from './Figure'

class Polygon extends Figure {
    constructor(...coordinates) {
        if (coordinates.length < 6) {
            throw new Error('Not enough vertices');
        }

        super(...coordinates);

        this.vertices = coordinates.length / 2;
    }

    get perimeter() {
        let lines = [];

        let i = this.vertices;

        for (; i > 1; i--) {
            lines.push(Math.sqrt(Math.pow((this[`x${i}`] - this[`x${i - 1}`]), 2) + Math.pow((this[`y${i}`] - this[`y${i - 1}`]), 2)));
        }

        lines.push(Math.sqrt(Math.pow((this.x3 - this.x1), 2) + Math.pow((this.y3 - this.y1), 2)));

        return lines.reduce(function (a, b) {
            return a + b;
        });
    }
}

export default Polygon;