import Polygon from './Polygon'

class Rectangle extends Polygon {
    constructor(width, height) {
        super(0, 0, 0, height, width, height, width, 0);

        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return 2 * (this.width + this.height);
    }

    get area() {
        return this.width * this.height;
    }
}

export default Rectangle;