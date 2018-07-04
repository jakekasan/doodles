var numOfTiles = 10;

var board = new Board(10,10,40,40);


function setup(){
    createCanvas(400,400);
}

function draw(){
    background(0);
    // var count = 0;
    // var xW = width/numOfTiles;
    // var yH = height/numOfTiles;
    // for (let i = 0; i < numOfTiles; i++){
    //     for (let j = 0; j < numOfTiles; j++){
    //         noStroke();
    //         if (count % 2 == 0){
    //             fill(100);
    //         } else {
    //             fill(200);
    //         }
    //         rect(xW*j,yH*i,xW,yH);
    //         count++;
    //     }
    //     count++;
    // }
    board.update();


}