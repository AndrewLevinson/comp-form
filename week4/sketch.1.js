// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let w = 600;
let h = 600;
let emoji;
let paused = false;

let bees = [];

let xoff1 = 0;
let xoff2 = 10000;

function preload() {
  emoji = loadImage(
    "https://raw.githubusercontent.com/AndrewLevinson/comp-form/master/week4/sketch-2/bee.png"
  );
}

class Bee {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
}

function setup() {
  createCanvas(600, 600, WEBGL);
  colorMode(HSB, 100);
  background(color(30, 15, 95));

  for (let i = 0; i < 30; i++) {
    bees[i] = new Bee(random(w * 2), random(h * 2), random(20, 40));
  }
}

function draw() {
  frameRate(30);
  moveStuff();
  drawStuff();
}

function moveStuff() {
  xoff1 += 0.02;
  xoff2 += 0.02;
}

function drawStuff() {
  translate(-300, -300);

  noStroke();
  background(color(30, 15, 95));

  background(80, 15, 95);

  for (const b of bees) {
    texture(emoji);
    ellipse(noise(xoff1) * w, noise(xoff2) * h, b.r);
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
    paused ? loop() : noLoop();
    paused = !paused;
  }
}
