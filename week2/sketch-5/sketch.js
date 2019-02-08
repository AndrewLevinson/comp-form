let image;
function preload() {
  // load random image from Unsplash API
  image = loadImage("https://source.unsplash.com/random/300x300");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  colorMode(HSB, 100);
  noStroke();

  let s = 50;
  let b = 90;
  colorOptions = [
    color(10, s, b),
    color(30, s, b),
    color(50, s, b),
    color(70, s, b),
    color(90, s, b)
  ];
  background(colorOptions[floor(random(colorOptions.length))]);

  // center
  push();
  // translate(300, 300);

  for (i = 0; i < 15; i++) {
    rotate(i);
    texture(image);
    rect(random(-300, 300), random(-300, 300), random(15, 60), random(20, 400));
    ellipse(random(-300, 300), random(-300, 300), random(10, 80));
  }
  pop();
  translate(-300, -300);

  strokeWeight(4);
  stroke(colorOptions[floor(random(colorOptions.length))]);
  noFill();
  rect(0, 0, 600, 600);
}
