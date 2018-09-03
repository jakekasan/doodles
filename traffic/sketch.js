class Intersection {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.h = 10;
        this.w = 10;
    }

    draw(){
        stroke(255);
        fill(200);
        rect(this.x,this.y,this.w,this.h);
        
    }
}

class Car {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = 5;
    }

    moveTo(newLocation){
        
    }

    draw() {
        noStroke();
        fill(200);
        ellipse(this.x,this.y,this.r);
    }
}

var myPoint = new Intersection(150,150);
var car = new Car(50,50);

function setup(){
    // setup
    createCanvas(400,400);
    stroke(255);
    frameRate(30);
}



function draw(){
    background(0);
    myPoint.draw();
    car.draw();
}