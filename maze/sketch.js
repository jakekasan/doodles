var cells = [];
var w = 20;

var current;

var dude;

function setup(){
  //frameRate(30);
  createCanvas(800,400);
  var x = floor(width/w);
  var y = floor(height/w);
  for (var i = 0; i < x; i++) {
    temp = [];
    for (var j = 0; j < y; j++){
      temp.push(new Cell(i,j,w))
    }
    cells.push(temp);
  }
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < y; j++){
      if (i != (x-1)) cells[i][j].neighbours.push(cells[i+1][j]);
      if (j != (y-1)) cells[i][j].neighbours.push(cells[i][j+1]);
      if (j > 0) cells[i][j].neighbours.push(cells[i][j-1]);
      if (i > 0) cells[i][j].neighbours.push(cells[i-1][j]);
    }
  }
  dude = new Dude(cells[0][0]);
}

function draw(){
  background(40);

  dude.update();

  for (var i = 0; i < cells.length; i++) {
    for (var j = 0; j < cells[i].length; j++) {
      cells[i][j].show();
    }
  }
}
