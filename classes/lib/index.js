import Polygon from './src/Polygon'
import Rectangle from './src/Rectangle'
import Square from './src/Square'
import Triangle from './src/Triangle'
import Circle from './src/Circle'

let polygon = new Polygon(0, 0, 2, 2, 0, 4);

console.log('polygon perimeter = ', polygon.perimeter);
console.log('=======================================');

let rectangle = new Rectangle(2, 4);

console.log('rectangle perimeter = ', rectangle.perimeter);
console.log('rectangle area = ', rectangle.area);
console.log('=======================================');

let square = new Square(4);

console.log('square perimeter = ', square.perimeter);
console.log('square area = ', square.area);
console.log('=======================================');

let triangle = new Triangle(0, 0, 2, 2, 0, 4);

console.log('triangle perimeter = ', triangle.perimeter);
console.log('triangle area = ', triangle.area);
console.log('=======================================');

let circle = new Circle(0, 0, 4);

console.log('circle perimeter = ', circle.perimeter);
console.log('circle area = ', circle.area);
console.log('=======================================');