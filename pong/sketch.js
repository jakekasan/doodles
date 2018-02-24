var ball;
var mouse = false;

function setup(){
  createCanvas(400,400);
  ball = new Ball();
}

function draw(){
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    mouse = true;
  } else {
    mouse = false;
  }
  background(0);
  ball.draw();
  ball.update();

}
