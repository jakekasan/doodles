class Board {
    constructor(sizeX,sizeY,cellWidth,cellHeight){
        this.cells = makeBoard(sizeX,sizeY);
        this.playerPos = 0;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
    }

    makeBoard(sizeX,sizeY){
        let cells = [];
        for (let y = sizeY - 1; y > -1; y--){
            if (y % 2 == 0){
                for (let x = sizeX-1; x > -1; x--){
                    cells.push(new Cell(x,y));
                }
            } else {
                for (let x = 0; x < sizeX; x++){
                    cells.push(new Cell(x,y));
                }
            }
        }
        return cells;
    }

    checkMove(position,move){
        if ((this.cells.length-position) < move){
            return false;
        }
        return true;
    }

    getMove(){
        let move = Math.ceiling(Math.random()*6);
        console.log(move);
        if (checkMove(this.playerPos,move)){
            this.playerPos += move;
            console.log("Moving player to $(this.Playerpos+move)");
        } else {
            console.log("Invalid move...")
        }
    }

    update(){
        if (this.playerPos < this.cells.length-1){
            getMove();
        }
    }

    draw(){
        for (let i = 0; i < this.cells.length; i++) {
            let tile = this.cells[i];
            if (i % 2 == 0){
                fill(100);
            } else {
                fill(200);
            }
            rect(x,y,this.cellWidth,this.cellHeight);
        }
    }


}

class Cell {
    constructor(x,y){
        this.x = x;
        this.y = y;
        // this.color = 100;
        this.isSnake = false;
        this.isLadder = false;
    }
}