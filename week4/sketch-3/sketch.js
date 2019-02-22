// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let canvas = { width: 600, height: 600 };
let inc = 0.01;
let start = 0;
let x = 0;

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB);
}

function draw() {
  background(20);
  stroke(100);
  noFill();

  // shape inspired by code train demo
  // noise line
  beginShape();
  let xoff = 0;
  for (i = 0; i < canvas.width; i++) {
    stroke(100);
    let y = noise(xoff) * canvas.height;
    vertex(i, y);
    xoff += inc;
  }
  endShape();

  // ball
  fill(10, 80, 90);
  stroke(10, 80, 50);
  let y = noise(start) * canvas.height;
  ellipse(x, y, 12);
  start += inc;

  // replay automatically
  if (x > canvas.width) {
    x = 0;
    start = inc;
  } else {
    x++;
  }
}
