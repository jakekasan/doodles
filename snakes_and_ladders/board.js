class Board {
    constructor(sizeX,sizeY,cellWidth,cellHeight){
        this.cells = this.makeBoard(sizeX,sizeY);
        this.playerPos = 0;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
    }

    makeBoard(sizeX,sizeY){
        let cells = [];
        for (let y = sizeY - 1; y > -1; y--){
            if (y % 2 == 0){
                for (let x = sizeX-1; x > -1; x--){
                    var sol = 0;
                    if (Math.random() < 0.05){
                        sol = -5;
                    }
                    cells.push(new Cell(x,y,sol));
                }
            } else {
                for (let x = 0; x < sizeX; x++){
                    var sol = 0;
                    if (Math.random() < 0.05){
                        sol = -5;
                    }
                    cells.push(new Cell(x,y,sol));
                }
            }
        }
        return cells;
    }

    checkMove(position,move){
        if ((this.cells.length-position-1) < move){
            return false;
        }
        return true;
    }

    getMove(){
        let move = Math.ceil(Math.random()*6);
        console.log(move);
        if (this.checkMove(this.playerPos,move)){
            this.playerPos += move;
            console.log(`Moving player to ${this.playerPos}`);
        } else {
            console.log("Invalid move...")
        }
    }

    update(){
        this.draw();
        if (!this.cells[this.playerPos].snakeOrLadder == 0){
            this.playerPos = this.playerPos + this.cells[this.playerPos].snakeOrLadder;
            console.log("Snake!!!");
            return
        }
        if (this.playerPos < this.cells.length-1){
            this.getMove();
            return
        }
    }

    draw(){
        noStroke();

        // draw board
        for (let i = 0; i < this.cells.length; i++) {
            let tile = this.cells[i];
            if (i % 2 == 0){
                fill(100);
            } else {
                fill(200);
            }
            noStroke();
            rect(tile.x*this.cellWidth,tile.y*this.cellHeight,this.cellWidth,this.cellHeight);
            if (!tile.snakeOrLadder == 0){
                let second = this.cells[this.cells[i].snakeOrLadder + i]
                stroke(255,0,0);
                let Ax = tile.x*this.cellWidth+this.cellWidth*0.5;
                let Ay = tile.y*this.cellHeight+this.cellHeight*0.5;
                let Bx = second.x*this.cellWidth+this.cellWidth*0.5;
                let By = second.y*this.cellHeight+this.cellHeight*0.5;
                line(Ax,Ay,Bx,By);
            }
        }

        // then draw player
        let playerX = this.cells[this.playerPos].x*(this.cellWidth);
        let playerY = this.cells[this.playerPos].y*(this.cellHeight);
        fill(255,0,0);
        ellipse(playerX+(this.cellWidth*0.5),playerY+(this.cellHeight*0.5),this.cellWidth/2);
    }
}

class Cell {
    constructor(x,y,sol){
        this.x = x;
        this.y = y;
        // this.color = 100;
        this.snakeOrLadder = sol;
    }
}