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
  } 



