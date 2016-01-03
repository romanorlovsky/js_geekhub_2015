import World from './src/World';
import Painter from './src/Painter';

let world = new World(30, 30);

world.setFirstGeneration(
    [17, 16],
    [14, 15],
    [15, 15],
    [12, 19],
    [20, 11],
    [15, 17],
    [16, 14]
);

let painter = new Painter('#game', 'div', 'active');

do {
    setTimeout(function () {
        painter.drawWorld(world.currentGeneration)
    }, 200);
} while (world.nextGeneration());