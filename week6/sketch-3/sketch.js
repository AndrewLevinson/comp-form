// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.js

// Dot Challenge
let canvas = { width: 500, height: 500 };
let myImage;

function preload() {
  myImage = loadImage("image.jpg");
  // worldImage = loadImage("/pixels/sketches/world_100.png");
}

function setup() {
  createCanvas(canvas.width, canvas.height);
  colorMode(HSB, 100);
}

function draw() {
  background(20, 77, 70);

  fill(10, 50, 50);
  noStroke();

  let spacing = 715 / myImage.width;
  for (let y = 0; y < myImage.height; y++) {
    for (let x = 0; x < myImage.width; x++) {
      let in_color = myImage.get(x, y);
      let dot_size = (lightness(in_color) / 100) * 10;
      ellipse(
        x * spacing + spacing * 0.85,
        y * spacing + spacing * 0.85,
        dot_size
      );
    }
  }

  // we don't draw the image, its just input

  noLoop();
}
