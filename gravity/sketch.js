const env = [];
const planets = [];
var gravity;
var rocket;
var debris;

function setup(){
  createCanvas(600,600);
  frameRate(35);
  rocket = new Rocket(createVector(100,100));
  debris = new Debris();
  env.push(rocket);
  env.push(debris);
  gravity = createVector(0,0);
  ground = new Ground();
}


function draw(){
  background(0);
  stroke(255);
  rocket.draw();
  rocket.update();
  debris.draw();
  debris.update();
}

function mousePressed(){
  if (rocket.thruster) {
    rocket.thruster = false;
  } else {
    rocket.thruster = true;
  }
}
