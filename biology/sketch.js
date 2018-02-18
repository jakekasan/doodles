var growthRate = 0.001;
var myEnv = [];

function eucliDist(x1,y1,x2,y2){
  return Math.sqrt((x1-x2)**2 + (y1-y2)**2)
}

function Germ(env){
  this.x = Math.random()*500;
  this.y = Math.random()*500;
  this.s = Math.random()+2;
  this.v = { x:0,y:0};
  this.env = env;

  this.update = function(){
    this.s = this.s + this.s*growthRate;
    this.x = this.x + this.v.x;
    this.y = this.y + this.v.y;
    this.v.x = Math.min(2,this.v.x + (Math.random()-0.5));
    this.v.y = Math.min(2,this.v.y + (Math.random()-0.5));

    if (this.x >= width) {
      this.v.x = -(this.v.x)*10;
    }
    if (this.x <= 0) {
      this.v.x = -(this.v.x)*10;
    }
    if (this.y >= height) {
      this.v.y = -(this.v.y)*10;
    }
    if (this.y <= 0) {
      this.v.y = -(this.v.y)*10;
    }

  }

  this.draw = function(){
    for (var i = 0; i < env.length; i++) {
      let germ = env[i];
      let dist = eucliDist(germ.x,germ.y,this.x,this.y);
      if (dist < 100) {
        stroke(255);
        for (var i = 0; i < (100-dist); i++) {
          line(germ.x,germ.y,this.x+(Math.random()-0.5),this.y+(Math.random()-0.5))
        }

        this.v.x = Math.min(1,this.v.x + (germ.x - this.x)); // /(dist/100);
        this.v.y = Math.min(1,this.v.y + (germ.y - this.y)); // /(dist/100);
        if (dist < (this.s)/10) {
          if (this.s > germ.s){
            this.x = (germ.x+this.x)/2;
            this.y = (germ.y+this.y)/2;
            this.v.x = 0;
            this.v.y = 0;
            this.s = this.s + (germ.s)*10;
            delete germ;
          }

        }
      }
    }
    ellipse(this.x,this.y,this.s);
  }
}

function setup(){
  createCanvas(500,500);
  for (var i = 0; i < 10; i++) {
    let germ = new Germ(myEnv);
    myEnv.push(germ);
  }
}

function draw(){
  background(0);
  for (var i = 0; i < myEnv.length; i++) {
    let germ = myEnv[i];
    germ.draw();
    germ.update();
  }
  if (myEnv.length < 10){
    let newGerm = new Germ(myEnv);
    myEnv.push(newGerm);
  }
}
