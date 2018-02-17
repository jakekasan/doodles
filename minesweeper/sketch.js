var grid;
var w = 400/10;


function setup(){
  frameRate(2);
  createCanvas(400,400);
  cols = floor(400/w)
  rows = floor(400/w)
  grid = makeArray(20,20);
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      grid[i][j] = new Cell(i,j, w);
    }
  }
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      grid[i][j].check(grid);
    }
  }
}

function draw(){
  background(255);
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      grid[i][j].show();
    }
  }
}

function mousePressed(){
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      if ((mouseX > i*w) & (mouseY > j*w) & (mouseX < (i+1)*w) & (mouseY < (j+1)*w)) {
        grid[i][j].revealed = true;
        //console.log("X: ",i,"\tY: ",j);
      }
    }
  }
}
