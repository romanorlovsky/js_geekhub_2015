import World from './src/World';
import Painter from './src/Painter';

let world = new World(30, 30);

/*world.setFirstGeneration(
 [16, 17],
 [15, 14],
 [15, 15],
 [19, 12],
 [11, 20],
 [17, 15],
 [14, 16]
 );*/

world.setFirstRandomGeneration(150);

let painter = new Painter('#game', 'div', 'active');

let loop;

let newGenerations = function () {
    painter.drawWorld(world.currentGeneration);

    if (world.nextGeneration()) {
        loop = setTimeout(newGenerations, 500);
    } else {
        clearTimeout(loop);
        painter.drawWorld(world.currentGeneration);
    }
};

newGenerations();