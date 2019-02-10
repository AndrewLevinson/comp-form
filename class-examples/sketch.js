function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  noStroke();

  let s = 30;
  let b = 90;

  background(color(random(100), s, b));
}

function draw() {}
