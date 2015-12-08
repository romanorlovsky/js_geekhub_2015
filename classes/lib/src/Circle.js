import Figure from './Figure'

class Circle extends Figure {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }

    get perimeter() {
        return 2 * Math.PI * this.r;
    }

    get area() {
        return Math.PI * Math.pow(this.r, 2);
    }
}

export default Circle;