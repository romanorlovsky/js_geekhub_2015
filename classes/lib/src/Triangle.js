import Figure from './Figure'

class Triangle extends Figure {
    constructor(...coordinates) {
        if (coordinates.length !== 6) {
            throw new Error('Not enough vertices');
        }

        super(...coordinates);
    }

    get perimeter() {
        let {a, b, c} = this.calcLines();

        if (a === 0 || b === 0 || c === 0) {
            throw new Error('Triangle does not exist');
        }

        return a + b + c;
    }

    get area() {
        let p = this.perimeter;
        let {a, b, c} = this.calcLines();

        return Math.sqrt((p / 2) * (p / 2 - a) * (p / 2 - b) * (p / 2 - c));
    }

    calcLines() {
        let a = Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
        let b = Math.sqrt(Math.pow((this.x3 - this.x2), 2) + Math.pow((this.y3 - this.y2), 2));
        let c = Math.sqrt(Math.pow((this.x3 - this.x1), 2) + Math.pow((this.y3 - this.y1), 2));

        if (a === 0 || b === 0 || c === 0) {
            throw new Error('Triangle does not exist');
        }

        return {a, b, c}
    }
}

export default Triangle;