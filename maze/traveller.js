function Dude(start){
  this.start = start
  this.position = this.start;
  this.position.visited = true;
  this.position.neighbours.forEach((x) => x.neighbours.splice(x.neighbours.indexOf(this.position),1));
  this.path = [];
  this.path.push(this.position);

  this.update = function(){
    if (this.position == this.start){
      var check = true;
      for (var i = 0; i < cells.length; i++) {
        for (var j = 0; j < cells[i].length; j++) {
          if (cells[i][j].visited == false){
            check = false;
          }
        }
      }
      if (check){
        noLoop();
        console.log("The end!");
        return;
      }
    }
    this.chooseNext(this.position);
  }

  this.chooseNext = function(cell){
    //console.log("Current X: " + this.position.x + "\tCurrent Y: " + this.position.y);
    for (var i = (cell.neighbours.length-1); i >= 0; i--) {
      //console.log("Checking neighbour "+ i);
      //console.log(cell.neighbours[i].visited);
      if (cell.neighbours[i].visited == true){
        cell.neighbours.splice(i,1);
        //console.log("splicing!");
      }
    }
    if (cell.neighbours.length == 0) {
      this.regress();
      return;
    }
    //console.log("Here is who made it through: "+cell.neighbours.length);
    let n = floor(random(cell.neighbours.length));
    //console.log(cell.neighbours);
    this.travel(cell.neighbours[n]);
    cell.neighbours.splice(n,1);
  }

  this.travel = function(next){
    //console.log(next.visited);
    this.position.current = false;
    if (next.x > this.position.x) {
      next.left = false;
      this.position.right = false;
    }
    if (next.x < this.position.x) {
      next.right = false;
      this.position.left = false;
    }
    if (next.y > this.position.y) {
      next.top = false;
      this.position.bottom = false;
    }
    if (next.y < this.position.y) {
      next.bottom = false;
      this.position.top = false;
    }
    this.position = next;
    this.position.visited = true;
    this.position.current = true;
    // remove this new item its neighbours neighbours...
    //this.position.neighbours.forEach((x) => x.neighbours.splice(x.neighbours.indexOf(this.position),1));
    this.path.push(this.position);
  }

  this.regress = function(){
    this.position.current = false;
    this.position = this.path[(this.path.length-2)]
    this.position.current = true;
    this.path.splice(this.path.length-1,1);
  }
}
