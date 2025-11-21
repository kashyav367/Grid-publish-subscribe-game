console.log("Before Move:");
game1.render();
game2.render();

for(const p of game1.players){
    p.moveTowards(game1.destination.x , game1.destination.y , game1.cols,game1.rows);
}


for(const p of game2.players){
    p.moveTowards(game2.destination.x , game2.destination.y , game2.cols,game2.rows);
}

console.log("\nAfter one move:");
game1.render();
game2.render();

