var n = 20;
var points = [];
var gvt_x = 0;
var gvt_y = 1;
var height = 600;
var width = 600;
for (var i = 0; i < n; i++) {
  var bit = {
    x:Math.random()*width,
    y:Math.random()*height,
    v_x:(Math.random()*10),
    v_y:(Math.random()*10)
  };
  points.push(bit);
}


function setup(){
  createCanvas(400,400);
  frameRate(15);
}

function draw(){
  background(0);
  for (var i = 0; i < points.length; i++) {
    ellipse(points[i].x,points[i].y,10,10);
    points[i].x = points[i].x+(points[i].v_x*0.8);
    points[i].y = points[i].y+(points[i].v_y*0.8);
    if (points[i].x >= width) {
      points[i].v_x = -(points[i].v_x)
    } else if (points[i].x <= 0) {
      points[i].v_x = -(points[i].v_x)
    } else {
      points[i].v_x = points[i].v_x + gvt_x;
    }
    if (points[i].y >= height) {
      points[i].v_y = -(points[i].v_y)
    } else if (points[i].y <= 0) {
      points[i].v_y = -(points[i].v_y)
    } else {
      points[i].v_y = points[i].v_y + gvt_y;
    }



  };

}
