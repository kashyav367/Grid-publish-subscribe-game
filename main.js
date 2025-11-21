// main.js
import Game from "./game.js";
import Player from "./player.js";

const game1 = Game.create(3, 4);
const game2 = Game.create(4, 4);

const playerA = Player.create();
const playerB = Player.create();
const playerC = Player.create();
const playerD = Player.create();

game1.addPlayer(playerA);
game1.addPlayer(playerB);
game2.addPlayer(playerC);
game2.addPlayer(playerD);

// game1.start();
// game2.start();


// console.log("Before Move:");
// game1.render();
// game2.render();

// for(const p of game1.players){
//     p.moveTowards(game1.destination.x , game1.destination.y , game1.cols,game1.rows);
// }


// for(const p of game2.players){
//     p.moveTowards(game2.destination.x , game2.destination.y , game2.cols,game2.rows);
// }

// console.log("\nAfter one move:");
// game1.render();
// game2.render();


// collision test
// manually force collision same cell
playerA.setPosition(1, 0);
playerB.setPosition(1, 0);
playerC .setPosition(2,2);
playerD.setPosition(2,2)

console.log("Before Collision:");
game1.render();
game2.render();

game1.checkCollisions();
game2.checkCollisions();

console.log("\nAfter Collision:");
game1.render();
game2.render();

