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

  moveTowards(targetX, targetY, gridWidth, gridHeight){
    if(!this.isAlive)return;

    const stepX = targetX > this.x ? 1 : targetX < this.x ? -1 : 0;
    const stepY = targetY > this.y ? 1 : targetY < this.y ? -1 : 0;
    
    let nextX = this.x + stepX;
    let nextY = this.y + stepY;

    this.x = Math.min(Math.max(nextX,0),gridHeight-1);
    this.y = Math.min(Math.max(nextY,0),gridWidth-1);

  }


} 