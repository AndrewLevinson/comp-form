// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

let w = 300;
let h = 300;
let emoji;
let paused = false;

let xoff1 = 0;
let xoff2 = 10000;

function preload() {
  emoji = loadImage(
    "https://raw.githubusercontent.com/AndrewLevinson/comp-form/master/week4/sketch-2/bee.png"
  );
}

function setup() {
  createCanvas(w, h, WEBGL);
  colorMode(HSB, 100);
  background(color(30, 15, 95));
}

function draw() {
  // frameRate(30);
  moveStuff();
  drawStuff();
}

function moveStuff() {
  xoff1 += 0.03;
  xoff2 += 0.02;
}

function drawStuff() {
  translate(-w / 2, -h / 2);

  noStroke();
  background(80, 15, 95);

  texture(emoji);
  noiseSeed(1);
  ellipse(noise(xoff1) * w, noise(xoff2) * h, 30);
  noiseSeed(2);
  ellipse(noise(xoff1) * w, noise(xoff2) * h, 30);
  noiseSeed(3);
  ellipse(noise(xoff1) * w, noise(xoff2) * h, 30);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400) {
    paused ? loop() : noLoop();
    paused = !paused;
  }
}
