var x = 0;
var y = 0;


function setup() {

  createCanvas(800, 800);
  stroke(0);
  strokeWeight(10);

}

function draw() {

  while (x < width) {
     
    line(x, y, x, height);

    x = x + 30;
     y = random(200, width);




  }
}