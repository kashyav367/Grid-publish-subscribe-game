let playerCounter = 0;

export default class Player {
    constructor(symbol){
      this.symbol = symbol;
      this.x = null;
      this.y = null;
      this.isAlive = true;
    }

    static create(){
        const symbol = String.fromCharCode(65 + playerCounter++);
        return new Player(symbol);
    }

    setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
} 