// inspired by in-class example
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  fill(255, 255, 255);
}

function draw() {
  let rows = height;
  let cols = width;

  for (row = 0; row < rows; row++) {
    // random row color
    fill(random(255), random(255), random(255));
    for (col = 0; col < cols; col++) {
      drawThing(col * 50 + 25, row * 50 + 25);
    }
  }
}

let brownianRadius = 25;

function drawThing(x, y) {
  let radius;
  // brownian
  brownianRadius += random(-5, 5);
  radius = brownianRadius;
  stroke("black");
  ellipse(x, y, radius, radius);
}
