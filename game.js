export default class game{
    constructor(id,rows,cols){
        this.id = id;
        this.rows = rows;
        this.cols = cols;
        this.players = [];
        this.turn = 0;
        this.interval = null;
        this.destination = this.getRandomEmptyPosition();

    }


    static gameCounter = 1;

    static create (rows,cols){
        return new game(this.gameCounter++ , rows , cols);
    }


    getRandomEmptyPosition(){

        const x = Math.floor(Math.random() * this.rows);
        const y = Math.floor(Math.random() * this.cols);

        return{x , y };
    }

    addPlayer(player){
        const pos = this.getRandomEmptyPosition();
        player.setPosition(pos.x, pos.y);
        this.players.push(player);
    }

    render(){
        const grid = Array.from({ length: this.rows }, () => Array(this.cols).fill("_"));
         
        for(const player of this.players){
            if(player.isAlive) grid[player.x][player.y] = player.symbol;
        }

        grid[this.destination.x][this.destination.y] = "X";

        console.log(`\nGame ${String(this.id).padStart(2, "0")} Turn ${String(this.turn).padStart(3, "0")}:`);
        console.log("");
        for(const row of grid) console.log(row.join(" "));
        
    }

    checkCollisions() {
    const seen = {};

    for (const player of this.players) {
    if (!player.isAlive) continue;

    const posKey = `${player.x}-${player.y}`;

    if (seen[posKey]) {
    
      player.isAlive = false;
      seen[posKey].isAlive = false;
    } else {
      seen[posKey] = player;
    }
  }
 }

checkWinners() {
  for (const player of this.players) {
    const { x, y, isAlive, symbol } = player;
    const { x: destX, y: destY } = this.destination;

    if (isAlive && x === destX && y === destY) {
      console.log(`\n🏆 Player ${symbol} wins Game ${this.id}!\n`);
      return true; 
    }
  }

  return false; 
}

advanceTurn() {
    this.turn++;

  this.players.forEach(player => {
    if (player.isAlive) {
      player.moveTowards(this.destination.x, this.destination.y, this.cols, this.rows);
    }
  });

    this.checkCollisions();
    this.render();

    if (this.checkWinners()) {
      clearInterval(this.interval);
    }

    // Remove dead players
    this.players = this.players.filter(p => p.isAlive);
  }

   start(){
    this.render();
    this.interval = setInterval(() => this.advanceTurn(),5000)
   }
}


       

