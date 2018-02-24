function Ball(){
  this.x = random(width);
  this.y = random(height);
  this.v_x = random(-2,2);
  this.v_y = random(-2,2);

  this.draw = function(){
    ellipse(this.x,this.y,10);
  }

  this.update = function(){
    if (this.x >= width || this.x <= 0) {
      this.v_x = -(this.v_x);
    }
    if (this.y >= height || this.y <= 0) {
      this.v_y = -(this.v_y);
    }
    this.x = this.x + this.v_x;
    this.y = this.y + this.v_y;
    //this.checkMouse();
  }

  this.checkMouse = function(){
    let dist = Math.sqrt((mouseX-this.x)**2 + (mouseY-this.y)**2)
    if (dist < 400) {
      this.v_x = this.v_x + (mouseX-this.x)*((1/dist)*0.5);
      this.v_y = this.v_y + (mouseY-this.y)*((1/dist)*0.5);
      if (this.v_x < 0) {
        this.v_x = Math.max(this.v_x,-3);
      } else {
        this.v_x = Math.min(this.v_x,3);
      }
      if (this.v_y < 0) {
        this.v_y = Math.max(this.v_y,-3);
      } else {
        this.v_y = Math.min(this.v_y,3);
      }
    }
  }
}
