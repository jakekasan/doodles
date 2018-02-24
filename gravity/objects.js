var Planet = function(){
  this.pos = createVector(random(width),random(height));
  this.mass = random(50,150);

  this.draw = function(){
    fill(0,255,0);
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.mass);
  }
}

var Debris = function(){
  this.pos = createVector(random(width),random(height));
  this.vel = createVector(random(1),random(1));
  this.acc = createVector(0,0);
  this.mass = 20;
  this.forces = [];

  this.update = function(){
    this.checkCollision();
    this.acc = this.addForces();
    this.vel.add(this.acc);
    this.vel.limit(0.5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.addForces = function(){
    let temp = createVector();
    temp.add(this.wallForce());
    for (var i = 0; i < this.forces.length; i++) {
      temp.add(this.forces[i]);
    }
    temp.limit(0.5);
    return temp;
  }

  this.checkCollision = function(){
    for (var i = 0; i < env.length; i++) {
      if (env[i] == this) {
        continue;
      }
      if (dist(env[i].pos.x,env[i].pos.y,this.pos.x,this.pos.y) < 20) {
        env[i].acceptExertion(this.vel.mult(this.mass));
        console.log("contact!");
      }
    }
  }

  this.acceptExertion = function(force){
    let result = p5.Vector.sub(p5.Vector.mult(this.vel,this.mass),force);
    this.forces.push(result);
  }

  this.wallForce = function(){
    if (this.pos.y >= height-10) return createVector(0,-1);
    if (this.pos.y <= 0) return createVector(0,1);
    if (this.pos.x >= width) return createVector(-1,0);
    if (this.pos.x <= 0) return createVector(1,0);
    return createVector(0,0);
  }

  this.draw = function(){
    fill(255,0,0);
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.mass);
  }
}

var Ground = function(){
  this.pos = createVector(0,height-10);
  this.mass = Infinity;

  this.draw = function(){
    rect(this.pos.x,this.pos.y,width,10);
  }
}


var Rocket = function(pos,heading,l,w){
  this.pos = pos || createVector(random(width),random(height));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.mass = 5;
  this.heading = heading || random(-PI,PI);
  this.l = l || 10;
  this.w = w || 10;
  this.top = createVector(0,(this.l/2));
  this.left = createVector(-(this.w/2),-(this.l/2));
  this.right = createVector((this.w/2),-(this.l/2));
  this.thruster_count = 100;
  this.thruster = false;
  this.forces = [];

  this.update = function(){
    this.heading = p5.Vector.sub(createVector(mouseX,mouseY),this.pos).heading();
    this.checkCollision();
    this.move();
    this.vel.limit(10);
    this.orient();
  }

  this.move = function(){
    this.acc.mult(0);
    this.acc = this.addForces();
    this.acc.limit(1);
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
  }

  // force functions

  this.addForces = function(){
    let vect = createVector(0,0);
    vect.add(this.wallForce());
    vect.add(this.thrusterForce());
    vect.add(gravity);
    return vect;
  }

  this.wallForce = function(){
    if (this.pos.y >= height-10) return createVector(0,-1);
    if (this.pos.y <= 0) return createVector(0,1);
    if (this.pos.x >= width) return createVector(-1,0);
    if (this.pos.x <= 0) return createVector(1,0);
    return createVector(0,0);
  }

  this.thrusterForce = function(){
    if (!this.thruster){
      return createVector(0,0);
    }
    let y;
    if (this.heading > 0) {
      y = 50;
    } else {
      y = -50;
    }
    let theta = this.getTheta(this.heading);
    let x = -tan(theta)*y;
    let temp = createVector(x,y);
    temp.limit(1.25);
    return temp;
  }

  this.checkCollision = function(){
    for (var i = 0; i < env.length; i++) {
      if (env[i] == this) {
        continue;
      }
      if (dist(env[i].pos.x,env[i].pos.y,this.pos.x,this.pos.y) < 20) {
        env[i].acceptExertion(this.vel.mult(this.mass));
        console.log("contact!");
      }
    }
  }

  this.acceptExertion = function(force){
    let result = p5.Vector.sub(p5.Vector.mult(this.vel,this.mass),force);
    this.forces.push(result);
  }


  this.draw = function(){
    if (this.thruster) {
      fill(255,255,0);
      ellipse(this.pos.x,this.pos.y,this.l);
    }
    fill(0);
    stroke(255);
    triangle(this.top.x+this.pos.x,this.top.y+this.pos.y,this.left.x+this.pos.x,this.left.y+this.pos.y,this.right.x+this.pos.x,this.right.y+this.pos.y);
  }

  this.orient = function(){
    let theta = this.getTheta(this.heading);
    this.top.x = cos(theta)*(0)-sin(theta)*(this.l/2);
    this.top.y = sin(theta)*(0)+cos(theta)*(this.l/2);
    this.left.x = cos(theta)*(-(this.w/2))-sin(theta)*(0-(this.l/2));
    this.left.y = sin(theta)*(-(this.w/2))+cos(theta)*(0-(this.l/2));
    this.right.x = cos(theta)*(this.w/2)-sin(theta)*(0-(this.l/2));
    this.right.y = sin(theta)*(this.w/2)+cos(theta)*(0-(this.l/2));
  }

  this.getTheta = function(heading){
    heading = (heading - (PI/2)) % (PI*2)

    return(heading+(PI*2))
  }
}
