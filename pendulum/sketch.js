var height = 400;
var width = 400;
var anchor = {
  x:width/2,
  y:height/2
};

var objList = [];

var gravity = 2;

function Tether(start,end,lineLength){
  this.start = start;
  this.end = end;
  this.lineLength = lineLength;
  this.draw = function(){
    stroke(255);
    line(this.start.x,this.start.y,this.end.x,this.end.y);
  }
  this.update = function(){
    let a = this.end.x - this.start.x;
    let b = this.end.y - this.start.y;
    let c = Math.sqrt(a**2 + b**2);
    if (c >= lineLength) {

    }
  }
}

function Ball(){
  this.x = Math.random()*width;
  this.y = Math.random()*height/2;
  this.v_x = 0;
  this.v_y = 0;

  this.draw = function(){
    ellipse(this.x,this.y,10);
  }

  this.update = function(){
    this.x = this.x + this.v_x;
    this.y = this.y + this.v_y;
    this.v_y = this.v_y + gravity;
  }
}


function setup(){
  frameRate(24);
  createCanvas(400,400);
  var ball = new Ball();
  var myLine = new Tether(anchor,ball);
  objList.push(ball);
  objList.push(myLine);

}

function draw(){
  background(0);
  ellipse(anchor.x,anchor.y,20);
  for (var i = 0; i < objList.length; i++) {
    objList[i].draw();
    objList[i].update();
  }

}
