function makeArray(x,y){
  let arr = Array(x)
  for (var i = 0; i < x; i++) {
    arr[i] = Array(y)
  }
  return arr
}

function Cell(i,j,w){
  this.revealed = false;
  this.i = i;
  this.j = j;
  this.x = i*w;
  this.y = j*w;
  this.w = w;

  if (Math.random() < 0.2) {
    this.bee = true;
  } else {
    this.bee = false;
  }


}

Cell.prototype.show = function(){
  stroke(0);
  noFill();
  rect(this.x,this.y,this.w,this.w);
  if (this.revealed) {
    if (this.bee) {
      ellipse(this.x+(0.5*w),this.y+(0.5*w),this.w*0.5);
      background(255,0,0);
      console.log("Clicked on the Bee");
    } else {
      fill(127);
      noStroke();
      //rect(this.x,this.y,this.w,this.w);
      if (this.number > 0) {
        text(this.number,this.x+(this.w/4),this.y+(this.w/1.5));
      }
    }

  }
}

Cell.prototype.check = function(grid){
  if (!this.bee) {
    let i_max = grid.length - 1;
    let j_max = grid[0].length - 1;
    this.number = 0;
    for (var i = -1; i <= 1; i++) {
      for (var j = -1; j <= 1; j++) {
        let real_i = Math.min(i_max,Math.max(0,(this.i+i)));
        let real_j = Math.min(j_max,Math.max(0,(this.j+j)));
        if (grid[real_i][real_j].bee) {
          this.number = this.number + 1;
        }
      }
    }
    console.log(this.number);
  }
}


function pythag(a,b){
  return Math.sqrt(a**a,b**b);
}
