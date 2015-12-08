import Rectangle from './Rectangle'

class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }

    get perimeter() {
        return 4 * this.width;
    }

    get area() {
        return Math.pow(this.width, 2);
    }
}

export default Square;