import {create} from './game.js';

const game1 = create(3, 4);
console.log("Game 1 grid:\n" + game1)

const game2 = create(4, 4);
console.log("Game 2 grid:\n" + game2)

let result = create(5,6);
console.log(result);


// import Player from './player';

// const game1 = Game.create(3, 4);
// const game2 = Game.create(4, 4);

// const playerA = Player.create();
// const playerB = Player.create();
// const playerC = Player.create();
// const playerD = Player.create();

// game1.addPlayer(playerA);
// game1.addPlayer(playerB);
// game2.addPlayer(playerC);
// game2.addPlayer(playerD);

// game1.start();
// game2.start();