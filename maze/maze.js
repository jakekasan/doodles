function Cell(x,y,w){
  this.x = x;
  this.y = y;
  this.w = w;
  this.visited = false;
  this.top = true;
  this.right = true;
  this.bottom = true;
  this.left = true;
  this.neighbours = [];

  this.show = function(){
    stroke(255);
    var x = this.x*this.w;
    var y = this.y*this.w;
    strokeWeight(1);
    if (this.top) {
      line(x,y,x+this.w,y);
    }
    if (this.right) {
      line(x+this.w,y,x+this.w,y+this.w);
    }
    if (this.bottom) {
      line(x+this.w,y+this.w,x,y+this.w);
    }
    if (this.left) {
      line(x,y,x,y+this.w);
    }

    noStroke();

    if (this.visited) {
      fill(255,0,255,50);
      if (this.current) {
        fill(255,255,0,100);
      }
      rect(x,y,this.w,this.w);
    }
  }
}
